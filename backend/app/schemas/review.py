"""
Review schemas
"""
from typing import Optional, List
from pydantic import BaseModel, Field
from datetime import datetime


class ReviewCreate(BaseModel):
    """Review creation schema"""
    clinic_id: int
    rating: float = Field(..., ge=1.0, le=5.0)
    title_en: Optional[str] = None
    title_ar: Optional[str] = None
    title_tr: Optional[str] = None
    content_en: Optional[str] = None
    content_ar: Optional[str] = None
    content_tr: Optional[str] = None
    author_name: Optional[str] = None
    author_email: Optional[str] = None


class ReviewResponse(BaseModel):
    """Review response schema"""
    id: int
    clinic_id: int
    rating: float
    title_en: Optional[str] = None
    title_ar: Optional[str] = None
    title_tr: Optional[str] = None
    content_en: Optional[str] = None
    content_ar: Optional[str] = None
    content_tr: Optional[str] = None
    author_name: Optional[str] = None
    sentiment_score: Optional[float] = None
    sentiment_label: Optional[str] = None
    created_at: datetime

    class Config:
        from_attributes = True


class ReviewSummaryResponse(BaseModel):
    """Review summary with sentiment"""
    clinic_id: int
    total_reviews: int
    average_rating: float
    sentiment_breakdown: dict
    highlights: List[str]

