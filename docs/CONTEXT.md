# Session Context: Project Card Spotlight Consistency Fix (Iteration 7)

## Current State

- User feedback: Curated Projects Card 1 was smooth, but Cards 2, 3, and 4 felt laggy/buggy when mouse hovered over them.
- Root cause: Staggered entrance delays (`delay: idx * 180ms`) set via inline `style={{ transitionDelay }}` were inherited by hover transitions and pseudo-element opacity transitions (`::before` / `::after`), delaying Card 2 by 180ms, Card 3 by 360ms, and Card 4 by 540ms!
- STRICTLY NO COMMIT OR PUSH ("jangan commit dulu, nanti gua cobain").
- Zero-code policy outside `/docs` for orchestrator.

## Verification Evidence (Iteration 7)
- ESLint clean (0 errors, 0 warnings).
- Vite build succeeds cleanly (1787 modules transformed, dist bundle generated).
- Fixed Spotlight Lag on Cards 2-4: Root cause was inline `style={{ transitionDelay: idx * 180ms }}` being inherited by hover transitions and `.spotlight-card::before` opacity fade-in, causing up to 540ms delay on card 4.
- Added `transition-delay: 0s !important` on hover across all cards, pseudo-elements, and children in `src/index.css`.
- Reset `transitionDelay` to `0ms` post-reveal in `ProjectsSection.jsx`.
- Added `onMouseEnter={handleMouseMove}` across Projects, Skills, and Metrics cards for instantaneous coordinate initialization.
- Removed dead `projRefs` code from `ProjectsSection.jsx`.
- Working tree uncommitted per instruction. Zero git commits or pushes made.
