import { useState, useEffect, useRef } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Typed from "typed.js";
import './index.css';

function App() {
  const [init, setInit] = useState(false);
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

    // Navbar Scroll Effect (vanilla JS to avoid re-render)
    const handleScroll = () => {
      const nav = document.querySelector('.navbar');
      if (!nav) return;
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Fade-in Animation Observer
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

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
        value: 45,
        density: { enable: true, value_area: 900 }
      },
      color: { value: "#38BDF8" },
      links: {
        enable: true,
        color: "#1E40AF",
        distance: 160,
        opacity: 0.35,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "bounce" }
      },
      size: { value: 2.5, random: true },
      opacity: { value: 0.5 }
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
          distance: 200,
          links: { opacity: 0.6 }
        },
        attract: {
          distance: 200,
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

      <nav className="navbar">
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
              </div>
            </div>
            <h1 className="glitch">Hey, I'm Arap.</h1>
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
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-card card">
              <div className="icon">🔧</div>
              <h3>Network Infrastructure</h3>
              <p>Managing network monitoring, topology updates, switch patching, VLAN configuration, and server rack maintenance in an enterprise airport environment.</p>
            </div>
            <div className="about-card card">
              <div className="icon">🌐</div>
              <h3>Wireless &amp; LAN</h3>
              <p>Experienced in deploying and configuring new Wi-Fi and LAN devices, as well as troubleshooting complex network connections across the facility.</p>
            </div>
            <div className="about-card card">
              <div className="icon">🤖</div>
              <h3>Python Automation</h3>
              <p>Building specialized automation tools with Python to speed up MRTG monitoring, data extraction via OCR, and automated reporting workflows.</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills section fade-in">
          <h2 className="section-title">Tech Stack</h2>
          <div className="skills-container">
            <div className="skill-category card">
              <h3>Programming</h3>
              <div className="skill-tags">
                <span className="tag"><i className="devicon-python-plain"></i> Python</span>
                <span className="tag"><i className="devicon-javascript-plain"></i> JavaScript</span>
                <span className="tag"><i className="devicon-react-original"></i> React</span>
                <span className="tag"><i className="devicon-php-plain"></i> PHP</span>
                <span className="tag"><i className="devicon-html5-plain"></i> HTML5</span>
                <span className="tag"><i className="devicon-css3-plain"></i> CSS3</span>
                <span className="tag"><i className="devicon-bash-plain"></i> Bash</span>
              </div>
            </div>
            <div className="skill-category card">
              <h3>Networking</h3>
              <div className="skill-tags">
                <span className="tag"><svg className="tag-icon tag-icon--wide" viewBox="-0.5 5.5 25 7" fill="currentColor"><path d="M22.961 10.728a.52.52 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M20.117 10.728a.522.522 0 001.041 0V8.139a.521.521 0 00-1.04 0v2.589M17.231 11.771a.521.521 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M14.393 10.728a.521.521 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M11.494 10.728a.522.522 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M8.624 10.728a.52.52 0 001.039 0V8.139a.52.52 0 00-1.039 0v2.589M5.737 11.771a.52.52 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M2.876 10.728a.522.522 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M0 10.728a.521.521 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155"/></svg> Cisco</span>
                <span className="tag"><svg className="tag-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M23.041 6.188a1.404 1.404 0 0 0-.218-.36c-.24-.296-.634-.586-1.14-.864l-4.052-2.22L13.576.519C13.074.243 12.61.065 12.22.013A1.772 1.772 0 0 0 12 0c-.432 0-.974.192-1.576.52L6.37 2.74 2.317 4.96c-.504.279-.9.569-1.14.867a1.59 1.59 0 0 0-.122.17 1.654 1.654 0 0 0-.096.19c-.15.348-.22.816-.22 1.368v8.887c0 .66.1 1.2.316 1.558.216.356.66.706 1.262 1.036l4.054 2.22 4.053 2.223c.504.276.966.456 1.36.506.145.02.291.02.436 0 .39-.05.852-.228 1.356-.506l8.107-4.443c.6-.33 1.046-.68 1.262-1.036.036-.06.068-.123.096-.188.15-.348.22-.818.22-1.37V7.556c0-.552-.07-1.02-.22-1.368zM7.233 16.618c0 .2-.218.33-.396.233l-1.45-.796a1.066 1.066 0 0 1-.552-.934v-4.296c0-.2.216-.33.394-.235l1.728.947a.53.53 0 0 1 .276.468v4.612zm11.934-1.497c0 .39-.213.748-.554.936l-1.45.794a.266.266 0 0 1-.394-.234v-5.692c0-.2-.217-.33-.395-.232l-2.62 1.434c-.34.187-.552.545-.552.934v5.646a.532.532 0 0 1-.278.468l-.41.224c-.32.176-.707.176-1.026 0l-.408-.224a.532.532 0 0 1-.278-.468v-5.646c0-.389-.212-.747-.552-.934L4.835 9.16v-.28c0-.388.212-.746.552-.934l.6-.328a1.064 1.064 0 0 1 1.022 0l4.48 2.452c.318.176.704.176 1.021 0l2.07-1.134a.266.266 0 0 0 0-.468L9.932 5.922a.266.266 0 0 1 0-.468l1.556-.852c.32-.176.707-.176 1.026 0l6.1 3.34c.342.188.554.547.553.936v6.243z"/></svg> MikroTik</span>
                <span className="tag"><svg className="tag-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M3.67 6.14S1.82 7.91 1.72 9.78v.35c.08 1.51 1.22 2.4 1.22 2.4 1.83 1.79 6.26 4.04 7.3 4.55 0 0 .06.03.1-.01l.02-.04v-.04C7.52 10.8 3.67 6.14 3.67 6.14zM9.65 18.6c-.02-.08-.1-.08-.1-.08l-7.38.26c.8 1.43 2.15 2.53 3.56 2.2.96-.25 3.16-1.78 3.88-2.3.06-.05.04-.09.04-.09zm.08-.78C6.49 15.63.21 12.28.21 12.28c-.15.46-.2.9-.21 1.3v.07c0 1.07.4 1.82.4 1.82.8 1.69 2.34 2.2 2.34 2.2.7.3 1.4.31 1.4.31.12.02 4.4 0 5.54 0 .05 0 .08-.05.08-.05v-.06c0-.03-.03-.05-.03-.05zM9.06 3.19a3.42 3.42 0 00-2.57 3.15v.41c.03.6.16 1.05.16 1.05.66 2.9 3.86 7.65 4.55 8.65.05.05.1.03.1.03a.1.1 0 00.06-.1c1.06-10.6-1.11-13.42-1.11-13.42-.32.02-1.19.23-1.19.23zm8.299 2.27s-.49-1.8-2.44-2.28c0 0-.57-.14-1.17-.22 0 0-2.18 2.81-1.12 13.43.01.07.06.08.06.08.07.03.1-.03.1-.03.72-1.03 3.9-5.76 4.55-8.64 0 0 .36-1.4.02-2.34zm-2.92 13.07s-.07 0-.09.05c0 0-.01.07.03.1.7.51 2.85 2 3.88 2.3 0 0 .16.05.43.06h.14c.69-.02 1.9-.37 3-2.26l-7.4-.25zm7.83-8.41c.14-2.06-1.94-3.97-1.94-3.98 0 0-3.85 4.66-6.67 10.8 0 0-.03.08.02.13l.04.01h.06c1.06-.53 5.46-2.77 7.28-4.54 0 0 1.15-.93 1.21-2.42zm1.52 2.14s-6.28 3.37-9.52 5.55c0 0-.05.04-.03.11 0 0 .03.06.07.06 1.16 0 5.56 0 5.67-.02 0 0 .57-.02 1.27-.29 0 0 1.56-.5 2.37-2.27 0 0 .73-1.45.17-3.14z"/></svg> Huawei</span>
                <span className="tag"><i className="devicon-ansible-plain"></i> Network Automation</span>
              </div>
            </div>
            <div className="skill-category card">
              <h3>Tools &amp; Databases</h3>
              <div className="skill-tags">
                <span className="tag"><i className="devicon-selenium-original"></i> Selenium</span>
                <span className="tag"><i className="devicon-python-plain"></i> Tkinter</span>
                <span className="tag"><i className="devicon-sqlite-plain"></i> SQLite</span>
                <span className="tag"><i className="devicon-mysql-plain"></i> MySQL</span>
                <span className="tag"><svg className="tag-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M21.17 3.25Q21.5 3.25 21.76 3.5 22 3.74 22 4.08V19.92Q22 20.26 21.76 20.5 21.5 20.75 21.17 20.75H7.83Q7.5 20.75 7.24 20.5 7 20.26 7 19.92V17H2.83Q2.5 17 2.24 16.76 2 16.5 2 16.17V7.83Q2 7.5 2.24 7.24 2.5 7 2.83 7H7V4.08Q7 3.74 7.24 3.5 7.5 3.25 7.83 3.25M7 13.06L8.18 15.28H9.97L8 12.06L9.93 8.89H8.22L7.13 10.9L7.09 10.96L7.06 11.03Q6.8 10.5 6.5 9.96 6.25 9.43 5.97 8.89H4.16L6.05 12.08L4 15.28H5.78M13.88 19.5V17H8.25V19.5M13.88 15.75V12.63H12V15.75M13.88 11.38V8.25H12V11.38M13.88 7V4.5H8.25V7M20.75 19.5V17H15.13V19.5M20.75 15.75V12.63H15.13V15.75M20.75 11.38V8.25H15.13V11.38M20.75 7V4.5H15.13V7Z"/></svg> Excel Automation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects section fade-in">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <a href="https://github.com/mriazh/Automated-Daily-MRTG-Telkom-in-GMF" target="_blank" rel="noreferrer" className="project-card card">
              <h3>Automated Daily MRTG</h3>
              <p>Automated daily MRTG graph screenshot capture from TelkomCare with OCR validation and auto-retry mechanism.</p>
              <span className="tech-used">Python · Selenium · OCR</span>
            </a>
            <a href="https://github.com/mriazh/Automated-MRTG-to-Excel-Report" target="_blank" rel="noreferrer" className="project-card card">
              <h3>Automated MRTG to Excel Report</h3>
              <p>All-in-one automation: Extracts bandwidth data via OCR and seamlessly inserts perfectly resized MRTG graph images into monthly Excel templates.</p>
              <span className="tech-used">Python · OCR · Excel Automation</span>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact section fade-in">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-card card">
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
              <a href="https://www.instagram.com/rapzzzzy" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Instagram
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
        <p>© 2026 M Riyadh Azhar. Built with React.js and Vite.</p>
      </footer>
    </>
  );
}

export default App;
