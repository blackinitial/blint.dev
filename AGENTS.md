# AGENTS.md

## Project Overview
Personal portfolio site for Ibrohim Hanafi (blint.dev) - Astro + React + Tailwind CSS + Radix UI.

## Quick Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Architecture
- **Framework**: Astro with React integration (server-rendered)
- **Styling**: Tailwind CSS with shadcn/ui component pattern
- **Deployment**: Vercel (serverless)
- **Path alias**: `@/*` → `./src/*`

## Key Conventions
- **UI Components**: `src/components/ui/` - shadcn/ui style components using Radix primitives
- **Layout**: `src/layouts/main.astro` - wraps all pages
- **Pages**: `src/pages/` - Astro file-based routing
- **Dark mode**: Uses `.theme-dark` class (not system preference toggle)

## Gotchas
- Radix UI packages require SSR externalization (configured in astro.config.mjs)
- Custom fonts (Satoshi, Erode) loaded from Fontshare API in global.css
- CSS variables use HSL format without `hsl()` wrapper in definitions
- Both `package-lock.json` and `pnpm-lock.yaml` exist - prefer npm

## File Structure
```
src/
├── components/
│   ├── ui/           # shadcn/ui components (React)
│   ├── cards/        # Card demos (React)
│   └── *.astro       # Layout components (Nav, Footer, etc.)
├── layouts/
│   └── main.astro    # Main layout wrapper
├── pages/            # File-based routing
├── lib/
│   └── utils.ts      # cn() utility (clsx + tailwind-merge)
└── styles/
    └── global.css    # Tailwind + CSS variables
```
