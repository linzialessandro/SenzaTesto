---
year: 4
macro_area: "Calcolo delle Probabilit\u00e0"
topic: "Esempi di calcolo della probabilit\u00e0 classica con l'uso del calcolo combinatorio"
difficulty: 2
tags:
  - "probabilit\u00e0 classica"
  - "combinazioni"
  - "somma pari"
  - "estrazioni senza reinserimento"
---
# Problem Text
Un'urna contiene 9 palline numerate da 1 a 9. Si estraggono contemporaneamente 3 palline dall'urna. Calcola la probabilità che la somma dei tre numeri estratti sia un numero pari.

# Solution
Per risolvere il problema applichiamo la definizione classica di probabilità:

$$
P(E) = \frac{\text{Numero di casi favorevoli}}{\text{Numero di casi possibili}}
$$

**1. Calcolo dei casi possibili**
L'estrazione contemporanea di 3 palline da un gruppo di 9 corrisponde a calcolare le combinazioni semplici di 9 elementi presi a 3 a 3:

$$
C_{9,3} = \binom{9}{3} = \frac{9 \times 8 \times 7}{3 \times 2 \times 1} = 84
$$

Ci sono quindi 84 terne possibili non ordinate.

**2. Calcolo dei casi favorevoli**
La somma di tre numeri interi è pari se e solo se si verifica uno dei due seguenti casi mutuamente esclusivi:
* **Caso A (Tutti e tre i numeri sono pari):** Nell'urna ci sono 4 numeri pari ($\{2, 4, 6, 8\}$). Il numero di modi per sceglierne 3 è dato da:

$$
C_{4,3} = \binom{4}{3} = 4
$$

* **Caso B (Un numero è pari e due sono dispari):** Nell'urna ci sono 4 numeri pari e 5 numeri dispari ($\{1, 3, 5, 7, 9\}$). Il numero di modi per scegliere 1 numero pari e 2 numeri dispari è:

$$
C_{4,1} \times C_{5,2} = \binom{4}{1} \times \binom{5}{2} = 4 \times 10 = 40
$$

Il numero totale di casi favorevoli è la somma dei casi favorevoli dei due scenari:

$$
\text{Casi favorevoli} = 4 + 40 = 44
$$

**3. Calcolo della probabilità**
Sostituendo i valori nella formula della probabilità classica, otteniamo:

$$
P(E) = \frac{44}{84} = \frac{11}{21}
$$
