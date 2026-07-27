---
year: 5
macro_area: "Calcolo Differenziale"
topic: "Teorema di Lagrange"
difficulty: 2
ai_generated: true
tags:
  - "Teorema di Lagrange"
  - "Teoremi del calcolo differenziale"
  - "Derivate"
---
# Problem Text
Verificare le ipotesi del Teorema di Lagrange per la funzione

$$
f(x) = x^3 - 3x
$$

nell'intervallo $[0, 2]$ e determinare il valore del punto $c \in (0, 2)$ la cui esistenza è garantita dal teorema.

# Solution
1. **Verifica delle ipotesi**: La funzione $f(x) = x^3 - 3x$ è una funzione polinomiale, pertanto è continua nell'intervallo chiuso $[0, 2]$ e derivabile nell'intervallo aperto $(0, 2)$. Le ipotesi del Teorema di Lagrange sono quindi pienamente soddisfatte.

2. **Calcolo dei valori della funzione agli estremi**:

$$
f(0) = 0^3 - 3(0) = 0
$$

$$
f(2) = 2^3 - 3(2) = 8 - 6 = 2
$$

3. **Calcolo del rapporto incrementale**:

$$
\frac{f(2) - f(0)}{2 - 0} = \frac{2 - 0}{2} = 1
$$

4. **Calcolo della derivata prima**:

$$
f'(x) = 3x^2 - 3
$$

5. **Applicazione della tesi del teorema**: Il Teorema di Lagrange garantisce l'esistenza di almeno un punto $c \in (0, 2)$ tale che $f'(c) = \frac{f(2) - f(0)}{2 - 0}$. Imponendo l'equazione:

$$
3c^2 - 3 = 1 \implies 3c^2 = 4 \implies c^2 = \frac{4}{3}
$$

6. **Determinazione del punto $c$**: Risolvendo l'equazione pura di secondo grado si ottiene $c = \pm \frac{2}{\sqrt{3}} = \pm \frac{2\sqrt{3}}{3}$. Poiché il teorema richiede $c \in (0, 2)$, l'unica soluzione accettabile è:

$$
c = \frac{2\sqrt{3}}{3} \approx 1{,}15
$$
