/**
 * Local-only practice progress (no accounts).
 * Persists completed sessions and an optional in-progress session in localStorage.
 */

export type Confidence = 'got_it' | 'unsure' | 'missed';

export interface PracticeFilters {
  year: number | null;
  topic: string | null;
  difficulty: number | null;
  size: number;
}

export interface PracticeAttempt {
  shortCode: string;
  hash: string;
  topic: string;
  macroArea: string;
  year: number;
  difficulty: number;
  confidence: Confidence;
  at: string;
}

export interface CompletedSession {
  id: string;
  filters: PracticeFilters;
  startedAt: string;
  completedAt: string;
  attempts: PracticeAttempt[];
}

export interface ActiveSessionState {
  id: string;
  filters: PracticeFilters;
  startedAt: string;
  /** Short codes in session order */
  shortCodes: string[];
  currentIndex: number;
  attempts: PracticeAttempt[];
}

export interface PracticeRecommendation {
  title: string;
  detail: string;
  suggestedFilters: PracticeFilters;
}

export interface PracticeStore {
  version: 1;
  sessions: CompletedSession[];
  active: ActiveSessionState | null;
}

const STORAGE_KEY = 'senzatesto.practice.v1';
const MAX_SESSIONS = 30;
export const DEFAULT_SESSION_SIZE = 8;
export const MIN_SESSION_SIZE = 5;
export const MAX_SESSION_SIZE = 10;

function emptyStore(): PracticeStore {
  return { version: 1, sessions: [], active: null };
}

export function clampSessionSize(value: number | null | undefined): number {
  if (value == null || !Number.isFinite(value)) return DEFAULT_SESSION_SIZE;
  return Math.min(MAX_SESSION_SIZE, Math.max(MIN_SESSION_SIZE, Math.round(value)));
}

export function readPracticeStore(): PracticeStore {
  if (typeof window === 'undefined') return emptyStore();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyStore();
    const parsed = JSON.parse(raw) as PracticeStore;
    if (parsed?.version !== 1 || !Array.isArray(parsed.sessions)) return emptyStore();
    return {
      version: 1,
      sessions: parsed.sessions.slice(0, MAX_SESSIONS),
      active: parsed.active ?? null,
    };
  } catch {
    return emptyStore();
  }
}

export function writePracticeStore(store: PracticeStore): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: 1,
        sessions: store.sessions.slice(0, MAX_SESSIONS),
        active: store.active,
      } satisfies PracticeStore),
    );
  } catch (error) {
    console.error('Impossibile salvare il progresso di pratica:', error);
  }
}

export function saveActiveSession(active: ActiveSessionState | null): void {
  const store = readPracticeStore();
  store.active = active;
  writePracticeStore(store);
}

export function completeActiveSession(active: ActiveSessionState): CompletedSession {
  const completed: CompletedSession = {
    id: active.id,
    filters: active.filters,
    startedAt: active.startedAt,
    completedAt: new Date().toISOString(),
    attempts: active.attempts,
  };
  const store = readPracticeStore();
  store.sessions = [completed, ...store.sessions].slice(0, MAX_SESSIONS);
  store.active = null;
  writePracticeStore(store);
  return completed;
}

export function recentAttemptedCodes(limit = 40): Set<string> {
  const store = readPracticeStore();
  const codes: string[] = [];
  for (const session of store.sessions) {
    for (const attempt of session.attempts) {
      codes.push(attempt.shortCode);
      if (codes.length >= limit) break;
    }
    if (codes.length >= limit) break;
  }
  if (store.active) {
    for (const code of store.active.shortCodes) {
      codes.push(code);
    }
  }
  return new Set(codes);
}

/** Fisher–Yates shuffle (copy). */
export function shuffleInPlace<T>(items: T[]): T[] {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = array[i]!;
    array[i] = array[j]!;
    array[j] = tmp;
  }
  return array;
}

/**
 * Prefer exercises not recently practised; fill with the rest if needed.
 */
export function pickSessionExercises<T extends { short_code: string }>(
  candidates: T[],
  size: number,
  exclude: Set<string> = recentAttemptedCodes(),
): T[] {
  const fresh = candidates.filter((item) => !exclude.has(item.short_code));
  const pool = shuffleInPlace(fresh.length >= Math.min(size, candidates.length) ? fresh : candidates);
  return pool.slice(0, Math.min(size, pool.length));
}

export function summarizeAttempts(attempts: PracticeAttempt[]): Record<Confidence, number> {
  return attempts.reduce(
    (acc, attempt) => {
      acc[attempt.confidence] += 1;
      return acc;
    },
    { got_it: 0, unsure: 0, missed: 0 } as Record<Confidence, number>,
  );
}

export function buildRecommendation(
  filters: PracticeFilters,
  attempts: PracticeAttempt[],
): PracticeRecommendation {
  const summary = summarizeAttempts(attempts);
  const total = attempts.length || 1;
  const successRate = summary.got_it / total;
  const struggleRate = (summary.missed + summary.unsure * 0.5) / total;

  const weakTopics = new Map<string, number>();
  for (const attempt of attempts) {
    if (attempt.confidence === 'missed' || attempt.confidence === 'unsure') {
      weakTopics.set(attempt.topic, (weakTopics.get(attempt.topic) ?? 0) + 1);
    }
  }
  const weakestTopic = [...weakTopics.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? filters.topic;

  if (successRate >= 0.75 && (filters.difficulty ?? 2) < 5) {
    const nextDifficulty = (filters.difficulty ?? 2) + 1;
    return {
      title: 'Puoi alzare il livello',
      detail: `Hai risolto bene la maggior parte degli esercizi. Prova una sessione a difficoltà ${nextDifficulty}.`,
      suggestedFilters: {
        ...filters,
        difficulty: nextDifficulty,
        topic: filters.topic,
        size: filters.size,
      },
    };
  }

  if (struggleRate >= 0.55 && (filters.difficulty ?? 2) > 1) {
    const nextDifficulty = (filters.difficulty ?? 2) - 1;
    return {
      title: 'Consolida le basi',
      detail: `Molte incertezze in questa sessione. Una ripresa a difficoltà ${nextDifficulty} rafforza il metodo.`,
      suggestedFilters: {
        ...filters,
        difficulty: nextDifficulty,
        topic: weakestTopic,
        size: filters.size,
      },
    };
  }

  if (weakestTopic) {
    return {
      title: 'Ripeti l’argomento debole',
      detail: `Concentrati su «${weakestTopic}» con gli stessi filtri per fissare i passaggi critici.`,
      suggestedFilters: {
        ...filters,
        topic: weakestTopic,
        size: filters.size,
      },
    };
  }

  return {
    title: 'Un’altra sessione simile',
    detail: 'Mantieni anno e difficoltà: la ripetizione spacata batte le sessioni lunghe.',
    suggestedFilters: { ...filters },
  };
}

export function createSessionId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `session-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
