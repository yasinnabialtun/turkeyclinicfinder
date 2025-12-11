"""Database models"""
from app.models.user import User
from app.models.clinic import Clinic
from app.models.doctor import Doctor
from app.models.treatment import Treatment
from app.models.review import Review
from app.models.booking import Booking
from app.models.lead import Lead
from app.models.translation import Translation
from app.models.media import Media
from app.models.ai_recommendation import AIRecommendation

__all__ = [
    "User",
    "Clinic",
    "Doctor",
    "Treatment",
    "Review",
    "Booking",
    "Lead",
    "Translation",
    "Media",
    "AIRecommendation",
]

