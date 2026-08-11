---
year: 5
macro_area: "Analisi Matematica"
topic: "Topologia e Funzioni"
difficulty: 4
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
  - "dominio"
  - "simmetrie"
  - "periodicità"
  - "funzioni logaritmiche"
---
# Problem Text
Data la funzione $f(x) = \ln\left(\dfrac{1+x}{1-x}\right)$, determinare: il dominio, le intersezioni con gli assi cartesiani, eventuali simmetrie (parità o disparità) e stabilire se la funzione è periodica, giustificando la risposta.

# Solution
Dominio: si impone $\dfrac{1+x}{1-x}>0$. Lo studio del segno dà $x\in(-1,1)$, quindi $D_f=(-1,1)$.

Intersezioni con gli assi: $f(0)=\ln 1=0$, dunque $(0,0)$. Inoltre $f(x)=0$ implica $\dfrac{1+x}{1-x}=1$, cioè $x=0$. Unica intersezione in $(0,0)$.

Simmetrie: $f(-x)=\ln\dfrac{1-x}{1+x}=\ln\left(\left(\dfrac{1+x}{1-x}\right)^{-1}\right)=-f(x)$, quindi $f$ è dispari.

Periodicità: se esistesse $T\neq 0$ periodo, per ogni $x\in(-1,1)$ si avrebbe $x+nT\in(-1,1)$ per ogni intero $n$. Ma $(-1,1)$ è limitato, quindi per $|n|$ grande $x+nT$ esce dal dominio: contraddizione. La funzione non è periodica.

In sintesi: dominio $(-1,1)$; intersezione con gli assi in $(0,0)$; funzione dispari e non periodica.
