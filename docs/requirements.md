# Requirements: Creative Infrastructure Console (Iteration 7 - Project Card Spotlight Consistency Fix)

## 1. Problem Statement & User Feedback
The user noticed an inconsistency in Curated Projects:
"kok di curated project itu pas mousenya gua arahin ke kotaknya kok ga konsisten ya? yang paling lancar yang kotak pertama, kotak 2-4 kek buggy gitu"

### 1.1 Root Cause Diagnosis
1. In `src/components/ProjectsSection.jsx`, each card received inline `style={{ transitionDelay: `${idx * 180}ms` }}`.
2. Because `transitionDelay` was applied globally without property scoping, it applied to ALL transitions on that card, including hover effects:
   - Card 1 (idx 0): `delay: 0ms` $\rightarrow$ Immediate, smooth response.
   - Card 2 (idx 1): `delay: 180ms` $\rightarrow$ Hover delayed by 180ms.
   - Card 3 (idx 2): `delay: 360ms` $\rightarrow$ Hover delayed by 360ms.
   - Card 4 (idx 3): `delay: 540ms` $\rightarrow$ Hover delayed by 540ms (half a second lag!).
3. Furthermore, `.spotlight-card::before` has `transition: opacity 0.35s ease`. With a 540ms transition delay on Card 4, the spotlight didn't even start fading in until 540ms after the mouse entered, making it feel broken and unresponsive.
4. Legacy unused `projRefs` callback refs in `ProjectsSection.jsx` caused unnecessary ref re-assignments on renders.

## 2. Requirements Specification

### 2.1 Instant Spotlight Hover (Zero Delay)
- Enforce `transition-delay: 0s !important;` on all spotlight cards upon hover:
  ```css
  .spotlight-card:hover,
  .spotlight-card:hover *,
  .spotlight-card:hover::before,
  .spotlight-card:hover::after {
    transition-delay: 0s !important;
  }
  ```
- In `ProjectsSection.jsx`, clean up inline transition delays so that hover and mousemove never inherit reveal stagger delays.
- Clean up dead `projRefs` legacy code.

### 2.2 Instant Coordinate Initialization
- Add `onMouseEnter={handleMouseMove}` in addition to `onMouseMove={handleMouseMove}` so the spotlight snaps to the cursor position the exact instant the mouse enters any card, without waiting for the first mousemove delta.

### 2.3 Strict Constraints
- STRICTLY NO COMMIT OR PUSH ("jangan commit dulu, nanti gua cobain").
- Zero-code policy outside `/docs` for orchestrator; dispatch worker for app code changes.
- Verify with `npm run lint` and `npm run build`.
