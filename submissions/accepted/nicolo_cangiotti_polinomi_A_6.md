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
(2a-1)\cdot (a+1)-(a-1)\cdot(2a-3)
$$

# Solution
Svolgiamo prima i prodotti tra polinomi, mantenendo per ora le parentesi attorno al secondo prodotto a causa del segno meno che lo precede.

Per il primo prodotto, moltiplichiamo ogni termine del primo polinomio per ogni termine del secondo:
$$(2a-1)(a+1) = 2a\cdot a + 2a\cdot 1 - 1\cdot a - 1\cdot 1 = 2a^2 + 2a - a - 1 = 2a^2 + a - 1$$

Per il secondo prodotto:
$$(a-1)(2a-3) = a\cdot 2a + a\cdot(-3) - 1\cdot 2a - 1\cdot(-3) = 2a^2 - 3a - 2a + 3 = 2a^2 - 5a + 3$$

Sostituiamo questi risultati nell'espressione iniziale:
$$
2a^2 + a - 1 - (2a^2 - 5a + 3)
$$

Togliamo le parentesi cambiando i segni ai termini interni:
$$
2a^2 + a - 1 - 2a^2 + 5a - 3
$$

Infine, sommiamo i termini simili:
- In $$a^2$$: $$2a^2 - 2a^2 = 0$$
- In $$a$$: $$a + 5a = 6a$$
- Termini noti: $$-1 - 3 = -4$$

Il risultato è:
$$
6a - 4
$$
