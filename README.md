# Turkey Clinic Finder

Temiz ve basit medical tourism platformu. Next.js + Firebase + Vercel ile çalışır.

**🚀 Hızlı Başlangıç:**
```powershell
.\scripts\basit_kurulum.ps1
npm run dev
```

Detaylı kurulum: [BASIT_KURULUM.md](BASIT_KURULUM.md)

## Features

* 🌍 **Multi-language Support**: English, Arabic, and Turkish
* 🔍 **AI-Powered Clinic Matching**: Intelligent clinic recommendations based on treatment needs
* 💰 **Price Estimator**: Estimate treatment costs
* ⭐ **Reviews & Sentiment Analysis**: Patient reviews with AI-powered sentiment analysis
* 🏥 **Clinic Management**: Admin and clinic owner dashboards
* 📊 **Advanced Search**: Filter by city, treatment, price range
* 🔐 **Secure Authentication**: JWT-based auth with role-based access control
* 🐳 **Docker Support**: Full containerization for easy deployment

## Tech Stack

### Backend

* **FastAPI** (Python 3.11+) - Modern, fast web framework
* **PostgreSQL** - Primary database
* **Redis** - Caching and session storage
* **SQLAlchemy** - ORM with Alembic migrations
* **OpenAI API** - AI embeddings and content generation
* **Pinecone** (Optional) - Vector database for semantic search

### Frontend

* **Next.js 14** - React framework with SSR
* **TypeScript** - Type-safe development
* **TailwindCSS** - Utility-first CSS
* **next-i18next** - Internationalization
* **Axios** - HTTP client

### DevOps

* **Docker & Docker Compose** - Containerization
* **GitHub Actions** - CI/CD pipeline
* **Alembic** - Database migrations

## Quick Start

### 🚀 Hızlı Kurulum (Firebase + Vercel - Önerilen)

**En kolay yöntem! Docker, PostgreSQL, Redis gerekmez.**

```powershell
# Kurulum scriptini çalıştırın
.\scripts\setup_firebase_vercel.ps1

# Firebase projesi oluşturun ve yapılandırın
# Detaylı rehber: FIREBASE_VERCEL_KURULUM.md
```

**Avantajlar:**
- ✅ Ücretsiz başlangıç
- ✅ Otomatik ölçeklenme
- ✅ SSL dahil
- ✅ CDN dahil
- ✅ 15 dakikada hazır!

### 🐳 Alternatif: Docker ile Kurulum

### Prerequisites

