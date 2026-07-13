import { useState, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useCountUp(target, duration = 2000, delay = 0) {
  const shouldReduceMotion = useReducedMotion();
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion || isNaN(Number(target))) return;

    const targetNum = Number(target);
    const startTime = performance.now() + delay;
    
    let animationFrame;
    function animate(now) {
      if (now < startTime) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }
      const elapsed = Math.min(now - startTime, duration);
      const value = (elapsed / duration) * targetNum;
      setAnimatedCount(Math.floor(value));
      if (elapsed < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    }
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, delay, shouldReduceMotion]);

  const count = (shouldReduceMotion || isNaN(Number(target))) ? target : animatedCount;
  return count;
}
