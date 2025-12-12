# Hızlı Başlatma Scripti - Tüm uygulamayı başlatır
# Bu script tüm servisleri başlatır ve migration'ları çalıştırır

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Turkey Clinic Finder - Hızlı Başlatma" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# .env dosyasının var olup olmadığını kontrol et
if (-not (Test-Path ".env")) {
    Write-Host "❌ .env dosyası bulunamadı!" -ForegroundColor Red
    Write-Host "Lütfen önce çalıştırın: .\scripts\setup.ps1" -ForegroundColor Yellow
    exit 1
}

# Docker kontrolü
try {
    docker --version | Out-Null
} catch {
    Write-Host "❌ Docker bulunamadı! Lütfen Docker Desktop'ı yükleyin" -ForegroundColor Red
    exit 1
}

Write-Host "Docker Compose ile servisler başlatılıyor..." -ForegroundColor Yellow
Write-Host ""

# Servisleri arka planda başlat
docker-compose up -d --build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Servisler başlatılamadı!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "⏳ Servislerin hazır olması bekleniyor..." -ForegroundColor Yellow
Start-Sleep -Seconds 10

# Database'in hazır olmasını bekle
Write-Host "Database bağlantısı kontrol ediliyor..." -ForegroundColor Yellow
$maxRetries = 30
$retryCount = 0
$dbReady = $false

while ($retryCount -lt $maxRetries -and -not $dbReady) {
    try {
        $result = docker-compose exec -T db pg_isready -U tcf_user
        if ($LASTEXITCODE -eq 0) {
            $dbReady = $true
            Write-Host "✅ Database hazır!" -ForegroundColor Green
        }
    } catch {
        # Beklemeye devam et
    }
    
    if (-not $dbReady) {
        $retryCount++
        Write-Host "   Bekleniyor... ($retryCount/$maxRetries)" -ForegroundColor Gray
        Start-Sleep -Seconds 2
    }
}

if (-not $dbReady) {
    Write-Host "⚠️  Database henüz hazır olmayabilir. Migration'ları daha sonra manuel olarak çalıştırabilirsiniz." -ForegroundColor Yellow
}

# Migration'ları çalıştır
Write-Host ""
Write-Host "Database migration'ları çalıştırılıyor..." -ForegroundColor Yellow
docker-compose exec -T backend alembic upgrade head

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Migration'lar tamamlandı!" -ForegroundColor Green
} else {
    Write-Host "⚠️  Migration başarısız oldu. Manuel olarak çalıştırmanız gerekebilir:" -ForegroundColor Yellow
    Write-Host "   docker-compose exec backend alembic upgrade head" -ForegroundColor White
}

# Özet
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Servisler Başlatıldı!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Uygulamaya erişin:" -ForegroundColor Yellow
Write-Host "  Frontend: http://localhost:3000" -ForegroundColor White
Write-Host "  Backend API: http://localhost:8000" -ForegroundColor White
Write-Host "  API Dokümantasyonu: http://localhost:8000/api/docs" -ForegroundColor White
Write-Host ""
Write-Host "Logları görüntülemek için:" -ForegroundColor Yellow
Write-Host "  docker-compose logs -f" -ForegroundColor White
Write-Host ""
Write-Host "Servisleri durdurmak için:" -ForegroundColor Yellow
Write-Host "  docker-compose down" -ForegroundColor White
Write-Host ""
Write-Host "Opsiyonel: Database'i örnek verilerle doldurun:" -ForegroundColor Yellow
Write-Host "  docker-compose exec backend python /app/scripts/seed_db.py" -ForegroundColor White
Write-Host ""
