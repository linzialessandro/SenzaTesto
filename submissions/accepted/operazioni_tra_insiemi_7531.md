---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Operazioni tra insiemi"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T18:10:17+00:00"
tags:
  - "insiemi"
  - "unione"
  - "intersezione"
  - "differenza"
---
# Problem Text
Dati gli insiemi $A = \{1, 2, 3, 4\}$, $B = \{3, 4, 5, 6\}$ e $C = \{4, 5, 6, 7\}$, determina l'insieme $D = (A \cap B) \cup (B \setminus C)$ e verifica se $D$ è sottoinsieme di $C$.

# Solution
Calcoliamo prima $A \cap B = \{3, 4\}$ (elementi comuni). Poi $B \setminus C = \{3\}$ (elementi di $B$ non in $C$, poiché 5 e 6 sono in $C$, 3 non c'è). L'unione è $\{3, 4\} \cup \{3\} = \{3, 4\}$. Quindi $D = \{3, 4\}$. Per verificare se $D \subseteq C$, controlliamo se ogni elemento di $D$ è in $C$: 3 non appartiene a $C$, quindi $D$ non è sottoinsieme di $C$.
