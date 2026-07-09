---
year: 1
macro_area: "Algebra"
topic: "Polinomi"
difficulty: 3
tags:
  - "espressioni"
  - "prodotto di polinomi"
  - "somma algebrica"
---
# Problem Text
Svolgi, mostrando tutti i passaggi, la seguente espressione con i polinomi:
$$
(x+1)\cdot(2x+3)-x^2+3x\cdot(-1-x)
$$

# Solution
Cominciamo eseguendo tutte le moltiplicazioni presenti.
La prima è una moltiplicazione tra due binomi:
$$(x+1)(2x+3) = x\cdot 2x + x\cdot 3 + 1\cdot 2x + 1\cdot 3 = 2x^2 + 3x + 2x + 3 = 2x^2 + 5x + 3$$

La seconda parte in fondo prevede l'utilizzo della distributiva:
$$3x\cdot(-1-x) = -3x - 3x^2$$

Riscriviamo l'intera espressione accostando i risultati di queste operazioni con il termine che stava da solo al centro ($$-x^2$$):
$$
2x^2 + 5x + 3 - x^2 - 3x - 3x^2
$$

Infine, individuiamo i termini simili e li sommiamo algebricamente:
- Per l'esponente $$x^2$$: $$2x^2 - x^2 - 3x^2 = (2 - 1 - 3)x^2 = -2x^2$$
- Per $$x$$: $$5x - 3x = 2x$$
- Per il termine noto c'è solo: $$3$$

Il polinomio finale, in forma normale, è:
$$
-2x^2 + 2x + 3
$$
