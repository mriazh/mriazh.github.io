# Portfolio Redesign: Dark Precision Engineering & Curated Project Showcase

## 1. Problem Statement

The current portfolio design suffers from:
1. **AI-Slop Neobrutalism**: Loud candy colors (yellow, pink, cyan, green), thick 3px black borders, harsh 6px black drop-shadows, diagonal yellow SVG dividers, wobbling cartoon stickers around the avatar, and a scrolling marquee ticker. This aesthetic undermines technical authority for an enterprise infrastructure and network automation engineer.
2. **Outdated Project Selection**: Outdated and retired projects (such as `Automated WAC Huawei Crawl Data`) are featured, while the strongest, most complex engineering projects in the developer's portfolio (`Switch-Collector` with 255 passing tests, `MRTG-CMP` with RouterOS API & autoscale engine, and `MRTG-TelkomCare-Report-Automation` with PaddleOCR + Gemini Vision fallback) are omitted.

## 2. Objective & User Stories

- **Target Persona**: Engineering Managers, Infrastructure Leads, and AI Automation Recruiters.
- **Aesthetic Direction**: **Dark Precision Engineering** — clean, authoritative, dark-tech, telemetry-driven, minimal, high-craftsmanship (inspired by Tailscale, Linear, and Cloudflare Radar).
- **Core Value Proposition**: An enterprise network automation engineer who builds production-grade telemetry systems, multi-vendor CLI engines, and Applied AI data pipelines.

## 3. Curated Project Showcase

Replace the existing project list with the top 3 production-grade systems:

### Project 1: `Switch-Collector` (Enterprise Multi-OS Switch Auditor)
- **ID**: `switch-collector`
- **Title**: `Unified Switch Collector`
- **Icon**: `Server` (or `ShieldCheck`)
- **Metric**: `255` | `Tests Passed` (or `Multi-OS` | `Aruba & ProCurve`)
- **Tags**: `['Python', 'Netmiko', 'Pytest (255 tests)', 'ArubaOS-CX', 'Jira CMDB', 'PyInstaller']`
- **Problem**: Manually auditing serial numbers, hardware fan health, PoE budgets, and VSF stack chassis across enterprise switch fleets via CLI is time-consuming and risks account lockouts.
- **Solution**: Multi-OS Python engine with automatic ArubaOS-S / ArubaOS-CX syntax fallback, physical VSF member unrolling, fan degradation alerts, fail-fast RADIUS/TACACS security, and 16-field Jira Assets (CMDB) export.
- **Result**: Generates timestamped Excel workbooks and RFC-4180 CSVs ready for Jira bulk import, with 255 automated tests and zero-install portable Windows distribution.
- **URL**: `https://github.com/mriazh/Switch-Collector`

### Project 2: `MRTG-CMP` (RouterOS Telemetry & Autoscale Engine)
- **ID**: `mrtg-cmp`
- **Title**: `MRTG-CMP`
- **Icon**: `BarChart3`
- **Metric**: `API` | `RouterOS Polling` (or `150M` | `WAN Uplink`)
- **Tags**: `['Python', 'RouterOS API', 'SQLite WAL', 'FastAPI', 'Matplotlib', 'WhatsApp Alert']`
- **Problem**: Traditional SNMP UDP polling is lossy, lacks granular time-series storage, and provides no real-time notification during WAN link drops.
- **Solution**: High-frequency RouterOS API polling over dedicated TCP tunnel, embedded SQLite WAL time-series storage, authentic RRDtool logarithmic autoscale graphing (`nice_ceiling`), and authenticated FastAPI web dashboard.
- **Result**: Granular bandwidth telemetry across sub-15m to 30d windows, exportable to PNG/Excel/CSV, with self-healing tunnel watchdogs and instant WhatsApp downtime alerts.
- **URL**: `https://github.com/mriazh/MRTG-CMP`

### Project 3: `MRTG-TelkomCare-Report-Automation` (Applied AI & Computer Vision ETL Pipeline)
- **ID**: `mrtg-telkomcare-report-automation`
- **Title**: `MRTG TelkomCare Report Automation`
- **Icon**: `Cpu` (or `Bot`)
- **Metric**: `Dual` | `OCR + Gemini AI`
- **Tags**: `['Python', 'PaddleOCR', 'Gemini Vision API', 'PySide6', 'Selenium', 'openpyxl']`
- **Problem**: Compiling monthly SLA bandwidth reports required manual portal logins, CAPTCHA solving, graph scraping, and manual visual legend transcribing across dozens of circuits.
- **Solution**: End-to-end automation pipeline featuring automated CAPTCHA resolution, Google Authenticator TOTP injection, local PaddleOCR extraction, and multimodal Gemini Vision API fallback for low-confidence legend values.
- **Result**: Generates formatted monthly Excel workbooks in unattended runs, packaged as a standalone desktop GUI application with Inno Setup installer and portable releases.
- **URL**: `https://github.com/mriazh/MRTG-TelkomCare-Report-Automation`

## 4. Visual Design Anti-Slop Directives

1. **Purge AI Slop Artifacts**:
   - REMOVE top marquee scrolling banner (`.marquee-container`).
   - REMOVE floating animated cartoon stickers around avatar (`.deco-sticker`).
   - REMOVE bright yellow diagonal SVG slash dividers (`.section-divider`).
   - REMOVE thick 3px black borders and 6px hard black drop-shadows.
   - REMOVE loud candy colors (`--accent-yellow`, `--accent-pink`, `--accent-orange` background splashes).
2. **Implement Dark Precision Aesthetics**:
   - Background: Deep slate/zinc `#090d16` with refined radial dot-grid texture (`rgba(255, 255, 255, 0.04)`).
   - Surfaces: Glassmorphic cards with subtle 1px border (`rgba(255, 255, 255, 0.08)` / `#1e293b`) and dark translucent background (`rgba(15, 23, 42, 0.75)`).
   - Accent: Single authoritative terminal green (`#10b981`) with subtle cyan/blue telemetry accents (`#06b6d4`, `#3b82f6`).
   - Hero Badge: Replace loud pill with a sleek live telemetry indicator (`🟢 Enterprise Network & AI Automation Engineer`).
   - Skills & Projects: Cohesive dark surfaces with soft border highlights and readable contrast (WCAG AA compliant).
3. **Typography**:
   - Headlines: Space Grotesk with tight letter-spacing (`tracking-tight`).
   - Telemetry/Numbers/Badges: JetBrains Mono for technical clarity.

## 5. Non-Functional & Verification Requirements

- Zero runtime regressions: `npm run lint` and `npm run build` must pass cleanly.
- Full mobile responsiveness across `< 768px` breakpoints.
- Honor `prefers-reduced-motion` media queries.
- Clean semantic HTML and ARIA accessibility labels preserved.
- No confidential hostnames or internal credentials exposed.
