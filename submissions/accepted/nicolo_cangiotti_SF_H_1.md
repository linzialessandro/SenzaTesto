---
year: 2
macro_area: "Analisi"
topic: "Studio di Funzione"
difficulty: 2
tags:
  - "lettura grafico"
  - "funzione polinomiale"
  - "monotonia"
---
# Problem Text
Osserva il seguente grafico di una funzione 
$$f(x): \mathbb{R} \to \mathbb{R}$$
Descrivila studiando: campo di esistenza e continuità, simmetrie, intersezioni con gli assi, positività e limiti. Indica infine gli intervalli in cui la funzione è crescente e quelli in cui è decrescente e i punti di massimo e/o minimo.

```latex
\begin{center}
\begin{tikzpicture}[scale=1.1]
  % griglia
  \draw[very thin, gray!30] (-3.5,-3) grid (3.5,3.5);

  % assi con numeri
  \draw[thick,->] (-3.6,0) -- (3.6,0) node[right] {$x$};
  \draw[thick,->] (0,-2.5) -- (0,3.5) node[above] {$y$};
  \foreach \x in {-3,-2,2,3} \draw (\x,0.1) -- (\x,-0.1) node[below] {\x};
   \foreach \x in {-1,1} \draw (\x,0.1) -- (\x,-0.1) node[below] {\x};
  \foreach \y in {-2,-1,0,1,2} \draw (0.1,\y) -- (-0.1,\y) node[above right] {\y};

  % funzione
  \draw[domain=-2.2:2.2,smooth,very thick,blue] plot (\x,{(-1/10)*\x^7+(32/45)*\x^5-(191/90)*\x^3+(158/45)*\x});
\end{tikzpicture}
\end{center}
```

# Solution
Dal grafico (che rappresenta approssimativamente una funzione polinomiale dispari) possiamo ricavare le seguenti caratteristiche:

- **Campo di esistenza e continuità**: La funzione è definita su tutto l'asse reale ($$D = \mathbb{R}$$) ed è ovunque continua. Non vi sono né interruzioni né asintoti verticali.
- **Simmetrie**: Il grafico mostra una perfetta simmetria rispetto all'origine $$(0,0)$$. Si tratta quindi di una **funzione dispari** ($$f(-x) = -f(x)$$).
- **Intersezioni con gli assi**:
  - Asse $$y$$: la curva interseca l'asse delle ordinate nell'origine $$(0,0)$$.
  - Asse $$x$$: la curva interseca l'asse delle ascisse in tre punti: originariamente $$(0,0)$$, e altri due zeri simmetrici localizzati approssimativamente in $$x \approx -2$$ e $$x \approx 2$$ (leggendo dal grafico sembrano poco oltre/prima di 2).
- **Positività**:
  - $$f(x) > 0$$ per $$x \in (-\infty, -2) \cup (0, 2)$$ (circa).
  - $$f(x) < 0$$ per $$x \in (-2, 0) \cup (2, +\infty)$$ (circa).
- **Limiti**:
  - Essendo continua in tutto $$\mathbb{R}$$, valutiamo solo i limiti agli estremi del dominio:
  - $$\lim_{x \to -\infty} f(x) = +\infty$$
  - $$\lim_{x \to +\infty} f(x) = -\infty$$
  (Non vi sono asintoti orizzontali).
- **Monotonia (Crescenza/Decrescenza)**:
  - Crescente nell'intervallo compreso tra i due "picchi", ovvero per $$x \in (-1, 1)$$ (circa).
  - Decrescente per $$x \in (-\infty, -1)$$ e per $$x \in (1, +\infty)$$.
- **Massimi e Minimi**:
  - È presente un **minimo relativo** attorno al punto $$(-1, -2)$$.
  - È presente un **massimo relativo** attorno al punto $$(1, 2)$$.
