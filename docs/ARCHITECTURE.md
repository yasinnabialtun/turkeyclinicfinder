# Architecture Overview

## System Architecture

```
┌─────────────┐
│   Browser   │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────┐
│      Next.js Frontend           │
│  (Port 3000)                    │
│  - SSR/SSG                      │
│  - i18n (EN/AR/TR)              │
│  - TailwindCSS                   │
└──────┬──────────────────────────┘
       │ HTTP/REST
       ▼
┌─────────────────────────────────┐
│      FastAPI Backend            │
│  (Port 8000)                    │
│  - REST API                     │
│  - JWT Auth                     │
│  - Rate Limiting                │
└──────┬──────────────────────────┘
       │
       ├──────────┬──────────┬──────────┐
       ▼          ▼          ▼          ▼
┌──────────┐ ┌────────┐ ┌─────────┐ ┌──────────┐
│PostgreSQL│ │ Redis  │ │ OpenAI  │ │ Pinecone  │
│  :5432   │ │ :6379  │ │   API   │ │  (Opt)    │
└──────────┘ └────────┘ └─────────┘ └──────────┘
```

## Data Flow

### Clinic Search Flow
1. User enters search criteria in frontend
2. Frontend calls `/api/clinics` with query parameters
3. Backend queries PostgreSQL with filters
4. Results returned to frontend
5. Frontend displays clinic cards

### AI Matching Flow
1. User submits matching request
2. Backend generates embedding for query using OpenAI
3. Backend compares with clinic embeddings (Pinecone or in-memory)
4. Top matches returned with confidence scores
5. Frontend displays recommendations

### Review Sentiment Analysis
1. User submits review
2. Backend calls OpenAI sentiment analysis
3. Sentiment score and highlights stored
4. Review saved to database
5. Clinic rating updated

## Database Schema

### Core Tables
- `users` - User accounts (admin, clinic_owner, patient)
- `clinics` - Clinic information (multi-language)
- `doctors` - Doctor profiles
- `treatments` - Treatment offerings
- `reviews` - Patient reviews with sentiment
- `bookings` - Appointment bookings
- `leads` - Inquiry/lead management
- `ai_recommendations` - AI matching results
- `translations` - Dynamic i18n content
- `media` - Clinic images/videos

## Security Architecture

### Authentication Flow
1. User submits credentials
2. Backend validates and creates JWT tokens
3. Access token (30 min) and refresh token (7 days) returned
4. Frontend stores tokens in localStorage
5. API requests include Bearer token
6. Backend validates token on each request

### Authorization
- Role-based access control (RBAC)
- Admin: Full access
- Clinic Owner: Manage own clinics
- Patient: View and create reviews

## AI Integration

### Embeddings
- OpenAI `text-embedding-3-small` model
- 1536-dimensional vectors
- Stored in Pinecone or computed on-the-fly

### Content Generation
- OpenAI GPT-4 for article generation
- Structured JSON output
- SEO-optimized content

### Sentiment Analysis
- OpenAI API for accurate sentiment
- Fallback to rule-based analysis
- Scores range from -1 (negative) to 1 (positive)

## Deployment Architecture

### Development
- Docker Compose with hot reload
- Local PostgreSQL and Redis
- Mock AI responses if API keys not provided

### Production
- Containerized services
- Load balancer (Nginx)
- Database replication (optional)
- Redis cluster for caching
- CDN for static assets

## Performance Considerations

- Database indexing on frequently queried fields
- Redis caching for expensive queries
- Pagination on list endpoints
- Lazy loading of images
- Code splitting in frontend
- CDN for static assets

## Scalability

- Horizontal scaling of backend services
- Database read replicas
- Redis cluster for distributed caching
- Vector database for semantic search at scale
- Microservices architecture ready

