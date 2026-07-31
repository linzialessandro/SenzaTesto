---
year: 4
macro_area: "Numeri Complessi"
topic: "Forma trigonometrica e formula di De Moivre"
difficulty: 2
ai_generated: true
tags:
  - "numeri complessi"
  - "forma trigonometrica"
  - "formula di De Moivre"
  - "potenze"
---
# Problem Text
Calcola la potenza $z^6$ del numero complesso:

$$
z = -1 + i\sqrt{3}
$$

esprimendo prima il numero in forma trigonometrica e applicando la formula di De Moivre. Esprimi il risultato finale in forma algebrica.

# Solution
Per calcolare la potenza $z^6$ mediante la formula di De Moivre, determiniamo prima il modulo e l'argomento del numero complesso $z = a + ib = -1 + i\sqrt{3}$.

1. **Calcolo del modulo $r$:**

$$
r = |z| = \sqrt{a^2 + b^2} = \sqrt{(-1)^2 + (\sqrt{3})^2} = \sqrt{1 + 3} = 2
$$

2. **Determinazione dell'argomento principale $\theta$:**

$$
\cos\theta = \frac{a}{r} = -\frac{1}{2}, \quad \sin\theta = \frac{b}{r} = \frac{\sqrt{3}}{2}
$$

Essendo $a < 0$ e $b > 0$, il numero $z$ appartiene al secondo quadrante nel piano di Argand-Gauss, da cui:

$$
\theta = \frac{2}{3}\pi
$$

3. **Forma trigonometrica ed esponenziale di $z$:**

$$
z = 2 \left( \cos\frac{2}{3}\pi + i \sin\frac{2}{3}\pi \right) = 2 e^{i \frac{2}{3}\pi}
$$

4. **Applicazione della formula di De Moivre per $n = 6$:**

$$
z^6 = r^6 \left[ \cos\left(6 \cdot \frac{2}{3}\pi\right) + i \sin\left(6 \cdot \frac{2}{3}\pi\right) \right]
$$

5. **Semplificazione dell'argomento:**

$$
6 \cdot \frac{2}{3}\pi = 4\pi
$$

Per la periodicità delle funzioni goniometriche ($\cos(4\pi) = 1$ e $\sin(4\pi) = 0$), l'espressione diventa:

$$
z^6 = 2^6 \left( \cos(4\pi) + i \sin(4\pi) \right)
$$

6. **Calcolo finale in forma algebrica:**

$$
z^6 = 64 \cdot (1 + 0i) = 64
$$
