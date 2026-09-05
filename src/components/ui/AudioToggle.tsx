'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * AudioToggle Component
 * Floating button to toggle theta-wave healing frequency audio
 * Stores toggle state in localStorage for persistence
 */
export function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize from localStorage on client side only
  useEffect(() => {
    setIsMounted(true);
    const savedState = localStorage.getItem('audio-toggle-state');

    // Autoplay by default for first-time visitors, but respect saved preference.
    if (savedState === null) {
      setIsPlaying(true);
      return;
    }

    setIsPlaying(savedState === 'true');
  }, []);

  // Handle audio playback. Creating the Audio element (and its network
  // fetch) is deferred to idle time so it never competes with the page's
  // LCP resources on first paint.
  useEffect(() => {
    if (!isMounted) return;

    localStorage.setItem('audio-toggle-state', isPlaying.toString());

    if (!isPlaying) {
      audioRef.current?.pause();
      return;
    }

    let cancelled = false;

    const start = () => {
      if (cancelled) return;
      if (!audioRef.current) {
        audioRef.current = new Audio('/audio/calm-ambient.mp3');
        audioRef.current.volume = 0.4; // 40% volume
        audioRef.current.loop = true;
      }
      audioRef.current.play().catch((err) => {
        console.warn('Audio playback failed:', err);
        setIsPlaying(false);
      });
    };

    if (audioRef.current) {
      // Already loaded once - resume immediately, no need to defer.
      start();
      return;
    }

    const idleId =
      typeof window.requestIdleCallback === 'function'
        ? window.requestIdleCallback(start, { timeout: 2000 })
        : window.setTimeout(start, 1200);

    return () => {
      cancelled = true;
      if (typeof window.requestIdleCallback === 'function') {
        window.cancelIdleCallback(idleId as number);
      } else {
        window.clearTimeout(idleId as number);
      }
    };
  }, [isPlaying, isMounted]);

  const handleToggle = () => {
    setIsPlaying(!isPlaying);
  };

  if (!isMounted) {
    return null; // Don't render on server
  }

  return (
    <button
      onClick={handleToggle}
      aria-label={isPlaying ? 'Turn off healing frequency' : 'Turn on healing frequency'}
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        flex items-center justify-center
        transition-all duration-300
        backdrop-blur-md bg-white/5 border border-white/10
        hover:bg-white/10 hover:border-white/20
        ${isPlaying ? 'bg-white/10 border-white/20' : ''}
      `}
      title={isPlaying ? 'Audio on' : 'Audio off'}
    >
      {isPlaying ? (
        <Volume2 size={20} className="text-purple-300" />
      ) : (
        <VolumeX size={20} className="text-gray-400" />
      )}
    </button>
  );
}

export default AudioToggle;
