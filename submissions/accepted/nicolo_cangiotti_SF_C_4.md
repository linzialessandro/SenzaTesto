---
year: 2
macro_area: "Analisi"
topic: "Studio di Funzione"
difficulty: 2
tags:
  - "trasformazioni di funzioni"
  - "traslazione"
  - "dilatazione"
---
# Problem Text
Sia dato il grafico della funzione $$f(x)$$ nel piano cartesiano di sinistra.
a) Descrivi l'effetto della trasformazione $$T^{(1)}(x) = f(x) - 2$$.
b) Qual è l'effetto della trasformazione $$T^{(2)}(x) = f\left(\frac{1}{2} \cdot x\right)$$?

```latex
\begin{center}
\begin{tikzpicture}[scale=0.7]
\begin{scope}[xshift=0cm]
    \draw[step=1cm, gray!40, very thin] (-5,-5) grid (5,5);
    \draw[->, thick] (-5.3,0) -- (5.3,0) node[right] {\scriptsize $x$};
    \draw[->, thick] (0,-5.3) -- (0,5.3) node[above] {\scriptsize $y$};
    \foreach \x in {-5,-4,...,5} {
        \draw (\x,0.08) -- (\x,-0.08);
        \ifnum\x=0 \else \node[below=2pt, scale=0.5] at (\x,0) {\x}; \fi
    }
    \foreach \y in {-5,-4,...,5} {
        \draw (0.08,\y) -- (-0.08,\y);
        \ifnum\y=0 \else \node[left=2pt, scale=0.5] at (0,\y) {\y}; \fi
    }
    \node[below left=1pt, scale=0.5] at (0,0) {0};
    
    % funzione polinomiale
    \draw[very thick, blue, domain=-2.6:4.6, samples=100] plot (\x,{(\x+2)*(\x-1)*(\x-4)/4});
\end{scope}
\end{tikzpicture}
\end{center}
```

# Solution
**a) Trasformazione $$T^{(1)}(x) = f(x) - 2$$**
L'aggiunta di una costante negativa alla funzione (quindi all'esterno dell'argomento) genera una **traslazione verticale verso il basso**. L'intero grafico subisce uno spostamento rigido verso il basso di **2 unità**.
I valori sull'asse $$x$$ non si modificano, ma ogni punto passa da avere coordinate $$(x, y)$$ a coordinate $$(x, y-2)$$. Ad esempio l'intersezione con l'asse $$y$$, che originariamente è $$(0,2)$$, trasla nell'origine $$(0,0)$$.

**b) Trasformazione $$T^{(2)}(x) = f\left(\frac{x}{2}\right)$$**
Moltiplicare l'argomento $$x$$ per un coefficiente compreso tra $$0$$ e $$1$$ (ovvero dividere per una costante $$k > 1$$, in questo caso 2) causa una **dilatazione (o stiramento) orizzontale**. 
Il grafico diventerà largo il **doppio** rispetto a quello di partenza. Le intersezioni con l'asse $$y$$ resteranno inalterate (poiché $$x=0$$ rimane $$0$$), ma tutte le altre ascisse raddoppieranno in modulo allontanandosi dall'asse $$y$$. Ad esempio, le intersezioni con l'asse $$x$$, originariamente in $$-2, 1, 4$$, si sposteranno e si troveranno rispettivamente in $$-4, 2, 8$$.
