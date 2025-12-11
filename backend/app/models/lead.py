"""
Lead model (inquiries/contact forms)
"""
from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime, JSON, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum

from app.db.database import Base


class LeadStatus(str, enum.Enum):
    """Lead status enum"""
    NEW = "new"
    CONTACTED = "contacted"
    QUALIFIED = "qualified"
    CONVERTED = "converted"
    LOST = "lost"


class Lead(Base):
    """Lead model"""
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    clinic_id = Column(Integer, ForeignKey("clinics.id"), nullable=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False, index=True)
    phone = Column(String, nullable=True)
    country = Column(String, nullable=True)
    message = Column(Text, nullable=True)
    treatment = Column(String, nullable=True)
    treatment_interest = Column(String, nullable=True)
    budget = Column(String, nullable=True)
    budget_usd = Column(Integer, nullable=True)
    preferred_date = Column(String, nullable=True)
    preferred_dates = Column(DateTime(timezone=True), nullable=True)
    status = Column(String, default=LeadStatus.NEW.value, nullable=False)
    source = Column(String, nullable=True)  # e.g., "website", "search", "referral"
    metadata = Column(JSON, nullable=True)
    is_encrypted = Column(Boolean, default=False, nullable=False)  # Flag for PHI encryption
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    clinic = relationship("Clinic", back_populates="leads")
    user = relationship("User", back_populates="leads")

