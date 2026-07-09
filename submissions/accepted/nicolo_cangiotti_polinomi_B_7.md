---
year: 1
macro_area: "Algebra"
topic: "Polinomi"
difficulty: 3
tags:
  - "espressioni"
  - "prodotto"
  - "frazioni"
  - "somma algebrica"
---
# Problem Text
Svolgi, mostrando tutti i passaggi, la seguente espressione con i polinomi:
$$
-\frac{1}{2}x\left(x^2+2\right)-x\left(x+x^2+x\right)+x^2\left(-\frac{1}{2}x-1\right)
$$

# Solution
Prima di moltiplicare, semplifichiamo la seconda parentesi sommando i termini simili ($$x + x = 2x$$):
$$
-\frac{1}{2}x(x^2 + 2) - x(x^2 + 2x) + x^2\left(-\frac{1}{2}x - 1\right)
$$

Ora distribuiamo i monomi esterni dentro ciascuna parentesi:
- $$-\frac{1}{2}x(x^2 + 2) = -\frac{1}{2}x^3 - x$$
- $$-x(x^2 + 2x) = -x^3 - 2x^2$$
- $$x^2\left(-\frac{1}{2}x - 1\right) = -\frac{1}{2}x^3 - x^2$$

Mettiamo insieme tutti i monomi ottenuti:
$$
-\frac{1}{2}x^3 - x - x^3 - 2x^2 - \frac{1}{2}x^3 - x^2
$$

Raggruppiamo e sommiamo i monomi simili (partendo dal grado massimo):
- In $$x^3$$: $$-\frac{1}{2}x^3 - x^3 - \frac{1}{2}x^3 = \left(-\frac{1}{2} - 1 - \frac{1}{2}\right)x^3 = -2x^3$$
- In $$x^2$$: $$-2x^2 - x^2 = -3x^2$$
- In $$x$$: $$-x$$

Il polinomio risultante è:
$$
-2x^3 - 3x^2 - x
$$
