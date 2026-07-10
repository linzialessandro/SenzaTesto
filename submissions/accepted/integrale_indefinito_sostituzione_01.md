---
year: 5
macro_area: Analisi
topic: integrali indefiniti
difficulty: 2
tags:
  - per sostituzione
ai_generated: true
---
# Problem Text
Risolvi il seguente integrale indefinito:
$$ \int \frac{x}{\sqrt{x^2 + 1}} \, dx $$

# Solution
Utilizziamo il metodo di sostituzione. Poniamo $t = x^2 + 1$.

Calcoliamo il differenziale: 
$$ dt = 2x \, dx \implies x \, dx = \frac{dt}{2} $$

Sostituendo nell'integrale otteniamo:
$$ \int \frac{1}{\sqrt{t}} \cdot \frac{dt}{2} = \frac{1}{2} \int t^{-1/2} \, dt $$

Integrando la potenza:
$$ \frac{1}{2} \cdot \frac{t^{1/2}}{1/2} + C = \sqrt{t} + C $$

Sostituendo nuovamente $t = x^2 + 1$, otteniamo il risultato finale:
$$ \sqrt{x^2 + 1} + C $$
