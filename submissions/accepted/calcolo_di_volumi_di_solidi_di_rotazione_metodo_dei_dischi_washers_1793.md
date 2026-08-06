---
year: 5
macro_area: "Applicazioni dell'integrale e cenni avanzati"
topic: "Calcolo di volumi di solidi di rotazione (metodo dei dischi / washers)"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:20:00+00:00"
tags:
  - "volumi"
  - "solidi di rotazione"
  - "metodo delle sezioni"
  - "integrali definiti"
---
# Problem Text
Determina il volume del solido ottenuto ruotando attorno all'asse $x$ la regione delimitata dalle curve $y = \sqrt{x}$ e $y = x$.

# Solution
La regione è compresa tra $x=0$ e $x=1$ (intersezioni delle due curve: $\sqrt{x}=x \Rightarrow x=0,1$). Usando il metodo delle sezioni (dischi con cavità), il volume è:

$$
V = \pi \int_0^1 \left[ (\sqrt{x})^2 - (x)^2 \right] dx = \pi \int_0^1 (x - x^2) dx.
$$

Calcoliamo:

$$
V = \pi \left[ \frac{x^2}{2} - \frac{x^3}{3} \right]_0^1 = \pi \left( \frac{1}{2} - \frac{1}{3} \right) = \frac{\pi}{6}.
$$

Il volume è quindi $\frac{\pi}{6}$.
