# Git Kurulum Kontrol ve Push Script
# PowerShell'de çalıştırın: .\QUICK_GIT_SETUP.ps1

Write-Host "🔍 Git kurulumunu kontrol ediliyor..." -ForegroundColor Yellow

# Git kurulu mu kontrol et
try {
    $gitVersion = git --version
    Write-Host "✅ Git kurulu: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git kurulu değil!" -ForegroundColor Red
    Write-Host ""
    Write-Host "📥 Git'i yüklemek için:" -ForegroundColor Yellow
    Write-Host "1. https://git-scm.com/download/win adresine gidin" -ForegroundColor Cyan
    Write-Host "2. Git'i indirin ve kurun" -ForegroundColor Cyan
    Write-Host "3. PowerShell'i yeniden başlatın" -ForegroundColor Cyan
    Write-Host "4. Bu script'i tekrar çalıştırın" -ForegroundColor Cyan
    exit
}

Write-Host ""
Write-Host "📂 Proje klasörüne gidiliyor..." -ForegroundColor Yellow
Set-Location "C:\Users\yasin\OneDrive\Masaüstü\turkeyclinicfinder"

Write-Host ""
Write-Host "📋 Git durumunu kontrol ediliyor..." -ForegroundColor Yellow
git status

Write-Host ""
Write-Host "➕ Tüm değişiklikler ekleniyor..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "💾 Commit yapılıyor..." -ForegroundColor Yellow
git commit -m "Add 5 new SEO articles, email integration, consultation forms, and comprehensive improvements"

Write-Host ""
Write-Host "🚀 GitHub'a push yapılıyor..." -ForegroundColor Yellow
git push origin main

Write-Host ""
Write-Host "✅ Tamamlandı! Vercel otomatik deploy başlatacak." -ForegroundColor Green
Write-Host "📊 Vercel Dashboard: https://vercel.com/yasinnabialtuns-projects/turkeyclinicfinder" -ForegroundColor Cyan

