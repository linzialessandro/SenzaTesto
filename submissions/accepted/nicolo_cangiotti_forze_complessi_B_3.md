---
year: 3
macro_area: "Algebra"
topic: "Numeri Complessi"
difficulty: 2
tags:
  - "equazione di secondo grado"
  - "piano di Gauss"
  - "operazioni con numeri complessi"
  - "complesso coniugato"
---
# Problem Text
**(1)** Determinare, nel campo complesso, le soluzioni della seguente equazione di secondo grado e rappresentale nel piano di Gauss:
$$ x^2 - x + 2 = 0 $$

**(2)** Dati i due numeri complessi $$z_1 = 3 - 2i$$ e $$z_2 = 1 + 3i$$, calcolare:
(a) $$z_1 - z_2$$
(b) $$z_1 \cdot z_2$$
(c) $$|z_1|$$
(d) $$\bar{z}_2$$

# Solution
**(1) Equazione di secondo grado nel campo complesso**
Si calcola il discriminante dell'equazione $$x^2 - x + 2 = 0$$:
$$ \Delta = (-1)^2 - 4(1)(2) = 1 - 8 = -7 $$
Nel campo complesso, $$\sqrt{-7} = i\sqrt{7}$$.
Quindi le soluzioni sono:
$$ x_{1,2} = \frac{1 \pm i\sqrt{7}}{2} = \frac{1}{2} \pm i\frac{\sqrt{7}}{2} $$

```latex
\begin{center}
\begin{tikzpicture}[scale=1]
    % Assi
    \draw[->, thick] (-1,0) -- (2,0) node[right] {$\mathbb{R}$};
    \draw[->, thick] (0,-2) -- (0,2) node[above] {$\mathbb{I}$};
    
    % Punti
    \fill[blue] (0.5, 1.32) circle (2pt) node[right] {$x_1$};
    \fill[red] (0.5, -1.32) circle (2pt) node[right] {$x_2$};
    
    % Proiezioni
    \draw[dashed, thin, gray] (0.5, 0) -- (0.5, 1.32) -- (0, 1.32);
    \draw[dashed, thin, gray] (0.5, 0) -- (0.5, -1.32) -- (0, -1.32);
    
    % Etichette assi
    \node[below] at (0.5,0) {$\frac{1}{2}$};
    \node[left] at (0,1.32) {$\frac{\sqrt{7}}{2}$};
    \node[left] at (0,-1.32) {$-\frac{\sqrt{7}}{2}$};
\end{tikzpicture}
\end{center}
```

**(2) Operazioni con i numeri complessi**
Dati $$z_1 = 3 - 2i$$ e $$z_2 = 1 + 3i$$:

(a) **Sottrazione**:
$$ z_1 - z_2 = (3 - 2i) - (1 + 3i) = (3 - 1) + i(-2 - 3) = 2 - 5i $$

(b) **Prodotto**:
$$ z_1 \cdot z_2 = (3 - 2i) \cdot (1 + 3i) = 3(1) + 3(3i) - 2i(1) - 2i(3i) $$
Svolgendo i calcoli (e ricordando che $$i^2 = -1 \implies -6i^2 = +6$$):
$$ = 3 + 9i - 2i + 6 = (3 + 6) + i(9 - 2) = 9 + 7i $$

(c) **Modulo di $$z_1$$**:
$$ |z_1| = \sqrt{3^2 + (-2)^2} = \sqrt{9 + 4} = \sqrt{13} $$

(d) **Complesso coniugato di $$z_2$$**:
Basta cambiare il segno della parte immaginaria di $$z_2$$.
$$ \bar{z}_2 = 1 - 3i $$
