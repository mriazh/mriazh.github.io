# Technical Design: Project Card Spotlight Consistency Fix (Iteration 7)

## 1. Zero-Delay Hover Architecture

### 1.1 Root Cause & Solution
Inline `style={{ transitionDelay: `${idx * 180}ms` }}` was being inherited by hover transitions:
- Card 1: 0ms delay
- Card 2: 180ms delay
- Card 3: 360ms delay
- Card 4: 540ms delay

Because `.spotlight-card::before` and `.spotlight-card::after` had `transition: opacity 0.35s ease`, the hover opacity fade-in was delayed by up to 540ms on cards 2-4!

### 1.2 CSS Fix in `src/index.css`
```css
/* Zero-delay hover override for all spotlight cards */
.spotlight-card:hover,
.spotlight-card:hover *,
.spotlight-card:hover::before,
.spotlight-card:hover::after,
.project-card:hover,
.metric-card:hover,
.skill-card:hover {
  transition-delay: 0s !important;
}
```

### 1.3 React Cleanup in `src/components/ProjectsSection.jsx`
1. Remove dead `projRefs` declaration, `useEffect`, and callback refs.
2. Add `onMouseEnter={handleMouseMove}` so coordinates initialize the instant the cursor enters the card boundary.
3. Use `--stagger-delay` CSS variable or apply transition-delay only when `!listVis`.

### 1.4 React Alignment in `SkillsSection.jsx` & `MetricsProof.jsx`
Apply the same `onMouseEnter={handleMouseMove}` to guarantee instant cursor lock across all cards in all sections.





## 4. Interactive Terminal History

- `InteractiveTerminal.jsx`:
  - Add `history` array state and `historyIndex`.
  - Pressing `ArrowUp` navigates backward through previously executed commands.
  - Pressing `ArrowDown` navigates forward through command history.
