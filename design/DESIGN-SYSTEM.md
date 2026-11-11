# Design System — blint.dev (dari FigCraft)

Dokumen ini menurunkan **variable (token), atom, dan komponen** dari file desain
`design/blint.figcraft`. Semua angka di sini dibaca langsung dari file itu, bukan dikarang.

- Sumber: `design/blint.figcraft` — 2 page: **Page 1** (12 frame: Home + Project + Blog,
  masing-masing light & dark, desktop & mobile) dan halaman **Design System** yang
  menampilkan semua token/style/komponen yang di-bind.
- Frames di Page 1:
  - Home — Desktop (Light) 1440×1120 + (Dark); Home - Mobile (Light) 390×1700 + (Dark).
  - Project — Desktop (Light) 1440×1120 + (Dark); Project — Mobile (Light) 390×2400 + (Dark).
  - Blog — Desktop (Light) 1440×1120 + (Dark); Blog — Mobile (Light) 390×2100 + (Dark).
- Implementasi CSS (termasuk nilai dark mode) ada di [`../DESIGN.md`](../DESIGN.md) dan
  `assets/style.css`. Kalau dokumen itu berbeda dengan file ini, CSS yang menang untuk kode,
  file FigCraft yang menang untuk desain.

---

## 1. Variables (token)

### 1.1 Warna

Nama variable di file = nama collection + nama variable: `Color/bg`, `Radius/card`,
`Space/4`. Collection `Color` punya 2 mode (Light/Dark); Radius dan Space satu mode.

| Variable | Nilai | Dipakai di |
| --- | --- | --- |
| `color/bg` | `#ECF1F4` | Background frame (desktop & mobile) |
| `color/card` | `#FFFFFF` | Nav pill, hero card, skill card, knob |
| `color/ink` | `#0F172A` | Role, judul skill, brand |
| `color/muted` | `#64748B` | Intro, deskripsi skill, footer |
| `color/primary` | `#F59E0B` | Label nav, stroke ikon, border tombol, social dot |
| `color/border` | `#E2E8F0` | Stroke theme toggle |
| `color/toggle-track` | `#E7D8CE` | Background theme toggle |
| `color/on-primary` | `#FFFFFF` | Label nav aktif, teks di atas gradient |
| `color/shadow` | `#00000014` (alpha 8%) | Drop shadow semua kartu & nav |
| `gradient/nav-active` | `#FBBF24 → #F59E0B → #B45309` | Pill nav aktif (diagonal, kiri-atas → kanan-bawah) |
| `gradient/name` | `#FDE68A → #F59E0B → #B45309` | Teks nama "Ibrohim Hanafi" |

Nilai mode **Dark** pada collection `Color` — hanya 4 variable yang berubah, sisanya ikut nilai Light:

| Variable | Light | Dark |
| --- | --- | --- |
| `color/bg` | `#ECF1F4` | `#0F1115` |
| `color/card` | `#FFFFFF` | `#08090C` |
| `color/ink` | `#0F172A` | `#FFFFFF` |
| `color/shadow` | `#000000` alpha 8% | `#000000` alpha 20% |

### 1.2 Radius

| Variable | Nilai | Dipakai di |
| --- | --- | --- |
| `radius/card` | `24` | Hero card, skill card |
| `radius/pill` | `999` | Nav pill, nav item, tombol Say Hi, theme toggle |
| `radius/avatar` | setengah ukuran (`144` desktop, `88` mobile) | Avatar |

### 1.3 Spacing

Basis 4px. Hanya nilai yang benar-benar muncul di file:

| Variable | Nilai | Dipakai di |
| --- | --- | --- |
| `space/1` | `4` | Gap item nav |
| `space/2` | `8` | Padding nav pill, padding vertikal nav item, gap ikon→judul skill |
| `space/3` | `12` | Gap hero copy mobile |
| `space/4` | `16` | Gap hero copy desktop, gap antar skill card, gap social mobile, padding horizontal nav item desktop |
| `space/6` | `24` | Gap social desktop |
| `space/8` | `32` | Padding skill card |
| `space/inset` | `72` / `80` | Offset hero copy di dalam hero card (y/x desktop); mobile memakai `x=16, y=140` karena avatar menumpuk |

