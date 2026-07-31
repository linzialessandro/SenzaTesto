'use client';

import { useCallback, useState } from 'react';
import { Check, Copy, MessageCircle, Share2 } from 'lucide-react';

interface ExerciseShareButtonProps {
  shortCode: string;
  topic: string;
}

function createExerciseUrl(shortCode: string): string {
  const url = new URL(window.location.href);
  url.search = '';
  url.hash = '';
  url.searchParams.set('exercise', shortCode);
  return url.toString();
}

function createShareText(topic: string, url: string): string {
  return `Prova questo esercizio di ${topic} su SenzaTesto: ${url}`;
}

export function ExerciseShareButton({ shortCode, topic }: ExerciseShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyUrl = useCallback(async (url: string) => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2_000);
  }, []);

  const handleCopy = useCallback(async () => {
    const url = createExerciseUrl(shortCode);
    try {
      await copyUrl(url);
    } catch (error) {
      console.error('Impossibile copiare il link dell’esercizio:', error);
    }
  }, [copyUrl, shortCode]);

  const handleWhatsApp = useCallback(() => {
    const url = createExerciseUrl(shortCode);
    const text = createShareText(topic, url);
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }, [shortCode, topic]);

  const handleShare = useCallback(async () => {
    const url = createExerciseUrl(shortCode);
    const shareData = {
      title: `Esercizio di ${topic} · SenzaTesto`,
      text: `Prova questo esercizio di ${topic} su SenzaTesto.`,
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
      }
    }

    try {
      await copyUrl(url);
    } catch (error) {
      console.error('Impossibile copiare il link dell’esercizio:', error);
    }
  }, [copyUrl, shortCode, topic]);

  return (
    <div className="inline-flex items-center gap-1">
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition-colors"
        aria-label={`Condividi l'esercizio #${shortCode}`}
        title={copied ? 'Link copiato' : 'Condividi esercizio'}
      >
        {copied ? <Check size={14} className="text-emerald-500" /> : <Share2 size={14} />}
        <span>{copied ? 'Copiato' : 'Condividi'}</span>
      </button>
      <button
        type="button"
        onClick={handleWhatsApp}
        className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
        aria-label={`Condividi l'esercizio #${shortCode} su WhatsApp`}
        title="WhatsApp"
      >
        <MessageCircle size={14} />
        <span className="hidden sm:inline">WhatsApp</span>
      </button>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition-colors"
        aria-label={`Copia il link dell'esercizio #${shortCode}`}
        title="Copia link"
      >
        <Copy size={12} />
        <span className="hidden sm:inline">Copia</span>
      </button>
    </div>
  );
}
