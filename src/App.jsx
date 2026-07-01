import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  GraduationCap,
  Terminal,
  Wifi,
  Globe,
  Bot,
  Wrench,
  Network,
  RadioTower,
  BarChart3,
  MonitorPlay,
  Monitor,
  Mail,
  Briefcase,
  GitBranch,
  Camera,
  Code2,
  Cpu,
  Server,
  Zap,
  Shield,
  Laptop,
  Smartphone,
  Router,
  FileCode,
  Rocket,
} from 'lucide-react';
import './index.css';

// --- Custom Hook: useScrollReveal ---
function useScrollReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -50px 0px', once = true } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}

// --- CountUp Component ---
function CountUp({ target, suffix = '', duration = 2000, delay = 0 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  const startAnimation = useCallback(() => {
    if (hasStarted) return;
    const isNumeric = !isNaN(Number(target));
    if (!isNumeric) {
      setCount(target);
      setHasStarted(true);
      return;
    }
    const targetNum = Number(target);
    const startTime = performance.now() + delay;
    function animate(now) {
      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }
      const elapsed = Math.min(now - startTime, duration);
      const progress = elapsed / duration;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(targetNum * eased));
      if (elapsed < duration) requestAnimationFrame(animate);
      else { setCount(targetNum); setHasStarted(true); }
    }
    requestAnimationFrame(animate);
  }, [target, duration, delay, hasStarted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) startAnimation(); },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startAnimation]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// --- TypeWriter Component ---
function TypeWriter({ text, speed = 35, delay = 0 }) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, index === 0 ? delay : speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed, delay]);

  return (
    <span>
      {displayed}
      {index < text.length && <span className="typewriter-cursor" aria-hidden="true">|</span>}
    </span>
  );
}

