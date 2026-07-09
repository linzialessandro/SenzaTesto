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
    2x-2y=2\\
    x+y=3
\end{cases}
$$

Rappresenta sul piano cartesiano la soluzione del sistema e le due equazioni di partenza. Qual è il significato geometrico che emerge da tale rappresentazione?

# Solution
Prima di procedere, notiamo che la prima equazione ($$2x-2y=2$$) può essere semplificata dividendo tutti i termini per $$2$$, ottenendo $$x-y=1$$.
Ricaviamo ora l'incognita $$x$$ da questa equazione semplificata:
$$
x = y + 1
$$

Sostituiamo $$(y + 1)$$ al posto della $$x$$ nella seconda equazione del sistema:
$$
(y + 1) + y = 3
$$
Risolviamo l'equazione ottenuta rispetto a $$y$$:
$$
2y + 1 = 3 \implies 2y = 3 - 1 \implies 2y = 2 \implies y = 1
$$

Conoscendo il valore di $$y$$, riprendiamo l'espressione per $$x$$ precedentemente esplicitata per completare la soluzione:
$$
x = (1) + 1 \implies x = 2
$$

La soluzione del sistema algebrico è la coppia ordinata $$(2, 1)$$.

**Significato geometrico:**
Le equazioni $$2x-2y=2$$ (ovvero $$y=x-1$$ in forma esplicita) e $$x+y=3$$ (ovvero $$y=-x+3$$) rappresentano due **rette** sul piano cartesiano. 
Risolvere il sistema equivale a cercare i punti che soddisfano entrambe le equazioni simultaneamente, cioè i punti in cui le rette si incrociano. Disegnando le due rette, noteremo che il loro unico **punto di intersezione** cade esattamente in $$P(2, 1)$$, le cui coordinate corrispondono alla soluzione algebrica appena calcolata.
