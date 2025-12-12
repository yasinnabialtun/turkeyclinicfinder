# 🚀 Turkey Clinic Finder - Kurulum Rehberi

Bu rehber, projeyi ilk kez çalıştırmak için gereken tüm adımları içerir.

## 📋 Gereksinimler

**İki seçenek var:**

### Seçenek 1: Docker ile (Önerilen - Kolay)
- **Docker Desktop** (Windows/Mac/Linux için)
- **Git** (opsiyonel, kod indirmek için)
- **PowerShell** (Windows için) veya **Bash** (Mac/Linux için)

### Seçenek 2: Docker Olmadan (Manuel)
- **PostgreSQL** - Veritabanı
- **Redis** - Cache servisi  
- **Python 3.11+** - Backend için
- **Node.js 18+** - Frontend için

> 💡 **Docker olmadan kurulum için:** [KURULUM_DOCKER_OLMADAN.md](KURULUM_DOCKER_OLMADAN.md) dosyasına bakın

## 🎯 Hızlı Başlangıç (Otomatik - Önerilen)

### Windows (PowerShell)

1. **Projeyi klonlayın veya indirin**
   ```powershell
   cd turkeyclinicfinder
   ```

2. **Kurulum scriptini çalıştırın**
   ```powershell
   .\scripts\setup.ps1
   ```
   Bu script şunları yapar:
   - `.env` dosyası oluşturur
   - Güvenli bir `SECRET_KEY` oluşturur
   - Docker kurulumunu kontrol eder

3. **Uygulamayı başlatın**
   ```powershell
   .\scripts\quick_start.ps1
   ```
   Bu script şunları yapar:
   - Tüm servisleri başlatır (PostgreSQL, Redis, Backend, Frontend)
   - Database migration'larını çalıştırır
   - Servislerin hazır olmasını bekler

4. **Uygulamaya erişin**
   - **Frontend:** http://localhost:3000
   - **Backend API:** http://localhost:8000
   - **API Dokümantasyonu:** http://localhost:8000/api/docs

### Mac/Linux (Bash)

1. **Projeyi klonlayın**
   ```bash
   cd turkeyclinicfinder
   ```

2. **Environment dosyasını oluşturun**
   ```bash
   cp .env.example .env
   ```

3. **SECRET_KEY oluşturun**
   ```bash
   python3 -c "import secrets; print(secrets.token_urlsafe(32))"
   ```
   Çıkan değeri `.env` dosyasındaki `SECRET_KEY=` satırına yapıştırın.

4. **Servisleri başlatın**
   ```bash
   docker-compose up --build
   ```

5. **Yeni bir terminalde migration'ları çalıştırın**
   ```bash
   docker-compose exec backend alembic upgrade head
   ```

6. **Uygulamaya erişin**
   - **Frontend:** http://localhost:3000
   - **Backend API:** http://localhost:8000
   - **API Dokümantasyonu:** http://localhost:8000/api/docs

## 📝 Manuel Kurulum (Alternatif)

Eğer script'leri kullanmak istemiyorsanız, manuel olarak şu adımları izleyin:

### Adım 1: Environment Dosyası

`.env.example` dosyasını `.env` olarak kopyalayın ve gerekli değerleri doldurun:

**Windows:**
```powershell
Copy-Item .env.example .env
```

**Mac/Linux:**
```bash
cp .env.example .env
```

**Zorunlu Ayarlar:**
- `SECRET_KEY` - Güvenli bir rastgele string (en az 32 karakter)
  - Oluşturmak için: `python -c "import secrets; print(secrets.token_urlsafe(32))"`
- `DATABASE_URL` - PostgreSQL bağlantı bilgileri
- `REDIS_URL` - Redis bağlantı bilgileri

**Opsiyonel Ayarlar:**
- `OPENAI_API_KEY` - AI özellikleri için (opsiyonel)
- `SMTP_*` - Email gönderimi için (opsiyonel)

### Adım 2: Docker Servislerini Başlatma

```bash
docker-compose up --build
```

Bu komut şunları başlatır:
- **PostgreSQL** (Port: 5432)
- **Redis** (Port: 6379)
- **Backend API** (Port: 8000)
- **Frontend** (Port: 3000)

### Adım 3: Database Migration

Yeni bir terminal açın ve:

```bash
docker-compose exec backend alembic upgrade head
```

### Adım 4: (Opsiyonel) Database Seed

Örnek verilerle database'i doldurmak için:

```bash
docker-compose exec backend python /app/scripts/seed_db.py
```

## 🔧 Yaygın Sorunlar ve Çözümleri

### Port Zaten Kullanılıyor

Eğer portlar zaten kullanılıyorsa, `docker-compose.yml` dosyasındaki port numaralarını değiştirin:

```yaml
ports:
  - "8001:8000"  # Backend için farklı port
  - "3001:3000"   # Frontend için farklı port
```

Sonra `.env` dosyasında `NEXT_PUBLIC_API_URL` değerini güncelleyin.

### Database Bağlantı Hatası

1. PostgreSQL container'ının çalıştığından emin olun:
   ```bash
   docker-compose ps
   ```

2. Database'in hazır olmasını bekleyin:
   ```bash
   docker-compose exec db pg_isready -U tcf_user
   ```

3. Container'ı yeniden başlatmayı deneyin:
   ```bash
   docker-compose restart db
   ```

### Migration Hataları

Eğer migration hataları alırsanız:

