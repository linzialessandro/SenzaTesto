---
year: 2
macro_area: "Geometria Analitica"
topic: "Rette"
difficulty: 2
tags:
  - "coefficiente angolare"
  - "pendenza"
---
# Problem Text
Siano dati i seguenti punti:
$$P \equiv (-2;5)$$ e $$Q \equiv (-1;1)$$.

Determina, mostrando tutti i passaggi, il coefficiente angolare ($$m$$) della retta passante per $$P$$ e $$Q$$. Qual è il suo significato geometrico? Cosa posso dedurre sulla retta se $$m < 0$$?

# Solution
Per determinare il coefficiente angolare $$m$$ della retta che passa per i punti $$P$$ e $$Q$$, applichiamo la formula basata sul rapporto tra la variazione delle ordinate e la variazione delle ascisse:
$$m = \frac{y_Q - y_P}{x_Q - x_P}$$

Sostituiamo le coordinate dei punti assegnati:
$$m = \frac{1 - 5}{-1 - (-2)} = \frac{-4}{-1 + 2} = \frac{-4}{1} = -4$$

Il coefficiente angolare è $$m = -4$$.

**Significato geometrico**
Il coefficiente angolare rappresenta la **pendenza** della retta. Da un punto di vista geometrico, indica l'inclinazione della retta rispetto all'asse delle ascisse ($$x$$). In pratica, descrive la variazione verticale della retta a fronte di un avanzamento orizzontale unitario.

**Deduzioni per $$m < 0$$**
Quando il coefficiente angolare è negativo ($$m < 0$$), possiamo affermare che la retta è **decrescente**. Questo significa che procedendo da sinistra verso destra (cioè per valori crescenti della $$x$$), i valori della $$y$$ diminuiscono e la retta punta "verso il basso", formando un angolo ottuso con la direzione positiva dell'asse $$x$$.

```tikz
\begin{tikzpicture}[scale=0.7,>=stealth]
  % Griglia
  \draw[very thin, gray!40, dashed] (-4,-1) grid (2,6);
  
  % Assi
  \draw[->, thick] (-4,0) -- (2,0) node[right] {$x$};
  \draw[->, thick] (0,-1) -- (0,6) node[above] {$y$};
  
  \foreach \x in {-3,-2,-1,1} \draw (\x,0.1) -- (\x,-0.1) node[below=2pt] {\scriptsize $\x$};
  \foreach \y in {1,2,3,4,5} \draw (0.1,\y) -- (-0.1,\y) node[left=2pt] {\scriptsize $\y$};
  \node[below left=2pt] at (0,0) {\scriptsize $0$};

  % Retta y = -4x - 3
  \addplot[domain=-2.2:-0.2, thick, blue] {-4*x - 3};
  
  % Punti
  \filldraw[red] (-2,5) circle (2.5pt) node[right] {$P(-2,5)$};
  \filldraw[red] (-1,1) circle (2.5pt) node[right] {$Q(-1,1)$};
  
  % Variazione (triangolino)
  \draw[dashed, red] (-2,5) -- (-1,5) -- (-1,1);
  \node[above] at (-1.5, 5) {\scriptsize $\Delta x = 1$};
  \node[right] at (-1, 3) {\scriptsize $\Delta y = -4$};
\end{tikzpicture}
```
