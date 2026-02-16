# Technology Stack

## Core

| Layer       | Technology     | Rationale                                                   |
|-------------|----------------|-------------------------------------------------------------|
| Structure   | HTML5          | Semantic markup, PWA `<meta>` tags for iPad home screen     |
| Styling     | Vanilla CSS    | No build step needed; CSS custom properties for theming     |
| Logic       | Vanilla JS     | Zero dependencies; direct access to Web Audio API           |

## Key Browser APIs

| API              | Purpose                                                        |
|------------------|----------------------------------------------------------------|
| **Web Audio API** | High-precision oscillator scheduling for click sounds         |
| **LocalStorage**  | Persist tempo, time signature, and subdivision between sessions |
| **Touch Events**  | Smooth dial interaction on iPad                                |

## Development & Deployment

| Concern     | Tool / Approach                   | Notes                                              |
|-------------|-----------------------------------|----------------------------------------------------|
| Dev Server  | VS Code Live Server *or* `npx serve` | Zero-config, instant reload                     |
| iPad Access | Local network (same Wi-Fi)        | Open `http://<PC-IP>:port` on iPad Safari          |
| Hosting     | GitHub Pages / Netlify (optional) | Free static hosting if a public URL is ever needed |
| PWA         | `manifest.json` + service worker  | "Add to Home Screen" for a native app feel on iPad |

## Design References

- **Layout.jpg** — Primary UI reference (dark theme, circular dial, beat indicators)
