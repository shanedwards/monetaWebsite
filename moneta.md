# moneta.md — Operating Manual for monetacloud.com

> **You are working on a LIVE production Next.js site.** There is a real build step
> (`npm run build`) and it will catch some errors — but Vercel deploys automatically on
> push to `main`, so a mistake still reaches production fast, and plenty of runtime issues
> (bad data, broken UI, a wrong env var) won't be caught by the build at all. Read this
> entire file before doing anything. When in doubt, STOP and ask — do not guess, do not
> "improve" unprompted, do not refactor.

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
4. **This is production.** A real build (`npm run build`) catches syntax errors and some
   type issues, but plenty of mistakes still ship silently — bad runtime data, a broken
   layout, a misconfigured env var. Every change must be verified visually (and, for
   `app/api/*`, functionally) before it is considered done.
5. **Frontend-first.** The one deliberate exception is `app/api/contact/route.js` (Resend
   email sending for the demo form) — that's real, in-scope backend. Don't extend the
   backend surface beyond what's explicitly asked; treat any new backend work as requiring
   the same explicit-instruction bar as everything else in Directive 1.
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
* **Scope Restriction:** Primarily frontend design. The `app/api/contact` route is the one
  standing exception (see §0.5, §2) — don't treat it as license to add other backend work
  without being asked.

---

## 2. Tech Stack & Architecture

> If you encounter old context (memory, notes, habit) describing `index.html`, in-browser
> Babel, Play CDN Tailwind, or `#/` hash routes — that was a prior version of this site.
> The rewrite already happened; trust this file and the filesystem over old context.

* **Core:** **Next.js 16** (App Router), React 19, plain **JavaScript** (`.jsx`, no
  TypeScript). Real build step: `npm run build` (production), `npm run dev` (local dev
  server), `npm run start` (serve a production build), `npm run lint` (ESLint).
* **This Next.js version has breaking changes vs. training data.** Per `AGENTS.md`, read
  the relevant guide in `node_modules/next/dist/docs/` before writing framework-adjacent
  code (routing, metadata, `next/og`, etc.) rather than assuming older-Next.js conventions.
* **Styling:** Tailwind CSS v4, imported normally via `@import "tailwindcss"` in
  `app/globals.css`, with design tokens defined in an `@theme` block in that same file
  (not a `tailwind.config.js`, and not the CDN). Plus plain CSS classes (`.card`,
  `.grad-text-bp`, `.eyebrow`, etc.) in `app/globals.css`'s body — **the design system
  still lives in one global CSS file, just a different one than before.**
* **Deployment:** Vercel. Production publishes from the **`main`** branch. Pushing to
  `main` triggers an automatic redeploy; the site is live within ~30–60s. Other branches
  produce Vercel *preview* URLs only — they do NOT update the live site.
* **Routing:** Real **Next.js file-based routing** under `app/` — clean URLs
  (`/finops-services`, `/why-moneta`, no hash). `components/HashRedirectShim.jsx` exists
  solely to 301-style-redirect any stale `#/...` links from the old site to the new clean
  routes; it is legacy-compatibility glue, not the routing system itself.
* **Backend:** Not purely frontend-only anymore — `app/api/contact/route.js` is a real
  server-side API route (Resend email sending for the "Book a Demo" form). Treat this as
  the one legitimate backend surface; it's still a small, deliberate exception, not an
  invitation to add general backend infrastructure.
* **Local Environment:** `npm run dev` starts a real Next.js dev server at
  `http://localhost:3000`. Installing a temporary dev dependency (e.g. Playwright) for a
  one-off verification task, then fully `npm uninstall`-ing it afterward, is an
  established, acceptable pattern here — confirm `package.json`/`package-lock.json` are
  clean afterward.

---

## 3. Key Source Files

* `app/layout.jsx` — Root layout: fonts (`Inter`, `Source Serif 4`), global `<html>/<body>`
  shell, site-wide `metadata` (title template, Open Graph, Twitter card), JSON-LD.
* `app/globals.css` — **The design system lives here.** Tailwind import, `@theme` design
  tokens (colors, fonts), and all global CSS classes (`.card`, `.grad-text-bp`, `.eyebrow`,
  `.container-x`, etc.).
* `app/page.jsx` — Homepage.
* `app/opengraph-image.png` — Static Open Graph / social-share image (real screenshot of
  the homepage hero), picked up automatically by Next.js's `opengraph-image` file
  convention — no manual `<meta>` tag or code needed.
* `app/finops-services/page.jsx`, `app/finops-for-cloud-resellers/page.jsx`,
  `app/why-moneta/page.jsx`, `app/privacy-policy/page.jsx` — route-level pages, each with
  their own `metadata` export.
