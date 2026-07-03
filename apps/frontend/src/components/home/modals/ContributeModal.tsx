import React, { useState } from 'react';
import { Sparkles, Mail, AlertTriangle, ChevronLeft, Plus } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { motion, AnimatePresence } from 'framer-motion';

type ContributionType = 'new' | 'error' | null;

interface ContributeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContributeModal({ isOpen, onClose }: ContributeModalProps) {
  const [contributionType, setContributionType] = useState<ContributionType>(null);

  const handleClose = () => {
    onClose();
    // Reset state after animation completes
    setTimeout(() => setContributionType(null), 300);
  };

  const renderStep1 = () => (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full"
    >
      <div className="text-center mb-6 sm:mb-8">
        <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-xl transform rotate-3">
          <Sparkles size={28} className="text-white sm:w-8 sm:h-8" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 sm:mb-4">Come vuoi contribuire?</h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-lg mx-auto">
          Scegli se aggiungere nuovo materiale al database o aiutarci a correggere eventuali refusi in esercizi esistenti.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
        <button
          onClick={() => setContributionType('new')}
          className="flex flex-row sm:flex-col items-start gap-4 p-4 sm:p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-all text-left group"
        >
          <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl group-hover:scale-110 transition-transform shrink-0">
            <Plus className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Nuovo Esercizio</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Proponi un nuovo problema, completo di testo in LaTeX e soluzione, per arricchire il database.
            </p>
          </div>
        </button>

        <button
          onClick={() => setContributionType('error')}
          className="flex flex-row sm:flex-col items-start gap-4 p-4 sm:p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500/50 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 transition-all text-left group"
        >
          <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl group-hover:scale-110 transition-transform shrink-0">
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-500" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Segnala Errore</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Hai trovato un refuso o un errore matematico? Segnalacelo per aiutarci a mantenere i contenuti corretti.
            </p>
          </div>
        </button>
      </div>
    </motion.div>
  );

  const renderStep2 = () => {
    const isNew = contributionType === 'new';

    const githubLink = isNew 
      ? "https://github.com/linzialessandro/SenzaTesto/new/main/submissions/pending?filename=nuovo_esercizio.md&value=---%0Ayear%3A%20%5B1-5%5D%0Amacro_area%3A%20%5BArea%20Macro%5D%0Atopic%3A%20%5BArgomento%5D%0Adifficulty%3A%20%5B1-5%5D%0Atags%3A%0A%20%20-%20tag1%0A%20%20-%20tag2%0A---%0A%23%20Problem%20Text%0A%5BTesto%20del%20problema%20qui%5D%0A%0A%23%20Solution%0A%5BSoluzione%20qui%5D%0A"
      : "https://github.com/linzialessandro/SenzaTesto/issues/new?title=Segnalazione%20Errore:%20%5BID%20o%20Short%20Code%5D&body=---%0Aesercizio_id%3A%20%5BID%20o%20Short%20Code%20dell'esercizio%5D%0Atipo_errore%3A%20%5BTesto%20del%20problema%20%2F%20Soluzione%20%2F%20Altro%5D%0A---%0A%23%20Descrizione%20dell'errore%0A%5BDescrivi%20l'errore%20o%20il%20refuso%5D%0A%0A%23%20Correzione%20proposta%0A%5BInserisci%20la%20correzione%5D%0A";

    const emailSubject = isNew ? "SenzaTesto - Nuovo Esercizio" : "SenzaTesto - Segnalazione Errore";
    
    const emailBodyNew = `---
year: [1-5]
macro_area: [Area Macro]
topic: [Argomento]
difficulty: [1-5]
tags:
  - tag1
  - tag2
---
# Problem Text
[Testo del problema qui]

# Solution
[Soluzione qui]
`;

    const emailBodyError = `---
esercizio_id: [ID o Short Code dell'esercizio]
tipo_errore: [Testo del problema / Soluzione / Altro]
---
# Descrizione dell'errore
[Descrivi l'errore o il refuso]

# Correzione proposta
[Inserisci la correzione]
`;

    const emailLink = `mailto:alessandro.linzi.phd@icloud.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(isNew ? emailBodyNew : emailBodyError)}`;

    return (
      <motion.div
        key="step2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col h-full"
      >
        <button 
          onClick={() => setContributionType(null)}
          className="flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 w-fit mb-4 px-2 py-1 -ml-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Indietro
        </button>

        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 sm:mb-4">
            {isNew ? "Proponi un esercizio" : "Segnala un errore"}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-lg mx-auto">
            {isNew 
              ? "Invia un esercizio completo di testo, problemi in LaTeX e soluzioni." 
              : "Aiutaci a correggere i refusi. Usa i nostri template per fornire le info necessarie."}
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-[15px] sm:text-[17px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <a 
              href={githubLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-4 sm:gap-3 p-4 sm:p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-white transition-colors bg-white dark:bg-slate-900/50 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-900 dark:text-white group-hover:scale-110 transition-transform shrink-0"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
              </svg>
              <div className="flex flex-col text-left sm:text-center">
                <span className="font-semibold text-slate-900 dark:text-white text-base sm:text-lg">Invia via GitHub</span>
                <span className="text-sm">
                  {isNew ? "Fai una Pull Request in submissions/pending/" : "Apri una Issue pre-compilata nella repository"}
                </span>
              </div>
            </a>

            <a 
              href={emailLink}
              className="flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-4 sm:gap-3 p-4 sm:p-6 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/50 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors bg-indigo-50/30 dark:bg-indigo-900/10 group"
            >
              <Mail size={32} className="text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform shrink-0" />
              <div className="flex flex-col text-left sm:text-center">
                <span className="font-semibold text-indigo-700 dark:text-indigo-300 text-base sm:text-lg">Invia via Email</span>
                <span className="text-sm text-indigo-600/80 dark:text-indigo-400/80">
                  Usa il template pre-compilato nel tuo client
                </span>
              </div>
            </a>
          </div>

          {isNew && (
            <p className="text-center text-sm font-medium mt-6 sm:mt-8">
              Non sai come scrivere in LaTeX? Non preoccuparti, l'AI ti darà una mano a tradurre!
            </p>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="overflow-hidden relative min-h-[380px] sm:min-h-[440px]">
        <AnimatePresence mode="wait" initial={false}>
          {contributionType === null ? renderStep1() : renderStep2()}
        </AnimatePresence>
      </div>
    </Modal>
  );
}
