'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  getStorage,
  getHistory,
  addToHistory,
  clearHistory,
  removeFromHistory,
  getPreferences,
  updatePreferences,
  getStats,
  recordExtraction,
  recordVisit,
  shouldShowEmailCapture,
  markEmailCaptureShown,
  markEmailCaptured,
  type ExtractionHistoryItem,
  type UserPreferences,
  type UsageStats,
} from '@/lib/local-storage';

// Hook for extraction history
export function useExtractionHistory() {
  const [history, setHistory] = useState<ExtractionHistoryItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setHistory(getHistory());
    setIsLoaded(true);
  }, []);

  const addExtraction = useCallback((
    url: string,
    imageCount: number,
    scanMode: 'quick' | 'deep',
    thumbnailUrl?: string
  ) => {
    addToHistory({
      url,
      timestamp: Date.now(),
      imageCount,
      scanMode,
      thumbnailUrl,
    });
    setHistory(getHistory());
  }, []);

  const removeExtraction = useCallback((id: string) => {
    removeFromHistory(id);
    setHistory(getHistory());
  }, []);

  const clearAll = useCallback(() => {
    clearHistory();
    setHistory([]);
  }, []);

  return {
    history,
    isLoaded,
    addExtraction,
    removeExtraction,
    clearAll,
  };
}

// Hook for user preferences
export function usePreferences() {
  const [preferences, setPreferencesState] = useState<UserPreferences>(getPreferences());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setPreferencesState(getPreferences());
    setIsLoaded(true);
  }, []);

  const setPreferences = useCallback((updates: Partial<UserPreferences>) => {
    updatePreferences(updates);
    setPreferencesState(getPreferences());
  }, []);

  return {
    preferences,
    isLoaded,
    setPreferences,
  };
}

// Hook for usage stats
export function useStats() {
  const [stats, setStatsState] = useState<UsageStats>(getStats());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Record visit on mount
    recordVisit();
    setStatsState(getStats());
    setIsLoaded(true);
  }, []);

  const trackExtraction = useCallback((
    imageCount: number,
    isBatch: boolean,
    isDeepScan: boolean
  ) => {
    recordExtraction(imageCount, isBatch, isDeepScan);
    setStatsState(getStats());
  }, []);

  return {
    stats,
    isLoaded,
    trackExtraction,
  };
}

// Hook for email capture state
export function useEmailCapture() {
  const [shouldShow, setShouldShow] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setShouldShow(shouldShowEmailCapture());
    setIsLoaded(true);
  }, []);

  const refresh = useCallback(() => {
    setShouldShow(shouldShowEmailCapture());
  }, []);

  const markShown = useCallback(() => {
    markEmailCaptureShown();
    setShouldShow(false);
  }, []);

  const markCaptured = useCallback(() => {
    markEmailCaptured();
    setShouldShow(false);
  }, []);

  return {
    shouldShow,
    isLoaded,
    refresh,
    markShown,
    markCaptured,
  };
}

// Combined hook for components that need multiple features
export function useExtractPicsStorage() {
  const historyHook = useExtractionHistory();
  const preferencesHook = usePreferences();
  const statsHook = useStats();
  const emailCaptureHook = useEmailCapture();

  const isLoaded = historyHook.isLoaded && preferencesHook.isLoaded &&
                   statsHook.isLoaded && emailCaptureHook.isLoaded;

  return {
    // History
    history: historyHook.history,
    addExtraction: historyHook.addExtraction,
    removeExtraction: historyHook.removeExtraction,
    clearHistory: historyHook.clearAll,

    // Preferences
    preferences: preferencesHook.preferences,
    setPreferences: preferencesHook.setPreferences,

    // Stats
    stats: statsHook.stats,
    trackExtraction: statsHook.trackExtraction,

    // Email capture
    shouldShowEmailCapture: emailCaptureHook.shouldShow,
    refreshEmailCapture: emailCaptureHook.refresh,
    markEmailCaptureShown: emailCaptureHook.markShown,
    markEmailCaptured: emailCaptureHook.markCaptured,

    isLoaded,
  };
}
