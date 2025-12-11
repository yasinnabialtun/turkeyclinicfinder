"""
Search and match endpoints
"""
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from slowapi import Limiter
from slowapi.util import get_remote_address

from app.core.dependencies import get_db
from app.models.clinic import Clinic, ClinicStatus
from app.models.treatment import Treatment
from app.schemas.search import MatchRequest, MatchResponse, SearchSuggestRequest, SearchSuggestResponse
from app.schemas.common import APIResponse
from app.services.ai_service import ai_service

router = APIRouter()
limiter = Limiter(key_func=get_remote_address)


@router.post("/match", response_model=APIResponse)
@limiter.limit("30/minute")
async def match_clinics(
    request: MatchRequest,
    db: Session = Depends(get_db),
):
    """AI-powered clinic matching"""
    # Get all approved clinics
    clinics = db.query(Clinic).filter(Clinic.status == ClinicStatus.APPROVED.value).all()

    # Convert to dict format for matching
    clinics_data = []
    for clinic in clinics:
        # Get treatments for this clinic
        treatments = db.query(Treatment).filter(Treatment.clinic_id == clinic.id).all()
        treatment_names = [t.name_en for t in treatments]

        clinics_data.append({
            "id": clinic.id,
            "name_en": clinic.name_en,
            "description_en": clinic.description_en or "",
            "city": clinic.city,
            "rating": clinic.rating,
            "treatments": treatment_names,
        })

    # Build query text for matching
    query_text = f"{request.treatment}"
    if request.city_preference:
        query_text += f" in {request.city_preference}"
    if request.budget_usd:
        query_text += f" budget {request.budget_usd} USD"

    # Use AI service to match
    matches = await ai_service.match_clinics(query_text, clinics_data, top_k=3)

    # Format response
    results = []
    for match in matches:
        clinic = db.query(Clinic).filter(Clinic.id == match["id"]).first()
        if clinic:
            results.append(MatchResponse(
                clinic_id=clinic.id,
                clinic_name=clinic.name_en,
                confidence_score=match["confidence_score"],
                reasoning=match.get("reasoning"),
                match_criteria=match.get("match_criteria"),
            ).dict())

    return APIResponse(
        success=True,
        data=results,
    )


@router.get("/suggest", response_model=APIResponse)
@limiter.limit("60/minute")
async def search_suggest(
    q: str = Query(..., min_length=1),
    lang: str = Query("en"),
    db: Session = Depends(get_db),
):
    """Search suggestions/autocomplete"""
    if len(q) < 2:
        return APIResponse(success=True, data={"suggestions": []})

    # Get suggestions from clinic names and treatments
    suggestions = set()

    # Clinic names
    clinics = db.query(Clinic).filter(
        Clinic.name_en.ilike(f"{q}%"),
        Clinic.status == ClinicStatus.APPROVED.value,
    ).limit(5).all()
    for clinic in clinics:
        suggestions.add(clinic.name_en)

    # Treatment names
    treatments = db.query(Treatment).filter(
        Treatment.name_en.ilike(f"{q}%"),
    ).limit(5).all()
    for treatment in treatments:
        suggestions.add(treatment.name_en)

    return APIResponse(
        success=True,
        data={"suggestions": list(suggestions)[:10]},
    )

