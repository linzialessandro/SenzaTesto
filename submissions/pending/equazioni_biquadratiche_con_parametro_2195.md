---
year: 3
macro_area: "Equazioni e disequazioni di grado superiore al secondo"
topic: "Equazioni biquadratiche con parametro"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:23:37+00:00"
tags:
  - "equazioni"
  - "biquadratiche"
  - "parametro"
  - "discussione"
---
# Problem Text
Al variare del parametro reale $k$, discuti il numero di soluzioni reali dell'equazione

$$
x^4 - (2k+1)x^2 + k^2 = 0.
$$

# Solution
Poniamo $t = x^2$, con $t \ge 0$. L'equazione diventa:

$$
t^2 - (2k+1)t + k^2 = 0.
$$

Il discriminante è

$$
\Delta = (2k+1)^2 - 4k^2 = 4k+1.
$$

Esistono soluzioni reali in $t$ se e solo se $\Delta \ge 0$, cioè $k \ge -\frac{1}{4}$.
Le radici sono

$$
t_{1,2} = \frac{2k+1 \pm \sqrt{4k+1}}{2}.
$$

Osserviamo che $t_1 t_2 = k^2 \ge 0$ e $t_1 + t_2 = 2k+1$. Per $k \ge -\frac{1}{4}$ la somma è $\ge \frac{1}{2} > 0$, quindi entrambe le radici sono non negative (positive tranne il caso $k=0$).
Discutiamo i casi:
- Se $k < -\frac{1}{4}$, $\Delta < 0$: nessuna soluzione reale.
- Se $k = -\frac{1}{4}$, $\Delta = 0$: $t = \frac{1}{4}$, da cui $x = \pm \frac{1}{2}$: due soluzioni reali distinte.
- Se $-\frac{1}{4} < k < 0$, $\Delta > 0$: entrambe le radici $t_1, t_2$ sono positive e distinte. Ciascuna dà due soluzioni $x = \pm \sqrt{t_i}$. Totale $4$ soluzioni reali distinte.
- Se $k = 0$, $\Delta > 0$: $t_1 = 0$, $t_2 = 1$. Da $t=0$ si ha $x=0$ (una soluzione), da $t=1$ si ha $x = \pm 1$ (due soluzioni). Totale $3$ soluzioni reali distinte.
- Se $k > 0$, $\Delta > 0$: entrambe le radici positive e distinte. Totale $4$ soluzioni reali distinte.
In conclusione, il numero di soluzioni reali distinte è: $0$ per $k < -\frac{1}{4}$; $2$ per $k = -\frac{1}{4}$; $4$ per $-\frac{1}{4} < k < 0$; $3$ per $k = 0$; $4$ per $k > 0$.