Layout: container `1024` (desktop, margin `208` kiri-kanan di frame 1440) dan `358`
(mobile, margin `16` di frame 390).

### 1.4 Tipografi

Font: **Inter Variable** (pengganti Satoshi yang tidak terpasang di mesin ini). Keenam
belas peran teks di bawah sudah dibuat sebagai text style di file; warna teksnya tetap
di-bind ke variable warna, bukan disimpan di style.

| Text style | Size | Weight | Line height | Warna | Dipakai di |
| --- | --- | --- | --- | --- | --- |
| `display/name` | 48 | Bold | 115% | `gradient/name` | Name desktop |
| `display/name-mobile` | 30 | Bold | 120% | `gradient/name` | Name mobile |
| `display/role` | 48 | Bold | 110% | `color/ink` | Role desktop |
| `display/role-mobile` | 30 | Bold | 115% | `color/ink` | Role mobile |
| `body/intro` | 30 | Regular | 135% | `color/muted` | Intro desktop |
| `body/intro-mobile` | 24 | Regular | 135% | `color/muted` | Intro mobile |
| `heading/card` | 24 | Bold | 120% | `color/ink` | Judul skill card |
| `body/card` | 20 | Regular | 140% | `color/muted` | Deskripsi skill card |
| `label/nav` | 16 | Medium | 125% | `color/primary` / `color/on-primary` | Item nav desktop |
| `label/nav-mobile` | 14 | Medium | 125% | `color/primary` / `color/on-primary` | Item nav mobile |
| `label/button` | 16 | Semi Bold | 125% | `color/primary` | "Say Hi 👋🏻!" |
| `body/brand` | 16 | Regular | 125% | `color/ink` | "blint.my.id" mobile |
| `caption/footer` | 14 | Regular | 125% | `color/muted` | Footer desktop |
| `caption/footer-mobile` | 12 | Regular | 125% | `color/muted` | Footer mobile |

### 1.5 Elevation & stroke

| Variable | Nilai |
| --- | --- |
| `shadow/card` | drop shadow `0 8 16`, warna `color/shadow`, spread `0` |
| `stroke/hairline` | `1` — theme toggle (`color/border`), tombol Say Hi (`color/primary`) |
| `stroke/social` | `1.5` — social dot (`color/primary`) |
| `stroke/icon` | `3` — ikon skill (`color/primary`) |

Shadow/Card dibuat sebagai effect style `Shadow/Card` dengan warna di-bind ke
`Color/shadow`.

---

## 2. Atoms

Unit terkecil yang dipakai ulang. Semua nama node di file memakai prefix peran
(`Nav / …`, `Skill / …`, `Social / …`).

### 2.1 Text

Teks auto-size: `widthAndHeight` kalau lebar bebas, `height` kalau lebar dikunci
(Intro desktop 520, Intro mobile 326, deskripsi skill 280/294). Gradient hanya untuk Name.

### 2.2 Icon (skill)

- Vector 48×48, `fill: none`, stroke `color/primary` 3px, ujung bulat.
- Tiga varian isi: **Design** (pen), **Code** (kurung siku), **Growth** (panah naik).
- Path diambil dari SVG di `index.html`, jadi ikon dan kode memakai bentuk yang sama.

### 2.3 Pill button — "Say Hi 👋🏻!"

- Frame horizontal, hug, padding `8/16`, radius `999`.
- Fill `none`, stroke `color/primary` 1px, label `label/button`.
- State: default (outline amber). Hover/focus/pressed belum digambar; di kode: focus ring
  amber, klik memicu confetti (lihat `../DESIGN.md` §5.5).

