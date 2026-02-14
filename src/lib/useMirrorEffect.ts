import { useViewportScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

/**
 * Hook for mirror/blur effect - reveals clarity as user scrolls past a trigger point
 * Returns blur value (0-20) that decreases as user scrolls
 */
export function useMirrorEffect(): MotionValue<number> {
  const { scrollY } = useViewportScroll();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [triggerPoint, setTriggerPoint] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const elementTop = window.scrollY + rect.top;
    setTriggerPoint(elementTop);
  }, []);

  // Calculate blur amount: start at 20px, decrease to 0 as user scrolls past trigger
  const blur = useTransform(scrollY, [triggerPoint - 300, triggerPoint + 200], [20, 0], {
    clamp: true,
  });

  return blur;
}

/**
 * Alternative: useBlurTransition - smooth blur transition on element reveal
 * More flexible for multiple elements
 */
export function useBlurTransition(initialBlur = 20, finalBlur = 0) {
  const { scrollY } = useViewportScroll();
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [bounds, setBounds] = useState({ start: 0, end: 0 });

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const elementTop = window.scrollY + rect.top;
            const elementBottom = elementTop + rect.height;

            setBounds({
              start: elementTop - window.innerHeight,
              end: elementBottom,
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  const blur = useTransform(scrollY, [bounds.start, bounds.end], [initialBlur, finalBlur], {
    clamp: true,
  });

  return { blur, ref: elementRef };
}
