"""
Tests for clinic endpoints
"""
import pytest
from fastapi.testclient import TestClient
from app.models.clinic import Clinic, ClinicStatus
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


def test_list_clinics(client, db):
    """Test listing clinics"""
    # Create a test clinic
    clinic = Clinic(
        name_en="Test Clinic",
        slug="test-clinic",
        city="Istanbul",
        status=ClinicStatus.APPROVED.value,
    )
    db.add(clinic)
    db.commit()

    response = client.get("/api/clinics")
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert len(data["data"]["items"]) > 0


def test_get_clinic(client, db):
    """Test getting a single clinic"""
    clinic = Clinic(
        name_en="Test Clinic",
        slug="test-clinic",
        city="Istanbul",
        status=ClinicStatus.APPROVED.value,
    )
    db.add(clinic)
    db.commit()
    db.refresh(clinic)

    response = client.get(f"/api/clinics/{clinic.id}")
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert data["data"]["name_en"] == "Test Clinic"

