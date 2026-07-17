---
year: 4
macro_area: "Goniometria"
topic: "Equazioni e disequazioni goniometriche"
difficulty: 3
ai_generated: true
tags:
  - "disequazioni goniometriche"
  - "disequazioni fratte"
  - "angolo aggiunto"
  - "formule di duplicazione"
---
# Problem Text
Risolvi la seguente disequazione goniometrica fratta nell'intervallo $[0, 2\pi]$:

$$\frac{\sqrt{3}\sin x - \cos x}{2\cos^2 x - 1} \ge 0$$

# Solution
Determiniamo il segno del numeratore ($N \ge 0$) e del denominatore ($D > 0$) nell'intervallo $[0, 2\pi]$:

**1. Studio del Numeratore ($N \ge 0$):**
$$\sqrt{3}\sin x - \cos x \ge 0$$
Dividiamo ambo i membri per $2$ per applicare il metodo dell'angolo aggiunto (formula di sottrazione del seno):
$$\frac{\sqrt{3}}{2}\sin x - \frac{1}{2}\cos x \ge 0 \implies \sin\left(x - \frac{\pi}{6}\right) \ge 0$$
Ponendo $y = x - \frac{\pi}{6}$ nell'intervallo compreso, si ha:
$$0 \le x - \frac{\pi}{6} \le \pi \implies \frac{\pi}{6} \le x \le \frac{7\pi}{6}$$

**2. Studio del Denominatore ($D > 0$):**
$$2\cos^2 x - 1 > 0$$
Utilizzando la formula di duplicazione del coseno ($\cos(2x) = 2\cos^2 x - 1$), la disequazione diventa:
$$\cos(2x) > 0$$
La soluzione generale di $\cos(2x) > 0$ è:
$$-\frac{\pi}{2} + 2k\pi < 2x < \frac{\pi}{2} + 2k\pi \implies -\frac{\pi}{4} + k\pi < x < \frac{\pi}{4} + k\pi$$
Selezionando i valori di $x$ appartenenti a $[0, 2\pi]$ per $k \in \{0, 1, 2\}$, si ottiene:
$$x \in \left[0, \frac{\pi}{4}\right) \cup \left(\frac{3\pi}{4}, \frac{5\pi}{4}\right) \cup \left(\frac{7\pi}{4}, 2\pi\right]$$

**3. Studio del Segno della Frazione:**
Ordiniamo i punti salienti nell'intervallo $[0, 2\pi]$: $0$, $\frac{\pi}{6}$, $\frac{\pi}{4}$, $\frac{3\pi}{4}$, $\frac{7\pi}{6}$, $\frac{5\pi}{4}$, $\frac{7\pi}{4}$, $2\pi$.

Costruiamo il quadro dei segni:
- Nell'intervallo $\left[\frac{\pi}{6}, \frac{\pi}{4}\right)$: $N \ge 0$ e $D > 0 \implies \text{segno } +$
- Nell'intervallo $\left(\frac{3\pi}{4}, \frac{7\pi}{6}\right]$: $N \ge 0$ e $D > 0 \implies \text{segno } +$
- Nell'intervallo $\left(\frac{5\pi}{4}, \frac{7\pi}{4}\right)$: $N < 0$ e $D < 0 \implies \text{segno } +$

I punti che annullano il numeratore ($\frac{\pi}{6}$, $\frac{7\pi}{6}$) sono inclusi, mentre i punti che annullano il denominatore ($\frac{\pi}{4}$, $\frac{3\pi}{4}$, $\frac{5\pi}{4}$, $\frac{7\pi}{4}$) sono sempre esclusi.

La soluzione della disequazione è:
$$S = \left[\frac{\pi}{6}, \frac{\pi}{4}\right) \cup \left(\frac{3\pi}{4}, \frac{7\pi}{6}\right] \cup \left(\frac{5\pi}{4}, \frac{7\pi}{4}\right)$$
