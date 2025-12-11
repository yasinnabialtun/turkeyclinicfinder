"""
Admin endpoints
"""
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from sqlalchemy import func
from slowapi import Limiter
from slowapi.util import get_remote_address

from app.core.dependencies import get_db, get_current_admin_user
from app.models.user import User
from app.models.clinic import Clinic, ClinicStatus
from app.schemas.common import APIResponse

router = APIRouter()
limiter = Limiter(key_func=get_remote_address)


@router.get("/clinics", response_model=APIResponse)
async def list_clinics_admin(
    status: Optional[str] = Query(None),
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db),
):
    """List clinics for admin (with status filter)"""
    q = db.query(Clinic)

    if status:
        q = q.filter(Clinic.status == status)

    total = q.count()
    clinics = q.offset((page - 1) * page_size).limit(page_size).all()

    from app.schemas.clinic import ClinicResponse

    return APIResponse(
        success=True,
        data={
            "items": [ClinicResponse.from_orm(c).dict() for c in clinics],
            "total": total,
            "page": page,
            "page_size": page_size,
        },
    )


@router.post("/clinics/{clinic_id}/approve", response_model=APIResponse)
async def approve_clinic(
    clinic_id: int,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db),
):
    """Approve a clinic"""
    clinic = db.query(Clinic).filter(Clinic.id == clinic_id).first()
    if not clinic:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Clinic not found",
        )

    clinic.status = ClinicStatus.APPROVED.value
    clinic.verified = True
    db.commit()

    return APIResponse(
        success=True,
        data={"message": "Clinic approved", "clinic_id": clinic_id},
    )


@router.get("/stats", response_model=APIResponse)
async def get_admin_stats(
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db),
):
    """Get admin dashboard statistics"""
    from app.models.review import Review
    from app.models.lead import Lead
    from app.models.booking import Booking

    stats = {
        "total_clinics": db.query(func.count(Clinic.id)).scalar(),
        "pending_clinics": db.query(func.count(Clinic.id))
        .filter(Clinic.status == ClinicStatus.PENDING.value)
        .scalar(),
        "approved_clinics": db.query(func.count(Clinic.id))
        .filter(Clinic.status == ClinicStatus.APPROVED.value)
        .scalar(),
        "total_reviews": db.query(func.count(Review.id)).scalar(),
        "total_leads": db.query(func.count(Lead.id)).scalar(),
        "new_leads": db.query(func.count(Lead.id))
        .filter(Lead.status == "new")
        .scalar(),
        "total_bookings": db.query(func.count(Booking.id)).scalar(),
        "total_users": db.query(func.count(User.id)).scalar(),
    }

    return APIResponse(
        success=True,
        data=stats,
    )

