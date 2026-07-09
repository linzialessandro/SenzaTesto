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
x\left(-2x-x^2\right)-\frac{1}{2}x\left(x^2+2\right)+x^2\left(-\frac{1}{2}x-1\right)
$$

# Solution
Non ci sono termini simili all'interno delle parentesi, perciò possiamo procedere direttamente calcolando i tre prodotti applicando la proprietà distributiva:
- $$x(-2x - x^2) = -2x^2 - x^3$$
- $$-\frac{1}{2}x(x^2 + 2) = -\frac{1}{2}x^3 - x$$
- $$x^2\left(-\frac{1}{2}x - 1\right) = -\frac{1}{2}x^3 - x^2$$

Riuniamo tutti i monomi calcolati per scrivere l'espressione per esteso:
$$
-2x^2 - x^3 - \frac{1}{2}x^3 - x - \frac{1}{2}x^3 - x^2
$$

Raggruppiamo e sommiamo i termini simili. Partiamo da quelli di grado maggiore:
- In $$x^3$$: $$-x^3 - \frac{1}{2}x^3 - \frac{1}{2}x^3 = \left(-1 - \frac{1}{2} - \frac{1}{2}\right)x^3 = \left(-1 - 1\right)x^3 = -2x^3$$
- In $$x^2$$: $$-2x^2 - x^2 = -3x^2$$
- Il termine in $$x$$ è uno solo: $$-x$$

Il polinomio ridotto a forma normale è:
$$
-2x^3 - 3x^2 - x
$$
