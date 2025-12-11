"""
AI endpoints
"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from slowapi import Limiter
from slowapi.util import get_remote_address

from app.core.dependencies import get_db
from app.schemas.ai import (
    GenerateArticleRequest,
    GenerateArticleResponse,
    SentimentAnalysisRequest,
    SentimentAnalysisResponse,
)
from app.schemas.common import APIResponse
from app.services.ai_service import ai_service

router = APIRouter()
limiter = Limiter(key_func=get_remote_address)


@router.post("/generate-article", response_model=APIResponse)
@limiter.limit("10/minute")
async def generate_article(
    request: GenerateArticleRequest,
):
    """Generate SEO article using AI"""
    result = await ai_service.generate_article(
        topic=request.topic,
        language=request.language,
        keywords=request.keywords,
        target_length=request.target_length or 1000,
    )

    return APIResponse(
        success=True,
        data=result,
    )


@router.post("/sentiment", response_model=APIResponse)
@limiter.limit("30/minute")
async def analyze_sentiment(
    request: SentimentAnalysisRequest,
):
    """Analyze sentiment of text"""
    result = await ai_service.analyze_sentiment(
        text=request.text,
        language=request.language or "en",
    )

    return APIResponse(
        success=True,
        data=result,
    )


@router.post("/match", response_model=APIResponse)
@limiter.limit("30/minute")
async def ai_match(
    request: dict,
    db: Session = Depends(get_db),
):
    """AI-powered clinic matching (same as /api/search/match but with LLM explanation)"""
    from app.api.v1.endpoints.search import match_clinics
    from app.schemas.search import MatchRequest

    match_request = MatchRequest(**request)
    return await match_clinics(match_request, db)

