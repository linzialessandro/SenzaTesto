---
year: 2
macro_area: "Geometria"
topic: "Vettori"
difficulty: 2
tags:
  - "prodotto vettoriale"
  - "rappresentazione grafica"
---
# Problem Text
Siano dati i seguenti vettori:
$$ \mathbf{v} = \langle v_x, v_y \rangle = \langle -2, 2 \rangle, \qquad \mathbf{w} = \langle w_x, w_y \rangle = \langle -3, -2 \rangle $$

* Rappresentali nel piano cartesiano e indica l'angolo $$\theta$$ tra loro compreso.
* Calcola il prodotto vettoriale $$\mathbf{v} \times \mathbf{w}$$.

# Solution
**1. Rappresentazione grafica**
A partire dall'origine degli assi, tracciamo il vettore $$\mathbf{v}$$ verso il punto $$(-2, 2)$$ e il vettore $$\mathbf{w}$$ verso il punto $$(-3, -2)$$. L'angolo $$\theta$$ è l'ampiezza dell'arco compreso tra le due frecce.

```latex
\begin{center}
\begin{tikzpicture}[scale=1,>=stealth]
  \def\xmax{4}
  \def\ymax{3}
  \draw[very thin, gray!30] (-\xmax,-\ymax) grid (\xmax,\ymax);
  \draw[->, thick] (-\xmax-0.2,0) -- (\xmax+0.5,0) node[right] {$x$};
  \draw[->, thick] (0,-\ymax-0.2) -- (0,\ymax+0.5) node[above] {$y$};
  
  % Vettore v
  \draw[->, very thick, blue] (0,0) -- (-2,2) node[above left] {$\mathbf{v}$};
  % Vettore w
  \draw[->, very thick, red] (0,0) -- (-3,-2) node[below left] {$\mathbf{w}$};
  
  % Angolo theta
  \draw[thick] (-0.7, 0.7) arc (135:213:1);
  \node at (-1.2, 0.2) {$\theta$};
  
  \node[below right] at (0,0) {0};
\end{tikzpicture}
\end{center}
```

**2. Prodotto vettoriale**
Il calcolo della componente $$z$$ del prodotto vettoriale si esegue nel modo seguente (assumendo le componenti $$z=0$$):
$$ \mathbf{v} \times \mathbf{w} = (v_x \cdot w_y - v_y \cdot w_x) \, \mathbf{k} $$
Inserendo i dati:
$$ \mathbf{v} \times \mathbf{w} = [(-2)(-2) - (2)(-3)] \, \mathbf{k} = [4 - (-6)] \, \mathbf{k} = (4 + 6) \, \mathbf{k} = 10 \, \mathbf{k} $$
Il vettore risultante perpendicolare al piano ha modulo pari a **$$10$$**.
