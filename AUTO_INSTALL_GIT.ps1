# Otomatik Git Kurulum ve Push Script
# PowerShell'i YÖNETİCİ OLARAK çalıştırın!

Write-Host "🚀 Git Kurulum ve Otomatik Push Script" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Git kurulu mu kontrol et
Write-Host "🔍 Git kurulumunu kontrol ediliyor..." -ForegroundColor Yellow
try {
    $gitVersion = git --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Git zaten kurulu: $gitVersion" -ForegroundColor Green
        $gitInstalled = $true
    } else {
        $gitInstalled = $false
    }
} catch {
    $gitInstalled = $false
}

if (-not $gitInstalled) {
    Write-Host "❌ Git kurulu değil. Kurulum başlatılıyor..." -ForegroundColor Red
    Write-Host ""
    Write-Host "📥 Git indirme linki: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "⚠️  MANUEL ADIMLAR:" -ForegroundColor Red
    Write-Host "1. Yukarıdaki linkten Git'i indirin" -ForegroundColor Cyan
    Write-Host "2. İndirilen .exe dosyasını çalıştırın" -ForegroundColor Cyan
    Write-Host "3. Kurulum sırasında TÜM VARSayılan ayarları kabul edin" -ForegroundColor Cyan
    Write-Host "4. Özellikle 'Add Git to PATH' seçeneğini işaretleyin" -ForegroundColor Cyan
    Write-Host "5. Kurulum tamamlandıktan sonra PowerShell'i YENİDEN BAŞLATIN" -ForegroundColor Cyan
    Write-Host "6. Bu script'i tekrar çalıştırın" -ForegroundColor Cyan
    Write-Host ""
    
    # Git indirme sayfasını aç
    Write-Host "🌐 Git indirme sayfası açılıyor..." -ForegroundColor Yellow
    Start-Process "https://git-scm.com/download/win"
    
    Write-Host ""
    Write-Host "⏸️  Git kurulumunu tamamladıktan sonra bu script'i tekrar çalıştırın." -ForegroundColor Yellow
    pause
    exit
}

# Git yapılandırması kontrol et
Write-Host ""
Write-Host "⚙️  Git yapılandırması kontrol ediliyor..." -ForegroundColor Yellow
$userName = git config --global user.name 2>&1
$userEmail = git config --global user.email 2>&1

if (-not $userName -or $userName -match "error") {
    Write-Host "📝 Git kullanıcı bilgileri ayarlanıyor..." -ForegroundColor Yellow
    git config --global user.name "Yasin Nabialtun"
    git config --global user.email "yasinnabialtun@gmail.com"
    Write-Host "✅ Git kullanıcı bilgileri ayarlandı" -ForegroundColor Green
} else {
    Write-Host "✅ Git yapılandırması mevcut: $userName <$userEmail>" -ForegroundColor Green
}

# Proje klasörüne git
Write-Host ""
Write-Host "📂 Proje klasörüne gidiliyor..." -ForegroundColor Yellow
$projectPath = "C:\Users\yasin\OneDrive\Masaüstü\turkeyclinicfinder"
if (Test-Path $projectPath) {
    Set-Location $projectPath
    Write-Host "✅ Klasöre gidildi: $projectPath" -ForegroundColor Green
} else {
    Write-Host "❌ Proje klasörü bulunamadı: $projectPath" -ForegroundColor Red
    pause
    exit
}

# Git repository kontrolü
Write-Host ""
Write-Host "🔍 Git repository kontrol ediliyor..." -ForegroundColor Yellow
if (Test-Path ".git") {
    Write-Host "✅ Git repository bulundu" -ForegroundColor Green
} else {
    Write-Host "⚠️  Git repository bulunamadı. Başlatılıyor..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Git repository başlatıldı" -ForegroundColor Green
}

# Remote kontrolü
Write-Host ""
Write-Host "🔗 Remote repository kontrol ediliyor..." -ForegroundColor Yellow
$remotes = git remote -v 2>&1
if ($remotes -match "origin") {
    Write-Host "✅ Remote repository mevcut" -ForegroundColor Green
} else {
    Write-Host "⚠️  Remote repository bulunamadı." -ForegroundColor Yellow
    Write-Host "GitHub repository URL'inizi girin (örn: https://github.com/username/turkeyclinicfinder.git):" -ForegroundColor Cyan
    $repoUrl = Read-Host
    if ($repoUrl) {
        git remote add origin $repoUrl
        Write-Host "✅ Remote repository eklendi" -ForegroundColor Green
    } else {
        Write-Host "❌ Remote repository URL'i girilmedi. Push yapılamaz." -ForegroundColor Red
        pause
        exit
    }
}

# Değişiklikleri kontrol et
Write-Host ""
Write-Host "📋 Değişiklikler kontrol ediliyor..." -ForegroundColor Yellow
git status --short

# Tüm değişiklikleri ekle
Write-Host ""
Write-Host "➕ Tüm değişiklikler ekleniyor..." -ForegroundColor Yellow
git add .
Write-Host "✅ Değişiklikler eklendi" -ForegroundColor Green

# Commit yap
Write-Host ""
Write-Host "💾 Commit yapılıyor..." -ForegroundColor Yellow
$commitMessage = "Add 5 new SEO articles, email integration, consultation forms, and comprehensive improvements"
git commit -m $commitMessage
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Commit başarılı" -ForegroundColor Green
} else {
    Write-Host "⚠️  Commit yapılamadı (değişiklik yok olabilir)" -ForegroundColor Yellow
}

# Push yap
Write-Host ""
Write-Host "🚀 GitHub'a push yapılıyor..." -ForegroundColor Yellow
Write-Host "⚠️  GitHub credentials gerekebilir..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ BAŞARILI! GitHub'a push yapıldı!" -ForegroundColor Green
    Write-Host "📊 Vercel otomatik deploy başlatacak..." -ForegroundColor Cyan
    Write-Host "🔗 Vercel Dashboard: https://vercel.com/yasinnabialtuns-projects/turkeyclinicfinder" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "❌ Push başarısız!" -ForegroundColor Red
    Write-Host "🔐 GitHub authentication gerekebilir:" -ForegroundColor Yellow
    Write-Host "   1. Personal Access Token oluşturun: https://github.com/settings/tokens" -ForegroundColor Cyan
    Write-Host "   2. Token ile push yapın veya GitHub Desktop kullanın" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "✨ İşlem tamamlandı!" -ForegroundColor Green
pause

