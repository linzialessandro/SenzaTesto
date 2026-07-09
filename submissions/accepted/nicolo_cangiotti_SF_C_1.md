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
Descrivila studiando: campo di esistenza e continuità, simmetrie, intersezioni con gli assi, positività, limiti, derivabilità e gli intervalli in cui la funzione è crescente e quelli in cui è decrescente e i punti stazionari.

```latex
\begin{center}
\begin{tikzpicture}[scale=0.8]
  % assi con numeri
  \draw[thick,->] (-4.6,0) -- (4.6,0) node[below] {$x$};
  \draw[thick,->] (0,-4.5) -- (0,3.5) node[above] {$y$};
  \draw[dashed] (1,-5) -- (1,4.5);
  \foreach \x in {-4,-3,-2,2,3,4} \draw (\x,0.1) -- (\x,-0.1) node[below] {\x};
   \foreach \x in {-1,1} \draw (\x,0.1) -- (\x,-0.1) node[below] {\x};
  \foreach \y in {-4,-3,-2,-1,0,1,2,3} \draw (0.1,\y) -- (-0.1,\y) node[above right] {\y};
  
  \draw[domain=1.1:4.2,smooth,very thick,blue] plot (\x,{-1/(\x^2-1)});
  \draw[domain=0:0.9,smooth,very thick,blue] plot (\x,{-1/(\x^2-1)-1});
  \draw[domain=-2:0,smooth,very thick,blue] plot (\x,{\x});
  \draw[domain=-5.5:-2,smooth,very thick,blue] plot (\x,{-\x-4});
  
  \node at (0,0) [circle,fill,inner sep=1.5pt]{};
  \node at (-4,0) [circle,fill,inner sep=1.5pt]{};
\end{tikzpicture}
\end{center}
```

# Solution
Osservando il grafico è possibile ricavare tutte le proprietà richieste della funzione:

- **Campo di esistenza e continuità**: $$D = \mathbb{R} \setminus \{1\}$$. La funzione è continua nel suo dominio $$(-\infty, 1) \cup (1, +\infty)$$. In $$x=1$$ è presente un asintoto verticale.
- **Simmetrie**: Il grafico non possiede simmetrie (né pari, né dispari).
- **Intersezioni con gli assi**:
  - Asse $$y$$: passa per l'origine $$(0,0)$$.
  - Asse $$x$$: interseca in $$x = -4$$ e in $$x = 0$$.
- **Positività**: 
  - La funzione è al di sopra dell'asse $$x$$ per $$x \in (-\infty, -4) \cup (0, 1)$$.
  - La funzione è al di sotto dell'asse $$x$$ per $$x \in (-4, 0) \cup (1, +\infty)$$.
- **Limiti e Asintoti**:
  - $$\lim_{x \to -\infty} f(x) = +\infty$$ (la semiretta sale all'infinito a sinistra).
  - $$\lim_{x \to 1^-} f(x) = +\infty$$ (il ramo centrale sale verticalmente accostandosi a $$x=1$$).
  - $$\lim_{x \to 1^+} f(x) = -\infty$$ (il ramo di destra parte dal basso avvicinandosi a $$x=1$$).
  Asintoto verticale in $$x=1$$.
  - $$\lim_{x \to +\infty} f(x) = 0^-$$ (la funzione si appiattisce sull'asse $$x$$ da sotto).
  Asintoto orizzontale $$y=0$$ per $$x \to +\infty$$.
- **Derivabilità**: Vi è un punto angoloso in $$x = -2$$, dove le due rette si incontrano cambiando bruscamente pendenza. Altrove nel dominio la curva è derivabile.
- **Monotonia**:
  - Decrescente negli intervalli: $$(-\infty, -2)$$.
  - Crescente negli intervalli: $$(-2, 0)$$, $$(0, 1)$$, e in $$(1, +\infty)$$.
- **Punti stazionari (Massimi/Minimi)**: È presente un **minimo relativo** in corrispondenza del punto angoloso $$(-2, -2)$$. Non vi sono massimi relativi, poiché il ramo a sinistra dell'asintoto diverge a $$+\infty$$.
