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
$$ x^2 + x + 2 = 0 $$

**(2)** Dati i due numeri complessi $$z_1 = 1 + 3i$$ e $$z_2 = -1 + i$$, calcolare:
(a) $$z_1 - z_2$$
(b) $$\frac{z_1}{z_2}$$
(c) $$|z_2|$$
(d) $$\bar{z}_1$$

# Solution
**(1) Equazione di secondo grado nel campo complesso**
L'equazione in forma canonica $$x^2 + x + 2 = 0$$ ha discriminante:
$$ \Delta = 1^2 - 4(1)(2) = 1 - 8 = -7 $$
Essendo $$\Delta < 0$$, l'equazione ammette due radici complesse coniugate con l'unità immaginaria $$i$$ ($$\sqrt{-7} = i\sqrt{7}$$):
$$ x_{1,2} = \frac{-1 \pm i\sqrt{7}}{2} = -\frac{1}{2} \pm i\frac{\sqrt{7}}{2} $$

```latex
\begin{center}
\begin{tikzpicture}[scale=1]
    % Assi
    \draw[->, thick] (-2,0) -- (1,0) node[right] {$\mathbb{R}$};
    \draw[->, thick] (0,-2) -- (0,2) node[above] {$\mathbb{I}$};
    
    % Punti
    \fill[blue] (-0.5, 1.32) circle (2pt) node[left] {$x_1$};
    \fill[red] (-0.5, -1.32) circle (2pt) node[left] {$x_2$};
    
    % Proiezioni
    \draw[dashed, thin, gray] (-0.5, 0) -- (-0.5, 1.32) -- (0, 1.32);
    \draw[dashed, thin, gray] (-0.5, 0) -- (-0.5, -1.32) -- (0, -1.32);
    
    % Etichette
    \node[below] at (-0.5,0) {$-\frac{1}{2}$};
    \node[right] at (0,1.32) {$\frac{\sqrt{7}}{2}$};
    \node[right] at (0,-1.32) {$-\frac{\sqrt{7}}{2}$};
\end{tikzpicture}
\end{center}
```

**(2) Operazioni con i numeri complessi**
Con $$z_1 = 1 + 3i$$ e $$z_2 = -1 + i$$:

(a) **Sottrazione**:
$$ z_1 - z_2 = (1 + 3i) - (-1 + i) = (1 + 1) + i(3 - 1) = 2 + 2i $$

(b) **Quoziente**:
Si calcola moltiplicando numeratore e denominatore per il coniugato del denominatore (ovvero $$-1 - i$$):
$$ \frac{z_1}{z_2} = \frac{1 + 3i}{-1 + i} \cdot \frac{-1 - i}{-1 - i} = \frac{(1)(-1) + (1)(-i) + (3i)(-1) + (3i)(-i)}{(-1)^2 + (1)^2} $$
Ricordando che $$i^2 = -1 \implies -3i^2 = +3$$:
$$ = \frac{-1 - i - 3i + 3}{1 + 1} = \frac{2 - 4i}{2} = 1 - 2i $$

(c) **Modulo di $$z_2$$**:
Il modulo è la distanza di $$z_2$$ dall'origine nel piano complesso.
$$ |z_2| = \sqrt{(-1)^2 + (1)^2} = \sqrt{1 + 1} = \sqrt{2} $$

(d) **Complesso coniugato di $$z_1$$**:
L'operazione coniugata inverte il segno della sola parte immaginaria.
$$ \bar{z}_1 = 1 - 3i $$
