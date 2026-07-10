'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share, Check, Copy, MessageCircle, MessageSquare } from 'lucide-react';
import { Button } from './ui/Button';

export function ShareWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Chiudi il widget quando si clicca fuori
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && e.target instanceof Node && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // URL dinamico basato sull'origine corrente
  const shareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${window.location.pathname}`
    : 'https://linzialessandro.github.io/SenzaTesto/';
  const shareText = "Scopri SenzaTesto: il nuovo database di esercizi di matematica open-source generato con l'Intelligenza Artificiale. Preparati al meglio, gratis.";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <div className="relative" ref={containerRef}>
      <Button 
        variant="secondary" 
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-1.5 sm:gap-2 w-9 h-9 sm:w-auto sm:h-auto !p-0 sm:!px-4 sm:!py-2 shrink-0 border border-slate-200/50 dark:border-slate-800/50"
        aria-label="Condividi"
      >
        <Share size={16} />
        <span className="hidden sm:inline">Condividi</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl p-4 z-40"
          >
            <div className="mb-4">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Sfida i tuoi compagni</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Condividi la piattaforma e preparatevi insieme per la prossima verifica o per la Maturità.
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <button 
                onClick={shareToWhatsApp}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300 w-full text-left"
              >
                <div className="bg-emerald-100 text-emerald-600 p-2 rounded-full">
                  <MessageCircle size={16} />
                </div>
                Invia su WhatsApp
              </button>
              
              <button 
                onClick={shareToTwitter}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300 w-full text-left"
              >
                <div className="bg-sky-100 text-sky-600 p-2 rounded-full">
                  <MessageSquare size={16} />
                </div>
                Condividi su X
              </button>

              <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button 
                  onClick={handleCopy}
                  className="flex items-center justify-between w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors border border-slate-200 dark:border-slate-800"
                >
                  <span className="text-xs font-mono text-slate-500 truncate mr-2">{shareUrl}</span>
                  {copied ? (
                    <Check size={16} className="text-emerald-500 flex-shrink-0" />
                  ) : (
                    <Copy size={16} className="text-slate-400 hover:text-slate-600 flex-shrink-0" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
