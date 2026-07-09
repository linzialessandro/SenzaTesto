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
$$ x^2 - x + 3 = 0 $$

**(2)** Dati i due numeri complessi $$z_1 = 1 + 2i$$ e $$z_2 = -1 + 3i$$, calcolare:
(a) $$z_1 + z_2$$
(b) $$\frac{z_1}{z_2}$$
(c) $$|z_2|$$
(d) $$\bar{z}_1$$

# Solution
**(1) Equazione di secondo grado nel campo complesso**
L'equazione è $$x^2 - x + 3 = 0$$. Calcoliamo il discriminante ($$\Delta$$):
$$ \Delta = b^2 - 4ac = (-1)^2 - 4(1)(3) = 1 - 12 = -11 $$
Essendo $$\Delta < 0$$, l'equazione non ammette soluzioni reali. Nel campo complesso, poiché $$\sqrt{-11} = i\sqrt{11}$$, si hanno due radici complesse coniugate:
$$ x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a} = \frac{1 \pm i\sqrt{11}}{2} = \frac{1}{2} \pm i\frac{\sqrt{11}}{2} $$
Le soluzioni sono $$x_1 = \frac{1}{2} + i\frac{\sqrt{11}}{2}$$ e $$x_2 = \frac{1}{2} - i\frac{\sqrt{11}}{2}$$.

```latex
\begin{center}
\begin{tikzpicture}[scale=1]
    % Assi
    \draw[->, thick] (-1,0) -- (2,0) node[right] {$\mathbb{R}$};
    \draw[->, thick] (0,-2.5) -- (0,2.5) node[above] {$\mathbb{I}$};
    
    % Punti
    \fill[blue] (0.5, 1.658) circle (2pt) node[right] {$x_1$};
    \fill[red] (0.5, -1.658) circle (2pt) node[right] {$x_2$};
    
    % Proiezioni
    \draw[dashed, thin, gray] (0.5, 0) -- (0.5, 1.658) -- (0, 1.658);
    \draw[dashed, thin, gray] (0.5, 0) -- (0.5, -1.658) -- (0, -1.658);
    
    % Etichette assi
    \node[below] at (0.5,0) {$\frac{1}{2}$};
    \node[left] at (0,1.658) {$\frac{\sqrt{11}}{2}$};
    \node[left] at (0,-1.658) {$-\frac{\sqrt{11}}{2}$};
\end{tikzpicture}
\end{center}
```

**(2) Operazioni con i numeri complessi**
Dati $$z_1 = 1 + 2i$$ e $$z_2 = -1 + 3i$$:

(a) **Somma**: Si sommano parti reali con parti reali, e parti immaginarie con parti immaginarie.
$$ z_1 + z_2 = (1 - 1) + (2 + 3)i = 0 + 5i = 5i $$

(b) **Quoziente**: Per dividere due numeri complessi in forma algebrica, si moltiplica numeratore e denominatore per il coniugato del denominatore.
$$ \frac{z_1}{z_2} = \frac{1 + 2i}{-1 + 3i} \cdot \frac{-1 - 3i}{-1 - 3i} = \frac{(1)(-1) + (1)(-3i) + (2i)(-1) + (2i)(-3i)}{(-1)^2 + 3^2} $$
Poiché $$i^2 = -1$$, il termine $$(2i)(-3i) = -6i^2 = +6$$.
$$ \frac{z_1}{z_2} = \frac{-1 - 3i - 2i + 6}{1 + 9} = \frac{5 - 5i}{10} = \frac{1}{2} - \frac{1}{2}i $$

(c) **Modulo**: Il modulo di un numero complesso è dato dal teorema di Pitagora $$|z| = \sqrt{a^2 + b^2}$$.
$$ |z_2| = \sqrt{(-1)^2 + (3)^2} = \sqrt{1 + 9} = \sqrt{10} $$

(d) **Complesso coniugato**: Il coniugato si ottiene cambiando di segno la sola parte immaginaria.
$$ \bar{z}_1 = 1 - 2i $$
