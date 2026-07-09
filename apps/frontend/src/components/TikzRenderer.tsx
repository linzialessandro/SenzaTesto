'use client';
import React, { useEffect, useState } from 'react';

export const TikzRenderer: React.FC<{ content: string }> = ({ content }) => {
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const renderTikz = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/tikz', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Errore durante la generazione del grafico');
        }

        if (isMounted) {
          setSvg(data.svg);
          setIsLoading(false);
        }
      } catch (err: unknown) {
        const error = err as Error;
        if (isMounted) {
          setError(error.message);
          setIsLoading(false);
        }
      }
    };

    renderTikz();

    return () => {
      isMounted = false;
    };
  }, [content]);

  if (error) {
    return (
      <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-400 text-sm">
        <p className="font-medium">⚠️ Errore nel rendering TikZ</p>
        <p className="mt-1 text-xs opacity-70">{error}</p>
      </div>
    );
  }

  return (
    <div className="tikzjax-instance min-h-[100px] w-full flex justify-center items-center text-black">
      {isLoading ? (
        <div className="animate-pulse w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: svg || '' }} />
      )}
    </div>
  );
};
