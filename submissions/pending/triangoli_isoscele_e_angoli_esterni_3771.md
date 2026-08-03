---
year: 1
macro_area: "Geometria piana Euclidea"
topic: "Triangoli isoscele e angoli esterni"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:46:21+00:00"
tags:
  - "triangolo isoscele"
  - "somma angoli"
  - "angolo esterno"
  - "equazione"
---
# Problem Text
In un triangolo isoscele $ABC$ con $AB = AC$, l'angolo al vertice $\angle A$ supera di $30^\circ$ ciascuno degli angoli alla base. Determina le misure degli angoli del triangolo e la misura dell'angolo esterno al vertice $B$.

# Solution
Poiché il triangolo è isoscele con $AB = AC$, gli angoli alla base sono uguali: $\angle B = \angle C = x$. L'angolo al vertice è $x + 30^\circ$. La somma degli angoli interni di un triangolo è $180^\circ$, quindi:

$$
2x + (x + 30^\circ) = 180^\circ \quad \Rightarrow \quad 3x + 30^\circ = 180^\circ
$$

Sottraendo $30^\circ$ da entrambi i membri:

$$
3x = 150^\circ \quad \Rightarrow \quad x = 50^\circ
$$

Pertanto: $\angle B = \angle C = 50^\circ$ e $\angle A = 80^\circ$.

L'angolo esterno al vertice $B$ è il supplementare dell'angolo interno $\angle B$, cioè $180^\circ - 50^\circ = 130^\circ$. In alternativa, l'angolo esterno è pari alla somma degli angoli opposti interni: $\angle A + \angle C = 80^\circ + 50^\circ = 130^\circ$.
