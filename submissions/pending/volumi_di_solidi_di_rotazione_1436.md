---
year: 5
macro_area: "Applicazioni dell'integrale e cenni avanzati"
topic: "Volumi di solidi di rotazione"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:52:56+00:00"
tags:
  - "integrale definito"
  - "volume di rotazione"
  - "metodo dei dischi"
---
# Problem Text
Calcola il volume del solido generato dalla rotazione attorno all'asse $x$ della regione delimitata dalla curva $y = \sqrt{x}$, dall'asse $x$ e dalla retta $x = 4$.

# Solution
La regione è compresa tra $x=0$ e $x=4$. Usando il metodo dei dischi, il raggio della sezione trasversale è $r(x) = \sqrt{x}$. Il volume è:

$$
V = \pi \int_0^4 (\sqrt{x})^2 \, dx = \pi \int_0^4 x \, dx
$$

Calcoliamo l'integrale:

$$
\int_0^4 x \, dx = \left[ \frac{x^2}{2} \right]_0^4 = \frac{16}{2} - 0 = 8
$$

Quindi $V = 8\pi$.
