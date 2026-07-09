'use client';
import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    process_tikz?: (element: HTMLScriptElement) => void;
  }
}

export const TikzRenderer: React.FC<{ content: string }> = ({ content }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !!window.process_tikz;
    }
    return false;
  });

  useEffect(() => {
    if (isLoaded) return;
    
    // Carica i font di TikzJax
    if (!document.querySelector('link[href="https://tikzjax.com/v1/fonts.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://tikzjax.com/v1/fonts.css';
      document.head.appendChild(link);
    }

    const scriptSelector = 'script[src="https://tikzjax.com/v1/tikzjax.js"]';
    let script = document.querySelector(scriptSelector) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.src = 'https://tikzjax.com/v1/tikzjax.js';
      document.head.appendChild(script);
    }
    
    const handleLoad = () => setIsLoaded(true);
    script.addEventListener('load', handleLoad);
    
    return () => {
      script.removeEventListener('load', handleLoad);
    };
  }, [isLoaded]);

  useEffect(() => {
    if (!isLoaded || !containerRef.current || typeof window.process_tikz !== 'function') return;

    // Svuota il contenitore
    containerRef.current.innerHTML = '';
    
    // TikzJax si aspetta uno script tag di tipo "text/tikz"
    const script = document.createElement('script');
    script.type = 'text/tikz';
    script.textContent = content;
    
    const wrapper = document.createElement('div');
    wrapper.appendChild(script);
    containerRef.current.appendChild(wrapper);

    try {
      window.process_tikz(script);
    } catch (e) {
      console.error('Errore durante il rendering TikZ:', e);
    }
  }, [content, isLoaded]);

  return (
    <div 
      ref={containerRef} 
      className="tikzjax-instance min-h-[100px] w-full flex justify-center items-center text-black"
    >
      {!isLoaded && <div className="animate-pulse w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>}
    </div>
  );
};
