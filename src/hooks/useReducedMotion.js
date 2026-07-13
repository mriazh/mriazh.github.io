import { useState, useEffect } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(QUERY).matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    const handler = (event) => setShouldReduceMotion(event.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return shouldReduceMotion;
}
