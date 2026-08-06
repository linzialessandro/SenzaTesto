---
year: 5
macro_area: "Applicazioni dell'integrale"
topic: "Calcolo di volumi di solidi di rotazione"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:14:23+00:00"
tags:
  - "integrali"
  - "volumi"
  - "rotazione"
  - "metodo dei dischi"
---
# Problem Text
Calcolare il volume del solido ottenuto ruotando attorno all'asse $x$ la regione piana delimitata dalla curva $y = \sqrt{x}$, dall'asse $x$ e dalle rette $x=1$ e $x=4$.

# Solution
Il solido è generato dalla rotazione di un'area attorno all'asse $x$. Utilizziamo il metodo dei dischi: per ogni $x \in [1,4]$, il raggio del disco è $r(x) = \sqrt{x}$. L'area di ciascun disco è $\pi r(x)^2 = \pi x$. Il volume si ottiene integrando da $1$ a $4$:

$$
V = \pi \int_1^4 x \, dx = \pi \left[ \frac{x^2}{2} \right]_1^4 = \pi \left( \frac{16}{2} - \frac{1}{2} \right) = \pi \cdot \frac{15}{2} = \frac{15\pi}{2}.
$$

Pertanto il volume è $\frac{15\pi}{2}$ unità cubiche.
