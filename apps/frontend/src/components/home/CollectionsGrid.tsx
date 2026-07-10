import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Triangle, BarChart3, LineChart, Target, Dice5 } from 'lucide-react';

interface CollectionsGridProps {
  onSelectTopic: (topic: string) => void;
}

const topics = [
  { 
    id: "Algebra", 
    title: "Algebra & Aritmetica", 
    icon: Calculator, 
    color: "from-blue-500 to-cyan-400",
    delay: 0.1
  },
  { 
    id: "Geometria", 
    title: "Geometria", 
    icon: Triangle, 
    color: "from-emerald-500 to-teal-400",
    delay: 0.2
  },
  { 
    id: "Geometria Analitica", 
    title: "Geometria Analitica", 
    icon: BarChart3, 
    color: "from-amber-500 to-orange-400",
    delay: 0.3
  },
  { 
    id: "Analisi", 
    title: "Analisi Matematica", 
    icon: LineChart, 
    color: "from-pink-500 to-rose-400",
    delay: 0.4
  },
  { 
    id: "Trigonometria", 
    title: "Goniometria & Trigonometria", 
    icon: Target, 
    color: "from-indigo-500 to-violet-400",
    delay: 0.5
  },
  { 
    id: "Probabilità", 
    title: "Probabilità & Statistica", 
    icon: Dice5, 
    color: "from-purple-500 to-fuchsia-400",
    delay: 0.6
  },
];

export function CollectionsGrid({ onSelectTopic }: CollectionsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl mx-auto mb-16">
      {topics.map((topic) => (
        <motion.button
          key={topic.id}
          onClick={() => onSelectTopic(topic.id)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: topic.delay, ease: [0.23, 1, 0.32, 1] }}
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="relative overflow-hidden group rounded-3xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70 p-6 md:p-8 text-center transition-all hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:border-slate-300 dark:hover:border-slate-700 backdrop-blur-md flex flex-col items-center justify-center min-h-[180px]"
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
      ))}
    </div>
  );
}
