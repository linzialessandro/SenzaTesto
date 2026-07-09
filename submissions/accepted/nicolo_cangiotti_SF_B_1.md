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
$$f(x): \mathbb{R} \setminus \{-1\} \to \mathbb{R}$$
Descrivila studiando: campo di esistenza e continuità, simmetrie, intersezioni con gli assi, positività, limiti, derivabilità e gli intervalli in cui la funzione è crescente e quelli in cui è decrescente e i punti di massimo e/o minimo.

```latex
\begin{center}
\begin{tikzpicture}[scale=0.8]
  % assi con numeri
  \draw[thick,->] (-4.6,0) -- (4.6,0) node[below] {$x$};
  \draw[thick,->] (0,-4.5) -- (0,3.5) node[above] {$y$};
  \draw[dashed] (-1,-5) -- (-1,4.5);
  \foreach \x in {-4,-3,-2,2,3,4} \draw (\x,0.1) -- (\x,-0.1) node[below] {\x};
   \foreach \x in {-1,1} \draw (\x,0.1) -- (\x,-0.1) node[below] {\x};
  \foreach \y in {-4,-3,-2,-1,0,1,2,3} \draw (0.1,\y) -- (-0.1,\y) node[above right] {\y};
  
  \draw[domain=-4.2:-1.2,smooth,very thick,blue] plot (\x,{1/(\x+1)});
  \draw[domain=-0.83:0,smooth,very thick,blue] plot (\x,{-1/(\x+1)+1});
  \draw[domain=0:2,smooth,very thick,blue] plot (\x,{\x});
  \draw[domain=2:5.5,smooth,very thick,blue] plot (\x,{-\x+4});
  
  \node at (0,0) [circle,fill,inner sep=1.5pt]{};
  \node at (4,0) [circle,fill,inner sep=1.5pt]{};
\end{tikzpicture}
\end{center}
```

# Solution
Dal grafico possiamo dedurre l'andamento completo della funzione:

- **Campo di esistenza e continuità**: Il dominio è esplicitamente dato come $$D = \mathbb{R} \setminus \{-1\}$$. La funzione è continua in tutti i punti del suo dominio, ovvero in $$(-\infty, -1) \cup (-1, +\infty)$$. In $$x=-1$$ vi è un asintoto verticale.
- **Simmetrie**: Il grafico non è simmetrico rispetto all'asse $$y$$ (non pari) né rispetto all'origine (non dispari).
- **Intersezioni con gli assi**:
  - Asse $$y$$: passa per l'origine, quindi $$(0,0)$$.
  - Asse $$x$$: interseca l'asse delle ascisse in $$(0,0)$$ e in $$(4,0)$$.
- **Positività**: La funzione si trova al di sopra dell'asse $$x$$ per $$x \in (0, 4)$$. Si trova al di sotto dell'asse $$x$$ per $$x \in (-\infty, -1) \cup (-1, 0) \cup (4, +\infty)$$. 
- **Limiti e Asintoti**:
  - $$\lim_{x \to -\infty} f(x) = 0^-$$ (asintoto orizzontale a sinistra $$y=0$$).
  - $$\lim_{x \to -1^-} f(x) = -\infty$$
  - $$\lim_{x \to -1^+} f(x) = -\infty$$
  L'asintoto verticale è in $$x = -1$$.
  - $$\lim_{x \to +\infty} f(x) = -\infty$$ (nessun asintoto orizzontale a destra).
- **Derivabilità**: Ci sono verosimilmente due punti di non derivabilità (punti angolosi):
  1. In $$x = 0$$, dove la curva passa dall'andamento di un ramo d'iperbole a una retta ($$y=x$$).
  2. In $$x = 2$$, dove la pendenza cambia bruscamente da $$+1$$ a $$-1$$.
- **Monotonia**:
  - Crescente negli intervalli: $$(-\infty, -1)$$, $$(-1, 2)$$. (Nota: l'intervallo è spezzato in $$x=-1$$ dall'asintoto).
  - Decrescente nell'intervallo: $$(2, +\infty)$$.
- **Massimi e Minimi**: È presente un **massimo relativo** nel punto $$(2, 2)$$.
