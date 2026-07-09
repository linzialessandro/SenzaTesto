---
year: 4
macro_area: "Calcolo Combinatorio"
topic: "Coefficiente binomiale ed equazioni nei numeri naturali"
difficulty: 2
tags:
  - "Calcolo Combinatorio"
  - "Coefficiente Binomiale"
  - "Equazioni Binomiali"
  - "Liceo Scientifico"
---
# Problem Text
Determinare il valore del numero naturale $n$ (con $n \ge 2$) che soddisfa la seguente equazione:

$$
\binom{n}{n-2} = 15
$$

# Solution
L'equazione si risolve nei seguenti passi:

1. **Applicazione della proprietà di simmetria**: Ricordando la proprietà di simmetria dei coefficienti binomiali $\binom{n}{k} = \binom{n}{n-k}$, possiamo riscrivere l'equazione sostituendo $k = n-2$:

$$
\binom{n}{n-2} = \binom{n}{2}
$$

Pertanto, l'equazione diventa:

$$
\binom{n}{2} = 15
$$

2. **Esplicitazione del coefficiente binomiale**: Utilizziamo la definizione algebrica di coefficiente binomiale per il caso $k = 2$:

$$
\binom{n}{2} = \frac{n(n-1)}{2}
$$

Sostituendo nell'equazione otteniamo:

$$
\frac{n(n-1)}{2} = 15
$$

3. **Formulazione dell'equazione di secondo grado**: Moltiplichiamo entrambi i membri per $2$ per eliminare il denominatore:

$$
n(n-1) = 30
$$

Sviluppiamo il prodotto a sinistra e portiamo tutti i termini a sinistra dell'uguale:

$$
n^2 - n - 30 = 0
$$

4. **Risoluzione dell'equazione**: Scomponiamo il trinomio speciale cercando due numeri la cui somma sia $-1$ e il cui prodotto sia $-30$. Tali numeri sono $-6$ e $+5$:

$$
(n - 6)(n + 5) = 0
$$

Questo fornisce due soluzioni:

$$
n_1 = 6, \quad n_2 = -5
$$

5. **Verifica delle condizioni di esistenza**: Per definizione, il coefficiente binomiale è definito solo per $n \in \mathbb{N}$ con $n \ge 2$. Di conseguenza, la soluzione negativa $n_2 = -5$ non è accettabile.

L'unica soluzione accettata è quindi:

$$
n = 6
$$
