$projectRoot = "C:\Users\campb\OneDrive\HEYDAYWEBSITE"

Write-Host "Selecting best images by file size..." -ForegroundColor Cyan

if (-not (Test-Path "$projectRoot\public\images\hero\home")) {
  New-Item -ItemType Directory -Force -Path "$projectRoot\public\images\hero\home" | Out-Null
}

$weddingBest = Get-ChildItem "$projectRoot\public\images\gallery\weddings\*.jpg" -ErrorAction SilentlyContinue | Sort-Object Length -Descending | Select-Object -First 2
$corporateBest = Get-ChildItem "$projectRoot\public\images\gallery\corporate\*.jpg" -ErrorAction SilentlyContinue | Sort-Object Length -Descending | Select-Object -First 1
$privateBest = Get-ChildItem "$projectRoot\public\images\gallery\private\*.jpg" -ErrorAction SilentlyContinue | Sort-Object Length -Descending | Select-Object -First 1
$dailyBest = Get-ChildItem "$projectRoot\public\images\gallery\daily\*.jpg" -ErrorAction SilentlyContinue | Sort-Object Length -Descending | Select-Object -First 1

if ($weddingBest.Count -lt 2 -or -not $corporateBest -or -not $privateBest -or -not $dailyBest) {
  Write-Warning "Not enough source images found in one or more galleries. Ensure gallery folders contain JPGs."
}

if ($weddingBest -and $weddingBest[0]) {
  Copy-Item $weddingBest[0].FullName -Destination "$projectRoot\public\images\hero\home\home-hero-001.jpg" -Force
}
if ($corporateBest -and $corporateBest[0]) {
  Copy-Item $corporateBest[0].FullName -Destination "$projectRoot\public\images\hero\home\home-hero-002.jpg" -Force
}
if ($weddingBest -and $weddingBest[1]) {
  Copy-Item $weddingBest[1].FullName -Destination "$projectRoot\public\images\hero\home\home-hero-003.jpg" -Force
}
if ($privateBest -and $privateBest[0]) {
  Copy-Item $privateBest[0].FullName -Destination "$projectRoot\public\images\hero\home\home-hero-004.jpg" -Force
}
if ($dailyBest -and $dailyBest[0]) {
  Copy-Item $dailyBest[0].FullName -Destination "$projectRoot\public\images\hero\home\home-hero-005.jpg" -Force
}

Write-Host "Hero images updated with best quality photos!" -ForegroundColor Green

