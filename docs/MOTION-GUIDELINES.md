# CodeBrise Motion Guidelines & Interaction Architecture

## 1. Core Philosophy: Purposeful Motion

Motion in CodeBrise is not superficial decoration. It communicates physical weight, editorial pacing, focus, and state transitions. It reflects the studio identity: **fluid, unhurried, and tactile**.

---

## 2. Technology Division: CSS vs Motion for React

| Interaction Type | Tool | Rationale |
|---|---|---|
| Color, border, & background shifts | **CSS Transitions** | Fast, GPU accelerated, zero JS execution overhead |
| Simple micro-hovers & link states | **CSS Transitions** | Immediate pointer response |
| Entrance reveals on scroll | **Motion (`ScrollReveal`)** | Viewport detection with staggered sequence control |
| Shared layout pill indicators | **Motion (`layoutId`)** | Physics-based spring interpolation between elements |
| Filtered card grid transitions | **Motion (`AnimatePresence`)** | Smooth repositioning without jarring visual jumps |
| Mobile navigation sheet | **Motion** | Fluid drawer spring animation with backdrop blur |

---

## 3. Package & Import Standards

Always use the modern `motion` package (never deprecated `framer-motion`):

```tsx
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
```

### Motion Easing & Physics Constants

```typescript
// Shared spring configuration for active indicator pills
export const springPill = {
  type: "spring",
  stiffness: 450,
  damping: 35,
};

// Fluid editorial curve for reveals
export const easeEditorial = [0.22, 1, 0.36, 1];
```

---

## 4. Accessibility & Reduced Motion

We treat `prefers-reduced-motion` as a first-class requirement across the studio:
- **Hook-based disabling**: Interactive components query `useReducedMotion()` from `motion/react`.
- **Motion prop fallback**: If reduced motion is requested, pass `undefined` or instant opacity transitions (`duration: 0`) rather than transform offsets.
- **CSS fallback**: In `globals.css`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```

---

## 5. Performance Best Practices

1. **Client Islands Only**: Never convert entire page trees into `"use client"`. Keep pages as React Server Components, isolating Motion inside lightweight leaf components (e.g. `ScrollReveal.tsx`, `ProjectGrid.tsx`, `MobileNavigation.tsx`).
2. **GPU Optimization**: Animate only `transform` (`x`, `y`, `scale`) and `opacity`. Never animate `width`, `height`, `top`, or `left`.
3. **Scroll Jitter Prevention**: Use `viewport={{ once: true, margin: "-40px" }}` so elements do not re-trigger animations as the user scrolls up and down.

