import { useState, useEffect, useRef } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Typed from "typed.js";
import './index.css';

function App() {
  const [init, setInit] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const typedEl = useRef(null);

  useEffect(() => {
    // Initialize Particles
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // Initialize Typed.js
    const typed = new Typed(typedEl.current, {
      strings: [
        'Automating the boring stuff.',
        'Focusing on what matters.',
        'Managing airport network infrastructure.',
        'Python and Network Enthusiast.'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      smartBackspace: false
    });

    // Navbar Scroll Effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Fade-in Animation Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      typed.destroy();
      window.removeEventListener('scroll', handleScroll);
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const particlesConfig = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 60,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#00e5ff" },
      links: {
        enable: true,
        color: "#0077ff",
        distance: 150,
        opacity: 0.5,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "bounce" }
      },
      size: { value: 3, random: true },
      opacity: { value: 0.7 }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: ["grab", "attract"]
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 250,
          links: { opacity: 0.8 }
        },
        attract: {
          distance: 250,
          duration: 0.4,
          factor: 3
        }
      }
    },
    detectRetina: true,
    background: {
      color: "transparent"
    }
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={particlesConfig}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            pointerEvents: 'auto'
          }}
        />
      )}

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">&lt;mriazh/&gt;</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero fade-in">
          <div className="hero-content">
            <div className="avatar-container">
              <div className="avatar-wrapper">
                <img src="/assets/avatar.jpg" alt="M Riyadh Azhar" className="avatar" />
                <div className="avatar-overlay"></div>
              </div>
              <div className="glow"></div>
            </div>
            <h1 className="glitch" data-text="Hey, I'm Arap! 👋">Hey, I'm Arap! 👋</h1>
            <h2 className="subtitle">Network Support @ GMF AeroAsia</h2>
            <p className="tagline"><span ref={typedEl}></span></p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about section fade-in">
          <h2 className="section-title">🧑‍💻 About Me</h2>
          <div className="about-grid">
            <div className="about-card glass">
              <div className="icon">🔧</div>
              <h3>Network Infrastructure</h3>
              <p>Managing network monitoring, topology updates, switch patching, VLAN configuration, and server rack maintenance in an enterprise airport environment.</p>
            </div>
            <div className="about-card glass">
              <div className="icon">🌐</div>
              <h3>Wireless &amp; LAN</h3>
              <p>Experienced in deploying and configuring new Wi-Fi and LAN devices, as well as troubleshooting complex network connections across the facility.</p>
            </div>
            <div className="about-card glass">
              <div className="icon">🤖</div>
              <h3>Python Automation</h3>
              <p>Building specialized automation tools with Python to speed up MRTG monitoring, data extraction via OCR, and automated reporting workflows.</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills section fade-in">
          <h2 className="section-title">🛠️ Tech Stack</h2>
          <div className="skills-container">
            <div className="skill-category glass">
              <h3>Programming &amp; Web</h3>
              <div className="skill-tags">
                <span className="tag">Python</span>
                <span className="tag">JavaScript</span>
                <span className="tag">React</span>
                <span className="tag">PHP</span>
                <span className="tag">HTML5</span>
                <span className="tag">CSS3</span>
                <span className="tag">Bash</span>
              </div>
            </div>
            <div className="skill-category glass">
              <h3>Networking</h3>
              <div className="skill-tags">
                <span className="tag">Cisco</span>
                <span className="tag">MikroTik</span>
                <span className="tag">Huawei</span>
                <span className="tag">Network Automation</span>
              </div>
            </div>
            <div className="skill-category glass">
              <h3>Tools &amp; Databases</h3>
              <div className="skill-tags">
                <span className="tag">Selenium</span>
                <span className="tag">Tkinter</span>
                <span className="tag">SQLite</span>
                <span className="tag">MySQL</span>
                <span className="tag">Excel Automation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects section fade-in">
          <h2 className="section-title">🚀 Featured Projects</h2>
          <div className="projects-grid">
            <a href="https://github.com/mriazh/Automated-Daily-MRTG-Telkom-in-GMF" target="_blank" rel="noreferrer" className="project-card glass">
              <h3>📊 Automated Daily MRTG</h3>
              <p>Automated daily MRTG graph screenshot capture from TelkomCare with OCR validation and auto-retry mechanism.</p>
              <span className="tech-used">Python, Selenium, OCR</span>
            </a>
            <a href="https://github.com/mriazh/Automated-MRTG-to-Excel-Report" target="_blank" rel="noreferrer" className="project-card glass">
              <h3>📊 MRTG to Excel Report</h3>
              <p>Extracts bandwidth data from MRTG images via OCR and populates monthly Excel report templates automatically.</p>
              <span className="tech-used">Python, Excel Automation</span>
            </a>
            <a href="https://github.com/mriazh/Automated-MRTG-to-Excel-Report-just_img" target="_blank" rel="noreferrer" className="project-card glass">
              <h3>🖼️ MRTG to Excel (Image)</h3>
              <p>Precisely resizes and inserts MRTG graph images directly into Excel report templates — fast and lightweight.</p>
              <span className="tech-used">Python, OpenPyXL</span>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact section fade-in">
          <h2 className="section-title">📬 Get In Touch</h2>
          <div className="contact-card glass">
            <p>I'm always open to discussing networking, automation, or new opportunities.</p>
            <div className="social-links">
              <a href="https://github.com/mriazh" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/mriazh" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
              <a href="mailto:mriyadhazhar@gmail.com" className="social-btn" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 M Riyadh Azhar. Built with ❤️ and React.js / Vite.</p>
      </footer>
    </>
  );
}

export default App;
