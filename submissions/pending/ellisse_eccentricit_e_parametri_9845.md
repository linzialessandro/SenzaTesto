---
year: 3
macro_area: "Geometria Analitica"
topic: "Ellisse: eccentricit\u00e0 e parametri"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-11T15:21:38+00:00"
tags:
  - "ellisse"
  - "eccentricit\u00e0"
  - "parametro"
  - "disequazioni"
---
# Problem Text
Determina per quali valori reali di $k$ la conica di equazione $x^2 + k\,y^2 = 4$ rappresenta un'ellisse con eccentricità minore di $\frac{1}{2}$.

# Solution
Riscriviamo l'equazione nella forma canonica:

$$
x^2/4 + y^2/(4/k) = 1
$$

Per avere un'ellisse reale occorre $k > 0$.

**Caso $k > 1$**: allora $a^2 = 4$, $b^2 = 4/k$ e l'asse maggiore è quello delle $x$. L'eccentricità vale

$$
e = \sqrt{1 - \frac{b^2}{a^2}} = \sqrt{1 - \frac{1}{k}}.
$$

Imponiamo $e < \frac{1}{2}$:

$$
\sqrt{1 - \frac{1}{k}} < \frac{1}{2} \implies 1 - \frac{1}{k} < \frac{1}{4} \implies \frac{1}{k} > \frac{3}{4} \implies k < \frac{4}{3}.
$$

Quindi per $k > 1$ si ottiene $1 < k < \frac{4}{3}$.

**Caso $0 < k < 1$**: ora $a^2 = 4/k$, $b^2 = 4$ e l'asse maggiore è quello delle $y$. L'eccentricità è

$$
e = \sqrt{1 - \frac{b^2}{a^2}} = \sqrt{1 - k}.
$$

Condizione $e < \frac{1}{2}$:

$$
\sqrt{1 - k} < \frac{1}{2} \implies 1 - k < \frac{1}{4} \implies k > \frac{3}{4}.
$$

Quindi $\frac{3}{4} < k < 1$.

**Caso $k = 1$**: l'equazione diventa $x^2 + y^2 = 4$, una circonferenza, quindi ellisse con eccentricità $0$, che è minore di $\frac{1}{2}$.

Unendo i tre intervalli si ha:

$$
k \in \left(\frac{3}{4}, \frac{4}{3}\right).
$$

In conclusione, la conica è un'ellisse con eccentricità minore di $\frac{1}{2}$ per $k \in \left(\frac{3}{4}, \frac{4}{3}\right)$.
