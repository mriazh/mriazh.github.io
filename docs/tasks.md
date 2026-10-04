# Tasks: Slower Cinematic Reveals, True Multi-Color Mouse Spotlight & Tech Arsenal Elevation (Iteration 5)

- [x] T1. Freeze specifications in `docs/requirements.md` and `docs/design.md`.
- [x] T2. Update `src/components/ProjectsSection.jsx` to remove the "Copy Clone" button and unused handlers/states. **Target:** free-stack worker.
- [x] T3. Update `src/index.css` to fix the spotlight CSS specificity bug by removing `.skill-card::before`, `.project-card::before`, and `.metric-card::before` overrides; elevate card children to `z-index: 3`; slow down scroll reveal duration to 1.2s with `translateY(38px)` and `blur(10px)`; and add breathing badge pulse and list hover glow to Tech Arsenal. **Target:** free-stack worker.
- [x] T4. Update `src/components/SkillsSection.jsx` and `src/components/ProjectsSection.jsx` stagger delays to 180ms intervals. **Target:** free-stack worker.
- [x] T5. Verify with `npm run lint` and `npm run build` and check browser (NO commit/push). **Target:** orchestrator.
- [x] T6. Hand over to user for testing at `http://localhost:5173/`. **Target:** orchestrator.
- [x] T7. Commit with date 4 Oktober 2026 and push to origin master per user instruction. **Target:** orchestrator.
