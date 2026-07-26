import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getVisibleFocusableElements(container) {
  if (!container) return [];
  const elements = Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR));
  return elements.filter((el) => {
    if (el.getAttribute('aria-hidden') === 'true') return false;
    const style = window.getComputedStyle(el);
    return style.display !== 'none' && style.visibility !== 'hidden';
  });
}

export default function MobileMenu({ isOpen, onClose, triggerRef }) {
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    const focusableElements = getVisibleFocusableElements(menu);
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const currentFocusables = getVisibleFocusableElements(menu);
      if (currentFocusables.length === 0) {
        e.preventDefault();
        return;
      }

      const firstElement = currentFocusables[0];
      const lastElement = currentFocusables[currentFocusables.length - 1];

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

    const panel = menu.querySelector('.mobile-nav-links');
    const handleClickOutside = (event) => {
      const t = event.target;
      const outsidePanel = panel && !panel.contains(t);
      const outsideTrigger = triggerRef.current && !triggerRef.current.contains(t);
      if (outsidePanel && outsideTrigger) {
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
      onClick={(e) => {
        if (e.target === menuRef.current) {
          onClose();
        }
      }}
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
