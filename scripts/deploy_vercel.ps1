# Vercel Deploy Scripti
# Ücretsiz Vercel planı ile deploy

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Vercel'e Deploy" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Node.js kontrolü
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js bulunamadı!" -ForegroundColor Red
    exit 1
}

# Frontend klasörüne git
if (-not (Test-Path "frontend")) {
    Write-Host "❌ Frontend klasörü bulunamadı!" -ForegroundColor Red
    exit 1
}

Set-Location frontend

# Vercel CLI kontrolü
Write-Host ""
Write-Host "Vercel CLI kontrol ediliyor..." -ForegroundColor Yellow
try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Vercel CLI bulunamadı, kuruluyor..." -ForegroundColor Yellow
    npm i -g vercel
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Vercel CLI kurulumu başarısız!" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Vercel CLI kuruldu!" -ForegroundColor Green
}

# Login kontrolü
Write-Host ""
Write-Host "Vercel login kontrol ediliyor..." -ForegroundColor Yellow
try {
    vercel whoami | Out-Null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Vercel'e giriş yapılmış" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Vercel'e giriş yapılmamış" -ForegroundColor Yellow
        Write-Host "Giriş yapılıyor..." -ForegroundColor Yellow
        vercel login
    }
} catch {
    Write-Host "⚠️  Giriş gerekli, açılan tarayıcıdan giriş yap..." -ForegroundColor Yellow
    vercel login
}

# Deploy
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Deploy Başlatılıyor..." -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Vercel deploy sihirbazı başlayacak..." -ForegroundColor Yellow
Write-Host "Sorulara şu şekilde cevap ver:" -ForegroundColor Yellow
Write-Host "  - Set up and deploy? Y" -ForegroundColor White
Write-Host "  - Which scope? (Varsayılanı seç)" -ForegroundColor White
Write-Host "  - Link to existing project? N" -ForegroundColor White
Write-Host "  - Project name? (Enter - varsayılan)" -ForegroundColor White
Write-Host "  - Directory? . (nokta)" -ForegroundColor White
Write-Host "  - Override settings? N" -ForegroundColor White
Write-Host ""

# Deploy komutu
vercel

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "Deploy Başarılı! 🎉" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Production'a deploy etmek için:" -ForegroundColor Yellow
    Write-Host "  vercel --prod" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "⚠️  Deploy sırasında sorun olabilir, logları kontrol et" -ForegroundColor Yellow
}

Set-Location ..

