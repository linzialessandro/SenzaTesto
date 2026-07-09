---
year: 2
macro_area: "Geometria"
topic: "Vettori"
difficulty: 1
tags:
  - "lunghezza vettore"
  - "prodotto scalare"
  - "rappresentazione grafica"
---
# Problem Text
Siano dati i seguenti vettori:
$$ \mathbf{v} = \langle 3, 4 \rangle, \qquad \mathbf{w} = \langle -2, 2 \rangle $$

* Rappresentali nel piano cartesiano.
* Calcola la lunghezza del vettore $$\mathbf{v}$$.
* Calcola il prodotto scalare $$\mathbf{v} \cdot \mathbf{w}$$.

# Solution
**1. Rappresentazione grafica**
Partendo dall'origine $$(0,0)$$, disegniamo il vettore $$\mathbf{v}$$ con la punta in $$(3, 4)$$ e il vettore $$\mathbf{w}$$ con la punta in $$(-2, 2)$$.

```latex
\begin{center}
\begin{tikzpicture}[scale=0.75,>=stealth]
  \def\xmax{5}
  \def\ymax{5}
  \draw[very thin, gray!30] (-\xmax,-\ymax) grid (\xmax,\ymax);
  \draw[->, thick] (-\xmax-0.2,0) -- (\xmax+0.5,0) node[right] {$x$};
  \draw[->, thick] (0,-\ymax-0.2) -- (0,\ymax+0.5) node[above] {$y$};
  
  % Vettore v
  \draw[->, very thick, blue] (0,0) -- (3,4) node[above right] {$\mathbf{v}$};
  % Vettore w
  \draw[->, very thick, red] (0,0) -- (-2,2) node[above left] {$\mathbf{w}$};
  
  \node[below left] at (0,0) {0};
\end{tikzpicture}
\end{center}
```

**2. Lunghezza del vettore $$\mathbf{v}$$**
Applichiamo la formula della lunghezza (modulo):
$$ \|\mathbf{v}\| = \sqrt{v_x^2 + v_y^2} = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5 $$

**3. Prodotto scalare**
Si calcola sommando il prodotto delle rispettive componenti:
$$ \mathbf{v} \cdot \mathbf{w} = (v_x \cdot w_x) + (v_y \cdot w_y) = (3)(-2) + (4)(2) = -6 + 8 = 2 $$
Il prodotto scalare vale **2**.
