---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali"
difficulty: 1
tags:
  - "integrale definito"
  - "polinomi"
  - "teorema fondamentale del calcolo integrale"
---
# Problem Text
Calcolare il seguente integrale definito:
$$ \int_{0}^{4} (2x-3)\cdot(x-1)\,\textrm{d}x $$

# Solution
L'integrale proposto è il calcolo dell'area con segno sottesa a una parabola. Svolgiamo prima di tutto il prodotto tra i binomi per espandere la funzione integranda in un polinomio, facilmente integrabile:
$$ (2x-3)(x-1) = 2x^2 - 2x - 3x + 3 = 2x^2 - 5x + 3 $$

L'integrale diventa quindi:
$$ \int_{0}^{4} (2x^2 - 5x + 3) \, dx $$

Calcoliamo l'integrale indefinito trovando una primitiva della funzione polinomiale, applicando la regola delle potenze ($$\int x^n dx = \frac{x^{n+1}}{n+1}$$):
$$ \int (2x^2 - 5x + 3) \, dx = 2\left(\frac{x^3}{3}\right) - 5\left(\frac{x^2}{2}\right) + 3x = \frac{2}{3}x^3 - \frac{5}{2}x^2 + 3x $$

Applicando ora il **Teorema fondamentale del calcolo integrale** (formula di Newton-Leibniz), valutiamo la primitiva tra gli estremi di integrazione (da 0 a 4):
$$ \left[ \frac{2}{3}x^3 - \frac{5}{2}x^2 + 3x \right]_0^4 $$

Sostituendo l'estremo superiore (4):
$$ \frac{2}{3}(4)^3 - \frac{5}{2}(4)^2 + 3(4) = \frac{2}{3}(64) - \frac{5}{2}(16) + 12 = \frac{128}{3} - 40 + 12 = \frac{128}{3} - 28 $$

Sostituendo l'estremo inferiore (0), il polinomio si annulla completamente e vale 0.

Il risultato finale è quindi:
$$ \frac{128}{3} - 28 = \frac{128 - 84}{3} = \frac{44}{3} $$
