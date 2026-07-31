'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  CircleHelp,
  Loader2,
  Sparkles,
  Star,
  Target,
  XCircle,
  ArrowRight,
  LogOut,
  RotateCcw,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MathRenderer } from '@/components/MathRenderer';
import { ExerciseShareButton } from '@/components/ExerciseShareButton';
import { supabase } from '@/lib/supabase';
import {
  type ActiveSessionState,
  type Confidence,
  type PracticeAttempt,
  type PracticeFilters,
  type PracticeRecommendation,
  buildRecommendation,
  completeActiveSession,
  createSessionId,
  pickSessionExercises,
  saveActiveSession,
  summarizeAttempts,
} from '@/lib/practiceProgress';
import { type Exercise, ExerciseSchema } from '@/types/exercise';
import { z } from 'zod';

interface PracticeSessionProps {
  filters: PracticeFilters;
  onExit: () => void;
  onStartRecommended: (filters: PracticeFilters) => void;
  /** Resume from localStorage when true and compatible. */
  resumeIfPossible?: boolean;
}

type Phase = 'loading' | 'active' | 'summary' | 'error';

const CONFIDENCE_OPTIONS: {
  value: Confidence;
  label: string;
  description: string;
  icon: typeof CheckCircle2;
  className: string;
}[] = [
  {
    value: 'got_it',
    label: 'Risolto bene',
    description: 'So spiegare i passaggi',
    icon: CheckCircle2,
    className:
      'border-emerald-200 bg-emerald-50 text-emerald-800 hover:border-emerald-400 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300',
  },
  {
    value: 'unsure',
    label: 'Incerto',
    description: 'Ho indovinato o sono a metà',
    icon: CircleHelp,
    className:
      'border-amber-200 bg-amber-50 text-amber-900 hover:border-amber-400 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300',
  },
  {
    value: 'missed',
    label: 'Non risolto',
    description: 'Mi sono bloccato',
    icon: XCircle,
    className:
      'border-rose-200 bg-rose-50 text-rose-900 hover:border-rose-400 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-300',
  },
];

function filtersLabel(filters: PracticeFilters): string {
  const parts: string[] = [];
  if (filters.year) parts.push(`${filters.year}° anno`);
  if (filters.difficulty) parts.push(`difficoltà ${filters.difficulty}`);
  if (filters.topic) parts.push(filters.topic);
  return parts.length > 0 ? parts.join(' · ') : 'Mix libero';
}

