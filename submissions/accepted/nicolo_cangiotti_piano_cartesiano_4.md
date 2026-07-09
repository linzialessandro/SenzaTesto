---
year: 2
macro_area: "Geometria Analitica"
topic: "Piano Cartesiano"
difficulty: 2
tags:
  - "poligoni nel piano"
  - "trapezio"
  - "area"
---
# Problem Text
Un quadrilatero ha vertici $$A \equiv (-3;0)$$, $$B \equiv (3;0)$$, $$C \equiv (2;3)$$ e $$D \equiv (-2;3)$$.
a) Rappresenta tale poligono nel piano cartesiano. 
b) Di quale quadrilatero si tratta? Calcola la sua area.

# Solution
**a) Rappresentazione**
Disegniamo i quattro punti sul piano cartesiano:
- $$A(-3;0)$$ e $$B(3;0)$$ si trovano direttamente sull'asse delle ascisse, in quanto la loro ordinata è nulla ($$y=0$$).
- $$C(2;3)$$ e $$D(-2;3)$$ si trovano sulla medesima retta orizzontale di equazione $$y=3$$.
Unendo i punti da $$A$$ a $$B$$, a $$C$$, a $$D$$ e ritornando ad $$A$$ otteniamo un poligono a quattro lati.

**b) Tipo di quadrilatero e area**
Osserviamo che il lato $$AB$$ (sull'asse $$x$$) e il lato $$CD$$ (sulla retta $$y=3$$) sono segmenti orizzontali, quindi risultano **paralleli** tra loro. Gli altri due lati, $$AD$$ e $$BC$$, sono obliqui e incidenti. Un quadrilatero convesso avente esattamente due lati paralleli (le basi) viene definito **trapezio**.

Calcoliamo la lunghezza delle due basi del trapezio sfruttando il fatto che sono segmenti orizzontali:
Base maggiore: $$AB = |x_B - x_A| = |3 - (-3)| = |3 + 3| = 6$$
Base minore: $$CD = |x_C - x_D| = |2 - (-2)| = |2 + 2| = 4$$

L'altezza $$h$$ del trapezio è la distanza (perpendicolare) tra le rette orizzontali a cui appartengono le due basi, ed è data dal valore assoluto della differenza delle ordinate:
$$h = |y_C - y_B| = |3 - 0| = 3$$

Calcoliamo infine l'area del trapezio con l'apposita formula:
$$\text{Area} = \frac{(\text{Base maggiore} + \text{base minore}) \cdot \text{altezza}}{2} = \frac{(AB + CD) \cdot h}{2} = \frac{(6 + 4) \cdot 3}{2} = \frac{10 \cdot 3}{2} = 15$$

```tikz
\begin{tikzpicture}[scale=0.8,>=stealth]
  % Griglia e assi
  \draw[very thin, gray!40, dashed] (-5,-2) grid (5,5);
  \draw[->, thick] (-5,0) -- (5,0) node[right] {$x$};
  \draw[->, thick] (0,-2) -- (0,5) node[above] {$y$};
  \foreach \x in {-4,-3,-2,-1,1,2,3,4} \draw (\x,0.1) -- (\x,-0.1) node[below=2pt] {\scriptsize $\x$};
  \foreach \y in {-1,1,2,3,4} \draw (0.1,\y) -- (-0.1,\y) node[left=2pt] {\scriptsize $\y$};
  \node[below left=2pt] at (0,0) {\scriptsize $0$};

  % Trapezio
  \draw[fill=green!10, thick, green!50!black] (-3,0) -- (3,0) -- (2,3) -- (-2,3) -- cycle;
  
  % Altezza tratteggiata
  \draw[dashed, thick] (2,3) -- (2,0);
  \node[right] at (2,1.5) {$h=3$};
  
  % Punti
  \filldraw[black] (-3,0) circle (2pt) node[below left] {$A(-3,0)$};
  \filldraw[black] (3,0) circle (2pt) node[below right] {$B(3,0)$};
  \filldraw[black] (2,3) circle (2pt) node[above right] {$C(2,3)$};
  \filldraw[black] (-2,3) circle (2pt) node[above left] {$D(-2,3)$};
\end{tikzpicture}
```
