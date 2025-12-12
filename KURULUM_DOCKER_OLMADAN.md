# 🚀 Docker Olmadan Kurulum Rehberi

Docker Desktop kurmadan projeyi çalıştırmak için manuel kurulum yapmanız gerekiyor.

## 📋 Gereksinimler

1. **PostgreSQL** - Veritabanı
2. **Redis** - Cache servisi
3. **Python 3.11+** - Backend için
4. **Node.js 18+** - Frontend için

## 🔧 Adım 1: PostgreSQL Kurulumu

### Windows için:

1. **PostgreSQL İndirin:**
   - https://www.postgresql.org/download/windows/
   - "Download the installer" butonuna tıklayın
   - İndirilen `.exe` dosyasını çalıştırın

2. **Kurulum Sırasında:**
   - Port: `5432` (varsayılan)
   - Şifre: `tcf_password` (veya kendi şifreniz)
   - Superuser: `postgres`

3. **Database Oluşturun:**
   ```sql
   -- PostgreSQL komut satırından (psql) veya pgAdmin'den:
   CREATE DATABASE tcf;
   CREATE USER tcf_user WITH PASSWORD 'tcf_password';
   GRANT ALL PRIVILEGES ON DATABASE tcf TO tcf_user;
   ```

### Alternatif: Portable PostgreSQL
- https://www.enterprisedb.com/download-postgresql-binaries
- Zip dosyasını indirip açın, çalıştırın

## 🔧 Adım 2: Redis Kurulumu

### Windows için:

**Seçenek 1: Memurai (Redis for Windows)**
1. https://www.memurai.com/get-memurai
2. İndirin ve kurun
3. Otomatik olarak port 6379'da çalışır

**Seçenek 2: WSL ile Redis**
```bash
# WSL içinde:
sudo apt-get update
sudo apt-get install redis-server
redis-server
```

**Seçenek 3: Docker ile sadece Redis (en kolay)**
- Sadece Redis için Docker kullanabilirsiniz
- Diğer servisler için Docker gerekmez

## 🔧 Adım 3: Python Kurulumu

1. **Python İndirin:**
   - https://www.python.org/downloads/
   - Python 3.11 veya üzeri sürümü indirin

2. **Kurulum Sırasında:**
   - ✅ "Add Python to PATH" seçeneğini işaretleyin (ÖNEMLİ!)

3. **Kurulumu Doğrulayın:**
   ```powershell
   python --version
   pip --version
   ```

## 🔧 Adım 4: Node.js Kurulumu

1. **Node.js İndirin:**
   - https://nodejs.org/
   - LTS (Long Term Support) sürümünü indirin (18+)

2. **Kurulum:**
   - İndirilen `.msi` dosyasını çalıştırın
   - Varsayılan ayarlarla kurun

3. **Kurulumu Doğrulayın:**
   ```powershell
   node --version
   npm --version
   ```

## 🚀 Adım 5: Projeyi Kurma

### Backend Kurulumu

```powershell
# Backend klasörüne gidin
cd backend

# Virtual environment oluşturun
python -m venv venv

# Virtual environment'ı aktifleştirin
.\venv\Scripts\activate

# Paketleri kurun
pip install -r requirements.txt

# .env dosyasını backend klasörüne kopyalayın
Copy-Item ..\.env .env

# .env dosyasını düzenleyin - DATABASE_URL'yi güncelleyin:
# DATABASE_URL=postgresql://tcf_user:tcf_password@localhost:5432/tcf
```

### Frontend Kurulumu

```powershell
# Frontend klasörüne gidin
cd ..\frontend

# Paketleri kurun
npm install

# .env.local dosyası oluşturun (opsiyonel)
# NEXT_PUBLIC_API_URL=http://localhost:8000
```

## 🚀 Adım 6: Servisleri Başlatma

### 1. PostgreSQL'i Başlatın
- PostgreSQL servisi Windows'ta otomatik başlar
- Kontrol için: Services (Hizmetler) uygulamasından "postgresql" servisini kontrol edin

### 2. Redis'i Başlatın
- Memurai kurduysanız otomatik başlar
- Veya WSL'de: `redis-server`

### 3. Backend'i Başlatın

```powershell
# Backend klasöründe
cd backend
.\venv\Scripts\activate
python main.py
```

Veya:
```powershell
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 4. Frontend'i Başlatın

```powershell
# Yeni bir PowerShell penceresi açın
cd frontend
npm run dev
```

## 📝 .env Dosyası Ayarları

`.env` dosyasını şu şekilde güncelleyin:

```env
# Database - localhost kullanın
DATABASE_URL=postgresql://tcf_user:tcf_password@localhost:5432/tcf

# Redis - localhost kullanın
REDIS_URL=redis://localhost:6379/0

# Diğer ayarlar aynı kalabilir
```

## 🔄 Database Migration

Backend başladıktan sonra:

```powershell
cd backend
.\venv\Scripts\activate
alembic upgrade head
```

## ✅ Kontrol

1. **Backend:** http://localhost:8000/api/docs
2. **Frontend:** http://localhost:3000
3. **Health Check:** http://localhost:8000/health

## ⚠️ Yaygın Sorunlar

### PostgreSQL bağlantı hatası
- PostgreSQL servisinin çalıştığından emin olun
- Firewall ayarlarını kontrol edin
- `localhost` yerine `127.0.0.1` deneyin

### Redis bağlantı hatası
- Redis'in çalıştığından emin olun
- Port 6379'un açık olduğundan emin olun

### Port zaten kullanılıyor
- 8000 portu: Backend için farklı port kullanın
- 3000 portu: Frontend için farklı port kullanın
- `uvicorn main:app --port 8001` gibi

## 💡 İpuçları

1. **Her seferinde başlatmak için:**
   - Backend: `cd backend && .\venv\Scripts\activate && python main.py`
   - Frontend: `cd frontend && npm run dev`

2. **Otomatik başlatma scripti oluşturun:**
   ```powershell
   # start_backend.ps1
   cd backend
   .\venv\Scripts\activate
   python main.py
   ```

3. **Tüm servisleri tek seferde başlatmak için:**
   - Her servis için ayrı PowerShell penceresi açın
   - Veya `start-process` kullanarak script oluşturun

## 🆚 Docker vs Manuel Kurulum

| Özellik | Docker | Manuel |
|---------|--------|--------|
| Kurulum Süresi | 5 dk | 30-60 dk |
| Kolaylık | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| Sistem Temizliği | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Kaynak Kullanımı | Orta | Düşük |
| Güncelleme | Kolay | Zor |

## 🎯 Öneri

Eğer Docker kurmak istemiyorsanız:
- **En kolay:** Sadece Redis için Docker kullanın, diğerleri manuel
- **Orta:** PostgreSQL ve Redis için ayrı kurulum
- **Zor:** Hepsi manuel (yukarıdaki rehber)

Hangi yöntemi tercih edersiniz?

