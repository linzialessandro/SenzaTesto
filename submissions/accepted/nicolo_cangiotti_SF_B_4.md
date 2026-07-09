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
a) Descrivi l'effetto della trasformazione $$T^{(1)}(x) = f(x) + 1$$.
b) Qual è l'effetto della trasformazione $$T^{(2)}(x) = f(3 \cdot x)$$?

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
    
    % funzione polinomiale dispari con zeri in -2, 0, 2
    \draw[very thick, blue, domain=-3.2:3.2, samples=100] plot (\x,{(\x)*(\x+2)*(\x-2)/4});
\end{scope}
\end{tikzpicture}
\end{center}
```

# Solution
L'esercizio richiede di interpretare come vengono modificati i grafici in base a specifiche operazioni algebriche sulla funzione elementare.

**a) Trasformazione $$T^{(1)}(x) = f(x) + 1$$**
Aggiungere una costante positiva all'intera funzione (fuori dal suo argomento) provoca una **traslazione verticale verso l'alto**. Il grafico si sposterà esattamente di **1 unità in alto**.
Tutti i punti del grafico cambieranno la loro coordinata $$y$$, mentre le ascisse rimarranno invariate. Ad esempio, l'origine $$(0,0)$$ diventerà il punto $$(0,1)$$.

**b) Trasformazione $$T^{(2)}(x) = f(3x)$$**
Moltiplicare l'argomento $$x$$ per una costante $$k > 1$$ (in questo caso 3) provoca una **compressione orizzontale** (o contrazione orizzontale) del grafico di un fattore 3.
Le ordinate dei punti rimangono identiche, ma il grafico appare più "schiacciato" verso l'asse delle ordinate. Ad esempio, gli zeri della funzione, che nel grafico originale sono posizionati a $$x = -2$$ e $$x = 2$$, si troveranno ora a $$x = -\frac{2}{3}$$ e $$x = \frac{2}{3}$$.
