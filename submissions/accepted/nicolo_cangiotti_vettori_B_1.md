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
$$ \mathbf{v} = \langle 2, 2 \rangle, \qquad \mathbf{w} = \langle -3, 4 \rangle $$

* Rappresentali nel piano cartesiano.
* Calcola le lunghezze dei due vettori $$\|\mathbf{v}\|$$ e $$\|\mathbf{w}\|$$.
* Calcola l'angolo $$\theta$$ compreso tra essi.

# Solution
**1. Rappresentazione grafica**
Si tracciano i vettori a partire dall'origine $$(0,0)$$. La punta della freccia del vettore $$\mathbf{v}$$ sarà nel punto $$(2, 2)$$, mentre quella del vettore $$\mathbf{w}$$ sarà in $$(-3, 4)$$.

```latex
\begin{center}
\begin{tikzpicture}[scale=0.75,>=stealth]
  \def\xmax{5}
  \def\ymax{5}
  \draw[very thin, gray!30] (-\xmax,-\ymax) grid (\xmax,\ymax);
  \draw[->, thick] (-\xmax-0.2,0) -- (\xmax+0.5,0) node[right] {$x$};
  \draw[->, thick] (0,-\ymax-0.2) -- (0,\ymax+0.5) node[above] {$y$};
  
  % Vettore v
  \draw[->, very thick, blue] (0,0) -- (2,2) node[above right] {$\mathbf{v}$};
  % Vettore w
  \draw[->, very thick, red] (0,0) -- (-3,4) node[above left] {$\mathbf{w}$};
  
  \node[below left] at (0,0) {0};
\end{tikzpicture}
\end{center}
```

**2. Lunghezze dei vettori**
Utilizziamo la formula del modulo (teorema di Pitagora):
- $$\|\mathbf{v}\| = \sqrt{2^2 + 2^2} = \sqrt{4 + 4} = \sqrt{8} = 2\sqrt{2}$$
- $$\|\mathbf{w}\| = \sqrt{(-3)^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

**3. Angolo tra i due vettori**
La formula per l'angolo si basa sul prodotto scalare:
$$ \cos(\theta) = \frac{\mathbf{v} \cdot \mathbf{w}}{\|\mathbf{v}\| \|\mathbf{w}\|} $$
Calcoliamo il prodotto scalare:
$$ \mathbf{v} \cdot \mathbf{w} = (2)(-3) + (2)(4) = -6 + 8 = 2 $$
Sostituiamo i valori ottenuti:
$$ \cos(\theta) = \frac{2}{2\sqrt{2} \cdot 5} = \frac{2}{10\sqrt{2}} = \frac{1}{5\sqrt{2}} = \frac{\sqrt{2}}{10} $$
L'angolo si ottiene calcolando l'arcocoseno:
$$ \theta = \arccos\left(\frac{\sqrt{2}}{10}\right) \approx 81.87^\circ $$
