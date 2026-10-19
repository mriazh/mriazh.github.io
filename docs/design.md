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

---

# Technical Design: CV Ground Truth Alignment (Iteration 8)

## 1. Data Layer Updates

### 1.1 `src/components/MetricsProof.jsx` — Superset Metric
CV states "190+ hosts and 111+ enterprise switches using LibreNMS and PRTG". Hosts is the superset; use it:
```jsx
{ target: 190, suffix: '+', label: 'Hosts Monitored', sublabel: 'LibreNMS & PRTG Telemetry', accentColor: 'var(--accent-cyan)', iconClass: 'metric-icon--cyan' },
```

### 1.2 `src/data/skills.js` — Cisco & Monitoring Fix
```jsx
{ text: 'Cisco (Catalyst 9200L, IOS/IOS-XE)', icon: Network },
{ text: 'LibreNMS & PRTG — telemetry at scale', icon: Cpu },
```

### 1.3 `src/data/projects.js` — 9router-go Active Core Contributor
```jsx
title: '9router-go (Active Core Contributor)',
metric: { target: '26+', label: 'Commits Merged', colorClass: 'project-metric--blue', isText: true },
tags: ['Go (Golang)', 'Svelte', 'SQLite', 'Reverse Proxy', 'Distributed Tracing', 'Security (SSRF)'],
solution: 'Active core contributor engineering SSRF-safe dialers with private CIDR blocking (PR #284), distributed tracing across request pipelines, SQLite retention storage profiles with automatic compaction and WAL checkpoint tuning (PR #286), multi-provider protocol translations for LLM backends, and multi-account quota state isolation.',
result: '26+ commits merged into upstream core and growing. SSRF dialer blocks private-range bypass attempts. Compaction reduces DB size 60-80% under load. Quota isolation prevents noisy-neighbor starvation.',
```

### 1.4 `src/components/InteractiveTerminal.jsx` — `projects` Command
Mirror the refreshed 9router-go block (26+ commits, distributed tracing, multi-provider translations).

## 2. GitHub Profile README (`mriazh/mriazh`)
Orchestrator updates the row directly via the GitHub API (repo `mriazh/mriazh`, README.md):
```text
| [🌐 9router-go (Active Core Contributor)](https://github.com/mriazh/9router-go) | High-concurrency AI/LLM proxy router in Go. 26+ commits merged upstream and ongoing: SSRF-safe dialers, distributed tracing, database retention & compaction, multi-provider protocol translations, and multi-account quota isolation. | Go (Golang), SQLite, Svelte, Reverse Proxy, Security |
```






## 4. Interactive Terminal History

- `InteractiveTerminal.jsx`:
  - Add `history` array state and `historyIndex`.
  - Pressing `ArrowUp` navigates backward through previously executed commands.
  - Pressing `ArrowDown` navigates forward through command history.
