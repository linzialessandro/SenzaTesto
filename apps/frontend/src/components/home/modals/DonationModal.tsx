import React from 'react';
import { Coffee, Info } from 'lucide-react';
import Image from 'next/image';
import paypalQr from '@/assets/paypal_pure.svg';
import { Modal } from '@/components/ui/Modal';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DonationModal({ isOpen, onClose }: DonationModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-amber-100 dark:bg-amber-900/40 rounded-2xl flex items-center justify-center mb-6 shadow-xl transform rotate-3">
          <Coffee size={32} className="text-amber-600 dark:text-amber-400" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight mb-4">Sostieni SenzaTesto</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
          Il tuo contributo ci aiuta a mantenere il progetto gratuito e a coprire i costi dell'Intelligenza Artificiale.
        </p>
      </div>

      <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-[17px]">
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
            Scansiona il QR Code o usa il link
          </h4>
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 inline-block">
              <Image src={paypalQr} alt="PayPal QR Code" className="w-48 h-48" />
            </div>
          </div>
          
          <a 
            href="https://paypal.me/Alessandro3319" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0070ba] hover:bg-[#003087] text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-sm w-full sm:w-auto justify-center"
          >
            Vai a PayPal
          </a>
        </div>

        <div className="bg-amber-50/50 dark:bg-amber-950/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/50">
          <h4 className="font-semibold text-amber-900 dark:text-amber-400 mb-2 flex items-center gap-2 text-base">
            <Info size={18} className="text-amber-500" /> Nota per la donazione
          </h4>
          <p className="text-sm text-amber-800/80 dark:text-amber-200/70">
            Al momento del trasferimento, ti preghiamo di specificare che si tratta di una <strong>donazione per il progetto SenzaTesto</strong>. Puoi farlo inserendo un messaggio oppure utilizzando l'apposita segnalazione di PayPal (flag "Questo pagamento è una donazione").
          </p>
        </div>
      </div>
    </Modal>
  );
}
