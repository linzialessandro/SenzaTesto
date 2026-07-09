'use client';
import React, { useEffect, useRef, useState } from 'react';

export const TikzRenderer: React.FC<{ content: string }> = ({ content }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const container = containerRef.current;
    if (!container) return;

    // Inizia caricamento (asincrono per evitare cascading render lint error)
    Promise.resolve().then(() => {
      if (isMounted) {
        setIsLoading(true);
        setError(null);
      }
    });

    // Pulisci il container
    container.innerHTML = '';

    // Crea lo script TikZJax
    const script = document.createElement('script');
    script.type = 'text/tikz';
    script.innerHTML = content;
    container.appendChild(script);

    // Inizializza un MutationObserver per aspettare la conversione dello script in SVG
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          for (const node of Array.from(mutation.addedNodes)) {
            if (node.nodeName.toLowerCase() === 'svg') {
              // Il rendering SVG è stato completato!
              if (isMounted) {
                setIsLoading(false);
              }
              observer.disconnect();
              return;
            }
          }
        }
      }
    });

    observer.observe(container, { childList: true });

    // Informa tikzjax che il DOM è "pronto" o forzane l'esecuzione
    setTimeout(() => {
      if (isMounted) {
        document.dispatchEvent(new Event('DOMContentLoaded'));
      }
    }, 100);

    // Fallback error timeout
    const timeout = setTimeout(() => {
      if (isMounted) {
        // Se c'è ancora uno script text/tikz e nessun SVG, qualcosa è andato storto
        const hasSvg = container.querySelector('svg');
        if (!hasSvg) {
          console.error("TikZJax timeout");
          setIsLoading(false);
          setError("Timeout del rendering TikZ");
        }
      }
    }, 10000);

    return () => {
      isMounted = false;
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [content]);

  return (
    <div className="relative min-h-[100px] flex items-center justify-center w-full">
      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-black/20 z-10 rounded-xl">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      )}
      
      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm flex items-center gap-2">
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      )}

      {/* Il container dove TikZJax inietterà l'SVG */}
      <div 
        ref={containerRef} 
        className={`w-full overflow-x-auto flex justify-center py-4 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
};

