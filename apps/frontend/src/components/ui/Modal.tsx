import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  scrollId?: string;
}

export function Modal({ isOpen, onClose, title, children, scrollId = "modal-scroll-container" }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        initial={false}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          display: isOpen ? 'block' : 'none'
        }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        style={{ willChange: 'opacity', pointerEvents: isOpen ? 'auto' : 'none' }}
        className="fixed inset-0 z-50 bg-slate-900/40 dark:bg-slate-950/60 sm:backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        initial={false}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          y: isOpen ? 0 : 20,
          display: isOpen ? 'flex' : 'none'
        }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        style={{ willChange: 'opacity, transform', pointerEvents: 'none' }}
        className="fixed inset-0 z-50 items-center justify-center p-4 sm:p-6"
      >
        <div
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          className="w-full max-w-2xl bg-white dark:bg-slate-900 sm:bg-white/80 sm:dark:bg-slate-900/80 sm:backdrop-blur-xl border border-slate-100 sm:border-white/40 dark:border-slate-800 sm:dark:border-slate-700/50 shadow-xl sm:shadow-2xl rounded-3xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          <div className="flex justify-between items-center p-6 sm:p-8 border-b border-slate-200/50 dark:border-slate-800/50">
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                {title}
              </h2>
            )}
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Chiudi finestra"
            >
              <X size={24} />
            </button>
          </div>
          <div id={scrollId} className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
            {children}
          </div>
        </div>
      </motion.div>
    </>
  );
}
