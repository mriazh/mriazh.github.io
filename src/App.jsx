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
          <a href="#contact" className="neo-btn" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
            Hire Me
          </a>
        </div>
      </nav>

      {/* Marquee Banner */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>NETWORK AUTOMATION • PYTHON • SELENIUM • MRTG MONITORING • INFRASTRUCTURE • CISCO • MIKROTIK • HUAWEI • NETWORK AUTOMATION • PYTHON • SELENIUM • MRTG MONITORING • INFRASTRUCTURE • CISCO • MIKROTIK • HUAWEI • NETWORK AUTOMATION • PYTHON • SELENIUM • MRTG MONITORING • INFRASTRUCTURE • CISCO • MIKROTIK • HUAWEI • NETWORK AUTOMATION • PYTHON • SELENIUM • MRTG MONITORING • INFRASTRUCTURE • CISCO • MIKROTIK • HUAWEI •&nbsp;</span>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-text">
            <div className="hero-badge">⚡ Status: Open to opportunities</div>
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
              <img src="/assets/avatar.jpg" alt="M Riyadh Azhar" loading="lazy" />
            </div>
            {/* Decorative stickers around avatar */}
            <div className="deco-sticker deco-sticker--1">MTCNA ✓</div>
            <div className="deco-sticker deco-sticker--2">🐍 Python</div>
            <div className="deco-sticker deco-sticker--3">📡 FTTH</div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section" style={{ background: 'var(--bg-surface)' }}>
          <div className="section-inner">
            <h2 className="section-title">Tech Arsenal</h2>
            <div className="skills-grid">
              {/* Networking */}
              <div className="neo-card skill-card">
                <div className="skill-card-header">
                  <h3>Networking</h3>
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
              <div className="neo-card skill-card" style={{ background: 'var(--accent-pink)', color: '#000000' }}>
                <div className="skill-card-header">
                  <h3 style={{ color: '#000000' }}>Automation</h3>
                  <span className="skill-card-badge">Focus</span>
                </div>
                <ul className="skill-list">
                  <li>Python (Selenium, PySide6)</li>
                  <li>PaddleOCR / Image Processing</li>
                  <li>Browser Automation</li>
                  <li>Excel Report Generation</li>
                  <li>Git / GitHub</li>
                </ul>
              </div>

              {/* Tools */}
              <div className="neo-card skill-card">
                <div className="skill-card-header">
                  <h3>Systems & Tools</h3>
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
        <section id="projects" className="section">
          <div className="section-inner">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-list">

              {/* Project 1 */}
              <div className="project-card">
                <div className="project-metric" style={{ background: 'var(--accent-green)' }}>
                  <div className="number">95%</div>
                  <div className="label">Time Saved</div>
                </div>
                <div className="project-body">
                  <h3>🤖 Automated Daily MRTG Screenshot</h3>
                  <div className="project-tags">
                    <span>Python</span>
                    <span>Selenium</span>
                    <span>PySide6</span>
                  </div>
                  <div className="project-details">
                    <p><strong>Problem:</strong> Manually screenshotting 16+ MRTG graphs daily across date ranges took 2+ hours and was error-prone.</p>
                    <p><strong>Solution:</strong> Built a bot with auto-retry, image quality validation (YCbCr analysis), and Nuclear Isolation Protocol for pixel-perfect captures.</p>
                    <p><strong>Result:</strong> Entire batch completes unattended in ~15 minutes with 0% missed graphs.</p>
                  </div>
                  <a href="https://github.com/mriazh/Automated-Daily-MRTG-Telkom-in-GMF" target="_blank" rel="noopener noreferrer" className="project-link">
                    View Repository →
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-card">
                <div className="project-metric" style={{ background: 'var(--accent-yellow)' }}>
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

              {/* Project 3 */}
              <div className="project-card">
                <div className="project-metric" style={{ background: 'var(--accent-pink)' }}>
                  <div className="number">10x</div>
                  <div className="label">Faster Reporting</div>
                </div>
                <div className="project-body">
                  <h3>📊 MRTG to Excel Report Generator</h3>
                  <div className="project-tags">
                    <span>Python</span>
                    <span>PaddleOCR</span>
                    <span>openpyxl</span>
                  </div>
                  <div className="project-details">
                    <p><strong>Problem:</strong> Monthly bandwidth reports required manually reading values from 480+ graph images and typing them into Excel.</p>
                    <p><strong>Solution:</strong> OCR engine that extracts Current/Avg/Max values from MRTG images and auto-populates Excel templates with data + resized images.</p>
                    <p><strong>Result:</strong> Full monthly report generated in minutes instead of days, with smart N/A detection for audit review.</p>
                  </div>
                  <a href="https://github.com/mriazh/Automated-MRTG-to-Excel-Report" target="_blank" rel="noopener noreferrer" className="project-link">
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
        <h2 className="footer-title">Let's Optimize<br />Your Network.</h2>
        <div className="footer-links">
          <a href="mailto:mriyadhazhar@gmail.com" className="footer-link">Email</a>
          <a href="https://www.linkedin.com/in/mriazh" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="https://github.com/mriazh" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href="https://www.instagram.com/rapzzzzy" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
        </div>
        <p className="footer-copy">© 2026 M Riyadh Azhar. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