* `app/api/contact/route.js` — Server-side POST endpoint for the "Book a Demo" form.
  Validates input, sends via Resend, recipients hardcoded server-side (never trust the
  request body for `to`/`cc`/`bcc`).
* `app/robots.js`, `app/sitemap.js` — Generated `robots.txt` / `sitemap.xml`.
* `components/Header.jsx`, `components/Footer.jsx` — Global nav/footer.
* `components/DemoModal.jsx`, `components/DemoModalProvider.jsx`, `components/DemoCtaButton.jsx`
  — The "Book a Demo" modal system (form UI, open/close state provider, trigger button).
  Submits to `app/api/contact/route.js`.
* `components/Faq.jsx`, `components/HashRedirectShim.jsx` — Misc shared components; the
  latter is legacy-URL redirect glue, see §2.
* `components/sections/` — Page-section-level components (`HeroSplit.jsx`,
  `MarginIntelligenceCard.jsx`, `FinOpsServiceTabs.jsx`, `ResultsGraphic.jsx`,
  `CustomerPortfolioCard.jsx`).
* `components/diagrams/` — Diagram / data-visualization components (`FinOpsDiagram.jsx`,
  `OperatingSystemDiagram.jsx`, `ReconciliationLoop.jsx`, `TrustBar.jsx`, `shared.jsx`).
* `components/ui/` — Small reusable primitives (`Button.jsx`, `Eyebrow.jsx`, `FormField.jsx`,
  `SectionShell.jsx`, `ArrowRight.jsx`, `FinalCTA.jsx`, `Logo.jsx`, `MonetaMark.jsx`,
  `ReviewCTA.jsx`).
* `lib/constants.js`, `lib/seo.js` — Shared constants (e.g. FAQ content) and SEO helpers
  (`SITE_URL`, `SITE_NAME`, JSON-LD builders).

**Registered routes** (folders under `app/`): `/` (Home), `/finops-services`,
`/finops-for-cloud-resellers`, `/why-moneta`, `/privacy-policy`. Do not invent routes.

---

## 4. Brand Color Palette — SOURCE OF TRUTH

