# 🚀 M Riyadh Azhar (Arap) - Personal Portfolio

Welcome to my personal portfolio repository! You can view the live site here: **[mriazh.github.io](https://mriazh.github.io/)**

## 🧑‍💻 About Me

I am a **Network Automation Engineer** at GMF AeroAsia, specializing in enterprise airport network infrastructure (LAN, Wi-Fi, VLAN). I build Python automation for SSH workflows, OCR pipelines, network monitoring, and operational reporting.

*"Automating the boring stuff, focusing on what matters."*

## ✨ Features of this Portfolio

- **Neobrutalism UI:** Bold borders, hard box-shadows, vibrant accent colors, and playful hover interactions with translate effects.
- **Dark Theme with Dot Grid:** Deep navy background with subtle dot-grid pattern for texture.
- **Marquee Banner:** Scrolling tech keywords banner for visual energy.
- **Decorative Stickers:** Floating badge stickers around the avatar for personality.
- **Responsive Design:** Mobile-first layout that adapts from single-column to full desktop.
- **Focused Runtime Dependencies:** Built with React + Vite and plain CSS. The only runtime dependency beyond React is `lucide-react` for inline SVG icons — no animation or UI frameworks.
- **Automated Deployment:** GitHub Actions builds and deploys to GitHub Pages on every push.

## 🎨 Design System

| Element | Style |
|---------|-------|
| Borders | 3px solid |
| Border Radius | 14px |
| Shadows | `6px 6px 0px #000` offset shadows |
| Hover | Cards/buttons translate `3px, 3px` on hover |
| Colors | Green `#00FFA3`, Yellow `#FFE600`, Blue `#4D4DFF`, Pink `#FFA6F6`, Orange `#FF6B35` |
| Typography | Space Grotesk (body), JetBrains Mono (logo) |
| Background | Navy `#1a1a2e` with radial dot grid overlay |

## 🛠️ Tech Stack

- React + Vite
- `lucide-react` (inline SVG icons)
- Plain CSS (Neobrutalism design system, no UI framework)
- Google Fonts (Space Grotesk, JetBrains Mono)
- GitHub Actions (CI/CD to GitHub Pages)

## 📂 Project Structure

```
src/
├── App.jsx                 ← Composition root (sections, scroll state, mobile menu)
├── index.css               ← Neobrutalism styles + responsive
├── main.jsx                ← React entry point
├── components/
│   ├── Navbar.jsx          ← Desktop navigation
│   ├── MobileMenu.jsx      ← Accessible hamburger drawer
│   ├── Hero.jsx            ← Hero with TypeWriter
│   ├── CountUp.jsx         ← Count-up metric
│   └── TypeWriter.jsx      ← Typewriter effect (reduced-motion aware)
└── hooks/
    ├── useMobileMenu.js     ← Drawer state + focus + scroll lock
    ├── useScrollReveal.js   ← IntersectionObserver reveal
    ├── useReducedMotion.js  ← prefers-reduced-motion media query
    └── useCountUp.js        ← Count-up animation
public/
├── assets/avatar.png
├── assets/CV.pdf
├── assets/og-preview.png
├── robots.txt
├── sitemap.xml
└── favicon.png
```

## 🚀 Development

```bash
npm install
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
```

## 📄 License

This project is open-source and available under the **[MIT License](LICENSE)**.