### 2.4 Nav item

- Frame horizontal, hug, radius `999`, padding `8/16` (desktop) atau `8/12` (mobile).
- **Default**: fill `none`, label `color/primary`.
- **Active**: fill `gradient/nav-active`, label `color/on-primary`.
- Hover belum digambar; di kode: background amber-400 + teks putih.

### 2.5 Avatar

- Image fill, bentuk lingkaran penuh (radius = ½ sisi).
- Desktop 288×288; mobile 176×176.
- Mobile menumpuk di tepi atas hero card (offset `y=-64` dari hero copy), bukan di dalam
  alur vertikal.

### 2.6 Theme toggle

- Track 56×40, radius `999`, fill `color/toggle-track`, stroke `color/border` 1px.
- Knob ellipse 24×24, fill `color/card`, inset `8`.
- Hanya state **light** yang digambar. State dark (knob bergeser, ikon bulan) belum ada.

### 2.7 Social icon

- Ikon brand asli (Simple Icons: GitHub, CodePen, X, Facebook, Instagram, LinkedIn),
  28×28, `fill: color/primary`, ikut mode Light/Dark otomatis.
- Tersedia sebagai komponen master `Socials / Desktop` dan `Socials / Mobile`; gap `24`
  desktop, `16` mobile.

### 2.8 Knob

Ellipse 24×24 putih di dalam theme toggle. Tidak dipakai di tempat lain.

---

## 3. Components

### 3.1 Nav

| Properti | Desktop | Mobile |
| --- | --- | --- |
| Ukuran | 397×56 (hug) | 358×56 (fixed) |
| Layout | horizontal, gap 4, padding 8 | sama |
| Fill / radius | `color/card` / `999` | sama |
| Shadow | `shadow/card` | sama |
| Item | Home, Project, Blog, About | sama |
| Item padding | `8/16`, hug | `8/12`, lebar `fill` (67.5) |
| Label | `label/nav` 16 | `label/nav-mobile` 14 |
| Ekor | Theme toggle 56×40 | sama |

Anatomi: `Nav` → 4× `Nav / <Page>` → `Label`; plus `Theme toggle` → `Knob`.
Varian: `active` (satu item, gradient) vs `default`. Posisi: desktop mengambang di atas
(`x=232, y=32`), mobile di bawah (`x=16, y=1540`) — mengikuti perilaku CSS (fixed bottom
di mobile, fixed top dari 768px).

### 3.2 Hero card

| Properti | Desktop | Mobile |
| --- | --- | --- |
| Ukuran | 1024×560 | 358×540 |
| Radius / fill | `24` / `color/card` | sama |
| Shadow | `shadow/card` | sama |
| Hero copy | 560 lebar, offset `80/72` | 326 lebar, offset `16/140` |
| Avatar | 288, di kanan (`x=864, y=76`) | 176, menumpuk atas (`x=91, y=-64`) |

Anatomi: `Hero card` → `Hero copy` (teks + social) + `Avatar`.
Varian: `desktop` (teks kiri, avatar kanan) dan `mobile` (teks tengah, avatar atas).

### 3.3 Hero copy

Frame vertikal, fill `none`.

| Properti | Desktop | Mobile |
| --- | --- | --- |
| Gap | 16 | 12 |
| Cross align | min (kiri) | center |
| Urutan | Say Hi → Name → Role → Intro → Socials | sama |
| Name / Role | 48 | 30 |
| Intro | 30, lebar 520 | 24, lebar 326, tengah |

### 3.4 Skill card

| Properti | Desktop | Mobile |
| --- | --- | --- |
| Ukuran | 330.67×213 (lebar `fill`, 3 kolom) | 358×213 (1 kolom) |
| Padding | 32 | 32 |
| Gap | 8 | 8 |
| Radius / fill | `24` / `color/card` | sama |
| Shadow | `shadow/card` | sama |

