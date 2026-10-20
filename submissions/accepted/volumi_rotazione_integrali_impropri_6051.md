---
year: 5
macro_area: "Applicazioni dell'integrale e cenni avanzati"
topic: "Volumi di solidi di rotazione e integrali impropri"
difficulty: 4
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
  - "volumi"
  - "solidi di rotazione"
  - "integrali impropri"
  - "integrazione per parti"
---
# Problem Text
Calcola il volume del solido ottenuto ruotando di un giro completo attorno all'asse $x$ la regione piana illimitata compresa tra il grafico della funzione $f(x) = e^{-x}\sin x$ per $x \ge 0$ e l'asse $x$.

# Solution
Il volume del solido di rotazione attorno all'asse $x$ è dato dall'integrale improprio:
$$
V = \pi \int_0^{+\infty} [f(x)]^2 \, dx = \pi \int_0^{+\infty} e^{-2x}\sin^2 x \, dx.
$$
Utilizzando l'identità goniometrica $\sin^2 x = \frac{1 - \cos(2x)}{2}$, possiamo riscrivere l'integrale come:
$$
V = \frac{\pi}{2} \int_0^{+\infty} e^{-2x}(1 - \cos(2x)) \, dx = \frac{\pi}{2} \left( \int_0^{+\infty} e^{-2x} \, dx - \int_0^{+\infty} e^{-2x}\cos(2x) \, dx \right).
$$
Calcoliamo separatamente i due integrali impropri:
1. Il primo integrale è immediato:
$$
\int_0^{+\infty} e^{-2x} \, dx = \lim_{b\to+\infty} \left[ -\frac{1}{2}e^{-2x} \right]_0^b = 0 - \left( -\frac{1}{2} \right) = \frac{1}{2}.
$$
2. Per il secondo integrale $J = \int_0^{+\infty} e^{-2x}\cos(2x) \, dx$, integriamo per parti due volte oppure applichiamo la formula $\int e^{ax}\cos(bx)\,dx = \frac{e^{ax}(a\cos(bx) + b\sin(bx))}{a^2+b^2}$ con $a = -2$ e $b = 2$:
$$
\int e^{-2x}\cos(2x) \, dx = \frac{e^{-2x}(-2\cos(2x) + 2\sin(2x))}{(-2)^2 + 2^2} = \frac{e^{-2x}(\sin(2x) - \cos(2x))}{4}.
$$
Valutando tra $0$ e $+\infty$:
$$
J = \lim_{b\to+\infty} \left[ \frac{e^{-2x}(\sin(2x) - \cos(2x))}{4} \right]_0^b = 0 - \left( \frac{e^0(0 - 1)}{4} \right) = \frac{1}{4}.
$$
Sostituendo i valori trovati nell'espressione del volume:
$$
V = \frac{\pi}{2} \left( \frac{1}{2} - \frac{1}{4} \right) = \frac{\pi}{2} \cdot \frac{1}{4} = \frac{\pi}{8}.
$$
Il volume del solido di rotazione è pertanto $\frac{\pi}{8}$.
