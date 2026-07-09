'use client';

import React, { Component, type ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

// Error Boundary per catturare errori di rendering LaTeX
interface ErrorBoundaryState {
  hasError: boolean;
}

class MathErrorBoundary extends Component<{ children: ReactNode; content: string }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-400 text-sm">
          <p className="font-medium">⚠️ Errore nel rendering della formula matematica</p>
          <pre className="mt-2 text-xs opacity-70 whitespace-pre-wrap break-words">{this.props.content.slice(0, 200)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

interface MathRendererProps {
  content: string;
}

import { TikzRenderer } from './TikzRenderer';

export const MathRenderer: React.FC<MathRendererProps> = ({ content }) => {
  return (
    <MathErrorBoundary content={content}>
      <div className="prose prose-slate dark:prose-invert max-w-none 
                      prose-p:leading-relaxed prose-p:my-2
                      prose-headings:mt-4 prose-headings:mb-2
                      prose-li:my-0 prose-ul:my-2 prose-ol:my-2">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[[rehypeKatex, { throwOnError: false, errorColor: '#dc2626' }]]}
          components={{
            code({ inline, className, children, ...props }: React.ComponentPropsWithoutRef<'code'> & { inline?: boolean }) {
              const match = /language-(\w+)/.exec(className || '');
              const contentStr = String(children).replace(/\n$/, '');
              
              const isTikz = !inline && match && (match[1] === 'tikz' || (match[1] === 'latex' && contentStr.includes('\\begin{tikzpicture}')));
              
              if (isTikz) {
                // Remove \begin{center} and \end{center} to ensure TikzJax parses it cleanly
                const cleanContent = contentStr
                  .replace(/\\begin\{center\}/g, '')
                  .replace(/\\end\{center\}/g, '')
                  .trim();
                  
                return (
                  <div className="flex justify-center my-6 overflow-x-auto bg-white p-4 rounded-xl dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <TikzRenderer content={cleanContent} />
                  </div>
                );
              }
              
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </MathErrorBoundary>
  );
};
