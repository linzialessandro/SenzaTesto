---
year: 4
macro_area: "Goniometria"
topic: "Formule Goniometriche: archi associati, addizione, duplicazione, prostaferesi"
difficulty: 5
ai_generated: true
tags:
  - "goniometria"
  - "archi associati"
  - "formule di addizione"
  - "formule di duplicazione"
  - "formule di prostaferesi"
  - "Werner"
  - "identit\u00e0"
---
# Problem Text
Determina tutte le soluzioni reali dell'equazione

$$
\cos^4 x - \sin^4 x = \cos\left(2x + \frac{\pi}{3}\right) \cos\left(2x - \frac{\pi}{3}\right)
$$

# Solution
Si procede semplificando entrambi i membri.

1. **Primo membro** (con formule di duplicazione):
   $$\cos^4 x - \sin^4 x = (\cos^2 x - \sin^2 x)(\cos^2 x + \sin^2 x) = \cos 2x \cdot 1 = \cos 2x.$$

2. **Secondo membro** (con formule di Werner):
   $$\cos\left(2x + \frac{\pi}{3}\right) \cos\left(2x - \frac{\pi}{3}\right) = \frac{1}{2}\left[ \cos\left( (2x+\frac{\pi}{3}) + (2x-\frac{\pi}{3}) \right) + \cos\left( (2x+\frac{\pi}{3}) - (2x-\frac{\pi}{3}) \right) \right]$$
   $$= \frac{1}{2}\left[ \cos(4x) + \cos\left(\frac{2\pi}{3}\right) \right] = \frac{1}{2}\left( \cos 4x - \frac{1}{2} \right) = \frac{1}{2} \cos 4x - \frac{1}{4}.$$

3. **Equazione equivalente:**
   $$\cos 2x = \frac{1}{2} \cos 4x - \frac{1}{4}.$$

4. **Trasformazione con duplicazione:**
   Poiché $\cos 4x = 2\cos^2 2x - 1$, sostituiamo:
   $$\cos 2x = \frac{1}{2}(2\cos^2 2x - 1) - \frac{1}{4} = \cos^2 2x - \frac{1}{2} - \frac{1}{4} = \cos^2 2x - \frac{3}{4}.$$
   Quindi:
   $$\cos 2x = \cos^2 2x - \frac{3}{4} \quad \Rightarrow \quad \cos^2 2x - \cos 2x - \frac{3}{4} = 0.$$

5. **Risoluzione dell'equazione algebrica:**
   Posto $t = \cos 2x$, si ha $t^2 - t - \frac{3}{4} = 0$.
   $$t = \frac{1 \pm \sqrt{1+3}}{2} = \frac{1 \pm 2}{2} \quad \Rightarrow \quad t_1 = \frac{3}{2}, \quad t_2 = -\frac{1}{2}.$$
   La soluzione $t = \frac{3}{2}$ è impossibile perché $\cos \theta \in [-1,1]$.

6. **Soluzione finale:**
   $$\cos 2x = -\frac{1}{2} \quad \Rightarrow \quad 2x = \pm \frac{2\pi}{3} + 2k\pi, \ k \in \mathbb{Z}$$
   

$$
x = \pm \frac{\pi}{3} + k\pi, \quad k \in \mathbb{Z}.
$$

Quindi le soluzioni sono $x = \frac{\pi}{3} + k\pi$ o $x = -\frac{\pi}{3} + k\pi$, ovvero $x = \frac{\pi}{3} + k\pi$ (dato che il segno meno è coperto da $k$ intero).
