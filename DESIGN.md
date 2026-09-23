---
name: Homo Goetia: Infernal Temple
description: A privacy-first client-side gay occult hub featuring sigil generators, soundscape mixers, and complete Solomonic keys.
colors:
  primary: "#d61c38"
  primary-dim: "#9e1026"
  accent-gold: "#c8963e"
  accent-purple: "#8014b3"
  accent-cyan: "#00b4d8"
  bg-base: "#050405"
  bg-surface: "#100b10"
  bg-surface-elevated: "#1a111a"
  text-primary: "#f8f5f8"
  text-secondary: "#e2dbe2"
  text-muted: "#9e8b9a"
  border-color: "#2b1c28"
typography:
  display:
    fontFamily: "Cinzel Decorative, Georgia, serif"
    fontWeight: 700
    letterSpacing: "0.06em"
  headline:
    fontFamily: "Cinzel, Georgia, serif"
    fontWeight: 700
    letterSpacing: "0.06em"
  body:
    fontFamily: "Outfit, system-ui, -apple-system, sans-serif"
    fontWeight: 400
    lineHeight: "1.6"
  label:
    fontFamily: "Outfit, system-ui, -apple-system, sans-serif"
    fontWeight: 600
    letterSpacing: "0.1em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.85rem"
  md: "1.25rem"
  lg: "1.5rem"
  xl: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg-base}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-dim}"
  nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.md}"
    padding: "0.65rem 0.85rem"
  nav-item-active:
    backgroundColor: "{colors.bg-surface-elevated}"
    textColor: "{colors.primary}"
  card-surface:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
---

# Design System: Homo Goetia: Infernal Temple

## Overview

**Creative North Star: "The Infernal Obsidian Sanctum"**

Homo Goetia embodies an authoritative, monolithic red-and-black masculine aesthetic. The interface evokes a subterranean obsidian temple forged from dark iron, lit by intense infernal blood-red flame and burnished alchemical brass.

The visual system emphasizes strength, ceremonial structure, and sharp precision. Dark glassmorphism and deep radial backdrop gradients frame ritual tools, complete Goetic spirit seals, and Solomonic pentacles.

**Key Characteristics:**
- Deep obsidian void backdrop (`#050405`) with dark iron surfaces (`#100b10`).
- Bold infernal blood-red flame (`#d61c38`), dark crimson (`#9e1026`), and burnished brass/gold (`#c8963e`) accents.
- Gothic display typography (`Cinzel Decorative`, `Cinzel`) paired with crisp geometric body type (`Outfit`).
- Sharp iron-framed cards with blood-red glow borders (`rgba(214, 28, 56, 0.35)`).
- Restrained, state-explaining motion using GPU-accelerated CSS `transform` and `opacity` with full `prefers-reduced-motion` support.

## Colors

### Primary
- **Infernal Blood Red** (`#d61c38`): The primary flame accent. Used for active navigation states, primary triggers, key seals, and high-priority glows.
- **Deep Crimson** (`#9e1026`): Hover state and border shadow variant for primary actions.

### Secondary
- **Burnished Brass / Gold** (`#c8963e`): Used for Solomonic pentacles, celestial astrolabe rings, and sacred geometry highlights.

### Tertiary
- **Abyssal Violet** (`#8014b3`): Used for daemonological energy glows and dark alchemy states.
- **Nocturne Cyan** (`#00b4d8`): Used for acoustic nodes and cosmic clock indicators.

### Neutral
- **Obsidian Void** (`#050405`): Base viewport background.
- **Monolithic Iron** (`#100b10`): Sidebar navigation and card container background.
- **Elevated Chamber** (`#1a111a`): Hover states, modal overlays, and elevated card background.
- **Sacred Text** (`#f8f5f8`): Primary high-contrast body text.
- **Ashen Text** (`#9e8b9a`): Muted labels, icons, and inactive navigation items.
- **Dark Iron Rim** (`#2b1c28`): Default structural border color.

### Named Rules
**The Blood Flame Rule.** Primary blood-red accent (`#d61c38`) is used on ≤15% of any screen surface. Its intense luminosity commands focus without overwhelming the dark obsidian atmosphere.

## Typography

**Display Font:** `Cinzel Decorative` (fallback: Georgia, serif)
**Headline Font:** `Cinzel` (fallback: Georgia, serif)
**Body Font:** `Outfit` (fallback: system-ui, sans-serif)

### Hierarchy
- **Display** (Bold 700, `clamp(2rem, 5vw, 3.5rem)`): Portal titles and hero headers.
- **Headline** (Bold 700, `1.5rem` – `2rem`): Section headers and tool titles.
- **Title** (Semi-bold 600, `1.1rem` – `1.3rem`): Card titles and modal headers.
- **Body** (Regular 400, `0.95rem` – `1rem`): Instructions and grimoire text.
- **Label** (Semi-bold 600, `0.75rem` – `0.85rem`, uppercase): Category headers and tab badges.

## Motion & Restrained Animation

Motion is strictly functional, clarifying state changes and spatial transitions without decorative bounce or perpetual loop lag.

- **Tab Transitions**: Fast `220ms` slide and fade (`tabSlideUp`) using `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Button Feedback**: `150ms` tactile press (`transform: translateY(-2px)`, scale active `0.98`).
- **Focus Glows**: `200ms` high-contrast outline and blood-red glow transition.
- **Reduced Motion**: Disables all non-essential keyframe animations and layout transitions when `@media (prefers-reduced-motion: reduce)` is active.

## Shapes & Components

- **Corner Radius**: `4px` (sm), `8px` (md), `12px` (lg), `9999px` (full).
- **Borders**: 1.5px solid `#2b1c28` with dynamic `rgba(214, 28, 56, 0.35)` blood glow on hover and focus.
- **Glassmorphism**: `backdrop-filter: blur(14px)` on sidebar and floating control panels.

## Do's and Don'ts

### Do:
- **Do** maintain deep obsidian void background levels (`#050405` / `#100b10`) for a powerful masculine ceremonial atmosphere.
- **Do** use `Cinzel Decorative` and `Cinzel` for all major headings.
- **Do** use GPU-accelerated CSS `transform` and `opacity` for animations.
- **Do** include all 72 Goetic spirits and 44 Solomonic Pentacles with full SVG seals.

### Don't:
- **Don't** use pinkish, pastel, or washed-out red tones; stick to bold blood-red (`#d61c38`) and obsidian (`#050405`).
- **Don't** use decorative perpetual bounce or continuous spinning animations that cause visual fatigue or hardware lag.
- **Don't** compromise 100% client-side privacy or offline PWA resilience.
