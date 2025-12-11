"""
Booking model
"""
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum

from app.db.database import Base


class BookingStatus(str, enum.Enum):
    """Booking status enum"""
    PENDING = "pending"
    CONFIRMED = "confirmed"
    COMPLETED = "completed"
    CANCELLED = "cancelled"


class Booking(Base):
    """Booking model"""
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)
    clinic_id = Column(Integer, ForeignKey("clinics.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    treatment_id = Column(Integer, ForeignKey("treatments.id"), nullable=True)
    status = Column(String, default=BookingStatus.PENDING.value, nullable=False)
    scheduled_date = Column(DateTime(timezone=True), nullable=True)
    patient_name = Column(String, nullable=False)
    patient_email = Column(String, nullable=False)
    patient_phone = Column(String, nullable=True)
    notes = Column(Text, nullable=True)
    metadata = Column(JSON, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    clinic = relationship("Clinic", back_populates="bookings")
    user = relationship("User", back_populates="bookings")

