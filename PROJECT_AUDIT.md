# PROJECT_AUDIT.md

# Sylntra Website — Initial Project Audit

**Date:** 2026-06-29
**Auditor:** Claude Code (Lead Frontend Architect)
**Scope:** Full read-only audit of the project as committed at v1.0.0
**Status:** Awaiting approval before any implementation begins

---

## 1. Executive Summary

The Sylntra website is a well-conceived, design-led marketing site in active early
development. The content strategy, copy quality, and visual design system are
genuinely strong — the brand positioning is clear, the section architecture follows
the approved Problem → Solution → Trust → CTA narrative, and the design system is
coherent and documented.

The project is currently a **prototype-grade codebase** using a browser-compiled,
CDN-loaded stack (React development builds + Babel Standalone). This is appropriate
for this stage of design iteration but carries significant performance and production
readiness risks that must be addressed before any public launch.

Two classes of issues require attention:

**Content gaps** — placeholder images on every page, fake client names in the Logo
Strip, a non-functional contact form, social links pointing nowhere, and missing
Trust content.

**Technical debt** — browser-side Babel transpilation, React development builds,
duplicated inline components across pages, missing accessibility attributes, and
absent SEO infrastructure (Open Graph, structured data, favicon).

The project has the strongest possible foundation: a well-documented engineering
constitution, a coherent design system, clean component architecture in the shared
library, and deliberately incremental workflow rules.

**Recommended starting point: Hero Section Refinement (Milestone 2, first item).**
Replacing the placeholder image with the founder portrait and tightening the hero
layout will unlock the most trust value for the least effort, and sets a visual
benchmark for all subsequent page work.

---

## 2. Architecture Review

### 2.1 Technology Stack

| Layer | Current | Assessment |
|---|---|---|
| Framework | React 18.3.1 (via CDN) | Appropriate — but development build only |
| Transpiler | Babel Standalone 7.29.0 (browser) | **Significant performance cost** |
| Styling | CSS custom properties (design tokens) | Excellent — clean, systematic |
| Design System | `_ds_bundle.js` (pre-built) | Good — tokens are well-structured |
| Components | JSX IIFE modules on `window.*` | Works, but creates global namespace pollution |
| Image handling | Custom `<image-slot>` Web Component | Well-built, design-tool aware |
| Routing | None — traditional multi-page HTML | Appropriate for this type of site |
| Build process | None | Must change before launch |

### 2.2 Page Architecture

Each page follows a consistent pattern:

```
HTML shell
  → Loads CDN scripts (React, ReactDOM, Babel, DS Bundle, image-slot.js)
  → Loads shared.jsx (SiteHeader, SiteFooter, ChatOrb, Reveal, Glyph, etc.)
  → Loads page-specific JSX (home1.jsx + home2.jsx, about.jsx, etc.)
  → Inline App component mounts to #root
```

This is clear and maintainable at the current scale. The risk is that every page
makes ~6 network requests for scripts before anything renders.

### 2.3 Global State & Communication

All modules communicate through `window.*` globals (`window.SS`, `window.HOME`,
`window.ABOUTPAGE`, etc.). This works in the current single-page-per-HTML model
but would become fragile if the project grew to share state across sections.

### 2.4 Design System Integration

The design system is correctly loaded and the token architecture (colors, typography,
spacing, radius) is excellent. The `styles.css` entry point delegates cleanly to
token files. Site-level styles in `lib/site.css` build strictly on top of tokens
with no overrides — this discipline is very good.

**Notable gap:** The Design System `readme.md` describes a voice positioned as
"AI Native Cloud / builder-to-builder." This is a provenance artifact from the
original DS authoring context. The actual implementation correctly re-voices for
Sylntra's business consulting audience. This is not a bug but should be noted.

---

## 3. Folder Structure Review

### 3.1 Current Structure

