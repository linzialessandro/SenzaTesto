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
(2x+1)\cdot(x+3)-x^2+3x\cdot(-1+x)
$$

# Solution
Iniziamo sviluppando i prodotti. 
Il primo prodotto è tra due binomi:
$$(2x+1)(x+3) = 2x\cdot x + 2x\cdot 3 + 1\cdot x + 1\cdot 3 = 2x^2 + 6x + x + 3 = 2x^2 + 7x + 3$$

Il secondo prodotto richiede l'applicazione della proprietà distributiva (il termine $$-x^2$$ in mezzo lo ricopieremo semplicemente):
$$3x(-1+x) = -3x + 3x^2$$

Assembliamo tutti i risultati parziali nell'espressione iniziale:
$$
2x^2 + 7x + 3 - x^2 - 3x + 3x^2
$$

Raggruppiamo i termini simili procedendo dalle potenze maggiori:
- In $$x^2$$: $$2x^2 - x^2 + 3x^2 = (2 - 1 + 3)x^2 = 4x^2$$
- In $$x$$: $$7x - 3x = 4x$$
- Il termine noto è solo $$3$$

Il polinomio, scritto in forma normale, è:
$$
4x^2 + 4x + 3
$$
