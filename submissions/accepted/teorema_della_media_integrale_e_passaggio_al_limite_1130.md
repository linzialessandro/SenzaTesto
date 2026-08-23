---
year: 5
macro_area: "Integrali definiti e teoremi fondamentali"
topic: "Teorema della media integrale e passaggio al limite"
difficulty: 5
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:47:20+00:00"
tags:
  - "integrali definiti"
  - "teorema della media"
  - "limiti"
  - "continuità"
  - "dimostrazione"
---
# Problem Text
Sia $f: [0,1] \to \mathbb{R}$ una funzione continua. Dimostrare che $\lim_{n \to +\infty} n \int_0^1 x^n f(x) \, dx = f(1)$.

# Solution
Per il teorema della media integrale pesato, per ogni $n \in \mathbb{N}$ esiste $c_n \in [0,1]$ tale che

$$
\int_0^1 x^n f(x) \, dx = f(c_n) \int_0^1 x^n \, dx = \frac{f(c_n)}{n+1}.
$$

Quindi

$$
n \int_0^1 x^n f(x) \, dx = \frac{n}{n+1} f(c_n).
$$

Poiché $\frac{n}{n+1} \to 1$, basta mostrare che $f(c_n) \to f(1)$. Fissiamo $\epsilon > 0$. La funzione $f$ è uniformemente continua su $[0,1]$, quindi esiste $\delta > 0$ tale che $|x-y| < \delta$ implica $|f(x)-f(y)| < \epsilon$. Prendiamo $y=1$: per ogni $x \in [1-\delta,1]$, $|f(x)-f(1)| < \epsilon$. Dalla definizione di $c_n$,

$$
f(c_n)-f(1) = (n+1) \int_0^1 x^n (f(x)-f(1)) \, dx.
$$

Sia $M = \max_{[0,1]} |f|$; allora $|f(x)-f(1)| \le 2M$ per ogni $x$. Spezzando l'integrale:

$$
|f(c_n)-f(1)| \le (n+1) \int_0^{1-\delta} x^n |f(x)-f(1)| \, dx + (n+1) \int_{1-\delta}^1 x^n |f(x)-f(1)| \, dx.
$$

Il primo termine è $\le 2M (n+1) \int_0^{1-\delta} x^n \, dx = 2M (1-\delta)^{n+1}$, e il secondo è $\le \epsilon (n+1) \int_{1-\delta}^1 x^n \, dx = \epsilon (1 - (1-\delta)^{n+1})$. Dunque

$$
|f(c_n)-f(1)| \le 2M (1-\delta)^{n+1} + \epsilon (1 - (1-\delta)^{n+1}).
$$

Per $n \to +\infty$, $(1-\delta)^{n+1} \to 0$, quindi il limite superiore è $\le \epsilon$. Poiché $\epsilon$ è arbitrario, $f(c_n) \to f(1)$. Conseguentemente,

$$
\lim_{n \to +\infty} n \int_0^1 x^n f(x) \, dx = \lim_{n \to +\infty} \frac{n}{n+1} f(c_n) = f(1).
$$

Questo completa la dimostrazione.