```
/
├── CLAUDE.md                  ✓ Engineering constitution
├── README.md                  ✓ Project overview
├── PROJECT_MEMORY.md          ✓ Long-term decisions
├── TODO.md                    ✓ Active roadmap
├── CHANGELOG.md               ✓ Milestone history
│
├── index.html                 ✓ Homepage shell
├── about.html                 ✓ About page shell
├── services.html              ✓ Services page shell
├── blog.html                  ✓ Blog page shell
├── contact.html               ✓ Contact page shell
│
├── home1.jsx                  ✓ Hero, LogoStrip, Pains, WhyFail, Approach, Services
├── home2.jsx                  ✓ Industries, Process, CaseStudies, Testimonials, Stats, WhyChoose, FAQ, FinalCTA
├── about.jsx                  ✓ All About sections
├── services.jsx               ✓ All Services sections
├── blog.jsx                   ✓ Blog Feed + FinalCTA
├── contact.jsx                ✓ Contact form + FAQs
│
├── lib/
│   ├── shared.jsx             ✓ Shared components (Header, Footer, Reveal, Glyph, etc.)
│   ├── site.css               ✓ Global layout & utility styles
│   ├── image-slot.js          ✓ Custom Web Component for image placeholders
│   └── tweaks-panel.jsx       ? Dev-only panel — should not ship to production
│
├── _ds/                       ✓ Design system (tokens + JS bundle)
├── uploads/                   ℹ Screenshots — reference material
├── scraps/                    ℹ Sketch/napkin files — working documents
└── .image-slots.state.json    ℹ Auto-generated by image-slot component
```

### 3.2 Structural Observations

- The flat file structure is appropriate for a 5-page static site.
- The `scraps/` and `uploads/` folders are working material, not production assets.
  They should be excluded from any future build/deploy pipeline.
- `tweaks-panel.jsx` is a developer tool for design iteration. It should be removed
  or feature-flagged before production launch.
- No `assets/`, `images/`, or `fonts/` folder yet — expected at this stage.

---

## 4. Component Reusability

### 4.1 Shared Library — `lib/shared.jsx`

**Well-structured.** The following components are correctly centralised:

| Component | Purpose | Quality |
|---|---|---|
| `SiteHeader` | Navigation + mobile drawer | Good — scroll-aware, mobile-responsive |
| `SiteFooter` | Footer grid + social + wordmark | Good — brand-appropriate |
| `ChatOrb` | Floating contact button | Minimal, correct |
| `Reveal` | Scroll-triggered fade/rise animation | Excellent — IO + fallback logic |
| `Counter` | Count-up animation | Good — respects `prefers-reduced-motion` |
| `ImageSlot` | Wrapper for `<image-slot>` | Correct thin wrapper |
| `Glyph` / `Icon` | SVG icon renderer | Good — inline, no external dependency |

### 4.2 Duplicated Inline Components

The following small components are **identically defined in every page file**:

```jsx
// Duplicated in: home1.jsx, home2.jsx, about.jsx, services.jsx, blog.jsx, contact.jsx
function Eyebrow({ children, onDark }) {
  return h('p', { className: `mono-eyebrow ${onDark ? 'on-dark' : ''}` }, children);
}
function Arrow() {
  return h(Glyph, { name: 'arrowRight', size: 18, sw: 1.8 });
}
```

This is the most pervasive duplication in the codebase. Both should be added to
`lib/shared.jsx` and exported once.

### 4.3 FAQ Accordion Duplication

The FAQ accordion interaction (open/close state, `max-height` animation) is
implemented twice:

- `home2.jsx` — FAQ section
- `contact.jsx` — MapAndFAQ section

Both implementations are nearly identical. This should be a single shared
`FAQItem` component in `lib/shared.jsx`.

---

## 5. Design System Consistency

### 5.1 Token Usage — Positive Findings

The project uses design tokens correctly in the overwhelming majority of cases:

- All typography uses `var(--font-display)` and `var(--font-mono)` as intended.
- All color references use `var(--color-*)` tokens.
- Spacing uses `var(--space-*)` tokens throughout `lib/site.css`.
- The `--gradient-brand` is applied consistently and never modified.
- Elevation is handled by hairlines and surface contrast — no rogue box shadows.
- The `--radius-sm` (4px) token is used correctly as the canonical radius.

### 5.2 Token Bypass — Issues Found

