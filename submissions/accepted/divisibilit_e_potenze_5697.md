---
year: 1
macro_area: "Aritmetica e Algebra"
topic: "Divisibilità e potenze"
difficulty: 4
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:53:40+00:00"
tags:
  - "divisibilità"
  - "quadrati perfetti"
  - "numero di divisori"
  - "scomposizione in fattori primi"
---
# Problem Text
Il numero di studenti di una scuola è un quadrato perfetto, è multiplo di 6 e ha esattamente 15 divisori. Qual è il più piccolo numero possibile di studenti?

# Solution
Sia $N$ il numero di studenti. Poiché $N$ è un quadrato perfetto, nella sua scomposizione in fattori primi tutti gli esponenti sono pari. Inoltre, essendo multiplo di 6, i primi $2$ e $3$ compaiono con esponente almeno 1, ma per la parità devono essere almeno 2.

Il numero di divisori di $N$ si calcola come prodotto di (esponente + 1) per ogni primo. Dato che il numero di divisori è 15, le possibili scomposizioni di 15 sono: $15 = 15$ (singolo primo) oppure $15 = 3 \cdot 5$ (due primi). Il caso $15$ da solo richiederebbe un solo primo con esponente 14, impossibile perché $N$ deve contenere sia 2 che 3. Quindi $N$ ha due fattori primi, con esponenti $a$ e $b$ tali che $(a+1)(b+1)=15$. Le uniche possibilità sono $a=2, b=4$ (oppure invertiti). Quindi $N = p^2 \cdot q^4$ con $p, q$ primi distinti.

Per minimizzare $N$, assegniamo l'esponente maggiore (4) al primo più piccolo, cioè $q=2$, e l'esponente minore (2) al primo successivo, $p=3$. Otteniamo:

$$
N = 3^2 \cdot 2^4 = 9 \cdot 16 = 144.
$$

Verifica: $144$ è multiplo di 6, è un quadrato perfetto ($12^2$), e i suoi divisori sono: $(2+1)(4+1)=3 \cdot 5 = 15$. Quindi il più piccolo numero possibile è $\boxed{144}$.
