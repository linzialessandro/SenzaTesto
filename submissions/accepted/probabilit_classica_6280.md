---
year: 2
macro_area: "Probabilità"
topic: "Probabilità classica"
difficulty: 4
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:42:57+00:00"
tags:
  - "probabilità"
  - "eventi"
  - "urna"
  - "senza reimmissione"
  - "equazioni"
---
# Problem Text
Un sacchetto contiene 3 palline blu e $r$ palline rosse. Si estraggono consecutivamente due palline senza reimmissione. Sapendo che la probabilità di ottenere due palline di colori diversi è $\frac{1}{2}$, determina $r$, sapendo che la probabilità di estrarre due palline rosse è maggiore di $\frac{1}{4}$.

# Solution
Il numero totale di palline è $3+r$. Consideriamo le estrazioni ordinate: ci sono $(3+r)(2+r)$ esiti possibili. Gli esiti favorevoli all'evento 'colori diversi' sono $r\cdot 3 + 3\cdot r = 6r$. Quindi:

$$
\frac{6r}{(r+3)(r+2)} = \frac{1}{2}
$$

Risolvendo: $12r = r^2+5r+6 \implies r^2-7r+6=0 \implies (r-1)(r-6)=0$, da cui $r=1$ o $r=6$.

Ora calcoliamo la probabilità di due palline rosse per ciascun valore.

- Se $r=1$: ci sono 4 palline in totale, la probabilità di due rosse è $0$ (c'è una sola rossa), che non è $> \frac{1}{4}$.
- Se $r=6$: ci sono 9 palline, la probabilità di due rosse è $\frac{6}{9}\cdot \frac{5}{8} = \frac{30}{72} = \frac{5}{12} \approx 0.4167 > \frac{1}{4}$.

Quindi l'unico valore accettabile è $r=6$.
