---
year: 4
macro_area: "Calcolo Combinatorio e Probabilit\u00e0"
topic: "Calcolo Combinatorio"
difficulty: 4
ai_generated: true
tags:
  - "combinazioni semplici"
  - "modello combinatorio"
  - "bigiezione"
  - "coefficiente binomiale"
  - "equazioni combinatorie"
---
# Problem Text
Si consideri l'insieme dei primi $n$ numeri naturali $S = \{1, 2, 3, \dots, n\}$, con $n \ge 5$. Determina il valore di $n$ per cui il numero dei sottoinsiemi di $5$ elementi distinti estratti da $S$ che non contengono alcun paio di numeri interi consecutivi sia pari a $126$.

# Solution
Sia $S = \{1, 2, 3, \dots, n\}$ con $n \ge 5$. Consideriamo un generico sottoinsieme di $5$ elementi ordinati in modo strettamente crescente:

$$
A = \{a_1, a_2, a_3, a_4, a_5\} \quad \text{con } 1 \le a_1 < a_2 < a_3 < a_4 < a_5 \le n
$$

La condizione che $A$ non contenga numeri consecutivi equivale a richiedere la disuguaglianza stretta $a_{k+1} - a_k \ge 2$ per ogni $k \in \{1, 2, 3, 4\}$.

Per contare tali sottoinsiemi, impostiamo il modello combinatorio mediante la trasformazione biunivoca:

$$
b_1 = a_1, \quad b_2 = a_2 - 1, \quad b_3 = a_3 - 2, \quad b_4 = a_4 - 3, \quad b_5 = a_5 - 4
$$

Poiché $a_{k+1} - a_k \ge 2$, le nuove variabili soddisfano la catena di disuguaglianze:

$$
1 \le b_1 < b_2 < b_3 < b_4 < b_5 \le n - 4
$$

La scelta di $5$ elementi non consecutivi da $\{1, \dots, n\}$ corrisponde quindi in modo biunivoco alla scelta di $5$ elementi distinti qualsiasi dall'insieme $\{1, 2, \dots, n - 4\}$. Il numero di tali scelte è dato dalle combinazioni semplici:

$$
C_{n-4, 5} = \binom{n-4}{5}
$$

Imponiamo che questo valore sia uguale a $126$:

$$
\binom{n-4}{5} = 126
$$

Ponendo $m = n - 4$, l'equazione si scrive:

$$
\frac{m(m-1)(m-2)(m-3)(m-4)}{5!} = 126
$$

$$
m(m-1)(m-2)(m-3)(m-4) = 126 \cdot 120 = 15120
$$

Notando che $15120 = 9 \cdot 8 \cdot 7 \cdot 6 \cdot 5$, il valore dell'incognita ausiliaria è $m = 9$.

Infine, ricaviamo $n$:

$$
n - 4 = 9 \implies n = 13
$$
