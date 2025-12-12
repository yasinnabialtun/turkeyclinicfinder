"""
Authentication endpoints
"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from slowapi import Limiter
from slowapi.util import get_remote_address

from app.core.dependencies import get_db, get_current_user
from app.core.security import (
    verify_password,
    get_password_hash,
    create_access_token,
    create_refresh_token,
    decode_token,
)
from app.models.user import User, UserRole
from app.schemas.auth import (
    SignUpRequest,
    LoginRequest,
    TokenResponse,
    RefreshTokenRequest,
    UserResponse,
)
from app.schemas.common import APIResponse
import structlog

router = APIRouter()
limiter = Limiter(key_func=get_remote_address)
logger = structlog.get_logger()


@router.post("/signup", response_model=APIResponse)
@limiter.limit("5/minute")
async def signup(request: SignUpRequest, db: Session = Depends(get_db)):
    """User registration"""
    try:
    # Check if user exists
    existing_user = db.query(User).filter(User.email == request.email).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered",
        )

    # Create new user
    user = User(
        email=request.email,
        hashed_password=get_password_hash(request.password),
        full_name=request.full_name,
        phone=request.phone,
        role=request.role if request.role in ["admin", "clinic_owner", "patient"] else "patient",
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    return APIResponse(
        success=True,
        data={"user_id": user.id, "email": user.email},
    )
    except HTTPException:
        raise
    except Exception as e:
        db.rollback()
        logger.error("signup_error", error=str(e), email=request.email)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create user account",
        )


@router.post("/login", response_model=APIResponse)
@limiter.limit("10/minute")
async def login(request: LoginRequest, db: Session = Depends(get_db)):
    """User login"""
    try:
    user = db.query(User).filter(User.email == request.email).first()
    if not user or not verify_password(request.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
        )

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="User account is inactive",
        )

    # Create tokens
    access_token = create_access_token(data={"sub": user.id})
    refresh_token = create_refresh_token(data={"sub": user.id})

    return APIResponse(
        success=True,
        data=TokenResponse(
            access_token=access_token,
            refresh_token=refresh_token,
        ).dict(),
    )
    except HTTPException:
        raise
    except Exception as e:
        logger.error("login_error", error=str(e), email=request.email)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to process login request",
        )


@router.post("/refresh", response_model=APIResponse)
async def refresh_token(request: RefreshTokenRequest):
    """Refresh access token"""
    payload = decode_token(request.refresh_token)
    if payload is None or payload.get("type") != "refresh":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid refresh token",
        )

    user_id = payload.get("sub")
    new_access_token = create_access_token(data={"sub": user_id})

    return APIResponse(
        success=True,
        data={"access_token": new_access_token, "token_type": "bearer"},
    )


@router.get("/me", response_model=APIResponse)
async def get_current_user_info(current_user: User = Depends(get_current_user)):
    """Get current user information"""
    return APIResponse(
        success=True,
        data=UserResponse.from_orm(current_user).dict(),
    )

