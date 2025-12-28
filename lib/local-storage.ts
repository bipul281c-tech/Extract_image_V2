// localStorage keys and types for ExtractPics retention features

const STORAGE_KEY = 'extractpics_data';
const STORAGE_VERSION = 1;

// Types
export interface ExtractionHistoryItem {
  id: string;
  url: string;
  timestamp: number;
  imageCount: number;
  thumbnailUrl?: string;
  scanMode: 'quick' | 'deep';
}

export interface UserPreferences {
  defaultScanMode: 'quick' | 'deep';
  defaultMode: 'single' | 'batch';
  soundEnabled: boolean;
  lastMinWidth: number;
}

export interface UsageStats {
  totalExtractions: number;
  totalImagesExtracted: number;
  firstVisit: number;
  lastVisit: number;
  visitCount: number;
  currentStreak: number;
  longestStreak: number;
  batchExtractions: number;
  deepScans: number;
}

export interface ExtractPicsStorage {
  version: number;
  history: ExtractionHistoryItem[];
  preferences: UserPreferences;
  stats: UsageStats;
  emailCaptureShown: boolean;
  emailCapturedAt?: number;
}

// Default values
const defaultPreferences: UserPreferences = {
  defaultScanMode: 'quick',
  defaultMode: 'single',
  soundEnabled: false,
  lastMinWidth: 0,
};

const defaultStats: UsageStats = {
  totalExtractions: 0,
  totalImagesExtracted: 0,
  firstVisit: Date.now(),
  lastVisit: Date.now(),
  visitCount: 1,
  currentStreak: 1,
  longestStreak: 1,
  batchExtractions: 0,
  deepScans: 0,
};

const defaultStorage: ExtractPicsStorage = {
  version: STORAGE_VERSION,
  history: [],
  preferences: defaultPreferences,
  stats: defaultStats,
  emailCaptureShown: false,
};

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Get all data from localStorage
export function getStorage(): ExtractPicsStorage {
  if (!isBrowser) return defaultStorage;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultStorage;

    const data = JSON.parse(raw) as ExtractPicsStorage;

    // Migration: if version is old, reset (can add proper migrations later)
    if (data.version !== STORAGE_VERSION) {
      return defaultStorage;
    }

    return data;
  } catch {
    return defaultStorage;
  }
}

// Save all data to localStorage
export function setStorage(data: ExtractPicsStorage): void {
  if (!isBrowser) return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

// History functions
const MAX_HISTORY_ITEMS = 50;

export function addToHistory(item: Omit<ExtractionHistoryItem, 'id'>): void {
  const storage = getStorage();

  const newItem: ExtractionHistoryItem = {
    ...item,
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  };

  // Add to beginning, limit to MAX_HISTORY_ITEMS
  storage.history = [newItem, ...storage.history].slice(0, MAX_HISTORY_ITEMS);

  setStorage(storage);
}

export function getHistory(): ExtractionHistoryItem[] {
  return getStorage().history;
}

export function clearHistory(): void {
  const storage = getStorage();
  storage.history = [];
  setStorage(storage);
}

export function removeFromHistory(id: string): void {
  const storage = getStorage();
  storage.history = storage.history.filter(item => item.id !== id);
  setStorage(storage);
}

// Preferences functions
export function getPreferences(): UserPreferences {
  return getStorage().preferences;
}

export function updatePreferences(updates: Partial<UserPreferences>): void {
  const storage = getStorage();
  storage.preferences = { ...storage.preferences, ...updates };
  setStorage(storage);
}

// Stats functions
export function getStats(): UsageStats {
  return getStorage().stats;
}

export function recordExtraction(imageCount: number, isBatch: boolean, isDeepScan: boolean): void {
  const storage = getStorage();
  const stats = storage.stats;

  stats.totalExtractions += 1;
  stats.totalImagesExtracted += imageCount;

  if (isBatch) {
    stats.batchExtractions += 1;
  }

  if (isDeepScan) {
    stats.deepScans += 1;
  }

  setStorage(storage);
}

export function recordVisit(): void {
  const storage = getStorage();
  const stats = storage.stats;
  const now = Date.now();
  const lastVisit = stats.lastVisit;

  // Calculate days since last visit
  const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (daysSinceLastVisit === 0) {
    // Same day, no streak update needed
  } else if (daysSinceLastVisit === 1) {
    // Consecutive day - increase streak
    stats.currentStreak += 1;
    if (stats.currentStreak > stats.longestStreak) {
      stats.longestStreak = stats.currentStreak;
    }
  } else {
    // Streak broken - reset
    stats.currentStreak = 1;
  }

  stats.lastVisit = now;
  stats.visitCount += 1;

  setStorage(storage);
}

// Email capture
export function shouldShowEmailCapture(): boolean {
  const storage = getStorage();

  // Don't show if already captured or shown
  if (storage.emailCapturedAt || storage.emailCaptureShown) {
    return false;
  }

  // Show after 5 extractions
  return storage.stats.totalExtractions >= 5;
}

export function markEmailCaptureShown(): void {
  const storage = getStorage();
  storage.emailCaptureShown = true;
  setStorage(storage);
}

export function markEmailCaptured(): void {
  const storage = getStorage();
  storage.emailCapturedAt = Date.now();
  setStorage(storage);
}
