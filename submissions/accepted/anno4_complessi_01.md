---
year: 4
macro_area: Numeri Complessi
topic: Forma algebrica e potenze
difficulty: 4
tags:
  - complessi
  - de moivre
  - forma trigonometrica
ai_generated: true
---
# Problem Text

Dato il numero complesso $z = 1 - i\sqrt{3}$, determinare il valore di $z^6$. 
(Si consiglia di convertire prima $z$ in forma trigonometrica o esponenziale).

# Solution

**1. Calcolo del modulo di $z$:**
Il numero è in forma algebrica $z = a + ib$, con $a = 1$ e $b = -\sqrt{3}$.
Il modulo $
ho$ (o $|z|$) è dato da:
$$
ho = \sqrt{a^2 + b^2} = \sqrt{1^2 + (-\sqrt{3})^2} = \sqrt{1 + 3} = \sqrt{4} = 2
$$

**2. Calcolo dell'argomento di $z$:**
L'argomento $\theta$ è tale che $\cos\theta = \frac{a}{
ho}$ e $\sin\theta = \frac{b}{
ho}$:
$$
\cos\theta = \frac{1}{2}, \quad \sin\theta = -\frac{\sqrt{3}}{2}
$$
Il coseno è positivo e il seno è negativo, quindi l'angolo si trova nel quarto quadrante. L'angolo notevole associato è $\frac{\pi}{3}$, per cui nel quarto quadrante abbiamo:
$$
heta = 2\pi - \frac{\pi}{3} = \frac{5\pi}{3} \quad \text{oppure} \quad \theta = -\frac{\pi}{3}
$$
Utilizziamo $\theta = -\frac{\pi}{3}$ per comodità di calcolo.

**3. Forma trigonometrica ed esponenziale:**
Possiamo esprimere $z$ in forma esponenziale (Euleriana) come:
$$
z = 
ho \cdot e^{i\theta} = 2 \cdot e^{-i\frac{\pi}{3}}
$$

**4. Calcolo della potenza (Teorema di De Moivre):**
Ora possiamo calcolare $z^6$ usando le proprietà delle potenze (De Moivre):
$$
z^6 = \left( 2 \cdot e^{-i\frac{\pi}{3}} \right)^6 = 2^6 \cdot e^{i\left(- \frac{\pi}{3} \cdot 6 \right)} = 64 \cdot e^{-i2\pi}
$$
Sapendo che l'angolo $-2\pi$ equivale a un giro completo in senso orario, esso coincide con l'angolo $0$.
Pertanto, tornando in forma algebrica:
$$
e^{-i2\pi} = \cos(-2\pi) + i\sin(-2\pi) = 1 + i(0) = 1
$$
Quindi:
$$
z^6 = 64 \cdot 1 = 64
$$

**Soluzione:**
Il valore di $z^6$ è $64$.
