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
(3a-2)\cdot (a+1)-(a-1)\cdot(a+3)
$$

# Solution
Calcoliamo in via prioritaria i prodotti tra i binomi. Lasciamo le parentesi tonde attorno al risultato del secondo prodotto, per gestire poi il segno meno che lo precede.

Sviluppiamo il primo prodotto:
$$(3a-2)(a+1) = 3a\cdot a + 3a\cdot 1 - 2\cdot a - 2\cdot 1 = 3a^2 + 3a - 2a - 2 = 3a^2 + a - 2$$

Sviluppiamo il secondo prodotto:
$$(a-1)(a+3) = a\cdot a + a\cdot 3 - 1\cdot a - 1\cdot 3 = a^2 + 3a - a - 3 = a^2 + 2a - 3$$

Riscriviamo l'espressione inserendo questi risultati:
$$
3a^2 + a - 2 - (a^2 + 2a - 3)
$$

Togliamo le parentesi invertendo i segni del secondo blocco di termini:
$$
3a^2 + a - 2 - a^2 - 2a + 3
$$

Eseguiamo infine le somme algebriche tra monomi simili:
- In $$a^2$$: $$3a^2 - a^2 = 2a^2$$
- In $$a$$: $$a - 2a = -a$$
- Termini noti: $$-2 + 3 = 1$$

Il risultato finale è:
$$
2a^2 - a + 1
$$
