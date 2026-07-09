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
x\left(\frac{1}{2}x+x^2+x\right)-\frac{1}{2}x\left(x^2+2\right)
$$

# Solution
Prima di effettuare le moltiplicazioni, possiamo semplificare la prima parentesi, dato che contiene monomi simili da sommare ($$\frac{1}{2}x + x$$):
$$
\frac{1}{2}x + x = \left(\frac{1}{2} + 1\right)x = \frac{3}{2}x
$$
L'espressione diviene:
$$
x\left(\frac{3}{2}x + x^2\right) - \frac{1}{2}x(x^2 + 2)
$$

Ora svolgiamo i prodotti applicando la proprietà distributiva:
- $$x\left(\frac{3}{2}x + x^2\right) = \frac{3}{2}x^2 + x^3$$
- $$-\frac{1}{2}x(x^2 + 2) = -\frac{1}{2}x^3 - x$$

Riassembliamo l'intera espressione:
$$
\frac{3}{2}x^2 + x^3 - \frac{1}{2}x^3 - x
$$

Sommiamo i termini simili, partendo da quelli con il grado più alto:
- In $$x^3$$: $$x^3 - \frac{1}{2}x^3 = \frac{1}{2}x^3$$
- In $$x^2$$: $$\frac{3}{2}x^2$$ (resta invariato)
- In $$x$$: $$-x$$ (resta invariato)

Il polinomio scritto in forma normale è:
$$
\frac{1}{2}x^3 + \frac{3}{2}x^2 - x
$$
