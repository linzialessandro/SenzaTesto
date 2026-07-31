---
year: 4
macro_area: "Algebra"
topic: "Numeri Complessi"
difficulty: 2
ai_generated: true
tags:
  - "numeri complessi"
  - "radici n-esime"
  - "teorema di De Moivre"
  - "forma trigonometrica"
  - "forma algebrica"
---
# Problem Text
Dato il numero complesso $w = -8i$, determina tutte le soluzioni complesse dell'equazione

$$
z^3 = w
$$

esprimendole sia in forma trigonometrica sia in forma algebrica.

# Solution
Per risolvere l'equazione $z^3 = -8i$, determiniamo le radici terze di $w = -8i$ applicando la formula di De Moivre.

1. **Forma trigonometrica di $w$:**
   Il modulo di $w$ è $r = |-8i| = 8$ e l'argomento principale è $\theta = \frac{3\pi}{2}$. Pertanto:

$$
w = 8 \left( \cos\frac{3\pi}{2} + i\sin\frac{3\pi}{2} \right)
$$

2. **Formula di De Moivre per le radici terze ($n=3$):**
   Le tre soluzioni $z_k$ (per $k = 0, 1, 2$) sono date da:

$$
z_k = \sqrt[3]{8} \left[ \cos\left( \frac{\frac{3\pi}{2} + 2k\pi}{3} \right) + i\sin\left( \frac{\frac{3\pi}{2} + 2k\pi}{3} \right) \right] = 2 \left[ \cos\left( \frac{\pi}{2} + \frac{2k\pi}{3} \right) + i\sin\left( \frac{\pi}{2} + \frac{2k\pi}{3} \right) \right]
$$

3. **Calcolo della radice per $k = 0$:**

$$
z_0 = 2 \left( \cos\frac{\pi}{2} + i\sin\frac{\pi}{2} \right) = 2(0 + i) = 2i
$$

4. **Calcolo della radice per $k = 1$:**

$$
z_1 = 2 \left( \cos\frac{7\pi}{6} + i\sin\frac{7\pi}{6} \right) = 2 \left( -\frac{\sqrt{3}}{2} - \frac{1}{2}i \right) = -\sqrt{3} - i
$$

5. **Calcolo della radice per $k = 2$:**

$$
z_2 = 2 \left( \cos\frac{11\pi}{6} + i\sin\frac{11\pi}{6} \right) = 2 \left( \frac{\sqrt{3}}{2} - \frac{1}{2}i \right) = \sqrt{3} - i
$$

6. **Conclusione:**
   Le soluzioni dell'equazione sono:
   - Forma trigonometrica: $z_0 = 2\left(\cos\frac{\pi}{2} + i\sin\frac{\pi}{2}\right)$, $z_1 = 2\left(\cos\frac{7\pi}{6} + i\sin\frac{7\pi}{6}\right)$, $z_2 = 2\left(\cos\frac{11\pi}{6} + i\sin\frac{11\pi}{6}\right)$
   - Forma algebrica: $z_0 = 2i$, $z_1 = -\sqrt{3} - i$, $z_2 = \sqrt{3} - i$
