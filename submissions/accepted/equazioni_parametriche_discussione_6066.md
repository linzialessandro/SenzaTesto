---
year: 2
macro_area: "Equazioni di secondo grado"
topic: "Equazioni parametriche e discussione"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: recycle_rejected
  generated_at: "2026-08-23T13:05:00+00:00"
tags:
  - "equazioni di secondo grado"
  - "parametriche"
  - "discriminante"
  - "relazioni tra radici e coefficienti"
---
# Problem Text
Determina i valori del parametro reale $k$ per cui l'equazione $x^2 - (2k-1)x + k(1-k) = 0$ ammette due radici reali distinte e positive.

# Solution
L'equazione di secondo grado $x^2 - (2k-1)x + k(1-k) = 0$ ha coefficienti $a = 1$, $b = -(2k-1)$, $c = k(1-k)$.
Affinché ammetta due radici reali distinte ($x_1 \ne x_2$) ed entrambe positive ($x_1 > 0$, $x_2 > 0$), devono essere contemporaneamente verificate le seguenti tre condizioni:
1. **Discriminante strettamente positivo ($\Delta > 0$)**:
$$
\Delta = [-(2k-1)]^2 - 4(1)[k(1-k)] = (4k^2 - 4k + 1) - 4k + 4k^2 = 8k^2 - 8k + 1 > 0.
$$
Risolviamo l'equazione associata $8k^2 - 8k + 1 = 0$:
$$
k = \frac{8 \pm \sqrt{64 - 32}}{16} = \frac{8 \pm 4\sqrt{2}}{16} = \frac{2 \pm \sqrt{2}}{4}.
$$
Poiché il coefficiente di $k^2$ è positivo ($8 > 0$), la disequazione $\Delta > 0$ è soddisfatta per valori esterni:
$$
k < \frac{2-\sqrt{2}}{4} \quad \lor \quad k > \frac{2+\sqrt{2}}{4}.
$$

2. **Prodotto delle radici positivo ($P = x_1 x_2 = \frac{c}{a} > 0$)**:
$$
\frac{k(1-k)}{1} > 0 \iff k(1-k) > 0 \iff 0 < k < 1.
$$

3. **Somma delle radici positiva ($S = x_1 + x_2 = -\frac{b}{a} > 0$)**:
$$
2k - 1 > 0 \iff k > \frac{1}{2}.
$$

Ora intersechiamo le tre condizioni a sistema:
$$
\begin{cases}
k < \frac{2-\sqrt{2}}{4} \quad \lor \quad k > \frac{2+\sqrt{2}}{4} \\
0 < k < 1 \\
k > \frac{1}{2}
\end{cases}
$$
Confrontiamo i valori numerici:
- $\frac{2-\sqrt{2}}{4} \approx \frac{2-1.414}{4} \approx 0.146 < \frac{1}{2}$.
- $\frac{2+\sqrt{2}}{4} \approx \frac{2+1.414}{4} \approx 0.854 \in \left(\frac{1}{2}, 1\right)$.

Dalle ultime due condizioni ($0 < k < 1$ e $k > \frac{1}{2}$) otteniamo $\frac{1}{2} < k < 1$.
Intersecando con la condizione sul discriminante ($k < \frac{2-\sqrt{2}}{4} \lor k > \frac{2+\sqrt{2}}{4}$), l'intervallo ammissibile è:
$$
\frac{2+\sqrt{2}}{4} < k < 1.
$$
Quindi l'equazione ammette due soluzioni reali distinte e positive per $k \in \left( \frac{2+\sqrt{2}}{4}, 1 \right)$.
