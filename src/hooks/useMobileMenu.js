import { useState, useEffect, useCallback } from 'react';

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  useEffect(() => {
    if (isOpen) {
      // Store original
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      
      const handleEscape = (e) => {
        if (e.key === 'Escape') close();
      };
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.body.style.overflow = originalStyle;
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, close]);

  return { isOpen, open, close, toggle };
}