| Location | Issue | Severity |
|---|---|---|
| `home1.jsx` Hero | `paddingTop: 132` — raw pixel, not a token | Low |
| `home1.jsx` Hero atmosphere | `opacity: 0.28` — site.css overrides via `.atmo` class; this value may conflict | Low |
| `home1.jsx` LogoStrip | `color: '#bdbdc7'` — hardcoded hex close to `--color-body (#999)` | Low |
| `home2.jsx` Testimonials | `background: 'var(--color-surface-dark-soft)'` — correct but value differs from homepage WhyChoose for same pattern | Low |
| `contact.jsx` form fields | `fieldStyle` object uses `background: '#fff'` and `border: 'var(--border-hairline)'` — correct but inline | Low |
| Multiple sections | `color: '#9a9ab0'` — recurring hardcoded value not defined as a token | Medium |
| Multiple sections | `color: '#d3d3df'` — recurring hardcoded value for secondary dark text | Medium |
| Multiple sections | `color: '#eaeaf2'` — recurring hardcoded value | Medium |
| `shared.jsx` Footer | `color: '#7c7c92'` — hardcoded | Low |

**Key observation:** The values `#9a9ab0`, `#d3d3df`, `#eaeaf2` are secondary text
colors on dark surfaces. These should be defined as tokens (e.g.
`--color-on-dark-muted`, `--color-on-dark-secondary`) and referenced consistently.

### 5.3 Typographic Consistency

Typography is very consistent. One observation: the Hero `paddingTop: 132` is a
raw pixel value that appears to be calculated as `nav-height(72) + space(60)`. A
design token or CSS variable for `--header-height` would make this intent explicit
and maintainable.

---

## 6. Accessibility Audit

### 6.1 Positive Findings

- `<html lang="en">` is set on all pages.
- All decorative gradient blobs have `aria-hidden="true"`.
- All SVG icons have `aria-hidden="true"` (via the Icon component).
- The chat orb has an accessible `aria-label` via IconButton.
- `prefers-reduced-motion` is respected in CSS and the Counter component.
- Image slots have meaningful placeholder text for empty states.

### 6.2 Issues Found

| Issue | Location | Priority |
|---|---|---|
| **No skip-to-content link** | All pages | High |
| **`<nav>` lacks `aria-label`** | `shared.jsx` SiteHeader | High |
| **FAQ buttons missing `aria-expanded`** | `home2.jsx`, `contact.jsx` | High |
| **Mobile drawer lacks visible close button** — only the hamburger toggles it; no explicit "close" label when open | `shared.jsx` | Medium |
| **Heading hierarchy may skip levels** — pages open with an eyebrow `<p>` before `<h1>`. Check that `<h2>` doesn't appear before section `<h1>` | Multiple pages | Medium |
| **FAQ button text is the question** — no association to the answer panel. `aria-controls` pointing to the answer `<div>` would improve screen reader experience | `home2.jsx`, `contact.jsx` | Medium |
| **Social links all read "social"** — `aria-label="social"` is identical for all four icons; each should name the platform | `shared.jsx` footer | Medium |
| **Category filter buttons** in blog lack `aria-pressed` state | `blog.jsx` | Medium |
| **Pagination buttons** lack descriptive labels (just `<` / `>` icons, no text) | `blog.jsx` | Low |
| **Contact form fields lack `id`/`for` pairing** — `<label>` and `<input>` are wrapped in a div but have no explicit `for`/`id` relationship | `contact.jsx` | High |

---

## 7. Responsive Design Audit

### 7.1 Breakpoint System

The CSS uses a layered mobile breakpoint system:

| Breakpoint | Changes |
|---|---|
| `≤ 1024px` | Footer: 3-column |
| `≤ 960px` | Hero grid collapses, process row collapses |
| `≤ 900px` | Blog grid → 1-col, featured card → 1-col |
| `≤ 880px` | Nav hidden → hamburger, all grids → 1-col |
| `≤ 700px` | Service cols, contact form → 1-col |
| `≤ 560px` | Footer → 1-col, footer-bottom stacks |

### 7.2 Positive Findings

- `clamp()` is used throughout for fluid typography (`display-hero`, `lead`, etc.) — excellent.
- The `.hero-grid` and `.grid-collapse` classes correctly flatten at 960px.
- The footer has sensible breakpoints across 1024px, 880px, and 560px.
- The mobile drawer is correctly implemented with body overflow lock.

### 7.3 Issues Found

