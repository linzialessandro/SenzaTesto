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
$$ 2x^2 - x + 1 = 0 $$

**(2)** Dati i due numeri complessi $$z_1 = 1 + i$$ e $$z_2 = -1 - 2i$$, calcolare:
(a) $$z_1 + z_2$$
(b) $$z_1 \cdot z_2$$
(c) $$|z_2|$$
(d) $$\bar{z}_1$$

# Solution
**(1) Equazione di secondo grado nel campo complesso**
Data l'equazione $$2x^2 - x + 1 = 0$$, ne calcoliamo il discriminante:
$$ \Delta = (-1)^2 - 4(2)(1) = 1 - 8 = -7 $$
Essendo negativo, le soluzioni nel campo reale non esistono. Nel campo complesso passiamo a calcolare le due radici con $$\sqrt{-7} = i\sqrt{7}$$:
$$ x_{1,2} = \frac{1 \pm i\sqrt{7}}{4} = \frac{1}{4} \pm i\frac{\sqrt{7}}{4} $$

```latex
\begin{center}
\begin{tikzpicture}[scale=1.5]
    % Assi
    \draw[->, thick] (-1,0) -- (1.5,0) node[right] {$\mathbb{R}$};
    \draw[->, thick] (0,-1) -- (0,1) node[above] {$\mathbb{I}$};
    
    % Punti
    \fill[blue] (0.25, 0.66) circle (1.5pt) node[right] {$x_1$};
    \fill[red] (0.25, -0.66) circle (1.5pt) node[right] {$x_2$};
    
    % Proiezioni
    \draw[dashed, thin, gray] (0.25, 0) -- (0.25, 0.66) -- (0, 0.66);
    \draw[dashed, thin, gray] (0.25, 0) -- (0.25, -0.66) -- (0, -0.66);
    
    % Etichette
    \node[below] at (0.25,0) {$\frac{1}{4}$};
    \node[left] at (0,0.66) {$\frac{\sqrt{7}}{4}$};
    \node[left] at (0,-0.66) {$-\frac{\sqrt{7}}{4}$};
\end{tikzpicture}
\end{center}
```

**(2) Operazioni con i numeri complessi**
Con $$z_1 = 1 + i$$ e $$z_2 = -1 - 2i$$:

(a) **Somma**:
$$ z_1 + z_2 = (1 - 1) + i(1 - 2) = 0 - i = -i $$

(b) **Prodotto**:
$$ z_1 \cdot z_2 = (1 + i)(-1 - 2i) = (1)(-1) + (1)(-2i) + (i)(-1) + (i)(-2i) $$
Poiché $$i^2 = -1$$, il termine $$-2i^2 = +2$$. Quindi:
$$ = -1 - 2i - i + 2 = (-1 + 2) + i(-2 - 1) = 1 - 3i $$

(c) **Modulo di $$z_2$$**:
Il modulo si calcola facendo la radice della somma dei quadrati della parte reale e immaginaria:
$$ |z_2| = \sqrt{(-1)^2 + (-2)^2} = \sqrt{1 + 4} = \sqrt{5} $$

(d) **Complesso coniugato di $$z_1$$**:
$$ \bar{z}_1 = 1 - i $$
