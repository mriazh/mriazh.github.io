import TypeWriter from './TypeWriter';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-text">
        <span className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          Enterprise Network &amp; AI Automation Engineer
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
      </div>
    </section>
  );
}