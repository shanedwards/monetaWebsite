# moneta.md — Operating Manual for monetacloud.com

> **You are working on a LIVE production website with no build step.** A mistake ships
> the moment it's pushed. Read this entire file before doing anything. When in doubt,
> STOP and ask — do not guess, do not "improve" unprompted, do not refactor.

---

## 0. Prime Directives (read first, obey always)

1. **Do only what you are explicitly told to do.** Do not touch, "clean up," refactor,
   reorganize, rename, or "improve" any code, color, layout, copy, or file that the user
   did not name in the current instruction. Unrequested changes are failures even if they
   are technically better.
2. **Ask before acting when anything is ambiguous.** If the target element, page, wording,
   value, or scope is unclear, ask a specific question. Never fill the gap with an assumption.
3. **Preserve the existing design exactly.** Match the current fonts, sizes, spacing, colors,
   radii, shadows, and layout precisely unless told to change them. New work must look native
   to the site — indistinguishable from what's already there.
4. **This is production. There is no build step and no safety net.** A typo in JSX does not
   fail a build — it silently breaks the page in the browser (blank screen or missing section).
   Every change must be verified visually before it is considered done.
5. **Frontend only.** Never modify, optimize, or reason about backend infrastructure.
6. **Report honestly.** If something is broken, uncertain, or skipped, say so plainly. Never
   claim a change works if you haven't confirmed it.

---

## 1. Role & Operating Mode

**Role:** You assist with frontend web development and UI/UX design for monetacloud.com.

* **Guided Autonomy:** Follow explicit instructions closely. You may make *small, sensible*
  adjustments strictly in service of the requested change (e.g., matching an existing spacing
  token). You may NOT expand scope beyond the request. The user reviews and finalizes.
* **Creative Mode — only when explicitly invoked.** If (and only if) the user says "be
  creative" / "make it your own" / similar, step outside the box and deliver innovative,
  polished, professional work. Absent that phrase, stay conservative and match the site.
* **Required Skills:** Invoke the `ui-ux-pro-max` and `frontend-design` skills before writing
  any UI/design code, every session, no exceptions.
* **Scope Restriction:** Strictly frontend design. No backend.

---

## 2. Tech Stack & Architecture (current — pre-rewrite)

* **Core:** React via **in-browser Babel transpilation** (`type="text/babel"` script tags).
  **No build step. No Vite. No `npm run dev`. No bundler.** Do NOT reference or create
  `vite.config`, `package.json` scripts, or any build pipeline. Do NOT convert the project
  to a build-based setup unless explicitly instructed (a rewrite is planned separately).
* **Styling:** Tailwind CSS via **Play CDN**, plus vanilla CSS in `index.html`'s `<style>`.
* **Deployment:** Vercel. Production publishes from the **`main`** branch. Pushing to `main`
  triggers an automatic redeploy; the site is live within ~30–60s. Other branches produce
  Vercel *preview* URLs only — they do NOT update the live site.
* **Routing:** **Hash routing** (`#/`, `#/finops-services`, `#/why-moneta`, etc.). URLs
  currently contain a `#`. Do not attempt to remove the hash or switch to History-API /
  clean URLs unless explicitly instructed (this is part of the planned rewrite, not a
  casual change — it requires server rewrites and a per-page prerender strategy).
* **Local Environment:** Do not launch a local server, install Playwright, or use Puppeteer
  unless explicitly instructed. Local preview runs at `http://127.0.0.1:5500/#/`.

---

## 3. Key Source Files

* `index.html` — Document shell, Tailwind config (`tailwind.config`), all global CSS/tokens,
  fonts, and CDN script tags. **The design system lives here.**
* `src/app.jsx` — App entry: hash router (`ROUTES`), page titles, modal state.
* `src/pages.jsx` — All page-level components and layouts.
* `src/components.jsx` — Shared UI components (nav/`Header`, `Footer`, `FinalCTA`, `Eyebrow`, etc.).
* `src/diagrams.jsx` — All diagram and data-visualization components (e.g., `WhyMonetaDiagram`).

