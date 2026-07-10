---
year: 5
macro_area: "Numeri Complessi"
topic: "Radici n-esime e formula di De Moivre"
difficulty: 2
tags:
  - "numeri complessi"
  - "radici terze"
  - "formula di De Moivre"
  - "forma algebrica"
ai_generated: true
---
# Problem Text
Determinare le radici terze del numero complesso $z = -8i$, esprimendo il risultato in forma algebrica.

# Solution
Per determinare le radici terze di $z = -8i$, seguiamo questi tre passaggi:

**1. Scrivere il numero in forma trigonometrica**

Il modulo di $z$ è:

$$
r = |-8i| = 8
$$

L'argomento principale è $\theta = \frac{3}{2}\pi$ (poiché il numero si trova sulla parte negativa dell'asse delle ordinate). Dunque:

$$
z = 8 \left( \cos\left(\frac{3}{2}\pi\right) + i \sin\left(\frac{3}{2}\pi\right) \right)
$$

**2. Applicare la formula di De Moivre per le radici n-esime**

La formula per le radici terze ($n=3$) è:

$$
w_k = \sqrt[3]{8} \left( \cos\left(\frac{\frac{3}{2}\pi + 2k\pi}{3}\right) + i \sin\left(\frac{\frac{3}{2}\pi + 2k\pi}{3}\right) \right)
$$

con $k = 0, 1, 2$. Semplificando, il modulo è $\sqrt[3]{8} = 2$ e l'argomento diventa:

$$
\theta_k = \frac{\pi}{2} + \frac{2}{3}k\pi
$$

**3. Calcolare le tre radici**

- Per $k = 0$:

$$
\theta_0 = \frac{\pi}{2} \implies w_0 = 2 \left( \cos\left(\frac{\pi}{2}\right) + i \sin\left(\frac{\pi}{2}\right) \right) = 2(0 + i) = 2i
$$

- Per $k = 1$:

$$
\theta_1 = \frac{\pi}{2} + \frac{2}{3}\pi = \frac{7}{6}\pi \implies w_1 = 2 \left( \cos\left(\frac{7}{6}\pi\right) + i \sin\left(\frac{7}{6}\pi\right) \right) = 2 \left( -\frac{\sqrt{3}}{2} - \frac{1}{2}i \right) = -\sqrt{3} - i
$$

- Per $k = 2$:

$$
\theta_2 = \frac{\pi}{2} + \frac{4}{3}\pi = \frac{11}{6}\pi \implies w_2 = 2 \left( \cos\left(\frac{11}{6}\pi\right) + i \sin\left(\frac{11}{6}\pi\right) \right) = 2 \left( \frac{\sqrt{3}}{2} - \frac{1}{2}i \right) = \sqrt{3} - i
$$

Le radici terze cercate sono $w_0 = 2i$, $w_1 = -\sqrt{3} - i$ e $w_2 = \sqrt{3} - i$.
