# CodeBrise Design System — Production Specification

## 1. Visual Premise & Identity

CodeBrise is an independent software studio with a distinct editorial voice and tactile digital craft. The brand premise is captured in the studio motto: **Build. Experiment. Release.**

The design system blends four core characteristics:
- **Editorial Clarity**: Generous typographic proportions, restrained `Instrument Serif` italic accents, clear concise copy, and deliberate whitespace.
- **Material Warmth**: Paper-like light surfaces (`#F1EFE9`), elevated panels (`#FAF9F6`), fine borders (`#D8D5CD`), subtle depth, and tactile card geometry.
- **Technical Precision**: Monospaced metadata (`var(--font-mono)`), uppercase tracking, structured badges, and clear hierarchy.
- **Fluid Breeze Motion**: Controlled gradients (violet `#8057F5` → blue `#536DFE` → cyan `#32C7D0`), slow spatial movement, and smooth spring layout transitions powered by Motion for React.

---

## 2. Brand Asset Integrity Rules

The official CodeBrise logo assets must remain strictly unmodified:
- **Logo Files**: Use supplied lockup assets directly from `/public/brand/` (`codebrise-lockup-light.png`, `codebrise-lockup-dark.png`, `mark-gradient-exact.svg`).
- **Prohibitions**:
  - Never redraw or approximate the logo via CSS or SVG paths.
  - Never alter the breeze strokes, stroke spacing, curves, or endpoints.
  - Never distort, stretch, skew, or rotate the official logo.
  - The decorative 3D breeze artwork on the hero is an independent graphic element and must never replace or represent the official studio mark.

---

## 3. Color Tokens & Palette

### Brand Identity Colors
| Token | CSS Variable / Tailwind | Hex | Primary Usage |
|---|---|---|---|
| Violet | `--cb-violet` / `text-cb-violet` | `#8057F5` | Primary identity accent, active indicators |
| Blue | `--cb-blue` / `text-[#536DFE]` | `#536DFE` | Secondary brand accent, hyperlinks |
| Cyan | `--cb-cyan` / `text-[#32C7D0]` | `#32C7D0` | Breeze highlight, active states, italic serif highlights |
| Mint | `--cb-mint` / `text-[#42D6B0]` | `#42D6B0` | Positive status signals and live pings |

### Editorial Surfaces & Typography
| Token | CSS Variable / Tailwind | Hex | Primary Usage |
|---|---|---|---|
| Paper Canvas | `--cb-paper` / `bg-cb-paper` | `#F1EFE9` | Default page background |
| Paper Raised | `--cb-paper-raised` / `bg-cb-paper-raised` | `#FAF9F6` | Card backgrounds, elevated surfaces |
| Paper Muted | `--cb-paper-muted` / `bg-cb-paper-muted` | `#E8E5DD` | Secondary containers, inset wells |
| Ink | `--cb-ink` / `text-cb-ink` | `#11151D` | Primary headings, buttons, body copy |
| Ink Raised | `--cb-ink-raised` | `#202633` | Hover states on dark elements |
| Muted Ink | `--cb-text-muted` / `text-cb-text-muted` | `#69717D` | Secondary body copy and subtitles |
| Subtle Border | `--cb-border` / `border-cb-border` | `#D8D5CD` | Card borders, dividing hairlines |
| Night | `--cb-night` | `#0B1020` | Dark hero sections and dark card previews |
| Night Raised | `--cb-night-raised` | `#151D2B` | Raised dark preview panels |

---

## 4. Typography System

The typography system pairs two Google Fonts loaded via Next.js `next/font/google`:
1. **Sans**: `DM Sans` (`var(--font-dm-sans)`) — for headings, navigation, labels, and body text.
2. **Display Serif**: `Instrument Serif` (`var(--font-instrument-serif)`) — used strictly for italic editorial voice and selected accent phrases.
3. **Monospace**: System Monospace (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`) — for tags, timestamps, metrics, and technical labels.

### Typographic Scales & Rules
- **Hero Display**: `clamp(2.75rem, 6vw, 4.75rem)` with tight tracking (`-0.035em`) and line-height `1.05`.
- **Section Headings**: `clamp(2rem, 4vw, 3rem)` with line-height `1.1`.
- **Eyebrows**: Monospaced `text-[10px]` to `text-xs`, uppercase, `tracking-[0.14em]`, medium font-weight.
- **Rule**: Avoid using Instrument Serif on entire body paragraphs; reserve it for single italic words or short phrases to maintain editorial elegance.

---

## 5. Spacing, Borders & Radii

### Border Radii
- `--cb-radius-sm`: `10px` (inputs, badges, small buttons)
- `--cb-radius-md`: `16px` (utility cards, filter containers, content wells)
- `--cb-radius-lg`: `24px` (project cards, section containers)
- `--cb-radius-xl`: `32px` (hero modules, large banners)
- `--cb-radius-full`: `9999px` (pills, badges, primary CTA buttons)

### Layout Shell
- Global content container: `.site-shell` (`max-w-[1240px]` with fluid responsive padding `clamp(1rem, 4vw, 3rem)`).
