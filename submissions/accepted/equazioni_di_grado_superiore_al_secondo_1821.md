---
year: 3
macro_area: "Algebra"
topic: "Equazioni di grado superiore al secondo"
difficulty: 2
ai_generated: true
tags:
  - "equazioni biquadratiche"
  - "algebra"
  - "variabile ausiliaria"
  - "equazioni di grado superiore al secondo"
---
# Problem Text
Risolvi la seguente equazione biquadratica nell'insieme dei numeri reali $\mathbb{R}$:

$$
x^4 - 3x^2 - 4 = 0
$$

# Solution
**Passaggio 1:** Applica la sostituzione $t = x^2$, imponendo la condizione $t \ge 0$ poiché un quadrato nei numeri reali non può essere negativo.

**Passaggio 2:** Riscrivi l'equazione originaria in funzione della variabile ausiliaria $t$:

$$
t^2 - 3t - 4 = 0
$$

**Passaggio 3:** Risolvi l'equazione di secondo grado in $t$ mediante la formula risolutiva:

$$
t_{1,2} = \frac{3 \pm \sqrt{(-3)^2 - 4 \cdot 1 \cdot (-4)}}{2} = \frac{3 \pm \sqrt{25}}{2} = \frac{3 \pm 5}{2}
$$

Si ottengono così le due radici $t_1 = 4$ e $t_2 = -1$.

**Passaggio 4:** Confronta i valori ottenuti con la condizione $t \ge 0$:
- $t_1 = 4 \ge 0$, valore accettabile;
- $t_2 = -1 < 0$, valore non accettabile in $\mathbb{R}$.

**Passaggio 5:** Ripristina la variabile originale $x$ uguagliando $x^2$ al valore accettabile $t_1 = 4$:

$$
x^2 = 4 \implies x = \pm 2
$$

**Passaggio 6:** Concludi indicando l'insieme delle soluzioni reali dell'equazione:

$$
S = \{-2, 2\}
$$
