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
$$ \mathbf{v} = \langle 2, 5 \rangle, \qquad \mathbf{w} = \langle -3, 2 \rangle $$

* Rappresentali nel piano cartesiano.
* Calcola le lunghezze dei due vettori $$\|\mathbf{v}\|$$ e $$\|\mathbf{w}\|$$.
* Calcola l'angolo $$\theta$$ compreso tra essi.

# Solution
**1. Rappresentazione grafica**
I vettori sono rappresentati tracciando le frecce dall'origine fino alle coordinate $$(2, 5)$$ e $$(-3, 2)$$.

```latex
\begin{center}
\begin{tikzpicture}[scale=0.75,>=stealth]
  \def\xmax{4}
  \def\ymax{6}
  \draw[very thin, gray!30] (-\xmax,-\ymax) grid (\xmax,\ymax);
  \draw[->, thick] (-\xmax-0.2,0) -- (\xmax+0.5,0) node[right] {$x$};
  \draw[->, thick] (0,-\ymax-0.2) -- (0,\ymax+0.5) node[above] {$y$};
  
  % Vettore v
  \draw[->, very thick, blue] (0,0) -- (2,5) node[above right] {$\mathbf{v}$};
  % Vettore w
  \draw[->, very thick, red] (0,0) -- (-3,2) node[above left] {$\mathbf{w}$};
  
  \node[below left] at (0,0) {0};
\end{tikzpicture}
\end{center}
```

**2. Lunghezze dei vettori**
Calcoliamo il modulo (lunghezza) di ciascun vettore:
- $$\|\mathbf{v}\| = \sqrt{2^2 + 5^2} = \sqrt{4 + 25} = \sqrt{29}$$
- $$\|\mathbf{w}\| = \sqrt{(-3)^2 + 2^2} = \sqrt{9 + 4} = \sqrt{13}$$

**3. Angolo tra i due vettori**
L'angolo $$\theta$$ si calcola tramite l'arcocoseno del prodotto scalare diviso il prodotto delle lunghezze:
$$ \cos(\theta) = \frac{\mathbf{v} \cdot \mathbf{w}}{\|\mathbf{v}\| \|\mathbf{w}\|} $$
Il prodotto scalare è:
$$ \mathbf{v} \cdot \mathbf{w} = (2)(-3) + (5)(2) = -6 + 10 = 4 $$
Quindi l'argomento dell'arcocoseno risulta:
$$ \cos(\theta) = \frac{4}{\sqrt{29}\sqrt{13}} = \frac{4}{\sqrt{377}} $$
L'angolo richiesto è:
$$ \theta = \arccos\left(\frac{4}{\sqrt{377}}\right) \approx 78.11^\circ $$
