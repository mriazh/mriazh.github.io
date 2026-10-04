import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const [titleRef, titleVis] = useScrollReveal({ rootMargin: '0px 0px -100px 0px' });
  const [descRef, descVis] = useScrollReveal({ rootMargin: '0px 0px -50px 0px' });

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" aria-hidden="true" />
          <span>Creative Infrastructure Console</span>
        </div>
        <h1 ref={titleRef} id="hero-title" className={`hero-title ${titleVis ? 'reveal' : ''}`}>
          Bridging Aviation-Grade Infrastructure<br />
          with <span className="highlight">Autonomous Daemons</span> & <span className="highlight">Applied AI</span>
        </h1>
        <p ref={descRef} className={`hero-description ${descVis ? 'reveal' : ''}`}>
          Network Support Engineer at GMF AeroAsia — Building 24/7 Debian daemons, RouterOS telemetry platforms,
          enterprise switch auditors (328 tests), and upstream Go contributions (9router-go SSRF dialer, SQLite compaction).
        </p>
      </div>
    </section>
  );
}