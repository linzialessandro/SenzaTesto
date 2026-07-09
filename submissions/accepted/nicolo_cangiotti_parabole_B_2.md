---
year: 2
macro_area: "Geometria Analitica"
topic: "Parabole"
difficulty: 2
tags:
  - "vertice"
  - "intersezioni assi"
  - "grafico parabola"
---
# Problem Text
Considera la seguente parabola: 
$$p: y = x^2 - 2x - 3$$
*(Nota: il testo originale riportava un refuso di battitura $$p: x^2 - 2x - 3 = 0$$, confondendo l'equazione della parabola con la sua equazione associata)*

a) Scrivi l'equazione associata a $$p$$. Quante soluzioni ha?
b) Cosa rappresentano geometricamente tali soluzioni?
c) Rappresenta approssimativamente sul piano cartesiano la parabola associata a questa equazione determinando le sue intersezioni con l'asse $$x$$ e l'asse $$y$$ e il suo vertice.

# Solution
**a) Equazione associata e soluzioni**
L'equazione algebrica associata si ottiene annullando la $$y$$ (cioè intersecando la parabola con l'asse $$x$$):
$$x^2 - 2x - 3 = 0$$
Calcoliamo il discriminante: $$\Delta = (-2)^2 - 4(1)(-3) = 4 + 12 = 16$$.
Siccome $$\Delta > 0$$, l'equazione ha **due soluzioni distinte**:
$$x_{1,2} = \frac{-(-2) \pm \sqrt{16}}{2(1)} = \frac{2 \pm 4}{2}$$
$$x_1 = \frac{2 - 4}{2} = -1$$
$$x_2 = \frac{2 + 4}{2} = 3$$

**b) Significato geometrico**
Dal punto di vista geometrico, queste due soluzioni ($$x = -1$$ e $$x = 3$$) indicano le ascisse in cui la parabola **interseca l'asse $$x$$**. I punti di intersezione orizzontale sono quindi $$A(-1; 0)$$ e $$B(3; 0)$$.

**c) Vertice, intersezione asse $$y$$ e grafico**
Troviamo le coordinate del vertice $$V(x_V; y_V)$$:
- L'ascissa del vertice è $$x_V = -\frac{b}{2a} = -\frac{-2}{2} = 1$$
- L'ordinata è $$y_V = -\frac{\Delta}{4a} = -\frac{16}{4} = -4$$. (In alternativa, possiamo calcolarla sostituendo $$x=1$$ nell'equazione: $$1^2 - 2(1) - 3 = 1 - 2 - 3 = -4$$).
Il vertice si trova nel punto **$$V(1; -4)$$**.

L'intersezione con l'asse $$y$$ si ottiene ponendo $$x = 0$$, il che ci restituisce semplicemente il termine noto $$c$$. Pertanto l'intersezione con l'asse delle ordinate è il punto **$$(0; -3)$$**.

Adesso possiamo disegnare un grafico accurato della parabola: segniamo il vertice, l'intersezione con l'asse $$y$$, e i due punti in cui taglia l'asse $$x$$. Sapendo che $$a = 1 > 0$$, collegheremo i punti con una curva a forma di U, con concavità verso l'alto.

```tikz
\begin{tikzpicture}[scale=0.8,>=stealth]
  % Griglia
  \draw[very thin, gray!40, dashed] (-3,-5) grid (5,3);
  
  % Assi
  \draw[->, thick] (-3,0) -- (5,0) node[right] {$x$};
  \draw[->, thick] (0,-5) -- (0,3) node[above] {$y$};
  
  \foreach \x in {-2,-1,1,2,3,4} \draw (\x,0.1) -- (\x,-0.1) node[below=2pt] {\scriptsize $\x$};
  \foreach \y in {-4,-3,-2,-1,1,2} \draw (0.1,\y) -- (-0.1,\y) node[left=2pt] {\scriptsize $\y$};
  \node[below left=2pt] at (0,0) {\scriptsize $0$};

  % Parabola y = x^2 - 2x - 3
  \addplot[domain=-2:4, thick, blue, samples=100] {x^2 - 2*x - 3};
  
  % Punti notevoli
  \filldraw[red] (1,-4) circle (2.5pt) node[below right] {$V(1,-4)$};
  \filldraw[black] (0,-3) circle (2.5pt) node[below left] {$(0,-3)$};
  \filldraw[red] (-1,0) circle (2.5pt) node[above left] {$A(-1,0)$};
  \filldraw[red] (3,0) circle (2.5pt) node[above right] {$B(3,0)$};
\end{tikzpicture}
```
