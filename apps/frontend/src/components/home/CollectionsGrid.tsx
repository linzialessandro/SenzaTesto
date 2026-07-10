import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Calculator, Triangle, BarChart3, LineChart, Target, Dice5, TrendingUp, Scale, ChevronLeft, ChevronRight } from 'lucide-react';

interface CollectionsGridProps {
  onSelectTopic: (topic: string) => void;
}

const topics = [
  { 
    id: "Algebra", 
    title: "Algebra & Aritmetica", 
    icon: Calculator, 
    color: "from-blue-500 to-cyan-400"
  },
  { 
    id: "Geometria", 
    title: "Geometria", 
    icon: Triangle, 
    color: "from-emerald-500 to-teal-400"
  },
  { 
    id: "Geometria Analitica", 
    title: "Geometria Analitica", 
    icon: BarChart3, 
    color: "from-amber-500 to-orange-400"
  },
  { 
    id: "Analisi", 
    title: "Analisi Matematica", 
    icon: LineChart, 
    color: "from-pink-500 to-rose-400"
  },
  { 
    id: "Trigonometria", 
    title: "Goniometria & Trigonometria", 
    icon: Target, 
    color: "from-indigo-500 to-violet-400"
  },
  { 
    id: "Probabilità", 
    title: "Probabilità & Statistica", 
    icon: Dice5, 
    color: "from-purple-500 to-fuchsia-400"
  },
  {
    id: "Esponenziali logaritmi",
    title: "Esponenziali e Logaritmi",
    icon: TrendingUp,
    color: "from-lime-500 to-green-500"
  },
  {
    id: "equazioni disequazioni",
    title: "Equazioni e Disequazioni",
    icon: Scale,
    color: "from-orange-500 to-red-500"
  }
];

export function CollectionsGrid({ onSelectTopic }: CollectionsGridProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false }
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full max-w-6xl mx-auto mb-16 px-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {topics.map((topic, index) => (
            <div 
              key={topic.id} 
              className="flex-[0_0_75%] sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_33.3333%] min-w-0 pl-4"
            >
              <motion.button
                onClick={() => onSelectTopic(topic.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden group rounded-3xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70 p-6 md:p-8 text-center transition-all hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:border-slate-300 dark:hover:border-slate-700 backdrop-blur-md flex flex-col items-center justify-center h-full min-h-[220px] w-full"
              >
                {/* Sfondo icona gigante in trasparenza */}
                <div className="absolute -right-4 -bottom-4 p-4 opacity-5 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:opacity-10 text-slate-900 dark:text-white pointer-events-none">
                  <topic.icon size={120} strokeWidth={1.5} />
                </div>
                
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-white mb-4 shadow-sm z-10 transition-transform group-hover:scale-110 duration-300`}>
                  <topic.icon size={28} className="sm:w-8 sm:h-8" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 z-10 leading-tight">
                  {topic.title}
                </h3>
              </motion.button>
            </div>
          ))}
        </div>
      </div>

      {/* Pulsanti di navigazione Desktop */}
      <button
        onClick={scrollPrev}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 items-center justify-center rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all z-10 focus:outline-none"
        aria-label="Argomento precedente"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 items-center justify-center rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all z-10 focus:outline-none"
        aria-label="Argomento successivo"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
