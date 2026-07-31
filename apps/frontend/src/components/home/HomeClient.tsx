'use client';

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { NavBar } from '@/components/layout/NavBar';
import { HeroSection } from '@/components/home/HeroSection';
import { SearchSection } from '@/components/home/SearchSection';
import { CollectionsGrid } from '@/components/home/CollectionsGrid';
import { ExercisesGrid } from '@/components/home/ExercisesGrid';
import { PracticeSession } from '@/components/practice/PracticeSession';
import { InfoModal } from '@/components/home/modals/InfoModal';
import { ContributeModal } from '@/components/home/modals/ContributeModal';
import { DonationModal } from '@/components/home/modals/DonationModal';
import { supabase } from '@/lib/supabase';
import {
  clampSessionSize,
  DEFAULT_SESSION_SIZE,
  type PracticeFilters,
  saveActiveSession,
} from '@/lib/practiceProgress';
import { type Exercise, ExerciseSchema } from '@/types/exercise';
import { z } from 'zod';

const PAGE_SIZE = 30;
const SCROLL_LOCK_KEY = 'senzatesto.scrollLock';
/** Cover first filter transition: URL update + collections→exercises AnimatePresence (~400ms). */
const SCROLL_HOLD_MS = 650;
const QUERY_KEYS = ['q', 'topic', 'year', 'difficulty', 'exercise', 'mode', 'size'] as const;
type QueryKey = (typeof QUERY_KEYS)[number];
type UrlUpdate = Partial<Record<QueryKey, string | number | null>>;

function restoreScrollPosition(y: number) {
  window.scrollTo({ top: y, left: 0, behavior: 'auto' });
}

interface UrlFilters {
  query: string;
  topic: string | null;
  year: number | null;
  difficulty: number | null;
  exerciseCode: string | null;
  practiceMode: boolean;
  sessionSize: number;
}

function parseFilterNumber(value: string | null): number | null {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed >= 1 && parsed <= 5 ? parsed : null;
}

function parseText(value: string | null, maximumLength: number): string | null {
  const trimmed = value?.trim().slice(0, maximumLength) ?? '';
  return trimmed || null;
}

