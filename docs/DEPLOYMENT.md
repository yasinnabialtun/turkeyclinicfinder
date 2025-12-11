# Deployment Guide

## Production Environment Setup

### Prerequisites
- Docker and Docker Compose installed
- Domain name configured
- SSL certificate (Let's Encrypt recommended)
- Production database credentials
- Environment variables configured

### Step 1: Environment Configuration

Create `.env.production`:

```bash
# Database
DATABASE_URL=postgresql://user:pass@db-host:5432/tcf_prod

# Security
SECRET_KEY=<generate-strong-secret-key>
DEBUG=false

# CORS
ALLOWED_ORIGINS=https://yourdomain.com
ALLOWED_HOSTS=yourdomain.com

# OpenAI
OPENAI_API_KEY=your-production-key

# Frontend
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

### Step 2: Build Production Images

```bash
docker-compose -f docker-compose.prod.yml build
```

### Step 3: Run Migrations

```bash
docker-compose -f docker-compose.prod.yml run --rm backend alembic upgrade head
```

### Step 4: Start Services

```bash
docker-compose -f docker-compose.prod.yml up -d
```

## Nginx Configuration

Example Nginx reverse proxy configuration:

```nginx
upstream backend {
    server localhost:8000;
}

upstream frontend {
    server localhost:3000;
}

server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    # Frontend
    location / {
        proxy_pass http://frontend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Backend API
    location /api {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
    }
}
```

## Kubernetes Deployment

See `/infra/k8s` for Kubernetes manifests.

## Monitoring

- Set up health check endpoints
- Configure logging aggregation (ELK, Loki)
- Set up error tracking (Sentry)
- Monitor database performance
- Track API response times

## Backup Strategy

1. **Database Backups**
   ```bash
   pg_dump -h db-host -U user tcf_prod > backup.sql
   ```

2. **Automated Backups**
   - Schedule daily backups
   - Store in S3 or similar
   - Test restore procedures

3. **Media Files**
   - Use S3 for media storage
   - Enable versioning
   - Cross-region replication

## Scaling

### Horizontal Scaling
- Add more backend instances
- Use load balancer
- Database connection pooling

### Vertical Scaling
- Increase database resources
- Add Redis memory
- Optimize queries

## Security Checklist

- [ ] Strong SECRET_KEY
- [ ] HTTPS enforced
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] Database credentials secured
- [ ] API keys in environment variables
- [ ] Regular security updates
- [ ] Firewall rules configured
- [ ] DDoS protection
- [ ] SQL injection prevention
- [ ] XSS protection

