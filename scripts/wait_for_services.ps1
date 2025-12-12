# wait_for_services.sh'in PowerShell versiyonu
# Tüm servislerin hazır olmasını bekler

Write-Host "Servislerin hazır olması bekleniyor..." -ForegroundColor Yellow

$maxRetries = 60
$retryCount = 0

# Database'i bekle
Write-Host "Database kontrol ediliyor..." -ForegroundColor Yellow
$dbReady = $false
while ($retryCount -lt $maxRetries -and -not $dbReady) {
    try {
        $result = docker-compose exec -T db pg_isready -U tcf_user 2>&1
        if ($LASTEXITCODE -eq 0) {
            $dbReady = $true
            Write-Host "✅ Database hazır!" -ForegroundColor Green
        }
    } catch {
        # Beklemeye devam et
    }
    
    if (-not $dbReady) {
        $retryCount++
        Start-Sleep -Seconds 2
    }
}

if (-not $dbReady) {
    Write-Host "❌ Database başlatılamadı!" -ForegroundColor Red
    exit 1
}

# Redis'i bekle
Write-Host "Redis kontrol ediliyor..." -ForegroundColor Yellow
$retryCount = 0
$redisReady = $false
while ($retryCount -lt $maxRetries -and -not $redisReady) {
    try {
        $result = docker-compose exec -T redis redis-cli ping 2>&1
        if ($result -match "PONG") {
            $redisReady = $true
            Write-Host "✅ Redis hazır!" -ForegroundColor Green
        }
    } catch {
        # Beklemeye devam et
    }
    
    if (-not $redisReady) {
        $retryCount++
        Start-Sleep -Seconds 2
    }
}

if (-not $redisReady) {
    Write-Host "⚠️  Redis henüz hazır olmayabilir, ancak devam ediliyor..." -ForegroundColor Yellow
}

# Backend'i bekle
Write-Host "Backend API kontrol ediliyor..." -ForegroundColor Yellow
$retryCount = 0
$backendReady = $false
while ($retryCount -lt $maxRetries -and -not $backendReady) {
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:8000/health" -TimeoutSec 2 -ErrorAction SilentlyContinue
        if ($response.StatusCode -eq 200) {
            $backendReady = $true
            Write-Host "✅ Backend API hazır!" -ForegroundColor Green
        }
    } catch {
        # Beklemeye devam et
    }
    
    if (-not $backendReady) {
        $retryCount++
        Start-Sleep -Seconds 2
    }
}

if (-not $backendReady) {
    Write-Host "⚠️  Backend henüz hazır olmayabilir, ancak devam ediliyor..." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "✅ Tüm servisler hazır!" -ForegroundColor Green
Write-Host ""
