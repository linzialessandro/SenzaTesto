import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Info, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface HeroSectionProps {
  onOpenInfo: () => void;
  totalCount?: number | null;
}

export function HeroSection({ onOpenInfo, totalCount }: HeroSectionProps) {
  const handleStartSession = () => {
    const section = document.getElementById('exercises-section');
    if (section) {
      const windowHeight = window.innerHeight;
      const sectionRect = section.getBoundingClientRect();
      const sectionHeight = sectionRect.height;
      // Calcola la posizione esatta per centrare la sezione (barra di ricerca) nello schermo
      const offsetPosition = sectionRect.top + window.scrollY - (windowHeight / 2) + (sectionHeight / 2);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Focalizza l'input dopo lo scroll per un'esperienza seamless
      const input = section.querySelector('input[type="text"]') as HTMLInputElement;
      if (input) {
        setTimeout(() => {
          input.focus({ preventScroll: true });
        }, 600); // Ritardo per permettere il completamento dell'animazione di scroll
      }
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-24 relative"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-xs font-semibold text-slate-600 dark:text-slate-400 mb-8 border border-slate-200/50 dark:border-slate-800/50">
        <Sparkles size={14} className="text-amber-500" />
        <span>Generato dall&apos;Intelligenza Artificiale</span>
        {totalCount !== undefined && totalCount !== null && (
          <>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <span className="font-bold text-indigo-600 dark:text-indigo-400">{totalCount.toLocaleString('it-IT')} esercizi nel database</span>
          </>
        )}
      </div>
      
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-500">
        L&apos;eccellenza matematica,
        <br />
        <span className="text-indigo-600 dark:text-indigo-400">accessibile a tutti.</span>
      </h1>
      
      <p className="text-xl sm:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
        Un database infinito di esercizi, generato e validato da agenti AI specializzati. 
        Gratuito. Open-Source. Creato per gli studenti italiani.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <Button size="lg" onClick={handleStartSession} className="flex items-center gap-2 group">
          <Search size={18} className="transition-transform duration-300 group-hover:scale-110" />
          Cerca un Esercizio
        </Button>
        <Button variant="secondary" size="lg" onClick={onOpenInfo} className="flex items-center gap-2">
          <Info size={18} />
          Scopri la Visione
        </Button>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-col items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={handleStartSession}
      >
        <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest">Scorri per esplorare</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border-2 border-slate-300 dark:border-slate-700 flex justify-center items-start p-1"
        >
          <motion.div 
            animate={{ height: ['20%', '40%', '20%'], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1.5 bg-indigo-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
