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

---

# Requirements: Creative Infrastructure Console (Iteration 8 - CV Ground Truth Alignment)

## 1. Problem Statement
User cross-checked the portfolio against his authoritative CV (`CV - Muhammad Riyadh Azhar.docx`). Findings:
1. The `450+ Network Devices Audited` metric has no backing in the CV. The CV verifies: "Maintained operational telemetry across **190+ hosts** and **111+ enterprise switches** using LibreNMS and PRTG". The 190+ hosts number is the superset (switches included); 111+ is the switch subset.
2. Skills drift: portfolio lists `Cisco (IOS/IOS-XE, NX-OS)` but CV specifies `Cisco Catalyst 9200L` (28-switch Bank BCA migration); CV skills missing from portfolio: `LibreNMS`, `PRTG`.
3. The 9router-go card and GitHub profile README undersell actual contribution: **26 commits merged upstream** to `luqman-v1/9router-go` and ongoing. Current framing cites only PR #284 & #286, omitting `distributed tracing` and `multi-provider protocol translations` which the CV documents.

## 2. Requirements Specification

### 2.1 Metric Ground Truth (`MetricsProof.jsx`)
- Replace `450+ Network Devices Audited` / `Aruba, Huawei, Cisco, MikroTik` with:
  - `target: 190`
  - `suffix: '+'`
  - `label: 'Hosts Monitored'`
  - `sublabel: 'LibreNMS & PRTG Telemetry'`
- Keep: `328+ Pytest Suites Passing`, `150 Mbps RouterOS API Telemetry`, `18+ TelkomCare Sites Audited`.

### 2.2 Skills Correction (`skills.js`)
- Card 1 item: `Cisco (IOS/IOS-XE, NX-OS)` -> `Cisco (Catalyst 9200L, IOS/IOS-XE)`.
- Card 1 add item: `LibreNMS & PRTG — telemetry at scale`.

### 2.3 9router-go Card Elevation (`projects.js` + `InteractiveTerminal.jsx`)
- Title: `9router-go (Active Core Contributor)`.
- Metric: `26+` | `Commits Merged` (isText) | `project-metric--blue`.
- Tags: `['Go (Golang)', 'Svelte', 'SQLite', 'Reverse Proxy', 'Distributed Tracing', 'Security (SSRF)']`.
- Solution text: SSRF-safe dialers (PR #284), distributed tracing, SQLite retention & compaction (PR #286), multi-provider protocol translations, multi-account quota isolation.
- Result text: `26+ commits merged into upstream core and growing...`.
- Terminal `projects` output: mirror the same refreshed framing.

### 2.4 GitHub Profile README (`mriazh/mriazh` repo, orchestrator via API)
- Update the 9router-go row to Active Core Contributor framing with the 26+ commits count and full feature list.

---

# Requirements: Evergreen 9router-go & Public Network-Daily-Report (Iteration 9)

## 1. Problem Statement
1. Private repo rename: `Network-Daily-Report-Automation` (private) -> `Network-Daily-Report` (public: `https://github.com/mriazh/Network-Daily-Report`). Portfolio URL and title must point to the public repo.
2. Fast-moving open-source metrics: user's merged commits on `luqman-v1/9router-go` jumped from 26 to 47 commits in days, and continues growing. Static numbers like `26+` rot immediately. Metric must be evergreen (`Active | Core Contributor`), and copy must frame ongoing contributions (`40+ merged commits and ongoing`) to remain permanently accurate.

## 2. Requirements Specification

### 2.1 Public Repo Migration
- `src/data/projects.js`:
  - `id: 'network-daily-report'`
  - `title: 'Network-Daily-Report'`
  - `repoUrl: 'https://github.com/mriazh/Network-Daily-Report'`
- `src/components/InteractiveTerminal.jsx`:
  - Update `projects` command title to `[01 // ORCHESTRATION] Network-Daily-Report`.

### 2.2 Evergreen 9router-go Framing
- `src/data/projects.js`:
  - `metric: { target: 'Active', label: 'Core Contributor', colorClass: 'project-metric--blue', isText: true }`
  - `details.result`: `'Continuous core contributor to upstream Go infrastructure (40+ merged commits and ongoing). SSRF dialer blocks private-range bypass attempts. Compaction reduces DB size 60-80% under load. Quota isolation prevents noisy-neighbor starvation.'`
- `src/components/InteractiveTerminal.jsx`:
  - `[04 // OPEN SOURCE] 9router-go (Active Core Contributor)`
  - Update description to note continuous upstream contributions (40+ commits and ongoing).

### 2.3 GitHub Profile README (`mriazh/mriazh`)
- Update both rows:
  - Network-Daily-Report link & title -> `https://github.com/mriazh/Network-Daily-Report`
  - 9router-go description -> `40+ commits merged upstream and ongoing`
