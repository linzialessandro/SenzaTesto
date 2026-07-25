---
year: 5
macro_area: "Studio di funzione e Ottimizzazione"
topic: "Studio di funzione e Ottimizzazione"
difficulty: 2
ai_generated: true
tags:
  - "Studio di funzione"
  - "Monotonia"
  - "Massimi e minimi"
  - "Concavit\u00e0 e flessi"
---
# Problem Text
Determinare gli intervalli di monotonia, i punti di estremo relativo ed assoluto e i punti di flesso della funzione $f: \mathbb{R} \to \mathbb{R}$ definita da $f(x) = \frac{x}{x^2 + 1}$.

# Solution
1. **Dominio e continuità:** La funzione è definita e continua su tutto $\mathbb{R}$, poiché il denominatore soddisfa $x^2 + 1 > 0$ per ogni $x \in \mathbb{R}$.

2. **Derivata prima:** Applicando la regola di derivazione del quoziente:

$$
f'(x) = \frac{1 \cdot (x^2+1) - x \cdot 2x}{(x^2+1)^2} = \frac{1 - x^2}{(x^2+1)^2}
$$

3. **Studio della monotonia:** Poiché $(x^2+1)^2 > 0$ per ogni $x \in \mathbb{R}$, il segno di $f'(x)$ coincide con il segno di $1 - x^2$:
- $f'(x) > 0 \iff -1 < x < 1 \implies f(x)$ è strettamente crescente in $[-1, 1]$.
- $f'(x) < 0 \iff x < -1 \lor x > 1 \implies f(x)$ è strettamente decrescente in $(-\infty, -1]$ e in $[1, +\infty)$.

4. **Estremi relativi e assoluti:**
I punti stazionari sono $x = -1$ e $x = 1$.
- Per il criterio del segno della derivata prima, $x = -1$ è punto di minimo relativo con $f(-1) = -\frac{1}{2}$.
- Il punto $x = 1$ è punto di massimo relativo con $f(1) = \frac{1}{2}$.
Poiché $\lim_{x \to \pm \infty} f(x) = 0$, $x = -1$ e $x = 1$ sono rispettivamente punti di minimo e massimo assoluto per $f$ su $\mathbb{R}$.

5. **Derivata seconda:**

$$
f''(x) = \frac{-2x(x^2+1)^2 - (1-x^2) \cdot 2(x^2+1) \cdot 2x}{(x^2+1)^4} = \frac{2x(x^2 - 3)}{(x^2+1)^3}
$$

6. **Concavità e punti di flesso:**
Il segno di $f''(x)$ coincide con il segno del numeratore $2x(x^2-3)$:
- $f''(x) > 0 \iff x \in (-\sqrt{3}, 0) \cup (\sqrt{3}, +\infty)$ ($f$ convessa).
- $f''(x) < 0 \iff x \in (-\infty, -\sqrt{3}) \cup (0, \sqrt{3})$ ($f$ concava).

I punti di flesso a tangente obliqua si ottengono per $f''(x) = 0$:

$$
F_1\left(-\sqrt{3}, -\frac{\sqrt{3}}{4}\right), \quad F_2(0, 0), \quad F_3\left(\sqrt{3}, \frac{\sqrt{3}}{4}\right)
$$
