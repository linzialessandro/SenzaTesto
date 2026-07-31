---
year: 4
macro_area: "Goniometria"
topic: "Equazioni e disequazioni goniometriche"
difficulty: 4
ai_generated: true
tags:
  - "equazioni goniometriche"
  - "disequazioni goniometriche"
  - "disequazioni fratte"
  - "lineari in seno e coseno"
---
# Problem Text
Risolvere nell'intervallo $[0, 2\pi)$ la seguente disequazione goniometrica fratta:

$$
\frac{\sqrt{3}\sin x - \cos x - 1}{\sin x - \cos x} \ge 0
$$

# Solution
Per risolvere la disequazione fratta nell'intervallo $[0, 2\pi)$, studiamo separatamente il segno del numeratore $N(x)$ e del denominatore $D(x)$.

**1. Studio del Numeratore: $N(x) \ge 0$**

$$
\sqrt{3}\sin x - \cos x - 1 \ge 0 \iff \sqrt{3}\sin x - \cos x \ge 1
$$

Dividendo entrambi i membri per $2$, si applica la formula dell'angolo ausiliario (o di sottrazione del seno):

$$
\frac{\sqrt{3}}{2}\sin x - \frac{1}{2}\cos x \ge \frac{1}{2} \iff \sin\left(x - \frac{\pi}{6}\right) \ge \frac{1}{2}
$$

Poiché $x \in [0, 2\pi)$, l'argomento appartiene all'intervallo $\left[-\frac{\pi}{6}, \frac{11\pi}{6}\right)$. La disequazione è verificata per:

$$
\frac{\pi}{6} \le x - \frac{\pi}{6} \le \frac{5\pi}{6} \iff \frac{\pi}{3} \le x \le \pi
$$

Quindi:
- $N(x) \ge 0$ per $x \in \left[\frac{\pi}{3}, \pi\right]$
- $N(x) < 0$ per $x \in \left[0, \frac{\pi}{3}\right) \cup (\pi, 2\pi)$

**2. Studio del Denominatore: $D(x) > 0$**

$$
\sin x - \cos x > 0 \iff \sin x > \cos x
$$

Osservando la circonferenza goniometrica (oppure dividendo per $\sqrt{2}$), il seno è strettamente maggiore del coseno nell'intervallo:

$$
\frac{\pi}{4} < x < \frac{5\pi}{4}
$$

Le condizioni di esistenza impongono $D(x) \neq 0$, ovvero $x \neq \frac{\pi}{4}$ e $x \neq \frac{5\pi}{4}$.
Quindi:
- $D(x) > 0$ per $x \in \left(\frac{\pi}{4}, \frac{5\pi}{4}\right)$
- $D(x) < 0$ per $x \in \left[0, \frac{\pi}{4}\right) \cup \left(\frac{5\pi}{4}, 2\pi\right)$

**3. Quadro dei segni e Soluzione**
Suddividendo $[0, 2\pi)$ tramite i punti critici $0, \frac{\pi}{4}, \frac{\pi}{3}, \pi, \frac{5\pi}{4}, 2\pi$:
- In $\left[0, \frac{\pi}{4}\right)$: $N < 0, D < 0 \implies \frac{N}{D} > 0$ (Soddisfatta)
- In $\left(\frac{\pi}{4}, \frac{\pi}{3}\right)$: $N < 0, D > 0 \implies \frac{N}{D} < 0$ (Non soddisfatta)
- In $\left[\frac{\pi}{3}, \pi\right]$: $N \ge 0, D > 0 \implies \frac{N}{D} \ge 0$ (Soddisfatta)
- In $\left(\pi, \frac{5\pi}{4}\right)$: $N < 0, D > 0 \implies \frac{N}{D} < 0$ (Non soddisfatta)
- In $\left(\frac{5\pi}{4}, 2\pi\right)$: $N < 0, D < 0 \implies \frac{N}{D} > 0$ (Soddisfatta)

L'insieme delle soluzioni nell'intervallo $[0, 2\pi)$ è:

$$
S = \left[0, \frac{\pi}{4}\right) \cup \left[\frac{\pi}{3}, \pi\right] \cup \left(\frac{5\pi}{4}, 2\pi\right)
$$