**Registered routes** (in `src/app.jsx`): `#/` (Home), `#/finops-services`,
`#/finops-for-cloud-resellers`, `#/why-moneta`, `#/privacy-policy`. Do not invent routes.

---

## 4. Brand Color Palette — SOURCE OF TRUTH

> **Authoritative. Every hex is verified against the actual source and normalized to
> UPPERCASE.** Do NOT introduce a color that is not listed here without explicit instruction.
> When told to add/change a color, prefer an existing token; if a new color is unavoidable,
> call it out and update this table in the same change. **Never re-roll a slightly different
> shade of an existing color** (e.g., don't add `#3C83F7` when `#3B82F6` exists). Match hex
> casing to UPPERCASE to stay consistent with the codebase.

### 4.1 Canonical Design Tokens (`index.html` → `tailwind.config`)
Prefer the Tailwind class (`bg-bg-primary`, `text-ink-secondary`, `text-accent-blue`,
`border-line`, …) over a raw hex wherever a token exists.

**Backgrounds** (`bg-*`)
| Token | Class | Hex | Usage |
|---|---|---|---|
| Primary | `bg-bg-primary` | `#060B18` | Page background; global `html,body` background |
| Secondary | `bg-bg-secondary` | `#0A1428` | Raised/alternate dark sections |
| Tertiary | `bg-bg-tertiary` | `#0F1E38` | Deepest raised surface |
| Card | `bg-bg-card` | `#0B1428` | Card fills, button-border padding-box |

**Ink / text** (`ink-*`)
| Token | Class | Hex | Usage |
|---|---|---|---|
| Primary | `text-ink-primary` | `#FFFFFF` | Headings, primary text |
| Secondary | `text-ink-secondary` | `#94A3B8` | Body / muted text |
| Muted | `text-ink-muted` | `#4A5568` | De-emphasized / captions |

**Accents** (`accent-*`) — the brand spectrum
| Token | Class | Hex | Usage |
|---|---|---|---|
| Blue (primary) | `text-accent-blue` | `#3B82F6` | Billing, primary flows, first steps, primary buttons |
| Indigo | `text-accent-indigo` | `#5B7BFF` | Tertiary steps, connector dots, eyebrow text, borders |
| Purple | `text-accent-purple` | `#A855F7` | Margin, Savings, final outcomes, gradient end |
| Violet | `text-accent-violet` | `#8B5CF6` | Secondary purple accent (rare) |
| Cyan | `text-accent-cyan` | `#22D3EE` | Pricing, Discounts, secondary flows |
| Orange | `text-accent-orange` | `#F59E0B` | Warnings / attention accents |
| Success | `text-accent-success` | `#34D399` | Success / positive states, "after" values |

**Lines / borders** (`line-*`)
| Token | Class | Hex | Usage |
|---|---|---|---|
| Default | `border-line` | `#1E2D45` | Standard card / divider border |
| Soft | `border-line-soft` | `#131E30` | Subtle divider |
| Hover | — | `#243650` | Card border on hover |

### 4.2 Signature Gradients (`index.html` `<style>`)
| Name | Definition | Where |
|---|---|---|
| `.grad-text` | `linear-gradient(92deg, #3B82F6 0%, #6366F1 38%, #A855F7 100%)` | 3-stop heading text |
| `.grad-text-bp` | `linear-gradient(92deg, #3B82F6 0%, #A855F7 100%)` | 2-stop blue→purple text |
| `.grad-line` / `.eyebrow-rule` | `linear-gradient(90deg, #3B82F6 0%, #A855F7 100%)` | Underline rules |
| `.btn-grad-border` | `linear-gradient(92deg, #3B82F6, #A855F7)` border-box over `#0B1428` | Gradient-border buttons |
| `.btn-solid-blue` | `linear-gradient(180deg, #3B82F6 0%, #2563EB 100%)` | Solid primary button |
| Diagram 4-stop | `#3B82F6 → #22D3EE → #5B7BFF → #A855F7` | Full flow spectrum across diagrams |

**Note:** `#6366F1` (indigo-500) is the **gradient midpoint** only — it is NOT the
`#5B7BFF` accent-indigo token; keep them distinct. `#2563EB` (blue-700) is only the
solid-button gradient end.

### 4.3 Diagram / Deep-Surface Fills (`src/diagrams.jsx`, `src/pages.jsx`)
Darker panel fills (not in the token config). These are distinct values — do not merge them.
| Hex | Usage |
|---|---|
| `#0F2040` | Common diagram/panel background block |
| `#0B0F1F` | Deep diagram panel fill |
| `#090C18` | Deepest surface (gradient starts) |
| `#0D1025` / `#0D1020` | Diagram inner surfaces (genuinely different — do not unify) |
| `#0B0D16` | Platform panel fill |
| `#070D18` / `#08101E` | Deep gradient ends / cyan-panel base |
| `#111827` / `#0F1729` | Slate-900 panels (mock UI, comparison cards) |
| `#1A2236` | Live-metric stat card fill (pages.jsx) |
| `#1F2D45` | Live-metric stat card border (pages.jsx) |
| `#0F2E1A` | Dark-green success-pill background (pages.jsx, paired with green-500/27% border) |
| `#1E2235` | Border on `#0B0D16` platform panel ("Today" card, pages.jsx) |
| `#0D1424` | Comparison-card panel fill (pages.jsx) |
| `#0B1A2E` → `#0D2040` | Diagram panel gradient (WhyMoneta-style card, pages.jsx) |
| `#162035` → `#111828` | Diagram panel gradient, cyan-bordered (diagrams.jsx) |
| `#0D1425` | Circular stat-node fill inside diagram (diagrams.jsx) |
| `#1A1D2E` → `#0F1220` | Icon-badge circle gradient fill (pages.jsx) |

### 4.4 Light-Section Palette (`.light-section`, light mock UIs in `src/pages.jsx`)
Standard Tailwind **slate** values. Use ONLY inside `.light-section` / light mock-UI contexts.
| Hex | Slate name | Usage |
|---|---|---|
| `#FFFFFF` / `#F8FAFC` / `#F1F5F9` | white / slate-50 / slate-100 | Light backgrounds, cards |
| `#E2E8F0` / `#EDF1F7` / `#DDE4EF` | slate-200 | Light borders |
| `#CBD5E1` | slate-300 | Light muted border |
| `#94A3B8` | slate-400 | Muted text (shared with ink-secondary) |
| `#64748B` | slate-500 | Light-section muted text |
| `#475569` | slate-600 | Light secondary text |
| `#334155` | slate-700 | Light body text |
| `#0F172A` | slate-900 | Light-section headings/body text |

### 4.5 Semantic / Status Colors (mock UIs, comparison rows)
| Hex | Meaning |
|---|---|
| `#22C55E` / `#16A34A` / `#34D399` | Green — success / positive / "good" |
| `#EAB308` / `#F59E0B` / `#F97316` / `#EA580C` | Amber/orange — warning / attention |
| `#EF4444` / `#DC2626` | Red — error / "bad" / negative |
| `#38BDF8` / `#2DD4BF` | Sky/teal — mock-UI cloud accents (AWS/Azure tiles) |
| `#FF9900` | AWS brand orange (logo tiles only) |
| `#F472B6` | Pink — extra diagram-series accent (diagrams.jsx card-flow icons) |
| `#A78BFA` | Light violet — extra diagram-series accent (diagrams.jsx card-flow icons), distinct from `#8B5CF6` accent-violet token |
| `#2887AE` | Muted teal marker accent (diagrams.jsx cursor/pointer glyph) |
| `#78350F` / `#92400E` / `#B45309` | Amber-900/800/700 — dark amber gradient stops for "before" connector states (pages.jsx SVG gradients) |
| `#1D4ED8` | Blue-700 — dark blue gradient stop for connector lines (pages.jsx SVG gradients), distinct from `#2563EB` btn-solid-blue end |
| `#1E3248` / `#253A52` | Slate connector gradient stops ("neutral/before" state, pages.jsx `wm2_slate` gradient) |
| `#1E3A52` | Shared dark-slate connector gradient stop, used as the "before" endpoint blended into blue/amber/green connector gradients (pages.jsx) |

### 4.6 Muted / Secondary Diagram Text
Grayish text colors used inside dark diagram panels and mock UIs, distinct from the `ink-*` tokens because they're scoped to specific diagram components rather than global text.
| Hex | Usage |
|---|---|
| `#B8C4D4` | Body copy inside "Why moneta" comparison panels (pages.jsx) |
| `#B0BAC9` | Stat value color fallback in diagram stat rows (diagrams.jsx) |
| `#7A8FA8` | Sub-label / secondary caption text inside diagram cards (diagrams.jsx) |
| `#CBD5E1` | Inactive/unselected label text in diagram card carousel (diagrams.jsx), slate-300 |

### 4.7 Common Alpha Overlays (keep consistent — do not invent new alphas)
* Indigo glow / dot grid: `rgba(91,123,255,0.35)`, `rgba(91,123,255,0.4)`, `rgba(91,123,255,0.18)`
* Cyan glow: `rgba(34,211,238,0.45)` → `rgba(34,211,238,0.55)`
* Blue/purple ambient glows: `rgba(59,130,246,0.18)`, `rgba(168,85,247,0.18)`
* Green success-pill border: `rgba(34,197,94,0.27)`
* Hairline strokes on dark: `rgba(255,255,255,0.03)` → `rgba(255,255,255,0.08)`
* Shadows: `rgba(0,0,0,0.45)` → `rgba(0,0,0,0.6)`

---

## 5. Typography & Layout System

* **Fonts:** `Inter` (sans — body, UI) and `Source Serif 4` (serif — all headings
  `h1`–`h4` and `.text-hero`/`.text-h1/2/3`). Do not introduce other typefaces.
* **Heading scale (defined in `index.html`):** `.text-hero`, `.text-h1`, `.text-h2`,
  `.text-h3`. Use these classes; do not hand-roll heading font sizes.
* **Eyebrows:** `.eyebrow` (uppercase, letter-spaced, indigo) + `.eyebrow-rule` (gradient
  underline). Use the existing pattern for section kickers.
* **Container:** `.container-x` (`max-width: 1400px`, responsive inline padding). Wrap page
  sections in this rather than reinventing widths.
* **Cards / tiles:** `.card`, `.icon-tile`, hover helpers (`.hover-lift`, `.hover-lift-subtle`,
  `.hover-border-emphasis`). Reuse these instead of new bespoke card styles.
* **Match existing spacing rhythm.** Before adding padding/margins, look at sibling sections
  and mirror their values. Do not introduce arbitrary spacing that breaks the vertical rhythm.
* **Responsiveness:** The site is responsive. Any change must hold up from mobile to wide
  desktop. Never let a section scroll horizontally on small screens.

---

## 6. Established Code Patterns

### 6.1 SVG Connector Alignment
For diagrams that draw connector lines between DOM elements, use React refs +
`useLayoutEffect` + `getBoundingClientRect()` to measure actual rendered positions, then
render an absolutely-positioned SVG overlay spanning the full wrapper. Do NOT use
`preserveAspectRatio="none"` or percentage-based coordinates — they misalign on layout shift.
```jsx
const wrapperRef = React.useRef(null);
// measure refs in useLayoutEffect via getBoundingClientRect()
// setConn({ x, y, ... }) with pixel values relative to wrapperRef
// render: <svg style={{ position:"absolute", top:0, left:0, width:"100%", height:conn.h }}>