import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calculator, Compass, FunctionSquare, Infinity } from 'lucide-react';

interface CollectionsGridProps {
  onSelectYear: (year: number) => void;
}

const collections = [
  // 1 (Top)
  { year: 1, title: "1° Anno", icon: Calculator, color: "from-blue-500 to-cyan-400", pos: { left: '50%', top: '10%' } },
  // 2 (Right-Top)
  { year: 2, title: "2° Anno", icon: BookOpen, color: "from-emerald-500 to-teal-400", pos: { left: '88%', top: '38%' } },
  // 3 (Right-Bottom)
  { year: 3, title: "3° Anno", icon: Compass, color: "from-amber-500 to-orange-400", pos: { left: '74%', top: '85%' } },
  // 4 (Left-Bottom)
  { year: 4, title: "4° Anno", icon: FunctionSquare, color: "from-pink-500 to-rose-400", pos: { left: '26%', top: '85%' } },
  // 5 (Left-Top)
  { year: 5, title: "5° Anno", icon: Infinity, color: "from-indigo-500 to-violet-400", pos: { left: '12%', top: '38%' } },
];

export function CollectionsGrid({ onSelectYear }: CollectionsGridProps) {
  return (
    <div className="relative w-full max-w-3xl mx-auto mb-16 aspect-square max-h-[80vh]">
      {/* Sfondo decorativo pentagonale opzionale */}
      <div className="absolute inset-10 sm:inset-16 md:inset-20 rounded-full border border-slate-200/50 dark:border-slate-800/50 opacity-20 hidden sm:block pointer-events-none"></div>

      {collections.map((col, index) => (
        <motion.button
          key={col.year}
          onClick={() => onSelectYear(col.year)}
          initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
          whileHover={{ scale: 1.05, x: "-50%", y: "-50%" }}
          whileTap={{ scale: 0.95, x: "-50%", y: "-50%" }}
          className="absolute w-[45%] sm:w-[35%] md:w-56 overflow-hidden group rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white/60 dark:bg-slate-900/60 p-4 sm:p-6 text-center transition-colors hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 backdrop-blur-md flex flex-col items-center justify-center"
          style={{ left: col.pos.left, top: col.pos.top }}
        >
          <div className="absolute top-0 right-0 p-2 sm:p-4 opacity-5 transition-opacity duration-300 ease-out group-hover:opacity-10 text-slate-900 dark:text-white pointer-events-none">
            <col.icon size={100} />
          </div>
          
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${col.color} flex items-center justify-center text-white mb-2 sm:mb-4 shadow-sm z-10`}>
            <col.icon size={20} className="sm:w-6 sm:h-6" />
          </div>
          
          <h3 className="text-sm sm:text-xl font-bold text-slate-800 dark:text-slate-100 mb-1 z-10 leading-tight">{col.title}</h3>
        </motion.button>
      ))}
    </div>
  );
}
