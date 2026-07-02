---
year: 5
macro_area: Analisi Matematica (Limiti)
topic: Calcolo dei limiti
difficulty: 2
tags:
  - forma indeterminata
  - scomposizione
---
# Problem Text
Calcola il seguente limite:
$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$

# Solution
**1. Sostituzione diretta:**
Sostituendo $x = 2$ nell'espressione otteniamo:
$\frac{2^2 - 4}{2 - 2} = \frac{4 - 4}{2 - 2} = \frac{0}{0}$
Siamo di fronte ad una forma indeterminata del tipo $\left[\frac{0}{0}\right]$.

**2. Scomposizione e semplificazione:**
Scomponiamo il numeratore, riconoscendolo come differenza di quadrati:
$x^2 - 4 = (x - 2)(x + 2)$

Sostituiamo il numeratore scomposto nel limite:
$\lim_{x \to 2} \frac{(x - 2)(x + 2)}{x - 2}$

Semplifichiamo il termine comune $(x - 2)$ al numeratore e denominatore (essendo nel limite $x \neq 2$):
$\lim_{x \to 2} (x + 2)$

**3. Calcolo finale:**
Calcoliamo il limite per sostituzione diretta:
$\lim_{x \to 2} (x + 2) = 2 + 2 = 4$