Anatomi: `Skill / <Name>` → `Icon` 48 → `Title` (`heading/card`) → `Description`
(`body/card`, lebar 280 desktop / 294 mobile).
Varian isi: Design, Code, Growth. Teks deskripsi:
- Design — "Designing user-friendly interfaces and experiences"
- Code — "Solving problems with code to develop modern apps"
- Growth — "Passionate about growth and learning"

### 3.5 Socials row

Frame horizontal, fill `none`, tinggi 28. Gap `24` desktop, `16` mobile; mobile `wrap`
dan `mainAlign: center` sehingga 6 dot bisa turun baris.

### 3.6 Footer

Teks tunggal, lebar penuh container (1024 desktop / 358 mobile), rata tengah:
`© 2026 | Made with 👨🏻‍💻 + ☕️ + 🤲🏻`, `caption/footer` (14) / `caption/footer-mobile` (12),
warna `color/muted`.

### 3.7 Page frame

- Desktop 1440×1120, mobile 390 per tingkat konten, fill `color/bg`, `clip: true`.
- Mobile: 1700 (Home), 2400 (Project), 2100 (Blog).
- Tidak ada auto layout di level page; posisi anak memakai koordinat absolut supaya
  komposisi desktop dan mobile bisa dibandingkan berdampingan.

### 3.8 Backdrop & beam border (Home, Project, Blog)

- `Backdrop / Glow` — dua ellipse `color/primary` radial di atas frame, selalu index 0–1
  (paling belakang). Node `Backdrop / Grid` memakai pattern tile `Pattern / Grid Tile`
  (32 px, garis `#FCD34D` 1 px, opacity 0.18).
- **Beam border** — stroke `strokeAlign: inside, weight 4` dengan angular gradient amber:
  transparan hampir seluruh lingkaran, ramp naik ke 80% lalu highlight putih dalam
  ~3.5% sweep, lalu turun lagi ke transparan. Resep stop disimpan persis sama di semua
  kartu (skill card, project card, featured post).

### 3.9 Project & Blog page

Keduanya mengikuti anatomi Home: backdrop → nav instance → judul halaman (56/40 Bold,
`color/ink`) → konten → footer (`caption/footer`), di mobile pakai sisi 20 margin dan
judul 40.

- **Project** — grid kartu 320×320 (desktop 3 kolom, gap 32, x=208; mobile 350 satu
  kolom, gap 30). Kartu: thumbnail 264×150 (rect `#64748B14` + hairline), judul
  20/18 Bold, deskripsi 14/13 Regular `color/muted`, tag 12 Medium `color/primary`.
  Semua kartu bind `Radius/card`, shadow `Shadow/Card`, stroke beam.
- **Blog** — featured card 1024×260 (kicker `FEATURED · tanggal · X MIN` 12 Medium
  `color/primary`, judul 28 Bold, excerpt 15 Regular), lalu baris post 1024×72
  (judul 16 Medium + meta `tanggal · X min` 13 `color/muted`, gap antar baris 16).
- Frame Dark adalah duplikat frame Light dengan `variable.setMode` `Dark` — nominal
  dan struktur identik.

### 3.10 Halaman Design System (page 2)

Frame 1440 (vertical auto layout, padding 80, gap 64, fill `#ECF1F4`): Header, Colors
(grid swatch 4 kolom × 3, satu grid Light + satu duplikat yang dipasang mode `Dark`),
Typography (16 baris contoh style), Radius (4 contoh box), Spacing (6 bar amber),
Elevation (kartu contoh), Components (instance Nav Desktop, Button, Toggle, Socials,
Skill Card). Semua contoh di page ini ter-bind ke variable, jadi ikut berubah saat
mode ganti.

---

## 4. Aturan pakai

