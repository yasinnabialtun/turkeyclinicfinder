"""
Review endpoints
"""
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import func
from slowapi import Limiter
from slowapi.util import get_remote_address

from app.core.dependencies import get_db, get_current_user, get_optional_user
from app.models.user import User
from app.models.clinic import Clinic
from app.models.review import Review
from app.schemas.review import ReviewCreate, ReviewResponse, ReviewSummaryResponse
from app.schemas.common import APIResponse
from app.services.ai_service import ai_service

router = APIRouter()
limiter = Limiter(key_func=get_remote_address)


@router.post("/clinics/{clinic_id}/reviews", response_model=APIResponse)
@limiter.limit("10/minute")
async def create_review(
    clinic_id: int,
    review_data: ReviewCreate,
    current_user: Optional[User] = Depends(get_optional_user),
    db: Session = Depends(get_db),
):
    """Create a review for a clinic"""
    # Verify clinic exists
    clinic = db.query(Clinic).filter(Clinic.id == clinic_id).first()
    if not clinic:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Clinic not found",
        )

    # Create review
    review = Review(
        clinic_id=clinic_id,
        user_id=current_user.id if current_user else None,
        **review_data.dict(),
    )

    # Analyze sentiment
    review_text = review_data.content_en or review_data.content_ar or review_data.content_tr or ""
    if review_text:
        sentiment = await ai_service.analyze_sentiment(review_text)
        review.sentiment_score = sentiment["sentiment_score"]
        review.sentiment_label = sentiment["sentiment_label"]
        review.sentiment_highlights = sentiment.get("highlights", [])

    db.add(review)
    db.commit()

    # Update clinic rating
    avg_rating = db.query(func.avg(Review.rating)).filter(Review.clinic_id == clinic_id).scalar()
    review_count = db.query(func.count(Review.id)).filter(Review.clinic_id == clinic_id).scalar()
    clinic.rating = float(avg_rating) if avg_rating else 0.0
    clinic.review_count = review_count
    db.commit()

    db.refresh(review)
    return APIResponse(
        success=True,
        data=ReviewResponse.from_orm(review).dict(),
    )


@router.get("/clinics/{clinic_id}/reviews", response_model=APIResponse)
@limiter.limit("60/minute")
async def get_clinic_reviews(
    clinic_id: int,
    page: int = 1,
    page_size: int = 20,
    db: Session = Depends(get_db),
):
    """Get reviews for a clinic"""
    reviews = (
        db.query(Review)
        .filter(Review.clinic_id == clinic_id, Review.is_published == True)
        .offset((page - 1) * page_size)
        .limit(page_size)
        .all()
    )

    return APIResponse(
        success=True,
        data=[ReviewResponse.from_orm(r).dict() for r in reviews],
    )


@router.get("/summary/{clinic_id}", response_model=APIResponse)
@limiter.limit("60/minute")
async def get_review_summary(
    clinic_id: int,
    db: Session = Depends(get_db),
):
    """Get review summary with sentiment analysis"""
    reviews = db.query(Review).filter(
        Review.clinic_id == clinic_id,
        Review.is_published == True,
    ).all()

    if not reviews:
        return APIResponse(
            success=True,
            data=ReviewSummaryResponse(
                clinic_id=clinic_id,
                total_reviews=0,
                average_rating=0.0,
                sentiment_breakdown={},
                highlights=[],
            ).dict(),
        )

    # Calculate statistics
    total_reviews = len(reviews)
    average_rating = sum(r.rating for r in reviews) / total_reviews

    # Sentiment breakdown
    sentiment_breakdown = {
        "positive": sum(1 for r in reviews if r.sentiment_label == "positive"),
        "negative": sum(1 for r in reviews if r.sentiment_label == "negative"),
        "neutral": sum(1 for r in reviews if r.sentiment_label == "neutral" or r.sentiment_label is None),
    }

    # Collect highlights
    highlights = []
    for review in reviews:
        if review.sentiment_highlights:
            highlights.extend(review.sentiment_highlights)

    return APIResponse(
        success=True,
        data=ReviewSummaryResponse(
            clinic_id=clinic_id,
            total_reviews=total_reviews,
            average_rating=float(average_rating),
            sentiment_breakdown=sentiment_breakdown,
            highlights=highlights[:10],  # Top 10 highlights
        ).dict(),
    )

