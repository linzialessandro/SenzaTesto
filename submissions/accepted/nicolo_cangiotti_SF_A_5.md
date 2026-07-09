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
a) Descrivi la trasformazione $$T^{(1)}(x) = f(x+2)$$.
b) Qual è l'effetto della trasformazione $$T^{(2)}(x) = 2 \cdot f(x)$$?

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
    
    % funzione polinomiale con zeri in -2, 1, 3
    \draw[very thick, blue, domain=-3.2:4.2, samples=100] plot (\x,{-(\x+2)*(\x-1)*(\x-3)/6});
\end{scope}
\end{tikzpicture}
\end{center}
```

# Solution
Le due operazioni indicate rappresentano due distinte trasformazioni geometriche elementari sul grafico di base $$f(x)$$.

**a) Trasformazione $$T^{(1)}(x) = f(x+2)$$**
Aggiungere una costante positiva direttamente all'argomento della funzione provoca una **traslazione orizzontale verso sinistra**. In questo caso, il grafico originale si sposta a sinistra di **2 unità**. 
Ad esempio, i punti di intersezione con l'asse $$x$$ originali (che dal grafico appaiono in $$x=-2$$, $$x=1$$ e $$x=3$$) si sposteranno e le nuove intersezioni diventeranno $$x=-4$$, $$x=-1$$ e $$x=1$$.

**b) Trasformazione $$T^{(2)}(x) = 2 \cdot f(x)$$**
Moltiplicare l'intera funzione per una costante $$k > 1$$ provoca una **dilatazione (stiramento) verticale**. Le ascisse dei punti rimangono invariate (comprese le intersezioni con l'asse $$x$$, dato che $$0 \cdot 2 = 0$$), ma tutte le ordinate (i valori di $$y$$) vengono raddoppiate. 
Visivamente, i picchi della curva (massimi) diventeranno due volte più alti e le valli (minimi) due volte più profonde, "allungando" il grafico lungo l'asse $$y$$.