* Docker and Docker Compose
* Python 3.11+ (for local development)
* Node.js 18+ (for local development)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yasinnabialtun/turkeyclinicfinder.git
   cd turkeyclinicfinder
   ```

2. **Run setup script (Windows PowerShell)**
   ```powershell
   .\scripts\setup.ps1
   ```
   This will create `.env` file and generate a secure `SECRET_KEY`.

   **Or manually:**
   ```bash
   cp .env.example .env
   # Edit .env and set SECRET_KEY (generate with: python -c "import secrets; print(secrets.token_urlsafe(32))")
   ```

3. **Quick start (Windows PowerShell)**
   ```powershell
   .\scripts\quick_start.ps1
   ```
   This will start all services and run migrations automatically.

   **Or manually:**
   ```bash
   docker-compose up --build
   ```

5. **Wait for services to be ready**
   ```bash
   # In a new terminal
   ./scripts/wait_for_services.sh
   ```

6. **Run database migrations**
   ```bash
   docker-compose exec backend alembic upgrade head
   ```

7. **Seed the database**
   ```bash
   docker-compose exec backend python /app/scripts/seed_db.py
   ```

8. **Access the application**
   * Frontend: http://localhost:3000
   * Backend API: http://localhost:8000
   * API Docs: http://localhost:8000/api/docs

### Manual Setup (Without Docker)

#### Backend

1. **Create virtual environment**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up database**
   ```bash
   # Make sure PostgreSQL is running
   createdb tcf
   ```

4. **Run migrations**
   ```bash
   alembic upgrade head
   ```

5. **Seed database**
   ```bash
   python ../scripts/seed_db.py
   ```

6. **Start backend**
   ```bash
   uvicorn main:app --reload
   ```

#### Frontend

1. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

## Environment Variables

See `.env.example` for all required environment variables. Key variables:

* `SECRET_KEY` - Secret key for JWT tokens (required) - Generate with: `python -c "import secrets; print(secrets.token_urlsafe(32))"`
* `DATABASE_URL` - PostgreSQL connection string (required)
* `REDIS_URL` - Redis connection string (required)
* `OPENAI_API_KEY` - OpenAI API key for AI features (optional)
* `NEXT_PUBLIC_API_URL` - Backend API URL for frontend
* `ALLOWED_ORIGINS` - Comma-separated list of allowed CORS origins

**📖 For detailed setup instructions, see [SETUP.md](SETUP.md)**

## API Documentation

Once the backend is running, visit:

* **Swagger UI**: http://localhost:8000/api/docs
* **ReDoc**: http://localhost:8000/api/redoc

### Key Endpoints

#### Authentication

* `POST /api/auth/signup` - User registration
* `POST /api/auth/login` - User login
* `POST /api/auth/refresh` - Refresh access token
* `GET /api/auth/me` - Get current user

#### Clinics

* `GET /api/clinics` - List clinics (with filters)
* `GET /api/clinics/{id}` - Get clinic details
* `POST /api/clinics` - Create clinic (requires auth)
* `PUT /api/clinics/{id}` - Update clinic (clinic owner)

#### Search & Match

* `POST /api/search/match` - AI-powered clinic matching
* `GET /api/search/suggest` - Search suggestions

#### Reviews

* `GET /api/reviews/clinics/{id}/reviews` - Get clinic reviews
* `POST /api/reviews/clinics/{id}/reviews` - Create review
* `GET /api/reviews/summary/{id}` - Get review summary with sentiment

#### AI

* `POST /api/ai/generate-article` - Generate SEO article
* `POST /api/ai/sentiment` - Analyze sentiment

#### Admin

* `GET /api/admin/clinics` - List clinics (admin)
* `POST /api/admin/clinics/{id}/approve` - Approve clinic
* `GET /api/admin/stats` - Dashboard statistics

## Testing

### Backend Tests

```bash
cd backend
pytest
pytest --cov=app --cov-report=html
```

### Frontend Tests

```bash
cd frontend
npm test
npm test -- --coverage
```

## Database Migrations

### Create a new migration

```bash
cd backend
alembic revision --autogenerate -m "description"
```

### Apply migrations

```bash
alembic upgrade head
```

### Rollback migration

```bash
alembic downgrade -1
```

## Production Deployment

### Docker Compose Production

1. **Update `.env` with production values**
   * Set `DEBUG=false`
   * Use strong `SECRET_KEY`
   * Configure production database
   * Set up proper CORS origins

2. **Build and start**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```


## Project Structure

```
turkeyclinicfinder/
├── backend/              # FastAPI backend
│   ├── app/
│   │   ├── api/         # API routes
│   │   ├── core/        # Configuration, security
│   │   ├── db/          # Database setup
│   │   ├── models/      # SQLAlchemy models
│   │   ├── schemas/     # Pydantic schemas
│   │   └── services/    # Business logic
│   ├── alembic/         # Database migrations
│   ├── tests/           # Backend tests
│   └── main.py          # Application entry
├── frontend/            # Next.js frontend
│   ├── src/
│   │   ├── app/         # Next.js app router
│   │   ├── components/  # React components
│   │   └── lib/         # Utilities, API client
│   └── public/          # Static assets
├── scripts/             # Utility scripts
└── docker-compose.yml   # Docker Compose config
```

## Security

* JWT authentication with refresh tokens
* Password hashing with bcrypt
* Rate limiting on API endpoints
* Input validation with Pydantic
* CORS configuration
* SQL injection protection via SQLAlchemy

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:

* Open an issue on GitHub

## Roadmap

* Elasticsearch integration for advanced search
* Real-time notifications
* Payment integration
* Mobile app (React Native)
* Advanced analytics dashboard
* Multi-currency support

## About

Live at: [turkeyclinicfinder.vercel.app](https://turkeyclinicfinder.vercel.app)
