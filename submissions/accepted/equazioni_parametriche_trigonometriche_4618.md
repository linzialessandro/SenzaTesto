---
year: 4
macro_area: "Trigonometria e Goniometria"
topic: "Equazioni e disequazioni goniometriche"
difficulty: 4
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: recycle_rejected
  generated_at: "2026-09-13T09:24:00+00:00"
  source: submissions/rejected salvage
tags:
  - "trigonometria"
  - "equazioni parametriche"
  - "secante"
  - "tangente"
  - "discriminante"
  - "numero di soluzioni"
---
# Problem Text
Al variare del parametro reale $k$, discuti il numero di soluzioni dell'equazione $\sec^2 x + (k-1)\tan x + k = 0$ nell'intervallo $[0, 2\pi)$.

# Solution
Utilizziamo l'identità fondamentale $\sec^2 x = 1 + \tan^2 x$, valida per $x \neq \frac{\pi}{2}$ e $x \neq \frac{3\pi}{2}$ (condizioni di esistenza sia per la tangente che per la secante).
Sostituendo nell'equazione otteniamo:
$$
1 + \tan^2 x + (k-1)\tan x + k = 0
$$
ovvero:
$$
\tan^2 x + (k-1)\tan x + (k+1) = 0
$$
Poniamo $t = \tan x$, ottenendo l'equazione quadratica associata:
$$
t^2 + (k-1)t + (k+1) = 0
$$
Poiché la funzione tangente ha periodo $\pi$ e assume tutti i valori reali nell'intervallo $[0, 2\pi) \setminus \{\frac{\pi}{2}, \frac{3\pi}{2}\}$, a ogni valore reale di $t$ corrispondono esattamente due soluzioni distinte per $x$ in $[0, 2\pi)$.
Pertanto, il numero di soluzioni in $x$ è il doppio del numero di radici reali distinte dell'equazione in $t$.

Calcoliamo il discriminante $\Delta$ dell'equazione rispetto a $t$:
$$
\Delta = (k-1)^2 - 4(1)(k+1) = k^2 - 2k + 1 - 4k - 4 = k^2 - 6k - 3
$$
Determiniamo il segno di $\Delta$ risolvendo l'equazione $\Delta = 0$:
$$
k = \frac{6 \pm \sqrt{36 - 4(1)(-3)}}{2} = \frac{6 \pm \sqrt{48}}{2} = 3 \pm 2\sqrt{3}
$$

Distinguiamo i seguenti casi al variare di $k$:
- Se $\Delta < 0$, ovvero per $3 - 2\sqrt{3} < k < 3 + 2\sqrt{3}$: l'equazione in $t$ non ammette radici reali. Di conseguenza, l'equazione goniometrica di partenza non ammette alcuna soluzione reale in $[0, 2\pi)$ ($0$ soluzioni).
- Se $\Delta = 0$, ovvero per $k = 3 - 2\sqrt{3}$ oppure $k = 3 + 2\sqrt{3}$: l'equazione in $t$ ammette una radice reale doppia $t_0 = -\frac{k-1}{2}$. Tale valore reale fornisce esattamente $2$ soluzioni distinte per $x$ nell'intervallo $[0, 2\pi)$.
- Se $\Delta > 0$, ovvero per $k < 3 - 2\sqrt{3}$ oppure $k > 3 + 2\sqrt{3}$: l'equazione in $t$ ammette due radici reali distinte $t_1 \neq t_2$. A ciascuna di esse corrispondono $2$ soluzioni distinte per $x$, per un totale di $4$ soluzioni distinte in $[0, 2\pi)$.
