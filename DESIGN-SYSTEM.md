# Design System — blint.dev (Ibrohim Hanafi)

Dokumen ini mengekstrak design system dari website asli [blint.my.id](https://blint.my.id)
(built with Astro + Tailwind + shadcn-style tokens) dan mendokumentasikan replikanya
dalam **pure HTML/CSS/JS** (`assets/style.css`).

---

## 1. Design Tokens

Semua warna disimpan sebagai **HSL channel triplets** (tanpa `hsl(...)` wrapper), lalu
dipakai lewat `hsl(var(--token))`. Ini memungkinkan terang/gelap hanya mengganti nilai
var, dan opacity seperti `hsl(var(--primary) / .8)`.

### Warna — Light (`:root`)

| Token                | HSL               | Keterangan                      |
| -------------------- | ----------------- | ------------------------------- |
| `--background`       | `200 27% 94%`     | Background halaman              |
| `--foreground`       | `217 33% 17%`     | Teks utama (slate)              |
| `--muted`            | `210 40% 96.1%`   | Area muted (toggle bg)          |
| `--muted-foreground` | `215.4 16.3% 46.9%` | Teks sekunder |
| `--card`             | `0 0% 100%`       | Kartu/nav bar (putih)           |
| `--card-foreground`  | `222.2 47.4% 11.2%` | Heading di kartu |
| `--primary`          | `21 99% 61%`      | Oranye brand / link/iklan       |
| `--primary-foreground` | `0 0% 100%`     | Teks di atas oranye             |
| `--secondary`        | `233 89% 55%`     | Biru (icon gradient)            |
| `--accent`           | `234 87% 91%`     | Hover/reinforce                 |
| `--border` / `--input` | `214.3 31.8% 91.4%` / `21 26% 87%` | Border ringan |
| `--destructive`      | `0 100% 50%`      | Merah error (tidak terpakai di UI ini) |
| `--ring`             | `234 26% 71%`     | Focus ring                     |

### Warna — Dark (`html.theme-dark`)

| Token                | HSL               |
| -------------------- | ----------------- |
| `--background`       | `212 17% 7%`      |
| `--foreground`       | `216 9% 78%`      |
| `--card`             | `223 19% 4%`      |
| `--card-foreground`  | `0 0% 100%`       |
| `--secondary-foreground` | `223 19% 92%` |
| sisanya          | sama dengan light (primary/accent/border dst. tetap) |

### Warna tambahan (Tailwind palette, dipakai langsung)

| Nama          | Hex        | Penggunaan                                  |
| ------------- | ---------- | ------------------------------------------- |
| `amber-200`   | `#fde68a`  | Gradient "active" nav (start) + shining text |
| `amber-400`   | `#fbbf24`  | Hover nav / focus ring                      |
| `amber-500`   | `#f59e0b`  | Confetti button, social links, gradient via |
| `amber-700`   | `#b45309`  | Gradient "active" nav (end)                 |
| `amber-300`   | `#fcd34d`  | Hover social, pattern background            |
| `slate-900`   | `#0f172a`  | Nama depan (hanya light)                    |
| `slate-200`   | `#e2e8f0`  | Placeholder avatar bg                       |
| `slate-900/10`| `#0f172a1a`| Warna pattern grid                          |

### Radius

- `--radius: 1.5rem` — kartu, modals, `rounded-lg`
- `9999px` — pill (nav, buttons, avatar, theme toggle)

### Shadow / Elevation

Di source asli memakai `drop-shadow` (bukan `box-shadow`) agar mengikuti bentuk irregular:

- `drop-shadow-md`: `drop-shadow(0 4px 3px rgb(0 0 0/.07)) drop-shadow(0 2px 2px rgb(0 0 0/.06))` — kartu feature
- `drop-shadow-xl`: `drop-shadow(0 20px 13px rgb(0 0 0/.03)) drop-shadow(0 8px 5px rgb(0 0 0/.08))` — nav pill, avatar
- `shadow-inner`: dipakai theme toggle (`inset 0 2px 4px rgb(0 0 0/.05)`)

---

## 2. Tipografi

Font di-load via **Fontshare**:

```css
@import "https://api.fontshare.com/v2/css?f[]=erode@401,400&f[]=satoshi@900,700,400&display=swap";
```

| Family   | Role                        | Kapan dipakai                                     |
| -------- | --------------------------- | ------------------------------------------------- |
| **Satoshi** | Body + display (default) | Semua teks; font-weight 400/700/900               |
| **Erode** | Serif (emoji/aksen)        | Brand "blint.dev", heading "Story 📰", story body |

Skala (Tailwind default):

| Class      | Size / Line-height |
| ---------- | ------------------ |
| `text-sm`  | `.875rem` / `1.25rem` |
| `text-xl`  | `1.25rem` / `1.75rem` |
| `text-2xl` | `1.5rem` / `2rem`     |
| `text-4xl` | `2.25rem` / `2.5rem`  |
| `text-5xl` | `3rem` / `1`          |
| `text-7xl` | `4.5rem` / `1` (emoji hero) |

Weight: `font-medium (500)`, `font-semibold (600)`, `font-bold (700)`, `font-extrabold (800)`, `font-black (900)`.

### Efek teks khusus

- **`shining-text`** — nama "Ibrohim Hanafi –" memakai gradient amber tiga stop
  (`#fde68a → #f59e0b → #b45309`) di-`background-clip: text`, dengan animasi
  `shine 3s linear infinite` yang menggeser background-position left→right.

---

## 3. Spacing

Tailwind rem scale standar (berbasis 0.25rem):

| Token | Rem   | Token | Rem  |
| ----- | ----- | ----- | ---- |
| `gap-1`  | .25rem | `p-8`  | 2rem |
| `gap-4`(mt-4/mb-4/p-4) | 1rem | `py-10` | 2.5rem |
| `gap-6`  | 1.5rem | `mb-8`  | 2rem |
| `gap-8`  | 2rem   | `mb-12` | 3rem |

Layout container: `max-w-5xl` = **64rem** (1024px), centered dengan `mx-auto`.
Vertical rhythm hero: `pt-16` (4rem) atas, `pb-8` (2rem) bawah.

---

## 4. Breakpoints (Tailwind default)

| Prefix | Min-width | Perubahan yang terjadi                        |
| ------ | --------- | --------------------------------------------- |
| sm     | 640px     | Nav align-start, avatar tetap tengah, heading `text-5xl` |
| md     | 768px     | Nav pindah atas, brand mobile hilang, avatar `float:right`, feature cards 3 kolom, hero text-left |
| lg     | 1024px    | Avatar lebih besar (18rem), padding hero-copy horizontal 5rem |
| xl     | 1280px    | (tidak terpakai pada halaman ini)             |

**Nav bar**: mobile → fixed di **bawah**; `md+` → fixed di **atas** (`top-0 bottom-auto`).

---

## 5. Komponen

### 5.1 Nav pill (flying navbar)

- Container pill: `bg-card`, `rounded-full`, `drop-shadow-xl`, padding `.75rem 1rem`.
- Item: `rounded-full`, padding `.5rem 1rem`, warna `text-primary`.
- **Active** (`.nav-pill a.active`): text putih + gradient amber `linear-gradient(to bottom right, #fde68a, #f59e0b, #b45309)`, `aria-current="true"`.
- **Hover**: `background: #fbbf24` (amber-400) + text putih.
- Selalu ada **theme toggle** di posisi terakhir.
- Urutan: Home · Project · Blog · About.

### 5.2 Theme toggle

- `button.theme-toggle`: `bg-muted`, border 1px, `border-radius:9999px`, `shadow-inner`.
- Dua `.icon` (sun + moon), `2rem×2rem`, di-render persis → yang atasnya hanya sun (light).
- Slide indicator: `::before` pada `.icon.light` = disk warna `bg-primary` yang
  `translate(100%)` saat dark. CSS vars + `transition transform .2s ease`.
- **JS**: ambil tema awal dari `localStorage('theme')` → fallback `prefers-color-scheme`.
  Set `html.theme-dark`, lalu `MutationObserver` menyimpan perubahan. Tombol toggle
  set `aria-pressed`.

### 5.3 Card

Base: `background: hsl(var(--card))`, `border-radius: var(--radius)`, `drop-shadow-md`,
`padding-top: 1px` (biar shadow atas terlihat).

Variasi:
- **Hero card** (Home): berisi avatar + intro + social.
- **Feature card** (Design/Code/Growth): icon `3em` warna primary, judul `text-2xl font-extrabold`, deskripsi `text-xl text-muted-foreground`.
- **About card**: dua kartu di-rotasi seperti post-it — `rotate(2deg)` dan `rotate(-2deg)` (lihat §5.7).
- **Coming soon card** (Project/Blog): teks besar tengah.

### 5.4 Avatar

- Lingkaran `rounded-full`, ukuran responsif: `11rem` → `16rem` (md) → `18rem` (lg).
- Bg placeholder `#e2e8f0`; gambar `object-fit: cover`, `position:absolute inset 0`.
- `md+`: `float: right` dengan `shape-outside: circle(40%)` sehingga teks mengalir
  mengelilingi avatar (efek kap. teks hanya di satu sisi).
- Mobile: `margin: -4rem auto 0` — avatar menutupi tepi atas card.

### 5.5 Confetti button ("Say Hi 👋🏻!")

- Pill: `padding .25rem 1rem`, warna `text-amber-500`, ring 1px inset amber.
- Focus: `ring-2 ring-amber-400`.
- Klik → confetti (100 partikel, spread 70°, angle 55°, 7 warna).
- Vanilla implementation: satu `<canvas>` `position:fixed` + `requestAnimationFrame`,
  gravitasi & decay. `prefers-reduced-motion` → skip.

### 5.6 Social icons

- 6 link brand (Github, Codepen, Twitter/X, Facebook, Instagram, LinkedIn).
- Inline SVG **Phosphor** 1.75em, `stroke=currentColor` (via `--size`).
- Warna `text-amber-500`, hover `text-amber-300`.
- Pada source asli, icon stroke memakai `linearGradient` warna `hsl(primary) → accent → secondary`; disederhanakan ke solid amber di replika.

### 5.7 About page

- **Heading**: `text-4xl sm:text-5xl font-extrabold font-display`, `mb-8`.
- Kartu 1 (About Me): emoji 👨🏻‍💻 besar `text-7xl sm:text-9xl` di posisi `absolute -top-16 right-40`, kartu `rotate(2deg)`.
- Kartu 2 (Story 📰): heading **font-serif** + body `font-serif prose-xl text-justify`, kartu `rotate(-2deg)`.
- **`.paper`** = lined-paper background: garis horizontal (`linear-gradient(--card-foreground .05em, transparent .05em)`, `background-size: 100% 2em`), dengan `::before`/`::after` band `bg-muted` setinggi 9rem di atas & bawah (efek buku tulis blur di sisi).
- Penutup: emoji ✍🏻 `text-5xl` align kanan `mt-8`.

### 5.8 Footer

- `position:absolute bottom-0`, `bg-card`, hanya **rounded-top** (`rounded-tl-lg rounded-tr-lg`).
- Isi: `© 2026 | Made with 👨🏻‍💻 + ☕️ + 🤲🏻` — `text-sm`, tengah (mobile) / kanan (`lg+`), padding-bottom besar di mobile (`pb-24`) agar tak tertutup nav bawah.

### 5.9 Background grid pattern

- SVG pattern grid: `pattern` 128×128, garis `M0 128V.5H128`, warna `currentColor` (amber-300), diposisikan `x=50% y=100%`.
- Container: `position:absolute inset-0`, `top:50%`, `z-index:-10`, mask
  `linear-gradient(transparent, 75%, white)` sehingga pattern hanya memudar di bawah halaman.

---

## 6. Interaksi & Behaviour (JS — `assets/main.js`)

| Behaviour | Deskripsi |
| --------- | --------- |
| Theme init | Baca `localStorage('theme')` → fallback system preference. Set `html.theme-dark` sebelum render. |
| Theme persist | `MutationObserver` pada `class` html → tulis `localStorage`. |
| Toggle | `aria-pressed` sinkron; icon slide 0.2s. |
| Confetti | Click handler pada `button.confetti`. |

No dependencies, no build step. Single script (`main.js`) me-load di semua halaman.

---

## 7. Struktur File

```
blint.my.id/
├── index.html        # Home
├── about.html        # About (About Me + Story)
├── project.html      # Coming Soon
├── blog.html         # Coming Soon
├── assets/
│   ├── style.css     # seluruh design system
│   ├── main.js       # theme toggle + confetti
│   ├── avatar.jpg    # avatar (dari /avatar.jpeg)
│   └── favicon.svg
└── DESIGN-SYSTEM.md
```

## 8. Aksesibilitas

- `aria-current` pada nav item aktif.
- `aria-pressed` pada theme toggle; `aria-label`/"Dark theme" sr-only text.
- `sr-only` helper.
- `width/height` pada avatar untuk CLS prevention.
- `prefers-reduced-motion: reduce` mematikan shining-text & slide toggle.
- Focus visible rings pada tombol.

## 9. Catatan Replika (vs source Astro)

- `icons.js`/phosphor package tidak dipakai — SVG ditaruh inline di HTML.
- Icon social memakai solid amber (source memakai gradient multi-stop).
- Fontshare di-import langsung di CSS (sama seperti source).
- Tidak ada Vercel analytics / prefetch (source menyertakannya).