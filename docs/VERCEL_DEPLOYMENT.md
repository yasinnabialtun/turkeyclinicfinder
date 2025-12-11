# Vercel Deployment Guide

## Frontend Deployment (Vercel)

Vercel Next.js uygulamalarını otomatik olarak algılar ve deploy eder.

### Adım 1: Vercel Hesabı Oluştur

1. https://vercel.com adresine gidin
2. GitHub, GitLab veya Bitbucket ile giriş yapın

### Adım 2: Projeyi Vercel'e Bağla

**Yöntem 1: Vercel CLI ile**

```bash
# Vercel CLI'yi yükle
npm i -g vercel

# Frontend dizinine git
cd frontend

# Vercel'e login ol
vercel login

# Projeyi deploy et
vercel

# Production'a deploy et
vercel --prod
```

**Yöntem 2: Vercel Dashboard ile**

1. Vercel dashboard'a gidin
2. "Add New Project" butonuna tıklayın
3. GitHub repository'nizi seçin
4. Root Directory olarak `frontend` seçin
5. Framework Preset: Next.js (otomatik algılanır)
6. Build Command: `npm run build` (otomatik)
7. Output Directory: `.next` (otomatik)

### Adım 3: Environment Variables Ayarla

Vercel Dashboard'da projenize gidin:
1. Settings > Environment Variables
2. Şu değişkenleri ekleyin:

```
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

**Önemli:** Backend URL'ini production backend'inizin URL'i ile değiştirin.

### Adım 4: Deploy

Vercel otomatik olarak:
- Dependencies'leri yükler (`npm install`)
- Projeyi build eder (`npm run build`)
- Production'a deploy eder

## Backend Deployment (Alternatifler)

Vercel serverless functions için uygun ama FastAPI için ideal değil. Backend için şu seçenekleri kullanabilirsiniz:

### Seçenek 1: Railway (Önerilen)

1. https://railway.app adresine gidin
2. "New Project" > "Deploy from GitHub repo"
3. Backend dizinini seçin
4. Environment variables'ı ekleyin
5. Deploy edin

### Seçenek 2: Render

1. https://render.com adresine gidin
2. "New Web Service"
3. GitHub repo'nuzu bağlayın
4. Root Directory: `backend`
5. Build Command: `pip install -r requirements.txt`
6. Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

### Seçenek 3: Fly.io

```bash
# Fly.io CLI yükle
curl -L https://fly.io/install.sh | sh

# Backend dizininde
cd backend

# Fly.io'ya login
fly auth login

# Launch app
fly launch

# Deploy
fly deploy
```

### Seçenek 4: DigitalOcean App Platform

1. DigitalOcean dashboard'a gidin
2. "Create App" > "GitHub" seçin
3. Backend dizinini seçin
4. Environment variables ekleyin
5. Deploy edin

### Seçenek 5: AWS/GCP/Azure

Docker container olarak deploy edebilirsiniz:
- AWS ECS/Fargate
- Google Cloud Run
- Azure Container Instances

## Full Stack Deployment (Docker Compose)

Eğer tüm stack'i birlikte deploy etmek isterseniz:

### DigitalOcean Droplet

```bash
# Droplet oluştur (Ubuntu 22.04)
# SSH ile bağlan

# Docker ve Docker Compose yükle
sudo apt update
sudo apt install docker.io docker-compose -y

# Projeyi klonla
git clone <your-repo>
cd turkeyclinicfinder

# .env dosyasını düzenle
nano .env

# Servisleri başlat
docker-compose up -d

# Migration'ları çalıştır
docker-compose exec backend alembic upgrade head

# Seed data
docker-compose exec backend python /app/../scripts/seed_db.py
```

### Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /api {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Environment Variables Checklist

### Frontend (Vercel)
- [ ] `NEXT_PUBLIC_API_URL` - Backend API URL'i

### Backend (Railway/Render/etc.)
- [ ] `DATABASE_URL` - PostgreSQL connection string
- [ ] `REDIS_URL` - Redis connection string
- [ ] `SECRET_KEY` - JWT secret key
- [ ] `ALLOWED_ORIGINS` - Frontend URL'i
- [ ] `OPENAI_API_KEY` - (Opsiyonel) AI features için
- [ ] `DEBUG` - `false` (production için)

## Database Setup

### Production Database Seçenekleri

1. **Supabase** (Önerilen - Ücretsiz tier)
   - PostgreSQL hosting
   - Otomatik backup
   - Dashboard

2. **Neon**
   - Serverless PostgreSQL
   - Ücretsiz tier mevcut

3. **Railway PostgreSQL**
   - Railway'de backend deploy ediyorsanız kolay

4. **AWS RDS / Google Cloud SQL**
   - Enterprise seviye

## Redis Setup

### Production Redis Seçenekleri

1. **Upstash** (Önerilen - Serverless)
   - Ücretsiz tier
   - Kolay entegrasyon

2. **Redis Cloud**
   - Ücretsiz tier mevcut

3. **Railway Redis**
   - Railway kullanıyorsanız

## Deployment Checklist

### Frontend (Vercel)
- [ ] Vercel hesabı oluşturuldu
- [ ] GitHub repo bağlandı
- [ ] Environment variables ayarlandı
- [ ] Build başarılı
- [ ] Domain ayarlandı (opsiyonel)

### Backend
- [ ] Hosting platform seçildi
- [ ] Environment variables ayarlandı
- [ ] Database bağlantısı test edildi
- [ ] Migration'lar çalıştırıldı
- [ ] Health check endpoint çalışıyor

### Database
- [ ] Production database oluşturuldu
- [ ] Connection string alındı
- [ ] Backup stratejisi ayarlandı

### Redis
- [ ] Redis instance oluşturuldu
- [ ] Connection string alındı

### Final Steps
- [ ] Frontend'den backend'e istekler çalışıyor
- [ ] CORS ayarları doğru
- [ ] SSL/HTTPS aktif
- [ ] Monitoring kuruldu (opsiyonel)

## Troubleshooting

### Frontend Build Hatası
- Node.js version kontrol et (18+)
- Dependencies eksik olabilir
- Environment variables eksik

### Backend Connection Hatası
- Database URL kontrol et
- Firewall ayarları kontrol et
- Environment variables doğru mu?

### CORS Hatası
- `ALLOWED_ORIGINS` environment variable'ında frontend URL'i var mı?
- Backend'de CORS middleware aktif mi?

## Örnek Production URLs

- Frontend: `https://turkeyclinicfinder.vercel.app`
- Backend: `https://api.turkeyclinicfinder.com`
- Database: `postgresql://user:pass@db-host:5432/tcf`

## Sonraki Adımlar

1. Custom domain ekle (Vercel'de)
2. SSL certificate (otomatik Vercel'de)
3. Monitoring setup (Sentry, LogRocket, vb.)
4. Analytics (Google Analytics, Plausible)
5. CDN (Vercel otomatik sağlar)

