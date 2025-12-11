"""
Translation model for dynamic content
"""
from sqlalchemy import Column, Integer, String, Text, DateTime, UniqueConstraint
from sqlalchemy.sql import func

from app.db.database import Base


class Translation(Base):
    """Translation model for i18n content"""
    __tablename__ = "translations"

    id = Column(Integer, primary_key=True, index=True)
    key = Column(String, nullable=False, index=True)
    language = Column(String, nullable=False, index=True)  # en, ar, tr
    value = Column(Text, nullable=False)
    namespace = Column(String, nullable=True)  # e.g., "common", "errors"
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    __table_args__ = (UniqueConstraint("key", "language", "namespace", name="uq_translation"),)

