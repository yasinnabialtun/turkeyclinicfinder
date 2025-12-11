"""
Main API router that includes all endpoint routers
"""
from fastapi import APIRouter

from app.api.v1.endpoints import (
    auth,
    clinics,
    search,
    reviews,
    leads,
    ai,
    admin,
    price,
)

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(clinics.router, prefix="/clinics", tags=["clinics"])
api_router.include_router(search.router, prefix="/search", tags=["search"])
api_router.include_router(reviews.router, prefix="/reviews", tags=["reviews"])
api_router.include_router(leads.router, prefix="/leads", tags=["leads"])
api_router.include_router(ai.router, prefix="/ai", tags=["ai"])
api_router.include_router(admin.router, prefix="/admin", tags=["admin"])
api_router.include_router(price.router, prefix="/price", tags=["price"])

