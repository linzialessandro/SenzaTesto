import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Target, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedTopic: string | null;
  selectedYear: number | null;
  selectedDifficulty: number | null;
  onSelectYear: (year: number | null) => void;
  onSelectDifficulty: (difficulty: number | null) => void;
  onClear: () => void;
  onStartPractice: () => void;
  practiceDisabledReason?: string | null;
  isPracticeActive?: boolean;
}

const filterSelectClassName = [
  'appearance-none w-full sm:w-auto sm:min-w-[11.5rem]',
  'rounded-2xl border border-slate-200/80 dark:border-slate-700/80',
  'bg-white/70 dark:bg-slate-900/70 backdrop-blur-md',
  'pl-4 pr-10 py-2.5 sm:py-3',
  'text-sm font-semibold text-slate-700 dark:text-slate-200',
  'shadow-sm outline-none transition-all duration-300',
  'hover:border-indigo-300/80 dark:hover:border-indigo-600/50',
  'hover:shadow-md hover:shadow-indigo-500/5',
  'focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20',
  'disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:shadow-sm',
  'cursor-pointer',
].join(' ');

function FilterSelect({
  id,
  label,
  value,
  onChange,
  disabled,
  children,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  const isActive = value !== '';

  return (
    <div className="relative w-full sm:w-auto flex-1 sm:flex-none min-w-0">
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        className={`${filterSelectClassName} ${
          isActive
            ? 'border-indigo-300/90 dark:border-indigo-600/60 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-800 dark:text-indigo-200'
            : ''
        }`}
      >
        {children}
      </select>
      <ChevronDown
        size={16}
        aria-hidden="true"
        className={`pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors ${
          isActive
            ? 'text-indigo-500 dark:text-indigo-400'
            : 'text-slate-400 dark:text-slate-500'
        }`}
      />
    </div>
  );
}

export function SearchSection({
  searchQuery,
  setSearchQuery,
  selectedTopic,
  selectedYear,
  selectedDifficulty,
  onSelectYear,
  onSelectDifficulty,
  onClear,
  onStartPractice,
  practiceDisabledReason = null,
  isPracticeActive = false,
}: SearchSectionProps) {
  const hasActiveFilters =
    Boolean(searchQuery) ||
    selectedTopic !== null ||
    selectedYear !== null ||
    selectedDifficulty !== null;
  const canStartPractice = !practiceDisabledReason && !isPracticeActive;

  return (
    <motion.section
      id="exercises-section"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="mb-12 max-w-3xl mx-auto px-4"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-pink-500/15 rounded-3xl blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100" />
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
            maxLength={100}
            disabled={isPracticeActive}
            className="w-full py-3 sm:py-4 bg-transparent border-none focus:ring-0 text-lg font-medium text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none disabled:opacity-60"
          />

          <AnimatePresence>
            {hasActiveFilters && !isPracticeActive && (
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
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider hidden sm:inline-block">
                    Azzera
                  </span>
                </div>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {/* Filters row: stacked full-width on mobile, inline chips on desktop */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-2.5 flex-1 min-w-0">
            <FilterSelect
              id="year-filter"
              label="Anno scolastico"
              value={selectedYear != null ? String(selectedYear) : ''}
              onChange={(value) => onSelectYear(value ? Number(value) : null)}
              disabled={isPracticeActive}
            >
              <option value="">Anno</option>
              <option value="1">1° anno</option>
              <option value="2">2° anno</option>
              <option value="3">3° anno</option>
              <option value="4">4° anno</option>
              <option value="5">5° anno</option>
            </FilterSelect>

            <FilterSelect
              id="difficulty-filter"
              label="Difficoltà"
              value={selectedDifficulty != null ? String(selectedDifficulty) : ''}
              onChange={(value) => onSelectDifficulty(value ? Number(value) : null)}
              disabled={isPracticeActive}
            >
              <option value="">Difficoltà</option>
              <option value="1">★ Base</option>
              <option value="2">★★ Guidata</option>
              <option value="3">★★★ Intermedia</option>
              <option value="4">★★★★ Avanzata</option>
              <option value="5">★★★★★ Sfida</option>
            </FilterSelect>
          </div>

          <AnimatePresence>
            {selectedTopic !== null && (
              <motion.span
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="inline-flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 rounded-2xl bg-indigo-50/90 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold border border-indigo-100/90 dark:border-indigo-800/50 backdrop-blur-sm w-full sm:w-auto"
              >
                <span className="text-indigo-400 dark:text-indigo-500 font-medium text-xs uppercase tracking-wide">
                  Collezione
                </span>
                <span className="truncate">{selectedTopic}</span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {!isPracticeActive && (
          <div className="flex flex-col items-center gap-2 pt-1">
            <Button
              size="sm"
              onClick={onStartPractice}
              disabled={!canStartPractice}
              title={practiceDisabledReason ?? 'Avvia una sessione guidata di 5–10 esercizi'}
              className="w-full sm:w-auto"
            >
              <Target size={16} />
              Inizia sessione di pratica
            </Button>
            {practiceDisabledReason ? (
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center max-w-md">
                {practiceDisabledReason}
              </p>
            ) : (
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center max-w-md">
                8 esercizi · soluzione dopo autovalutazione · progresso salvato solo sul dispositivo
              </p>
            )}
          </div>
        )}
      </div>
    </motion.section>
  );
}
