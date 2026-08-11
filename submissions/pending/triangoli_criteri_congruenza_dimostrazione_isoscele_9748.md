---
year: 1
macro_area: "Geometria piana Euclidea"
topic: "Triangoli e criteri di congruenza"
difficulty: 5
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: recycle_rejected
  generated_at: "2026-08-11T15:43:52+00:00"
  source: submissions/rejected salvage
tags:
  - "triangoli"
  - "congruenza"
  - "isoscele"
  - "criteri di congruenza"
---
# Problem Text
Nel triangolo $ABC$, sia $D$ il punto medio del lato $BC$. Siano $E$ e $F$ punti rispettivamente sui lati $AB$ e $AC$ tali che $DE=DF$ e $\angle BDE=\angle CDF$. Dimostra che $AB=AC$.

# Solution
Poiché $D$ è punto medio, $BD=CD$. Nei triangoli $BDE$ e $CDF$ si ha $BD=CD$, $\angle BDE=\angle CDF$ e $DE=DF$. L'angolo uguale è compreso tra i lati considerati, quindi per il primo criterio (SAS) $\triangle BDE\cong\triangle CDF$. In particolare $BE=CF$.

I punti $A,E,B$ sono allineati, quindi $\angle ADE$ e $\angle BDE$ sono adiacenti e $\angle ADE+\angle BDE=180^\circ$. Analogamente $\angle ADF+\angle CDF=180^\circ$. Poiché $\angle BDE=\angle CDF$, si ottiene $\angle ADE=\angle ADF$.

Nei triangoli $ADE$ e $ADF$: $AD$ in comune, $\angle ADE=\angle ADF$ e $DE=DF$. Di nuovo per SAS, $\triangle ADE\cong\triangle ADF$, quindi $AE=AF$.

Allora $AB=AE+EB=AF+FC=AC$. Dunque $ABC$ è isoscele su base $BC$.
