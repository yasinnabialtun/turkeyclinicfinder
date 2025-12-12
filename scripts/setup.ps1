# Turkey Clinic Finder - Kurulum Scripti
# Bu script projeyi ilk kez kurmak için gereken adımları yapar

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Turkey Clinic Finder - Kurulum Scripti" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# .env dosyasının var olup olmadığını kontrol et
if (Test-Path ".env") {
    Write-Host "⚠️  .env dosyası zaten mevcut!" -ForegroundColor Yellow
    $overwrite = Read-Host "Üzerine yazmak istiyor musunuz? (evet/hayır)"
    if ($overwrite -ne "evet") {
        Write-Host "Kurulum iptal edildi." -ForegroundColor Yellow
        exit 0
    }
}

# .env.example dosyasını .env olarak kopyala
if (Test-Path ".env.example") {
    Copy-Item ".env.example" ".env"
    Write-Host "✅ .env.example dosyasından .env dosyası oluşturuldu" -ForegroundColor Green
} else {
    Write-Host "❌ .env.example dosyası bulunamadı!" -ForegroundColor Red
    exit 1
}

# SECRET_KEY oluştur
Write-Host ""
Write-Host "SECRET_KEY oluşturuluyor..." -ForegroundColor Yellow
try {
    $secretKey = python -c "import secrets; print(secrets.token_urlsafe(32))"
    if ($LASTEXITCODE -eq 0) {
        # .env dosyasını oluşturulan SECRET_KEY ile güncelle
        $envContent = Get-Content ".env" -Raw
        $envContent = $envContent -replace "SECRET_KEY=.*", "SECRET_KEY=$secretKey"
        Set-Content ".env" -Value $envContent -NoNewline
        Write-Host "✅ SECRET_KEY oluşturuldu ve ayarlandı" -ForegroundColor Green
    } else {
        Write-Host "⚠️  SECRET_KEY otomatik oluşturulamadı. Lütfen .env dosyasında manuel olarak ayarlayın" -ForegroundColor Yellow
    }
} catch {
    Write-Host "⚠️  Python bulunamadı. Lütfen SECRET_KEY'i .env dosyasında manuel olarak ayarlayın" -ForegroundColor Yellow
    Write-Host "   Bir tane oluşturmak için: https://generate-secret.vercel.app/32" -ForegroundColor Yellow
}

# Docker kontrolü
Write-Host ""
Write-Host "Docker kurulumu kontrol ediliyor..." -ForegroundColor Yellow
try {
    $dockerVersion = docker --version
    Write-Host "✅ Docker bulundu: $dockerVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker bulunamadı! Lütfen Docker Desktop'ı yükleyin:" -ForegroundColor Red
    Write-Host "   https://www.docker.com/products/docker-desktop" -ForegroundColor Yellow
    exit 1
}

# Docker Compose kontrolü
Write-Host ""
Write-Host "Docker Compose kontrol ediliyor..." -ForegroundColor Yellow
try {
    $composeVersion = docker compose version
    Write-Host "✅ Docker Compose bulundu: $composeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker Compose bulunamadı!" -ForegroundColor Red
    exit 1
}

# Özet
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Kurulum Tamamlandı!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Sonraki adımlar:" -ForegroundColor Yellow
Write-Host "1. .env dosyasını gözden geçirin ve yapılandırmanızı güncelleyin" -ForegroundColor White
Write-Host "2. AI özellikleri için OPENAI_API_KEY ekleyin (opsiyonel)" -ForegroundColor White
Write-Host "3. Çalıştırın: docker-compose up --build" -ForegroundColor White
Write-Host "4. Servislerin başlamasını bekleyin, sonra migration'ları çalıştırın:" -ForegroundColor White
Write-Host "   docker-compose exec backend alembic upgrade head" -ForegroundColor White
Write-Host "5. Database'i örnek verilerle doldurun (opsiyonel):" -ForegroundColor White
Write-Host "   docker-compose exec backend python /app/scripts/seed_db.py" -ForegroundColor White
Write-Host ""
Write-Host "Uygulamaya erişin:" -ForegroundColor Yellow
Write-Host "  Frontend: http://localhost:3000" -ForegroundColor White
Write-Host "  Backend API: http://localhost:8000" -ForegroundColor White
Write-Host "  API Dokümantasyonu: http://localhost:8000/api/docs" -ForegroundColor White
Write-Host ""
