param(
    [string]$OutputRoot = "assets/audio/spoken-count",
    [string]$VoiceHint = "Microsoft Zira Desktop",
    [string[]]$PackSpecs = @("natural:0", "tight:2", "brisk:4", "rapid:6", "sprint:8")
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

function Release-ComObject {
    param([object]$ComObject)

    if ($null -ne $ComObject) {
        [void][System.Runtime.InteropServices.Marshal]::ReleaseComObject($ComObject)
    }
}

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

function Find-VoiceDescription {
    param([string]$Hint)

    $probe = $null
    try {
        $probe = New-Object -ComObject SAPI.SpVoice
        $voices = @($probe.GetVoices())

        if ($voices.Count -eq 0) {
            throw "No SAPI voices are available on this machine."
        }

        $match = $voices |
            Where-Object { $_.GetDescription() -like "$Hint*" } |
            Select-Object -First 1

        if ($null -eq $match) {
            $available = $voices | ForEach-Object { $_.GetDescription() }
            throw "No voice matched '$Hint'. Available voices: $($available -join ', ')"
        }

        return $match.GetDescription()
    }
    finally {
        Release-ComObject $probe
    }
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

function Write-SpeechClip {
    param(
        [string]$Path,
        [string]$Text,
        [int]$Rate,
        [string]$VoiceDescription
    )

    $voice = $null
    $stream = $null

    try {
        $voice = New-Object -ComObject SAPI.SpVoice

        $voiceToken = @($voice.GetVoices()) |
            Where-Object { $_.GetDescription() -eq $VoiceDescription } |
            Select-Object -First 1

        if ($null -eq $voiceToken) {
            throw "Voice '$VoiceDescription' is no longer available."
        }

        $voice.Voice = $voiceToken
        $voice.Rate = $Rate
        $voice.Volume = 100

        $stream = New-Object -ComObject SAPI.SpFileStream
        $stream.Open($Path, 3, $false)

        $voice.AudioOutputStream = $stream
        [void]$voice.Speak($Text)
    }
    finally {
        if ($null -ne $stream) {
            $stream.Close()
            Release-ComObject $stream
        }

        if ($null -ne $voice) {
            Release-ComObject $voice
        }
    }
}

function New-ClipManifestEntry {
    param(
        [string]$BasePath,
        [string]$Path,
        [string]$Text,
        [int]$Rate
    )

    $wavInfo = Get-WavInfo -Path $Path
    $trimInfo = $null

    try {
        $trimInfo = Trim-WavSilence -Path $Path
    }
    catch {
        Write-Warning "Trim failed for '$Path': $($_.Exception.Message)"
    }

    $finalInfo = Get-WavInfo -Path $Path
    $relativePath = (Get-RelativePath -BasePath $BasePath -TargetPath $Path).Replace("\", "/")

    return [ordered]@{
        text            = $Text
        rate            = $Rate
        file            = $relativePath
        durationMs      = $finalInfo.DurationMs
        originalMs      = $wavInfo.DurationMs
        leadingTrimMs   = if ($null -ne $trimInfo) { $trimInfo.LeadingTrimMs } else { 0 }
        trailingTrimMs  = if ($null -ne $trimInfo) { $trimInfo.TrailingTrimMs } else { 0 }
        sampleRate      = $finalInfo.SampleRate
        channels        = $finalInfo.Channels
        bitsPerSample   = $finalInfo.BitsPerSample
    }
}

$voiceDescription = Find-VoiceDescription -Hint $VoiceHint
$voiceSlug = ConvertTo-Slug -Text $voiceDescription
$voiceRoot = Join-Path -Path $OutputRoot -ChildPath $voiceSlug

New-Item -ItemType Directory -Force -Path $voiceRoot | Out-Null

$manifest = [ordered]@{
    generatedAt      = (Get-Date).ToString("s")
    voiceHint        = $VoiceHint
    voiceDescription = $voiceDescription
    voiceId          = $voiceSlug
    packs            = @()
}

foreach ($packSpec in $PackSpecs) {
    if ($packSpec -notmatch "^([^:]+):(-?\d+)$") {
        throw "Pack spec '$packSpec' is invalid. Use the form '<id>:<rate>'."
    }

    $packId = $Matches[1]
    $rate = [int]$Matches[2]

    $packDir = Join-Path -Path $voiceRoot -ChildPath $packId
    $wordDir = Join-Path -Path $packDir -ChildPath "words"
    $pairDir = Join-Path -Path $packDir -ChildPath "pairs"
    $demoDir = Join-Path -Path $packDir -ChildPath "demos"

    New-Item -ItemType Directory -Force -Path $wordDir | Out-Null
    New-Item -ItemType Directory -Force -Path $pairDir | Out-Null
    New-Item -ItemType Directory -Force -Path $demoDir | Out-Null

    $wordEntries = [ordered]@{}
    foreach ($clip in $wordClips) {
        $clipPath = Join-Path -Path $wordDir -ChildPath "$($clip.Id).wav"
        Write-SpeechClip -Path $clipPath -Text $clip.Text -Rate $rate -VoiceDescription $voiceDescription
        $wordEntries[$clip.Id] = New-ClipManifestEntry -BasePath $voiceRoot -Path $clipPath -Text $clip.Text -Rate $rate
    }

    $pairEntries = [ordered]@{}
    foreach ($clip in $pairClips) {
        $clipPath = Join-Path -Path $pairDir -ChildPath "$($clip.Id).wav"
        Write-SpeechClip -Path $clipPath -Text $clip.Text -Rate $rate -VoiceDescription $voiceDescription
        $pairEntries[$clip.Id] = New-ClipManifestEntry -BasePath $voiceRoot -Path $clipPath -Text $clip.Text -Rate $rate
    }

    $demoEntries = [ordered]@{}
    foreach ($clip in $demoClips) {
        $clipPath = Join-Path -Path $demoDir -ChildPath "$($clip.Id).wav"
        Write-SpeechClip -Path $clipPath -Text $clip.Text -Rate $rate -VoiceDescription $voiceDescription
        $demoEntries[$clip.Id] = New-ClipManifestEntry -BasePath $voiceRoot -Path $clipPath -Text $clip.Text -Rate $rate
    }

    $manifest.packs += [ordered]@{
        id    = $packId
        rate  = $rate
        words = $wordEntries
        pairs = $pairEntries
        demos = $demoEntries
    }
}

$manifestPath = Join-Path -Path $voiceRoot -ChildPath "manifest.json"
$manifest | ConvertTo-Json -Depth 10 | Set-Content -Path $manifestPath -Encoding UTF8

Write-Host "Generated spoken-count samples in $voiceRoot"
Write-Host "Voice: $voiceDescription"
foreach ($pack in $manifest.packs) {
    $durations = $pack.words.GetEnumerator() | ForEach-Object { "$($_.Key)=$($_.Value.durationMs)ms" }
    Write-Host "Pack $($pack.id) (rate $($pack.rate)): $($durations -join ', ')"
}