| Issue | Location | Priority |
|---|---|---|
| **Blog sidebar becomes orphaned on mobile** — `.blog-grid` collapses to `1fr` but the sidebar renders below all articles; no CSS hides or repositions it | `site.css`, `blog.jsx` | Medium |
| **`gutter-mobile` token defined (16px) but not applied** — container uses `gutter-desktop (32px)` at all viewports; no media query switches gutters | `site.css` | Medium |
| **Hero stat row may overflow on small mobile** — `flexWrap: 'wrap'` is set but three stat items at their minimum widths may crowd on 375px | `home1.jsx` | Low |
| **Process rows on mobile** — three process steps collapse to single-column, but the step number takes the same space as the content; line-height and visual rhythm may break | `home2.jsx`, `site.css` | Low |
| **Services page `svc-row`** — `.svc-row` is not in site.css; only `.svc-cols` is handled at ≤700px | `services.jsx`, `site.css` | Low |

---

## 8. Performance Review

### 8.1 Critical Performance Issues

**Babel Standalone (browser transpilation) — HIGH impact**

Every page load triggers in-browser JSX-to-JS transpilation. Babel Standalone is
~800KB minified. On a cold load, users wait for:

1. Babel to download and parse
2. Babel to transpile all `.jsx` files
3. React to render the component tree

This adds multiple seconds of JavaScript processing before first paint. This is
acceptable for design prototyping but is unsuitable for production.

**React Development Build — HIGH impact**

All pages load `react.development.js` and `react-dom.development.js`. These include
verbose error messages, prop-type warnings, and `__DEV__` branches. The development
builds are approximately 3× larger than production builds and include runtime
overhead.

| Script | Dev Size (approx) | Prod Size (approx) |
|---|---|---|
| React 18 | ~300KB | ~11KB (gzip) |
| ReactDOM 18 | ~1.1MB | ~42KB (gzip) |
| Babel Standalone | ~800KB | N/A — replaced by build step |

**Total estimated CDN overhead:** ~2.2MB of JavaScript on each page load before
any application code runs.

### 8.2 Other Performance Observations

| Observation | Priority |
|---|---|
| All images are placeholders — no real images to optimize yet | N/A currently |
| CSS is split cleanly (DS tokens + site.css) — minimal overhead | ✓ Good |
| No unnecessary JavaScript dependencies beyond React + Babel | ✓ Good |
| Scroll reveal animations use IntersectionObserver + fallback correctly | ✓ Good |
| Counter uses `requestAnimationFrame` correctly | ✓ Good |
| `tweaks-panel.jsx` adds a development-only script to every production page | Remove before launch |
| No lazy loading strategy for below-fold images | Low (no images yet) |

---

## 9. SEO Review

### 9.1 Meta Tags — Per Page

| Page | Title | Description | OG Tags | Favicon | Canonical |
|---|---|---|---|---|---|
| index.html | ✓ Good | ✓ Good | ✗ Missing | ✗ Missing | ✗ Missing |
| about.html | ✓ Good | ✓ Good | ✗ Missing | ✗ Missing | ✗ Missing |
| services.html | ✓ Good | ✓ Good | ✗ Missing | ✗ Missing | ✗ Missing |
| blog.html | Not checked | Not checked | ✗ Missing | ✗ Missing | ✗ Missing |
| contact.html | Not checked | Not checked | ✗ Missing | ✗ Missing | ✗ Missing |

**All pages are missing Open Graph meta tags entirely.** This means sharing a link
to Sylntra on LinkedIn, Twitter, or WhatsApp will render with no image, no
structured title, and no description card.

### 9.2 Structured Data

No JSON-LD structured data exists. For a business systems consulting studio, the
most impactful additions would be:

- `LocalBusiness` schema on the Contact page (name, address, hours, telephone)
- `Service` schema on the Services page
- `Article` schema on blog posts (when real content is published)

### 9.3 Other SEO Issues

| Issue | Priority |
|---|---|
| No `<link rel="icon">` / favicon on any page | High — browsers show blank tab icon |
| No `<link rel="canonical">` tags | Medium |
| Blog articles all link to `href="#"` — no real article URLs | Expected at this stage |
| Logo Strip uses fictional company names (Northwind, Meridian, etc.) — if published, this presents a trust risk | Content — resolve before launch |
| Founder name in blog bylines: "Miliind Shinde" (double-i) — inconsistent with git config "Milind Shinde" | Medium — potential trust issue |

---

