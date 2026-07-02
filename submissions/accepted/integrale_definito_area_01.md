---
year: 5
macro_area: Analisi
topic: integrali definiti
difficulty: 2
tags:
  - calcolo aree
  - parabola
---
# Problem Text
Calcola l'area della regione di piano compresa tra la parabola di equazione $y = -x^2 + 4x$ e l'asse $x$.

# Solution
Determiniamo innanzitutto i punti di intersezione della parabola con l'asse $x$ ponendo $y = 0$:
$$ -x^2 + 4x = 0 \implies x(4 - x) = 0 $$
Le intersezioni sono $x_1 = 0$ e $x_2 = 4$.

Poiché la parabola è rivolta verso il basso (coefficiente di $x^2$ negativo), nell'intervallo $[0, 4]$ il suo grafico giace al di sopra dell'asse $x$. 
Pertanto, l'area $A$ è data dal seguente integrale definito:
$$ A = \int_{0}^{4} (-x^2 + 4x) \, dx $$

Calcoliamo l'integrale definito:
$$ A = \left[ -\frac{x^3}{3} + 2x^2 \right]_0^4 $$

Valutiamo il risultato agli estremi di integrazione utilizzando il Teorema fondamentale del calcolo integrale:
$$ A = \left(-\frac{4^3}{3} + 2(4)^2\right) - \left(-\frac{0^3}{3} + 2(0)^2\right) $$
$$ A = -\frac{64}{3} + 32 = \frac{-64 + 96}{3} = \frac{32}{3} $$
