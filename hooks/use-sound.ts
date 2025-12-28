'use client';

import { useCallback, useEffect, useRef } from 'react';
import { usePreferences } from './use-local-storage';

// Sound frequencies and durations for different effects
const SOUNDS = {
  click: { frequency: 800, duration: 0.05, type: 'sine' as OscillatorType },
  select: { frequency: 600, duration: 0.08, type: 'sine' as OscillatorType },
  success: { frequency: 880, duration: 0.15, type: 'sine' as OscillatorType },
  download: { frequency: 440, duration: 0.2, type: 'triangle' as OscillatorType },
  error: { frequency: 200, duration: 0.3, type: 'sawtooth' as OscillatorType },
} as const;

type SoundName = keyof typeof SOUNDS;

export function useSound() {
  const { preferences, setPreferences } = usePreferences();
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize AudioContext lazily (after user interaction)
  const getAudioContext = useCallback(() => {
    if (typeof window === 'undefined') return null;

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    // Resume if suspended (browser autoplay policy)
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }

    return audioContextRef.current;
  }, []);

  // Play a sound effect
  const playSound = useCallback((soundName: SoundName) => {
    if (!preferences.soundEnabled) return;

    const audioContext = getAudioContext();
    if (!audioContext) return;

    const sound = SOUNDS[soundName];
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = sound.type;
    oscillator.frequency.setValueAtTime(sound.frequency, audioContext.currentTime);

    // Envelope: quick attack, gradual decay
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + sound.duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + sound.duration);
  }, [preferences.soundEnabled, getAudioContext]);

  // Play success sound with two-tone melody
  const playSuccessSound = useCallback(() => {
    if (!preferences.soundEnabled) return;

    const audioContext = getAudioContext();
    if (!audioContext) return;

    // First note
    const osc1 = audioContext.createOscillator();
    const gain1 = audioContext.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(523, audioContext.currentTime); // C5
    gain1.gain.setValueAtTime(0.1, audioContext.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.15);
    osc1.connect(gain1);
    gain1.connect(audioContext.destination);
    osc1.start(audioContext.currentTime);
    osc1.stop(audioContext.currentTime + 0.15);

    // Second note (higher)
    const osc2 = audioContext.createOscillator();
    const gain2 = audioContext.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(659, audioContext.currentTime + 0.1); // E5
    gain2.gain.setValueAtTime(0, audioContext.currentTime);
    gain2.gain.setValueAtTime(0.1, audioContext.currentTime + 0.1);
    gain2.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
    osc2.connect(gain2);
    gain2.connect(audioContext.destination);
    osc2.start(audioContext.currentTime + 0.1);
    osc2.stop(audioContext.currentTime + 0.3);
  }, [preferences.soundEnabled, getAudioContext]);

  // Toggle sound on/off
  const toggleSound = useCallback(() => {
    const newEnabled = !preferences.soundEnabled;
    setPreferences({ soundEnabled: newEnabled });

    // Play a confirmation sound when enabling
    if (newEnabled) {
      setTimeout(() => playSound('select'), 50);
    }
  }, [preferences.soundEnabled, setPreferences, playSound]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, []);

  return {
    isEnabled: preferences.soundEnabled,
    toggleSound,
    playClick: () => playSound('click'),
    playSelect: () => playSound('select'),
    playSuccess: playSuccessSound,
    playDownload: () => playSound('download'),
    playError: () => playSound('error'),
  };
}
