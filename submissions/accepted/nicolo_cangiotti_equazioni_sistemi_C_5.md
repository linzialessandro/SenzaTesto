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
    x+2y=5\\
    x-y=2
\end{cases}
$$

Rappresenta sul piano cartesiano la soluzione del sistema e le due equazioni di partenza. Qual è il significato geometrico che emerge da tale rappresentazione?

# Solution
Usiamo il **metodo di sostituzione** per risolvere algebricamente il sistema lineare.
È facile ricavare la $$x$$ dalla seconda equazione, per cui esplicitiamola:
$$
x = y + 2
$$

Andiamo a inserire l'espressione $$(y + 2)$$ al posto della $$x$$ nella prima equazione:
$$
(y + 2) + 2y = 5
$$
Risolviamo l'equazione di primo grado trovata, procedendo con i calcoli sulla variabile $$y$$:
$$
3y + 2 = 5 \implies 3y = 5 - 2 \implies 3y = 3 \implies y = 1
$$

Conoscendo ora il valore di $$y$$, riprendiamo l'espressione di $$x$$ per valutarla:
$$
x = (1) + 2 \implies x = 3
$$

La soluzione del sistema algebrico è la coppia ordinata $$(3, 1)$$.

**Significato geometrico:**
Ciascuna delle due equazioni del sistema ($$x+2y=5$$ e $$x-y=2$$) definisce una **retta** sul piano cartesiano. 
- Mettendo a sistema due equazioni di rette, si cercano le coordinate dei punti che appartengono contemporaneamente ad entrambe.
- Nel caso di questo sistema, essendo presente un'unica soluzione, significa che le due rette si incontrano in un solo punto. Rappresentando graficamente le rette, il loro **punto di intersezione** sarà esattamente $$P(3, 1)$$.
