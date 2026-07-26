import { useState, useEffect, useRef } from 'react';
import './index.css';
import { useMobileMenu } from './hooks/useMobileMenu';
import { useReducedMotion } from './hooks/useReducedMotion';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactFooter from './components/ContactFooter';

export default function App() {
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
      const trigger = menuTriggerRef.current;
      requestAnimationFrame(() => trigger.focus());
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
        <Hero />

        <div className="section-divider">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L1440,60 L0,60 Z" fill="var(--accent-yellow)" />
          </svg>
        </div>

        <SkillsSection />

        <div className="section-divider section-divider--flip">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L1440,0 L1440,60 Z" fill="var(--accent-yellow)" />
          </svg>
        </div>

        <ProjectsSection />
      </main>

      <ContactFooter />
    </>
  );
}
