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
a) Rappresenta e descrivi la trasformazione $$T^{(1)}(x) = f(x) + 2$$.
b) Qual è l'effetto della trasformazione $$T^{(2)}(x) = 3 \cdot f(x)$$?

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
    
    % funzione polinomiale: y = -(x+2)(x-1)(x-3)/6
    \draw[very thick, blue, domain=-3.2:4.2, samples=100] plot (\x,{-(\x+2)*(\x-1)*(\x-3)/6});
\end{scope}
\end{tikzpicture}
\end{center}
```

# Solution
**a) Trasformazione $$T^{(1)}(x) = f(x) + 2$$**
Aggiungere una costante positiva ($$2$$) algebricamente all'esterno della funzione porta a una **traslazione verticale verso l'alto**. Il grafico mantiene la sua forma esatta, ma viene sollevato rigidamente di **2 unità** lungo l'asse $$y$$.
Per tracciare la nuova figura, occorre spostare ogni punto $$(x, y)$$ del grafico originale verso il nuovo punto $$(x, y+2)$$. Ad esempio l'intersezione $$(-2, 0)$$ diventerà il punto $$(-2, 2)$$.

**b) Trasformazione $$T^{(2)}(x) = 3 \cdot f(x)$$**
Moltiplicare per un fattore $$k > 1$$ (nello specifico $$3$$) l'espressione intera della funzione produce una **dilatazione verticale**.
Le intersezioni con l'asse $$x$$ rimangono invariate (perché $$0 \cdot 3 = 0$$), ma tutte le altre ordinate ($$y$$) triplicano la loro ampiezza in modulo. Visivamente, le "onde" del polinomio diventeranno tre volte più alte o tre volte più profonde, conferendo al grafico un aspetto verticalmente più allungato.
