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

      <Navbar navScrolled={navScrolled} toggleMobileMenu={toggle} isOpen={isOpen} menuTriggerRef={menuTriggerRef} />
      <MobileMenu isOpen={isOpen} onClose={close} triggerRef={menuTriggerRef} />

      <main>
        <Hero />
        <SkillsSection />
        <ProjectsSection />
      </main>

      <ContactFooter />
    </>
  );
}
