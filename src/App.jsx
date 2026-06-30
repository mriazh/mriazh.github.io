import "./index.css";

function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo">mriazh</div>
          <ul className="nav-links">
            <li><a href="#skills">Stack</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="neo-btn neo-btn--nav">
            Hire Me
          </a>
        </div>
      </nav>

      {/* Marquee Banner */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>NETWORK AUTOMATION • PYTHON • SELENIUM • MRTG MONITORING • CISCO • MIKROTIK • HUAWEI • SSH • LLDP • FTTH • GPON • INFRASTRUCTURE • NETWORK AUTOMATION • PYTHON • SELENIUM • MRTG MONITORING • CISCO • MIKROTIK • HUAWEI • SSH • LLDP • FTTH • GPON • INFRASTRUCTURE • NETWORK AUTOMATION • PYTHON • SELENIUM • MRTG MONITORING • CISCO • MIKROTIK • HUAWEI • SSH • LLDP • FTTH • GPON • INFRASTRUCTURE •&nbsp;</span>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-text">
            <div className="hero-badge">⚡ Open to opportunities</div>
            <h1>
              Network<br />
              Support<br />
              <span className="highlight">Engineer.</span>
            </h1>
            <p className="hero-description">
              M Riyadh Azhar — turning slow manual network tasks
              into precise, reliable automation scripts.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="neo-btn">View Projects</a>
              <a href="https://github.com/mriazh" target="_blank" rel="noopener noreferrer" className="neo-btn neo-btn--outline">
                GitHub →
              </a>
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
            <div className="deco-sticker deco-sticker--1">🎓 MTCNA</div>
            <div className="deco-sticker deco-sticker--2">🐍 Python</div>
            <div className="deco-sticker deco-sticker--3">📡 FTTH</div>
            <div className="deco-sticker deco-sticker--4">🔧 Cisco</div>
          </div>
        </section>

        {/* Skills Section — YELLOW BACKGROUND */}
        <section id="skills" className="section section--yellow">
          <div className="section-inner">
            <h2 className="section-title">Tech Arsenal</h2>
            <div className="skills-bento">
              {/* Big card — Networking */}
              <div className="neo-card skill-card skill-card--large">
                <div className="skill-card-header">
                  <h3>🌐 Networking</h3>
                  <span className="skill-card-badge">Core</span>
                </div>
                <ul className="skill-list">
                  <li>TCP/IP, DNS, DHCP</li>
                  <li>VLAN, STP, LACP</li>
                  <li>Cisco, MikroTik, Huawei</li>
                  <li>FTTH / GPON</li>
                  <li>Wireless & Mesh Networks</li>
                  <li>MikroTik RouterOS</li>
                </ul>
              </div>

              {/* Automation */}
              <div className="neo-card skill-card skill-card--accent">
                <div className="skill-card-header">
                  <h3>🤖 Automation</h3>
                  <span className="skill-card-badge skill-card-badge--dark">Focus</span>
                </div>
                <ul className="skill-list">
                  <li>Python (Selenium, PySide6)</li>
                  <li>PaddleOCR / Image Processing</li>
                  <li>Browser Automation</li>
                  <li>Excel Report Generation</li>
                  <li>SSH Automation (Paramiko)</li>
                  <li>Git / GitHub</li>
                </ul>
              </div>

              {/* Systems & Tools */}
              <div className="neo-card skill-card">
                <div className="skill-card-header">
                  <h3>🛠️ Systems & Tools</h3>
                  <span className="skill-card-badge">Support</span>
                </div>
                <ul className="skill-list">
                  <li>Windows & macOS (Troubleshooting)</li>
                  <li>Linux (Ubuntu, CLI)</li>
                  <li>React.js / Node.js</li>
                  <li>OPM & OTDR (Fiber)</li>
                  <li>PyInstaller (.exe builds)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section section--dark">
          <div className="section-inner">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-list">

              {/* Project 1 — WAC Huawei (newest, most impressive) */}
              <div className="project-card">
                <div className="project-metric project-metric--green">
                  <div className="number">451</div>
                  <div className="label">APs Crawled</div>
                </div>
                <div className="project-body">
                  <h3>📡 WAC Huawei LLDP Crawler</h3>
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
              <div className="project-card">
                <div className="project-metric project-metric--yellow">
                  <div className="number">E2E</div>
                  <div className="label">Full Pipeline</div>
                </div>
                <div className="project-body">
                  <h3>📊 MRTG TelkomCare Report Automation</h3>
                  <div className="project-tags">
                    <span>Python</span>
                    <span>Selenium</span>
                    <span>PySide6</span>
                    <span>PaddleOCR</span>
                    <span>openpyxl</span>
                  </div>
                  <div className="project-details">
                    <p><strong>Problem:</strong> Scraping 16+ MRTG graphs daily, reading bandwidth values from 480+ images, and compiling Excel reports was a multi-hour, error-prone manual process.</p>
                    <p><strong>Solution:</strong> Unified end-to-end pipeline with GUI & CLI — auto-scrapes graphs from TelkomCare (with retry & image validation), then uses AI-powered OCR to extract data and generate formatted Excel reports.</p>
                    <p><strong>Result:</strong> Entire workflow from scraping to final report runs unattended. Supports resume-on-failure, Windows installer, and portable distribution.</p>
                  </div>
                  <a href="https://github.com/mriazh/MRTG-TelkomCare-Report-Automation" target="_blank" rel="noopener noreferrer" className="project-link">
                    View Repository →
                  </a>
                </div>
              </div>

              {/* Project 3 — Live Monitor */}
              <div className="project-card">
                <div className="project-metric project-metric--blue">
                  <div className="number">24/7</div>
                  <div className="label">Live Monitoring</div>
                </div>
                <div className="project-body">
                  <h3>📺 MRTG Live Monitor Dashboard</h3>
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
      <footer id="contact" className="footer">
        <div className="footer-inner">
          <h2 className="footer-title">Let's Optimize<br />Your Network.</h2>
          <p className="footer-subtitle">Always open to discussing networking, automation, or new opportunities.</p>
          <div className="footer-links">
            <a href="mailto:mriyadhazhar@gmail.com" className="footer-link">✉️ Email</a>
            <a href="https://www.linkedin.com/in/mriazh" target="_blank" rel="noopener noreferrer" className="footer-link">💼 LinkedIn</a>
            <a href="https://github.com/mriazh" target="_blank" rel="noopener noreferrer" className="footer-link">🐙 GitHub</a>
            <a href="https://www.instagram.com/rapzzzzy" target="_blank" rel="noopener noreferrer" className="footer-link">📷 Instagram</a>
          </div>
          <p className="footer-copy">© 2026 M Riyadh Azhar. Built with React + Vite.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
