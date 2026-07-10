---
year: 5
macro_area: Analisi Matematica
topic: Studio di funzione
difficulty: 4
tags:
  - derivata prima
  - asintoti
  - studio di funzione
ai_generated: true
---
# Problem Text
Data la funzione:
$$ f(x) = \frac{x^2 - 4}{x - 1} $$
1. Determina il dominio di $f(x)$ e calcola i limiti agli estremi del dominio (trovando eventuali asintoti verticali e obliqui).
2. Calcola la derivata prima $f'(x)$ e individua gli eventuali punti di massimo o minimo relativo.

# Solution
**1. Dominio e asintoti:**
La funzione è una razionale fratta, quindi il denominatore deve essere diverso da zero:
$x - 1 \neq 0 \implies x \neq 1$
Il dominio è $D = (-\infty, 1) \cup (1, +\infty)$.

Limiti agli estremi del dominio:
- $\lim_{x \to 1^-} \frac{x^2 - 4}{x - 1} = \frac{-3}{0^-} = +\infty$
- $\lim_{x \to 1^+} \frac{x^2 - 4}{x - 1} = \frac{-3}{0^+} = -\infty$
La retta $x = 1$ è un **asintoto verticale**.

All'infinito:
$\lim_{x \to \pm\infty} \frac{x^2 - 4}{x - 1} = \pm\infty$ (non ci sono asintoti orizzontali).
Verifichiamo la presenza di asintoti obliqui della forma $y = mx + q$:
$m = \lim_{x \to \pm\infty} \frac{f(x)}{x} = \lim_{x \to \pm\infty} \frac{x^2 - 4}{x(x - 1)} = \lim_{x \to \pm\infty} \frac{x^2}{x^2} = 1$
$q = \lim_{x \to \pm\infty} (f(x) - mx) = \lim_{x \to \pm\infty} \left( \frac{x^2 - 4}{x - 1} - x \right) = \lim_{x \to \pm\infty} \frac{x^2 - 4 - x^2 + x}{x - 1} = \lim_{x \to \pm\infty} \frac{x - 4}{x - 1} = 1$
La retta $y = x + 1$ è un **asintoto obliquo**.

**2. Derivata prima e punti stazionari:**
Calcoliamo la derivata prima usando la regola del quoziente:
$$ f'(x) = \frac{2x(x - 1) - (x^2 - 4)(1)}{(x - 1)^2} $$
$$ f'(x) = \frac{2x^2 - 2x - x^2 + 4}{(x - 1)^2} $$
$$ f'(x) = \frac{x^2 - 2x + 4}{(x - 1)^2} $$

Poniamo $f'(x) \geq 0$ per studiare il segno della derivata:
Essendo il denominatore sempre positivo nel dominio, il segno dipende solo dal numeratore:
$x^2 - 2x + 4 \geq 0$
Calcoliamo il $\Delta$ del numeratore:
$\Delta = 4 - 16 = -12 < 0$
Essendo $\Delta < 0$ e il coefficiente di $x^2$ positivo, il numeratore è **sempre positivo**.
Pertanto $f'(x) > 0$ in tutto il dominio, e la funzione è **strettamente crescente** in $(-\infty, 1)$ e in $(1, +\infty)$.
Non ci sono punti stazionari (né massimi né minimi relativi).
