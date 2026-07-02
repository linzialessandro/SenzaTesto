import React from 'react';
import { BookOpen, Coffee, Edit3 } from 'lucide-react';
import { ShareWidget } from '@/components/ShareWidget';
import { ThemeToggle } from '@/components/ThemeToggle';

interface NavBarProps {
  onOpenContribute: () => void;
  onOpenDonation: () => void;
  onLogoClick?: () => void;
}

export function NavBar({ onOpenContribute, onOpenDonation, onLogoClick }: NavBarProps) {
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-slate-200/50 dark:border-slate-800/50 supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <button 
          onClick={onLogoClick || (() => window.location.href = '/')} 
          className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity focus:outline-none shrink-0"
        >
          <BookOpen size={22} className="text-indigo-600 dark:text-indigo-400 sm:w-6 sm:h-6" />
          <span className="font-bold text-base sm:text-lg tracking-tight">SenzaTesto</span>
        </button>
        <div className="flex items-center gap-1.5 sm:gap-3">
          <ThemeToggle />
          <ShareWidget />
          <button 
            onClick={onOpenContribute}
            className="flex items-center justify-center gap-2 bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-200/50 dark:hover:bg-indigo-900/50 w-9 h-9 sm:w-auto sm:px-4 sm:py-2 rounded-full text-sm font-semibold transition-colors border border-indigo-200/50 dark:border-indigo-800/50 shadow-sm shrink-0"
            aria-label="Contribuisci"
          >
            <Edit3 size={16} />
            <span className="hidden sm:inline">Contribuisci</span>
          </button>
          <button 
            onClick={onOpenDonation}
            className="flex items-center justify-center gap-1.5 sm:gap-2 bg-amber-100/50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 hover:bg-amber-200/50 dark:hover:bg-amber-900/50 px-3 sm:px-4 h-9 sm:h-auto sm:py-2 rounded-full text-sm font-semibold transition-colors border border-amber-200/50 dark:border-amber-800/50 shadow-sm shrink-0"
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
