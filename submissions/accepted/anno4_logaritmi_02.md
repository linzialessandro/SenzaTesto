---
year: 4
macro_area: Esponenziali e logaritmi
topic: Disequazioni logaritmiche
difficulty: 4
tags:
  - logaritmi
  - disequazioni
  - dominio
---
# Problem Text

Risolvere la seguente disequazione logaritmica:
$$
\log_2(x - 3) + \log_2(x + 1) \le 5
$$

# Solution

**1. Condizioni di Esistenza (C.E.):**
Gli argomenti dei logaritmi devono essere strettamente positivi. Impostiamo il sistema delle condizioni:
$$
\begin{cases}
x - 3 > 0 \\
x + 1 > 0
\end{cases}
\implies
\begin{cases}
x > 3 \\
x > -1
\end{cases}
$$
Intersecando, otteniamo $x > 3$. Questo è il dominio su cui cercare la soluzione.

**2. Trasformazione della disequazione:**
Applichiamo la proprietà della somma di logaritmi ($\log_a b + \log_a c = \log_a(bc)$) al primo membro:
$$
\log_2[(x - 3)(x + 1)] \le 5
$$
Per poter confrontare, esprimiamo anche il 5 come logaritmo in base 2. Sapendo che $5 = \log_2(2^5) = \log_2(32)$:
$$
\log_2(x^2 - 2x - 3) \le \log_2(32)
$$

**3. Risoluzione della disequazione esponenziale associata:**
Poiché la base del logaritmo ($a=2$) è maggiore di 1, la funzione logaritmica è strettamente crescente. Possiamo passare agli argomenti mantenendo inalterato il verso della disuguaglianza:
$$
x^2 - 2x - 3 \le 32
$$
$$
x^2 - 2x - 35 \le 0
$$

**4. Studio del segno della disequazione di secondo grado:**
Troviamo le radici dell'equazione associata $x^2 - 2x - 35 = 0$.
Cerchiamo due numeri la cui somma è $2$ e il prodotto è $-35$. Sono $7$ e $-5$.
Le soluzioni sono $x_1 = 7$ e $x_2 = -5$.
La disequazione $x^2 - 2x - 35 \le 0$ è verificata nell'intervallo interno alle radici:
$$
-5 \le x \le 7
$$

**5. Intersezione con il Dominio:**
Dobbiamo mettere a sistema le soluzioni della disequazione con le Condizioni di Esistenza trovate al passo 1 ($x > 3$):
$$
\begin{cases}
-5 \le x \le 7 \\
x > 3
\end{cases}
$$
Disegnando l'intersezione sull'asse reale, i valori comuni si trovano tra $3$ e $7$.

**Soluzione:** L'insieme delle soluzioni è $3 < x \le 7$, ovvero $x \in (3, 7]$.
