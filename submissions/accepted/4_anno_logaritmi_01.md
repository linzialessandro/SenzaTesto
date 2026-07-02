---
year: 4
macro_area: Algebra
topic: logaritmi
difficulty: 2
tags:
  - equazioni logaritmiche
  - proprietà dei logaritmi
---
# Problem Text
Risolvi la seguente equazione logaritmica:
$$
\log_2(x - 1) + \log_2(x + 2) = 2
$$

# Solution
**1. Condizioni di esistenza (C.E.):**
Gli argomenti dei logaritmi devono essere strettamente positivi:
$$
\begin{cases}
x - 1 > 0 \\
x + 2 > 0
\end{cases}
\implies
\begin{cases}
x > 1 \\
x > -2
\end{cases}
$$
La condizione di esistenza comune è $x > 1$.

**2. Applicazione delle proprietà dei logaritmi:**
La somma di logaritmi con la stessa base è il logaritmo del prodotto degli argomenti:
$$
\log_2[(x - 1)(x + 2)] = 2
$$
$$
\log_2(x^2 + 2x - x - 2) = 2
$$
$$
\log_2(x^2 + x - 2) = 2
$$

**3. Trasformazione in equazione algebrica:**
Utilizziamo la definizione di logaritmo ($\log_a(b) = c \iff a^c = b$):
$$
x^2 + x - 2 = 2^2
$$
$$
x^2 + x - 2 = 4
$$
$$
x^2 + x - 6 = 0
$$

**4. Risoluzione dell'equazione di secondo grado:**
Calcoliamo le radici:
$$
x_{1,2} = \frac{-1 \pm \sqrt{1 - 4(1)(-6)}}{2} = \frac{-1 \pm \sqrt{25}}{2} = \frac{-1 \pm 5}{2}
$$
Le due soluzioni sono:
$x_1 = \frac{4}{2} = 2$
$x_2 = \frac{-6}{2} = -3$

**5. Verifica con le C.E.:**
Dobbiamo accettare solo le soluzioni conformi alle C.E. ($x > 1$):
$x = 2$ è accettabile.
$x = -3$ non è accettabile.

L'unica soluzione dell'equazione è $x = 2$.
