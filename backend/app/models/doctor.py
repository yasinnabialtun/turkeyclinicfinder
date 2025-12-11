"""
Doctor model
"""
from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class Doctor(Base):
    """Doctor model"""
    __tablename__ = "doctors"

    id = Column(Integer, primary_key=True, index=True)
    clinic_id = Column(Integer, ForeignKey("clinics.id"), nullable=False)
    name_en = Column(String, nullable=False)
    name_ar = Column(String, nullable=True)
    name_tr = Column(String, nullable=True)
    specialization_en = Column(String, nullable=True)
    specialization_ar = Column(String, nullable=True)
    specialization_tr = Column(String, nullable=True)
    bio_en = Column(Text, nullable=True)
    bio_ar = Column(Text, nullable=True)
    bio_tr = Column(Text, nullable=True)
    years_experience = Column(Integer, nullable=True)
    education_en = Column(Text, nullable=True)
    education_ar = Column(Text, nullable=True)
    education_tr = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    clinic = relationship("Clinic", back_populates="doctors")

