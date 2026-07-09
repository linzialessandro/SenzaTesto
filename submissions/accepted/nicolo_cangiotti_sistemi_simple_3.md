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
2x+3y=5\\
3x-2y=1
\end{cases}
$$

# Solution
Optiamo per il **metodo di sostituzione**. Isoliamo la $$x$$ dalla prima equazione (poiché i coefficienti non sono $$1$$, avremo una frazione):
$$
2x = 5 - 3y \implies x = \frac{5 - 3y}{2}
$$

Sostituiamo l'espressione ottenuta al posto della $$x$$ nella seconda equazione:
$$
3\left(\frac{5 - 3y}{2}\right) - 2y = 1
$$

Moltiplichiamo tutta l'equazione per $$2$$ al fine di eliminare il denominatore:
$$
3(5 - 3y) - 2(2y) = 2(1)
$$
$$
15 - 9y - 4y = 2
$$

Riduciamo i termini simili:
$$
-13y = 2 - 15
$$
$$
-13y = -13
$$

Dividendo per $$-13$$, si ottiene il valore della $$y$$:
$$
y = 1
$$

Ora inseriamo il valore di $$y$$ nell'espressione trovata inizialmente per ricavare la $$x$$:
$$
x = \frac{5 - 3(1)}{2} = \frac{5 - 3}{2} = \frac{2}{2} = 1
$$

Il sistema ammette dunque la seguente soluzione:
$$
(1, 1)
$$
