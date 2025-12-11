"""
Tests for authentication endpoints
"""
import pytest
from fastapi.testclient import TestClient
from app.core.security import get_password_hash
from app.models.user import User
from app.db.database import SessionLocal


@pytest.fixture
def client():
    from main import app
    return TestClient(app)


@pytest.fixture
def db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def test_signup(client, db):
    """Test user signup"""
    response = client.post(
        "/api/auth/signup",
        json={
            "email": "test@example.com",
            "password": "testpass123",
            "full_name": "Test User",
        },
    )
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True


def test_login(client, db):
    """Test user login"""
    # Create a test user
    user = User(
        email="test@example.com",
        hashed_password=get_password_hash("testpass123"),
        full_name="Test User",
    )
    db.add(user)
    db.commit()

    # Try to login
    response = client.post(
        "/api/auth/login",
        json={
            "email": "test@example.com",
            "password": "testpass123",
        },
    )
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert "access_token" in data["data"]


def test_login_invalid_credentials(client, db):
    """Test login with invalid credentials"""
    response = client.post(
        "/api/auth/login",
        json={
            "email": "nonexistent@example.com",
            "password": "wrongpass",
        },
    )
    assert response.status_code == 401


def test_get_current_user(client, db):
    """Test getting current user info"""
    # Create and login user
    user = User(
        email="test@example.com",
        hashed_password=get_password_hash("testpass123"),
        full_name="Test User",
    )
    db.add(user)
    db.commit()

    # Login
    login_response = client.post(
        "/api/auth/login",
        json={
            "email": "test@example.com",
            "password": "testpass123",
        },
    )
    token = login_response.json()["data"]["access_token"]

    # Get current user
    response = client.get(
        "/api/auth/me",
        headers={"Authorization": f"Bearer {token}"},
    )
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert data["data"]["email"] == "test@example.com"

