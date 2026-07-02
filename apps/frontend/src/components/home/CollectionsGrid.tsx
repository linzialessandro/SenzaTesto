import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calculator, Compass, FunctionSquare, Infinity } from 'lucide-react';

interface CollectionsGridProps {
  onSelectYear: (year: number) => void;
}

const collections = [
  { year: 1, title: "1° Anno", desc: "Algebra base e Geometria", icon: Calculator, color: "from-blue-500 to-cyan-400" },
  { year: 2, title: "2° Anno", desc: "Equazioni, Sistemi e Radicali", icon: BookOpen, color: "from-emerald-500 to-teal-400" },
  { year: 3, title: "3° Anno", desc: "Geometria Analitica e Coniche", icon: Compass, color: "from-amber-500 to-orange-400" },
  { year: 4, title: "4° Anno", desc: "Goniometria ed Esponenziali", icon: FunctionSquare, color: "from-pink-500 to-rose-400" },
  { year: 5, title: "5° Anno", desc: "Analisi Matematica", icon: Infinity, color: "from-indigo-500 to-violet-400" },
];

export function CollectionsGrid({ onSelectYear }: CollectionsGridProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 max-w-5xl mx-auto"
    >
      {collections.map((col, index) => (
        <motion.button
          key={col.year}
          onClick={() => onSelectYear(col.year)}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="relative overflow-hidden group rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-900/40 p-6 text-left transition-colors hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 backdrop-blur-sm"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 transition-opacity duration-300 ease-out group-hover:opacity-10 text-slate-900 dark:text-white">
            <col.icon size={80} />
          </div>
          <div className="relative z-10">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${col.color} flex items-center justify-center text-white mb-4 shadow-sm`}>
              <col.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">{col.title}</h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{col.desc}</p>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
}
