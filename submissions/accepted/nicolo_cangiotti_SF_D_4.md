---
year: 2
macro_area: "Analisi"
topic: "Studio di Funzione"
difficulty: 2
tags:
  - "trasformazioni di funzioni"
  - "traslazione"
  - "compressione"
---
# Problem Text
Sia dato il grafico della funzione $$f(x)$$ nel piano cartesiano di sinistra.
a) Descrivi l'effetto della trasformazione $$T^{(1)}(x) = f(x-2)$$.
b) Qual è l'effetto della trasformazione $$T^{(2)}(x) = \frac{1}{4} \cdot f(x)$$?

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
    
    % funzione polinomiale dispari con zeri in -3, 0, 3
    \draw[very thick, blue, domain=-4.2:4.2, samples=100] plot (\x,{(\x)*(\x-3)*(\x+3)/9});
\end{scope}
\end{tikzpicture}
\end{center}
```

# Solution
L'esercizio verifica la comprensione delle trasformazioni geometriche operate algebricamente sull'equazione del grafico.

**a) Trasformazione $$T^{(1)}(x) = f(x-2)$$**
Sottrarre una costante positiva ($$2$$) dall'argomento della funzione provoca una **traslazione orizzontale verso destra**. L'intero grafico si sposterà a destra di **2 unità**.
I valori della funzione restano invariati, ma vengono raggiunti "in ritardo" sull'asse delle $$x$$. Ad esempio, gli zeri della funzione originaria (situati in $$-3$$, $$0$$ e $$3$$) scivoleranno a destra diventando le nuove intersezioni: $$-1$$, $$2$$ e $$5$$.

**b) Trasformazione $$T^{(2)}(x) = \frac{1}{4} \cdot f(x)$$**
Moltiplicare l'intera funzione per una costante positiva inferiore a $$1$$ ($$k = \frac{1}{4}$$) provoca una **compressione verticale** (o schiacciamento verticale) della funzione. 
Le ascisse di tutti i punti rimangono inalterate (e di conseguenza anche gli zeri non si spostano sull'asse $$x$$), ma tutte le ordinate (i valori $$y$$) vengono ridotte ad un quarto della loro dimensione originale, rendendo il grafico più "basso" e schiacciato verso l'asse orizzontale.
