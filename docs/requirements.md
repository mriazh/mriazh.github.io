# Requirements: Creative Infrastructure Console (Iteration 5 - Slower Cinematic Reveals, True Multi-Color Mouse Spotlight & Tech Arsenal Elevation)

## 1. Problem Statement & User Feedback
1. **Scroll Reveals Too Fast**: The entrance animations currently trigger too quickly (0.8s), making the blur-to-clear and slide-up feel snappy rather than luxurious, deliberate, and cinematic.
2. **Tech Arsenal Lacks Effects**: The Tech Arsenal bento grid needs more visual energy, internal stagger, glowing badge pulses, and interactive list hover dynamics.
3. **Card Gradient Not Following Mouse**: The mouse spotlight was being overwritten by static `linear-gradient` and `z-index: -1` rules defined later in the CSS file (`.skill-card::before`, `.project-card::before`, `.metric-card::before`), completely breaking cursor tracking!
4. **Remove "Copy Clone" Button**: The user explicitly requested to remove the "Copy Clone" button from project cards.

## 2. Requirements Specification

### 2.1 Remove "Copy Clone" Button
- Completely remove the `copy-clone-btn` and related state/handler from `src/components/ProjectsSection.jsx` and `src/index.css`.
- Keep the clean header: Project icon + Project title + View Repository link.

### 2.2 Fix Multi-Color Dynamic Mouse Spotlight Engine
- Root cause: Lines 718, 755, and 1376 in `src/index.css` had redundant `::before` declarations with static `linear-gradient` and `z-index: -1` that overrode `.spotlight-card::before`.
- Fix:
  - Remove all redundant `::before` and `::before:hover` rules from `.skill-card`, `.project-card`, and `.metric-card`.
  - Consolidate all spotlight behavior into `.spotlight-card::before` (`z-index: 1`) and `.spotlight-card::after` (`z-index: 2`).
  - Surface gradient (`::before`): Vibrant multi-color radial gradient tracking `--mouse-x` and `--mouse-y` (`#10b981` emerald $\rightarrow$ `#06b6d4` cyan $\rightarrow$ `#6366f1` violet).
  - Border aura (`::after`): Multi-color gradient edge tracing cursor around card perimeter (`mask-composite: exclude`).
  - Card-specific accent variants (Amber for TelkomCare, Blue for RouterOS, Cyan for devices).
  - Elevate card contents (`.project-body`, `.project-metric`, `.skill-card-header`, `.skill-list`, `.metric-icon`, etc.) to `position: relative; z-index: 3;` so text and links remain crisp and clickable above the spotlight.

### 2.3 Slower, Cinematic Kinetic Scroll Reveal
- Increase scroll transition duration from `0.8s` to `1.2s` with smooth luxury easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- Increase entrance distance: `transform: translateY(38px); filter: blur(10px); opacity: 0;` $\rightarrow$ `transform: translateY(0); filter: blur(0); opacity: 1;`.
- Increase cascade stagger delays to `180ms` (0ms, 180ms, 360ms, 540ms) for a distinct wave effect.

### 2.4 Elevate Tech Arsenal Section
- Add subtle ambient breathing pulse on category badges (`CORE`, `FOCUS`, `APPLIED`, `SUPPORT`).
- Add glowing icon backdrops and hover expansion on bullet points (`.skill-list li`).
- Ensure all 4 bento cards cascade smoothly into view with the slower 1.2s cinematic reveal.

### 2.5 Strict Constraints
- Commit date: 4 Oktober 2026.
- Author: Muhammad Riyadh Azhar <mriyadhazhar@gmail.com>.
- Verify with `npm run lint` and `npm run build`.
