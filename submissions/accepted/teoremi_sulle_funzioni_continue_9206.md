---
year: 5
macro_area: "Analisi Matematica"
topic: "Teoremi sulle funzioni continue"
difficulty: 2
tags:
  - "limiti"
  - "funzioni continue"
  - "teorema degli zeri"
  - "analisi matematica"
  - "quinto anno"
ai_generated: true
---
# Problem Text
Dimostrare, applicando il teorema di esistenza degli zeri, che l'equazione

$$
x^3 + 3x - 1 = 0
$$

ammette almeno una soluzione reale nell'intervallo $[0, 1]$.

# Solution
La risoluzione si articola nei seguenti passaggi:

1. **Definizione della funzione**: Associamo all'equazione data la funzione reale di variabile reale:

$$
f(x) = x^3 + 3x - 1
$$

2. **Verifica della continuità**: Poiché $f(x)$ è una funzione polinomiale, essa è continua in tutto il suo dominio $\mathbb{R}$. In particolare, la funzione è continua nell'intervallo chiuso e limitato $[0, 1]$.

3. **Calcolo dei valori agli estremi**: Valutiamo la funzione negli estremi dell'intervallo $[0, 1]$:
- Per $x = 0$:

$$
f(0) = 0^3 + 3(0) - 1 = -1
$$

- Per $x = 1$:

$$
f(1) = 1^3 + 3(1) - 1 = 3
$$

4. **Verifica della discordanza dei segni**: Notiamo che i valori della funzione agli estremi hanno segno opposto:

$$
f(0) < 0 \quad \text{e} \quad f(1) > 0
$$

Il loro prodotto è quindi negativo: $f(0) \cdot f(1) < 0$.

5. **Applicazione del teorema e conclusione**: Essendo soddisfatte tutte le ipotesi del teorema di esistenza degli zeri (continuità della funzione nell'intervallo chiuso e valori di segno opposto agli estremi), esiste almeno un valore $c \in (0, 1)$ tale che:

$$
f(c) = 0 \implies c^3 + 3c - 1 = 0
$$

Ciò dimostra che l'equazione ammette almeno una soluzione reale nell'intervallo $[0, 1]$.
