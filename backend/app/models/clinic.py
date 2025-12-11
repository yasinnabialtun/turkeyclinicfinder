"""
Clinic model
"""
from sqlalchemy import Column, Integer, String, Boolean, DateTime, Float, Text, ForeignKey, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum

from app.db.database import Base


class ClinicStatus(str, enum.Enum):
    """Clinic status enum"""
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    SUSPENDED = "suspended"


class Clinic(Base):
    """Clinic model"""
    __tablename__ = "clinics"

    id = Column(Integer, primary_key=True, index=True)
    name_en = Column(String, nullable=False, index=True)
    name_ar = Column(String, nullable=True)
    name_tr = Column(String, nullable=True)
    slug = Column(String, unique=True, index=True, nullable=False)
    description_en = Column(Text, nullable=True)
    description_ar = Column(Text, nullable=True)
    description_tr = Column(Text, nullable=True)
    city = Column(String, nullable=False, index=True)
    address = Column(String, nullable=True)
    phone = Column(String, nullable=True)
    email = Column(String, nullable=True)
    website = Column(String, nullable=True)
    latitude = Column(Float, nullable=True)
    longitude = Column(Float, nullable=True)
    status = Column(String, default=ClinicStatus.PENDING.value, nullable=False, index=True)
    owner_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    rating = Column(Float, default=0.0, nullable=False)
    review_count = Column(Integer, default=0, nullable=False)
    verified = Column(Boolean, default=False, nullable=False)
    featured = Column(Boolean, default=False, nullable=False)
    metadata = Column(JSON, nullable=True)  # For flexible additional data
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    owner = relationship("User", back_populates="clinics", foreign_keys=[owner_id])
    doctors = relationship("Doctor", back_populates="clinic", cascade="all, delete-orphan")
    treatments = relationship("Treatment", back_populates="clinic", cascade="all, delete-orphan")
    reviews = relationship("Review", back_populates="clinic", cascade="all, delete-orphan")
    bookings = relationship("Booking", back_populates="clinic")
    leads = relationship("Lead", back_populates="clinic")
    media = relationship("Media", back_populates="clinic", cascade="all, delete-orphan")
    ai_recommendations = relationship("AIRecommendation", back_populates="clinic")

