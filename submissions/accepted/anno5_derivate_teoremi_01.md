---
year: 5
macro_area: Teoremi del calcolo differenziale
topic: Teorema di Lagrange
difficulty: 4
tags:
  - derivate
  - lagrange
  - funzioni
---
# Problem Text

Data la funzione $f(x) = x^3 - 3x^2 + 2x$, verificare se nell'intervallo $[0, 3]$ sono soddisfatte le ipotesi del teorema di Lagrange. In caso affermativo, determinare il punto o i punti $c$ di cui il teorema garantisce l'esistenza.

# Solution

Il teorema di Lagrange afferma che se una funzione $f(x)$ è continua in un intervallo chiuso $[a, b]$ e derivabile nell'intervallo aperto $(a, b)$, allora esiste almeno un punto $c \in (a, b)$ tale che:
$$
f'(c) = \frac{f(b) - f(a)}{b - a}
$$

**1. Verifica delle ipotesi:**
La funzione $f(x) = x^3 - 3x^2 + 2x$ è una funzione polinomiale. I polinomi sono funzioni continue e derivabili su tutto l'asse reale $\mathbb{R}$. Pertanto, $f(x)$ è sicuramente continua in $[0, 3]$ e derivabile in $(0, 3)$. Le ipotesi del teorema sono verificate.

**2. Calcolo dei valori agli estremi dell'intervallo:**
Calcoliamo il valore della funzione in $x=0$ e $x=3$:
$$
f(0) = 0^3 - 3(0)^2 + 2(0) = 0
$$
$$
f(3) = 3^3 - 3(3)^2 + 2(3) = 27 - 27 + 6 = 6
$$

**3. Calcolo del rapporto incrementale (il coefficiente della secante):**
$$
\frac{f(3) - f(0)}{3 - 0} = \frac{6 - 0}{3} = \frac{6}{3} = 2
$$
Dobbiamo trovare il punto $c$ tale che $f'(c) = 2$.

**4. Calcolo della derivata prima:**
Deriviamo la funzione $f(x)$:
$$
f'(x) = 3x^2 - 6x + 2
$$

**5. Determinazione del punto $c$:**
Imponiamo $f'(c) = 2$:
$$
3c^2 - 6c + 2 = 2
$$
$$
3c^2 - 6c = 0 \implies 3c(c - 2) = 0
$$
Le soluzioni di questa equazione sono:
$c_1 = 0$
$c_2 = 2$

**6. Accettabilità delle soluzioni:**
Il teorema garantisce l'esistenza di un punto $c$ *all'interno* dell'intervallo aperto $(0, 3)$.
Il punto $c_1 = 0$ coincide con un estremo dell'intervallo e quindi non rientra in $(0, 3)$, è da scartare.
Il punto $c_2 = 2$ appartiene all'intervallo $(0, 3)$, quindi è il punto cercato.

**Soluzione:** Le ipotesi del teorema sono soddisfatte e il punto cercato è $c = 2$.
