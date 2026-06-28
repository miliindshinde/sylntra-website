# Sylntra Design System

The brand language for **Sylntra** — an AI cloud-infrastructure platform (model
inference, GPU clusters, fine-tuning: "the AI Native Cloud"). This system
captures the visual posture that signals *infrastructure for builders, not
another grey enterprise SaaS*: a near-black hero, long ribbons of white
technical content, two decisive typefaces, and a single recurring piece of brand
chrome — the three-color gradient ribbon.

> **Provenance / naming note.** This system was authored from a written brand
> specification for **Sylntra**. The spec's visual DNA is modeled on a Together
> AI–style marketing surface; everything here is rebranded to *Sylntra* and the
> wordmark is `sylntra.ai`. No proprietary third-party assets are included.

> **Sources given:** a written brand spec only — no codebase, Figma, or slide
> deck was attached. If a codebase or Figma exists, re-attach it via the Import
> menu and this system can be reconciled against the real source.

---

## The system in one breath

- **Dual-surface, no in-between greys.** Pages alternate `canvas-dark` (#010120)
  and `canvas` (#ffffff) bands. Surface contrast carries elevation — not shadow.
- **Two faces, one joke.** A geometric display sans (substitute: **Inter**) sets
  every sentence-case headline and paragraph; an uppercase technical mono
  (substitute: **JetBrains Mono**) labels everything — eyebrows, buttons, table
  headers. Serious enough for a monospace label; modern enough not to put the
  headline in it.
- **The gradient is the brand.** A fixed three-stop ribbon
  (orange → magenta → periwinkle) is the *entire* decorative system. Hero scale
  only; never a swatch, never reordered, never a fourth stop.
- **One black pill.** `#000000` carries every primary CTA — one per viewport.
- **4px is canonical.** Buttons, cards, badges, rows. `radius-full` is reserved
  for the single floating chat orb.
- **The wordmark sign-off.** A giant `sylntra.ai` tinted to the hairline closes
  every long page like a faint stencil.

---

## CONTENT FUNDAMENTALS

**Voice.** Confident, technical, builder-to-builder. The platform addresses
developers directly — "Build what's next", "Pay only for what you use",
"Start building". Second person ("you", "your data"); the company refers to
itself by name ("build on Sylntra") rather than "we" in headlines.

**Casing is the tonal system.**
- **Headlines & body: sentence case, display sans.** "Build what's next on the
  AI Native Cloud." Never all-caps, never in the mono face.
- **Labels: UPPERCASE, mono.** Every eyebrow, button, table header, and tag —
  `PRICING`, `INFERENCE`, `GA-DEC '25`, `GET STARTED NOW`. This is where all the
  all-caps energy lives.

**Tone examples.**
- Eyebrow → headline → lead, in that order: `RESEARCH` ·
  "Grounded in cutting-edge research" · "State-of-the-art throughput…".
- CTAs are imperative and short: "Start building", "Contact sales",
  "Read the docs", "Get started now".
- Technical specificity is a feature: real model names, context windows, and
  per-million-token prices appear in copy — the precision *is* the marketing.

**Emoji:** none. The mono face and the gradient do the expressive work. No
decorative emoji, no exclamation-heavy hype.

**Numbers & stats:** used sparingly and concretely (`200+`, `11x`, `99.9%`),
always paired with a mono caption label. Avoid invented "data slop".

---

## VISUAL FOUNDATIONS

**Color.** Two surfaces (`canvas` white, `canvas-dark` #010120) plus one soft
tone (`hairline` #ebebeb) that marks table headers, toggle rails, and dividers.
Text is ink (#000) on light, white on dark, with a single muted body grey
(#999) doing double duty for captions *and* mono eyebrows. The accent palette is
deliberately tiny: the three gradient legs (orange #fc4c02, magenta #ef2cc1,
periwinkle #bdbbff) plus a mint (#c8f6f9). Mint, periwinkle, and a sibling peach
tint fill the pastel stat tiles; the gradient itself is never reduced to a flat
fill. **Do not introduce a fifth accent.**

**Type.** See CONTENT FUNDAMENTALS for the casing rule. Mechanically: display
sans runs weights 400/500 only (never 700+), with negative tracking that scales
with size (−1.92px at 64px down to −0.16px at 16px) for a poured-on-the-page
feel. The mono runs weight 500 with small *positive* tracking and is always
uppercase. Reversing the tracking polarity (positive on display, negative on
mono) is wrong.

**Backgrounds.** Flat color only — no photographic hero, no repeating texture,
no noise. The single atmospheric effect is the hero's layered translucent
gradient ribbon. A dark code-editor surface inside the white product band acts
as a deliberate one-step polarity flip.

**Spacing & layout.** 4px base unit. Marketing bands breathe at 80px top/bottom;
pricing tables tighten to 12px row rhythm to read like a sheet. ~1280px max
container, centered, 32px desktop gutters. Grids: research 4-up, testimonials &
stats 3-up, articles 2-up — all collapsing to 1-up on mobile.

**Borders & elevation.** Hairlines do the work: 1px `#ebebeb` on light cards,
1px `#26263a` on dark cards. **No drop shadows on light-surface cards.** The
*only* soft shadow in the system — `rgba(1,1,32,0.1) 0 4px 10px` — belongs to the
floating chat orb.

**Corner radii.** 4px (`radius-sm`) is canonical for buttons, cards, badges,
rows. 3.25px (`radius-xs`) for tight pricing sub-tabs/outline buttons; 8px
(`radius-md`) for feature-tab pills; 9999px (`radius-full`) for the chat orb
only. Full-bleed bands and the wordmark banner are square (0).

**Cards.** Flat. White (or navy on dark bands) with a hairline border, 4px
radius, 24px interior padding (32px for stat tiles). Never floating, never
shadowed (except the orb).

**Animation & states.** Restrained. Hover = subtle opacity drop (~0.85) on
buttons; inputs focus to a solid ink border. No bounces, no parallax, no
infinite loops. Transitions are short (~120ms ease) and limited to
opacity/background/border.

**Imagery vibe.** Customer logos are grayscale vector in a wrapping flex row.
Testimonial portraits are hard-edge 1:1 square crops (no avatar pills). Article
thumbnails are 16:9 with a 4px radius on the *image only*. (This kit ships
placeholder portraits — swap in real photography.)

---

## ICONOGRAPHY

The brand is **icon-light**: the gradient and the mono labels carry expression,
so iconography is minimal and functional.

- **No bundled icon font or sprite** ships in the source spec. For UI glyphs use
  a thin, 2px-stroke outline set — **[Lucide](https://lucide.dev)** is the
  recommended CDN match (clean geometric outlines that sit well beside the
  display sans). *Flagged substitution:* no brand-native icon set was provided.
- **Emoji / unicode as icons:** never. The chat-orb glyph and any inline arrows
  use Lucide-style SVG (`→` text arrows are acceptable inside mono labels, as in
  pricing copy).
- **Brand mark:** `assets/sylntra-mark.svg` — a 4px-radius tile filled with the
  brand gradient. Pair it with the lowercase `sylntra` wordmark (display sans,
  −0.6px tracking). On dark and light surfaces alike the mark is unchanged.
- When building kits/slides, **copy real icons in** (Lucide SVGs) rather than
  hand-rolling glyphs.

---

## INDEX — what's in this folder

**Foundations**
- `styles.css` — global entry point (import list only; consumers link this).
- `tokens/colors.css` · `typography.css` · `spacing.css` · `radius.css` ·
  `fonts.css` — CSS custom properties + the webfont imports.
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing,
  Brand) shown in the Design System tab.

**Components** (`window.SylntraDesignSystem_*` namespace — run
`check_design_system` for the exact suffix)
- `components/core/` — `Button`, `IconButton`, `Badge`, `Eyebrow`, `Card`,
  `StatCard`.
- `components/forms/` — `Input`.
- `components/data/` — `Tabs`, `ToggleGroup`, `DataTable`.
- `components/navigation/` — `NavBar`, `Footer`, `WordmarkBanner`.
  Each directory has a `.prompt.md`, `.d.ts` contracts, and a `*.card.html`
  demo.

**UI kit**
- `ui_kits/website/` — interactive recreation of the Sylntra marketing homepage
  (hero, platform/feature tabs, research band, pricing table, testimonials,
  footer, wordmark). See its `README.md`.

**Brand**
- `assets/sylntra-mark.svg` — gradient brand mark.
- `SKILL.md` — Agent-Skill manifest for downloadable use.

---

## CAVEATS / KNOWN SUBSTITUTIONS

- **Fonts are substituted.** The brand faces (`The Future`, `PP Neue Montreal
  Mono`) are proprietary. This system loads **Inter** and **JetBrains Mono** from
  Google Fonts as the documented stand-ins. Replace `tokens/fonts.css` with the
  licensed faces when available.
- **No brand-native icon set or photography** was provided — Lucide is suggested
  for icons and testimonial portraits are placeholders.
- **No codebase/Figma** was attached, so components reflect the written spec, not
  a real implementation. Re-attach source material to reconcile.
