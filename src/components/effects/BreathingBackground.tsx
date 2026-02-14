'use client';

import React from 'react';
import LightRays from './LightRays';

/**
 * BreathingBackground Component
 * Light rays effect matching the homepage - exact same configuration
 */
export function BreathingBackground() {
  return (
    <>
      <div className="fixed inset-0 w-full h-screen z-[10] pointer-events-none mix-blend-screen opacity-75" aria-hidden="true">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffd966"
          raysSpeed={0.5}
          lightSpread={3.0}
          rayLength={5.0}
          pulsating={true}
          fadeDistance={1.5}
          saturation={1.8}
          distortion={0}
          noiseAmount={0}
        />
      </div>
    </>
  );
}

export default BreathingBackground;
