# Vijayawada Utsav 2026 — Competitions Website

React + Vite source for the Vijayawada Utsav competitions site.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173). Use `npm run build` for a production build in `dist/`, and `npm run preview` to check it.

Requires Node.js 18 or newer. Fonts load from Google Fonts, so the first load needs an internet connection.

## Where things live

- `src/data/events.js`: every competition, programme, rule, date and link, including the Google Form (`LINKS.mainForm`), the Wonder Women form, the WhatsApp group and the guidelines document. Edit this file to update content.
- `src/components/`: one component per section (Hero, Manifesto, Programmes, Explorer, Beyond, Register, Rules, Footer, DetailOverlay, PosterViewer and so on).
- `src/lib/experience.js`: the interaction layer, covering the loader, custom cursor, magnetic buttons, scroll choreography, programme panels, competition finder, detail page, poster viewer and registration flow. It uses plain JavaScript and Web APIs, with no animation library.
- `src/styles/global.css`: all styling, including the torn-paper transitions, dark mode and reduced-motion rules.
- `public/posters/`: the official competition posters. `public/gallery/`: last year's photos. `public/logo.png`: the festival logo.

## Content notes

- Registration links live in `LINKS` in `src/data/events.js`:
  - `mainForm`: the main Google Form, covering Idol, Champs, Got Talent, Quiz and Family Talent.
  - `wonderForm` and `crownForm`: the separate forms, taken from the QR codes on the Wonder Women and Crown of Vijayawada posters.
- `curtainRaiserVideo` is the curtain raiser YouTube link. Last year's photos are listed in `GALLERY` and stored in `public/gallery/`.
- The hero countdown counts calendar days in India time and updates at midnight IST.
