---
year: 3
macro_area: "Coniche"
topic: "Tangenza tra retta e circonferenza con parametro"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:23:55+00:00"
tags:
  - "coniche"
  - "circonferenza"
  - "retta"
  - "tangenza"
  - "parametro"
  - "distanza punto-retta"
---
# Problem Text
Determina per quali valori del parametro reale $k$ la retta di equazione $y = kx - 1$ è tangente alla circonferenza di equazione $x^2 + y^2 - 2x - 4y + 1 = 0$.

# Solution
Completiamo i quadrati per trovare centro e raggio della circonferenza:

$$
x^2 - 2x + y^2 - 4y + 1 = 0 \implies (x-1)^2 - 1 + (y-2)^2 - 4 + 1 = 0 \implies (x-1)^2 + (y-2)^2 = 4.
$$

Il centro è $C(1,2)$ e il raggio $r = 2$.
Scriviamo la retta in forma implicita: $kx - y - 1 = 0$.
La distanza dal centro alla retta è

$$
d = \frac{|k \cdot 1 - 1 \cdot 2 - 1|}{\sqrt{k^2 + 1}} = \frac{|k - 3|}{\sqrt{k^2 + 1}}.
$$

Imponiamo la condizione di tangenza $d = r = 2$:

$$
\frac{|k - 3|}{\sqrt{k^2 + 1}} = 2 \implies |k - 3| = 2\sqrt{k^2 + 1}.
$$

Elevando al quadrato (il secondo membro è positivo):

$$
(k-3)^2 = 4(k^2 + 1) \implies k^2 - 6k + 9 = 4k^2 + 4 \implies 3k^2 + 6k - 5 = 0.
$$

Risolvendo:

$$
k = \frac{-6 \pm \sqrt{36 + 60}}{6} = \frac{-6 \pm \sqrt{96}}{6} = \frac{-6 \pm 4\sqrt{6}}{6} = \frac{-3 \pm 2\sqrt{6}}{3}.
$$

Pertanto i valori richiesti sono $k = \frac{-3 \pm 2\sqrt{6}}{3}$.