## 10. Code Quality Review

### 10.1 Strengths

- **Design token discipline** in CSS is consistently high — almost no arbitrary values.
- **Reveal animation system** in `shared.jsx` is well-engineered with IntersectionObserver,
  above-fold detection, fallback timeout, and `_lock()` cleanup.
- **Counter animation** correctly respects `prefers-reduced-motion`.
- **IIFE module pattern** (`(function() { ... })()`  + `window.*` exports) is clean
  and avoids global scope leakage except for intentional exports.
- **Integrity attributes** on CDN scripts (`integrity="sha384-..."`) — excellent
  security practice.
- **Image-slot Web Component** is thorough — handles drag/drop, reframe, serialize/
  deserialize, ResizeObserver, pointer capture, and error states correctly.

### 10.2 Code Issues

| Issue | File | Priority |
|---|---|---|
| `Eyebrow` component defined 6 times | home1.jsx, home2.jsx, about.jsx, services.jsx, blog.jsx, contact.jsx | Medium |
| `Arrow` component defined 6 times | Same files | Medium |
| `FAQItem` component implemented twice with different internal names | home2.jsx (inline), contact.jsx (FAQItem) | Medium |
| `paddingTop: 132` — raw pixel value | home1.jsx Hero, services.jsx Hero, about.jsx Hero, contact.jsx Hero | Low |
| `color: '#9a9ab0'` — recurring hardcoded hex | home2.jsx, about.jsx, shared.jsx, blog.jsx | Medium |
| `color: '#d3d3df'` — recurring hardcoded hex | Multiple | Medium |
| Contact form `onSubmit` does not submit to a backend — just sets `sent = true` | contact.jsx | High (before launch) |
| Newsletter form in blog sidebar has no `onSubmit` handler at all | blog.jsx | High (before launch) |
| Social links: `href="#"` on all four social buttons | shared.jsx | High (before launch) |
| Privacy / Terms links: `href="#"` | shared.jsx | Medium (before launch) |
| Map placeholder is a CSS grid pattern, not an embedded map | contact.jsx | Medium |
| `TWEAK_DEFAULTS` object is only on index.html — other pages don't have a TweaksPanel | index.html | Low — intentional |

---

## 11. Technical Debt

Listed in order of impact:

| # | Debt Item | Impact | When to Address |
|---|---|---|---|
| 1 | **Browser-side Babel transpilation** — unsuitable for production | Performance | Before launch |
| 2 | **React development builds** — 3× bundle size, no optimisation | Performance | Before launch |
| 3 | **Duplicated Eyebrow / Arrow / FAQItem components** | Maintainability | Next few sessions |
| 4 | **No form backend** — contact form simulates submission | Functionality | Before launch |
| 5 | **Font substitutes** — Inter/JetBrains Mono instead of licensed faces | Brand fidelity | When fonts are licensed |
| 6 | **Hardcoded secondary dark surface colours** — `#9a9ab0`, `#d3d3df`, `#eaeaf2` | DS consistency | Medium term |
| 7 | **tweaks-panel.jsx** in production HTML | Performance | Before launch |
| 8 | **Mobile container gutters** — desktop 32px gutters used at all breakpoints | UX on small screens | Medium term |
| 9 | **No `--header-height` token** — `paddingTop: 132` is calculated, not named | Maintainability | Low priority |

---

## 12. Bugs and Potential Issues

