---
year: 2
macro_area: "Geometria piana"
topic: "Circonferenza e cerchio: teoremi sulle corde e tangenti"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:24:22+00:00"
tags:
  - "circonferenza"
  - "tangente"
  - "secante"
  - "potenza di un punto"
  - "diametro"
---
# Problem Text
Da un punto $P$ esterno a una circonferenza di centro $O$ e raggio $r$, si traccia la tangente $PA$ (con $A$ punto di tangenza) e la secante $PBC$ passante per $O$, con $B$ più vicino a $P$ e $C$ più lontano. Sapendo che $PA = 8$ e $PB = 4$, determina il raggio $r$ e la lunghezza della corda $BC$.

# Solution
Per il teorema della potenza di un punto rispetto a una circonferenza, si ha $PA^2 = PB \cdot PC$.
Poiché la secante passa per il centro $O$, la corda $BC$ è un diametro, quindi $BC = 2r$ e $PC = PB + BC = 4 + 2r$.
Sostituendo: $8^2 = 4 \cdot (4 + 2r) \Rightarrow 64 = 16 + 8r \Rightarrow 8r = 48 \Rightarrow r = 6$.
Infine, $BC = 2r = 12$.
