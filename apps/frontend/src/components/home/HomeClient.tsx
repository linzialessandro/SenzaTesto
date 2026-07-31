'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { NavBar } from '@/components/layout/NavBar';
import { HeroSection } from '@/components/home/HeroSection';
import { SearchSection } from '@/components/home/SearchSection';
import { CollectionsGrid } from '@/components/home/CollectionsGrid';
import { ExercisesGrid } from '@/components/home/ExercisesGrid';
import { InfoModal } from '@/components/home/modals/InfoModal';
import { ContributeModal } from '@/components/home/modals/ContributeModal';
import { DonationModal } from '@/components/home/modals/DonationModal';
import { supabase } from '@/lib/supabase';
import { type Exercise, ExerciseSchema } from '@/types/exercise';
import { z } from 'zod';

const PAGE_SIZE = 30;
const QUERY_KEYS = ['q', 'topic', 'year', 'difficulty', 'exercise'] as const;
type QueryKey = (typeof QUERY_KEYS)[number];
type UrlUpdate = Partial<Record<QueryKey, string | number | null>>;

interface UrlFilters {
  query: string;
  topic: string | null;
  year: number | null;
  difficulty: number | null;
  exerciseCode: string | null;
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
  return {
    query: parseText(params.get('q'), 100) ?? '',
    topic: parseText(params.get('topic'), 200),
    year: parseFilterNumber(params.get('year')),
    difficulty: parseFilterNumber(params.get('difficulty')),
    exerciseCode: parseExerciseCode(params.get('exercise')),
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
  const selectedTopic = urlFilters.topic;
  const selectedYear = urlFilters.year;
  const selectedDifficulty = urlFilters.difficulty;

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
      router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
    },
    [pathname, router, searchParamsKey],
  );

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
  }, [effectiveQuery, selectedDifficulty, selectedTopic, selectedYear]);

  useEffect(() => {
    if (!urlFilters.exerciseCode || exercises.length === 0) return;
    const timeout = window.setTimeout(() => {
      document.getElementById(`exercise-${urlFilters.exerciseCode}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
    return () => window.clearTimeout(timeout);
  }, [exercises.length, urlFilters.exerciseCode]);

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
    replaceUrl({ q: boundedValue.trim() || null, exercise: null });
  }, [replaceUrl]);

  const handleTopicChange = useCallback((topic: string | null) => {
    replaceUrl({ topic, exercise: null });
  }, [replaceUrl]);

  const handleYearChange = useCallback((year: number | null) => {
    replaceUrl({ year, exercise: null });
  }, [replaceUrl]);

  const handleDifficultyChange = useCallback((difficulty: number | null) => {
    replaceUrl({ difficulty, exercise: null });
  }, [replaceUrl]);

  const resetFilters = useCallback(() => {
    setSearchQuery('');
    replaceUrl({ q: null, topic: null, year: null, difficulty: null, exercise: null });
  }, [replaceUrl]);

  const isExploring = Boolean(
    effectiveQuery || selectedTopic || selectedYear !== null || selectedDifficulty !== null,
  );

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-50 relative pb-32">
      <NavBar
        onOpenContribute={() => setIsContributeModalOpen(true)}
        onOpenDonation={() => setIsDonationModalOpen(true)}
        onLogoClick={resetFilters}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24">
        <HeroSection onOpenInfo={() => setIsInfoModalOpen(true)} totalCount={totalCount} />

        <SearchSection
          searchQuery={searchQuery}
          setSearchQuery={handleSearchChange}
          selectedTopic={selectedTopic}
          selectedYear={selectedYear}
          selectedDifficulty={selectedDifficulty}
          onSelectYear={handleYearChange}
          onSelectDifficulty={handleDifficultyChange}
          onClear={resetFilters}
        />

        <AnimatePresence mode="wait">
          {!isExploring ? (
            <motion.div
              key="collections"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              <CollectionsGrid onSelectTopic={handleTopicChange} />
            </motion.div>
          ) : (
            <motion.div
              key="exercises"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
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
      </main>

      <InfoModal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} />
      <ContributeModal isOpen={isContributeModalOpen} onClose={() => setIsContributeModalOpen(false)} />
      <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />
    </div>
  );
}
