'use client';

import React, { useState, useEffect } from 'react';
import { getAboutData, AboutPageData } from '@/lib/aboutData';
import { BreathingBackground } from '@/components/effects/BreathingBackground';
import { AudioToggle } from '@/components/ui/AudioToggle';
import { AboutHeroSection } from '@/components/sections/AboutHeroSection';
import { NarrativeArcSection } from '@/components/sections/NarrativeArcSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { CredentialsSection } from '@/components/sections/CredentialsSection';
import { OfferingsSectionNew } from '@/components/sections/OfferingsSectionNew';
import { AboutCTASection } from '@/components/sections/AboutCTASection';

/**
 * AboutPageContent Component
 * Main composition of all scrollytelling sections
 * Loads data from JSON and orchestrates the immersive narrative experience
 */
export default function AboutPageContent() {
  const [data, setData] = useState<AboutPageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load JSON data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutData = await getAboutData();
        setData(aboutData);
      } catch (err) {
        console.error('Failed to load about data:', err);
        setError('Failed to load content');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary-700 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-primary-700 flex items-center justify-center">
        <div className="text-gray-400">{error || 'Failed to load content'}</div>
      </div>
    );
  }

  return (
    <div className="relative text-white bg-primary-700">
      {/* Breathing background with Light Rays */}
      <BreathingBackground />

      {/* Audio toggle */}
      <AudioToggle />

      {/* Main content wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <AboutHeroSection
          tagline={data.hero_section.tagline}
          headline={data.hero_section.headline}
          sub_headline={data.hero_section.sub_headline}
          description={data.hero_section.description}
        />

        {/* Narrative Arc Section */}
        <NarrativeArcSection beats={data.narrative_arc} />

        {/* Philosophy Section */}
        <PhilosophySection {...data.philosophy_section} />

        {/* Credentials Section */}
        <CredentialsSection {...data.credentials} />

        {/* Offerings Section */}
        <OfferingsSectionNew offerings={data.offerings} />

        {/* CTA Section */}
        <AboutCTASection {...data.call_to_action} />
      </div>
    </div>
  );
}
