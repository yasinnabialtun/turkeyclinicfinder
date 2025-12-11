"""
Authentication schemas
"""
from typing import Optional
from pydantic import BaseModel, EmailStr


class SignUpRequest(BaseModel):
    """Sign up request"""
    email: EmailStr
    password: str
    full_name: str
    phone: Optional[str] = None
    role: str = "patient"


class LoginRequest(BaseModel):
    """Login request"""
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    """Token response"""
    access_token: str
    refresh_token: str
    token_type: str = "bearer"


class RefreshTokenRequest(BaseModel):
    """Refresh token request"""
    refresh_token: str


class UserResponse(BaseModel):
    """User response"""
    id: int
    email: str
    full_name: str
    role: str
    is_active: bool

    class Config:
        from_attributes = True