> **Every hex below was re-verified with a fresh grep against the live `components/`,
> `app/`, and `lib/` source (case-insensitive) — not carried over from an old version of
> this file.** A handful of colors from the prior audit are gone because the components
> using them no longer exist; those have been removed rather than left as dead entries.
>
> Do NOT introduce a color that is not listed here without explicit instruction. When told
> to add/change a color, prefer an existing token; if a new color is unavoidable, call it
> out and update this table in the same change. **Never re-roll a slightly different shade
> of an existing color** (e.g., don't add `#3C83F7` when `#3B82F6` exists). Match hex
> casing to UPPERCASE to stay consistent with the codebase.

### 4.1 Canonical Design Tokens (`app/globals.css` → `@theme` block)
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

### 4.2 Signature Gradients (`app/globals.css` body)
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

### 4.3 Diagram / Deep-Surface Fills
Darker panel fills (not in the token config). These are distinct values — do not merge them.
| Hex | Usage | File |
|---|---|---|
| `#0F2040` | Common diagram/panel background block | `components/Faq.jsx`, `app/page.jsx`, `app/why-moneta/page.jsx`, `app/finops-services/page.jsx`, `app/finops-for-cloud-resellers/page.jsx` |
| `#0B0D16` / `#1E2235` / `#1A1D2E` / `#0F1220` | Platform panel fill, border, and icon-badge gradient | `components/diagrams/FinOpsDiagram.jsx` |
| `#070D18` | Deep gradient end | `app/page.jsx` |
| `#08101E` | Deep gradient end / card base | `app/globals.css` (`.card` gradient) |
| `#111827` | Slate-900 panel | `components/sections/MarginIntelligenceCard.jsx` |
| `#0F1729` | Slate-900 panel | `app/finops-services/page.jsx` |
| `#1A2236` / `#1F2D45` / `#0F2E1A` | Live-metric stat card fill / border / success-pill background | `components/sections/MarginIntelligenceCard.jsx` |
| `#0D1424` | Comparison-card panel fill | `components/sections/CustomerPortfolioCard.jsx` |
| `#0B1A2E` / `#0D2040` | Diagram panel gradient | `app/why-moneta/page.jsx` |
| `#162035` / `#111828` / `#0D1425` / `#B0BAC9` / `#7A8FA8` | Diagram panel gradient, stat-node fill, muted stat/caption text | `components/diagrams/ReconciliationLoop.jsx` |

### 4.4 Light-Section Palette (`.light-section`, light mock UIs)
Standard Tailwind **slate** values. Use ONLY inside `.light-section` / light mock-UI contexts.
| Hex | Slate name | Usage |
|---|---|---|
| `#FFFFFF` / `#F8FAFC` / `#F1F5F9` | white / slate-50 / slate-100 | Light backgrounds, cards |
| `#E2E8F0` / `#DDE4EF` | slate-200 | Light borders |
| `#CBD5E1` | slate-300 | Light muted border |
| `#94A3B8` | slate-400 | Muted text (shared with ink-secondary) |
| `#64748B` | slate-500 | Light-section muted text |
| `#475569` | slate-600 | Light secondary text |
| `#334155` | slate-700 | Light body text |
| `#0F172A` | slate-900 | Light-section headings/body text |

### 4.5 Semantic / Status Colors (mock UIs, comparison rows)
| Hex | Meaning | File |
|---|---|---|
| `#22C55E` / `#16A34A` | Green — success / positive / "good" | `CustomerPortfolioCard.jsx`, `FinOpsServiceTabs.jsx`, `why-moneta/page.jsx` |
| `#EAB308` / `#F59E0B` / `#F97316` | Amber/orange — warning / attention | `lib/constants.js`, `globals.css`, `OperatingSystemDiagram.jsx` |
| `#EA580C` / `#DC2626` | Amber/red variants | `MarginIntelligenceCard.jsx` |
| `#EF4444` | Red — error / "bad" / negative | `CustomerPortfolioCard.jsx`, `finops-services/page.jsx`, `why-moneta/page.jsx` |
| `#38BDF8` | Sky — mock-UI cloud accents | widely used across `sections/`, `diagrams/ReconciliationLoop.jsx`, `app/page.jsx` |
| `#2DD4BF` | Teal accent | `components/sections/ResultsGraphic.jsx` |
| `#FF9900` | AWS brand orange (logo tiles only) | `components/diagrams/shared.jsx` |
| `#F472B6` / `#A78BFA` / `#2887AE` | Pink / light-violet / muted-teal diagram-series accents, distinct from `#8B5CF6` accent-violet token | `components/diagrams/ReconciliationLoop.jsx` |
| `#78350F` / `#92400E` / `#B45309` / `#1D4ED8` / `#1E3248` / `#253A52` / `#1E3A52` | Amber/blue/slate SVG connector-gradient stops (before/after states); `#1D4ED8` is distinct from `#2563EB` btn-solid-blue end | `app/why-moneta/page.jsx` |

### 4.6 Muted / Secondary Diagram Text
Grayish text colors used inside dark diagram panels and mock UIs, distinct from the `ink-*` tokens because they're scoped to specific diagram components rather than global text.
| Hex | Usage | File |
|---|---|---|
| `#B8C4D4` | Body copy inside "Why moneta" comparison panels | `app/why-moneta/page.jsx` |
| `#B0BAC9` | Stat value color fallback in diagram stat rows | `components/diagrams/ReconciliationLoop.jsx` |
| `#7A8FA8` | Sub-label / secondary caption text inside diagram cards | `components/diagrams/ReconciliationLoop.jsx` |

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
* **Heading scale (defined in `app/globals.css`):** `.text-hero`, `.text-h1`, `.text-h2`,
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
For diagrams that draw connector lines **between specific, independently-positioned DOM
elements** (e.g. linking two cards whose positions depend on responsive layout), use React
refs + `useLayoutEffect` + `getBoundingClientRect()` to measure actual rendered positions,
then render an absolutely-positioned SVG overlay spanning the full wrapper. Do NOT use
`preserveAspectRatio="none"` or percentage-based coordinates for *that* case — they
misalign on layout shift. (See `components/sections/CustomerPortfolioCard.jsx` for the
ref-measurement pattern in practice.)

**This does not mean `preserveAspectRatio="none"` is banned everywhere.** For simple
decorative connectors with a fixed internal geometry (e.g. a short dashed line between two
fixed points, as in `components/diagrams/ReconciliationLoop.jsx` and
`components/diagrams/FinOpsDiagram.jsx`), a `viewBox` + `preserveAspectRatio="none"` scaled
by the wrapper is fine and is the existing pattern — match whichever pattern the specific
diagram you're touching already uses rather than applying this rule out of context.
```jsx
const wrapperRef = React.useRef(null);
// measure refs in useLayoutEffect via getBoundingClientRect()
// setConn({ x, y, ... }) with pixel values relative to wrapperRef
// render: <svg style={{ position:"absolute", top:0, left:0, width:"100%", height:conn.h }}>