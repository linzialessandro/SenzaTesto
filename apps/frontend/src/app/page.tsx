'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { NavBar } from '@/components/layout/NavBar';
import { HeroSection } from '@/components/home/HeroSection';
import { FilterSection } from '@/components/home/FilterSection';
import { ExercisesGrid } from '@/components/home/ExercisesGrid';
import { InfoModal } from '@/components/home/modals/InfoModal';
import { ContributeModal } from '@/components/home/modals/ContributeModal';
import { DonationModal } from '@/components/home/modals/DonationModal';
import { supabase } from '@/lib/supabase';

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
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  
  // Info Modal state
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isContributeModalOpen, setIsContributeModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  
  // Solutions visibility tracking
  const [visibleSolutions, setVisibleSolutions] = useState<Set<string>>(new Set());

  // Filter states
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedSubTopic, setSelectedSubTopic] = useState<string | null>(null);
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

  useEffect(() => {
    let ignore = false;
    const fetchExercises = async () => {
      setLoading(true);
      try {
        const query = debouncedQuery.trim() || null;
        const { data, error } = await supabase.rpc('search_exercises', {
          search_query: query,
          filter_year: null
        });
        
        if (error) {
          console.error("Errore rpc Supabase:", error);
          throw error;
        }

        if (!ignore && data) {
          setExercises(data as Exercise[]);
        }
      } catch (error) {
        console.error("Errore durante il recupero degli esercizi:", error);
      } finally {
        if (!ignore) setLoading(false);
      }
    };
    fetchExercises();
    return () => { ignore = true; };
  }, [debouncedQuery]);

  // Curriculum Map for offline exploration
  const CURRICULUM_MAP = useMemo(() => ({
    1: {
      "Geometria e Numeri": ["geometria triangoli", "numeri naturali, interi e razionali", "MCD, mcm"],
      "Calcolo Letterale": ["monomi", "polinomi", "operazioni tra essi ed MCD, mcm", "divisioni tra polinomi e teorema e metodo di ruffini"]
    },
    2: {
      "Algebra Base": ["equazioni di primo grado", "equazioni di secondo grado"],
      "Sistemi": ["sistemi lineari con metodo di sostituzione, confronto, riduzione e Cramer"]
    },
    3: {
      "Geometria Analitica": ["Il piano cartesiano", "distanza tra punti e punto medio", "perimetro e area triangoli o quadrilateri sul piano cartesiano", "retta sul piano cartesiano (equazione, intersezione fra rette, parallelismo)"],
      "Coniche": ["la parabola (equazione, calcolo vertice fuoco, direttrice asse, posizione reciproca retta-parabola)", "Circonferenza (come parabola)", "Ellisssi (come parabola)", "iperbole (come parabola)"]
    },
    4: {
      "Equazioni e Disequazioni Avanzate": ["disequazioni di primo e secondo grado", "equazioni e disequazioni razionali fratte", "valore assoluto equazioni e disequazioni con valore assoluto"],
      "Funzioni Trascendenti": ["Funzioni goniometriche seno coseno tangente ed equazioni e disequazioni con esse", "esponenziali e logaritmi equazioni e disequazioni con essi"]
    },
    5: {
      "Limiti e Continuità": ["definizione di limiti e continuità", "discussione continuita funzioni definite a tratti", "verifica di limiti con la definizione", "forme indeterminate calcolo limiti"],
      "Derivate": ["derivata prima definizione e significato geometrico", "calcolo delle derivate delle funzioni fondamentali", "calcolo di derivate più complesse usando formule come derivata della composta o del rapporto o del prodotto"],
      "Studio e Integrali": ["studio di funzione", "integrali indefiniti e definiti"]
    }
  }), []);

  const uniqueYears = [1, 2, 3, 4, 5];
  
  const uniqueTopics = useMemo(() => {
    if (selectedYear) {
      return Object.keys(CURRICULUM_MAP[selectedYear as keyof typeof CURRICULUM_MAP] || {});
    }
    const allTopics = new Set<string>();
    Object.values(CURRICULUM_MAP).forEach(yearData => {
      Object.keys(yearData).forEach(topic => allTopics.add(topic));
    });
    return Array.from(allTopics).sort();
  }, [selectedYear, CURRICULUM_MAP]);

  const uniqueSubTopics = useMemo(() => {
    if (!selectedTopic) return [];
    
    if (selectedYear) {
      const yearData = CURRICULUM_MAP[selectedYear as keyof typeof CURRICULUM_MAP];
      return (yearData as any)[selectedTopic] || [];
    }
    
    const subs = new Set<string>();
    Object.values(CURRICULUM_MAP).forEach(yearData => {
      if ((yearData as any)[selectedTopic]) {
        (yearData as any)[selectedTopic].forEach((sub: string) => subs.add(sub));
      }
    });
    return Array.from(subs).sort();
  }, [selectedTopic, selectedYear, CURRICULUM_MAP]);

  const filteredExercises = useMemo(() => {
    return exercises.filter(ex => {
      const matchTopic = selectedTopic ? ex.topic_macro_area === selectedTopic : true;
      const matchSubTopic = selectedSubTopic ? ex.topic_name === selectedSubTopic : true;
      const matchYear = selectedYear ? ex.year_number === selectedYear : true;
      return matchTopic && matchSubTopic && matchYear;
    });
  }, [exercises, selectedTopic, selectedSubTopic, selectedYear]);

  const toggleSolution = (hash: string) => {
    setVisibleSolutions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(hash)) newSet.delete(hash);
      else newSet.add(hash);
      return newSet;
    });
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedTopic(null);
    setSelectedSubTopic(null);
    setSelectedYear(null);
  };

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-50 relative pb-32">
      <NavBar 
        onOpenContribute={() => setIsContributeModalOpen(true)} 
        onOpenDonation={() => setIsDonationModalOpen(true)} 
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24">
        <HeroSection onOpenInfo={() => setIsInfoModalOpen(true)} totalCount={totalCount} />

        <FilterSection 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          uniqueYears={uniqueYears}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          uniqueTopics={uniqueTopics}
          selectedSubTopic={selectedSubTopic}
          setSelectedSubTopic={setSelectedSubTopic}
          uniqueSubTopics={uniqueSubTopics}
        />

        <ExercisesGrid 
          loading={loading}
          filteredExercises={filteredExercises}
          visibleSolutions={visibleSolutions}
          toggleSolution={toggleSolution}
          resetFilters={resetFilters}
        />
      </main>

      <InfoModal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} />
      <ContributeModal isOpen={isContributeModalOpen} onClose={() => setIsContributeModalOpen(false)} />
      <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />
    </div>
  );
}
