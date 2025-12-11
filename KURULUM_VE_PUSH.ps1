# Git Kurulum ve Otomatik Push - Tek Script
# PowerShell'i YÖNETİCİ OLARAK çalıştırın: Sağ tık > "Run as Administrator"

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "   🚀 GIT KURULUM VE OTOMATIK PUSH SCRIPT" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# 1. Git kurulu mu kontrol et
Write-Host "🔍 Adım 1: Git kurulumunu kontrol ediliyor..." -ForegroundColor Yellow
$gitPath = $null
$possiblePaths = @(
    "C:\Program Files\Git\bin\git.exe",
    "C:\Program Files (x86)\Git\bin\git.exe",
    "$env:LOCALAPPDATA\Programs\Git\bin\git.exe"
)

foreach ($path in $possiblePaths) {
    if (Test-Path $path) {
        $gitPath = $path
        break
    }
}

# PATH'te git var mı kontrol et
try {
    $gitCheck = Get-Command git -ErrorAction SilentlyContinue
    if ($gitCheck) {
        $gitPath = $gitCheck.Source
    }
} catch {}

if ($gitPath) {
    Write-Host "✅ Git zaten kurulu: $gitPath" -ForegroundColor Green
    $env:Path += ";$((Split-Path $gitPath -Parent))"
    $gitInstalled = $true
} else {
    Write-Host "Git kurulu degil!" -ForegroundColor Red
    $gitInstalled = $false
}

# 2. Git kurulu değilse indirme talimatları
if (-not $gitInstalled) {
    Write-Host ""
    Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Red
    Write-Host "   ⚠️  GIT KURULUMU GEREKLİ" -ForegroundColor Red
    Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Red
    Write-Host ""
    Write-Host "📥 Git indirme sayfası açılıyor..." -ForegroundColor Yellow
    Start-Process "https://git-scm.com/download/win"
    Write-Host ""
    Write-Host "📋 KURULUM ADIMLARI:" -ForegroundColor Cyan
    Write-Host "   1. Açılan sayfada 'Download for Windows' butonuna tıklayın" -ForegroundColor White
    Write-Host "   2. İndirilen .exe dosyasını çalıştırın" -ForegroundColor White
    Write-Host "   3. Kurulum sırasında TÜM VARSayılan ayarları kabul edin" -ForegroundColor White
    Write-Host "   4. Özellikle 'Add Git to PATH' seçeneğini işaretleyin" -ForegroundColor White
    Write-Host "   5. Kurulum tamamlandıktan sonra PowerShell'i YENİDEN BAŞLATIN" -ForegroundColor White
    Write-Host "   6. Bu script'i tekrar çalıştırın" -ForegroundColor White
    Write-Host ""
    Write-Host "⏸️  Git kurulumunu tamamladıktan sonra bu script'i tekrar çalıştırın." -ForegroundColor Yellow
    Write-Host ""
    pause
    exit
}

# 3. Git versiyonunu göster
Write-Host ""
Write-Host "📌 Git versiyonu:" -ForegroundColor Yellow
git --version

# 4. Git yapılandırması
Write-Host ""
Write-Host "⚙️  Adım 2: Git yapılandırması kontrol ediliyor..." -ForegroundColor Yellow
$userName = git config --global user.name 2>&1
$userEmail = git config --global user.email 2>&1

if (-not $userName -or $userName -match "error" -or $userName -eq "") {
    Write-Host "📝 Git kullanıcı bilgileri ayarlanıyor..." -ForegroundColor Yellow
    git config --global user.name "Yasin Nabialtun"
    git config --global user.email "yasinnabialtun@gmail.com"
    Write-Host "✅ Git kullanıcı bilgileri ayarlandı" -ForegroundColor Green
} else {
    Write-Host "✅ Git yapılandırması mevcut: $userName <$userEmail>" -ForegroundColor Green
}

# 5. Proje klasörüne git
Write-Host ""
Write-Host "📂 Adım 3: Proje klasörüne gidiliyor..." -ForegroundColor Yellow
$projectPath = "C:\Users\yasin\OneDrive\Masaüstü\turkeyclinicfinder"
if (Test-Path $projectPath) {
    Set-Location $projectPath
    Write-Host "✅ Klasöre gidildi: $projectPath" -ForegroundColor Green
} else {
    Write-Host "❌ Proje klasörü bulunamadı: $projectPath" -ForegroundColor Red
    pause
    exit
}

# 6. Git repository kontrolü
Write-Host ""
Write-Host "🔍 Adım 4: Git repository kontrol ediliyor..." -ForegroundColor Yellow
if (Test-Path ".git") {
    Write-Host "✅ Git repository bulundu" -ForegroundColor Green
} else {
    Write-Host "⚠️  Git repository bulunamadı. Başlatılıyor..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Git repository başlatıldı" -ForegroundColor Green
}

