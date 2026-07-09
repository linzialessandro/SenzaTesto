---
year: 4
macro_area: "Algebra"
topic: "Equazioni logaritmiche"
difficulty: 2
tags:
  - "logaritmi"
  - "equazioni logaritmiche"
  - "propriet\u00e0 dei logaritmi"
  - "condizioni di esistenza"
---
# Problem Text
Risolvi la seguente equazione logaritmica:

$$
\log_2(x + 3) + \log_2(x) = 2
$$

# Solution
1. **Condizioni di Esistenza (C.E.):**
Gli argomenti dei logaritmi devono essere strettamente positivi per garantire la realtà delle funzioni logaritmiche:

$$
\begin{cases}
x + 3 > 0 \\
x > 0
\end{cases}
\implies
\begin{cases}
x > -3 \\
x > 0
\end{cases}
\implies
x > 0
$$

Le condizioni di esistenza sono quindi definite dall'intervallo $C.E. = (0, +\infty)$.

2. **Applicazione delle proprietà dei logaritmi:**
Utilizzando la proprietà della somma di logaritmi con la stessa base, $\log_a(A) + \log_a(B) = \log_a(A \cdot B)$, possiamo scrivere:

$$
\log_2[x(x + 3)] = 2
$$

3. **Passaggio alla forma algebrica:**
Applichiamo la definizione di logaritmo per eliminare l'operatore logaritmico:

$$
x(x + 3) = 2^2
$$

$$
x^2 + 3x = 4
$$

4. **Risoluzione dell'equazione di secondo grado:**
Riconduciamo l'equazione in forma canonica $ax^2 + bx + c = 0$:

$$
x^2 + 3x - 4 = 0
$$

Fattorizziamo l'equazione cercando due numeri la cui somma sia $+3$ e il cui prodotto sia $-4$:

$$
(x + 4)(x - 1) = 0
$$

Da cui otteniamo i due possibili valori per $x$:

$$
x_1 = -4, \quad x_2 = 1
$$

5. **Verifica dell'accettabilità:**
Confrontiamo le soluzioni trovate con le condizioni di esistenza imposte al passo 1 ($x > 0$):
* $x_1 = -4$: non è accettabile poiché $-4 \notin (0, +\infty)$.
* $x_2 = 1$: è accettabile poiché $1 \in (0, +\infty)$.

L'unica soluzione dell'equazione è:

$$
x = 1
$$
