"""
Lead schemas
"""
from typing import Optional
from pydantic import BaseModel, EmailStr
from datetime import datetime


class LeadCreate(BaseModel):
    """Lead creation schema"""
    clinic_id: Optional[int] = None
    name: str
    email: EmailStr
    phone: Optional[str] = None
    country: Optional[str] = None
    message: Optional[str] = None
    treatment: Optional[str] = None
    treatment_interest: Optional[str] = None
    budget: Optional[str] = None
    budget_usd: Optional[int] = None
    preferred_date: Optional[str] = None
    preferred_dates: Optional[datetime] = None
    source: Optional[str] = None
    # Additional fields for comprehensive consultation
    accommodation_needed: Optional[bool] = False
    travel_assistance_needed: Optional[bool] = False
    urgency: Optional[str] = 'normal'  # normal, urgent, very-urgent
    medical_history: Optional[str] = None
    number_of_people: Optional[str] = '1'
    preferred_language: Optional[str] = 'en'


class LeadResponse(BaseModel):
    """Lead response schema"""
    id: int
    clinic_id: Optional[int] = None
    name: str
    email: str
    phone: Optional[str] = None
    treatment_interest: Optional[str] = None
    budget_usd: Optional[int] = None
    status: str
    created_at: datetime

    class Config:
        from_attributes = True

