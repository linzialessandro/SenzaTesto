import React, { useMemo } from 'react';
import { BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InfoModal({ isOpen, onClose }: InfoModalProps) {
  const content = useMemo(() => (
    <>
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-slate-900 dark:bg-white rounded-2xl flex items-center justify-center mb-6 shadow-xl transform -rotate-6">
          <BookOpen size={32} className="text-white dark:text-slate-900" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight mb-4">La Matematica è di Tutti.</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
          Un manifesto per l&apos;istruzione pubblica italiana.
        </p>
      </div>

      <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-[17px]">
        <p>
          Oggi abbiamo a disposizione un potere senza precedenti: l&apos;Intelligenza Artificiale. È giunto il momento di mettere questa tecnologia al servizio della didattica.
        </p>
        <p>
          <strong>SenzaTesto</strong> nasce con una visione radicale: creare il più grande database di esercizi di matematica, generato e supervisionato da agenti AI specializzati. 
          Il nostro obiettivo è abbattere le barriere economiche, fornendo materiale didattico di altissima qualità a <strong className="text-slate-900 dark:text-white">tutti</strong>, specialmente a quegli studenti che non possono permettersi costosi libri di testo o lezioni private.
        </p>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 my-8">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <CheckCircle2 size={18} className="text-indigo-500" /> Il Nostro Impegno
          </h4>
          <ul className="space-y-3 mt-4 text-sm">
            <li className="flex gap-3"><ChevronRight size={16} className="shrink-0 mt-0.5" /> Completamente Open-Source e Gratuito. Per sempre.</li>
            <li className="flex gap-3"><ChevronRight size={16} className="shrink-0 mt-0.5" /> Sviluppato in Italia da un docente di matematica per gli studenti italiani.</li>
            <li className="flex gap-3"><ChevronRight size={16} className="shrink-0 mt-0.5" /> Sostenuto esclusivamente dalle donazioni per coprire i costi dell&apos;AI.</li>
          </ul>
        </div>
        <p className="text-center font-medium mt-8">
          Il futuro dell&apos;istruzione non è un privilegio. È un diritto open-source.
        </p>
        <div className="flex justify-center mt-8">
          <Button onClick={onClose}>Inizia a Esplorare</Button>
        </div>
      </div>
    </>
  ), [onClose]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollId="info-scroll-container">
      {content}
    </Modal>
  );
}
