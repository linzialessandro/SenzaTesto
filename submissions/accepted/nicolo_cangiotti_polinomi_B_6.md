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
(a-1)\cdot (2a+1)-(2a-1)\cdot(a-3)
$$

# Solution
Svolgiamo prima i prodotti tra polinomi. A causa del segno meno prima del secondo prodotto, ne conserveremo temporaneamente il risultato tra parentesi tonde.

Per il primo prodotto:
$$(a-1)(2a+1) = a\cdot 2a + a\cdot 1 - 1\cdot 2a - 1\cdot 1 = 2a^2 + a - 2a - 1 = 2a^2 - a - 1$$

Per il secondo prodotto:
$$(2a-1)(a-3) = 2a\cdot a + 2a\cdot(-3) - 1\cdot a - 1\cdot(-3) = 2a^2 - 6a - a + 3 = 2a^2 - 7a + 3$$

Sostituiamo questi due risultati parziali nell'espressione:
$$
2a^2 - a - 1 - (2a^2 - 7a + 3)
$$

Adesso togliamo le parentesi, ricordando di invertire i segni per via del meno:
$$
2a^2 - a - 1 - 2a^2 + 7a - 3
$$

Infine, sommiamo i termini simili:
- In $$a^2$$: $$2a^2 - 2a^2 = 0$$
- In $$a$$: $$-a + 7a = 6a$$
- Termini noti: $$-1 - 3 = -4$$

Il risultato è:
$$
6a - 4
$$
