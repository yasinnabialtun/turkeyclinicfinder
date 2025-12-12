# Basit Kurulum Scripti - Sadece Frontend
# Gereksiz şeyler yok, sadece Next.js + Firebase

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Basit Kurulum - Next.js + Firebase" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Node.js kontrolü
Write-Host "Node.js kontrol ediliyor..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js bulunamadı!" -ForegroundColor Red
    Write-Host "   İndir: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Frontend klasörüne git
if (-not (Test-Path "frontend")) {
    Write-Host "❌ Frontend klasörü bulunamadı!" -ForegroundColor Red
    exit 1
}

Set-Location frontend

# Paketleri kur
Write-Host ""
Write-Host "Paketler kuruluyor..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Paketler kuruldu!" -ForegroundColor Green
} else {
    Write-Host "❌ Paket kurulumu başarısız!" -ForegroundColor Red
    exit 1
}

# .env.local kontrolü
Write-Host ""
Write-Host ".env.local kontrol ediliyor..." -ForegroundColor Yellow
if (-not (Test-Path ".env.local")) {
    Write-Host "⚠️  .env.local dosyası oluşturuluyor..." -ForegroundColor Yellow
    
    $envContent = @"
# Firebase Configuration
# Firebase Console'dan al: https://console.firebase.google.com/
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
"@
    
    Set-Content -Path ".env.local" -Value $envContent
    Write-Host "✅ .env.local oluşturuldu!" -ForegroundColor Green
    Write-Host "⚠️  Firebase bilgilerini eklemeyi unutma!" -ForegroundColor Yellow
} else {
    Write-Host "✅ .env.local mevcut" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Kurulum Tamamlandı!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Sonraki adımlar:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Firebase projesi oluştur:" -ForegroundColor White
Write-Host "   https://console.firebase.google.com/" -ForegroundColor Gray
Write-Host ""
Write-Host "2. .env.local dosyasını düzenle:" -ForegroundColor White
Write-Host "   Firebase config bilgilerini ekle" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Projeyi çalıştır:" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Tarayıcıda aç:" -ForegroundColor White
Write-Host "   http://localhost:3000" -ForegroundColor Gray
Write-Host ""
Write-Host "Detaylı rehber: BASIT_KURULUM.md" -ForegroundColor Cyan
Write-Host ""

Set-Location ..

