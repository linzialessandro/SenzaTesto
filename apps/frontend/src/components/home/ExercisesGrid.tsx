import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Loader2, Sparkles, CheckCircle2, Eye, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MathRenderer } from '@/components/MathRenderer';
import { ExerciseShareButton } from '@/components/ExerciseShareButton';
import type { Exercise } from '@/types/exercise';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 20 }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 }
  }
};

interface ExercisesGridProps {
  loading: boolean;
  filteredExercises: Exercise[];
  visibleSolutions: Set<string>;
  toggleSolution: (hash: string) => void;
  resetFilters: () => void;
  error: string | null;
  hasMore: boolean;
  loadingMore: boolean;
  onLoadMore: () => void;
}

export function ExercisesGrid({
  loading,
  filteredExercises,
  visibleSolutions,
  toggleSolution,
  resetFilters,
  error,
  hasMore,
  loadingMore,
  onLoadMore
}: ExercisesGridProps) {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {loading ? (
        <motion.div variants={fadeUp} className="flex justify-center p-20 text-slate-400">
          <Loader2 className="animate-spin" size={48} />
        </motion.div>
      ) : error ? (
        <motion.div variants={fadeUp} className="text-center p-20 glass-panel rounded-[2rem]">
          <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 text-red-700 dark:text-red-400 text-sm max-w-md mx-auto">
            <p className="font-medium">⚠️ {error}</p>
          </div>
          <Button variant="ghost" className="mt-6" onClick={resetFilters}>
            Riprova
          </Button>
        </motion.div>
      ) : filteredExercises.length === 0 ? (
        <motion.div variants={fadeUp} className="text-center p-20 glass-panel rounded-[2rem] text-slate-500">
          <Sparkles size={48} className="mx-auto mb-4 text-slate-300 dark:text-slate-600" />
          <p className="text-xl font-medium">Nessun esercizio trovato per questi criteri.</p>
          <Button variant="ghost" className="mt-4" onClick={resetFilters}>
            Resetta Filtri
          </Button>
        </motion.div>
      ) : (
        <>
          <AnimatePresence mode="popLayout">
            {filteredExercises.map((ex) => (
              <motion.article 
                layout
                key={ex.generated_hash}
                id={`exercise-${ex.short_code}`}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                exit="exit"
                className="glass-panel p-6 sm:p-10 rounded-[2rem] relative overflow-hidden group transition-all duration-500"
              >
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <div className="flex flex-wrap justify-between items-start mb-8 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-0.5" title={`Difficoltà: ${ex.difficulty_level}/5`}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={18}
                            className={
                              star <= ex.difficulty_level
                                ? "fill-amber-400 text-amber-400"
                                : "text-slate-200 dark:text-slate-700"
                            }
                          />
                        ))}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg leading-none">{ex.topic_macro_area}</h3>
                          <a
                            href={`?exercise=${encodeURIComponent(ex.short_code)}`}
                            className="px-2 py-0.5 text-[10px] font-mono font-bold tracking-wider rounded bg-amber-100 text-amber-800 border border-amber-200 dark:bg-amber-900/40 dark:text-amber-400 dark:border-amber-700/50 uppercase select-all hover:bg-amber-200 dark:hover:bg-amber-900/70 transition-colors"
                            title="Apri il link permanente di questo esercizio"
                            aria-label={`Apri l'esercizio #${ex.short_code}`}
                          >
                            #{ex.short_code}
                          </a>
                          {ex.ai_generated && (
                            <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider rounded bg-purple-100 text-purple-800 border border-purple-200 dark:bg-purple-900/40 dark:text-purple-400 dark:border-purple-700/50 uppercase flex items-center gap-1" title="Questo esercizio è stato generato tramite Intelligenza Artificiale">
                              <Sparkles size={10} /> IA
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{ex.topic_name}</p>
                      </div>
                    </div>
                  {ex.tags && ex.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3 sm:mt-0 max-w-full">
                      {ex.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs rounded bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="py-8 px-4 sm:px-8 bg-white/40 dark:bg-black/20 rounded-2xl mb-6 overflow-x-auto">
                  <MathRenderer content={ex.problem_text} />
                </div>

                <div className="pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
                  <div className="flex justify-end pt-4">
                    <ExerciseShareButton shortCode={ex.short_code} topic={ex.topic_name} />
                  </div>
                  {!visibleSolutions.has(ex.generated_hash) ? (
                    <div className="flex justify-center mt-6">
                      <Button variant="secondary" onClick={() => toggleSolution(ex.generated_hash)} className="group/btn">
                        <Eye size={18} className="group-hover/btn:scale-110 transition-transform" />
                        Mostra Soluzione
                      </Button>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-8">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                            <CheckCircle2 size={16} /> Soluzione
                          </span>
                          <button 
                            onClick={() => toggleSolution(ex.generated_hash)}
                            className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium"
                          >
                            Nascondi
                          </button>
                        </div>
                        <div className="py-8 px-4 sm:px-8 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-2xl overflow-x-auto border border-emerald-100 dark:border-emerald-900/50">
                          <MathRenderer content={ex.solution_text} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>

          {hasMore && !loading && (
            <div className="flex justify-center mt-10">
              <Button variant="secondary" onClick={onLoadMore} disabled={loadingMore} className="group/btn">
                {loadingMore ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <>
                    <Sparkles size={18} className="group-hover/btn:scale-110 transition-transform" />
                    Carica altri esercizi
                  </>
                )}
              </Button>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
}
