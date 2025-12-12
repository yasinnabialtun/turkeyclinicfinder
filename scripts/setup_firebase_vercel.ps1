# Firebase + Vercel Kurulum Scripti
# Bu script Firebase ve Vercel için gerekli yapılandırmaları yapar

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Firebase + Vercel Kurulum" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Node.js kontrolü
Write-Host "Node.js kontrol ediliyor..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js bulundu: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js bulunamadı! Lütfen Node.js kurun:" -ForegroundColor Red
    Write-Host "   https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# npm kontrolü
Write-Host "npm kontrol ediliyor..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✅ npm bulundu: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm bulunamadı!" -ForegroundColor Red
    exit 1
}

# Frontend klasörüne git
Write-Host ""
Write-Host "Frontend klasörüne geçiliyor..." -ForegroundColor Yellow
if (-not (Test-Path "frontend")) {
    Write-Host "❌ Frontend klasörü bulunamadı!" -ForegroundColor Red
    exit 1
}

Set-Location frontend

# Firebase SDK kurulumu
Write-Host ""
Write-Host "Firebase SDK kuruluyor..." -ForegroundColor Yellow
npm install firebase

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Firebase SDK kuruldu!" -ForegroundColor Green
} else {
    Write-Host "❌ Firebase SDK kurulumu başarısız!" -ForegroundColor Red
    exit 1
}

# .env.local dosyası kontrolü
Write-Host ""
Write-Host ".env.local dosyası kontrol ediliyor..." -ForegroundColor Yellow
if (-not (Test-Path ".env.local")) {
    Write-Host "⚠️  .env.local dosyası bulunamadı, oluşturuluyor..." -ForegroundColor Yellow
    
    $envContent = @"
# Firebase Configuration
# Bu değerleri Firebase Console'dan alın: https://console.firebase.google.com/
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# Vercel Deployment
NEXT_PUBLIC_API_URL=https://your-api-url.vercel.app
"@
    
    Set-Content -Path ".env.local" -Value $envContent
    Write-Host "✅ .env.local dosyası oluşturuldu!" -ForegroundColor Green
    Write-Host "⚠️  Lütfen .env.local dosyasını düzenleyip Firebase bilgilerinizi ekleyin!" -ForegroundColor Yellow
} else {
    Write-Host "✅ .env.local dosyası mevcut" -ForegroundColor Green
}

# Vercel CLI kontrolü
Write-Host ""
Write-Host "Vercel CLI kontrol ediliyor..." -ForegroundColor Yellow
try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI bulundu: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Vercel CLI bulunamadı. Kurmak için:" -ForegroundColor Yellow
    Write-Host "   npm i -g vercel" -ForegroundColor White
    Write-Host "   Sonra: vercel login" -ForegroundColor White
}

# Özet
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Kurulum Tamamlandı!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Sonraki adımlar:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Firebase Projesi Oluşturun:" -ForegroundColor White
Write-Host "   https://console.firebase.google.com/" -ForegroundColor Gray
Write-Host "   - Yeni proje oluşturun" -ForegroundColor Gray
Write-Host "   - Firestore Database'i aktifleştirin" -ForegroundColor Gray
Write-Host "   - Authentication'ı aktifleştirin" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Firebase Yapılandırma Bilgilerini Alın:" -ForegroundColor White
Write-Host "   - Firebase Console > Project Settings > Your apps" -ForegroundColor Gray
Write-Host "   - Web app ekleyin ve config bilgilerini kopyalayın" -ForegroundColor Gray
Write-Host ""
Write-Host "3. .env.local Dosyasını Düzenleyin:" -ForegroundColor White
Write-Host "   frontend\.env.local dosyasını açın" -ForegroundColor Gray
Write-Host "   Firebase bilgilerinizi yapıştırın" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Vercel'e Deploy Edin:" -ForegroundColor White
Write-Host "   vercel login" -ForegroundColor Gray
Write-Host "   vercel" -ForegroundColor Gray
Write-Host ""
Write-Host "Detaylı rehber: FIREBASE_VERCEL_KURULUM.md" -ForegroundColor Cyan
Write-Host ""

Set-Location ..

