# AGENTS.md

## Project

Personal portfolio of Ibrohim Hanafi, served at https://blint.dev.
Static site: plain HTML, one CSS file, one JS file. No framework, no build step, no dependencies.

## Commands

```bash
python3 -m http.server 4321   # preview at http://localhost:4321
npx wrangler pages deploy .   # manual deploy (config: wrangler.toml)
```

## Structure

```
index.html        # Home: hero, socials, 3 skill cards
about.html        # About Me + Story
project.html      # placeholder ("Coming Soon")
blog.html         # placeholder ("Coming Soon")
assets/style.css  # all styling, hand-written
assets/main.js    # theme toggle, cursor spotlight, confetti
DESIGN.md         # design tokens + component specs — read before changing UI
wrangler.toml     # Cloudflare Pages config (no build step)
```

## Conventions

- One stylesheet. Class names mirror Tailwind utilities (`text-xl`, `bg-card`, `md:` → `@media`).
  Add rules under the matching `/* ---------- section ---------- */` comment.
- Colors only through tokens: `hsl(var(--token))`. No hardcoded brand colors in component rules.
- Dark mode is the `html.theme-dark` class, set by `assets/main.js` and persisted in
  `localStorage.theme`. Do not add `prefers-color-scheme` overrides in CSS.
- The nav and footer are copy-pasted into all four HTML files. Changing either means editing
  all four.
- Keep paths relative (`assets/style.css`), not root-absolute.
- Stay dependency-free: no npm packages, no CDN scripts. Fontshare fonts are the only external request.

## Gotchas

- `.bg-card::before` is an animated conic "beam" border driven by `@property --beam-angle`.
  Removing that `@property` block stops the animation silently.
- Nav is fixed at the bottom on mobile and at the top from 768px. The footer keeps
  `padding-bottom: 6rem` on mobile so the nav does not cover it.
- The old Astro/Tailwind version is archived at branch `archive/blint.dev-v1`,
  tag `v1.0.0-archive`. Do not bring it back unless asked.
- `DESIGN.md` was written against the original Astro source; where it disagrees with
  `assets/style.css`, the CSS is the truth.
