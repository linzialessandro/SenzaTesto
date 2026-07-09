---
year: 2
macro_area: "Algebra"
topic: "Sistemi Lineari"
difficulty: 2
tags:
  - "sistemi lineari"
  - "significato geometrico"
  - "intersezione di rette"
---
# Problem Text
Risolvi, mostrando tutti i passaggi, il seguente sistema lineare. 
$$
\begin{cases}
    x+2y=4\\
    x-y=1
\end{cases}
$$

Rappresenta sul piano cartesiano la soluzione del sistema e le due equazioni di partenza. Qual è il significato geometrico che emerge da tale rappresentazione?

# Solution
Risolviamo il sistema tramite il **metodo di sostituzione**. Isoliamo la $$x$$ nella seconda equazione:
$$
x = 1 + y
$$

Sostituiamo questa espressione all'interno della prima equazione:
$$
(1 + y) + 2y = 4
$$
$$
1 + 3y = 4
$$
$$
3y = 3 \implies y = 1
$$

Trovata la $$y$$, ricaviamo la $$x$$:
$$
x = 1 + (1) = 2
$$

La soluzione algebrica del sistema è quindi il punto di coordinate $$(2, 1)$$.

**Significato Geometrico**
Le due equazioni di partenza ($$x+2y=4$$ e $$x-y=1$$) rappresentano **due rette** sul piano cartesiano. 
Risolvere il sistema composto da queste due equazioni significa trovare i punti comuni a entrambe le rette. Dato che abbiamo trovato una singola soluzione $$(2, 1)$$, deduciamo che le due rette sono **incidenti** e che il punto $$(2, 1)$$ è esattamente il loro **punto di intersezione**.
Tracciando le due rette (ad esempio esplicitandole come $$y = -\frac{1}{2}x + 2$$ e $$y = x - 1$$) si può verificare graficamente che si incrociano proprio nel punto $$(2, 1)$$.
