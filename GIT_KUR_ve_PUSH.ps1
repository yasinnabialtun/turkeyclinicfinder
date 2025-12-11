# Git Kurulum Sonrasi Otomatik Push
# Git kurulumunu tamamladiktan sonra bu script'i calistirin

Write-Host "Git kurulumunu kontrol ediliyor..." -ForegroundColor Yellow

try {
    $gitVersion = git --version
    Write-Host "Git kurulu: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "Git kurulu degil! Lutfen once Git'i kurun:" -ForegroundColor Red
    Write-Host "1. https://git-scm.com/download/win adresinden indirin" -ForegroundColor Cyan
    Write-Host "2. Kurun ve PowerShell'i yeniden baslatin" -ForegroundColor Cyan
    Write-Host "3. Bu script'i tekrar calistirin" -ForegroundColor Cyan
    pause
    exit
}

# Git yapilandirmasi
$userName = git config --global user.name
if (-not $userName) {
    git config --global user.name "Yasin Nabialtun"
    git config --global user.email "yasinnabialtun@gmail.com"
}

# Proje klasorune git
Set-Location "C:\Users\yasin\OneDrive\Masaustu\turkeyclinicfinder"

# Git repository kontrol
if (-not (Test-Path ".git")) {
    git init
}

# Remote kontrol
$remotes = git remote -v
if (-not ($remotes -match "origin")) {
    Write-Host "GitHub repository URL'inizi girin:" -ForegroundColor Cyan
    $repoUrl = Read-Host
    if ($repoUrl) {
        git remote add origin $repoUrl
    }
}

# Değişiklikleri ekle ve commit
Write-Host "Degisiklikler ekleniyor..." -ForegroundColor Yellow
git add .

Write-Host "Commit yapiliyor..." -ForegroundColor Yellow
git commit -m "Update email to info@ynadijital.com, remove phone numbers, add leads management"

# Branch kontrol
$currentBranch = git branch --show-current
if (-not $currentBranch) {
    git checkout -b main
    $currentBranch = "main"
}

# Push yap
Write-Host "GitHub'a push yapiliyor..." -ForegroundColor Yellow
git push origin $currentBranch

if ($LASTEXITCODE -eq 0) {
    Write-Host "Basarili! GitHub'a push yapildi!" -ForegroundColor Green
    Write-Host "Vercel otomatik deploy baslatacak..." -ForegroundColor Cyan
    Write-Host "Vercel Dashboard: https://vercel.com/yasinnabialtuns-projects/turkeyclinicfinder" -ForegroundColor Cyan
} else {
    Write-Host "Push basarisiz! GitHub authentication gerekebilir." -ForegroundColor Red
    Write-Host "Personal Access Token kullanin veya GitHub Desktop kullanin." -ForegroundColor Yellow
}

pause