export function PracticeSession({
  filters,
  onExit,
  onStartRecommended,
  resumeIfPossible = true,
}: PracticeSessionProps) {
  const [phase, setPhase] = useState<Phase>('loading');
  const [error, setError] = useState<string | null>(null);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [sessionMeta, setSessionMeta] = useState<ActiveSessionState | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [attempts, setAttempts] = useState<PracticeAttempt[]>([]);
  const [selectedConfidence, setSelectedConfidence] = useState<Confidence | null>(null);
  const [solutionVisible, setSolutionVisible] = useState(false);
  const [recommendation, setRecommendation] = useState<PracticeRecommendation | null>(null);

  const current = exercises[currentIndex] ?? null;
  const total = exercises.length;
  const progress = total > 0 ? ((currentIndex + (solutionVisible ? 1 : 0)) / total) * 100 : 0;

  const filtersKey = useMemo(
    () =>
      JSON.stringify({
        year: filters.year,
        topic: filters.topic,
        difficulty: filters.difficulty,
        size: filters.size,
      }),
    [filters.difficulty, filters.size, filters.topic, filters.year],
  );

  const loadSession = useCallback(async (signal: { cancelled: boolean }) => {
    // Yield so React does not treat the first updates as sync setState-in-effect.
    await Promise.resolve();
    if (signal.cancelled) return;

    setPhase('loading');
    setError(null);
    setSelectedConfidence(null);
    setSolutionVisible(false);
    setRecommendation(null);

    try {
      const params: Record<string, unknown> = {
        page_limit: 30,
        page_offset: 0,
      };
      if (filters.topic) params.filter_topic = filters.topic;
      if (filters.year) params.filter_year = filters.year;
      if (filters.difficulty) params.filter_difficulty = filters.difficulty;

      const { data, error: rpcError } = await supabase.rpc('search_exercises', params);
      if (rpcError) throw rpcError;
      if (signal.cancelled) return;

      const pool = z.array(ExerciseSchema).parse(data ?? []);
      const picked = pickSessionExercises(pool, filters.size);

      if (picked.length === 0) {
        setExercises([]);
        setSessionMeta(null);
        setError(
          'Nessun esercizio trovato con questi filtri. Allarga anno, argomento o difficoltà e riprova.',
        );
        setPhase('error');
        return;
      }

      const active: ActiveSessionState = {
        id: createSessionId(),
        filters,
        startedAt: new Date().toISOString(),
        shortCodes: picked.map((item) => item.short_code),
        currentIndex: 0,
        attempts: [],
      };
      setExercises(picked);
      setSessionMeta(active);
      setCurrentIndex(0);
      setAttempts([]);
      saveActiveSession(active);
      setPhase('active');
    } catch (loadError) {
      if (signal.cancelled) return;
      console.error('Errore avvio sessione di pratica:', loadError);
      setError('Non è stato possibile avviare la sessione. Controlla la connessione e riprova.');
      setPhase('error');
    }
  }, [filters]);

  useEffect(() => {
    const signal = { cancelled: false };
    // Fetch a new practice deck when filters change (parent remounts or size updates).
    // eslint-disable-next-line react-hooks/set-state-in-effect -- async session bootstrap
    void loadSession(signal);
    return () => {
      signal.cancelled = true;
    };
  }, [filtersKey, loadSession]);
  // Persist active progress when advancing
  useEffect(() => {
    if (!sessionMeta || phase !== 'active') return;
    saveActiveSession({
      ...sessionMeta,
      currentIndex,
      attempts,
      shortCodes: exercises.map((item) => item.short_code),
    });
  }, [attempts, currentIndex, exercises, phase, sessionMeta]);

  // resumeIfPossible reserved for a future hydrate path (kept for API stability)
  void resumeIfPossible;

  const handleAssess = useCallback(
    (confidence: Confidence) => {
      if (!current || selectedConfidence) return;
      setSelectedConfidence(confidence);
      setSolutionVisible(true);

      const attempt: PracticeAttempt = {
        shortCode: current.short_code,
        hash: current.generated_hash,
        topic: current.topic_name,
        macroArea: current.topic_macro_area,
        year: current.year_number,
        difficulty: current.difficulty_level,
        confidence,
        at: new Date().toISOString(),
      };
      setAttempts((prev) => {
        const withoutDup = prev.filter((item) => item.hash !== attempt.hash);
        return [...withoutDup, attempt];
      });

      void supabase.rpc('log_solution_view', { hash: current.generated_hash }).then(({ error: logError }) => {
        if (logError) console.error('Error logging solution view:', logError);
      });
    },
    [current, selectedConfidence],
  );

  const finishSession = useCallback(
    (finalAttempts: PracticeAttempt[]) => {
      if (!sessionMeta) return;
      const active: ActiveSessionState = {
        ...sessionMeta,
        currentIndex: exercises.length,
        attempts: finalAttempts,
        shortCodes: exercises.map((item) => item.short_code),
      };
      completeActiveSession(active);
      setRecommendation(buildRecommendation(filters, finalAttempts));
      setPhase('summary');
      saveActiveSession(null);
    },
    [exercises, filters, sessionMeta],
  );

  const handleNext = useCallback(() => {
    if (!selectedConfidence) return;
    if (currentIndex >= total - 1) {
      finishSession(attempts);
      return;
    }
    setCurrentIndex((index) => index + 1);
    setSelectedConfidence(null);
    setSolutionVisible(false);
  }, [attempts, currentIndex, finishSession, selectedConfidence, total]);

  const summary = useMemo(() => summarizeAttempts(attempts), [attempts]);

  if (phase === 'loading') {
    return (
      <div className="glass-panel rounded-[2rem] p-16 flex flex-col items-center justify-center text-slate-500 gap-4">
        <Loader2 className="animate-spin text-indigo-500" size={40} />
        <p className="font-medium">Prepariamo la tua sessione di pratica…</p>
      </div>
    );
  }

  if (phase === 'error') {
    return (
      <div className="glass-panel rounded-[2rem] p-10 sm:p-14 text-center space-y-6">
        <Target className="mx-auto text-slate-400" size={40} />
        <p className="text-lg font-medium text-slate-700 dark:text-slate-200">{error}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="secondary" onClick={onExit}>
            Torna all&apos;esplorazione
          </Button>
          <Button onClick={() => void loadSession({ cancelled: false })}>
            <RotateCcw size={16} />
            Riprova
          </Button>
        </div>
      </div>
    );
  }

  if (phase === 'summary') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-[2rem] p-6 sm:p-10 space-y-8"
      >
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-semibold border border-indigo-100 dark:border-indigo-900">
            <Sparkles size={14} />
            Sessione completata
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Ottimo lavoro</h2>
          <p className="text-slate-500 dark:text-slate-400">{filtersLabel(filters)}</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <StatCard label="Risolti" value={summary.got_it} tone="emerald" />
          <StatCard label="Incerti" value={summary.unsure} tone="amber" />
          <StatCard label="Non risolti" value={summary.missed} tone="rose" />
        </div>

        {recommendation && (
          <div className="rounded-2xl border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/60 dark:bg-indigo-950/30 p-5 sm:p-6 space-y-3">
            <h3 className="font-semibold text-indigo-900 dark:text-indigo-200">{recommendation.title}</h3>
            <p className="text-sm text-indigo-800/80 dark:text-indigo-300/90 leading-relaxed">
              {recommendation.detail}
            </p>
            <Button
              className="w-full sm:w-auto"
              onClick={() => onStartRecommended(recommendation.suggestedFilters)}
            >
              Inizia sessione consigliata
              <ArrowRight size={16} />
            </Button>
          </div>
        )}

        {attempts.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Dettaglio</h3>
            <ul className="space-y-2">
              {attempts.map((attempt) => (
                <li
                  key={attempt.hash}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 px-3 py-2 text-sm"
                >
                  <span className="font-medium truncate max-w-[60%]">
                    #{attempt.shortCode} · {attempt.topic}
                  </span>
                  <ConfidenceBadge confidence={attempt.confidence} />
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button variant="secondary" onClick={onExit}>
            <LogOut size={16} />
            Esci dalla pratica
          </Button>
          <Button onClick={() => void loadSession({ cancelled: false })}>
            <RotateCcw size={16} />
            Ripeti con gli stessi filtri
          </Button>
        </div>
      </motion.div>
    );
  }

  if (!current) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
            Sessione di pratica
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Esercizio {currentIndex + 1} di {total}
            <span className="hidden sm:inline"> · {filtersLabel(filters)}</span>
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={onExit} className="self-start sm:self-auto">
          <LogOut size={16} />
          Esci
        </Button>
      </div>

      <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <motion.div
          className="h-full bg-indigo-500 rounded-full"
          initial={false}
          animate={{ width: `${Math.min(100, Math.max(4, progress))}%` }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={current.generated_hash}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="glass-panel p-6 sm:p-10 rounded-[2rem]"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex gap-0.5" title={`Difficoltà ${current.difficulty_level}/5`}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={
                        star <= current.difficulty_level
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-200 dark:text-slate-700'
                      }
                    />
                  ))}
                </div>
                <span className="text-xs font-mono font-bold text-amber-800 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 rounded">
                  #{current.short_code}
                </span>
              </div>
              <h3 className="font-semibold text-lg">{current.topic_macro_area}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{current.topic_name}</p>
            </div>
            <ExerciseShareButton shortCode={current.short_code} topic={current.topic_name} />
          </div>

          <div className="py-8 px-4 sm:px-8 bg-white/40 dark:bg-black/20 rounded-2xl mb-8 overflow-x-auto">
            <MathRenderer content={current.problem_text} />
          </div>

          {!solutionVisible ? (
            <div className="space-y-4 border-t border-slate-200/60 dark:border-slate-700/50 pt-6">
              <div className="text-center space-y-1">
                <p className="font-semibold text-slate-800 dark:text-slate-100">
                  Come ti sei trovato?
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Autovalutati prima di vedere la soluzione: aiuta a fissare il metodo.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {CONFIDENCE_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleAssess(option.value)}
                    className={`rounded-2xl border p-4 text-left transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${option.className}`}
                  >
                    <option.icon size={20} className="mb-2" />
                    <div className="font-semibold text-sm">{option.label}</div>
                    <div className="text-xs opacity-80 mt-0.5">{option.description}</div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-6 border-t border-slate-200/60 dark:border-slate-700/50 pt-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 size={16} /> Soluzione
                </span>
                {selectedConfidence && <ConfidenceBadge confidence={selectedConfidence} />}
              </div>
              <div className="py-8 px-4 sm:px-8 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-2xl overflow-x-auto border border-emerald-100 dark:border-emerald-900/50">
                <MathRenderer content={current.solution_text} />
              </div>
              <div className="flex justify-center">
                <Button onClick={handleNext} className="min-w-[12rem]">
                  {currentIndex >= total - 1 ? 'Vedi riepilogo' : 'Prossimo esercizio'}
                  <ArrowRight size={16} />
                </Button>
              </div>
            </motion.div>
          )}
        </motion.article>
      </AnimatePresence>
    </div>
  );
}

function StatCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: 'emerald' | 'amber' | 'rose';
}) {
  const tones = {
    emerald: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border-emerald-100 dark:border-emerald-900',
    amber: 'bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-300 border-amber-100 dark:border-amber-900',
    rose: 'bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-300 border-rose-100 dark:border-rose-900',
  };
  return (
    <div className={`rounded-2xl border p-4 text-center ${tones[tone]}`}>
      <div className="text-2xl font-bold tabular-nums">{value}</div>
      <div className="text-xs font-semibold uppercase tracking-wide opacity-80 mt-1">{label}</div>
    </div>
  );
}

function ConfidenceBadge({ confidence }: { confidence: Confidence }) {
  const map = {
    got_it: { label: 'Risolto', className: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300' },
    unsure: { label: 'Incerto', className: 'bg-amber-100 text-amber-900 dark:bg-amber-900/50 dark:text-amber-300' },
    missed: { label: 'Non risolto', className: 'bg-rose-100 text-rose-900 dark:bg-rose-900/50 dark:text-rose-300' },
  };
  const item = map[confidence];
  return (
    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.className}`}>
      {item.label}
    </span>
  );
}
