import { useEffect, useRef } from 'react';

export default function MobileMenu({ isOpen, onClose, triggerRef }) {
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const menu = menuRef.current;
    
    // Trap focus
    const focusableElements = menu.querySelectorAll('a, button');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    menu.addEventListener('keydown', handleKeyDown);
    firstElement.focus();

    // Backdrop click
    const handleClickOutside = (event) => {
      if (menu && !menu.contains(event.target) && triggerRef.current && !triggerRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      menu.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div 
      className="mobile-menu" 
      id="mobile-menu" 
      ref={menuRef} 
      role="dialog" 
      aria-modal="true" 
      aria-label="Mobile navigation"
    >
      <ul className="mobile-nav-links">
        <li><a href="#skills" onClick={onClose}>Arsenal</a></li>
        <li><a href="#projects" onClick={onClose}>Projects</a></li>
        <li><a href="#contact" onClick={onClose}>Contact</a></li>
        <li><a href="/assets/CV.pdf" target="_blank" rel="noopener noreferrer" onClick={onClose}>Download CV</a></li>
      </ul>
    </div>
  );
}
