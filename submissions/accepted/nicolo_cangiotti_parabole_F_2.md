---
year: 2
macro_area: "Geometria Analitica"
topic: "Parabole"
difficulty: 2
tags:
  - "riconoscimento grafico"
  - "concavità"
  - "intersezioni assi"
---
# Problem Text
Individua quale tra i grafici descritti in basso rappresenta la seguente parabola:
$$p: y = -x^2 - x + 2$$
Giustifica la risposta.

- **(A)** Parabola con concavità verso l'alto, interseca l'asse $$x$$ in $$x=1$$ e $$x=2$$, e l'asse $$y$$ in $$y=2$$.
- **(B)** Parabola con concavità verso l'alto, interseca l'asse $$x$$ in $$x=0$$ e $$x=2$$, e l'asse $$y$$ nell'origine.
- **(C)** Parabola con concavità verso il basso, interseca l'asse $$x$$ in $$x=-2$$ e $$x=1$$, e l'asse $$y$$ in $$y=2$$.
- **(D)** Parabola con concavità verso il basso, interseca l'asse $$x$$ in $$x=1$$ e $$x=2$$, e l'asse $$y$$ in $$y=-2$$.

# Solution
L'obiettivo è risalire al grafico corretto studiando i parametri della parabola $$y = -x^2 - x + 2$$:
- **Concavità**: Il coefficiente $$a = -1$$ è **negativo**. Questo significa che la parabola ha la concavità rivolta verso il **basso** (a campana). Possiamo quindi eliminare in un sol colpo i grafici (A) e (B).
- **Intersezione asse $$y$$**: Il termine noto dell'equazione è $$c = 2$$. L'ordinata all'origine è quindi il punto **$$(0; 2)$$**. Questo conferma (C) ed elimina (D) (che passava per l'ordinata $$-2$$).
- **Intersezioni asse $$x$$**: A titolo di verifica finale, controlliamo gli zeri ponendo $$y = 0$$:
  $$-x^2 - x + 2 = 0$$
  Cambiando segno: $$x^2 + x - 2 = 0$$.
  $$x = \frac{-1 \pm \sqrt{1 - 4(1)(-2)}}{2} = \frac{-1 \pm \sqrt{9}}{2} = \frac{-1 \pm 3}{2}$$
  $$x_1 = -2, \quad x_2 = 1$$

I punti di intersezione asse $$x$$ in $$-2$$ e $$1$$, l'intersezione in $$y = 2$$ e la concavità verso il basso confermano che la risposta esatta è il **grafico (C)**.

```tikz
\begin{tikzpicture}[scale=0.8,>=stealth]
  % Griglia
  \draw[very thin, gray!40, dashed] (-4,-3) grid (3,3);
  
  % Assi
  \draw[->, thick] (-4,0) -- (3,0) node[right] {$x$};
  \draw[->, thick] (0,-3) -- (0,3) node[above] {$y$};
  
  \foreach \x in {-3,-2,-1,1,2} \draw (\x,0.1) -- (\x,-0.1) node[below=2pt] {\scriptsize $\x$};
  \foreach \y in {-2,-1,1,2} \draw (0.1,\y) -- (-0.1,\y) node[left=2pt] {\scriptsize $\y$};
  \node[below left=2pt] at (0,0) {\scriptsize $0$};

  % Parabola y = -x^2 - x + 2
  \addplot[domain=-2.7:1.7, thick, blue, samples=100] {-x^2 - x + 2};
  
  % Punti notevoli
  \filldraw[red] (-2,0) circle (2.5pt) node[above left] {$(-2,0)$};
  \filldraw[red] (1,0) circle (2.5pt) node[above right] {$(1,0)$};
  \filldraw[red] (0,2) circle (2.5pt) node[above right] {$(0,2)$};
\end{tikzpicture}
```
