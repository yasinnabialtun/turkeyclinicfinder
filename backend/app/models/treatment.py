"""
Treatment model
"""
from sqlalchemy import Column, Integer, String, Text, ForeignKey, Float, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class Treatment(Base):
    """Treatment model"""
    __tablename__ = "treatments"

    id = Column(Integer, primary_key=True, index=True)
    clinic_id = Column(Integer, ForeignKey("clinics.id"), nullable=False)
    name_en = Column(String, nullable=False, index=True)
    name_ar = Column(String, nullable=True)
    name_tr = Column(String, nullable=True)
    description_en = Column(Text, nullable=True)
    description_ar = Column(Text, nullable=True)
    description_tr = Column(Text, nullable=True)
    category = Column(String, nullable=False, index=True)  # e.g., "hair_transplant", "dental"
    price_min_usd = Column(Float, nullable=True)
    price_max_usd = Column(Float, nullable=True)
    duration_days = Column(Integer, nullable=True)
    recovery_days = Column(Integer, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    clinic = relationship("Clinic", back_populates="treatments")

