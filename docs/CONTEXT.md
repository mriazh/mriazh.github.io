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

# Session Context: CV Ground Truth Alignment (Iteration 8)

## Current State
- User cross-checked portfolio against CV DOCX. Key mismatches identified and approved for fix:
  1. `450+ Network Devices Audited` unbacked -> replace with CV-verified `190+ Hosts Monitored` (superset; 111 switches is a subset).
  2. Cisco entry says NX-OS; CV says Catalyst 9200L. Add LibreNMS & PRTG.
  3. 9router-go undersold: 26 commits merged upstream measured via API; elevate to Active Core Contributor framing in portfolio card, terminal `projects` output, and GitHub profile README (`mriazh/mriazh`).
- Zero-code policy outside `/docs` for orchestrator; worker changes portfolio app code; orchestrator updates `mriazh/mriazh` README via GitHub API.
- STRICTLY NO commit/push of the portfolio repo (user tests locally first).

## Verification Evidence (Iteration 8)
- ESLint clean; Vite build clean (1787 modules, 2.5s).
- `MetricsProof.jsx`: `450+ Network Devices Audited` -> `190+ Hosts Monitored` / `LibreNMS & PRTG Telemetry` (CV-verified superset; 111 switches is the subset, details stay on Switch-Collector card).
- `skills.js`: `Cisco (IOS/IOS-XE, NX-OS)` -> `Cisco (Catalyst 9200L, IOS/IOS-XE)`; added `LibreNMS & PRTG — telemetry at scale`.
- `projects.js` + `InteractiveTerminal.jsx`: 9router-go elevated to `Active Core Contributor`, metric `26+ Commits Merged` (26 live commits measured via GitHub API on luqman-v1/9router-go by mriazh), copy includes distributed tracing + multi-provider protocol translations.
- `mriazh/mriazh` profile README updated & committed via API: 9router-go row now carries 26+ commits merged upstream and ongoing + distributed tracing (commit f5567dc on branch master).
- NOTE: two untracked files not created by this session appeared: `.github/workflows/ci.yml` and `.pre-commit-config.yaml` (concurrent edit from user side). Left untouched.
- Portfolio repo: zero commits, zero pushes. Local preview only.
