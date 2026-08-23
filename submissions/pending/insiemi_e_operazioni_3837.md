---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Insiemi e operazioni"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:53:29+00:00"
tags:
  - "insiemi"
  - "intersezione"
  - "sottoinsiemi"
  - "combinazioni"
---
# Problem Text
Siano $U = \{1,2,3,4,5,6,7,8,9,10\}$, $A = \{1,2,3,4\}$ e $B = \{1,2\}$. Quanti sottoinsiemi $X$ di $U$ soddisfano $X \cap A = B$ e hanno cardinalità $4$?

# Solution
Per avere $X \cap A = B$, ogni elemento di $B$ deve appartenere a $X$ (perché $B \subseteq X \cap A$) e nessun elemento di $A \setminus B = \{3,4\}$ può appartenere a $X$, perché altrimenti starebbe in $X \cap A$ ma non è in $B$. Quindi $X$ deve essere della forma $B \cup Y$, dove $Y$ è un qualsiasi sottoinsieme di $U \setminus A = \{5,6,7,8,9,10\}$. Imponiamo $|X| = 4$: poiché $|B| = 2$, dobbiamo avere $|Y| = 2$. I sottoinsiemi di cardinalità 2 di un insieme con 6 elementi sono $\binom{6}{2} = 15$. Quindi i sottoinsiemi $X$ che soddisfano le condizioni sono 15.
