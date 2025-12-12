"""
Lead endpoints
"""
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from slowapi import Limiter
from slowapi.util import get_remote_address

from app.core.dependencies import get_db, get_current_user, get_current_clinic_owner
from app.models.user import User
from app.models.lead import Lead, LeadStatus
from app.schemas.lead import LeadCreate, LeadResponse
from app.schemas.common import APIResponse
from app.services.email_service import EmailService

router = APIRouter()
limiter = Limiter(key_func=get_remote_address)


@router.post("", response_model=APIResponse)
@limiter.limit("10/minute")
async def create_lead(
    lead_data: LeadCreate,
    current_user: Optional[User] = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Create a lead/inquiry"""
    # Map treatment to treatment_interest for backward compatibility
    lead_dict = lead_data.dict()
    if 'treatment' in lead_dict and not lead_dict.get('treatment_interest'):
        lead_dict['treatment_interest'] = lead_dict.get('treatment')
    
    # Store additional fields in metadata
    metadata_fields = {
        'accommodation_needed': lead_dict.get('accommodation_needed', False),
        'travel_assistance_needed': lead_dict.get('travel_assistance_needed', False),
        'urgency': lead_dict.get('urgency', 'normal'),
        'medical_history': lead_dict.get('medical_history'),
        'number_of_people': lead_dict.get('number_of_people', '1'),
        'preferred_language': lead_dict.get('preferred_language', 'en'),
    }
    
    # Remove metadata fields from lead_dict before creating Lead
    for key in metadata_fields.keys():
        lead_dict.pop(key, None)
    
    try:
        lead = Lead(
            **lead_dict,
            metadata=metadata_fields,
            user_id=current_user.id if current_user else None,
            status=LeadStatus.NEW.value,
        )
        db.add(lead)
        db.commit()
        db.refresh(lead)
    except Exception as e:
        db.rollback()
        import structlog
        logger = structlog.get_logger()
        logger.error("create_lead_error", error=str(e))
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create lead",
        )

    # Send email notifications
    try:
        # Prepare lead data with metadata for email
        lead_dict = {
            'id': lead.id,
            'name': lead.name,
            'email': lead.email,
            'phone': lead.phone,
            'country': lead.country,
            'treatment': lead.treatment or lead.treatment_interest,
            'budget': lead.budget,
            'preferred_date': lead.preferred_date,
            'message': lead.message,
            'metadata': lead.metadata or {},
        }
        # Send notification to admin/clinic
        EmailService.send_consultation_notification(lead_dict)
        # Send confirmation to patient
        EmailService.send_consultation_confirmation(lead_dict)
    except Exception as e:
        # Log error but don't fail the request
        import logging
        logger = logging.getLogger(__name__)
        logger.error(f"Failed to send email notifications: {str(e)}")

    return APIResponse(
        success=True,
        data=LeadResponse.from_orm(lead).dict(),
    )


@router.get("", response_model=APIResponse)
async def list_leads(
    status: Optional[str] = Query(None),
    clinic_id: Optional[int] = Query(None),
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    current_user: User = Depends(get_current_clinic_owner),
    db: Session = Depends(get_db),
):
    """List leads (clinic owner or admin only)"""
    q = db.query(Lead)

    # Filter by clinic if clinic owner (not admin)
    if current_user.role == "clinic_owner":
        # Get user's clinics
        from app.models.clinic import Clinic
        user_clinic_ids = [c.id for c in db.query(Clinic).filter(Clinic.owner_id == current_user.id).all()]
        if user_clinic_ids:
            q = q.filter(Lead.clinic_id.in_(user_clinic_ids))
        else:
            q = q.filter(False)  # No clinics, no leads

    if clinic_id:
        q = q.filter(Lead.clinic_id == clinic_id)

    if status:
        q = q.filter(Lead.status == status)

    total = q.count()
    leads = q.offset((page - 1) * page_size).limit(page_size).all()

    return APIResponse(
        success=True,
        data={
            "items": [LeadResponse.from_orm(l).dict() for l in leads],
            "total": total,
            "page": page,
            "page_size": page_size,
        },
    )

