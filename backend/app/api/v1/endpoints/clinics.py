"""
Clinic endpoints
"""
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from sqlalchemy import or_, func
from slowapi import Limiter
from slowapi.util import get_remote_address

from app.core.dependencies import get_db, get_current_user, get_current_clinic_owner
from app.models.user import User
from app.models.clinic import Clinic, ClinicStatus
from app.schemas.clinic import ClinicCreate, ClinicUpdate, ClinicResponse, ClinicListResponse
from app.schemas.common import APIResponse

router = APIRouter()
limiter = Limiter(key_func=get_remote_address)


@router.get("", response_model=APIResponse)
@limiter.limit("60/minute")
async def list_clinics(
    query: Optional[str] = Query(None),
    city: Optional[str] = Query(None),
    treatment: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None, alias="minPrice"),
    max_price: Optional[float] = Query(None, alias="maxPrice"),
    lang: str = Query("en"),
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db),
):
    """List clinics with filters"""
    # Base query - only approved clinics
    q = db.query(Clinic).filter(Clinic.status == ClinicStatus.APPROVED.value)

    # Text search using PostgreSQL trigram
    if query:
        q = q.filter(
            or_(
                Clinic.name_en.ilike(f"%{query}%"),
                Clinic.name_ar.ilike(f"%{query}%"),
                Clinic.name_tr.ilike(f"%{query}%"),
                Clinic.description_en.ilike(f"%{query}%"),
            )
        )

    # City filter
    if city:
        q = q.filter(Clinic.city.ilike(f"%{city}%"))

    # Treatment filter (via treatments table)
    if treatment:
        from app.models.treatment import Treatment
        q = q.join(Treatment).filter(
            or_(
                Treatment.name_en.ilike(f"%{treatment}%"),
                Treatment.category.ilike(f"%{treatment}%"),
            )
        )

    # Price filter (via treatments)
    if min_price or max_price:
        from app.models.treatment import Treatment
        if not treatment:
            q = q.join(Treatment)
        if min_price:
            q = q.filter(Treatment.price_min_usd >= min_price)
        if max_price:
            q = q.filter(Treatment.price_max_usd <= max_price)

    # Get total count
    total = q.count()

    # Pagination
    clinics = q.offset((page - 1) * page_size).limit(page_size).all()

    return APIResponse(
        success=True,
        data=ClinicListResponse(
            items=[ClinicResponse.from_orm(c) for c in clinics],
            total=total,
            page=page,
            page_size=page_size,
        ).dict(),
    )


@router.get("/{clinic_id}", response_model=APIResponse)
@limiter.limit("60/minute")
async def get_clinic(clinic_id: int, db: Session = Depends(get_db)):
    """Get clinic by ID"""
    clinic = db.query(Clinic).filter(Clinic.id == clinic_id).first()
    if not clinic:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Clinic not found",
        )

    return APIResponse(
        success=True,
        data=ClinicResponse.from_orm(clinic).dict(),
    )


@router.post("", response_model=APIResponse)
@limiter.limit("10/minute")
async def create_clinic(
    clinic_data: ClinicCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Create a new clinic (pending approval)"""
    import re

    # Generate slug
    slug = re.sub(r"[^a-z0-9]+", "-", clinic_data.name_en.lower()).strip("-")
    slug = re.sub(r"-+", "-", slug)

    # Check if slug exists
    existing = db.query(Clinic).filter(Clinic.slug == slug).first()
    if existing:
        slug = f"{slug}-{current_user.id}"

    clinic = Clinic(
        **clinic_data.dict(),
        slug=slug,
        owner_id=current_user.id,
        status=ClinicStatus.PENDING.value,
    )
    db.add(clinic)
    db.commit()
    db.refresh(clinic)

    return APIResponse(
        success=True,
        data=ClinicResponse.from_orm(clinic).dict(),
    )


@router.put("/{clinic_id}", response_model=APIResponse)
async def update_clinic(
    clinic_id: int,
    clinic_data: ClinicUpdate,
    current_user: User = Depends(get_current_clinic_owner),
    db: Session = Depends(get_db),
):
    """Update clinic (clinic owner only)"""
    clinic = db.query(Clinic).filter(Clinic.id == clinic_id).first()
    if not clinic:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Clinic not found",
        )

    # Check ownership (unless admin)
    if current_user.role != "admin" and clinic.owner_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to update this clinic",
        )

    # Update fields
    update_data = clinic_data.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(clinic, field, value)

    db.commit()
    db.refresh(clinic)

    return APIResponse(
        success=True,
        data=ClinicResponse.from_orm(clinic).dict(),
    )


@router.post("/{clinic_id}/verify", response_model=APIResponse)
async def verify_clinic(
    clinic_id: int,
    current_user: User = Depends(get_current_clinic_owner),
    db: Session = Depends(get_db),
):
    """Verify/approve clinic (admin only)"""
    if current_user.role != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admin access required",
        )

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

