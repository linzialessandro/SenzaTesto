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
(x+3)\cdot(x-3)-(x+2)\cdot(x-1)+x-2
$$

# Solution
Partiamo calcolando i prodotti. Il primo blocco è un prodotto notevole (somma per differenza), il cui risultato è il quadrato del primo termine meno il quadrato del secondo:
$$(x+3)(x-3) = x^2 - 3^2 = x^2 - 9$$

Il secondo blocco è un prodotto tra due binomi. Lo calcoliamo e conserviamo provvisoriamente il risultato tra parentesi tonde a causa del segno negativo che lo precede:
$$(x+2)(x-1) = x\cdot x + x\cdot(-1) + 2\cdot x + 2\cdot(-1) = x^2 - x + 2x - 2 = x^2 + x - 2$$

Riscriviamo l'espressione totale sostituendo i risultati parziali:
$$
x^2 - 9 - (x^2 + x - 2) + x - 2
$$

Rimuoviamo le parentesi tonde invertendo il segno di ciascun termine al loro interno:
$$
x^2 - 9 - x^2 - x + 2 + x - 2
$$

Procediamo sommando i termini simili:
- In $$x^2$$: $$x^2 - x^2 = 0$$
- In $$x$$: $$-x + x = 0$$
- Termini noti: $$-9 + 2 - 2 = -9$$

Si elidono quasi tutti i termini, e il risultato finale è un numero intero (cioè un monomio di grado zero):
$$
-9
$$
