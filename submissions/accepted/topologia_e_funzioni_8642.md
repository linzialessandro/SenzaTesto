---
year: 5
macro_area: "Analisi Matematica"
topic: "Topologia e Funzioni"
difficulty: 2
ai_generated: true
tags:
  - "Dominio"
  - "Parit\u00e0"
  - "Funzioni"
  - "Logaritmi"
---
# Problem Text
Determinare il dominio naturale $D$ della funzione

$$
f(x) = \frac{\sqrt{9 - x^2}}{\ln|x|}
$$

e stabilire se la funzione è pari, dispari o né pari né dispari.

# Solution
Per determinare il dominio naturale $D$ della funzione $f(x)$, si impongono le condizioni di esistenza relative al radice con indice pari, all'argomento del logaritmo e al denominatore:

$$
\begin{cases}
9 - x^2 \ge 0 \\
|x| > 0 \\
\ln|x| \neq 0
\end{cases}
$$

Risolvendo le singole condizioni:
1. $9 - x^2 \ge 0 \iff -3 \le x \le 3$
2. $|x| > 0 \iff x \neq 0$
3. $\ln|x| \neq 0 \iff |x| \neq 1 \iff x \neq \pm 1$

Intersecando le soluzioni si ottiene il dominio naturale $D$:

$$
D = [-3, 3] \setminus \{-1, 0, 1\} = [-3, -1) \cup (-1, 0) \cup (0, 1) \cup (1, 3]
$$

L'insieme $D$ è simmetrico rispetto all'origine: per ogni $x \in D$, si ha $-x \in D$.

Valutando $f(-x)$ per verificare la parità della funzione:

$$
f(-x) = \frac{\sqrt{9 - (-x)^2}}{\ln|-x|} = \frac{\sqrt{9 - x^2}}{\ln|x|} = f(x)
$$

Poiché $f(-x) = f(x)$ per ogni $x \in D$, la funzione $f$ è pari.
