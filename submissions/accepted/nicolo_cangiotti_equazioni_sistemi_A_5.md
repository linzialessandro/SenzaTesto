---
year: 2
macro_area: "Geometria Analitica"
topic: "Sistemi Lineari e Rette"
difficulty: 3
tags:
  - "sistemi lineari"
  - "metodo di sostituzione"
  - "piano cartesiano"
  - "intersezione tra rette"
---
# Problem Text
Risolvi, mostrando tutti i passaggi, il seguente sistema lineare:
$$
\begin{cases}
    2x-3y=1\\
    x+y=3
\end{cases}
$$

Rappresenta sul piano cartesiano la soluzione del sistema e le due equazioni di partenza. Qual è il significato geometrico che emerge da tale rappresentazione?

# Solution
Risolviamo il sistema lineare utilizzando il **metodo di sostituzione**.
Dalla seconda equazione ricaviamo l'incognita $$x$$ (più semplice da isolare) in funzione di $$y$$:
$$
x = 3 - y
$$

Sostituiamo questa espressione al posto della $$x$$ nella prima equazione:
$$
2(3 - y) - 3y = 1
$$
Sviluppiamo e risolviamo l'equazione risultante in $$y$$:
$$
6 - 2y - 3y = 1 \implies 6 - 5y = 1 \implies -5y = 1 - 6 \implies -5y = -5 \implies y = 1
$$

Trovato il valore di $$y$$, torniamo all'equazione $$x = 3 - y$$ per calcolare $$x$$:
$$
x = 3 - (1) \implies x = 2
$$

La soluzione algebrica del sistema è quindi la coppia ordinata $$(2, 1)$$.

**Significato geometrico:**
Ogni equazione lineare in due incognite di primo grado rappresenta una **retta** nel piano cartesiano. 
- La prima equazione, scritta in forma esplicita, è $$y = \frac{2}{3}x - \frac{1}{3}$$.
- La seconda equazione è $$y = -x + 3$$.

Tracciando queste due rette sul piano cartesiano, osserveremmo che si incrociano in un singolo punto. Le coordinate di tale punto di intersezione sono esattamente le soluzioni del sistema, ovvero il punto $$P(2, 1)$$. Il significato geometrico del sistema è quindi la ricerca delle coordinate del **punto di intersezione tra le due rette**.
