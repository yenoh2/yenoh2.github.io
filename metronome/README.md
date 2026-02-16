# Metronome - Quick Start

## Running Locally

1. **Start a development server** in the project directory:
   ```bash
   npx serve
   ```
   
2. **On your PC**: Open `http://localhost:3000` (or the port shown)

3. **On your iPad**: 
   - Make sure iPad is on the same Wi-Fi network
   - Find your PC's local IP address:
     - Windows: `ipconfig` (look for IPv4 Address)
     - Mac: System Preferences → Network
   - Open Safari and go to `http://<YOUR-PC-IP>:3000`

4. **Add to Home Screen** (optional):
   - Tap the Share button in Safari
   - Select "Add to Home Screen"
   - The app will launch fullscreen like a native app

## Current Status

✅ Fully functional metronome with:
- Circular tempo dial (20-300 BPM)
- Time signatures: 2/4, 3/4, 4/4, 6/8
- Subdivisions: Quarter, Eighth, Sixteenth
- Visual beat indicators
- LocalStorage persistence

⚠️ Currently using synthesized beep sounds (will be replaced with woodblock samples later)

## Next Steps

- Replace synthesized sounds with authentic woodblock samples
- Create app icons for PWA home screen
- Test on iPad and refine touch interactions
