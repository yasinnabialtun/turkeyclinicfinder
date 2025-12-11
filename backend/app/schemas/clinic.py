"""
Clinic schemas
"""
from typing import Optional, List
from pydantic import BaseModel, Field
from datetime import datetime


class ClinicBase(BaseModel):
    """Base clinic schema"""
    name_en: str
    name_ar: Optional[str] = None
    name_tr: Optional[str] = None
    description_en: Optional[str] = None
    description_ar: Optional[str] = None
    description_tr: Optional[str] = None
    city: str
    address: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    website: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None


class ClinicCreate(ClinicBase):
    """Clinic creation schema"""
    pass


class ClinicUpdate(BaseModel):
    """Clinic update schema"""
    name_en: Optional[str] = None
    name_ar: Optional[str] = None
    name_tr: Optional[str] = None
    description_en: Optional[str] = None
    description_ar: Optional[str] = None
    description_tr: Optional[str] = None
    city: Optional[str] = None
    address: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    website: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None


class ClinicResponse(ClinicBase):
    """Clinic response schema"""
    id: int
    slug: str
    status: str
    rating: float
    review_count: int
    verified: bool
    featured: bool
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True


class ClinicListResponse(BaseModel):
    """Clinic list response with pagination"""
    items: List[ClinicResponse]
    total: int
    page: int
    page_size: int

