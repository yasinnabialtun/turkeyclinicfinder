"""
Search and match schemas
"""
from typing import Optional, List
from pydantic import BaseModel
from datetime import datetime


class MatchRequest(BaseModel):
    """Clinic matching request"""
    treatment: str
    budget_usd: Optional[int] = None
    city_preference: Optional[str] = None
    dates: Optional[datetime] = None
    accommodation_needed: Optional[bool] = None
    priority: Optional[str] = None  # price, quality, location


class MatchResponse(BaseModel):
    """Clinic match response"""
    clinic_id: int
    clinic_name: str
    confidence_score: float
    reasoning: Optional[str] = None
    match_criteria: Optional[dict] = None


class SearchSuggestRequest(BaseModel):
    """Search suggestion request"""
    q: str
    lang: str = "en"


class SearchSuggestResponse(BaseModel):
    """Search suggestion response"""
    suggestions: List[str]

