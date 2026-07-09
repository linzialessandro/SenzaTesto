---
year: 3
macro_area: "Algebra"
topic: "Numeri Complessi"
difficulty: 1
tags:
  - "equazione pura"
  - "piano di Gauss"
  - "operazioni con numeri complessi"
---
# Problem Text
**(1)** Determinare, nel campo complesso, le soluzioni della seguente equazione di secondo grado e rappresentale nel piano di Gauss:
$$ x^2 + 1 = 0 $$

**(2)** Dati i due numeri complessi $$z_1 = -1 + i$$ e $$z_2 = 4 + 2i$$, calcolare:
(a) $$z_1 + z_2$$
(b) $$|z_1|$$

# Solution
**(1) Equazione di secondo grado nel campo complesso**
L'equazione proposta è un'equazione pura:
$$ x^2 = -1 $$
Nel campo dei numeri reali non ci sono soluzioni. Nel campo complesso, la radice di $$-1$$ è, per definizione, l'unità immaginaria $$i$$.
Quindi le soluzioni sono:
$$ x_{1,2} = \pm \sqrt{-1} = \pm i $$
Le due radici sono i numeri immaginari puri $$+i$$ e $$-i$$.

```latex
\begin{center}
\begin{tikzpicture}[scale=1.5]
    % Assi
    \draw[->, thick] (-1,0) -- (1,0) node[right] {$\mathbb{R}$};
    \draw[->, thick] (0,-1.5) -- (0,1.5) node[above] {$\mathbb{I}$};
    
    % Punti
    \fill[blue] (0, 1) circle (1.5pt) node[right] {$+i$};
    \fill[red] (0, -1) circle (1.5pt) node[right] {$-i$};
\end{tikzpicture}
\end{center}
```

**(2) Operazioni con i numeri complessi**
Con $$z_1 = -1 + i$$ e $$z_2 = 4 + 2i$$:

(a) **Somma**:
$$ z_1 + z_2 = (-1 + i) + (4 + 2i) = (-1 + 4) + i(1 + 2) = 3 + 3i $$

(b) **Modulo di $$z_1$$**:
$$ |z_1| = \sqrt{(-1)^2 + 1^2} = \sqrt{1 + 1} = \sqrt{2} $$
