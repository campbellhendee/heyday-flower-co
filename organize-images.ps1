$projectRoot = "C:\Users\campb\OneDrive\HEYDAYWEBSITE"
$downloads = "C:\Users\campb\Downloads"

# Create directory structure
$dirs = @(
    "$projectRoot\public\images\hero\home",
    "$projectRoot\public\images\hero\weddings",
    "$projectRoot\public\images\hero\corporate",
    "$projectRoot\public\images\hero\private",
    "$projectRoot\public\images\hero\daily",
    "$projectRoot\public\images\gallery\weddings",
    "$projectRoot\public\images\gallery\corporate",
    "$projectRoot\public\images\gallery\private",
    "$projectRoot\public\images\gallery\daily"
)

foreach ($dir in $dirs) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
}

# Function to copy and rename images
function Copy-CategoryImages {
    param(
        [Parameter(Mandatory=$true)] [string] $source,
        [Parameter(Mandatory=$true)] [string] $heroPath,
        [Parameter(Mandatory=$true)] [string] $galleryPath,
        [Parameter(Mandatory=$true)] [string] $prefix
    )
    if (-not (Test-Path $source)) {
        Write-Warning "Source not found: $source"
        return
    }
    $files = Get-ChildItem -Path $source -Filter "*.jpg" | Select-Object -First 20
    $counter = 1
    foreach ($file in $files) {
        if ($counter -le 4) {
            $destPath = Join-Path $heroPath ("{0}-hero-{1}.jpg" -f $prefix, ('{0:d3}' -f $counter))
            Copy-Item -Path $file.FullName -Destination $destPath -Force
        }
        if ($counter -le 16) {
            $destPath = Join-Path $galleryPath ("{0}-{1}.jpg" -f $prefix, ('{0:d3}' -f $counter))
            Copy-Item -Path $file.FullName -Destination $destPath -Force
        }
        $counter++
    }
}

# Copy images for each category
Copy-CategoryImages "$downloads\heyday_weddings"  "$projectRoot\public\images\hero\weddings"   "$projectRoot\public\images\gallery\weddings"   "weddings"
Copy-CategoryImages "$downloads\heyday_corporate" "$projectRoot\public\images\hero\corporate" "$projectRoot\public\images\gallery\corporate" "corporate"
Copy-CategoryImages "$downloads\heyday_private"   "$projectRoot\public\images\hero\private"   "$projectRoot\public\images\gallery\private"   "private"
Copy-CategoryImages "$downloads\heyday_daily"     "$projectRoot\public\images\hero\daily"     "$projectRoot\public\images\gallery\daily"     "daily"

# Use first wedding image as home hero and og-image
$weddingFiles = Get-ChildItem -Path "$downloads\heyday_weddings" -Filter "*.jpg" | Select-Object -First 5
$homeCounter = 1
foreach ($file in $weddingFiles) {
    $destPath = "$projectRoot\public\images\hero\home\home-hero-$(('{0:d3}' -f $homeCounter)).jpg"
    Copy-Item -Path $file.FullName -Destination $destPath -Force
    if ($homeCounter -eq 1) {
        Copy-Item -Path $file.FullName -Destination "$projectRoot\public\og-default.jpg" -Force
    }
    $homeCounter++
}

Write-Host "Images organized successfully!" -ForegroundColor Green

