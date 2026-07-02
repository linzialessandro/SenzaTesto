---
year: 4
macro_area: Esponenziali e logaritmi
topic: Equazioni esponenziali
difficulty: 3
tags:
  - esponenziali
  - sostituzione
---
# Problem Text

Risolvere la seguente equazione esponenziale:
$$
4^x - 3 \cdot 2^{x+1} + 8 = 0
$$

# Solution

**1. Semplificazione dell'equazione:**
L'equazione contiene potenze che possono essere ricondotte alla stessa base $2$.
Notiamo che $4^x = (2^2)^x = (2^x)^2$.
Inoltre, per le proprietà delle potenze, $2^{x+1} = 2^x \cdot 2^1 = 2 \cdot 2^x$.

Sostituendo queste espressioni nell'equazione originale otteniamo:
$$
(2^x)^2 - 3 \cdot (2 \cdot 2^x) + 8 = 0
$$
$$
(2^x)^2 - 6 \cdot 2^x + 8 = 0
$$

**2. Cambio di variabile:**
Introduciamo la variabile ausiliaria $t = 2^x$. L'equazione diventa una normale equazione di secondo grado in $t$:
$$
t^2 - 6t + 8 = 0
$$

**3. Risoluzione dell'equazione in $t$:**
È un trinomio notevole; cerchiamo due numeri con somma $-6$ e prodotto $8$. Questi numeri sono $-2$ e $-4$.
L'equazione si scompone come:
$$
(t - 2)(t - 4) = 0
$$
Le cui soluzioni sono:
$t_1 = 2$ e $t_2 = 4$.

**4. Ritorno alla variabile originale $x$:**
Ora ricordiamo che $t = 2^x$, quindi dobbiamo risolvere le due equazioni esponenziali elementari derivate:

Per $t_1 = 2$:
$$
2^x = 2 \implies 2^x = 2^1 \implies x = 1
$$

Per $t_2 = 4$:
$$
2^x = 4 \implies 2^x = 2^2 \implies x = 2
$$

**Soluzione:**
Le soluzioni dell'equazione esponenziale sono $x = 1 \lor x = 2$.
