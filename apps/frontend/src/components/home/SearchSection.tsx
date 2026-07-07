import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedYear: number | null;
  onClear: () => void;
}

export function SearchSection({ searchQuery, setSearchQuery, selectedYear, onClear }: SearchSectionProps) {
  return (
    <motion.section
      id="exercises-section"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="mb-12 max-w-3xl mx-auto px-4"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-pink-500/15 rounded-3xl blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"></div>
        <div className="relative flex items-center gap-3 p-2 sm:p-3 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-all duration-300 focus-within:ring-2 focus-within:ring-indigo-500/50 focus-within:border-indigo-500/50 backdrop-blur-md">
          <div className="pl-4 flex items-center text-slate-400">
            <Search size={24} />
          </div>
          <input
            type="text"
            aria-label="Cerca esercizi per argomento o codice"
            placeholder="Esplora un argomento o inserisci il codice dell'esercizio..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 sm:py-4 bg-transparent border-none focus:ring-0 text-lg font-medium text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none"
          />
          
          <AnimatePresence>
            {(searchQuery || selectedYear !== null) && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                onClick={onClear}
                whileTap={{ scale: 0.95 }}
                className="pr-2 sm:pr-4 pl-2 py-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none shrink-0"
                aria-label="Azzera ricerca"
              >
                <div className="bg-slate-100/80 dark:bg-slate-800/80 rounded-full p-1.5 flex items-center gap-1.5 sm:gap-2 pr-3 sm:pr-4 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
                  <X size={16} />
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider hidden sm:inline-block">Azzera</span>
                </div>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <AnimatePresence>
        {selectedYear !== null && !searchQuery && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="mt-6 text-center overflow-hidden"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold border border-indigo-100 dark:border-indigo-800/50">
              Collezione attiva: {selectedYear}° Anno
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
