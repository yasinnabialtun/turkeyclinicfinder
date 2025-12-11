"""
AI Recommendation model
"""
from sqlalchemy import Column, Integer, String, Text, ForeignKey, Float, DateTime, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class AIRecommendation(Base):
    """AI Recommendation model for clinic matching"""
    __tablename__ = "ai_recommendations"

    id = Column(Integer, primary_key=True, index=True)
    clinic_id = Column(Integer, ForeignKey("clinics.id"), nullable=False)
    query_text = Column(Text, nullable=True)
    query_embedding = Column(JSON, nullable=True)  # Store embedding vector
    confidence_score = Column(Float, nullable=False)
    reasoning = Column(Text, nullable=True)
    match_criteria = Column(JSON, nullable=True)  # Store matching criteria
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # Relationships
    clinic = relationship("Clinic", back_populates="ai_recommendations")

