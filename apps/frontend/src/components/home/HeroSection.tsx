import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Info } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface HeroSectionProps {
  onOpenInfo: () => void;
  totalCount?: number | null;
}

export function HeroSection({ onOpenInfo, totalCount }: HeroSectionProps) {
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
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" onClick={() => document.getElementById('exercises-section')?.scrollIntoView({ behavior: 'smooth' })}>
          Inizia la tua sessione
        </Button>
        <Button variant="secondary" size="lg" onClick={onOpenInfo} className="flex items-center gap-2">
          <Info size={18} />
          Scopri la Visione
        </Button>
      </div>
    </motion.section>
  );
}
