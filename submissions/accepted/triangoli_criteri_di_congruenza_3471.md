---
year: 1
macro_area: "Geometria piana Euclidea"
topic: "Triangoli: criteri di congruenza"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:56:07+00:00"
tags:
  - "triangoli"
  - "congruenza"
  - "mediana"
  - "altezza"
---
# Problem Text
Nel triangolo isoscele $ABC$ con base $BC$, sia $D$ il punto medio di $BC$. Dimostra che il segmento $AD$ è perpendicolare a $BC$ utilizzando il criterio di congruenza $SSS$.

# Solution
Consideriamo i triangoli $ABD$ e $ACD$. Sappiamo che:
- $AB = AC$ perché il triangolo è isoscele sulla base $BC$;
- $BD = DC$ perché $D$ è il punto medio di $BC$;
- $AD$ è un lato comune.

Quindi i triangoli $ABD$ e $ACD$ hanno i tre lati rispettivamente congruenti, perciò sono congruenti per il criterio $SSS$. In particolare, gli angoli corrispondenti $\angle ADB$ e $\angle ADC$ sono congruenti.

Poiché $B$, $D$ e $C$ sono allineati, $\angle ADB$ e $\angle ADC$ formano un angolo piatto, quindi la loro somma è $180^\circ$. Essendo congruenti, ciascuno misura $90^\circ$. Pertanto $AD$ è perpendicolare a $BC$.
