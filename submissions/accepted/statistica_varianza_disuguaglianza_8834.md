---
year: 3
macro_area: "Statistica descrittiva (avanzata)"
topic: "Indici di dispersione: varianza e scarto quadratico medio"
difficulty: 5
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
  - "statistica"
  - "varianza"
  - "scarto quadratico medio"
  - "dimostrazione"
  - "disuguaglianza"
---
# Problem Text
Siano $x_1, x_2, \ldots, x_n$ dei dati numerici con media aritmetica $\mu = \frac{1}{n}\sum_{i=1}^n x_i$ e varianza $\sigma^2 = \frac{1}{n}\sum_{i=1}^n (x_i - \mu)^2$. Dimostra che per ogni costante reale $k > 0$, il numero $m$ di dati che distano dalla media di almeno $k\sigma$ (cioè per cui $|x_i - \mu| \ge k\sigma$) soddisfa la disuguaglianza $m \le \frac{n}{k^2}$.

# Solution
Sia $I = \{ i \in \{1, 2, \ldots, n\} : |x_i - \mu| \ge k\sigma \}$ l'insieme degli indici corrispondenti ai dati che distano dalla media almeno $k\sigma$, e sia $m = |I|$ la cardinalità di tale insieme.

Per ogni indice $i \in I$, elevando al quadrato la condizione $|x_i - \mu| \ge k\sigma$, otteniamo:
$$
(x_i - \mu)^2 \ge k^2 \sigma^2.
$$
Sommando questa disuguaglianza su tutti gli indici $i \in I$, si ha:
$$
\sum_{i \in I} (x_i - \mu)^2 \ge \sum_{i \in I} k^2 \sigma^2 = m k^2 \sigma^2.
$$
Poiché i termini $(x_j - \mu)^2 \ge 0$ sono non negativi per ogni $j \in \{1, \ldots, n\}$, la somma estesa all'intero campione è maggiore o uguale alla somma ristretta al sottoinsieme $I$:
$$
\sum_{i=1}^n (x_i - \mu)^2 \ge \sum_{i \in I} (x_i - \mu)^2 \ge m k^2 \sigma^2.
$$
Dalla definizione di varianza, abbiamo $\sigma^2 = \frac{1}{n}\sum_{i=1}^n (x_i - \mu)^2$, da cui:
$$
\sum_{i=1}^n (x_i - \mu)^2 = n\sigma^2.
$$
Sostituendo nella disuguaglianza precedente:
$$
n\sigma^2 \ge m k^2 \sigma^2.
$$
Se $\sigma^2 > 0$, dividendo entrambi i membri per $k^2 \sigma^2 > 0$, ricaviamo:
$$
m \le \frac{n}{k^2}.
$$
Se $\sigma^2 = 0$, tutti i dati coincidono con la media $\mu$, quindi $|x_i - \mu| = 0 < k\sigma = 0$ per $k > 0$, da cui $m = 0 \le \frac{n}{k^2}$, verificando l'asserto in tutti i casi.
