# Technical Design: Slower Cinematic Reveals, True Multi-Color Mouse Spotlight & Tech Arsenal Elevation (Iteration 5)

## 1. Mouse Spotlight Specificity Fix & Architecture

### 1.1 Root Cause Analysis of Non-Tracking Spotlight
Lines 718 (`.skill-card::before`), 755 (`.project-card::before`), and 1376 (`.metric-card::before`) in `src/index.css` had redundant pseudo-elements declared later in the stylesheet:
```css
.skill-card::before, .project-card::before, .metric-card::before {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.35), rgba(6, 182, 212, 0.15), transparent 60%);
  z-index: -1;
}
```
Because they appeared later in the stylesheet with identical specificity, they overrode `.spotlight-card::before` with a static linear gradient and shoved it behind the opaque card background (`z-index: -1`), completely disabling dynamic cursor tracking!

### 1.2 Consolidated Spotlight Rules
Remove all `.skill-card::before`, `.project-card::before`, `.metric-card::before` overrides.
Consolidate onto `.spotlight-card`:
```css
.spotlight-card {
  position: relative;
  overflow: hidden;
  --mouse-x: -200px;
  --mouse-y: -200px;
}

/* Surface glow at z-index 1 */
.spotlight-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    560px circle at var(--mouse-x, -200px) var(--mouse-y, -200px),
    rgba(16, 185, 129, 0.28) 0%,
    rgba(6, 182, 212, 0.20) 25%,
    rgba(99, 102, 241, 0.12) 50%,
    transparent 72%
  );
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
  z-index: 1;
}

/* Border illumination at z-index 2 */
.spotlight-card::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: radial-gradient(
    420px circle at var(--mouse-x, -200px) var(--mouse-y, -200px),
    rgba(16, 185, 129, 0.9) 0%,
    rgba(6, 182, 212, 0.7) 30%,
    rgba(99, 102, 241, 0.5) 60%,
    transparent 80%
  );
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
  z-index: 2;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  padding: 1px;
}

.spotlight-card:hover::before,
.spotlight-card:hover::after {
  opacity: 1;
}

/* Elevate card children to z-index 3 so they sit safely above the surface glow */
.spotlight-card > * {
  position: relative;
  z-index: 3;
}
```

## 2. Cinematic Slower Scroll Reveal Engine

- Upgrade transition parameters to provide a deliberate, high-end editorial feel:
  - Duration: `1.2s`
  - Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
  - Distance: `translateY(38px)`
  - Blur: `filter: blur(10px)` $\rightarrow$ `filter: blur(0)`
  - Stagger delay between items: `180ms` (0ms, 180ms, 360ms, 540ms)

## 3. Tech Arsenal Visual Elevation

- Add glowing breathing pulse animation to category badges (`.skill-card-badge`):
  ```css
  @keyframes badgePulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
    50% { box-shadow: 0 0 12px 2px rgba(16, 185, 129, 0.35); }
  }
  ```
- Icon hover enhancement: The skill icon container illuminates with a subtle radial gradient.
- List item hover: Bullet points scale up (`scale(1.4)`) and glow with `rgba(16, 185, 129, 0.7)`.

## 4. Deletion of "Copy Clone" Button

- Remove `copy-clone-btn` from `src/components/ProjectsSection.jsx` and `src/index.css`.



## 4. Interactive Terminal History

- `InteractiveTerminal.jsx`:
  - Add `history` array state and `historyIndex`.
  - Pressing `ArrowUp` navigates backward through previously executed commands.
  - Pressing `ArrowDown` navigates forward through command history.
