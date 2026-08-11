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
  pipeline: generate_and_pr
  generated_at: "2026-08-06T18:07:25+00:00"
tags:
  - "dominio"
  - "simmetrie"
  - "periodicit\u00e0"
  - "funzioni logaritmiche"
---
# Problem Text
Data la funzione $f(x) = \ln\left(\frac{1+x}{1-x}\right)$, determinare: il dominio, le intersezioni con gli assi cartesiani, eventuali simmetrie (parità o disparità) e stabilire se la funzione è periodica, giustificando la risposta.

# Solution
Il dominio si ottiene imponendo l'argomento del logaritmo positivo: $\frac{1+x}{1-x} > 0$. Studiando il segno di numeratore e denominatore, si ha $x \in (-1,1)$, quindi $D = (-1,1)$.

Intersezioni con gli assi: con l'asse $y$: $f(0) = \ln(1) = 0$, quindi $(0,0)$. Con l'asse $x$: $f(x)=0 \Rightarrow \frac{1+x}{1-x}=1 \Rightarrow x=0$, quindi unica intersezione in $(0,0)$.

Simmetrie: $f(-x) = \ln\frac{1-x}{1+x} = \ln\left(\frac{1+x}{1-x}\right)^{-1} = -f(x)$, quindi la funzione è dispari.

Periodicità: se $T$ fosse un periodo non nullo, allora per ogni $x \in (-1,1)$ si avrebbe $x+T \in (-1,1)$ e anche $x+nT \in (-1,1)$ per ogni $n \in \mathbb{Z}$. Ma poiché l'intervallo è limitato, per ogni $x$ fisso e $n$ sufficientemente grande, $x+nT$ esce da $(-1,1)$, contraddizione. Quindi la funzione non è periodica.

In sintesi: dominio $(-1,1)$, intersezione con entrambi gli assi nel punto $(0,0)$, funzione dispari e non periodica.
