"""
Common response schemas
"""
from typing import Optional, Any, List
from pydantic import BaseModel


class APIResponse(BaseModel):
    """Standard API response envelope"""
    success: bool
    data: Optional[Any] = None
    errors: Optional[List[dict]] = None


class PaginatedResponse(BaseModel):
    """Paginated response"""
    items: List[Any]
    total: int
    page: int
    page_size: int
    pages: int

