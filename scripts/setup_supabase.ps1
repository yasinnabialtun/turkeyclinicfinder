# Supabase Kurulum Scripti
# Ücretsiz PostgreSQL database

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Supabase Kurulum" -ForegroundColor Cyan
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

# Supabase client kur
Write-Host ""
Write-Host "Supabase client kuruluyor..." -ForegroundColor Yellow
npm install @supabase/supabase-js

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Supabase client kuruldu!" -ForegroundColor Green
} else {
    Write-Host "❌ Kurulum başarısız!" -ForegroundColor Red
    exit 1
}

# .env.local kontrolü
Write-Host ""
Write-Host ".env.local kontrol ediliyor..." -ForegroundColor Yellow
$envFile = ".env.local"
$envContent = ""

if (Test-Path $envFile) {
    $envContent = Get-Content $envFile -Raw
} else {
    $envContent = ""
}

# Supabase değişkenlerini ekle
if ($envContent -notmatch "NEXT_PUBLIC_SUPABASE_URL") {
    $supabaseConfig = @"

# Supabase Configuration
# Supabase Console'dan al: https://supabase.com/dashboard
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
"@
    
    if ($envContent) {
        $envContent += "`n$supabaseConfig"
    } else {
        $envContent = $supabaseConfig
    }
    
    Set-Content -Path $envFile -Value $envContent
    Write-Host "✅ .env.local dosyasına Supabase değişkenleri eklendi!" -ForegroundColor Green
} else {
    Write-Host "✅ Supabase değişkenleri zaten mevcut" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Kurulum Tamamlandı!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Sonraki adımlar:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Supabase projesi oluştur:" -ForegroundColor White
Write-Host "   https://supabase.com/" -ForegroundColor Gray
Write-Host "   - GitHub ile giriş yap" -ForegroundColor Gray
Write-Host "   - New Project oluştur" -ForegroundColor Gray
Write-Host "   - Database password kaydet!" -ForegroundColor Red
Write-Host ""
Write-Host "2. API Keys al:" -ForegroundColor White
Write-Host "   Settings > API" -ForegroundColor Gray
Write-Host "   - Project URL kopyala" -ForegroundColor Gray
Write-Host "   - anon public key kopyala" -ForegroundColor Gray
Write-Host ""
Write-Host "3. .env.local dosyasını düzenle:" -ForegroundColor White
Write-Host "   frontend\.env.local" -ForegroundColor Gray
Write-Host "   Supabase bilgilerini yapıştır" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Database tablolarını oluştur:" -ForegroundColor White
Write-Host "   Supabase Dashboard > SQL Editor" -ForegroundColor Gray
Write-Host "   SUPABASE_KURULUM.md dosyasındaki SQL'i çalıştır" -ForegroundColor Gray
Write-Host ""
Write-Host "Detaylı rehber: SUPABASE_KURULUM.md" -ForegroundColor Cyan
Write-Host ""

Set-Location ..

