---
year: 2
macro_area: "Geometria Analitica"
topic: "Piano Cartesiano"
difficulty: 2
tags:
  - "poligoni nel piano"
  - "triangoli"
  - "perimetro e area"
---
# Problem Text
Considera i punti $$A \equiv (2;2)$$, $$B \equiv (6;2)$$ e $$C \equiv (2;5)$$.
a) Rappresentali nel piano cartesiano.
b) Calcola la lunghezza dei lati e il perimetro del triangolo $$ABC$$.
c) Determina il tipo di triangolo e la sua area.

# Solution
**a) Rappresentazione**
Segniamo nel piano il punto $$A(2;2)$$, il punto $$B(6;2)$$ spostandoci 4 unità a destra rispetto ad $$A$$, e il punto $$C(2;5)$$ posizionandoci 3 unità sopra ad $$A$$. Congiungendo i punti, chiudiamo la figura e otteniamo il triangolo richiesto.

**b) Lunghezza dei lati e perimetro**
I lati $$AB$$ e $$AC$$ sono paralleli rispettivamente all'asse $$x$$ e all'asse $$y$$. Possiamo calcolarne la misura tramite il valore assoluto della differenza delle coordinate che variano:
$$AB = |x_B - x_A| = |6 - 2| = 4$$
$$AC = |y_C - y_A| = |5 - 2| = 3$$
Per il lato obliquo $$BC$$, usiamo la formula generale della distanza tra due punti:
$$BC = \sqrt{(x_C - x_B)^2 + (y_C - y_B)^2} = \sqrt{(2 - 6)^2 + (5 - 2)^2} = \sqrt{(-4)^2 + 3^2} = \sqrt{16 + 9} = \sqrt{25} = 5$$

Il perimetro del triangolo sarà la somma dei suoi lati:
$$2p = AB + AC + BC = 4 + 3 + 5 = 12$$

**c) Tipo di triangolo e area**
Osserviamo che il lato $$AB$$ giace su una retta orizzontale e il lato $$AC$$ giace su una retta verticale. Questi due lati sono perpendicolari tra loro ($$AB \perp AC$$). Di conseguenza, l'angolo in $$A$$ misura $$90^{\circ}$$ e il triangolo $$ABC$$ è un **triangolo rettangolo**.

In un triangolo rettangolo, i cateti sono le basi e le relative altezze. Per calcolare l'area, usiamo quindi $$AB$$ e $$AC$$:
$$\text{Area} = \frac{\text{cateto}_1 \cdot \text{cateto}_2}{2} = \frac{AB \cdot AC}{2} = \frac{4 \cdot 3}{2} = \frac{12}{2} = 6$$

```tikz
\begin{tikzpicture}[scale=0.8,>=stealth]
  % Griglia e assi
  \draw[very thin, gray!40, dashed] (-1,-1) grid (8,7);
  \draw[->, thick] (-1,0) -- (8,0) node[right] {$x$};
  \draw[->, thick] (0,-1) -- (0,7) node[above] {$y$};
  \foreach \x in {1,2,3,4,5,6,7} \draw (\x,0.1) -- (\x,-0.1) node[below=2pt] {\scriptsize $\x$};
  \foreach \y in {1,2,3,4,5,6} \draw (0.1,\y) -- (-0.1,\y) node[left=2pt] {\scriptsize $\y$};
  \node[below left=2pt] at (0,0) {\scriptsize $0$};

  % Triangolo
  \draw[fill=blue!10, thick, blue] (2,2) -- (6,2) -- (2,5) -- cycle;
  
  % Punti
  \filldraw[blue] (2,2) circle (2pt) node[below left] {$A(2,2)$};
  \filldraw[blue] (6,2) circle (2pt) node[below right] {$B(6,2)$};
  \filldraw[blue] (2,5) circle (2pt) node[above left] {$C(2,5)$};

  % Segno angolo retto
  \draw[blue] (2.4,2) -- (2.4,2.4) -- (2,2.4);
\end{tikzpicture}
```
