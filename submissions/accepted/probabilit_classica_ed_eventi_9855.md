---
year: 2
macro_area: "Calcolo delle Probabilit\u00e0"
topic: "Probabilit\u00e0 classica ed eventi"
difficulty: 2
ai_generated: true
tags:
  - "probabilita-classica"
  - "eventi-aleatori"
  - "inclusione-esclusione"
  - "insieme-casi-favorevoli"
---
# Problem Text
Un sacchetto contiene $30$ palline numerate da $1$ a $30$. Calcola la probabilità che, estraendo a caso una sola pallina, il numero ottenuto sia un multiplo di $4$ oppure un numero pari maggiore di $18$.

# Solution
Per calcolare la probabilità classica dell'evento aleatorio $E$, utilizziamo la formula:

$$
P(E) = \frac{\text{numero di casi favorevoli}}{\text{numero di casi possibili}}
$$

Il numero totale di casi possibili è $n = 30$, poiché tutte le palline hanno la stessa probabilità di essere estratte.

Definiamo i due sottoinsiemi corrispondenti alle condizioni del problema:

1. Sia $A$ l'insieme dei numeri multipli di $4$ compresi tra $1$ e $30$:

$$
A = \{4, 8, 12, 16, 20, 24, 28\}
$$

Il numero di elementi di $A$ è $|A| = 7$.

2. Sia $B$ l'insieme dei numeri pari maggiori di $18$ compresi tra $1$ e $30$:

$$
B = \{20, 22, 24, 26, 28, 30\}
$$

Il numero di elementi di $B$ è $|B| = 6$.

I due insiemi non sono disgiunti. L'intersezione $A \cap B$ contiene i numeri che soddisfano contemporaneamente entrambe le condizioni:

$$
A \cap B = \{20, 24, 28\}
$$

Il numero di elementi dell'intersezione è $|A \cap B| = 3$.

L'evento favorevole corrisponde all'unione dei due insiemi $A \cup B$. Per il principio di inclusione-esclusione, il numero di casi favorevoli $f$ è:

$$
f = |A \cup B| = |A| + |B| - |A \cap B|
$$

$$
f = 7 + 6 - 3 = 10
$$

I casi favorevoli sono quindi $10$: $\{4, 8, 12, 16, 20, 22, 24, 26, 28, 30\}$.

Calcoliamo infine la probabilità $P(E)$:

$$
P(E) = \frac{10}{30} = \frac{1}{3}
$$

La probabilità richiesta è $\frac{1}{3}$ (pari a circa $33{,}33\%$).
