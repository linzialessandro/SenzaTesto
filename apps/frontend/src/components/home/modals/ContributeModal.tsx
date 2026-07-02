import React from 'react';
import { Sparkles, Mail } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';

interface ContributeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContributeModal({ isOpen, onClose }: ContributeModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl transform rotate-3">
          <Sparkles size={32} className="text-white" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight mb-4">Diventa un Contributor.</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
          Unisciti alla missione. Aiutaci a far crescere il database di SenzaTesto inviando i tuoi esercizi in formato Markdown.
        </p>
      </div>

      <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-[17px]">
        <p>
          Il nostro nuovo workflow basato su Markdown ti permette di inviare esercizi completi di testo, problemi in LaTeX e soluzioni. I tuoi esercizi verranno revisionati e resi disponibili gratuitamente per tutti gli studenti.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          <a 
            href="https://github.com/linzialessandro/SenzaTesto/new/main/submissions?filename=nuovo_esercizio.md&value=---%0Ayear%3A%20%5B1-5%5D%0Amacro_area%3A%20%5BArea%20Macro%5D%0Atopic%3A%20%5BArgomento%5D%0Adifficulty%3A%20%5B1-5%5D%0Atags%3A%0A%20%20-%20tag1%0A%20%20-%20tag2%0A---%0A%23%20Problem%20Text%0A%5BTesto%20del%20problema%20qui%5D%0A%0A%23%20Latex%20Problem%0A%5BProblema%20in%20LaTeX%20qui%5D%0A%0A%23%20Latex%20Solution%0A%5BSoluzione%20in%20LaTeX%20qui%5D%0A" 

            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-white transition-colors bg-white dark:bg-slate-900/50"
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
              className="text-slate-900 dark:text-white"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
            </svg>
            <span className="font-semibold text-slate-900 dark:text-white">Invia via GitHub</span>
            <span className="text-sm text-center">Fai una Pull Request inserendo un .md in submissions/</span>
          </a>

          <a 
            href={`mailto:alessandro.linzi.phd@icloud.com?subject=SenzaTesto%20-%20Nuovo%20Esercizio&body=---%0Ayear%3A%20%5B1-5%5D%0Amacro_area%3A%20%5BArea%20Macro%5D%0Atopic%3A%20%5BArgomento%5D%0Adifficulty%3A%20%5B1-5%5D%0Atags%3A%0A%20%20-%20tag1%0A%20%20-%20tag2%0A---%0A%23%20Problem%20Text%0A%5BTesto%20del%20problema%20qui%5D%0A%0A%23%20Latex%20Problem%0A%5BProblema%20in%20LaTeX%20qui%5D%0A%0A%23%20Latex%20Solution%0A%5BSoluzione%20in%20LaTeX%20qui%5D%0A`}
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/50 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors bg-indigo-50/30 dark:bg-indigo-900/10"
          >
            <Mail size={32} className="text-indigo-600 dark:text-indigo-400" />
            <span className="font-semibold text-indigo-700 dark:text-indigo-300">Invia via Email</span>
            <span className="text-sm text-center text-indigo-600/80 dark:text-indigo-400/80">Usa il nostro template pre-compilato</span>
          </a>
        </div>

        <p className="text-center text-sm font-medium mt-8">
          Non sai come scrivere in LaTeX? Non preoccuparti, l'AI ti darà una mano a tradurre!
        </p>
      </div>
    </Modal>
  );
}
