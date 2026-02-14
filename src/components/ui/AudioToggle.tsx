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
    if (savedState === 'true') {
      setIsPlaying(true);
    }
  }, []);

  // Handle audio playback
  useEffect(() => {
    if (!isMounted) return;

    if (!audioRef.current) {
      audioRef.current = new Audio('/audio/healing-frequency.mp3');
      audioRef.current.volume = 0.15; // 15% volume
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.warn('Audio playback failed:', err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }

    // Save state to localStorage
    localStorage.setItem('audio-toggle-state', isPlaying.toString());
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
        fixed top-6 right-6 z-50
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
