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
x^2\left(-\frac{1}{2}x-1\right)-x\left(x+x^2+x\right)-\frac{1}{2}x\left(x^2+2\right)
$$

# Solution
Prima di svolgere i prodotti è consigliabile semplificare le parentesi dove sono presenti termini simili. Notiamo che nella seconda parentesi possiamo sommare $$x + x = 2x$$:
$$
x^2\left(-\frac{1}{2}x - 1\right) - x(x^2 + 2x) - \frac{1}{2}x(x^2 + 2)
$$

Procediamo ora applicando la proprietà distributiva in ciascuno dei tre blocchi:
- $$x^2\left(-\frac{1}{2}x - 1\right) = -\frac{1}{2}x^3 - x^2$$
- $$-x(x^2 + 2x) = -x^3 - 2x^2$$
- $$-\frac{1}{2}x(x^2 + 2) = -\frac{1}{2}x^3 - x$$

Componiamo l'espressione con tutti questi nuovi monomi:
$$
-\frac{1}{2}x^3 - x^2 - x^3 - 2x^2 - \frac{1}{2}x^3 - x
$$

Identifichiamo i monomi simili e sommiamo i loro coefficienti numerici:
- Per i termini in $$x^3$$: $$-\frac{1}{2}x^3 - x^3 - \frac{1}{2}x^3 = \left(-\frac{1}{2} - 1 - \frac{1}{2}\right)x^3 = -2x^3$$
- Per i termini in $$x^2$$: $$-x^2 - 2x^2 = -3x^2$$
- Il termine in $$x$$ rimane invariato: $$-x$$

Il polinomio risultante, scritto in forma normale, è:
$$
-2x^3 - 3x^2 - x
$$
