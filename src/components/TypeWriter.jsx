import { useState, useEffect } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function TypeWriter({ text, speed = 35, delay = 0 }) {
  const [animatedDisplayed, setAnimatedDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    if (index < text.length) {
      const timer = setTimeout(() => {
        setAnimatedDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, index === 0 ? delay : speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed, delay, shouldReduceMotion]);

  const displayed = shouldReduceMotion ? text : animatedDisplayed;

  return (
    <span>
      {displayed}
      {!shouldReduceMotion && index < text.length && <span className="typewriter-cursor" aria-hidden="true">|</span>}
    </span>
  );
}
