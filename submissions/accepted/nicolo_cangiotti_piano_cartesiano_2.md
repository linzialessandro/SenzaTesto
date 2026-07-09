---
year: 2
macro_area: "Geometria Analitica"
topic: "Piano Cartesiano"
difficulty: 2
tags:
  - "distanza tra due punti"
---
# Problem Text
Osserva il piano cartesiano in cui sono segnati quattro punti $$P, Q, R, S$$. Dalle loro posizioni si evince che le coordinate sono:
$$P \equiv (3 ; 4)$$, $$Q \equiv (-5 ; -2)$$, $$R \equiv (4 ; -3)$$, $$S \equiv (-2 ; 5)$$

Calcola la distanza dal punto $$S$$ al punto $$R$$ e la distanza dal punto $$P$$ al punto $$Q$$. 

# Solution
Per calcolare la distanza tra due punti generici $$A(x_A; y_A)$$ e $$B(x_B; y_B)$$ applichiamo la formula della distanza derivata dal teorema di Pitagora:
$$d = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$

**Calcolo della distanza $$SR$$:**
I punti sono $$S(-2; 5)$$ e $$R(4; -3)$$.
$$SR = \sqrt{(4 - (-2))^2 + (-3 - 5)^2} = \sqrt{(4 + 2)^2 + (-8)^2} = \sqrt{6^2 + 64} = \sqrt{36 + 64} = \sqrt{100} = 10$$

**Calcolo della distanza $$PQ$$:**
I punti sono $$P(3; 4)$$ e $$Q(-5; -2)$$.
$$PQ = \sqrt{(-5 - 3)^2 + (-2 - 4)^2} = \sqrt{(-8)^2 + (-6)^2} = \sqrt{64 + 36} = \sqrt{100} = 10$$

Entrambi i segmenti $$SR$$ e $$PQ$$ hanno una lunghezza pari a 10.

```tikz
\begin{tikzpicture}[scale=0.6,>=stealth]
  % Griglia
  \draw[very thin, gray!40, dashed] (-7,-5) grid (6,7);
  
  % Assi
  \draw[->, thick] (-7,0) -- (6,0) node[right] {$x$};
  \draw[->, thick] (0,-5) -- (0,7) node[above] {$y$};
  
  \node[below left=2pt] at (0,0) {\scriptsize $0$};

  % Punti e segmenti
  \filldraw[red] (-2,5) circle (3pt) node[above right] {$S(-2,5)$};
  \filldraw[red] (4,-3) circle (3pt) node[below right] {$R(4,-3)$};
  \draw[red, thick] (-2,5) -- (4,-3) node[midway, above right] {$d=10$};

  \filldraw[blue] (3,4) circle (3pt) node[above right] {$P(3,4)$};
  \filldraw[blue] (-5,-2) circle (3pt) node[below left] {$Q(-5,-2)$};
  \draw[blue, thick] (3,4) -- (-5,-2) node[midway, above left] {$d=10$};
\end{tikzpicture}
```