1. Warna hanya dari tabel §1.1. Jangan menambah hex baru di komponen.
2. Radius kartu selalu `24`; semua elemen interaktif berbentuk pill (`999`).
3. Shadow hanya `shadow/card` — satu nilai untuk nav, hero, dan skill card.
4. Jarak memakai kelipatan 4 dari §1.3. Jarak antar skill card `16`, padding dalam `32`.
5. Satu nav item aktif. Item aktif memakai gradient, bukan warna solid.
6. Teks nama satu-satunya elemen bergradient teks; sisanya warna solid.
7. Breakpoint mengikuti CSS: 768px (nav pindah atas, skill 3 kolom), 1024px (container
   1024), 1280px tidak dipakai. Frame FigCraft hanya mewakili dua titik: 1440 dan 390.

---

## 5. Status di file FigCraft

### Sudah dibuat

- **Variables** — 3 collection, 22 variable:
  - `Color` (12, 2 mode Light/Dark): bg, card, ink, muted, primary, border, toggle-track,
    on-primary, shadow, gradient-nav-start, gradient-name-start, gradient-end.
  - `Radius` (4): card 24, pill 999, avatar-desktop 144, avatar-mobile 88.
  - `Space` (6): 1=4, 2=8, 3=12, 4=16, 6=24, 8=32.
- **Styles** — 19:
  - 16 text style (`display/*`, `body/*`, `heading/card`, `label/*`, `caption/*`).
  - 2 paint style gradient (`Gradient/Nav Active`, `Gradient/Name`); tiap stop di-bind
    ke variable warna.
  - 1 effect style (`Shadow/Card`); warnanya di-bind ke `Color/shadow`.
- **Components** — 18, semuanya master di frame Home:
  - `Nav / Desktop`, `Nav / Mobile`
  - `Hero Card / Desktop`, `Hero Card / Mobile`
  - `Hero Copy / Desktop`, `Hero Copy / Mobile`
  - `Skill Card / Design|Code|Growth Desktop|Mobile` (6)
  - `Button / Say Hi Desktop|Mobile`
  - `Theme Toggle / Desktop|Mobile`
  - `Socials / Desktop`, `Socials / Mobile`
- **Binding** — 45 fill solid, 22 stroke, 10 corner radius, dan 14 gap sudah memakai
  variable. Tidak ada warna/radius/gap hardcoded yang tersisa di frame Home.
- **Theme toggle & mode Dark** — collection `Color` punya 2 mode (Light/Dark), nilai dark
  lihat §1.1. Frame Dark (Home/Project/Blog, desktop + mobile) adalah duplikat frame
  light yang dipasang `variable.setMode Dark`. Semua tombol habis, radius, dan warna
  beam kartu ikut berubah otomatis.
- **Ikon sosial** — sudah ikon brand Simple Icons (GitHub, CodePen, X, Facebook,
  Instagram, LinkedIn), 28×28, fill `color/primary`, lihat §2.7.
- **Backdrop & beam** — glow radial, grid pattern tile, dan stroke kartu beam amber,
  lihat §3.8.
- **Halaman Project & Blog** — desktop + mobile, light + dark (§3.9).
- **Halaman Design System** — page 2 di file FigCraft, menampilkan token, style, dan
  komponen yang di-bind (§3.10).
- **Instance** — Nav, Button, Toggle, Socials, dan Skill Card sudah punya instance di
  halaman Design System. Master tetap di frame Home.

### Belum

- **State**: hover, focus, pressed, disabled, dan toggle knob posisi dark belum digambar.
- **Halaman About**: belum dibuat.
- **Thumbnail project/blog**: masih placeholder abu-abu; belum diisi gambar.
- **Breakpoint antara**: belum ada frame tablet (768–1023) padahal CSS mengubah layout di
  sana.
- **DESIGN.md**: bagian dark mode di CSS (`html.theme-dark`) masih berisi nilai dari
  desain awal Astro — cocok dengan §1.1 tapi belum ada penjelasan beam/grid di sana.

Kalau salah satu di atas dikerjakan, perbarui dokumen ini di bagian yang sama — jangan
buat dokumen token kedua.
