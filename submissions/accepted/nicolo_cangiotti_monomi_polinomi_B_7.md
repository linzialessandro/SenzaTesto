---
year: 1
macro_area: "Algebra"
topic: "Polinomi"
difficulty: 3
tags:
  - "espressioni"
  - "prodotti notevoli"
  - "somma e differenza"
  - "prodotto di polinomi"
---
# Problem Text
Svolgi, mostrando tutti i passaggi, la seguente espressione con i polinomi:
$$
(x+2)\cdot(x-2)-(x+3)\cdot(x-1)+x-2
$$

# Solution
Partiamo sviluppando il primo prodotto, che è un prodotto notevole (somma per differenza). Il risultato è il quadrato del primo termine meno il quadrato del secondo:
$$(x+2)(x-2) = x^2 - 2^2 = x^2 - 4$$

Sviluppiamo il secondo prodotto. Lasciamo il risultato all'interno delle parentesi tonde, poiché il prodotto è preceduto da un segno meno:
$$(x+3)(x-1) = x\cdot x + x\cdot(-1) + 3\cdot x + 3\cdot(-1) = x^2 - x + 3x - 3 = x^2 + 2x - 3$$

Riscriviamo l'espressione iniziale inserendo i risultati trovati:
$$
x^2 - 4 - (x^2 + 2x - 3) + x - 2
$$

Togliamo le parentesi tonde invertendo il segno a tutti i termini in esse contenuti:
$$
x^2 - 4 - x^2 - 2x + 3 + x - 2
$$

Procediamo con la somma dei monomi simili:
- In $$x^2$$: $$x^2 - x^2 = 0$$
- In $$x$$: $$-2x + x = -x$$
- Termini noti: $$-4 + 3 - 2 = -3$$

Il risultato, ridotto a forma normale, è:
$$
-x - 3
$$
