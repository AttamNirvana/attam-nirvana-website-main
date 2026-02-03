'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

interface LenisProviderProps {
  children: ReactNode;
}

/**
 * LenisProvider - Smooth Scrolling Wrapper
 * 
 * Provides premium smooth scrolling experience using Lenis library.
 * Configured for optimal performance and feel.
 * 
 * @param children - React children to wrap
 */
export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimal settings
    lenisRef.current = new Lenis({
      duration: 1.2,        // Scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,    // Enable smooth wheel scrolling
      touchMultiplier: 2,   // Touch sensitivity
      wheelMultiplier: 1,   // Wheel sensitivity
      infinite: false,
    });

    // Animation frame loop for smooth updates
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
