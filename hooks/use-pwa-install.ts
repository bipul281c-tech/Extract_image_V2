'use client';

import { useState, useEffect, useCallback } from 'react';
import { getStats } from '@/lib/local-storage';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function usePwaInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);

      // Show prompt after 2nd extraction
      const stats = getStats();
      if (stats.totalExtractions >= 2) {
        setShowPrompt(true);
      }
    };

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setShowPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const triggerInstall = useCallback(async () => {
    if (!deferredPrompt) return false;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === 'accepted') {
        setIsInstalled(true);
        setDeferredPrompt(null);
        setShowPrompt(false);
        return true;
      }
    } catch (error) {
      console.error('Install prompt failed:', error);
    }

    return false;
  }, [deferredPrompt]);

  const dismissPrompt = useCallback(() => {
    setShowPrompt(false);
    // Save dismissal to localStorage to not show again for a while
    if (typeof window !== 'undefined') {
      localStorage.setItem('pwa_prompt_dismissed', Date.now().toString());
    }
  }, []);

  const checkShouldShowPrompt = useCallback(() => {
    if (isInstalled || !isInstallable) return false;

    // Check if dismissed recently (within 7 days)
    const dismissedAt = localStorage.getItem('pwa_prompt_dismissed');
    if (dismissedAt) {
      const daysSinceDismissed = (Date.now() - parseInt(dismissedAt)) / (1000 * 60 * 60 * 24);
      if (daysSinceDismissed < 7) return false;
    }

    const stats = getStats();
    return stats.totalExtractions >= 2;
  }, [isInstalled, isInstallable]);

  return {
    isInstallable,
    isInstalled,
    showPrompt,
    triggerInstall,
    dismissPrompt,
    checkShouldShowPrompt,
  };
}
