---
year: 4
macro_area: Esponenziali e logaritmi
topic: equazioni
difficulty: 4
tags:
  - equazione esponenziale
  - sostituzione
---
# Problem Text
Risolvi rigorosamente la seguente equazione esponenziale:
$$
4^x - 3 \cdot 2^{x+1} + 8 = 0
$$

# Solution
L'equazione in questione contiene potenze le cui basi sono matematicamente collegate fra loro (infatti $4 = 2^2$). Utilizziamo le proprietà delle potenze per riscrivere tutti i termini utilizzando la medesima base $2$.

Ricordiamo nello specifico che:
1. $4^x = (2^2)^x = 2^{2x} = (2^x)^2$
2. $2^{x+1} = 2^x \cdot 2^1 = 2 \cdot 2^x$

Sostituiamo queste due trasformazioni formali nell'equazione originaria:
$$
(2^x)^2 - 3 \cdot (2 \cdot 2^x) + 8 = 0
$$
$$
(2^x)^2 - 6 \cdot 2^x + 8 = 0
$$

Per semplificare nettamente la risoluzione dell'esercizio, effettuiamo un cambio di variabile. Poniamo la sostituzione $t = 2^x$. L'equazione si converte in una normale equazione di secondo grado nell'incognita $t$:
$$
t^2 - 6t + 8 = 0
$$

Cerchiamo due numeri interi la cui somma dia il coefficiente di primo grado $-6$ e il cui prodotto dia il termine noto $8$. Questi numeri sono chiaramente $-4$ e $-2$.
Possiamo quindi fattorizzare il trinomio e risolvere l'equazione:
$$
(t - 4)(t - 2) = 0
$$
Le due soluzioni reali per $t$ sono:
$$
t_1 = 4 \quad \text{e} \quad t_2 = 2
$$

A questo punto, è fondamentale effettuare il passaggio inverso e ritornare alla variabile originale $x$, ricordando la posizione iniziale $t = 2^x$:

**Caso 1: $t = 4$**
Impostiamo l'uguaglianza:
$$
2^x = 4 \implies 2^x = 2^2 \implies x = 2
$$

**Caso 2: $t = 2$**
Impostiamo l'uguaglianza:
$$
2^x = 2 \implies 2^x = 2^1 \implies x = 1
$$

Concludendo, le soluzioni dell'equazione esponenziale proposta sono:
$$
x_1 = 1, \quad x_2 = 2
$$
