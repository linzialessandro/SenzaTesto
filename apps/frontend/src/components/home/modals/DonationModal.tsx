"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Coffee, Info, HelpCircle, Heart, Sparkles, Server, Zap, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import paypalQr from '@/assets/paypal_pure.svg';
import { Modal } from '@/components/ui/Modal';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [view, setView] = useState<'main' | 'costs'>('main');

  // Reset view to main when modal closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setView('main'), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Reset scroll when view changes
  useEffect(() => {
    const el = document.getElementById('donation-scroll-container');
    if (el) {
      el.scrollTop = 0;
    }
  }, [view]);

  const content = useMemo(() => (
    view === 'main' ? (
      <div className="animate-in fade-in sm:zoom-in-95 duration-300 ease-out">
        {/* Headline & Emotional Hook */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-rose-100 dark:bg-rose-900/40 rounded-3xl flex items-center justify-center mb-6 shadow-xl transform -rotate-3">
            <Heart size={32} className="text-rose-600 dark:text-rose-400 fill-current" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
            Sostieni l'apprendimento libero
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-lg mx-auto">
            SenzaTesto offre gratuitamente a studenti e docenti migliaia di esercizi di alta qualità generati tramite Intelligenza Artificiale.
          </p>
        </div>

        {/* Value Proposition & CTA */}
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 text-center mb-6 shadow-sm">
          <p className="text-slate-600 dark:text-slate-400 font-medium mb-6">
            Aiutaci a mantenere il progetto senza pubblicità e a coprire i costi dell'IA per generare sempre nuovi contenuti.
          </p>
          
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 inline-block transform transition-transform hover:scale-105">
              <Image src={paypalQr} alt="PayPal QR Code" className="w-40 h-40 sm:w-48 sm:h-48" />
            </div>
          </div>
          
          <a 
            href="https://paypal.me/Alessandro3319" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0070ba] hover:bg-[#003087] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-blue-500/30 w-full sm:w-auto justify-center"
          >
            Dona con PayPal
          </a>
          
          <div className="mt-8 flex flex-col items-center gap-3">
            <button 
              onClick={() => setView('costs')}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors bg-slate-100/50 hover:bg-indigo-50 dark:bg-slate-800/30 dark:hover:bg-indigo-900/30 px-4 py-2 rounded-full border border-slate-200/50 dark:border-slate-700/50"
            >
              <HelpCircle size={16} />
              Che costi coprono le mie donazioni?
            </button>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 p-5 rounded-2xl border border-amber-100/50 dark:border-amber-900/50 flex items-start gap-3">
          <Info size={20} className="text-amber-500 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 dark:text-amber-200/80 leading-relaxed">
            Al momento del pagamento, ti preghiamo di inserire un messaggio o usare l'apposita opzione di PayPal per specificare che si tratta di una <strong>donazione per il progetto SenzaTesto</strong>.
          </p>
        </div>
      </div>
    ) : (
      <div className="animate-in fade-in slide-in-from-right-4 duration-300 ease-out">
        <button 
          onClick={() => setView('main')}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
        >
          <ArrowLeft size={16} />
          Torna alla donazione
        </button>
        
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-3xl flex items-center justify-center mb-6 shadow-xl">
            <Zap size={32} className="text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
            L'impatto della tua donazione
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-lg mx-auto">
            Come trasformiamo il tuo supporto in istruzione accessibile a tutti, gratuitamente e per sempre.
          </p>
        </div>

        <div className="space-y-5">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg flex items-center gap-2">
              <Server size={20} className="text-indigo-500" />
              I costi dell'Intelligenza Artificiale
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
              SenzaTesto genera esercizi didattici su misura utilizzando modelli linguistici di ultima generazione. Ogni richiesta a questi modelli richiede un'enorme potenza di calcolo, che si traduce in un costo di alcuni centesimi (chiamata API) per ogni esercizio generato.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">~1€</div>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">Un piccolo gesto</p>
              <p className="text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed">
                Finanzia la generazione di circa <strong>20-30 nuovi esercizi</strong> complessi, completi di soluzioni dettagliate.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800 shadow-sm relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-4">
                <Sparkles size={24} className="text-blue-500/30" />
              </div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">~5€</div>
              <p className="text-sm font-bold text-blue-500/80 dark:text-blue-400/80 mb-3 uppercase tracking-wider">Un grande impatto</p>
              <p className="text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed relative z-10">
                Ci permette di creare un intero <strong>nuovo capitolo</strong> (oltre 100 esercizi) per tutti gli studenti e professori.
              </p>
            </div>
          </div>
          
          <p className="text-center text-[15px] font-medium text-slate-500 dark:text-slate-400 pt-3">
            Ogni esercizio generato rimane nel database per sempre.
          </p>
          
          <div className="pt-4">
            <button 
              onClick={() => setView('main')}
              className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 px-6 py-4 rounded-full font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-md text-center"
            >
              Voglio contribuire
            </button>
          </div>
        </div>
      </div>
    )
  ), [view]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollId="donation-scroll-container">
      {content}
    </Modal>
  );
}
