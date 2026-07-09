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
-x\left(x+x^2+x\right)-\frac{1}{2}x\left(x^2+2\right)+x^2\left(-\frac{1}{2}x-1\right)
$$

# Solution
Prima di moltiplicare, notiamo che nella prima parentesi ci sono termini simili ($$x$$ e $$x$$), quindi li sommiamo per semplificare i calcoli:
$$
-x(x^2 + 2x) - \frac{1}{2}x(x^2 + 2) + x^2\left(-\frac{1}{2}x - 1\right)
$$

Adesso svolgiamo i prodotti applicando la proprietà distributiva in ciascun blocco:
- $$-x(x^2 + 2x) = -x^3 - 2x^2$$
- $$-\frac{1}{2}x(x^2 + 2) = -\frac{1}{2}x^3 - x$$
- $$x^2\left(-\frac{1}{2}x - 1\right) = -\frac{1}{2}x^3 - x^2$$

Mettiamo tutto insieme nell'espressione:
$$
-x^3 - 2x^2 - \frac{1}{2}x^3 - x - \frac{1}{2}x^3 - x^2
$$

Raccogliamo e sommiamo i monomi simili:
- In $$x^3$$: $$-x^3 - \frac{1}{2}x^3 - \frac{1}{2}x^3 = -x^3 - \frac{2}{2}x^3 = -x^3 - x^3 = -2x^3$$
- In $$x^2$$: $$-2x^2 - x^2 = -3x^2$$
- In $$x$$: $$-x$$

Il risultato finale ordinato in modo decrescente rispetto al grado è:
$$
-2x^3 - 3x^2 - x
$$
