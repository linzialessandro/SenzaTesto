---
year: 3
macro_area: "Algebra"
topic: "Numeri Complessi"
difficulty: 2
tags:
  - "equazione di secondo grado"
  - "piano di Gauss"
  - "operazioni con numeri complessi"
---
# Problem Text
**(1)** Determinare, nel campo complesso, le soluzioni della seguente equazione di secondo grado e rappresentale nel piano di Gauss:
$$ x^2 + x + 1 = 0 $$

**(2)** Dati i due numeri complessi $$z_1 = 1 + i$$ e $$z_2 = 4 - i$$, calcolare:
(a) $$z_1 + z_2$$
(b) $$|z_1|$$
(c) $$\bar{z}_2$$

# Solution
**(1) Equazione di secondo grado nel campo complesso**
Si parte dal calcolo del discriminante per l'equazione $$x^2 + x + 1 = 0$$:
$$ \Delta = (1)^2 - 4(1)(1) = 1 - 4 = -3 $$
Il discriminante è negativo, quindi le soluzioni passano per l'unità immaginaria (essendo $$\sqrt{-3} = i\sqrt{3}$$):
$$ x_{1,2} = \frac{-1 \pm i\sqrt{3}}{2} = -\frac{1}{2} \pm i\frac{\sqrt{3}}{2} $$

```latex
\begin{center}
\begin{tikzpicture}[scale=1.5]
    % Assi
    \draw[->, thick] (-1.5,0) -- (1,0) node[right] {$\mathbb{R}$};
    \draw[->, thick] (0,-1.5) -- (0,1.5) node[above] {$\mathbb{I}$};
    
    % Punti
    \fill[blue] (-0.5, 0.866) circle (1.5pt) node[left] {$x_1$};
    \fill[red] (-0.5, -0.866) circle (1.5pt) node[left] {$x_2$};
    
    % Proiezioni
    \draw[dashed, thin, gray] (-0.5, 0) -- (-0.5, 0.866) -- (0, 0.866);
    \draw[dashed, thin, gray] (-0.5, 0) -- (-0.5, -0.866) -- (0, -0.866);
    
    % Etichette
    \node[below] at (-0.5,0) {$-\frac{1}{2}$};
    \node[right] at (0,0.866) {$\frac{\sqrt{3}}{2}$};
    \node[right] at (0,-0.866) {$-\frac{\sqrt{3}}{2}$};
\end{tikzpicture}
\end{center}
```

**(2) Operazioni con i numeri complessi**
Con $$z_1 = 1 + i$$ e $$z_2 = 4 - i$$:

(a) **Somma**:
$$ z_1 + z_2 = (1 + i) + (4 - i) = (1 + 4) + i(1 - 1) = 5 $$
Il risultato è un numero reale puro.

(b) **Modulo di $$z_1$$**:
$$ |z_1| = \sqrt{1^2 + 1^2} = \sqrt{1 + 1} = \sqrt{2} $$

(c) **Complesso coniugato di $$z_2$$**:
Il coniugato inverte di segno la parte immaginaria, lasciando inalterata la parte reale.
$$ \bar{z}_2 = 4 + i $$