export default function App() {
  // Scroll reveal refs
  const [skillRef1, skillVis1] = useScrollReveal();
  const [skillRef2, skillVis2] = useScrollReveal();
  const [skillRef3, skillVis3] = useScrollReveal();
  const [projRef1, projVis1] = useScrollReveal();
  const [projRef2, projVis2] = useScrollReveal();
  const [projRef3, projVis3] = useScrollReveal();
  const [titleSkillsRef, titleSkillsVis] = useScrollReveal({ rootMargin: '0px 0px -100px 0px' });
  const [titleProjRef, titleProjVis] = useScrollReveal({ rootMargin: '0px 0px -100px 0px' });
  const [footerRef, footerVis] = useScrollReveal({ rootMargin: '0px 0px -50px 0px' });

  // Navbar scroll state
  const [navScrolled, setNavScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setNavScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Cursor glow follower
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  useEffect(() => {
    if (prefersReducedMotion) return;
    const handler = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, [prefersReducedMotion]);

  return (
    <>
      {/* Cursor Glow */}
      {!prefersReducedMotion && (
        <div
          className="cursor-glow"
          style={{ left: cursorPos.x, top: cursorPos.y }}
          aria-hidden="true"
        />
      )}

      <header className="marquee-container" role="banner">
        <div className="marquee-content" aria-hidden="true">
          <span>NETWORK AUTOMATION • PYTHON • CISCO • MIKROTIK • FTTH •&nbsp;</span>
          <span>NETWORK AUTOMATION • PYTHON • CISCO • MIKROTIK • FTTH •&nbsp;</span>
          <span>NETWORK AUTOMATION • PYTHON • CISCO • MIKROTIK • FTTH •&nbsp;</span>
          <span>NETWORK AUTOMATION • PYTHON • CISCO • MIKROTIK • FTTH •&nbsp;</span>
          <span>NETWORK AUTOMATION • PYTHON • CISCO • MIKROTIK • FTTH •&nbsp;</span>
          <span>NETWORK AUTOMATION • PYTHON • CISCO • MIKROTIK • FTTH •&nbsp;</span>
          <span>NETWORK AUTOMATION • PYTHON • CISCO • MIKROTIK • FTTH •&nbsp;</span>
          <span>NETWORK AUTOMATION • PYTHON • CISCO • MIKROTIK • FTTH •&nbsp;</span>
          <span>NETWORK AUTOMATION • PYTHON • CISCO • MIKROTIK • FTTH •&nbsp;</span>
          <span>NETWORK AUTOMATION • PYTHON • CISCO • MIKROTIK • FTTH •&nbsp;</span>
        </div>
      </header>

      <nav className={`navbar ${navScrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav-content">
          <span className="nav-logo">MRIAZH<span className="nav-logo-dot">.</span></span>
          <ul className="nav-links">
            <li><a href="#skills">Arsenal</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="hero-text">
            <span className="hero-badge">
              <Zap className="badge-icon" aria-hidden="true" /> Network Engineer & Automator
            </span>
            <h1 id="hero-title">
              I Build <span className="highlight">Resilient Networks</span><br />
              & <span className="highlight">Automation Pipelines</span>
            </h1>
            <p className="hero-description">
              <TypeWriter
                text="Transforming manual network ops into reliable, scalable code."
                speed={35}
                delay={500}
              />
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="neo-btn">View Projects</a>
              <a href="#contact" className="neo-btn neo-btn--outline">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <img
                src="/assets/avatar.png"
                alt="M Riyadh Azhar"
                fetchPriority="high"
                width="300"
                height="300"
              />
            </div>
            {/* Decorative stickers */}
            <div className="deco-sticker deco-sticker--1">
              <GraduationCap className="sticker-icon" aria-hidden="true" /> MTCNA
            </div>
            <div className="deco-sticker deco-sticker--2">
              <Code2 className="sticker-icon" aria-hidden="true" /> Python
            </div>
            <div className="deco-sticker deco-sticker--3">
              <RadioTower className="sticker-icon" aria-hidden="true" /> FTTH
            </div>
            <div className="deco-sticker deco-sticker--4">
              <Wrench className="sticker-icon" aria-hidden="true" /> Cisco
            </div>
          </div>
        </section>

        <div className="section-divider">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L1440,60 L0,60 Z" fill="var(--accent-yellow)" />
          </svg>
        </div>

        {/* Skills Section — YELLOW BACKGROUND */}
        <section id="skills" className="section section--yellow" aria-labelledby="skills-title">
          <div className="section-inner">
            <h2 ref={titleSkillsRef} id="skills-title" className={`section-title ${titleSkillsVis ? 'reveal' : ''}`}>Tech Arsenal</h2>
            <div className="skills-bento">
              {/* Big card — Networking */}
              <div ref={skillRef1} className={`neo-card skill-card skill-card--large ${skillVis1 ? 'reveal' : ''}`} style={{ transitionDelay: '0ms' }}>
                <div className="skill-card-header">
                  <h3>
                    <Globe className="skill-icon" aria-hidden="true" /> Networking
                  </h3>
                  <span className="skill-card-badge">Core</span>
                </div>
                <ul className="skill-list">
                  <li><Router className="list-icon" aria-hidden="true" /> TCP/IP, DNS, DHCP</li>
                  <li><Network className="list-icon" aria-hidden="true" /> VLAN, STP, LACP</li>
                  <li><Server className="list-icon" aria-hidden="true" /> Cisco, MikroTik, Huawei</li>
                  <li><Wifi className="list-icon" aria-hidden="true" /> FTTH / GPON</li>
                  <li><Smartphone className="list-icon" aria-hidden="true" /> Wireless & Mesh Networks</li>
                </ul>
              </div>

              {/* Automation */}
              <div ref={skillRef2} className={`neo-card skill-card skill-card--accent ${skillVis2 ? 'reveal' : ''}`} style={{ transitionDelay: '150ms' }}>
                <div className="skill-card-header">
                  <h3>
                    <Bot className="skill-icon" aria-hidden="true" /> Automation
                  </h3>
                  <span className="skill-card-badge skill-card-badge--dark">Focus</span>
                </div>
                <ul className="skill-list">
                  <li><Terminal className="list-icon" aria-hidden="true" /> Python (Selenium, PySide6)</li>
                  <li><Cpu className="list-icon" aria-hidden="true" /> PaddleOCR / Image Processing</li>
                  <li><Monitor className="list-icon" aria-hidden="true" /> Browser Automation</li>
                  <li><FileCode className="list-icon" aria-hidden="true" /> Excel Report Generation</li>
                  <li><Shield className="list-icon" aria-hidden="true" /> SSH Automation (Paramiko)</li>
                  <li><GitBranch className="list-icon" aria-hidden="true" /> Git / GitHub</li>
                </ul>
              </div>

              {/* Systems & Tools */}
              <div ref={skillRef3} className={`neo-card skill-card ${skillVis3 ? 'reveal' : ''}`} style={{ transitionDelay: '300ms' }}>
                <div className="skill-card-header">
                  <h3>
                    <Cpu className="skill-icon" aria-hidden="true" /> Systems & Tools
                  </h3>
                  <span className="skill-card-badge">Support</span>
                </div>
                <ul className="skill-list">
                  <li><Laptop className="list-icon" aria-hidden="true" /> Windows & macOS (Troubleshooting)</li>
                  <li><Server className="list-icon" aria-hidden="true" /> Linux (Debian, CLI)</li>
                  <li><Code2 className="list-icon" aria-hidden="true" /> React.js / Node.js</li>
                  <li><Zap className="list-icon" aria-hidden="true" /> OPM & OTDR (Fiber)</li>
                  <li><Rocket className="list-icon" aria-hidden="true" /> PyInstaller (.exe builds)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider section-divider--flip">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L1440,0 L1440,60 Z" fill="var(--accent-yellow)" />
          </svg>
        </div>

        {/* Projects Section */}
        <section id="projects" className="section section--dark" aria-labelledby="projects-title">
          <div className="section-inner">
            <h2 ref={titleProjRef} id="projects-title" className={`section-title ${titleProjVis ? 'reveal' : ''}`}>Featured Projects</h2>
            <div className="projects-list">

              {/* Project 1 — WAC Huawei */}
              <div ref={projRef1} className={`project-card ${projVis1 ? 'reveal' : ''}`} style={{ transitionDelay: '0ms' }}>
                <div className="project-metric project-metric--green">
                  <CountUp target={451} />
                  <div className="label">APs Crawled</div>
                </div>
                <div className="project-body">
                  <h3>
                    <Wifi className="project-icon" aria-hidden="true" /> WAC Huawei LLDP Crawler
                  </h3>
                  <div className="project-tags">
                    <span>Python</span>
                    <span>SSH</span>
                    <span>Paramiko</span>
                    <span>Huawei</span>
                  </div>
                  <div className="project-details">
                    <p><strong>Problem:</strong> Manually checking LLDP neighbors on 451 Access Points via SSH is impossible to do by hand — would take days.</p>
                    <p><strong>Solution:</strong> Automated SSH crawler that connects to Huawei WAC, stelnet into each AP, extracts LLDP data, maps neighbors to switch IPs, and outputs CSV.</p>
                    <p><strong>Result:</strong> Full AP-to-Switch mapping in one run. Auto-reconnect, resume after interruption, and zero config changes (read-only).</p>
                  </div>
                  <a href="https://github.com/mriazh/Automated-WAC-Huawei-Crawl-Data" target="_blank" rel="noopener noreferrer" className="project-link">
                    View Repository →
                  </a>
                </div>
              </div>

              {/* Project 2 — MRTG TelkomCare Report Automation */}
              <div ref={projRef2} className={`project-card ${projVis2 ? 'reveal' : ''}`} style={{ transitionDelay: '200ms' }}>
                <div className="project-metric project-metric--yellow">
                  <CountUp target="E2E" />
                  <div className="label">Full Pipeline</div>
                </div>
                <div className="project-body">
                  <h3>
                    <BarChart3 className="project-icon" aria-hidden="true" /> MRTG TelkomCare Report Automation
                  </h3>
                  <div className="project-tags">
                    <span>Python</span>
                    <span>Selenium</span>
                    <span>PySide6</span>
                    <span>PaddleOCR</span>
                    <span>openpyxl</span>
                  </div>
                  <div className="project-details">
                    <p><strong>Problem:</strong> Scraping 16+ MRTG graphs daily, reading bandwidth values from 480+ images, and compiling Excel reports was a multi-hour, error-prone manual process.</p>
                    <p><strong>Solution:</strong> Unified end-to-end pipeline with GUI & CLI — auto-scrapescapes graphs from TelkomCare (with retry & image validation), then uses AI-powered OCR to extract data and generate formatted Excel reports.</p>
                    <p><strong>Result:</strong> Entire workflow from scraping to final report runs unattended. Supports resume-on-failure, Windows installer, and portable distribution.</p>
                  </div>
                  <a href="https://github.com/mriazh/MRTG-TelkomCare-Report-Automation" target="_blank" rel="noopener noreferrer" className="project-link">
                    View Repository →
                  </a>
                </div>
              </div>

              {/* Project 3 — Live Monitor */}
              <div ref={projRef3} className={`project-card ${projVis3 ? 'reveal' : ''}`} style={{ transitionDelay: '400ms' }}>
                <div className="project-metric project-metric--blue">
                  <CountUp target="24/7" />
                  <div className="label">Live Monitoring</div>
                </div>
                <div className="project-body">
                  <h3>
                    <MonitorPlay className="project-icon" aria-hidden="true" /> MRTG Live Monitor Dashboard
                  </h3>
                  <div className="project-tags">
                    <span>Python</span>
                    <span>PySide6</span>
                    <span>NTP Sync</span>
                    <span>Telegram</span>
                  </div>
                  <div className="project-details">
                    <p><strong>Problem:</strong> No real-time visibility into bandwidth graphs without manually refreshing the portal repeatedly.</p>
                    <p><strong>Solution:</strong> Desktop app displaying up to 12 graphs in a dynamic grid with auto-refresh, dark/light mode, crash auto-recovery, and Telegram alerts.</p>
                    <p><strong>Result:</strong> Continuous monitoring with zero manual intervention and instant crash notifications.</p>
                  </div>
                  <a href="https://github.com/mriazh/Automated-MRTG-Monitor" target="_blank" rel="noopener noreferrer" className="project-link">
                    View Repository →
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="footer" role="contentinfo">
        <div ref={footerRef} className={`footer-inner ${footerVis ? 'reveal' : ''}`}>
          <h2 className="footer-title">Let's Optimize<br />Your Network.</h2>
          <p className="footer-subtitle">Always open to discussing networking, automation, or new opportunities.</p>
          <div className="footer-links">
            <a href="mailto:mriyadhazhar@gmail.com" className="footer-link">
              <Mail className="footer-icon" aria-hidden="true" /> Email
            </a>
            <a href="https://www.linkedin.com/in/mriazh" target="_blank" rel="noopener noreferrer" className="footer-link">
              <Briefcase className="footer-icon" aria-hidden="true" /> LinkedIn
            </a>
            <a href="https://github.com/mriazh" target="_blank" rel="noopener noreferrer" className="footer-link">
              <GitBranch className="footer-icon" aria-hidden="true" /> GitHub
            </a>
            <a href="https://www.instagram.com/rapzzzzy" target="_blank" rel="noopener noreferrer" className="footer-link">
              <Camera className="footer-icon" aria-hidden="true" /> Instagram
            </a>
          </div>
          <p className="footer-copy">© 2026 M Riyadh Azhar. Built with React + Vite.</p>
        </div>
      </footer>
    </>
  );
}
