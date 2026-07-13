export default function Navbar({ navScrolled, toggleMobileMenu, isOpen, menuTriggerRef }) {
  return (
    <nav className={`navbar ${navScrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-content">
        <span className="nav-logo">MRIAZH<span className="nav-logo-dot">.</span></span>
        
        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-menu-toggle" 
          ref={menuTriggerRef}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={toggleMobileMenu}
        >
          <span className="hamburger" aria-hidden="true"></span>
        </button>

        <ul className="nav-links">
          <li><a href="#skills">Arsenal</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/assets/CV.pdf" target="_blank" rel="noopener noreferrer">Download CV</a></li>
        </ul>
      </div>
    </nav>
  );
}