# 7. Remote kontrolü
Write-Host ""
Write-Host "🔗 Adım 5: Remote repository kontrol ediliyor..." -ForegroundColor Yellow
$remotes = git remote -v 2>&1
if ($remotes -match "origin") {
    Write-Host "✅ Remote repository mevcut" -ForegroundColor Green
    git remote -v
} else {
    Write-Host "⚠️  Remote repository bulunamadı." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "GitHub repository URL'inizi girin:" -ForegroundColor Cyan
    Write-Host "Örnek: https://github.com/yasinnabialtuns-projects/turkeyclinicfinder.git" -ForegroundColor Gray
    $repoUrl = Read-Host "Repository URL"
    if ($repoUrl) {
        git remote add origin $repoUrl
        Write-Host "✅ Remote repository eklendi: $repoUrl" -ForegroundColor Green
    } else {
        Write-Host "❌ Remote repository URL'i girilmedi." -ForegroundColor Red
        Write-Host "Manuel olarak ekleyebilirsiniz: git remote add origin [URL]" -ForegroundColor Yellow
    }
}

# 8. Değişiklikleri göster
Write-Host ""
Write-Host "📋 Adım 6: Değişiklikler kontrol ediliyor..." -ForegroundColor Yellow
$status = git status --short 2>&1
if ($status) {
    Write-Host "Değişiklikler:" -ForegroundColor Cyan
    git status --short
} else {
    Write-Host "⚠️  Yeni değişiklik bulunamadı (zaten commit edilmiş olabilir)" -ForegroundColor Yellow
}

# 9. Tüm değişiklikleri ekle
Write-Host ""
Write-Host "➕ Adım 7: Tüm değişiklikler ekleniyor..." -ForegroundColor Yellow
git add .
$addResult = $LASTEXITCODE
if ($addResult -eq 0) {
    Write-Host "✅ Değişiklikler eklendi" -ForegroundColor Green
} else {
    Write-Host "⚠️  Değişiklik eklenirken hata oluştu" -ForegroundColor Yellow
}

# 10. Commit yap
Write-Host ""
Write-Host "💾 Adım 8: Commit yapılıyor..." -ForegroundColor Yellow
$commitMessage = "Add 5 new SEO articles, email integration, consultation forms, and comprehensive improvements"
git commit -m $commitMessage
$commitResult = $LASTEXITCODE

if ($commitResult -eq 0) {
    Write-Host "✅ Commit başarılı: $commitMessage" -ForegroundColor Green
} else {
    Write-Host "⚠️  Commit yapılamadı (değişiklik yok veya zaten commit edilmiş)" -ForegroundColor Yellow
}

# 11. Push yap
Write-Host ""
Write-Host "🚀 Adım 9: GitHub'a push yapılıyor..." -ForegroundColor Yellow
Write-Host "⚠️  GitHub credentials gerekebilir (username ve password/token)" -ForegroundColor Yellow
Write-Host ""

# Branch kontrolü
$currentBranch = git branch --show-current 2>&1
if (-not $currentBranch -or $currentBranch -eq "") {
    git checkout -b main 2>&1 | Out-Null
    $currentBranch = "main"
}

Write-Host "📌 Mevcut branch: $currentBranch" -ForegroundColor Cyan
Write-Host ""

# Push dene
git push origin $currentBranch 2>&1
$pushResult = $LASTEXITCODE

if ($pushResult -eq 0) {
    Write-Host ""
    Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Green
    Write-Host "   ✅ BAŞARILI! GITHUB'A PUSH YAPILDI!" -ForegroundColor Green
    Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Green
    Write-Host ""
    Write-Host "📊 Vercel otomatik deploy başlatacak..." -ForegroundColor Cyan
    Write-Host "🔗 Vercel Dashboard: https://vercel.com/yasinnabialtuns-projects/turkeyclinicfinder" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "⏱️  Deploy süresi: 2-5 dakika" -ForegroundColor Yellow
    Write-Host "✅ Site canlı olduğunda bildirim alacaksınız" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Red
    Write-Host "   ⚠️  PUSH BAŞARISIZ - AUTHENTICATION GEREKLİ" -ForegroundColor Red
    Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Red
    Write-Host ""
    Write-Host "🔐 GitHub authentication için:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "YÖNTEM 1: Personal Access Token (ÖNERİLEN)" -ForegroundColor Cyan
    Write-Host "   1. https://github.com/settings/tokens adresine gidin" -ForegroundColor White
    Write-Host "   2. 'Generate new token (classic)' tıklayın" -ForegroundColor White
    Write-Host "   3. 'repo' yetkisini seçin" -ForegroundColor White
    Write-Host "   4. Token oluşturun ve kopyalayın" -ForegroundColor White
    Write-Host "   5. Push sırasında password yerine token kullanın" -ForegroundColor White
    Write-Host ""
    Write-Host "YÖNTEM 2: GitHub Desktop Kullanın" -ForegroundColor Cyan
    Write-Host "   1. GitHub Desktop'ı indirin: https://desktop.github.com/" -ForegroundColor White
    Write-Host "   2. Repository'yi açın" -ForegroundColor White
    Write-Host "   3. Commit ve Push yapın" -ForegroundColor White
    Write-Host ""
    Write-Host "YÖNTEM 3: GitHub Web Interface" -ForegroundColor Cyan
    Write-Host "   1. https://github.com adresine gidin" -ForegroundColor White
    Write-Host "   2. Repository'nizi açın" -ForegroundColor White
    Write-Host "   3. 'Add file' > 'Upload files' ile dosyaları yükleyin" -ForegroundColor White
}

Write-Host ""
Write-Host "Islem tamamlandi!" -ForegroundColor Green
Write-Host ""
pause

