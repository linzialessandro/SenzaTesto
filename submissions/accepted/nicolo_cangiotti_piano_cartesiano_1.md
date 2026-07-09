---
year: 2
macro_area: "Geometria Analitica"
topic: "Piano Cartesiano"
difficulty: 1
tags:
  - "coordinate"
  - "punti"
---
# Problem Text
Rappresenta i seguenti punti nel piano cartesiano:
$$A \equiv (4 ; 3)$$, $$B \equiv (-3 ; 1)$$, $$C \equiv (0 ; -3)$$, $$D \equiv (-2 ; -1)$$, $$E \equiv (4 ; -2)$$

# Solution
Per rappresentare i punti nel piano cartesiano, ricordiamo che la prima coordinata rappresenta l'ascissa (asse $$x$$, orizzontale) e la seconda coordinata rappresenta l'ordinata (asse $$y$$, verticale).

- **$$A(4; 3)$$**: Ci muoviamo di 4 unità a destra dall'origine e 3 unità verso l'alto (primo quadrante).
- **$$B(-3; 1)$$**: Ci muoviamo di 3 unità a sinistra dall'origine e 1 unità verso l'alto (secondo quadrante).
- **$$C(0; -3)$$**: L'ascissa è nulla, quindi il punto giace sull'asse $$y$$. Ci muoviamo di 3 unità verso il basso a partire dall'origine.
- **$$D(-2; -1)$$**: Ci muoviamo di 2 unità a sinistra e 1 unità verso il basso (terzo quadrante).
- **$$E(4; -2)$$**: Ci muoviamo di 4 unità a destra e 2 unità verso il basso (quarto quadrante).

Tracciando gli assi cartesiani ortogonali, segniamo le rispettive posizioni individuando i punti.

```tikz
\begin{tikzpicture}[scale=0.8,>=stealth]
  % Griglia
  \draw[very thin, gray!40, dashed] (-5,-5) grid (6,5);
  
  % Assi
  \draw[->, thick] (-5,0) -- (6,0) node[right] {$x$};
  \draw[->, thick] (0,-5) -- (0,5) node[above] {$y$};
  
  % Tacche
  \foreach \x in {-4,-3,-2,-1,1,2,3,4,5} \draw (\x,0.1) -- (\x,-0.1) node[below=2pt] {\scriptsize $\x$};
  \foreach \y in {-4,-3,-2,-1,1,2,3,4} \draw (0.1,\y) -- (-0.1,\y) node[left=2pt] {\scriptsize $\y$};
  \node[below left=2pt] at (0,0) {\scriptsize $0$};

  % Punti
  \filldraw[blue] (4,3) circle (2.5pt) node[above right] {$A(4,3)$};
  \filldraw[blue] (-3,1) circle (2.5pt) node[above left] {$B(-3,1)$};
  \filldraw[blue] (0,-3) circle (2.5pt) node[right=4pt] {$C(0,-3)$};
  \filldraw[blue] (-2,-1) circle (2.5pt) node[below left] {$D(-2,-1)$};
  \filldraw[blue] (4,-2) circle (2.5pt) node[below right] {$E(4,-2)$};
\end{tikzpicture}
```
