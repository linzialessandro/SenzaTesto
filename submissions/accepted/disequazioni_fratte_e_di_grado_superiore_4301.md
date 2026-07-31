---
year: 4
macro_area: "Algebra"
topic: "Disequazioni fratte e di grado superiore"
difficulty: 5
ai_generated: true
tags:
  - "Disequazioni fratte"
  - "Disequazioni parametriche"
  - "Fattorizzazione"
  - "Metodo dei segni"
---
# Problem Text
Determinare tutti i valori del parametro reale $k$ per i quali l'insieme delle soluzioni $S$ della disequazione razionale fratta

$$
\frac{x^3 - kx^2 - 4x + 4k}{x^2 + (k-2)x - 2k} \le 0
$$

contiene l'intervallo aperto $]-1, 1[$.

# Solution
Scomponiamo in fattori il numeratore e il denominatore tramite raccoglimento parziale:
- Numeratore: $N(x) = x^2(x-k) - 4(x-k) = (x^2-4)(x-k) = (x-2)(x+2)(x-k)$.
- Denominatore: $D(x) = x(x-2) + k(x-2) = (x-2)(x+k)$.

Le condizioni di esistenza (C.E.) impongono $D(x) \neq 0$, ovvero $x \neq 2$ e $x \neq -k$.

Per $x \notin \{2, -k\}$, semplifichiamo il fattore comune $(x-2)$:

$$
\frac{(x+2)(x-k)}{x+k} \le 0
$$

Affinché $]-1, 1[ \, \subseteq S$, ogni $x \in ]-1, 1[$ deve appartenere al dominio ed essere soluzione.

1. **Condizione sul dominio:**
La singolarità $x = -k$ non deve appartenere a $]-1, 1[$, ovvero $-k \le -1 \lor -k \ge 1$, che equivale a $|k| \ge 1$. Il valore $x = 2$ è già esterno a $]-1, 1[$.

2. **Studio del segno per $|k| \ge 1$:**
Per ogni $x \in ]-1, 1[$, si ha $x > -2$, quindi il fattore $(x+2)$ è sempre positivo.
- Se $k \ge 1$: si ha $-k \le -1$. Per ogni $x \in ]-1, 1[$ risulta $x < k \implies x-k < 0$ e $x > -k \implies x+k > 0$. Il segno della frazione è:

$$
\frac{(+)(-)}{(+)} = - < 0
$$

- Se $k \le -1$: si ha $-k \ge 1$. Per ogni $x \in ]-1, 1[$ risulta $x > k \implies x-k > 0$ e $x < -k \implies x+k < 0$. Il segno della frazione è:

$$
\frac{(+)(+)}{(-)} = - < 0
$$

In entrambi i casi, la disequazione è verificata per tutti gli $x \in ]-1, 1[$.

**Conclusione:** L'intervallo $]-1, 1[$ è contenuto in $S$ se e solo se $k \le -1 \lor k \ge 1$ (ovvero $|k| \ge 1$).
