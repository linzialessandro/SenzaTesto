import React from 'react';
import { BookOpen, Coffee, Edit3 } from 'lucide-react';
import { ShareWidget } from '@/components/ShareWidget';
import { ThemeToggle } from '@/components/ThemeToggle';

interface NavBarProps {
  onOpenContribute: () => void;
  onOpenDonation: () => void;
}

export function NavBar({ onOpenContribute, onOpenDonation }: NavBarProps) {
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/60 dark:bg-black/60 border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen size={24} className="text-indigo-600 dark:text-indigo-400" />
          <span className="font-bold text-lg tracking-tight">SenzaTesto</span>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <ShareWidget />
          <button 
            onClick={onOpenContribute}
            className="inline-flex items-center gap-2 bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-200/50 dark:hover:bg-indigo-900/50 px-4 py-2 rounded-full text-sm font-semibold transition-colors border border-indigo-200/50 dark:border-indigo-800/50 shadow-sm"
          >
            <Edit3 size={16} />
            <span className="hidden sm:inline">Contribuisci</span>
          </button>
          <button 
            onClick={onOpenDonation}
            className="inline-flex items-center gap-2 bg-amber-100/50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 hover:bg-amber-200/50 dark:hover:bg-amber-900/50 px-4 py-2 rounded-full text-sm font-semibold transition-colors border border-amber-200/50 dark:border-amber-800/50 shadow-sm"
          >
            <Coffee size={16} />
            <span className="hidden sm:inline">Sostieni il Progetto</span>
            <span className="sm:hidden">Dona</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
