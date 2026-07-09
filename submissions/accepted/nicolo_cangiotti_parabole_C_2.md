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
$$p: y = x^2 - 5x + 4$$

a) Scrivi l'equazione associata a $$p$$. Quante soluzioni ha?
b) Cosa rappresentano geometricamente tali soluzioni?
c) Rappresenta approssimativamente sul piano cartesiano la parabola associata a questa equazione determinando le sue intersezioni con l'asse $$x$$ e l'asse $$y$$ e il suo vertice.

# Solution
**a) Equazione associata e soluzioni**
L'equazione associata (necessaria per trovare le intersezioni orizzontali) si ottiene ponendo $$y = 0$$:
$$x^2 - 5x + 4 = 0$$
Troviamo il discriminante: $$\Delta = (-5)^2 - 4(1)(4) = 25 - 16 = 9$$.
Essendo $$\Delta > 0$$, ci sono **due soluzioni reali e distinte**:
$$x_{1,2} = \frac{5 \pm \sqrt{9}}{2} = \frac{5 \pm 3}{2}$$
$$x_1 = \frac{5 - 3}{2} = 1$$
$$x_2 = \frac{5 + 3}{2} = 4$$

**b) Significato geometrico**
Geometricamente, queste due soluzioni ($$x = 1$$ e $$x = 4$$) rappresentano le ascisse dei punti in cui la parabola **interseca l'asse delle $$x$$**. Tali punti sono $$A(1; 0)$$ e $$B(4; 0)$$.

**c) Vertice, intersezione asse $$y$$ e grafico**
Calcoliamo le coordinate del vertice $$V(x_V; y_V)$$:
- $$x_V = -\frac{b}{2a} = -\frac{-5}{2} = \frac{5}{2} = 2.5$$
- $$y_V = -\frac{\Delta}{4a} = -\frac{9}{4} = -2.25$$ (verificabile anche sostituendo $$2.5$$ nell'equazione: $$(2.5)^2 - 5(2.5) + 4 = 6.25 - 12.5 + 4 = -2.25$$).
Il vertice è **$$V(2.5; -2.25)$$**.

L'intersezione con l'asse $$y$$ si ottiene valutando l'equazione per $$x = 0$$. Il risultato corrisponde sempre al termine noto $$c = 4$$. Il punto di intersezione verticale è **$$(0; 4)$$**.

Con questi punti chiave ($$V$$, intersezioni asse $$x$$, e intersezione asse $$y$$), notando che $$a = 1 > 0$$, si può tracciare la parabola con precisione: un'ampia curva a U (concavità verso l'alto) che tocca il punto più basso in $$x = 2.5$$ e passa per l'asse $$y$$ all'altezza $$y = 4$$.
