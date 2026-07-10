---
year: 4
macro_area: "Numeri Complessi"
topic: "Forma trigonometrica e formula di De Moivre"
difficulty: 2
tags:
  - "numeri complessi"
  - "forma trigonometrica"
  - "formula di De Moivre"
  - "potenza di un numero complesso"
ai_generated: true
---
# Problem Text
Calcolare la potenza $z^6$ del numero complesso $z = 1 + i$.

# Solution
Per calcolare la potenza $z^6$ in modo efficiente, convertiamo il numero complesso $z = 1 + i$ dalla forma algebrica alla forma trigonometrica e applichiamo la formula di De Moivre.

**1. Calcolo del modulo di $z$:**
Il modulo $r = |z|$ è dato da:

$$
r = \sqrt{a^2 + b^2} = \sqrt{1^2 + 1^2} = \sqrt{2}
$$

**2. Determinazione dell'argomento di $z$:**
Poiché la parte reale $a = 1 > 0$ e la parte immaginaria $b = 1 > 0$, il numero si trova nel primo quadrante del piano di Gauss. L'argomento principale $\theta$ soddisfa:

$$
\tan(\theta) = \frac{b}{a} = \frac{1}{1} = 1 \implies \theta = \frac{\pi}{4}
$$

**3. Scrittura in forma trigonometrica:**

$$
z = \sqrt{2} \left[ \cos\left(\frac{\pi}{4}\right) + i \sin\left(\frac{\pi}{4}\right) \right]
$$

**4. Applicazione della formula di De Moivre:**
Per elevare $z$ alla sesta potenza, eleviamo il modulo alla sesta e moltiplichiamo l'argomento per $6$:

$$
z^6 = (\sqrt{2})^6 \left[ \cos\left(6 \cdot \frac{\pi}{4}\right) + i \sin\left(6 \cdot \frac{\pi}{4}\right) \right]
$$

**5. Semplificazione della potenza e dell'argomento:**
- Per il modulo: $(\sqrt{2})^6 = (2^{1/2})^6 = 2^3 = 8$
- Per l'argomento: $6 \cdot \frac{\pi}{4} = \frac{3\pi}{2}$

Quindi otteniamo:

$$
z^6 = 8 \left[ \cos\left(\frac{3\pi}{2}\right) + i \sin\left(\frac{3\pi}{2}\right) \right]
$$

**6. Calcolo dei valori trigonometrici e forma algebrica finale:**
Sapendo che $\cos\left(\frac{3\pi}{2}\right) = 0$ e $\sin\left(\frac{3\pi}{2}\right) = -1$:

$$
z^6 = 8 [0 + i(-1)] = -8i
$$
