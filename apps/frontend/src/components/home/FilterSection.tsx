import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

interface FilterSectionProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedYear: number | null;
  setSelectedYear: (val: number | null) => void;
  uniqueYears: number[];
  selectedTopic: string | null;
  setSelectedTopic: (val: string | null) => void;
  uniqueTopics: string[];
  selectedSubTopic: string | null;
  setSelectedSubTopic: (val: string | null) => void;
  uniqueSubTopics: string[];
}

export function FilterSection({
  searchQuery, setSearchQuery,
  selectedYear, setSelectedYear, uniqueYears,
  selectedTopic, setSelectedTopic, uniqueTopics,
  selectedSubTopic, setSelectedSubTopic, uniqueSubTopics
}: FilterSectionProps) {
  return (
    <motion.section
      id="exercises-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="mb-16 max-w-4xl mx-auto space-y-6"
    >
      {/* Spotlight Search */}
      <div className="glass-panel p-2 sm:p-4 rounded-3xl flex items-center gap-3">
        <div className="relative w-full flex-1">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search size={20} className="text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Cerca argomenti specifici (es. 'Derivate', 'Disequazioni')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-transparent border-none focus:ring-0 text-lg font-medium text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none"
          />
        </div>
      </div>
      
      {/* Visual Filters */}
      <div className="bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-4 text-slate-700 dark:text-slate-300">
          <Filter size={18} />
          <h3 className="font-semibold text-lg">Esplora il Database</h3>
        </div>
        
        {/* Year Chips */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Seleziona l&apos;Anno Scolastico</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedYear(null)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedYear === null ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md' : 'bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
            >
              Tutti
            </button>
            {uniqueYears.map(y => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedYear === y ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md' : 'bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
              >
                {y}° Anno
              </button>
            ))}
          </div>
        </div>

        {/* Topic Chips */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Macro Area</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setSelectedTopic(null); setSelectedSubTopic(null); }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedTopic === null ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
            >
              Tutte
            </button>
            {uniqueTopics.map(t => (
              <button
                key={t}
                onClick={() => { setSelectedTopic(t); setSelectedSubTopic(null); }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedTopic === t ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        
        {/* SubTopic Chips */}
        <AnimatePresence>
          {selectedTopic && uniqueSubTopics.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="overflow-hidden border-t border-slate-200/50 dark:border-slate-800/50 pt-6"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Argomento Specifico</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedSubTopic(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${!selectedSubTopic ? 'bg-pink-600 text-white shadow-sm' : 'bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'}`}
                >
                  Qualsiasi
                </button>
                {uniqueSubTopics.map(sub => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubTopic(sub)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${selectedSubTopic === sub ? 'bg-pink-600 text-white shadow-sm' : 'bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'}`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
