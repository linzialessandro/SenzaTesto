'use client';
import TikzJax from 'react-tikzjax';

export default function TestTikz() {
  const content = `\\begin{tikzpicture}[scale=1.1]
% griglia
\\draw[very thin, gray!30] (-3.5,-3) grid (3.5,3.5);
% assi con numeri
\\draw[thick,->] (-3.6,0) -- (3.6,0) node[right] {$x$};
\\draw[thick,->] (0,-2.5) -- (0,3.5) node[above] {$y$};
\\foreach \\x in {-3,-2,2,3} \\draw (\\x,0.1) -- (\\x,-0.1) node[below] {\\x};
\\foreach \\x in {-1,1} \\draw (\\x,0.1) -- (\\x,-0.1) node[below] {\\x};
\\foreach \\y in {-2,-1,0,1,2} \\draw (0.1,\\y) -- (-0.1,\\y) node[above right] {\\y};
% funzione
\\draw[domain=-2.2:2.2,smooth,very thick,blue] plot (\\x,{(-1/10)*\\x^7+(32/45)*\\x^5-(191/90)*\\x^3+(11/15)*\\x});
\\end{tikzpicture}`;

  return (
    <div className="p-10 bg-slate-800 text-white min-h-screen">
      <h1>TikZ Test</h1>
      <div className="bg-slate-900 p-4 border border-red-500" id="tikz-container">
        <TikzJax content={content} />
      </div>
    </div>
  );
}
