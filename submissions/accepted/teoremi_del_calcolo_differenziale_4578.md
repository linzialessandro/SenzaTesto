---
year: 5
macro_area: "Analisi Matematica"
topic: "Teoremi del calcolo differenziale"
difficulty: 2
tags:
  - "Teorema di Lagrange"
  - "Calcolo differenziale"
  - "Derivate"
  - "Analisi Matematica"
---
# Problem Text
Data la funzione $f(x) = x^3 - 3x$, verificare se sono soddisfatte le ipotesi del teorema di Lagrange nell'intervallo $[0, 2]$ e determinare i valori del punto $c \in (0, 2)$ garantiti dal teorema.

# Solution
Le ipotesi del teorema di Lagrange richiedono che la funzione sia continua nell'intervallo chiuso $[a, b]$ e derivabile nell'intervallo aperto $(a, b)$.

**1. Verifica delle ipotesi**
*   **Continuità**: La funzione $f(x) = x^3 - 3x$ è polinomiale, quindi è continua in tutto $\mathbb{R}$ e, in particolare, nell'intervallo chiuso $[0, 2]$.
*   **Derivabilità**: La derivata della funzione è:

$$
f'(x) = 3x^2 - 3
$$

Essendo un polinomio, la funzione è derivabile in ogni punto di $\mathbb{R}$ e, in particolare, nell'intervallo aperto $(0, 2)$.

Le ipotesi del teorema sono pertanto soddisfatte.

**2. Calcolo dei valori agli estremi e del rapporto incrementale**
Calcoliamo il valore di $f(x)$ nei punti estremi dell'intervallo $a = 0$ e $b = 2$:

$$
f(0) = 0^3 - 3(0) = 0
$$

$$
f(2) = 2^3 - 3(2) = 8 - 6 = 2
$$

Il rapporto incrementale è:

$$
\frac{f(2) - f(0)}{2 - 0} = \frac{2 - 0}{2 - 0} = 1
$$

**3. Determinazione del punto $c$**
Il teorema di Lagrange garantisce che esista almeno un punto $c \in (0, 2)$ tale che:

$$
f'(c) = 1
$$

Sostituendo l'espressione della derivata, impostiamo l'equazione:

$$
3c^2 - 3 = 1
$$

$$
3c^2 = 4 \implies c^2 = \frac{4}{3}
$$

Risolvendo l'equazione rispetto a $c$, otteniamo:

$$
c = \pm \sqrt{\frac{4}{3}} = \pm \frac{2\sqrt{3}}{3}
$$

**4. Verifica dell'appartenenza all'intervallo**
Dobbiamo selezionare i valori che giacciono all'interno dell'intervallo aperto $(0, 2)$:
*   Il valore negativo $c_1 = -\frac{2\sqrt{3}}{3} \approx -1{,}15$ non appartiene all'intervallo $(0, 2)$.
*   Il valore positivo $c_2 = \frac{2\sqrt{3}}{3} \approx 1{,}15$ appartiene all'intervallo $(0, 2)$.

Il punto cercato è quindi:

$$
c = \frac{2\sqrt{3}}{3}
$$
