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
$$ \mathbf{v} = \langle -2, 2 \rangle, \qquad \mathbf{w} = \langle -3, -2 \rangle $$

* Rappresentali nel piano cartesiano.
* Calcola il prodotto vettoriale $$\mathbf{v} \times \mathbf{w}$$.
* Calcola l'area del triangolo che ha per lati $$\mathbf{v}$$ e $$\mathbf{w}$$.

# Solution
**1. Rappresentazione grafica**
Si disegnano i vettori a partire dall'origine $$(0,0)$$ fino alle punte di coordinate $$(-2, 2)$$ e $$(-3, -2)$$.

```latex
\begin{center}
\begin{tikzpicture}[scale=0.75,>=stealth]
  \def\xmax{4}
  \def\ymax{4}
  \draw[very thin, gray!30] (-\xmax,-\ymax) grid (\xmax,\ymax);
  \draw[->, thick] (-\xmax-0.2,0) -- (\xmax+0.5,0) node[right] {$x$};
  \draw[->, thick] (0,-\ymax-0.2) -- (0,\ymax+0.5) node[above] {$y$};
  
  % Vettore v
  \draw[->, very thick, blue] (0,0) -- (-2,2) node[above left] {$\mathbf{v}$};
  % Vettore w
  \draw[->, very thick, red] (0,0) -- (-3,-2) node[below left] {$\mathbf{w}$};
  
  \node[below left] at (0,0) {0};
\end{tikzpicture}
\end{center}
```

**2. Prodotto vettoriale**
I vettori sono assegnati nel piano 2D. Possiamo pensarli come vettori in 3D aventi componente $$z=0$$, cioè $$\mathbf{v} = \langle -2, 2, 0 \rangle$$ e $$\mathbf{w} = \langle -3, -2, 0 \rangle$$.
Il prodotto vettoriale fornisce un vettore diretto lungo l'asse $$z$$ (perpendicolare al piano $$xy$$). La sua unica componente non nulla si calcola calcolando il determinante della matrice $$2 \times 2$$ formata dalle componenti $$x$$ e $$y$$:
$$ \mathbf{v} \times \mathbf{w} = (v_x \cdot w_y - v_y \cdot w_x) \, \mathbf{k} $$
$$ \mathbf{v} \times \mathbf{w} = [(-2)(-2) - (2)(-3)] \, \mathbf{k} = [4 - (-6)] \, \mathbf{k} = (4 + 6) \, \mathbf{k} = 10 \, \mathbf{k} $$
Il modulo del prodotto vettoriale è dunque $$\|\mathbf{v} \times \mathbf{w}\| = 10$$.

**3. Area del triangolo**
Dal punto di vista geometrico, il modulo del prodotto vettoriale di due vettori rappresenta l'area del parallelogramma da essi generato. Il triangolo definito da $$\mathbf{v}$$ e $$\mathbf{w}$$ corrisponde esattamente alla metà di questo parallelogramma.
Dunque l'area si calcola come:
$$ A = \frac{1}{2} \|\mathbf{v} \times \mathbf{w}\| = \frac{1}{2} \cdot 10 = 5 $$
L'area del triangolo è **$$5$$**.
