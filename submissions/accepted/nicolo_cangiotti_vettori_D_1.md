---
year: 2
macro_area: "Geometria"
topic: "Vettori"
difficulty: 2
tags:
  - "lunghezza vettore"
  - "prodotto scalare"
  - "angolo tra vettori"
  - "rappresentazione grafica"
---
# Problem Text
Siano dati i seguenti vettori:
$$ \mathbf{v} = \langle 1, 4 \rangle, \qquad \mathbf{w} = \langle -3, 1 \rangle $$

* Rappresentali nel piano cartesiano.
* Calcola le lunghezze dei due vettori $$\|\mathbf{v}\|$$ e $$\|\mathbf{w}\|$$.
* Calcola l'angolo $$\theta$$ compreso tra essi.

# Solution
**1. Rappresentazione grafica**
Dal punto di origine degli assi, i due vettori terminano rispettivamente nelle posizioni $$(1, 4)$$ e $$(-3, 1)$$.

```latex
\begin{center}
\begin{tikzpicture}[scale=0.75,>=stealth]
  \def\xmax{4}
  \def\ymax{5}
  \draw[very thin, gray!30] (-\xmax,-\ymax) grid (\xmax,\ymax);
  \draw[->, thick] (-\xmax-0.2,0) -- (\xmax+0.5,0) node[right] {$x$};
  \draw[->, thick] (0,-\ymax-0.2) -- (0,\ymax+0.5) node[above] {$y$};
  
  % Vettore v
  \draw[->, very thick, blue] (0,0) -- (1,4) node[above right] {$\mathbf{v}$};
  % Vettore w
  \draw[->, very thick, red] (0,0) -- (-3,1) node[above left] {$\mathbf{w}$};
  
  \node[below left] at (0,0) {0};
\end{tikzpicture}
\end{center}
```

**2. Lunghezze dei vettori**
Ricorrendo alla definizione di modulo di un vettore a partire dalle sue componenti (teorema di Pitagora):
- $$\|\mathbf{v}\| = \sqrt{1^2 + 4^2} = \sqrt{1 + 16} = \sqrt{17}$$
- $$\|\mathbf{w}\| = \sqrt{(-3)^2 + 1^2} = \sqrt{9 + 1} = \sqrt{10}$$

**3. Angolo tra i due vettori**
Il coseno dell'angolo intercettato vale:
$$ \cos(\theta) = \frac{\mathbf{v} \cdot \mathbf{w}}{\|\mathbf{v}\| \|\mathbf{w}\|} $$
Iniziamo con il prodotto scalare:
$$ \mathbf{v} \cdot \mathbf{w} = (1)(-3) + (4)(1) = -3 + 4 = 1 $$
Sostituendo il tutto otteniamo:
$$ \cos(\theta) = \frac{1}{\sqrt{17}\sqrt{10}} = \frac{1}{\sqrt{170}} $$
Perciò, l'angolo misura:
$$ \theta = \arccos\left(\frac{1}{\sqrt{170}}\right) \approx 85.60^\circ $$
