# Metronome

A high-precision, touch-first metronome web app designed for musicians. Built as a Progressive Web App (PWA) for use on iPad and desktop.

**Live**: https://yenoh2.github.io/metronome

---

## Features

### Tempo Control
- **BPM range**: 20–230 BPM
- **Indeterminate dial**: Free-spinning encoder dial — rotate clockwise to increase tempo, counter-clockwise to decrease (~3° per BPM). No hard stops.
- **Fine-tune buttons**: ±1 BPM per tap
- **Tempo marking**: Displays Largo / Andante / Moderato / Allegro / Presto based on current BPM

### Quick Pick Tempos
- Two customizable rows of saved tempos (blue and pink)
```markdown
- Tap any tempo to set it instantly
```
- Edit mode (✎ button) lets you reassign any slot via a number pad
- **Number pad UX**: Opening the pad to edit a value replaces the current number on the first keypress — no manual clearing required

### Playback
- Woodblock click sound (synthesized via Web Audio API, pre-rendered for low latency)
- Visual beat indicators flash in sync with each beat
- Wake lock keeps the screen on during playback

### Time Signature & Subdivisions
- Time signatures: 2/4, 3/4, 4/4
- Subdivisions: Quarter, Eighth, Sixteenth (hidden controls, persisted to storage)

### Settings Persistence
- All settings (BPM, time signature, subdivision, accent, quick picks) saved to `localStorage` and restored on next launch

---

## Running Locally

Start a local dev server in the project directory:

```bash
npx serve
```

- **Browser**: `http://localhost:3000`
- **iPad (same Wi-Fi)**: Find your PC's IP via `ipconfig` (Windows) and open `http://<YOUR-IP>:3000` in Safari

### Generate Google TTS Spoken-Count Packs

The repo includes a Google Cloud Text-to-Speech batch generator at `scripts/generate_spoken_count_samples_google.ps1`.

Typical flow:

```powershell
gcloud auth application-default login
.\scripts\generate_spoken_count_samples_google.ps1 `
  -VoiceName 'en-US-Chirp3-HD-Charon' `
  -PackSpecs @('natural:1.00', 'tight:1.12', 'brisk:1.24') `
  -TargetMaxBpm 150
```

Notes:
- The script writes a new voice folder under `assets/audio/spoken-count/`.
- It can use auth from `gcloud`, `-AccessToken`, `GOOGLE_ACCESS_TOKEN`, or `-CredentialsPath` / `GOOGLE_APPLICATION_CREDENTIALS` when those point to an OAuth authorized-user JSON file.
- If Application Default Credentials are not available, it falls back to `gcloud auth print-access-token`.
- Service-account JSON is not currently supported directly on this Windows PowerShell runtime; mint a bearer token separately or use `gcloud` / authorized-user credentials.
- After generating a pack, update `SPOKEN_COUNT_ASSET_ROOT` in `main.js` to audition the new voice set.

### Generate Edge Neural Spoken-Count Packs

If you have Python and `edge-tts` installed, you can generate spoken-count packs with Microsoft Edge's built-in neural voices:

```powershell
py .\scripts\generate_spoken_count_samples_edge.py `
  --voice en-US-AriaNeural `
  --pack natural:+0% `
  --pack tight:+12% `
  --pack brisk:+24% `
  --target-max-bpm 150
```

Notes:
- The Edge service streams MP3 natively, so this generator writes `.mp3` assets and a compatible manifest.
- The app now honors `startOffsetMs` from the manifest, which keeps spoken counts aligned even when a clip has leading silence.
- After generating a pack, update `SPOKEN_COUNT_ASSET_ROOT` in `main.js` to audition the new voice set.

### Add to Home Screen (iOS)
1. Open in Safari
2. Tap Share → **Add to Home Screen**
3. Launches fullscreen like a native app

---

## Tech Stack

- Vanilla HTML / CSS / JavaScript — no frameworks
- Web Audio API for precise click scheduling
- PWA manifest + `apple-mobile-web-app-capable` for home screen support
- `localStorage` for settings persistence
- Screen Wake Lock API to prevent sleep during playback
