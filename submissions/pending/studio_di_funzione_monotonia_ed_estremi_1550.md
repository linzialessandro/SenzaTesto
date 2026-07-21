---
year: 5
macro_area: "Studio di funzione e Ottimizzazione"
topic: "Studio di funzione, monotonia ed estremi"
difficulty: 3
ai_generated: true
tags:
  - "studio di funzione"
  - "derivate"
  - "monotonia"
  - "massimi e minimi"
  - "punti di flesso"
---
# Problem Text
Determinare il dominio, i punti stazionari, gli intervalli di monotonia, gli estremi relativi e assoluti e i punti di flesso della funzione $f(x) = (x^2 - 3)e^{-x}$, fornendo le informazioni necessarie al tracciamento del grafico qualitativo.

# Solution
**1. Dominio e limiti agli estremi**
Il dominio della funzione è $D = \mathbb{R}$. Calcoliamo i limiti agli estremi:

$$
\lim_{x \to -\infty} (x^2 - 3)e^{-x} = +\infty \cdot (+\infty) = +\infty
$$

$$
\lim_{x \to +\infty} (x^2 - 3)e^{-x} = \lim_{x \to +\infty} \frac{x^2 - 3}{e^x} = 0^+
$$

Si ha quindi un asintoto orizzontale destro di equazione $y = 0$.

**2. Derivata prima, monotonia e punti stazionari**
Calcoliamo la derivata prima:

$$
f'(x) = 2x e^{-x} - (x^2 - 3)e^{-x} = (-x^2 + 2x + 3)e^{-x}
$$

Poiché $e^{-x} > 0$ per ogni $x \in \mathbb{R}$, il segno di $f'(x)$ coincide con il segno di $-x^2 + 2x + 3$:

$$
-x^2 + 2x + 3 = 0 \iff x = -1 \quad \text{oppure} \quad x = 3
$$

- $f'(x) > 0$ per $x \in (-1, 3)$: la funzione è strettamente crescente in $[-1, 3]$.
- $f'(x) < 0$ per $x \in (-\infty, -1) \cup (3, +\infty)$: la funzione è strettamente decrescente in $(-\infty, -1]$ e in $[3, +\infty)$.

Dallo studio del segno di $f'(x)$ deduciamo che:
- $x = -1$ è punto di minimo relativo e assoluto, con valore $f(-1) = -2e$.
- $x = 3$ è punto di massimo relativo, con valore $f(3) = 6e^{-3} = \frac{6}{e^3}$.
- Non sussiste un massimo assoluto poiché $\lim_{x \to -\infty} f(x) = +\infty$.

**3. Derivata seconda, concavità e punti di flesso**
Calcoliamo la derivata seconda:

$$
f''(x) = (-2x + 2)e^{-x} - (-x^2 + 2x + 3)e^{-x} = (x^2 - 4x - 1)e^{-x}
$$

Studiando l'equazione $f''(x) = 0$:

$$
x^2 - 4x - 1 = 0 \iff x = 2 \pm \sqrt{5}
$$

- Per $x < 2 - \sqrt{5}$ e $x > 2 + \sqrt{5}$, $f''(x) > 0$ (funzione convessa $\cup$).
- Per $2 - \sqrt{5} < x < 2 + \sqrt{5}$, $f''(x) < 0$ (funzione concava $\cap$).

Pertanto, i punti $x_1 = 2 - \sqrt{5}$ e $x_2 = 2 + \sqrt{5}$ sono punti di flesso a tangente obliqua. Le informazioni raccolte permettono di tracciare il grafico qualitativo partendo da $+\infty$ per $x \to -\infty$, scendendo fino al minimo assoluto in $(-1, -2e)$, crescendo fino al massimo relativo in $(3, 6/e^3)$, per poi decrescere asintoticamente verso $y = 0^+$ per $x \to +\infty$.
