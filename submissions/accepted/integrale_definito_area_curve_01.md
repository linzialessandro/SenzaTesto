---
year: 5
macro_area: Analisi
topic: integrali definiti
difficulty: 3
tags:
  - calcolo aree
  - due curve
---
# Problem Text
Trova l'area della regione di piano delimitata dalle funzioni $y = x^2$ e $y = \sqrt{x}$.

# Solution
Troviamo le intersezioni tra le due curve uguagliando le loro espressioni (nel dominio $x \ge 0$):
$$ x^2 = \sqrt{x} $$

Elevando al quadrato ambo i membri si ottiene:
$$ x^4 = x \implies x^4 - x = 0 \implies x(x^3 - 1) = 0 $$
Le soluzioni reali sono $x_1 = 0$ e $x_2 = 1$.

Nell'intervallo $[0, 1]$, si verifica facilmente (ad esempio testando il punto $x = 1/4$) che $\sqrt{x} \ge x^2$. L'area racchiusa $A$ è dunque l'integrale della differenza tra la funzione maggiore e quella minore:
$$ A = \int_{0}^{1} (\sqrt{x} - x^2) \, dx $$

Riscriviamo la radice come potenza frazionaria e integriamo:
$$ A = \int_{0}^{1} \left( x^{1/2} - x^2 \right) \, dx = \left[ \frac{2}{3}x^{3/2} - \frac{x^3}{3} \right]_0^1 $$

Valutando la primitiva agli estremi si ottiene:
$$ A = \left(\frac{2}{3}(1) - \frac{1^3}{3}\right) - (0) = \frac{2}{3} - \frac{1}{3} = \frac{1}{3} $$
