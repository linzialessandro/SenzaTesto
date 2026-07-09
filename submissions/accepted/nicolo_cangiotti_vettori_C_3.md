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
$$ \mathbf{v} = \langle -2, -2 \rangle, \qquad \mathbf{w} = \langle 3, -2 \rangle $$

* Rappresentali nel piano cartesiano.
* Calcola il prodotto vettoriale $$\mathbf{v} \times \mathbf{w}$$.
* Calcola l'area del triangolo che ha per lati $$\mathbf{v}$$ e $$\mathbf{w}$$.

# Solution
**1. Rappresentazione grafica**
A partire dall'origine degli assi cartesiani $$(0,0)$$ si tracciano i segmenti orientati verso i punti indicati.

```latex
\begin{center}
\begin{tikzpicture}[scale=0.75,>=stealth]
  \def\xmax{4}
  \def\ymax{4}
  \draw[very thin, gray!30] (-\xmax,-\ymax) grid (\xmax,\ymax);
  \draw[->, thick] (-\xmax-0.2,0) -- (\xmax+0.5,0) node[right] {$x$};
  \draw[->, thick] (0,-\ymax-0.2) -- (0,\ymax+0.5) node[above] {$y$};
  
  % Vettore v
  \draw[->, very thick, blue] (0,0) -- (-2,-2) node[below left] {$\mathbf{v}$};
  % Vettore w
  \draw[->, very thick, red] (0,0) -- (3,-2) node[below right] {$\mathbf{w}$};
  
  \node[below left] at (0,0) {0};
\end{tikzpicture}
\end{center}
```

**2. Prodotto vettoriale**
Calcoliamo il determinante delle componenti $$x$$ e $$y$$ dei vettori, considerandoli giacenti sul piano $$xy$$ nello spazio (cioè aventi la terza coordinata nulla):
$$ \mathbf{v} \times \mathbf{w} = (v_x \cdot w_y - v_y \cdot w_x) \, \mathbf{k} $$
$$ \mathbf{v} \times \mathbf{w} = [(-2)(-2) - (-2)(3)] \, \mathbf{k} = [4 - (-6)] \, \mathbf{k} = (4 + 6) \, \mathbf{k} = 10 \, \mathbf{k} $$
Il modulo di questo vettore risultante è $$\|\mathbf{v} \times \mathbf{w}\| = 10$$.

**3. Area del triangolo**
Essendo il modulo del prodotto vettoriale l'area del parallelogramma individuato dai due vettori, il triangolo è esattamente la sua metà.
$$ A = \frac{1}{2} \|\mathbf{v} \times \mathbf{w}\| = \frac{10}{2} = 5 $$
L'area cercata vale **$$5$$**.
