---
year: 3
macro_area: "Geometria Analitica"
topic: "Parabola"
difficulty: 2
tags:
  - "studio di parabola"
  - "vertice"
  - "intersezioni con gli assi"
  - "grafico"
---
# Problem Text
Un tecnico sta progettando la copertura metallica di un componente del motore.
Per motivi estetici e aerodinamici, il profilo laterale della copertura viene modellato con una parabola descritta dalla funzione:
$$ y = -x^2 + 8x - 12 $$
dove le misure sono espresse in centimetri. Il tecnico deve determinare le caratteristiche principali della curva per verificare che il pezzo possa essere montato correttamente. In particolare occorre:
- stabilire la concavità della parabola;
- trovare il vertice;
- individuare le intersezioni con gli assi;
- rappresentare graficamente il profilo nel piano cartesiano.

# Solution
L'equazione della parabola è della forma $$y = ax^2 + bx + c$$, con $$a = -1$$, $$b = 8$$, $$c = -12$$.

**1. Concavità**
Il coefficiente del termine di secondo grado è negativo ($$a = -1 < 0$$). Pertanto, la parabola volge la **concavità verso il basso**.

**2. Vertice**
Il vertice $$V(x_v, y_v)$$ si calcola con le formule note. L'ascissa è:
$$ x_v = -\frac{b}{2a} = -\frac{8}{2(-1)} = -\frac{8}{-2} = 4 $$
Per trovare l'ordinata $$y_v$$, sostituiamo $$x = 4$$ nell'equazione:
$$ y_v = -(4)^2 + 8(4) - 12 = -16 + 32 - 12 = 16 - 12 = 4 $$
Il vertice si trova nel punto **$$V(4, 4)$$**.

**3. Intersezioni con gli assi**
- **Asse y ($$x = 0$$):**
  Sostituendo $$x = 0$$ nell'equazione si ottiene $$y = -12$$. 
  L'intersezione è il punto **$$(0, -12)$$**.
- **Asse x ($$y = 0$$):**
  Risolviamo l'equazione di secondo grado $$-x^2 + 8x - 12 = 0$$, che per comodità cambiamo di segno in $$x^2 - 8x + 12 = 0$$.
  Troviamo le radici (fattorizzando in $$(x-2)(x-6)=0$$ o usando la formula col delta):
  $$ \Delta = (-8)^2 - 4(1)(12) = 64 - 48 = 16 $$
  $$ x_{1,2} = \frac{8 \pm \sqrt{16}}{2} = \frac{8 \pm 4}{2} $$
  Da cui $$x_1 = \frac{4}{2} = 2$$ e $$x_2 = \frac{12}{2} = 6$$.
  Le intersezioni sono i punti **$$(2, 0)$$** e **$$(6, 0)$$**.

**4. Grafico**
Il grafico descrive un arco rivolto verso il basso che attraversa il piano terra ($$y=0$$) nei punti $$2$$ e $$6$$, e tocca il suo apice in corrispondenza del vertice $$(4,4)$$.

```tikz
\begin{tikzpicture}[scale=0.75,>=stealth]
  \def\xmax{7}
  \def\ymax{5}
  \def\ymin{-2}
  \draw[very thin, gray, dashed] (-\xmax,\ymin) grid (\xmax,\ymax);
  \draw[->, thick] (-1,0) -- (\xmax+0.5,0) node[right] {$x$};
  \draw[->, thick] (0,\ymin-0.5) -- (0,\ymax+0.5) node[above] {$y$};
  
  \foreach \x in {-1,1,2,3,4,5,6,7} {
      \draw (\x,0.1) -- (\x,-0.1) node[below] {\x};
  }
  \foreach \y in {-2,-1,1,2,3,4,5} {
      \draw (0.1,\y) -- (-0.1,\y) node[left] {\y};
  }
  \node[below left] at (0,0) {0};

  % Parabola
  \addplot[domain=1.5:6.5, thick, blue, samples=100] {-x^2 + 8*x - 12};
  
  % Punti notevoli
  \filldraw[red] (4,4) circle (2pt) node[above] {$V(4,4)$};
  \filldraw[black] (2,0) circle (2pt);
  \filldraw[black] (6,0) circle (2pt);
\end{tikzpicture}
```
