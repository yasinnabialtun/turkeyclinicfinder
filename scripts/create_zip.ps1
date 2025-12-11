# PowerShell script to create a zip file of the repository
# Usage: .\scripts\create_zip.ps1

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$zipName = "turkeyclinicfinder_$timestamp.zip"
$exclude = @("node_modules", ".next", "__pycache__", "*.pyc", ".venv", "venv", ".git", "*.log")

Write-Host "Creating zip file: $zipName"

# Use Compress-Archive
Get-ChildItem -Path . -Exclude $exclude | Compress-Archive -DestinationPath $zipName -Force

Write-Host "Zip file created: $zipName"

