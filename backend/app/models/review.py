"""
Review model
"""
from sqlalchemy import Column, Integer, String, Text, ForeignKey, Float, Boolean, DateTime, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class Review(Base):
    """Review model"""
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)
    clinic_id = Column(Integer, ForeignKey("clinics.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    rating = Column(Float, nullable=False)
    title_en = Column(String, nullable=True)
    title_ar = Column(String, nullable=True)
    title_tr = Column(String, nullable=True)
    content_en = Column(Text, nullable=True)
    content_ar = Column(Text, nullable=True)
    content_tr = Column(Text, nullable=True)
    author_name = Column(String, nullable=True)
    author_email = Column(String, nullable=True)
    verified_booking = Column(Boolean, default=False, nullable=False)
    sentiment_score = Column(Float, nullable=True)  # -1 to 1
    sentiment_label = Column(String, nullable=True)  # positive, negative, neutral
    sentiment_highlights = Column(JSON, nullable=True)
    is_published = Column(Boolean, default=True, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    clinic = relationship("Clinic", back_populates="reviews")
    user = relationship("User", back_populates="reviews")

