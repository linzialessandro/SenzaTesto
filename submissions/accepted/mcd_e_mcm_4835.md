---
year: 1
macro_area: "Aritmetica e Algebra"
topic: "MCD e mcm"
difficulty: 5
ai_generated: true
tags:
  - "MCD"
  - "divisibilit\u00e0"
  - "numeri naturali"
  - "propriet\u00e0 delle operazioni"
  - "calcolo letterale"
---
# Problem Text
Determinare il massimo valore possibile che può assumere il massimo comune divisore tra $n^2 + 3$ e $n + 1$, al variare di $n$ nell'insieme dei numeri naturali $\mathbb{N}$, e individuare tutti i valori di $n$ per i quali tale massimo viene raggiunto.

# Solution
Per determinare il massimo comune divisore tra $n^2 + 3$ e $n + 1$, che indichiamo con $d = \text{MCD}(n^2 + 3, n + 1)$, utilizziamo la scomposizione algebrica e le proprietà della divisibilità.

Esprimiamo $n^2 + 3$ mettendo in evidenza un fattore $(n + 1)$ grazie al prodotto notevole della differenza di quadrati:

$$
n^2 - 1 = (n + 1)(n - 1)
$$

Aggiungendo $4$ a entrambi i membri, otteniamo:

$$
n^2 + 3 = (n + 1)(n - 1) + 4
$$

Poiché $d$ divide $n + 1$, per la proprietà di chiusura rispetto alla moltiplicazione $d$ deve dividere anche qualsiasi suo multiplo, in particolare $(n + 1)(n - 1) = n^2 - 1$.

Sapendo che $d$ divide sia $n^2 + 3$ sia $n^2 - 1$, per la proprietà distributiva della divisibilità $d$ deve dividere anche la loro differenza:

$$
(n^2 + 3) - (n^2 - 1) = 4
$$

Di conseguenza, $d$ può essere soltanto uno dei divisori naturali di $4$, ovvero $d \in \{1, 2, 4\}$.
Il massimo valore possibile per il massimo comune divisore è quindi $4$.

Affinché sia $d = 4$, il numero $4$ deve dividere $n + 1$. Infatti, se $4$ divide $n + 1$, esso dividerà anche $(n + 1)(n - 1)$, e poiché $4$ divide se stesso, dividerà la somma $(n + 1)(n - 1) + 4 = n^2 + 3$.

Pertanto, il massimo comune divisore assume il valore massimo $4$ se e solo se $n + 1$ è un multiplo di $4$, cioè per tutti i numeri naturali della forma:

$$
n = 4k + 3 \quad \text{con } k \in \mathbb{N}
$$

(ovvero per i numeri naturali che, divisi per $4$, danno resto $3$, come $3, 7, 11, 15, \dots$).
