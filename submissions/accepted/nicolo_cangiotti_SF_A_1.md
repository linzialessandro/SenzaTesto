---
year: 2
macro_area: "Analisi"
topic: "Studio di Funzione"
difficulty: 2
tags:
  - "lettura grafico"
  - "limiti"
  - "monotonia"
---
# Problem Text
Osserva il seguente grafico di una funzione 
$$f(x): \mathbb{R} \setminus \{1\} \to \mathbb{R}$$
Descrivila studiando: campo di esistenza e continuità, simmetrie, intersezioni con gli assi, positività, limiti, derivabilità, gli intervalli in cui la funzione è crescente o decrescente e i punti di massimo e/o minimo.

```latex
\begin{center}
\begin{tikzpicture}[scale=0.8]
  % assi con numeri
  \draw[thick,->] (-4.6,0) -- (4.6,0) node[below] {$x$};
  \draw[thick,->] (0,-3.5) -- (0,4.5) node[above] {$y$};
  \draw[dashed] (1,-4.5) -- (1,5);
  \foreach \x in {-4,-3,-2,2,3,4} \draw (\x,0.1) -- (\x,-0.1) node[below] {\x};
   \foreach \x in {-1,1} \draw (\x,0.1) -- (\x,-0.1) node[below] {\x};
  \foreach \y in {-3,-2,-1,0,1,2,3,4} \draw (0.1,\y) -- (-0.1,\y) node[above right] {\y};
  
  \draw[domain=1.1:4.2,smooth,very thick,blue] plot (\x,{1/(\x^2-1)});
  \draw[domain=0:0.9,smooth,very thick,blue] plot (\x,{1/(\x^2-1)+1});
  \draw[domain=-2:0,smooth,very thick,blue] plot (\x,{-\x});
  \draw[domain=-5.5:-2,smooth,very thick,blue] plot (\x,{\x+4});
  
  \node at (0,0) [circle,fill,inner sep=1.5pt]{};
  \node at (-4,0) [circle,fill,inner sep=1.5pt]{};
\end{tikzpicture}
\end{center}
```

# Solution
Dal grafico proposto è possibile dedurre tutte le principali caratteristiche della funzione.

- **Campo di esistenza e continuità**: Il dominio è esplicitamente dato come $$D = \mathbb{R} \setminus \{1\}$$. La funzione è continua in tutti i punti del suo dominio, ovvero in $$(-\infty, 1) \cup (1, +\infty)$$. In $$x=1$$ c'è una discontinuità di seconda specie (asintoto verticale).
- **Simmetrie**: Il grafico non è simmetrico rispetto all'asse $$y$$ (non pari) né rispetto all'origine (non dispari).
- **Intersezioni con gli assi**: 
  - Asse $$x$$: Interseca in $$x = -4$$ e passa per l'origine, quindi $$(0,0)$$.
  - Asse $$y$$: Passa per l'origine, quindi $$(0,0)$$.
- **Positività**: La funzione è strettamente positiva (al di sopra dell'asse $$x$$) negli intervalli in cui il grafico è sopra l'asse. Questo accade per $$-4 < x < 0$$ e per $$x > 1$$. Quindi $$f(x) > 0$$ in $$(-4, 0) \cup (1, +\infty)$$. La funzione è negativa in $$(-\infty, -4) \cup (0, 1)$$.
- **Limiti**:
  - $$\lim_{x \to -\infty} f(x) = -\infty$$
  - $$\lim_{x \to 1^-} f(x) = -\infty$$ (la curva scende verticalmente verso il basso a sinistra di $$1$$).
  - $$\lim_{x \to 1^+} f(x) = +\infty$$ (la curva scende dall'infinito positivo a destra di $$1$$).
  - $$\lim_{x \to +\infty} f(x) = 0^+$$ (la curva si appiattisce sull'asse $$x$$ senza mai incrociarlo). 
  Si evince un asintoto orizzontale $$y=0$$ per $$x \to +\infty$$ e asintoto verticale in $$x=1$$.
- **Derivabilità**: La funzione presenta un punto di non derivabilità (punto angoloso) in $$x = -2$$. In tale punto la pendenza passa bruscamente da positiva a negativa. In tutti gli altri punti del dominio la funzione è derivabile.
- **Monotonia (Crescenza/Decrescenza)**:
  - Crescente: per $$x \in (-\infty, -2)$$.
  - Decrescente: per $$x \in (-2, 0)$$, in $$(0, 1)$$, e in $$(1, +\infty)$$.
- **Massimi e Minimi**: Il punto $$(-2, 2)$$ è un **massimo relativo** (non assoluto, dato che il limite destro in 1 vale $$+\infty$$). Non vi sono minimi relativi o assoluti (in $x=0$ vi è un semplice punto di flesso a tangente obliqua per l'andamento della curva o un cambio di espressione, ma poiché decresce prima e dopo non è un minimo locale).
