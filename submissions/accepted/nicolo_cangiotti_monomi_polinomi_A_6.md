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
Sviluppiamo i prodotti presenti nell'espressione. 
Nel primo blocco moltiplichiamo termine a termine il primo binomio con il secondo:
$$(x+1)(2x+3) = x\cdot 2x + x\cdot 3 + 1\cdot 2x + 1\cdot 3 = 2x^2 + 3x + 2x + 3 = 2x^2 + 5x + 3$$

Nel secondo blocco applichiamo la distributiva:
$$3x\cdot(-1-x) = -3x - 3x^2$$

Mettiamo insieme i pezzi trovati insieme al monomio $$-x^2$$ che fa parte dell'espressione iniziale:
$$
2x^2 + 5x + 3 - x^2 - 3x - 3x^2
$$

Infine, raggruppiamo e calcoliamo i coefficienti dei termini simili:
- In $$x^2$$: $$2x^2 - x^2 - 3x^2 = (2 - 1 - 3)x^2 = -2x^2$$
- In $$x$$: $$5x - 3x = 2x$$
- Il termine noto rimane uguale: $$3$$

Il risultato conclusivo è:
$$
-2x^2 + 2x + 3
$$
