# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Docker and Docker Compose installed
- Git (optional)

### Step 1: Extract and Navigate
```bash
# If you have a zip file
unzip turkeyclinicfinder.zip
cd turkeyclinicfinder
```

### Step 2: Configure Environment
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and set at minimum:
# - SECRET_KEY (generate a random string)
# - DATABASE_URL (default is fine for local)
```

### Step 3: Start Services
```bash
docker-compose up --build
```

Wait for all services to start (this may take a few minutes on first run).

### Step 4: Initialize Database
Open a new terminal and run:

```bash
# Run migrations
docker-compose exec backend alembic upgrade head

# Seed with sample data
docker-compose exec backend python /app/../scripts/seed_db.py
```

### Step 5: Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/api/docs

### Test Credentials

After seeding, you can login with:
- Email: `admin@tcf.com`
- Password: `admin123`

## 🎯 What's Next?

1. **Explore the API**: Visit http://localhost:8000/api/docs
2. **Search Clinics**: Use the search wizard on the homepage
3. **View Clinic Details**: Click on any clinic card
4. **Read Reviews**: Check out the review system
5. **Try AI Matching**: Use the match endpoint

## 📚 Documentation

- **README.md** - Full documentation
- **docs/ARCHITECTURE.md** - System architecture
- **docs/DEPLOYMENT.md** - Production deployment
- **PROJECT_SUMMARY.md** - Project overview

## 🐛 Troubleshooting

### Services won't start
- Check if ports 3000, 8000, 5432, 6379 are available
- Check Docker logs: `docker-compose logs`

### Database connection errors
- Wait for PostgreSQL to be ready: `docker-compose ps`
- Check database logs: `docker-compose logs db`

### Frontend can't connect to backend
- Verify `NEXT_PUBLIC_API_URL` in `.env`
- Check backend is running: `curl http://localhost:8000/health`

## 💡 Tips

- Use `docker-compose logs -f` to follow logs
- Use `docker-compose down` to stop services
- Use `docker-compose restart` to restart services
- Data persists in Docker volumes

## 🎉 You're Ready!

The application is now running locally. Start exploring and building!

