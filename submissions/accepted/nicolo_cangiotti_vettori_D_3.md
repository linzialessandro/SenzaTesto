---
year: 2
macro_area: "Geometria"
topic: "Vettori"
difficulty: 2
tags:
  - "prodotto vettoriale"
  - "area triangolo"
  - "rappresentazione grafica"
---
# Problem Text
Siano dati i seguenti vettori:
$$ \mathbf{v} = \langle -3, 3 \rangle, \qquad \mathbf{w} = \langle -4, -3 \rangle $$

* Rappresentali nel piano cartesiano.
* Calcola il prodotto vettoriale $$\mathbf{v} \times \mathbf{w}$$.
* Calcola l'area del triangolo che ha per lati $$\mathbf{v}$$ e $$\mathbf{w}$$.

# Solution
**1. Rappresentazione grafica**
Dall'origine congiungiamo i punti con le frecce le cui punte cadono esattamente in $$(-3, 3)$$ e in $$(-4, -3)$$.

```latex
\begin{center}
\begin{tikzpicture}[scale=0.75,>=stealth]
  \def\xmax{5}
  \def\ymax{4}
  \draw[very thin, gray!30] (-\xmax,-\ymax) grid (\xmax,\ymax);
  \draw[->, thick] (-\xmax-0.2,0) -- (\xmax+0.5,0) node[right] {$x$};
  \draw[->, thick] (0,-\ymax-0.2) -- (0,\ymax+0.5) node[above] {$y$};
  
  % Vettore v
  \draw[->, very thick, blue] (0,0) -- (-3,3) node[above left] {$\mathbf{v}$};
  % Vettore w
  \draw[->, very thick, red] (0,0) -- (-4,-3) node[below left] {$\mathbf{w}$};
  
  \node[below left] at (0,0) {0};
\end{tikzpicture}
\end{center}
```

**2. Prodotto vettoriale**
Applicando la formula del prodotto vettoriale fra vettori del piano ($$xy$$):
$$ \mathbf{v} \times \mathbf{w} = (v_x \cdot w_y - v_y \cdot w_x) \, \mathbf{k} $$
Sostituiamo i numeri:
$$ \mathbf{v} \times \mathbf{w} = [(-3)(-3) - (3)(-4)] \, \mathbf{k} = [9 - (-12)] \, \mathbf{k} = (9 + 12) \, \mathbf{k} = 21 \, \mathbf{k} $$
Il modulo di questo prodotto vettoriale è $$\|\mathbf{v} \times \mathbf{w}\| = 21$$.

**3. Area del triangolo**
Il modulo del prodotto vettoriale è pari all'area del parallelogramma avente come spigoli contigui $$\mathbf{v}$$ e $$\mathbf{w}$$. Tagliandolo a metà tramite la sua diagonale, si evince che:
$$ A_{\text{triangolo}} = \frac{1}{2} \|\mathbf{v} \times \mathbf{w}\| = \frac{21}{2} = 10.5 $$
L'area del triangolo è pari a **$$10.5$$** (o $$\frac{21}{2}$$).
