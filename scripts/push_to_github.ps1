# PowerShell script to push current project to GitHub repository
# This will replace all content in the GitHub repo with the current local project

Write-Host "=== GitHub Repository Push Script ===" -ForegroundColor Cyan
Write-Host ""

# Find git executable
$gitPath = $null
$possiblePaths = @(
    "git",
    "C:\Program Files\Git\cmd\git.exe",
    "C:\Program Files (x86)\Git\cmd\git.exe",
    "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe"
)

foreach ($path in $possiblePaths) {
    try {
        if ($path -eq "git") {
            $version = & git --version 2>$null
            if ($LASTEXITCODE -eq 0) {
                $gitPath = "git"
                Write-Host "Git found: $version" -ForegroundColor Green
                break
            }
        } else {
            if (Test-Path $path) {
                $version = & $path --version 2>$null
                if ($LASTEXITCODE -eq 0) {
                    $gitPath = $path
                    Write-Host "Git found: $version" -ForegroundColor Green
                    break
                }
            }
        }
    } catch {
        continue
    }
}

if (-not $gitPath) {
    Write-Host "ERROR: Git is not installed or not found!" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Or install GitHub Desktop: https://desktop.github.com/" -ForegroundColor Yellow
    exit 1
}

# Function to run git commands
function Invoke-Git {
    param([string[]]$Arguments)
    if ($gitPath -eq "git") {
        & git $Arguments
    } else {
        & $gitPath $Arguments
    }
}

# Repository URL
$repoUrl = "https://github.com/yasinnabialtun/turkeyclinicfinder.git"

Write-Host "Target repository: $repoUrl" -ForegroundColor Cyan
Write-Host ""

# Check if this is already a git repository
if (Test-Path ".git") {
    Write-Host "Git repository already initialized" -ForegroundColor Yellow
    
    # Check current remote
    $currentRemote = Invoke-Git @("remote", "get-url", "origin") 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Current remote: $currentRemote" -ForegroundColor Yellow
        Write-Host "Removing old remote..." -ForegroundColor Yellow
        Invoke-Git @("remote", "remove", "origin")
    }
} else {
    Write-Host "Initializing new git repository..." -ForegroundColor Yellow
    Invoke-Git @("init")
}

# Add the remote
Write-Host "Adding remote repository..." -ForegroundColor Yellow
Invoke-Git @("remote", "add", "origin", $repoUrl)

# Add all files
Write-Host "Adding all files to staging..." -ForegroundColor Yellow
Invoke-Git @("add", ".")

# Check if there are changes to commit
$status = Invoke-Git @("status", "--porcelain")
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "No changes to commit. Repository is up to date." -ForegroundColor Yellow
} else {
    # Commit changes
    Write-Host "Committing changes..." -ForegroundColor Yellow
    Invoke-Git @("commit", "-m", "Initial commit: Replace repository with current project")
}

# Ask for confirmation before force push
Write-Host ""
Write-Host "WARNING: This will REPLACE all content in the GitHub repository!" -ForegroundColor Red
Write-Host "All existing files in the repository will be deleted and replaced with current project." -ForegroundColor Red
Write-Host ""
$confirmation = Read-Host "Do you want to proceed? (yes/no)"

if ($confirmation -ne "yes") {
    Write-Host "Operation cancelled." -ForegroundColor Yellow
    exit 0
}

# Force push to replace everything
Write-Host ""
Write-Host "Pushing to GitHub (this will replace all content)..." -ForegroundColor Yellow
Write-Host ""

# Check if main branch exists locally
$branch = Invoke-Git @("branch", "--show-current")
if ([string]::IsNullOrWhiteSpace($branch)) {
    $branch = "main"
    Invoke-Git @("branch", "-M", "main")
}

Write-Host "Using branch: $branch" -ForegroundColor Cyan

# Force push
Invoke-Git @("push", "-f", "origin", $branch)

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "SUCCESS! Repository has been updated on GitHub." -ForegroundColor Green
    Write-Host "Repository URL: https://github.com/yasinnabialtun/turkeyclinicfinder" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "ERROR: Failed to push to GitHub." -ForegroundColor Red
    Write-Host "You may need to:" -ForegroundColor Yellow
    Write-Host "1. Authenticate with GitHub (git credential manager)" -ForegroundColor Yellow
    Write-Host "2. Check your GitHub permissions" -ForegroundColor Yellow
    Write-Host "3. Use a personal access token if 2FA is enabled" -ForegroundColor Yellow
    exit 1
}

