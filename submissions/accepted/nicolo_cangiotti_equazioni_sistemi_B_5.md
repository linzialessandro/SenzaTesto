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
    3x+2y=4\\
    x+y=1
\end{cases}
$$

Rappresenta sul piano cartesiano la soluzione del sistema e le due equazioni di partenza. Qual è il significato geometrico che emerge da tale rappresentazione?

# Solution
Per risolvere questo sistema lineare impieghiamo il **metodo di sostituzione**.
È conveniente ricavare una delle incognite dalla seconda equazione, per esempio la $$y$$:
$$
y = 1 - x
$$

Andiamo poi a sostituire $$1 - x$$ al posto della $$y$$ nella prima equazione:
$$
3x + 2(1 - x) = 4
$$
Sviluppiamo l'equazione per ricavare la $$x$$:
$$
3x + 2 - 2x = 4 \implies x + 2 = 4 \implies x = 4 - 2 \implies x = 2
$$

Ottenuto il valore di $$x$$, lo inseriamo nell'equazione della $$y$$ trovata prima per completare la soluzione:
$$
y = 1 - (2) \implies y = -1
$$

Il sistema ha dunque un'unica soluzione, rappresentata dalla coppia $$(2, -1)$$.

**Significato geometrico:**
Le equazioni lineari a due incognite di questo sistema ($$3x+2y=4$$ e $$x+y=1$$) descrivono analiticamente due **rette** sul piano cartesiano. 
- La prima equazione (esplicitata come $$y = -\frac{3}{2}x + 2$$) e la seconda ($$y = -x + 1$$) non sono parallele e pertanto si intersecano.
- Disegnando queste due rette sul piano cartesiano si nota che il loro unico punto in comune (l'intersezione) ha come coordinate la soluzione del sistema algebrico, cioè il punto $$P(2, -1)$$.
Risolvere il sistema equivale quindi a ricercare le coordinate del **punto d'incontro delle rette**.
