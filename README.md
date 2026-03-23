# Modern Portfolio

A modern, animated developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Matter.js.

## Features

- Responsive single-page portfolio layout
- Physics-based draggable dynamic blocks
- Theme switching (dark/light) with smooth transitions
- Animated hero and dual-image sections
- Projects and experience sections driven by JSON data
- Local-clock footer and custom cursor interaction
- Dedicated 404 page with shared header/footer styling
- UI kit route for local development (`/ui`)

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion
- Matter.js
- React Router

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Default local URL:

- [http://localhost:3000](http://localhost:3000)

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```text
src/
  assets/                 Static images and SVGs
  components/
    layout/               App chrome (header, root layout, cursor, smooth scroll)
    sections/             Page sections (dynamic blocks, projects, footer, etc.)
  data/                   JSON and typed data adapters
  lib/                    Shared logic (physics helpers)
  pages/                  Route-level pages (home, 404, dev ui-kit)
  styles/                 Global tokens, base styles, typography, mixins
```

## Data-Driven Content

- Projects:
  - Source: `src/data/projects.json`
  - Adapter: `src/data/projects.ts`
- Experiences:
  - Source: `src/data/experiences.json`
  - Adapter: `src/data/experiences.ts`

## CV / Resume

- Current file location: `src/data/files/Evgenii_Gulev_CV_Latest.pdf`
- Footer links directly to the bundled PDF asset.

## UI Kit Route Access

- Route: `/ui`
- Behavior:
  - Works on localhost (`localhost`, `127.0.0.1`, `::1`)
  - Returns NotFound in non-localhost environments

This logic is defined in `src/App.tsx`.

## Performance Notes

Current image-loading strategy:

- Primary hero image is loaded with high priority (`fetchPriority="high"`).
- Secondary hero image and project images are lazy-loaded.
- Non-critical images use `decoding="async"` to reduce main-thread blocking.
- Dynamic block icons use SVG where possible for sharper rendering and lower transfer size.

If you want to optimize further:

- Add WebP/AVIF versions for large PNGs.
- Serve responsive image variants (`srcset` + `sizes`) for each breakpoint.
- Consider splitting extremely large hero assets into mobile/desktop variants.

## Deployment

Recommended platform: Vercel.

1. Import GitHub repo into Vercel
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy

For SPA routing, add a rewrite in `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Type-check and build production bundle
- `npm run preview` - Preview production build
- `npm run icons:generate` - Regenerate icon exports

## License

Personal portfolio project. Update license terms as needed for public reuse.
