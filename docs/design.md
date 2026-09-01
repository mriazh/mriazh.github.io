# Portfolio Redesign: Dark Precision Engineering Design System

## 1. Design Read & Philosophy

- **Aesthetic Classification**: Dark Precision Engineering / High-Tech Infrastructure Dashboard.
- **Reference Anchors**: Tailscale, Cloudflare Radar, Linear, HashiCorp.
- **Dials**: ENERGY: 2 (Balanced), RHYTHM: 2 (Consistent with subtle offsets), MOTION: 2 (Restrained telemetry transitions).
- **Core Principle**: Eliminate decorative AI-slop noise (marquee, wobbling stickers, 3px borders, hard drop-shadows, candy colors). Every visual token must communicate engineering rigor and precision.

## 2. Color Palette & CSS Variables

```css
:root {
  /* Backgrounds */
  --bg-main: #090d16;
  --bg-surface: #0f172a;
  --bg-surface-elevated: #1e293b;
  --bg-card: rgba(15, 23, 42, 0.7);
  --bg-card-hover: rgba(30, 41, 59, 0.8);

  /* Typography */
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;

  /* Borders & Grid */
  --border: rgba(255, 255, 255, 0.08);
  --border-light: rgba(255, 255, 255, 0.14);
  --border-accent: rgba(16, 185, 129, 0.3);

  /* Primary Accent: Terminal Emerald */
  --accent-primary: #10b981;
  --accent-primary-hover: #059669;
  --accent-primary-glow: rgba(16, 185, 129, 0.15);

  /* Secondary Accents */
  --accent-cyan: #06b6d4;
  --accent-blue: #3b82f6;

  /* Elevation & Shadows */
  --shadow-card: 0 4px 20px -2px rgba(0, 0, 0, 0.5);
  --shadow-card-hover: 0 10px 30px -4px rgba(0, 0, 0, 0.7), 0 0 20px -2px rgba(16, 185, 129, 0.15);
  --shadow-glow: 0 0 25px -5px rgba(16, 185, 129, 0.25);

  /* Layout geometry */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --border-width: 1px;
  --transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
```

## 3. Component Architecture & Structural Changes

### 3.1 `src/App.jsx`
- **REMOVE**: `<header className="marquee-container">...</header>`.
- **REMOVE**: `<div className="section-divider">...</div>` (both normal and flipped yellow SVG slashes).
- **STRUCTURE**: Clean sequence: `Navbar` -> `Hero` -> `SkillsSection` -> `ProjectsSection` -> `ContactFooter`.
- Retain subtle cursor glow with softer telemetry opacity.

### 3.2 `src/components/Hero.jsx`
- **Avatar & Visuals**:
  - Clean frame with 1px border and soft ambient back-glow.
  - **REMOVE**: `.deco-sticker` elements (all 4 wobbling stickers).
- **Badge**:
  - Live pulse dot + text: `🟢 Enterprise Network & AI Automation Engineer`.
- **Headlines & Actions**:
  - Refined typography: High-impact display text with crisp highlighting in terminal emerald.
  - Buttons: Primary button with emerald fill (`#10b981`), secondary button with translucent dark surface and 1px border.

### 3.3 `src/components/SkillsSection.jsx`
- Replace `section--yellow` with a unified dark section background matching the rest of the site.
- Bento cards styled with dark translucent glass surfaces (`--bg-card`), 1px borders, and emerald category markers.
- High contrast, legible typography.

### 3.4 `src/components/ProjectsSection.jsx`
- Project Cards transformed into **Engineering Case Studies**:
  - Metric column: Sleek numeric or telemetry badge (`255 Tests Passed`, `RouterOS API`, `PaddleOCR + Gemini`).
  - Card body: Crisp hierarchy with Project title, tags, Problem, Solution, and Result.
  - Direct repository links with subtle hover glow.

### 3.5 `src/components/Navbar.jsx` & `ContactFooter.jsx`
- Navbar: Frosted glass backdrop blur (`rgba(9, 13, 22, 0.8)`).
- Footer: Deep dark background (no more bright blue fill), clean social links with subtle border hover states.

## 4. Curated Data Model (`src/data/projects.js`)

Export `projectsData` array containing:
1. `switch-collector`: Unified Switch Collector
2. `mrtg-cmp`: MRTG-CMP (RouterOS Telemetry & Autoscale)
3. `mrtg-telkomcare-report-automation`: MRTG TelkomCare Report Automation
