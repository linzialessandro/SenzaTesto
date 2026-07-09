---
year: 2
macro_area: "Algebra"
topic: "Sistemi Lineari"
difficulty: 2
tags:
  - "sistemi lineari"
  - "metodo di sostituzione"
---
# Problem Text
Risolvi, mostrando tutti i passaggi, il seguente sistema lineare:
$$
\begin{cases}
3x+2y=-1\\
-4x-3y=1
\end{cases}
$$

# Solution
Applichiamo il **metodo di sostituzione**. Possiamo isolare una delle incognite da una qualsiasi delle due equazioni. Scegliamo di esplicitare la $$y$$ dalla prima equazione:
$$
2y = -1 - 3x \implies y = \frac{-1 - 3x}{2}
$$

Sostituiamo ora questa espressione frazionaria al posto della $$y$$ nella seconda equazione:
$$
-4x - 3\left(\frac{-1 - 3x}{2}\right) = 1
$$

Per semplificare l'equazione, eliminiamo il denominatore moltiplicando tutti i termini per $$2$$:
$$
2 \cdot (-4x) - 3(-1 - 3x) = 2 \cdot 1
$$
$$
-8x + 3 + 9x = 2
$$

Raggruppiamo e sommiamo i termini simili:
$$
x = 2 - 3
$$
$$
x = -1
$$

Avendo trovato la $$x$$, la sostituiamo nell'espressione trovata in precedenza per ricavare la $$y$$:
$$
y = \frac{-1 - 3(-1)}{2} = \frac{-1 + 3}{2} = \frac{2}{2} = 1
$$

La soluzione del sistema lineare è quindi la coppia:
$$
(-1, 1)
$$
