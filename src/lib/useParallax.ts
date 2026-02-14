import { useViewportScroll, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Custom hook for parallax text effect
 * Headings move slower than page scroll, creating depth illusion
 */
export function useParallaxText(offset = 0.3) {
  const { scrollY } = useViewportScroll();
  const [y, setY] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setY(latest * offset);
    });

    return () => unsubscribe();
  }, [scrollY, offset]);

  return y;
}

/**
 * Alternative parallax using MotionValue for better performance
 * Returns a MotionValue that can be used with motion.div
 */
export function useParallaxMotionValue(offset = 0.3): MotionValue<number> {
  const { scrollY } = useViewportScroll();
  return useTransform(scrollY, (value) => value * offset);
}

/**
 * Hook for scroll-linked animations
 * Returns scroll progress (0-1) over a specific element or viewport region
 */
export function useScrollProgress() {
  const { scrollY } = useViewportScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
      const docHeight = typeof document !== 'undefined' ? document.documentElement.scrollHeight : 0;
      const scrollableHeight = docHeight - windowHeight;
      const currentProgress = scrollableHeight > 0 ? latest / scrollableHeight : 0;
      setProgress(Math.min(currentProgress, 1));
    });

    return () => unsubscribe();
  }, [scrollY]);

  return progress;
}