function parseExerciseCode(value: string | null): string | null {
  const code = value?.trim().replace(/^#/, '').toUpperCase() ?? '';
  return /^[A-Z0-9]{5,6}$/.test(code) ? code : null;
}

function readUrlFilters(params: URLSearchParams): UrlFilters {
  const sizeRaw = params.get('size');
  const sizeParsed = sizeRaw != null && sizeRaw !== '' ? Number(sizeRaw) : null;
  return {
    query: parseText(params.get('q'), 100) ?? '',
    topic: parseText(params.get('topic'), 200),
    year: parseFilterNumber(params.get('year')),
    difficulty: parseFilterNumber(params.get('difficulty')),
    exerciseCode: parseExerciseCode(params.get('exercise')),
    practiceMode: params.get('mode') === 'practice',
    sessionSize: clampSessionSize(Number.isFinite(sizeParsed as number) ? sizeParsed : DEFAULT_SESSION_SIZE),
  };
}

export function HomeClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsKey = searchParams.toString();
  const urlFilters = useMemo(
    () => readUrlFilters(new URLSearchParams(searchParamsKey)),
    [searchParamsKey],
  );

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isContributeModalOpen, setIsContributeModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [visibleSolutions, setVisibleSolutions] = useState<Set<string>>(new Set());
  // Seed from the URL so shared ?q= / ?exercise= links do not flash the collections grid.
  const [searchQuery, setSearchQuery] = useState(urlFilters.query);
  const [debouncedQuery, setDebouncedQuery] = useState(urlFilters.query);
  // Remount PracticeSession when a new session is requested with the same filters.
  const [practiceNonce, setPracticeNonce] = useState(0);
  // Keep scroll stable when query-string filters change (selects are especially noisy).
  const pendingScrollY = useRef<number | null>(null);
  const scrollHoldCleanup = useRef<(() => void) | null>(null);
  const wasExploringRef = useRef(false);

  const selectedTopic = urlFilters.topic;
  const selectedYear = urlFilters.year;
  const selectedDifficulty = urlFilters.difficulty;
  const isPracticeActive = urlFilters.practiceMode;

  const practiceFilters: PracticeFilters = useMemo(
    () => ({
      year: selectedYear,
      topic: selectedTopic,
      difficulty: selectedDifficulty,
      size: urlFilters.sessionSize,
    }),
    [selectedDifficulty, selectedTopic, selectedYear, urlFilters.sessionSize],
  );

  const practiceDisabledReason = useMemo(() => {
    if (urlFilters.exerciseCode) {
      return 'Rimuovi il permalink dell’esercizio per avviare una sessione filtrata.';
    }
    if (!selectedYear && !selectedTopic && !selectedDifficulty) {
      return 'Scegli almeno un anno, un argomento o una difficoltà per iniziare.';
    }
    return null;
  }, [selectedDifficulty, selectedTopic, selectedYear, urlFilters.exerciseCode]);

  const holdScrollPosition = useCallback((scrollY: number, holdMs = SCROLL_HOLD_MS) => {
    scrollHoldCleanup.current?.();
    pendingScrollY.current = scrollY;
    try {
      sessionStorage.setItem(SCROLL_LOCK_KEY, String(scrollY));
    } catch {
      // private mode / quota
    }

    restoreScrollPosition(scrollY);
    const startedAt = performance.now();
    let rafId = 0;
    const timeouts: number[] = [];

    const tick = (now: number) => {
      restoreScrollPosition(scrollY);
      if (now - startedAt < holdMs) {
        rafId = window.requestAnimationFrame(tick);
      } else if (pendingScrollY.current === scrollY) {
        pendingScrollY.current = null;
        try {
          sessionStorage.removeItem(SCROLL_LOCK_KEY);
        } catch {
          // ignore
        }
      }
    };
    rafId = window.requestAnimationFrame(tick);

    // Router / focus scrolls often land after a few frames; re-assert for a while.
    for (const delay of [0, 16, 50, 100, 200, 350, 500, holdMs]) {
      timeouts.push(window.setTimeout(() => restoreScrollPosition(scrollY), delay));
    }

    scrollHoldCleanup.current = () => {
      window.cancelAnimationFrame(rafId);
      for (const id of timeouts) window.clearTimeout(id);
    };
  }, []);

  useEffect(() => () => scrollHoldCleanup.current?.(), []);

  const replaceUrl = useCallback(
    (updates: UrlUpdate) => {
      const next = new URLSearchParams(searchParamsKey);
      for (const key of QUERY_KEYS) {
        if (!(key in updates)) continue;
        const value = updates[key];
        if (value === null || value === '') {
          next.delete(key);
        } else {
          next.set(key, String(value));
        }
      }
      const queryString = next.toString();
      const nextUrl = queryString ? `${pathname}?${queryString}` : pathname;
      const currentUrl = searchParamsKey ? `${pathname}?${searchParamsKey}` : pathname;
      if (nextUrl === currentUrl) return;

      // First year/difficulty choice also swaps Collections → Exercises (layout collapse).
      // Hold scroll longer than a single paint so the swap cannot yank the viewport to top.
      holdScrollPosition(window.scrollY);
      router.replace(nextUrl, { scroll: false });
    },
    [holdScrollPosition, pathname, router, searchParamsKey],
  );

  // After URL-driven re-render (or Suspense remount), re-assert the held position.
  useLayoutEffect(() => {
    let y = pendingScrollY.current;
    if (y == null) {
      try {
        const raw = sessionStorage.getItem(SCROLL_LOCK_KEY);
        if (raw != null) y = Number(raw);
      } catch {
        y = null;
      }
    }
    if (y == null || !Number.isFinite(y)) return;
    restoreScrollPosition(y);
  }, [searchParamsKey]);

  useEffect(() => {
    // Apply browser back/forward (or pasted URLs) immediately; keep debounce for typing.
    if (searchQuery === urlFilters.query) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSearchQuery(urlFilters.query);
    setDebouncedQuery(urlFilters.query);
  }, [searchQuery, urlFilters.query]);

  useEffect(() => {
    const timeout = window.setTimeout(() => setDebouncedQuery(searchQuery), 500);
    return () => window.clearTimeout(timeout);
  }, [searchQuery]);

  useEffect(() => {
    let cancelled = false;
    const fetchTotalCount = async () => {
      try {
        const { count, error: countError } = await supabase
          .from('exercises')
          .select('*', { count: 'exact', head: true });
        if (!cancelled && !countError && count !== null) setTotalCount(count);
      } catch (countError) {
        console.error('Errore durante il recupero del conteggio totale:', countError);
      }
    };
    void fetchTotalCount();
    return () => {
      cancelled = true;
    };
  }, []);

  const effectiveQuery = urlFilters.exerciseCode ?? (debouncedQuery.trim().replace(/^#/, '') || null);

  useEffect(() => {
    if (isPracticeActive) return;

    let cancelled = false;
    const fetchExercises = async () => {
      if (!effectiveQuery && selectedTopic === null && selectedYear === null && selectedDifficulty === null) {
        setExercises([]);
        setHasMore(false);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const params: Record<string, unknown> = { page_limit: PAGE_SIZE, page_offset: 0 };
        if (effectiveQuery) params.search_query = effectiveQuery;
        if (selectedTopic) params.filter_topic = selectedTopic;
        if (selectedYear) params.filter_year = selectedYear;
        if (selectedDifficulty) params.filter_difficulty = selectedDifficulty;

        const { data, error: rpcError } = await supabase.rpc('search_exercises', params);
        if (rpcError) throw rpcError;
        const resultData = z.array(ExerciseSchema).parse(data ?? []);
        if (!cancelled) {
          setVisibleSolutions(new Set());
          setExercises(resultData);
          setHasMore(resultData.length >= PAGE_SIZE);
        }
      } catch (fetchError) {
        console.error('Errore durante il recupero degli esercizi:', fetchError);
        if (!cancelled) {
          setError('Si è verificato un errore durante il caricamento degli esercizi. Riprova più tardi.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    void fetchExercises();
    return () => {
      cancelled = true;
    };
  }, [effectiveQuery, isPracticeActive, selectedDifficulty, selectedTopic, selectedYear]);

  useEffect(() => {
    if (isPracticeActive || !urlFilters.exerciseCode || exercises.length === 0) return;
    const timeout = window.setTimeout(() => {
      document.getElementById(`exercise-${urlFilters.exerciseCode}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
    return () => window.clearTimeout(timeout);
  }, [exercises.length, isPracticeActive, urlFilters.exerciseCode]);

  const loadMore = useCallback(async () => {
    setLoadingMore(true);
    try {
      const params: Record<string, unknown> = { page_limit: PAGE_SIZE, page_offset: exercises.length };
      if (effectiveQuery) params.search_query = effectiveQuery;
      if (selectedTopic) params.filter_topic = selectedTopic;
      if (selectedYear) params.filter_year = selectedYear;
      if (selectedDifficulty) params.filter_difficulty = selectedDifficulty;

      const { data, error: rpcError } = await supabase.rpc('search_exercises', params);
      if (rpcError) throw rpcError;
      const newData = z.array(ExerciseSchema).parse(data ?? []);
      setExercises((current) => [...current, ...newData]);
      setHasMore(newData.length >= PAGE_SIZE);
    } catch (loadError) {
      console.error('Errore durante il caricamento di altri esercizi:', loadError);
      setError('Non è stato possibile caricare altri esercizi. Riprova più tardi.');
    } finally {
      setLoadingMore(false);
    }
  }, [effectiveQuery, exercises.length, selectedDifficulty, selectedTopic, selectedYear]);

  const toggleSolution = useCallback((hash: string) => {
    setVisibleSolutions((current) => {
      const next = new Set(current);
      if (next.has(hash)) {
        next.delete(hash);
      } else {
        next.add(hash);
        void supabase.rpc('log_solution_view', { hash }).then(({ error: logError }) => {
          if (logError) console.error('Error logging solution view:', logError);
        });
      }
      return next;
    });
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    const boundedValue = value.slice(0, 100);
    setSearchQuery(boundedValue);
    replaceUrl({ q: boundedValue.trim() || null, exercise: null, mode: null });
  }, [replaceUrl]);

  const handleTopicChange = useCallback((topic: string | null) => {
    replaceUrl({ topic, exercise: null, mode: null });
  }, [replaceUrl]);

  const handleYearChange = useCallback((year: number | null) => {
    replaceUrl({ year, exercise: null, mode: null });
  }, [replaceUrl]);

  const handleDifficultyChange = useCallback((difficulty: number | null) => {
    replaceUrl({ difficulty, exercise: null, mode: null });
  }, [replaceUrl]);

  const resetFilters = useCallback(() => {
    setSearchQuery('');
    saveActiveSession(null);
    replaceUrl({
      q: null,
      topic: null,
      year: null,
      difficulty: null,
      exercise: null,
      mode: null,
      size: null,
    });
  }, [replaceUrl]);

  const startPractice = useCallback((filters?: PracticeFilters) => {
    const next = filters ?? practiceFilters;
    if (!next.year && !next.topic && !next.difficulty) return;
    setPracticeNonce((value) => value + 1);
    saveActiveSession(null);
    replaceUrl({
      q: null,
      exercise: null,
      topic: next.topic,
      year: next.year,
      difficulty: next.difficulty,
      mode: 'practice',
      size: next.size,
    });
    window.setTimeout(() => {
      document.getElementById('exercises-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }, [practiceFilters, replaceUrl]);

  const exitPractice = useCallback(() => {
    saveActiveSession(null);
    replaceUrl({ mode: null, size: null });
  }, [replaceUrl]);

  const isExploring = Boolean(
    effectiveQuery || selectedTopic || selectedYear !== null || selectedDifficulty !== null,
  );

  // First filter: collections unmount after explore becomes true — re-hold scroll for that swap.
  useLayoutEffect(() => {
    const becameExploring = isExploring && !wasExploringRef.current;
    wasExploringRef.current = isExploring;
    if (!becameExploring) return;

    let y = pendingScrollY.current;
    if (y == null) {
      try {
        const raw = sessionStorage.getItem(SCROLL_LOCK_KEY);
        if (raw != null) y = Number(raw);
      } catch {
        y = null;
      }
    }
    // Prefer locked Y; otherwise pin to the search/filters block so we never jump to the hero top.
    if (y == null || !Number.isFinite(y)) {
      const section = document.getElementById('exercises-section');
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY - 88;
        y = Math.max(0, top);
      } else {
        y = window.scrollY;
      }
    }
    holdScrollPosition(y, SCROLL_HOLD_MS);
  }, [holdScrollPosition, isExploring]);

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-50 relative pb-32">
      <NavBar
        onOpenContribute={() => setIsContributeModalOpen(true)}
        onOpenDonation={() => setIsDonationModalOpen(true)}
        onLogoClick={resetFilters}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24">
        {!isPracticeActive && (
          <HeroSection
            onOpenInfo={() => setIsInfoModalOpen(true)}
            totalCount={totalCount}
            onStartPractice={() => {
              document.getElementById('exercises-section')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
          />
        )}

        <SearchSection
          searchQuery={searchQuery}
          setSearchQuery={handleSearchChange}
          selectedTopic={selectedTopic}
          selectedYear={selectedYear}
          selectedDifficulty={selectedDifficulty}
          onSelectYear={handleYearChange}
          onSelectDifficulty={handleDifficultyChange}
          onClear={resetFilters}
          onStartPractice={() => startPractice()}
          practiceDisabledReason={practiceDisabledReason}
          isPracticeActive={isPracticeActive}
        />

        {/* min-height avoids a total collapse when collections exit on the first filter. */}
        <div className="relative min-h-[20rem]">
          <AnimatePresence mode="sync" initial={false}>
            {isPracticeActive ? (
              <motion.div
                key={`practice-${practiceNonce}-${urlFilters.sessionSize}-${selectedYear}-${selectedDifficulty}-${selectedTopic ?? ''}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              >
                <PracticeSession
                  filters={practiceFilters}
                  onExit={exitPractice}
                  onStartRecommended={(recommended) => startPractice(recommended)}
                />
              </motion.div>
            ) : !isExploring ? (
              <motion.div
                key="collections"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, position: 'absolute', inset: '0 0 auto 0' }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              >
                <CollectionsGrid onSelectTopic={handleTopicChange} />
              </motion.div>
            ) : (
              <motion.div
                key="exercises"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              >
                <ExercisesGrid
                  loading={loading}
                  filteredExercises={exercises}
                  visibleSolutions={visibleSolutions}
                  toggleSolution={toggleSolution}
                  resetFilters={resetFilters}
                  error={error}
                  hasMore={hasMore}
                  loadingMore={loadingMore}
                  onLoadMore={loadMore}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <InfoModal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} />
      <ContributeModal isOpen={isContributeModalOpen} onClose={() => setIsContributeModalOpen(false)} />
      <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />
    </div>
  );
}