| # | Bug | Location | Severity |
|---|---|---|---|
| 1 | **Founder name typo** — "Miliind Shinde" (double-i) appears in `about.jsx` (Founder section) and `contact.jsx` (Options section) and `blog.jsx` (article bylines). Git config shows "Milind Shinde". | about.jsx:92, contact.jsx:23, blog.jsx:10,14,19 | Medium — visible to clients |
| 2 | **Contact form submits to nowhere** — `onSubmit` prevents default and shows a success state, but no data is sent. A real client submitting the form will receive no acknowledgement and no message will be received. | contact.jsx:65 | Critical (before launch) |
| 3 | **Newsletter input has no submit handler** — the Subscribe button has no `onClick` and the surrounding form has no `onSubmit`. | blog.jsx Sidebar | High (before launch) |
| 4 | **FAQ `aria-expanded` missing** — screen readers cannot determine whether accordion items are open or closed. | home2.jsx:179, contact.jsx:123 | High |
| 5 | **Contact form labels not associated with inputs** — `<label>` elements render the label text but have no `for` attribute, and `<input>` elements have no matching `id`. Screen readers may not announce the field name. | contact.jsx:37–41 | High |
| 6 | **`svc-row` class missing from site.css** — `services.jsx` applies `className: 'svc-row'` to the service layout wrapper but this class has no CSS rules. The flex layout works from inline styles, but the class name implies CSS rules were intended. | site.css | Low |
| 7 | **Blog sidebar on mobile** — when `.blog-grid` collapses to one column at 900px, the sidebar renders as a long block below all articles with no visual distinction from the main feed. | blog.jsx, site.css | Medium |
| 8 | **Testimonial author avatars** are colored squares — not photos, not initials. If published, these will appear unfinished. | home2.jsx:107 | Medium — content |
| 9 | **Case study images all empty** — every case study card shows an empty `ImageSlot` placeholder | home2.jsx, blog.jsx | Medium — content |

---

## 13. Priority Recommendations

### HIGH Priority

These items block launch or create visible trust problems.

| Recommendation | Why It Matters | Expected Impact | Effort |
|---|---|---|---|
| **H1 — Add Open Graph meta tags to all pages** | Sharing links on LinkedIn, WhatsApp, Twitter produces an empty preview card — this directly damages credibility when sharing with prospective clients. | High trust impact for referral sharing | 1–2 hours |
| **H2 — Wire the contact form to a real backend** (e.g. Formspree, Resend, or email webhook) | The form currently discards every submission. Any real enquiry is lost. | Directly enables lead capture | 2–4 hours |
| **H3 — Fix label/input association in contact form** | Form inputs are inaccessible to screen readers and assistive technology. May also affect browser autofill. | Accessibility & UX | 30 minutes |
| **H4 — Add `aria-expanded` to FAQ accordions** | Screen readers cannot report the state of open/closed FAQ items. | Accessibility compliance | 30 minutes |
| **H5 — Add `aria-label` to the `<nav>` element** | Keyboard and screen reader users cannot identify the navigation landmark. | Accessibility compliance | 5 minutes |
| **H6 — Add a skip-to-content link** | Keyboard users must tab through the entire navigation on every page before reaching content. | Accessibility compliance | 30 minutes |
| **H7 — Add a favicon** | Browsers display a blank tab. Every page load shows a missing icon. | Basic brand presence | 30 minutes |
| **H8 — Fix the founder name typo** ("Miliind" → "Milind") | Visible to every client who reads the About page, contact section, or blog. Undermines credibility. | Trust | 5 minutes |

---

### MEDIUM Priority

These items significantly improve quality and should be addressed in the next two milestones.

| Recommendation | Why It Matters | Expected Impact | Effort |
|---|---|---|---|
| **M1 — Move `Eyebrow` and `Arrow` to `lib/shared.jsx`** | Eliminates 12 duplicate function definitions. A future change to the Eyebrow style must be made in 6 places without this fix. | Maintainability | 1 hour |
| **M2 — Merge duplicate FAQItem implementations** | Two separate accordion implementations will diverge over time. | Maintainability | 30 minutes |
| **M3 — Add design tokens for dark surface text** (`#9a9ab0`, `#d3d3df`, `#eaeaf2`) | Hardcoded hex values used 20+ times across 5 files. Any DS colour shift requires a find/replace. | DS consistency | 1 hour |
| **M4 — Apply `gutter-mobile` (16px) at small viewports** | Desktop 32px gutters feel cramped on 375px screens. The token is already defined and just needs to be applied. | Mobile UX | 30 minutes |
| **M5 — Replace fictional logo strip names** with real client names or remove the section | Publishing "Northwind, Meridian, Oakbridge" as trusted clients is a credibility risk | Trust | Content decision |
| **M6 — Fix social link `aria-label` values** — each should name the platform | "social" repeated four times is meaningless to screen readers. | Accessibility | 15 minutes |
| **M7 — Add blog sidebar responsive behaviour** | On mobile the sidebar renders as a long block below all content — newsletter subscription box and popular reads are buried. | Mobile UX | 1–2 hours |

---

### LOW Priority

These items are polish-level improvements appropriate for later milestones.

