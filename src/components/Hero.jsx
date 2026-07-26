import { Zap } from 'lucide-react';
import TypeWriter from './TypeWriter';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-text">
        <span className="hero-badge">
          <Zap className="badge-icon" aria-hidden="true" /> Network Automation Engineer
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
          <Zap className="sticker-icon" aria-hidden="true" /> MTCNA
        </div>
        <div className="deco-sticker deco-sticker--2">
          <Zap className="sticker-icon" aria-hidden="true" /> Python
        </div>
        <div className="deco-sticker deco-sticker--3">
          <Zap className="sticker-icon" aria-hidden="true" /> FTTH
        </div>
        <div className="deco-sticker deco-sticker--4">
          <Zap className="sticker-icon" aria-hidden="true" /> Cisco
        </div>
      </div>
    </section>
  );
}
