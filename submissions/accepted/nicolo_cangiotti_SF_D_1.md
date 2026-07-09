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
Descrivila studiando: campo di esistenza e continuità, simmetrie, intersezioni con gli assi, positività, limiti, derivabilità e gli intervalli in cui la funzione è crescente e quelli in cui è decrescente e i punti stazionari.

```latex
\begin{center}
\begin{tikzpicture}[scale=0.8]
  % assi con numeri
  \draw[thick,->] (-4.6,0) -- (4.6,0) node[below] {$x$};
  \draw[thick,->] (0,-3.5) -- (0,4.5) node[above] {$y$};
  \draw[dashed] (-1,-4.5) -- (-1,5);
  \foreach \x in {-4,-3,-2,2,3,4} \draw (\x,0.1) -- (\x,-0.1) node[below] {\x};
   \foreach \x in {-1,1} \draw (\x,0.1) -- (\x,-0.1) node[below] {\x};
  \foreach \y in {-3,-2,-1,0,1,2,3,4} \draw (0.1,\y) -- (-0.1,\y) node[above right] {\y};
  
  \draw[domain=-4.2:-1.2,smooth,very thick,blue] plot (\x,{-1/(\x+1)});
  \draw[domain=-0.83:0,smooth,very thick,blue] plot (\x,{1/(\x+1)-1});
  \draw[domain=0:2,smooth,very thick,blue] plot (\x,{-\x});
  \draw[domain=2:5.5,smooth,very thick,blue] plot (\x,{\x-4});
  
  \node at (0,0) [circle,fill,inner sep=1.5pt]{};
  \node at (4,0) [circle,fill,inner sep=1.5pt]{};
\end{tikzpicture}
\end{center}
```

# Solution
L'analisi del grafico rivela le seguenti proprietà della funzione:

- **Campo di esistenza e continuità**: Il dominio è l'insieme $$D = \mathbb{R} \setminus \{-1\}$$. Nei due intervalli $$(-\infty, -1)$$ e $$(-1, +\infty)$$ la funzione è continua. In $$x=-1$$ è presente un asintoto verticale.
- **Simmetrie**: La funzione non ha simmetrie globali (né pari, né dispari).
- **Intersezioni con gli assi**:
  - Asse $$y$$: Passa per l'origine $$(0,0)$$.
  - Asse $$x$$: Interseca l'asse nelle ascisse $$x=0$$ e $$x=4$$.
- **Positività**: 
  - La curva è nel semipiano superiore ($$f(x) > 0$$) negli intervalli: $$(-\infty, -1) \cup (-1, 0) \cup (4, +\infty)$$.
  - La curva si trova nel semipiano inferiore ($$f(x) < 0$$) nell'intervallo: $$(0, 4)$$.
- **Limiti e Asintoti**:
  - $$\lim_{x \to -\infty} f(x) = 0^+$$ (il ramo sinistro si abbassa adagiandosi su $$y=0$$ da sopra). Asintoto orizzontale sinistro.
  - $$\lim_{x \to -1^-} f(x) = +\infty$$ (il ramo sinistro sale verticalmente lungo $$x=-1$$).
  - $$\lim_{x \to -1^+} f(x) = +\infty$$ (il ramo centrale scende da $$+\infty$$).
  Asintoto verticale in $$x=-1$$.
  - $$\lim_{x \to +\infty} f(x) = +\infty$$ (la semiretta destra sale indefinitamente). Non vi è asintoto orizzontale a destra.
- **Derivabilità**: Nei punti $$x=0$$ e $$x=2$$ la pendenza del grafico subisce un cambiamento brusco e improvviso. Pertanto ci sono due punti angolosi (non derivabilità). Altrove la funzione è derivabile.
- **Monotonia (Crescenza/Decrescenza)**:
  - Crescente: $$(-\infty, -1)$$ e $$(2, +\infty)$$.
  - Decrescente: $$(-1, 2)$$. (Attenzione: l'intervallo di decrescenza attraversa l'asintoto. È decrescente separatamente in $$(-1, 0)$$ e in $$(0, 2)$$).
- **Punti Stazionari (Massimi/Minimi)**: È presente un **minimo relativo** in corrispondenza del punto $$(2, -2)$$.
