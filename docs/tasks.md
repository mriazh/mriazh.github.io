# Tasks: Project Card Spotlight Consistency Fix (Iteration 7)

- [x] T1. Freeze specifications in `docs/requirements.md` and `docs/design.md`.
- [x] T2. Update `src/index.css` to add `transition-delay: 0s !important;` on hover for all spotlight cards, pseudo-elements, and children. **Target:** free-stack worker.
- [x] T3. Update `src/components/ProjectsSection.jsx` to remove dead `projRefs` code and add `onMouseEnter={handleMouseMove}` on cards. **Target:** free-stack worker.
- [x] T4. Update `src/components/SkillsSection.jsx` and `src/components/MetricsProof.jsx` to add `onMouseEnter={handleMouseMove}`. **Target:** free-stack worker.
- [x] T5. Verify with `npm run lint` and `npm run build` and browser testing (NO commit/push). **Target:** orchestrator.
- [x] T6. Hand over to user for local testing at `http://localhost:5173/`. **Target:** orchestrator.
