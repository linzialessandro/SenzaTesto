'use client';

import React, { useEffect, useState } from 'react';
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
import { useCallback, useMemo } from 'react';

interface Exercise {
  id: number;
  topic_id: number;
  difficulty_level: number;
  problem_text: string;
  solution_text: string;
  generated_hash: string;
  topic_macro_area: string;
  topic_name: string;
  year_number: number;
  short_code: string;
  tags?: string[];
}

export default function Home() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  
  // Info Modal state
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isContributeModalOpen, setIsContributeModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  
  // Solutions visibility tracking
  const [visibleSolutions, setVisibleSolutions] = useState<Set<string>>(new Set());

  // Search & Filter states
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
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

  // Fetch exercises only when there is a search or year selected
  useEffect(() => {
    let ignore = false;
    const fetchExercises = async () => {
      const query = debouncedQuery.trim() || null;
      
      if (!query && selectedYear === null) {
        setExercises([]);
        return;
      }

      setLoading(true);
      try {
        const params: any = {};
        if (query) params.search_query = query;
        if (selectedYear !== null) params.filter_year = selectedYear;

        const { data, error } = await supabase.rpc('search_exercises', params);
        
        if (error) throw error;
        
        const resultData = data || [];

        if (!ignore) {
          setExercises(resultData as Exercise[]);
        }
      } catch (error: any) {
        console.error("Errore durante il recupero degli esercizi:", JSON.stringify(error, null, 2) || error.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    };
    fetchExercises();
    return () => { ignore = true; };
  }, [debouncedQuery, selectedYear]);

  const toggleSolution = useCallback((hash: string) => {
    setVisibleSolutions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(hash)) newSet.delete(hash);
      else newSet.add(hash);
      return newSet;
    });
  }, []);

  const resetFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedYear(null);
  }, []);

  const isExploring = searchQuery.trim().length > 0 || selectedYear !== null;

  const handleOpenInfo = useCallback(() => setIsInfoModalOpen(true), []);
  const handleOpenContribute = useCallback(() => setIsContributeModalOpen(true), []);
  const handleOpenDonation = useCallback(() => setIsDonationModalOpen(true), []);

  const mainContent = useMemo(() => (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24">
      <HeroSection onOpenInfo={handleOpenInfo} totalCount={totalCount} />

      <SearchSection 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedYear={selectedYear}
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
            <CollectionsGrid onSelectYear={setSelectedYear} />
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
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  ), [
    totalCount, 
    searchQuery, 
    selectedYear, 
    isExploring, 
    loading, 
    exercises, 
    visibleSolutions, 
    handleOpenInfo, 
    resetFilters, 
    toggleSolution
  ]);

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-50 relative pb-32">
      <NavBar 
        onOpenContribute={handleOpenContribute} 
        onOpenDonation={handleOpenDonation} 
        onLogoClick={resetFilters}
      />

      {mainContent}

      <InfoModal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} />
      <ContributeModal isOpen={isContributeModalOpen} onClose={() => setIsContributeModalOpen(false)} />
      <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />
    </div>
  );
}
