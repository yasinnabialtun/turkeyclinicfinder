# Git Kurulum ve Yapılandırma Scripti
# PowerShell'i Yönetici olarak çalıştır

Write-Host "🔍 Git yüklü mü kontrol ediliyor..." -ForegroundColor Cyan

# Git kontrolü
try {
    $gitVersion = git --version
    Write-Host "✅ Git zaten yüklü: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git yüklü değil. Yükleniyor..." -ForegroundColor Yellow
    
    # Winget ile yükleme dene
    try {
        Write-Host "📦 Winget ile Git yükleniyor..." -ForegroundColor Cyan
        winget install --id Git.Git -e --source winget --accept-package-agreements --accept-source-agreements
        Write-Host "✅ Git başarıyla yüklendi!" -ForegroundColor Green
        Write-Host "⚠️  PowerShell'i yeniden başlatman gerekiyor." -ForegroundColor Yellow
    } catch {
        Write-Host "❌ Winget ile yükleme başarısız." -ForegroundColor Red
        Write-Host "📥 Manuel indirme için: https://git-scm.com/download/win" -ForegroundColor Yellow
        Write-Host "   veya GitHub Desktop: https://desktop.github.com" -ForegroundColor Yellow
        exit 1
    }
}

# Git yapılandırması
Write-Host "`n⚙️  Git yapılandırması..." -ForegroundColor Cyan

$userName = Read-Host "Git kullanıcı adın (örn: Yasin)"
$userEmail = Read-Host "Git email adresin (örn: yasin@example.com)"

if ($userName -and $userEmail) {
    git config --global user.name $userName
    git config --global user.email $userEmail
    Write-Host "✅ Git yapılandırıldı!" -ForegroundColor Green
} else {
    Write-Host "⚠️  Git yapılandırması atlandı. Manuel yapabilirsin:" -ForegroundColor Yellow
    Write-Host "   git config --global user.name 'Adın'" -ForegroundColor Gray
    Write-Host "   git config --global user.email 'email@example.com'" -ForegroundColor Gray
}

# Projeyi Git repository yap
Write-Host "`n📦 Proje Git repository'ye dönüştürülüyor..." -ForegroundColor Cyan

$currentDir = Get-Location
if (-not (Test-Path "$currentDir\.git")) {
    git init
    Write-Host "✅ Git repository oluşturuldu!" -ForegroundColor Green
} else {
    Write-Host "ℹ️  Zaten bir Git repository!" -ForegroundColor Blue
}

Write-Host "`n✅ Kurulum tamamlandı!" -ForegroundColor Green
Write-Host "`n📝 Sonraki adımlar:" -ForegroundColor Cyan
Write-Host "   1. GitHub'da yeni repository oluştur" -ForegroundColor White
Write-Host "   2. git remote add origin https://github.com/KULLANICI/repo.git" -ForegroundColor Gray
Write-Host "   3. git add ." -ForegroundColor Gray
Write-Host "   4. git commit -m 'Initial commit'" -ForegroundColor Gray
Write-Host "   5. git push -u origin main" -ForegroundColor Gray

