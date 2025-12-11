"""
Media model for clinic images/videos
"""
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class Media(Base):
    """Media model"""
    __tablename__ = "media"

    id = Column(Integer, primary_key=True, index=True)
    clinic_id = Column(Integer, ForeignKey("clinics.id"), nullable=True)
    url = Column(String, nullable=False)
    type = Column(String, nullable=False)  # image, video
    alt_text_en = Column(String, nullable=True)
    alt_text_ar = Column(String, nullable=True)
    alt_text_tr = Column(String, nullable=True)
    is_primary = Column(Boolean, default=False, nullable=False)
    order = Column(Integer, default=0, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # Relationships
    clinic = relationship("Clinic", back_populates="media")

