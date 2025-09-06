# YouTube Clone (React + Redux Toolkit + Firebase + Tailwind)

No ENV: keys are in `src/config.js`.

## Quick Start
1) Install deps
```
npm i
```
2) Put keys in `src/config.js` (YouTube API key + Firebase web config).
3) Run app
```
npm run dev
```
4) Build & deploy (Netlify)
```
npm run build
```
Publish `dist/` and ensure `netlify.toml` exists (SPA redirect).

## Features
- Popular videos (home)
- Video detail with iframe, title, description, likes, views, timestamp
- Right sidebar suggestions (click to change video)
- Protected detail route (login required)
- Firebase email/password auth
- Tailwind YouTube-like UI
- Redux Toolkit slices for videos, current video, suggestions, auth

## Demo Link
https://youtubeplusc.netlify.app/
