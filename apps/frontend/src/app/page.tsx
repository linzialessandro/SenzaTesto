'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { NavBar } from '@/components/layout/NavBar';
import { HeroSection } from '@/components/home/HeroSection';
import { SearchSection } from '@/components/home/SearchSection';
import { CollectionsGrid } from '@/components/home/CollectionsGrid';
import { ExercisesGrid } from '@/components/home/ExercisesGrid';
import { InfoModal } from '@/components/home/modals/InfoModal';
import { ContributeModal } from '@/components/home/modals/ContributeModal';
import { DonationModal } from '@/components/home/modals/DonationModal';
import { supabase } from '@/lib/supabase';
import { AnimatePresence, motion } from 'framer-motion';
import { type Exercise, ExerciseSchema } from '@/types/exercise';
import { z } from 'zod';

const PAGE_SIZE = 30;

export default function Home() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  
  // Modal state
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isContributeModalOpen, setIsContributeModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  
  // Solutions visibility tracking
  const [visibleSolutions, setVisibleSolutions] = useState<Set<string>>(new Set());

  // Search & Filter states
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce search
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(searchQuery), 500);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Fetch total count only once
  useEffect(() => {
    const fetchTotalCount = async () => {
      try {
        const { count, error } = await supabase
          .from('exercises')
          .select('*', { count: 'exact', head: true });
        
        if (!error && count !== null) {
          setTotalCount(count);
        }
      } catch (err) {
        console.error("Errore durante il recupero del conteggio totale:", err);
      }
    };
    fetchTotalCount();
  }, []);

  // Fetch exercises when search or year changes
  useEffect(() => {
    let ignore = false;
    const fetchExercises = async () => {
      // Remove any leading '#' that users might copy-paste from the UI
      const query = debouncedQuery.trim().replace(/^#/, '') || null;
      
      if (!query && selectedTopic === null) {
        setExercises([]);
        setHasMore(false);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const params: Record<string, unknown> = { page_limit: PAGE_SIZE, page_offset: 0 };
        if (query) params.search_query = query;
        if (selectedTopic !== null) params.filter_topic = selectedTopic;

        const { data, error: rpcError } = await supabase.rpc('search_exercises', params);
        
        if (rpcError) throw rpcError;
        
        const resultData = z.array(ExerciseSchema).parse(data || []);

        if (!ignore) {
          setExercises(resultData);
          setHasMore(resultData.length >= PAGE_SIZE);
        }
      } catch (err) {
        console.error("Errore durante il recupero degli esercizi:", err);
        if (!ignore) {
          setError('Si è verificato un errore durante il caricamento degli esercizi. Riprova più tardi.');
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    };
    fetchExercises();
    return () => { ignore = true; };
  }, [debouncedQuery, selectedTopic]);

  // Carica altri esercizi (paginazione)
  const loadMore = useCallback(async () => {
    // Remove any leading '#' that users might copy-paste from the UI
    const query = debouncedQuery.trim().replace(/^#/, '') || null;
    setLoadingMore(true);
    try {
      const params: Record<string, unknown> = { page_limit: PAGE_SIZE, page_offset: exercises.length };
      if (query) params.search_query = query;
      if (selectedTopic !== null) params.filter_topic = selectedTopic;

      const { data, error: rpcError } = await supabase.rpc('search_exercises', params);
      if (rpcError) throw rpcError;
      
      const newData = z.array(ExerciseSchema).parse(data || []);
      setExercises(prev => [...prev, ...newData]);
      setHasMore(newData.length >= PAGE_SIZE);
    } catch (err) {
      console.error("Errore durante il caricamento di altri esercizi:", err);
    } finally {
      setLoadingMore(false);
    }
  }, [debouncedQuery, selectedTopic, exercises.length]);

  const toggleSolution = useCallback((hash: string) => {
    setVisibleSolutions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(hash)) {
        newSet.delete(hash);
      } else {
        newSet.add(hash);
        // Log the view anonymously
        supabase.rpc('log_solution_view', { hash }).then(({ error }) => {
          if (error) console.error("Error logging solution view:", error);
        });
      }
      return newSet;
    });
  }, []);

  const resetFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedTopic(null);
  }, []);

  const isExploring = searchQuery.trim().length > 0 || selectedTopic !== null;

  const handleOpenInfo = useCallback(() => setIsInfoModalOpen(true), []);
  const handleCloseInfo = useCallback(() => setIsInfoModalOpen(false), []);
  const handleOpenContribute = useCallback(() => setIsContributeModalOpen(true), []);
  const handleCloseContribute = useCallback(() => setIsContributeModalOpen(false), []);
  const handleOpenDonation = useCallback(() => setIsDonationModalOpen(true), []);
  const handleCloseDonation = useCallback(() => setIsDonationModalOpen(false), []);

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-50 relative pb-32">
      <NavBar 
        onOpenContribute={handleOpenContribute} 
        onOpenDonation={handleOpenDonation} 
        onLogoClick={resetFilters}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24">
        <HeroSection onOpenInfo={handleOpenInfo} totalCount={totalCount} />

        <SearchSection 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedTopic={selectedTopic}
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
              <CollectionsGrid onSelectTopic={setSelectedTopic} />
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

      <InfoModal isOpen={isInfoModalOpen} onClose={handleCloseInfo} />
      <ContributeModal isOpen={isContributeModalOpen} onClose={handleCloseContribute} />
      <DonationModal isOpen={isDonationModalOpen} onClose={handleCloseDonation} />
    </div>
  );
}
