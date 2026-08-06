---
year: 4
macro_area: "Calcolo Combinatorio"
topic: "Identit\u00e0 combinatoria con coefficienti binomiali"
difficulty: 5
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:09:37+00:00"
tags:
  - "calcolo combinatorio"
  - "coefficiente binomiale"
  - "identit\u00e0"
  - "dimostrazione"
---
# Problem Text
Dimostra che per ogni intero positivo $n$ vale l'identità combinatoria 
$$
\sum_{k=0}^n \binom{n}{k}^2 = \binom{2n}{n}
$$

# Solution
Considera un insieme con $2n$ elementi, diviso in due sottoinsiemi $A$ e $B$, ciascuno di cardinalità $n$. Contiamo in due modi il numero di modi di scegliere $n$ elementi dall'unione. Da un lato, il numero è per definizione $\binom{2n}{n}$. Dall'altro lato, se scegliamo $k$ elementi da $A$ e $n-k$ da $B$, per $k=0,1,\ldots,n$, il numero di modi è $\sum_{k=0}^n \binom{n}{k}\binom{n}{n-k}$. Poiché $\binom{n}{n-k} = \binom{n}{k}$, l'espressione diventa $\sum_{k=0}^n \binom{n}{k}^2$. Uguagliando le due espressioni, otteniamo l'identità desiderata.
