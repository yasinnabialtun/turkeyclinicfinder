"""
Price estimator endpoints
"""
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from app.core.dependencies import get_db
from app.models.treatment import Treatment
from app.schemas.common import APIResponse

router = APIRouter()


@router.get("/estimate", response_model=APIResponse)
async def estimate_price(
    treatment_type: str = Query(..., alias="treatmentType"),
    units: int = Query(1, ge=1),
    db: Session = Depends(get_db),
):
    """Estimate price for treatment"""
    # Get average price for treatment type
    treatments = (
        db.query(Treatment)
        .filter(Treatment.category == treatment_type)
        .all()
    )

    if not treatments:
        return APIResponse(
            success=True,
            data={
                "estimated_price": 0,
                "price_range": {"min": 0, "max": 0},
                "message": "No treatments found for this type",
            },
        )

    prices = []
    for treatment in treatments:
        if treatment.price_min_usd:
            prices.append(treatment.price_min_usd)
        if treatment.price_max_usd:
            prices.append(treatment.price_max_usd)

    if not prices:
        return APIResponse(
            success=True,
            data={
                "estimated_price": 0,
                "price_range": {"min": 0, "max": 0},
                "message": "Price information not available",
            },
        )

    avg_price = sum(prices) / len(prices)
    min_price = min(prices)
    max_price = max(prices)

    estimated_total = avg_price * units

    return APIResponse(
        success=True,
        data={
            "estimated_price": round(estimated_total, 2),
            "price_per_unit": round(avg_price, 2),
            "price_range": {
                "min": round(min_price * units, 2),
                "max": round(max_price * units, 2),
            },
            "units": units,
            "treatment_type": treatment_type,
        },
    )

