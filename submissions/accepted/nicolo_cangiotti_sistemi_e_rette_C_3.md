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
    x+2y=3\\
    x-y=0
\end{cases}
$$

Rappresenta sul piano cartesiano la soluzione del sistema e le due equazioni di partenza. Qual è il significato geometrico che emerge da tale rappresentazione?

# Solution
Per risolvere il sistema, possiamo usare comodamente il **metodo di sostituzione**. Isoliamo la $$x$$ dalla seconda equazione, che è la più semplice:
$$
x = y
$$

Andiamo a inserire questa relazione nella prima equazione, sostituendo alla $$x$$ la variabile $$y$$:
$$
(y) + 2y = 3
$$
$$
3y = 3 \implies y = 1
$$

Conoscendo $$y=1$$, usiamo la relazione trovata in precedenza per ricavare la $$x$$:
$$
x = y \implies x = 1
$$

Algebricamente, la soluzione del sistema lineare corrisponde alla coppia $$(1, 1)$$.

**Significato Geometrico**
Dal punto di vista geometrico, le due equazioni iniziali del sistema ($$x+2y=3$$ e $$x-y=0$$) sono le equazioni di **due rette** nel piano cartesiano. 
Risolvere il sistema equivale a cercare i punti di intersezione tra di esse. Avendo trovato una soluzione unica $$(1, 1)$$, deduciamo che le due rette sono **incidenti** e che si incontrano esattamente nel punto di coordinate $$(1, 1)$$. 
Rappresentando graficamente sul piano la retta $$y=-\frac{1}{2}x+\frac{3}{2}$$ e la retta passante per l'origine $$y=x$$, si noterà che si incrociano proprio nel punto $$(1, 1)$$.
