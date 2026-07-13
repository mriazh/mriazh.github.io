import { useState, useEffect, useRef } from 'react';
import {
  Globe,
  Network,
  BarChart3,
  MonitorPlay,
  Mail,
  Briefcase,
  GitBranch,
  Camera,
  Code2,
  Server,
  Zap,
  Laptop,
  Smartphone,
  Router,
  FileCode,
  Terminal,
  Wifi,
  Bot,
  Monitor,
  Rocket,
  Shield,
  Cpu,
} from 'lucide-react';
import './index.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useMobileMenu } from './hooks/useMobileMenu';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import CountUp from './components/CountUp';
import { useReducedMotion } from './hooks/useReducedMotion';


// --- App Component ---
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

  // Mobile menu
  const { isOpen, toggle, close } = useMobileMenu();
  const menuTriggerRef = useRef(null);
  const wasOpen = useRef(false);

  // Return focus on close
  useEffect(() => {
    if (isOpen) {
      wasOpen.current = true;
    } else if (wasOpen.current && menuTriggerRef.current) {
      menuTriggerRef.current.focus();
      wasOpen.current = false;
    }
  }, [isOpen]);

  // Cursor glow follower
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();
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
        </div>
      </header>

      <Navbar navScrolled={navScrolled} toggleMobileMenu={toggle} isOpen={isOpen} menuTriggerRef={menuTriggerRef} />
      <MobileMenu isOpen={isOpen} onClose={close} triggerRef={menuTriggerRef} />

<main>
        <Hero/>

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
                    <p><strong>Solution:</strong> Unified end-to-end pipeline with GUI & CLI — automatically scrapes graphs from TelkomCare (with retry & image validation), then uses AI-powered OCR to extract data and generate formatted Excel reports.</p>
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
