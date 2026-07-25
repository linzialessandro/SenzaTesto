---
year: 5
macro_area: "Analisi Matematica"
topic: "Calcolo dei Limiti e Limiti Notevoli"
difficulty: 2
ai_generated: true
tags:
  - "limiti"
  - "forme indeterminate"
  - "limiti notevoli"
  - "analisi matematica"
---
# Problem Text
Calcolare il seguente limite, che si presenta nella forma indeterminata $\left[\frac{0}{0}\right]$, mediante l'uso dei limiti notevoli:

$$
\lim_{x \to 0} \frac{1 - \cos(2x)}{x \cdot \ln(1 + 3x)}
$$

# Solution
1. **Verifica della forma indeterminata:**
Poiché $\lim_{x \to 0} (1 - \cos(2x)) = 0$ e $\lim_{x \to 0} x \ln(1 + 3x) = 0$, il limite presenta la forma indeterminata $\left[\frac{0}{0}\right]$.

2. **Richiamo dei limiti notevoli:**
Per $t \to 0$, ricordiamo i limiti notevoli fondamentali:

$$
\lim_{t \to 0} \frac{1 - \cos t}{t^2} = \frac{1}{2} \quad \text{e} \quad \lim_{t \to 0} \frac{\ln(1 + t)}{t} = 1
$$

3. **Riscrittura dell'espressione:**
Moltiplichiamo e dividiamo il numeratore per $(2x)^2 = 4x^2$ e il denominatore per $3x$:

$$
\frac{1 - \cos(2x)}{x \ln(1 + 3x)} = \frac{1 - \cos(2x)}{(2x)^2} \cdot \frac{4x^2}{x \cdot 3x \cdot \frac{\ln(1 + 3x)}{3x}}
$$

4. **Semplificazione algebrica:**
Poiché $x \neq 0$, semplifichiamo il fattore $x^2$ presente a numeratore e a denominatore:

$$
\frac{1 - \cos(2x)}{(2x)^2} \cdot \frac{4}{3} \cdot \frac{1}{\frac{\ln(1 + 3x)}{3x}}
$$

5. **Calcolo del limite:**
Applicando il teorema del limite del prodotto e del quoziente per $x \to 0$ (con $2x \to 0$ e $3x \to 0$):

$$
\lim_{x \to 0} \frac{1 - \cos(2x)}{x \ln(1 + 3x)} = \frac{1}{2} \cdot \frac{4}{3} \cdot \frac{1}{1} = \frac{2}{3}
$$
