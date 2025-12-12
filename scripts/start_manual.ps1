# Manuel Kurulum Başlatma Scripti (Docker Olmadan)
# Bu script PostgreSQL ve Redis'in çalıştığını varsayar

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Turkey Clinic Finder - Manuel Başlatma" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# PostgreSQL kontrolü
Write-Host "PostgreSQL kontrol ediliyor..." -ForegroundColor Yellow
try {
    $pgTest = Test-NetConnection -ComputerName localhost -Port 5432 -WarningAction SilentlyContinue
    if ($pgTest.TcpTestSucceeded) {
        Write-Host "✅ PostgreSQL çalışıyor" -ForegroundColor Green
    } else {
        Write-Host "❌ PostgreSQL çalışmıyor! Lütfen PostgreSQL'i başlatın." -ForegroundColor Red
        Write-Host "   Services (Hizmetler) uygulamasından 'postgresql' servisini başlatın" -ForegroundColor Yellow
        exit 1
    }
} catch {
    Write-Host "⚠️  PostgreSQL kontrol edilemedi" -ForegroundColor Yellow
}

# Redis kontrolü
Write-Host "Redis kontrol ediliyor..." -ForegroundColor Yellow
try {
    $redisTest = Test-NetConnection -ComputerName localhost -Port 6379 -WarningAction SilentlyContinue
    if ($redisTest.TcpTestSucceeded) {
        Write-Host "✅ Redis çalışıyor" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Redis çalışmıyor (opsiyonel, devam ediliyor)" -ForegroundColor Yellow
    }
} catch {
    Write-Host "⚠️  Redis kontrol edilemedi (opsiyonel)" -ForegroundColor Yellow
}

# Backend kontrolü
Write-Host ""
Write-Host "Backend hazırlanıyor..." -ForegroundColor Yellow
if (-not (Test-Path "backend\venv")) {
    Write-Host "❌ Backend virtual environment bulunamadı!" -ForegroundColor Red
    Write-Host "   Önce backend kurulumunu yapın:" -ForegroundColor Yellow
    Write-Host "   cd backend" -ForegroundColor White
    Write-Host "   python -m venv venv" -ForegroundColor White
    Write-Host "   .\venv\Scripts\activate" -ForegroundColor White
    Write-Host "   pip install -r requirements.txt" -ForegroundColor White
    exit 1
}

# Frontend kontrolü
Write-Host "Frontend hazırlanıyor..." -ForegroundColor Yellow
if (-not (Test-Path "frontend\node_modules")) {
    Write-Host "❌ Frontend node_modules bulunamadı!" -ForegroundColor Red
    Write-Host "   Önce frontend kurulumunu yapın:" -ForegroundColor Yellow
    Write-Host "   cd frontend" -ForegroundColor White
    Write-Host "   npm install" -ForegroundColor White
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Servisleri Başlatma" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Backend başlat
Write-Host "Backend başlatılıyor..." -ForegroundColor Yellow
$backendScript = @"
cd backend
.\venv\Scripts\activate
python main.py
"@

Start-Process powershell -ArgumentList "-NoExit", "-Command", $backendScript

# Kısa bir bekleme
Start-Sleep -Seconds 3

# Frontend başlat
Write-Host "Frontend başlatılıyor..." -ForegroundColor Yellow
$frontendScript = @"
cd frontend
npm run dev
"@

Start-Process powershell -ArgumentList "-NoExit", "-Command", $frontendScript

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Servisler Başlatıldı!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Açılan PowerShell pencerelerinde servisler çalışıyor." -ForegroundColor Yellow
Write-Host ""
Write-Host "Uygulamaya erişin:" -ForegroundColor Yellow
Write-Host "  Frontend: http://localhost:3000" -ForegroundColor White
Write-Host "  Backend API: http://localhost:8000" -ForegroundColor White
Write-Host "  API Dokümantasyonu: http://localhost:8000/api/docs" -ForegroundColor White
Write-Host ""
Write-Host "Servisleri durdurmak için PowerShell pencerelerini kapatın." -ForegroundColor Yellow
Write-Host ""

