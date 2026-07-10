---
year: 5
macro_area: Analisi
topic: integrali definiti
difficulty: 4
tags:
  - lunghezza curva
ai_generated: true
---
# Problem Text
Calcola la lunghezza dell'arco di curva descritto dalla funzione $f(x) = \frac{2}{3}x \sqrt{x}$ nell'intervallo $[0, 3]$.

# Solution
La formula per calcolare la lunghezza $L$ di un arco di curva $y = f(x)$ tra $x = a$ e $x = b$ è data da:
$$ L = \int_{a}^{b} \sqrt{1 + [f'(x)]^2} \, dx $$

Riscriviamo $f(x)$ come potenza per facilitarne la derivazione: $f(x) = \frac{2}{3}x^{3/2}$.
Calcoliamo la derivata prima della funzione:
$$ f'(x) = \frac{2}{3} \cdot \frac{3}{2} x^{1/2} = \sqrt{x} $$

Calcoliamo il quadrato della derivata: $[f'(x)]^2 = (\sqrt{x})^2 = x$.

Sostituiamo nell'integrale della lunghezza:
$$ L = \int_{0}^{3} \sqrt{1 + x} \, dx $$

Per risolvere l'integrale, utilizziamo la sostituzione $u = 1+x$, con $du = dx$. I nuovi estremi di integrazione sono $u(0)=1$ e $u(3)=4$:
$$ L = \int_{1}^{4} u^{1/2} \, du = \left[ \frac{2}{3}u^{3/2} \right]_1^4 $$

Valutiamo il risultato:
$$ L = \frac{2}{3} \left(4^{3/2} - 1^{3/2}\right) = \frac{2}{3} \left(\sqrt{4^3} - 1\right) = \frac{2}{3}(8 - 1) = \frac{14}{3} $$
