param(
    [string]$OutputRoot = "assets/audio/spoken-count",
    [string]$VoiceName = "en-US-Chirp3-HD-Charon",
    [string]$LanguageCode = "en-US",
    [string[]]$PackSpecs = @("natural:1.00", "tight:1.12", "brisk:1.24", "rapid:1.36", "sprint:1.48"),
    [string]$Endpoint = "https://texttospeech.googleapis.com/v1/text:synthesize",
    [string]$AccessToken,
    [string]$CredentialsPath,
    [string]$QuotaProject,
    [string]$TokenEndpoint = "https://oauth2.googleapis.com/token",
    [int]$SampleRateHertz = 22050,
    [double]$TrimThresholdRatio = 0.015,
    [double]$TrimPaddingMs = 5,
    [double]$TargetFill = 0.9,
    [int]$TargetMaxBpm = 150,
    [string[]]$EffectsProfileId = @()
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$wordClips = @(
    @{ Id = "one"; Text = "one" },
    @{ Id = "and"; Text = "and" },
    @{ Id = "two"; Text = "two" },
    @{ Id = "three"; Text = "three" },
    @{ Id = "four"; Text = "four" }
)

$demoClips = @(
    @{ Id = "demo_full_count_4_4"; Text = "one and two and three and four and" },
    @{ Id = "demo_count_in_4"; Text = "one two three four" }
)

$pairClips = @(
    @{ Id = "one_and"; Text = "one and" },
    @{ Id = "two_and"; Text = "two and" },
    @{ Id = "three_and"; Text = "three and" },
    @{ Id = "four_and"; Text = "four and" }
)

function ConvertTo-Slug {
    param([string]$Text)

    $slug = $Text.ToLowerInvariant() -replace "[^a-z0-9]+", "-"
    $slug = $slug.Trim("-")

    if ([string]::IsNullOrWhiteSpace($slug)) {
        throw "Could not derive a slug from '$Text'."
    }

    return $slug
}

function Get-RelativePath {
    param(
        [string]$BasePath,
        [string]$TargetPath
    )

    $normalizedBase = [System.IO.Path]::GetFullPath($BasePath)
    if (-not $normalizedBase.EndsWith([System.IO.Path]::DirectorySeparatorChar)) {
        $normalizedBase += [System.IO.Path]::DirectorySeparatorChar
    }

    $baseUri = [System.Uri]$normalizedBase
    $targetUri = [System.Uri]([System.IO.Path]::GetFullPath($TargetPath))

    return $baseUri.MakeRelativeUri($targetUri).ToString().Replace("/", "\")
}

function Parse-PackSpec {
    param([string]$PackSpec)

    if ($PackSpec -notmatch "^([^:]+):([0-9]+(?:\.[0-9]+)?)$") {
        throw "Pack spec '$PackSpec' is invalid. Use the form '<id>:<speakingRate>'."
    }

    $packId = $Matches[1]
    $speakingRate = [double]::Parse($Matches[2], [System.Globalization.CultureInfo]::InvariantCulture)

    if ($speakingRate -lt 0.25 -or $speakingRate -gt 2.0) {
        throw "Pack spec '$PackSpec' is invalid. Google speakingRate must be between 0.25 and 2.0."
    }

    return [pscustomobject]@{
        Id           = $packId
        SpeakingRate = $speakingRate
    }
}

function Get-GoogleAccessToken {
    param(
        [string]$ExplicitToken,
        [string]$ExplicitCredentialsPath
    )

    if (-not [string]::IsNullOrWhiteSpace($ExplicitToken)) {
        return $ExplicitToken.Trim()
    }

    foreach ($envVarName in @("GOOGLE_OAUTH_ACCESS_TOKEN", "GOOGLE_ACCESS_TOKEN")) {
        $envValue = [Environment]::GetEnvironmentVariable($envVarName)
        if (-not [string]::IsNullOrWhiteSpace($envValue)) {
            return $envValue.Trim()
        }
    }

    $credentialPaths = @()

    if (-not [string]::IsNullOrWhiteSpace($ExplicitCredentialsPath)) {
        $credentialPaths += $ExplicitCredentialsPath
    }

    $envCredentialPath = [Environment]::GetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS")
    if (-not [string]::IsNullOrWhiteSpace($envCredentialPath)) {
        $credentialPaths += $envCredentialPath
    }

    $credentialPaths += @(
        (Join-Path $env:APPDATA "gcloud\application_default_credentials.json"),
        (Join-Path $env:USERPROFILE ".config\gcloud\application_default_credentials.json")
    )

    foreach ($credentialPath in ($credentialPaths | Where-Object { -not [string]::IsNullOrWhiteSpace($_) } | Select-Object -Unique)) {
        if (-not (Test-Path -LiteralPath $credentialPath)) {
            continue
        }

        $credentials = Get-Content -Raw -LiteralPath $credentialPath | ConvertFrom-Json
        if ($credentials.type -eq "authorized_user") {
            return Get-GoogleAccessTokenFromAuthorizedUser -Credentials $credentials
        }

        if ($credentials.type -eq "service_account") {
            throw "Credential file '$credentialPath' is a service account key. This script can use OAuth authorized-user credentials directly, or gcloud, or a pre-minted access token, but it does not yet mint tokens from service-account keys on this Windows PowerShell runtime."
        }

        throw "Credential file '$credentialPath' has unsupported type '$($credentials.type)'."
    }

    $gcloud = Get-Command gcloud -ErrorAction SilentlyContinue
    if ($null -eq $gcloud) {
        throw "No Google auth source was found. Provide -AccessToken, set GOOGLE_ACCESS_TOKEN, pass -CredentialsPath to an authorized-user JSON file, set GOOGLE_APPLICATION_CREDENTIALS to an authorized-user JSON file, or install gcloud and run 'gcloud auth application-default login'."
    }

    $tokenSources = @(
        @("auth", "application-default", "print-access-token"),
        @("auth", "print-access-token")
    )

    foreach ($args in $tokenSources) {
        try {
            $token = (& $gcloud.Source @args 2>$null | Out-String).Trim()
            if (-not [string]::IsNullOrWhiteSpace($token)) {
                return $token
            }
        }
        catch {
        }
    }

    throw "Unable to obtain a Google access token. Run 'gcloud auth application-default login', pass -CredentialsPath to an authorized-user JSON file, set GOOGLE_ACCESS_TOKEN, or pass -AccessToken directly."
}

function Get-GoogleAccessTokenFromAuthorizedUser {
    param([object]$Credentials)

    foreach ($requiredField in @("client_id", "client_secret", "refresh_token")) {
        if (-not ($Credentials.PSObject.Properties.Name -contains $requiredField) -or [string]::IsNullOrWhiteSpace($Credentials.$requiredField)) {
            throw "Authorized-user credentials are missing required field '$requiredField'."
        }
    }

    $body = @{
        client_id     = $Credentials.client_id
        client_secret = $Credentials.client_secret
        refresh_token = $Credentials.refresh_token
        grant_type    = "refresh_token"
    }

    try {
        $response = Invoke-RestMethod -Method Post -Uri $TokenEndpoint -ContentType "application/x-www-form-urlencoded" -Body $body
    }
    catch {
        $message = $_.Exception.Message
        if ($_.ErrorDetails -and -not [string]::IsNullOrWhiteSpace($_.ErrorDetails.Message)) {
            $message = $_.ErrorDetails.Message
        }
        throw "Failed to exchange the refresh token for an access token. $message"
    }

    if ($null -eq $response -or [string]::IsNullOrWhiteSpace($response.access_token)) {
        throw "Token exchange succeeded but no access token was returned."
    }

    return $response.access_token
}

function Find-ChunkInfo {
    param(
        [byte[]]$Bytes,
        [string]$ChunkId
    )

    $target = [System.Text.Encoding]::ASCII.GetBytes($ChunkId)
    $position = 12

    while ($position + 8 -le $Bytes.Length) {
        $isMatch = $true
        for ($i = 0; $i -lt 4; $i++) {
            if ($Bytes[$position + $i] -ne $target[$i]) {
                $isMatch = $false
                break
            }
        }

        $chunkSize = [BitConverter]::ToInt32($Bytes, $position + 4)

        if ($isMatch) {
            return [pscustomobject]@{
                Offset     = $position
                SizeOffset = $position + 4
                Size       = $chunkSize
                DataOffset = $position + 8
            }
        }

        $padding = if (($chunkSize % 2) -eq 1) { 1 } else { 0 }
        $position += 8 + $chunkSize + $padding
    }

    throw "Chunk '$ChunkId' was not found in the WAV data."
}

function Get-WavInfo {
    param([string]$Path)

    $bytes = [System.IO.File]::ReadAllBytes($Path)

    if ($bytes.Length -lt 44) {
        throw "WAV file '$Path' is too short to parse."
    }

    if ([System.Text.Encoding]::ASCII.GetString($bytes, 0, 4) -ne "RIFF") {
        throw "WAV file '$Path' does not start with a RIFF header."
    }

    if ([System.Text.Encoding]::ASCII.GetString($bytes, 8, 4) -ne "WAVE") {
        throw "WAV file '$Path' does not contain a WAVE header."
    }

    $fmtChunk = Find-ChunkInfo -Bytes $bytes -ChunkId "fmt "
    $dataChunk = Find-ChunkInfo -Bytes $bytes -ChunkId "data"

    $audioFormat = [BitConverter]::ToUInt16($bytes, $fmtChunk.DataOffset)
    $channels = [BitConverter]::ToUInt16($bytes, $fmtChunk.DataOffset + 2)
    $sampleRate = [BitConverter]::ToInt32($bytes, $fmtChunk.DataOffset + 4)
    $blockAlign = [BitConverter]::ToUInt16($bytes, $fmtChunk.DataOffset + 12)
    $bitsPerSample = [BitConverter]::ToUInt16($bytes, $fmtChunk.DataOffset + 14)

    if ($blockAlign -le 0) {
        throw "WAV file '$Path' reported an invalid block alignment."
    }

    $durationMs = [math]::Round(($dataChunk.Size / [double]$blockAlign / $sampleRate) * 1000, 1)

    return [pscustomobject]@{
        Bytes         = $bytes
        AudioFormat   = $audioFormat
        Channels      = $channels
        SampleRate    = $sampleRate
        BlockAlign    = $blockAlign
        BitsPerSample = $bitsPerSample
        DataChunk     = $dataChunk
        DurationMs    = $durationMs
    }
}

function Trim-WavSilence {
    param(
        [string]$Path,
        [double]$ThresholdRatio = 0.015,
        [double]$PaddingMs = 5
    )

    $info = Get-WavInfo -Path $Path

    if ($info.AudioFormat -ne 1) {
        throw "Only PCM WAV files can be trimmed. '$Path' has format tag $($info.AudioFormat)."
    }

    if ($info.BitsPerSample -notin @(8, 16)) {
        throw "Only 8-bit or 16-bit WAV files can be trimmed. '$Path' has $($info.BitsPerSample)-bit samples."
    }

    $bytes = $info.Bytes
    $frameCount = [int]($info.DataChunk.Size / $info.BlockAlign)

    if ($frameCount -lt 1) {
        return [pscustomobject]@{
            DurationMs     = 0
            LeadingTrimMs  = 0
            TrailingTrimMs = 0
        }
    }

    $peakScale = if ($info.BitsPerSample -eq 8) { 127 } else { 32767 }
    $threshold = [math]::Max(1, [int][math]::Round($peakScale * $ThresholdRatio))

    $firstFrame = $null
    $lastFrame = $null
    $bytesPerSample = [int]($info.BitsPerSample / 8)

    for ($frameIndex = 0; $frameIndex -lt $frameCount; $frameIndex++) {
        $frameOffset = $info.DataChunk.DataOffset + ($frameIndex * $info.BlockAlign)
        $framePeak = 0

        for ($channelIndex = 0; $channelIndex -lt $info.Channels; $channelIndex++) {
            $sampleOffset = $frameOffset + ($channelIndex * $bytesPerSample)

            if ($info.BitsPerSample -eq 8) {
                $amplitude = [math]::Abs([int]$bytes[$sampleOffset] - 128)
            }
            else {
                $amplitude = [math]::Abs([int][BitConverter]::ToInt16($bytes, $sampleOffset))
            }

            if ($amplitude -gt $framePeak) {
                $framePeak = $amplitude
            }
        }

        if ($framePeak -ge $threshold) {
            if ($null -eq $firstFrame) {
                $firstFrame = $frameIndex
            }
            $lastFrame = $frameIndex
        }
    }

    if ($null -eq $firstFrame) {
        return [pscustomobject]@{
            DurationMs     = $info.DurationMs
            LeadingTrimMs  = 0
            TrailingTrimMs = 0
        }
    }

    $paddingFrames = [int][math]::Round(($info.SampleRate * $PaddingMs) / 1000)
    $startFrame = [math]::Max(0, $firstFrame - $paddingFrames)
    $endFrameExclusive = [math]::Min($frameCount, $lastFrame + $paddingFrames + 1)

    $startByte = $startFrame * $info.BlockAlign
    $trimmedDataLength = ($endFrameExclusive - $startFrame) * $info.BlockAlign

    $headerBytes = New-Object byte[] $info.DataChunk.DataOffset
    [Array]::Copy($bytes, 0, $headerBytes, 0, $info.DataChunk.DataOffset)

    $trimmedData = New-Object byte[] $trimmedDataLength
    [Array]::Copy($bytes, $info.DataChunk.DataOffset + $startByte, $trimmedData, 0, $trimmedDataLength)

    $outputBytes = New-Object byte[] ($headerBytes.Length + $trimmedData.Length)
    [Array]::Copy($headerBytes, 0, $outputBytes, 0, $headerBytes.Length)
    [Array]::Copy($trimmedData, 0, $outputBytes, $headerBytes.Length, $trimmedData.Length)

    [BitConverter]::GetBytes($outputBytes.Length - 8).CopyTo($outputBytes, 4)
    [BitConverter]::GetBytes($trimmedDataLength).CopyTo($outputBytes, $info.DataChunk.SizeOffset)

    [System.IO.File]::WriteAllBytes($Path, $outputBytes)

    return [pscustomobject]@{
        DurationMs     = [math]::Round((($trimmedDataLength / [double]$info.BlockAlign) / $info.SampleRate) * 1000, 1)
        LeadingTrimMs  = [math]::Round(($startFrame / [double]$info.SampleRate) * 1000, 1)
        TrailingTrimMs = [math]::Round((($frameCount - $endFrameExclusive) / [double]$info.SampleRate) * 1000, 1)
    }
}

function Invoke-GoogleTextToSpeech {
    param(
        [string]$Text,
        [double]$SpeakingRate,
        [string]$ResolvedAccessToken
    )

    $body = [ordered]@{
        input = [ordered]@{
            text = $Text
        }
        voice = [ordered]@{
            languageCode = $LanguageCode
            name         = $VoiceName
        }
        audioConfig = [ordered]@{
            audioEncoding   = "LINEAR16"
            speakingRate    = [math]::Round($SpeakingRate, 3)
            sampleRateHertz = $SampleRateHertz
        }
    }

    if ($EffectsProfileId.Count -gt 0) {
        $body.audioConfig.effectsProfileId = $EffectsProfileId
    }

    $headers = @{
        Authorization = "Bearer $ResolvedAccessToken"
        Accept        = "application/json"
    }

    if (-not [string]::IsNullOrWhiteSpace($QuotaProject)) {
        $headers["x-goog-user-project"] = $QuotaProject
    }

    $payload = $body | ConvertTo-Json -Depth 10

    try {
        $response = Invoke-RestMethod -Method Post -Uri $Endpoint -Headers $headers -ContentType "application/json; charset=utf-8" -Body $payload
    }
    catch {
        $message = $_.Exception.Message
        if ($_.ErrorDetails -and -not [string]::IsNullOrWhiteSpace($_.ErrorDetails.Message)) {
            $message = $_.ErrorDetails.Message
        }
        throw "Google Text-to-Speech request failed for '$Text' at speakingRate $SpeakingRate. $message"
    }

    if ($null -eq $response -or [string]::IsNullOrWhiteSpace($response.audioContent)) {
        throw "Google Text-to-Speech returned no audio for '$Text' at speakingRate $SpeakingRate."
    }

    return [Convert]::FromBase64String($response.audioContent)
}

function Write-SpeechClip {
    param(
        [string]$Path,
        [string]$Text,
        [double]$SpeakingRate,
        [string]$ResolvedAccessToken
    )

    $bytes = Invoke-GoogleTextToSpeech -Text $Text -SpeakingRate $SpeakingRate -ResolvedAccessToken $ResolvedAccessToken
    [System.IO.File]::WriteAllBytes($Path, $bytes)
}

function New-ClipManifestEntry {
    param(
        [string]$BasePath,
        [string]$Path,
        [string]$Text,
        [double]$SpeakingRate
    )

    $wavInfo = Get-WavInfo -Path $Path
    $trimInfo = $null

    try {
        $trimInfo = Trim-WavSilence -Path $Path -ThresholdRatio $TrimThresholdRatio -PaddingMs $TrimPaddingMs
    }
    catch {
        Write-Warning "Trim failed for '$Path': $($_.Exception.Message)"
    }

    $finalInfo = Get-WavInfo -Path $Path
    $relativePath = (Get-RelativePath -BasePath $BasePath -TargetPath $Path).Replace("\", "/")

    return [ordered]@{
        text            = $Text
        rate            = $SpeakingRate
        speakingRate    = $SpeakingRate
        file            = $relativePath
        durationMs      = $finalInfo.DurationMs
        originalMs      = $wavInfo.DurationMs
        leadingTrimMs   = if ($null -ne $trimInfo) { $trimInfo.LeadingTrimMs } else { 0 }
        trailingTrimMs  = if ($null -ne $trimInfo) { $trimInfo.TrailingTrimMs } else { 0 }
        sampleRate      = $finalInfo.SampleRate
        channels        = $finalInfo.Channels
        bitsPerSample   = $finalInfo.BitsPerSample
        voiceName       = $VoiceName
        languageCode    = $LanguageCode
    }
}

$resolvedAccessToken = Get-GoogleAccessToken -ExplicitToken $AccessToken -ExplicitCredentialsPath $CredentialsPath
$voiceSlug = ConvertTo-Slug -Text "google-$VoiceName"
$voiceRoot = Join-Path -Path $OutputRoot -ChildPath $voiceSlug

New-Item -ItemType Directory -Force -Path $voiceRoot | Out-Null

$manifest = [ordered]@{
    generatedAt      = (Get-Date).ToString("s")
    provider         = "google-cloud-text-to-speech"
    voiceHint        = $VoiceName
    voiceDescription = $VoiceName
    voiceId          = $voiceSlug
    voiceName        = $VoiceName
    languageCode     = $LanguageCode
    endpoint         = $Endpoint
    sampleRateHertz  = $SampleRateHertz
    targetFill       = $TargetFill
    targetMaxBpm     = $TargetMaxBpm
    packs            = @()
}

foreach ($packSpec in $PackSpecs) {
    $pack = Parse-PackSpec -PackSpec $packSpec

    $packDir = Join-Path -Path $voiceRoot -ChildPath $pack.Id
    $wordDir = Join-Path -Path $packDir -ChildPath "words"
    $pairDir = Join-Path -Path $packDir -ChildPath "pairs"
    $demoDir = Join-Path -Path $packDir -ChildPath "demos"

    New-Item -ItemType Directory -Force -Path $wordDir | Out-Null
    New-Item -ItemType Directory -Force -Path $pairDir | Out-Null
    New-Item -ItemType Directory -Force -Path $demoDir | Out-Null

    $wordEntries = [ordered]@{}
    foreach ($clip in $wordClips) {
        $clipPath = Join-Path -Path $wordDir -ChildPath "$($clip.Id).wav"
        Write-SpeechClip -Path $clipPath -Text $clip.Text -SpeakingRate $pack.SpeakingRate -ResolvedAccessToken $resolvedAccessToken
        $wordEntries[$clip.Id] = New-ClipManifestEntry -BasePath $voiceRoot -Path $clipPath -Text $clip.Text -SpeakingRate $pack.SpeakingRate
    }

    $pairEntries = [ordered]@{}
    foreach ($clip in $pairClips) {
        $clipPath = Join-Path -Path $pairDir -ChildPath "$($clip.Id).wav"
        Write-SpeechClip -Path $clipPath -Text $clip.Text -SpeakingRate $pack.SpeakingRate -ResolvedAccessToken $resolvedAccessToken
        $pairEntries[$clip.Id] = New-ClipManifestEntry -BasePath $voiceRoot -Path $clipPath -Text $clip.Text -SpeakingRate $pack.SpeakingRate
    }

    $demoEntries = [ordered]@{}
    foreach ($clip in $demoClips) {
        $clipPath = Join-Path -Path $demoDir -ChildPath "$($clip.Id).wav"
        Write-SpeechClip -Path $clipPath -Text $clip.Text -SpeakingRate $pack.SpeakingRate -ResolvedAccessToken $resolvedAccessToken
        $demoEntries[$clip.Id] = New-ClipManifestEntry -BasePath $voiceRoot -Path $clipPath -Text $clip.Text -SpeakingRate $pack.SpeakingRate
    }

    $manifest.packs += [ordered]@{
        id           = $pack.Id
        rate         = $pack.SpeakingRate
        speakingRate = $pack.SpeakingRate
        words        = $wordEntries
        pairs        = $pairEntries
        demos        = $demoEntries
    }
}

$manifestPath = Join-Path -Path $voiceRoot -ChildPath "manifest.json"
$manifest | ConvertTo-Json -Depth 10 | Set-Content -Path $manifestPath -Encoding UTF8

$summaryRows = foreach ($pack in $manifest.packs) {
    $wordDurations = @($pack.words.PSObject.Properties | ForEach-Object { $_.Value.durationMs })
    $pairDurations = @($pack.pairs.PSObject.Properties | ForEach-Object { $_.Value.durationMs })
    $maxWordMs = ($wordDurations | Measure-Object -Maximum).Maximum
    $maxPairMs = ($pairDurations | Measure-Object -Maximum).Maximum

    [pscustomobject]@{
        Pack                    = $pack.id
        SpeakingRate            = $pack.speakingRate
        MaxWordMs               = [math]::Round($maxWordMs, 1)
        MaxPairMs               = [math]::Round($maxPairMs, 1)
        QuarterFitsThroughBpm   = [math]::Floor(60000 / ($maxWordMs / $TargetFill))
        OneAndFitsThroughBpm    = [math]::Floor(60000 / ($maxPairMs / $TargetFill))
    }
}

Write-Host "Generated spoken-count samples in $voiceRoot"
Write-Host "Voice: $VoiceName"
$summaryRows | Format-Table -AutoSize

$bestQuarterCoverage = ($summaryRows | Measure-Object -Property QuarterFitsThroughBpm -Maximum).Maximum
$bestPairCoverage = ($summaryRows | Measure-Object -Property OneAndFitsThroughBpm -Maximum).Maximum

if ($bestQuarterCoverage -lt $TargetMaxBpm) {
    Write-Warning "No pack reached the target quarter-note ceiling of $TargetMaxBpm BPM. Increase speakingRate or add a faster pack."
}

if ($bestPairCoverage -lt $TargetMaxBpm) {
    Write-Warning "No pack reached the target 'one and' coverage ceiling of $TargetMaxBpm BPM. Increase speakingRate or add a faster pack."
}

Write-Host "When you're ready to audition these clips in the app, point SPOKEN_COUNT_ASSET_ROOT at '$voiceSlug'."
