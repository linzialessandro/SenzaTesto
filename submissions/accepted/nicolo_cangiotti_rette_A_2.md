---
year: 2
macro_area: "Geometria Analitica"
topic: "Rette"
difficulty: 2
tags:
  - "equazione della retta"
  - "retta per due punti"
  - "intersezioni assi"
---
# Problem Text
Siano dati i seguenti punti:
$$P \equiv (3;5)$$ e $$Q \equiv (-1;1)$$.

a) Determina, mostrando tutti i passaggi, l'equazione della retta passante per $$P$$ e $$Q$$.
b) Rappresenta sul piano cartesiano la retta che hai trovato. Quale elemento dell'equazione identifica l'intersezione con l'asse $$y$$? Come trovo invece l'intersezione con l'asse $$x$$?

# Solution
**a) Equazione della retta per due punti**
Per trovare l'equazione della retta, iniziamo calcolando il suo coefficiente angolare $$m$$:
$$m = \frac{y_Q - y_P}{x_Q - x_P} = \frac{1 - 5}{-1 - 3} = \frac{-4}{-4} = 1$$

Ora utilizziamo la formula del fascio di rette proprio passante per un punto (scegliendo ad esempio $$P$$):
$$y - y_P = m(x - x_P)$$
$$y - 5 = 1 \cdot (x - 3)$$
$$y - 5 = x - 3$$
Esplicitando la $$y$$, otteniamo l'equazione della retta:
$$y = x - 3 + 5$$
$$y = x + 2$$

*(Nota: avremmo ottenuto lo stesso identico risultato utilizzando l'altro punto $$Q$$).*

**b) Intersezioni con gli assi e rappresentazione**
L'equazione trovata è nella forma esplicita $$y = mx + q$$. 
L'elemento che identifica l'intersezione con l'asse $$y$$ (asse delle ordinate) è il termine noto **$$q$$**, chiamato proprio **ordinata all'origine**. Nel nostro caso, essendo $$q = 2$$, sappiamo che la retta interseca l'asse $$y$$ nel punto $$(0; 2)$$.

Per trovare l'intersezione con l'asse $$x$$ (asse delle ascisse), dobbiamo imporre che la $$y$$ sia uguale a zero, sostituendolo nell'equazione della retta:
$$0 = x + 2 \implies x = -2$$
L'intersezione con l'asse $$x$$ è quindi il punto $$(-2; 0)$$.

Per rappresentare la retta sul piano cartesiano è sufficiente segnare i due punti originali $$P$$ e $$Q$$ (oppure i due punti di intersezione con gli assi appena trovati) e congiungerli con una riga estendendo il tratto.

```tikz
\begin{tikzpicture}[scale=0.7,>=stealth]
  % Griglia
  \draw[very thin, gray!40, dashed] (-4,-1) grid (5,6);
  
  % Assi
  \draw[->, thick] (-4,0) -- (5,0) node[right] {$x$};
  \draw[->, thick] (0,-1) -- (0,6) node[above] {$y$};
  
  \foreach \x in {-3,-2,-1,1,2,3,4} \draw (\x,0.1) -- (\x,-0.1) node[below=2pt] {\scriptsize $\x$};
  \foreach \y in {1,2,3,4,5} \draw (0.1,\y) -- (-0.1,\y) node[left=2pt] {\scriptsize $\y$};
  \node[below left=2pt] at (0,0) {\scriptsize $0$};

  % Retta
  \addplot[domain=-3:4, thick, blue] {x + 2};
  
  % Punti
  \filldraw[red] (3,5) circle (2.5pt) node[above left] {$P(3,5)$};
  \filldraw[red] (-1,1) circle (2.5pt) node[above left] {$Q(-1,1)$};
  \filldraw[black] (0,2) circle (2.5pt) node[below right] {$(0,2)$};
  \filldraw[black] (-2,0) circle (2.5pt) node[above left] {$(-2,0)$};
\end{tikzpicture}
```
