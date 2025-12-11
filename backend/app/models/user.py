"""
User model
"""
from sqlalchemy import Column, Integer, String, Boolean, DateTime, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum

from app.db.database import Base


class UserRole(str, enum.Enum):
    """User role enum"""
    ADMIN = "admin"
    CLINIC_OWNER = "clinic_owner"
    PATIENT = "patient"


class User(Base):
    """User model"""
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String, nullable=False)
    phone = Column(String, nullable=True)
    role = Column(String, default=UserRole.PATIENT.value, nullable=False)
    is_active = Column(Boolean, default=True, nullable=False)
    is_verified = Column(Boolean, default=False, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    clinics = relationship("Clinic", back_populates="owner", foreign_keys="Clinic.owner_id")
    reviews = relationship("Review", back_populates="user")
    bookings = relationship("Booking", back_populates="user")
    leads = relationship("Lead", back_populates="user")

