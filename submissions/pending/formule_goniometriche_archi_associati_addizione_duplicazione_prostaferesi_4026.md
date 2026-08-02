---
year: 4
macro_area: "Goniometria"
topic: "Formule Goniometriche: archi associati, addizione, duplicazione, prostaferesi"
difficulty: 5
ai_generated: true
tags:
  - "goniometria"
  - "formule di duplicazione"
  - "formule di Werner"
  - "equazioni goniometriche"
---
# Problem Text
Determina tutte le soluzioni reali dell'equazione

$$
\cos^4 x - \sin^4 x = \cos\left(2x + \frac{\pi}{3}\right) \cos\left(2x - \frac{\pi}{3}\right).
$$

# Solution
**1. Primo membro** (differenza di quadrati e duplicazione):

$$
\cos^4 x - \sin^4 x = (\cos^2 x - \sin^2 x)(\cos^2 x + \sin^2 x) = \cos 2x.
$$

**2. Secondo membro** (formule di Werner):

$$
\cos\left(2x + \frac{\pi}{3}\right)\cos\left(2x - \frac{\pi}{3}\right)
= \frac{1}{2}\left[\cos(4x) + \cos\left(\frac{2\pi}{3}\right)\right]
= \frac{1}{2}\left(\cos 4x - \frac{1}{2}\right)
= \frac{1}{2}\cos 4x - \frac{1}{4}.
$$

**3. Equazione equivalente:**

$$
\cos 2x = \frac{1}{2}\cos 4x - \frac{1}{4}.
$$

Con $\cos 4x = 2\cos^2 2x - 1$:

$$
\cos 2x = \frac{1}{2}(2\cos^2 2x - 1) - \frac{1}{4} = \cos^2 2x - \frac{3}{4},
$$

cioè

$$
\cos^2 2x - \cos 2x - \frac{3}{4} = 0.
$$

**4. Sostituzione** $t = \cos 2x$:

$$
t^2 - t - \frac{3}{4} = 0 \quad \Rightarrow \quad t = \frac{1 \pm 2}{2}.
$$

Si ottiene $t_1 = \frac{3}{2}$ (impossibile perché $\cos 2x \in [-1,1]$) e $t_2 = -\frac{1}{2}$.

**5. Soluzioni di** $\cos 2x = -\frac{1}{2}$:

$$
2x = \pm \frac{2\pi}{3} + 2k\pi, \quad k \in \mathbb{Z},
$$

quindi

$$
x = \pm \frac{\pi}{3} + k\pi, \quad k \in \mathbb{Z}.
$$

Le due famiglie **non** coincidono: ad esempio $\frac{\pi}{3}$ e $-\frac{\pi}{3}$ non differiscono di un multiplo intero di $\pi$. Equivalentemente si può scrivere

$$
x = \frac{\pi}{3} + k\pi \quad \text{oppure} \quad x = \frac{2\pi}{3} + k\pi, \quad k \in \mathbb{Z}.
$$

**Risposta:** $x = \pm \frac{\pi}{3} + k\pi$, $k \in \mathbb{Z}$.