| Recommendation | Why It Matters | Expected Impact | Effort |
|---|---|---|---|
| **L1 — Switch React to production build before launch** | 3× reduction in bundle size, improved runtime performance | Performance | 30 minutes |
| **L2 — Replace Babel Standalone with a build step before launch** | Eliminates in-browser transpilation — faster first paint | Performance | 2–4 hours |
| **L3 — Add `<link rel="canonical">` tags** | Prevents duplicate content issues as the site grows | SEO | 1 hour |
| **L4 — Add structured data (JSON-LD)** | Enables rich results in Google Search | SEO | 2–4 hours |
| **L5 — Define a `--header-height` CSS variable** | Makes the 72px nav height maintainable; `paddingTop: 132` is a derived value | Maintainability | 15 minutes |
| **L6 — Remove `tweaks-panel.jsx` from production pages** or gate behind `?debug=true` | Reduces page weight and removes a visible design tool from production visitors | Performance + professionalism | 30 minutes |
| **L7 — Add `aria-controls` and answer panel `id` to FAQ buttons** | Completes the ARIA accordion pattern | Accessibility | 30 minutes |
| **L8 — Add `aria-pressed` to blog category filter buttons** | Screen readers cannot announce the active filter state | Accessibility | 15 minutes |
| **L9 — Add pagination button labels** | "Previous page" / "Next page" is more descriptive than a bare arrow icon | Accessibility | 15 minutes |

---

## 14. Suggested Development Roadmap

Based on this audit, here is the recommended sequence to move from prototype to
production-ready.

```
Phase 1 — Content & Trust (Current Sprint)
─────────────────────────────────────────
▸ Replace hero placeholder with founder portrait (Milestone 2)
▸ Fix founder name typo (5 min — do now)
▸ Add favicon
▸ Add Open Graph meta tags to all pages
▸ Real social profile links in footer

Phase 2 — Accessibility Baseline (Milestone 2 continued)
─────────────────────────────────────────────────────────
▸ Skip-to-content link
▸ aria-label on <nav>
▸ aria-expanded on all FAQ accordions
▸ Contact form: label/input association
▸ Social buttons: per-platform aria-labels

Phase 3 — Component Cleanup
────────────────────────────
▸ Move Eyebrow + Arrow to lib/shared.jsx
▸ Merge FAQItem into lib/shared.jsx
▸ Add dark surface text tokens to DS
▸ Apply gutter-mobile at ≤ 880px

Phase 4 — Functional Completeness (Before any public sharing)
──────────────────────────────────────────────────────────────
▸ Wire contact form to a backend (Formspree recommended for simplicity)
▸ Wire newsletter subscription
▸ Real social links
▸ Decision on Logo Strip: real clients or remove
▸ Privacy / Terms pages (even minimal)

Phase 5 — Page Refinements (Milestones 2–6)
────────────────────────────────────────────
▸ Milestone 2 — Hero section
▸ Milestone 3 — Services page
▸ Milestone 4 — About page
▸ Milestone 5 — Blog
▸ Milestone 6 — Contact

Phase 6 — Pre-Launch Performance
──────────────────────────────────
▸ Switch to React production builds
▸ Introduce a build step (Vite recommended — zero config, fast)
▸ Structured data (JSON-LD)
▸ Canonical tags
▸ Image optimization pipeline
▸ Lighthouse audit + remediation
▸ Remove tweaks-panel from production
```

---

## Recommended Starting Point

**Begin with the Hero Section (Milestone 2, first item).**

Specifically:

1. **Replace the hero `ImageSlot` placeholder** with the actual founder portrait.
   This is the highest-trust single change on the entire site — it immediately
   differentiates Sylntra from a generic agency template and supports the
   "founder-led" brand principle from PROJECT_MEMORY.md.

2. **Fix the founder name typo** ("Miliind" → "Milind") as an immediate 5-minute
   companion fix — it costs nothing and prevents a visible trust error.

3. **Refine hero layout and CTA** once the real image is placed, since layout
   decisions around the image proportion will be clearer with real content.

This sequence delivers meaningful trust value immediately, creates a visual
benchmark for the rest of the pages, and advances the highest-priority item in
the TODO.md roadmap.

---

**Audit complete. No code was modified.**

Awaiting approval before any implementation begins.
