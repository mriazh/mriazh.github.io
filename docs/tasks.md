# Tasks: Project Card Spotlight Consistency Fix (Iteration 7)

- [x] T1. Freeze specifications in `docs/requirements.md` and `docs/design.md`.
- [x] T2. Update `src/index.css` to add `transition-delay: 0s !important;` on hover for all spotlight cards, pseudo-elements, and children. **Target:** free-stack worker.
- [x] T3. Update `src/components/ProjectsSection.jsx` to remove dead `projRefs` code and add `onMouseEnter={handleMouseMove}` on cards. **Target:** free-stack worker.
- [x] T4. Update `src/components/SkillsSection.jsx` and `src/components/MetricsProof.jsx` to add `onMouseEnter={handleMouseMove}`. **Target:** free-stack worker.
- [x] T5. Verify with `npm run lint` and `npm run build` and browser testing (NO commit/push). **Target:** orchestrator.
- [x] T6. Hand over to user for local testing at `http://localhost:5173/`. **Target:** orchestrator.

# Tasks: CV Ground Truth Alignment (Iteration 8)

- [x] T1. Freeze specifications in `docs/requirements.md` and `docs/design.md`.
- [x] T2. Update `src/components/MetricsProof.jsx`: `450+ Network Devices Audited` -> `190+ Hosts Monitored` (`LibreNMS & PRTG Telemetry`). **Target:** free-stack worker.
- [x] T3. Update `src/data/skills.js`: fix Cisco entry and add LibreNMS & PRTG item. **Target:** free-stack worker.
- [x] T4. Update `src/data/projects.js` and `src/components/InteractiveTerminal.jsx`: 9router-go -> Active Core Contributor with `26+ Commits Merged` metric and refreshed copy. **Target:** free-stack worker.
- [x] T5. Update `mriazh/mriazh` profile README 9router-go row via GitHub API. **Target:** orchestrator.
- [x] T6. Verify `npm run lint` and `npm run build` (NO commit/push). **Target:** orchestrator.
- [x] T7. Hand over to user for local testing at `http://localhost:5173/`. **Target:** orchestrator.

# Tasks: Evergreen 9router-go & Public Network-Daily-Report (Iteration 9)

- [x] T1. Freeze specifications in `docs/requirements.md` and `docs/design.md`.
- [x] T2. Update `src/data/projects.js`: rename NDR-Automation -> Network-Daily-Report (new URL), change 9router-go metric to evergreen `Active | Core Contributor` with `40+ commits and ongoing` narrative. **Target:** free-stack worker.
- [x] T3. Update `src/components/InteractiveTerminal.jsx`: sync NDR title and 9router-go evergreen narrative in `projects` command. **Target:** free-stack worker.
- [x] T4. Update `mriazh/mriazh` profile README: point NDR to new public repo and reflect 40+ commits ongoing on 9router-go. **Target:** orchestrator.
- [x] T5. Verify `npm.cmd run lint` and `npm.cmd run build` (NO commit/push until user confirms). **Target:** orchestrator.
- [x] T6. Hand over to user. **Target:** orchestrator.