```bash
# Migration durumunu kontrol edin
docker-compose exec backend alembic current

# Migration'ı sıfırdan başlatın (DİKKAT: Veri kaybı olabilir!)
docker-compose exec backend alembic downgrade base
docker-compose exec backend alembic upgrade head
```

### Container'lar Başlamıyor

1. **Docker Desktop'ın çalıştığından emin olun**
2. **Yeterli kaynak (RAM/CPU) olduğundan emin olun** - Docker Desktop ayarlarından kaynakları artırın
3. **Logları kontrol edin:**
   ```bash
   docker-compose logs
   ```
4. **Container'ları temizleyip yeniden başlatın:**
   ```bash
   docker-compose down
   docker-compose up --build
   ```

### SECRET_KEY Hatası

Eğer "SECRET_KEY is required" hatası alırsanız:

1. `.env` dosyasının var olduğundan emin olun
2. `SECRET_KEY` değerinin ayarlandığından emin olun
3. Yeni bir SECRET_KEY oluşturun:
   ```bash
   python -c "import secrets; print(secrets.token_urlsafe(32))"
   ```

## 📊 Servis Durumunu Kontrol Etme

### Tüm servislerin durumunu görüntüleme

```bash
docker-compose ps
```

### Belirli bir servisin loglarını görüntüleme

```bash
# Backend logları
docker-compose logs -f backend

# Frontend logları
docker-compose logs -f frontend

# Database logları
docker-compose logs -f db

# Tüm loglar
docker-compose logs -f
```

### Servisleri durdurma

```bash
docker-compose down
```

### Servisleri durdurup volume'ları da silme (DİKKAT: Veri kaybı!)

```bash
docker-compose down -v
```

Bu komut tüm veritabanı verilerini de silecektir!

## 🔐 Güvenlik Notları

1. **Production'da mutlaka değiştirin:**
   - `SECRET_KEY` - Güçlü, rastgele bir değer (en az 32 karakter)
   - `DEBUG=false` - Production'da debug modunu mutlaka kapatın
   - Database şifreleri - Güçlü ve benzersiz şifreler kullanın
   - `ALLOWED_ORIGINS` - Sadece kendi domain'inizi ekleyin (virgülle ayırın)

2. **Environment dosyasını asla commit etmeyin:**
   - `.env` dosyası `.gitignore`'da olmalı
   - Sadece `.env.example` dosyasını commit edin
   - Production'da environment değişkenlerini platform ayarlarından yönetin

3. **API Keys:**
   - API key'lerinizi asla kod içine yazmayın
   - Environment değişkenleri kullanın
   - Production'da güvenli bir secret management sistemi kullanın

## 🚀 Production Deployment

Production ortamına deploy etmek için:

1. **Environment değişkenlerini ayarlayın:**
   - `.env` dosyasını production değerleriyle güncelleyin
   - `DEBUG=false` yapın
   - Güçlü `SECRET_KEY` oluşturun (en az 32 karakter)
   - Production database URL'ini ayarlayın
   - CORS origin'lerini sadece kendi domain'inizle sınırlandırın

2. **Güvenlik:**
   - Tüm API key'leri production değerleriyle değiştirin
   - HTTPS kullanın
   - Rate limiting ayarlarını gözden geçirin

3. **Database:**
   - Production database backup stratejisi oluşturun
   - Migration'ları production'da dikkatli çalıştırın

4. **Monitoring:**
   - Logları izleyin
   - Error tracking sistemi kurun
   - Performance monitoring yapın

## 📚 Daha Fazla Bilgi

- [Backend API Dokümantasyonu](http://localhost:8000/api/docs)
- [README.md](README.md) - Genel proje bilgileri
- [Docker Compose Dokümantasyonu](https://docs.docker.com/compose/)

## 💡 İpuçları

- **İlk başlatmada servislerin hazır olması 1-2 dakika sürebilir** - Sabırlı olun
- **Database migration'ları her zaman migration komutunu çalıştırdıktan sonra kontrol edin**
- **Logları takip etmek için:** `docker-compose logs -f` kullanın
- **Sorun yaşarsanız önce container loglarını kontrol edin**
- **Container'ları yeniden başlatmak için:** `docker-compose restart`
- **Temiz bir başlangıç için:** `docker-compose down -v` (DİKKAT: Veriler silinir!)

## 🆘 Yardım ve Destek

Sorun yaşıyorsanız:

1. **Logları kontrol edin:**
   ```bash
   docker-compose logs
   ```

2. **Container durumunu kontrol edin:**
   ```bash
   docker-compose ps
   ```

3. **Servisleri yeniden başlatın:**
   ```bash
   docker-compose restart
   ```

4. **GitHub Issues'da sorun açın:**
   - Detaylı hata mesajlarını ekleyin
   - Log çıktılarını paylaşın
   - Sistem bilgilerinizi belirtin

5. **README.md dosyasındaki troubleshooting bölümüne bakın**

## ✅ Kurulum Kontrol Listesi

Kurulumun başarılı olduğunu kontrol etmek için:

- [ ] Docker Desktop çalışıyor
- [ ] `.env` dosyası oluşturuldu ve dolduruldu
- [ ] `SECRET_KEY` ayarlandı
- [ ] Tüm container'lar çalışıyor (`docker-compose ps`)
- [ ] Frontend erişilebilir (http://localhost:3000)
- [ ] Backend API erişilebilir (http://localhost:8000)
- [ ] API Dokümantasyonu açılıyor (http://localhost:8000/api/docs)
- [ ] Database migration'ları tamamlandı
- [ ] Loglarda hata yok (`docker-compose logs`)

