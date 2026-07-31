---
year: 5
macro_area: "Analisi Matematica"
topic: "Teoremi del calcolo differenziale"
difficulty: 4
ai_generated: true
tags:
  - "Teorema di Lagrange"
  - "Continuit\u00e0 e derivabilit\u00e0"
  - "Funzioni a tratti"
---
# Problem Text
Si consideri la funzione definita nell'intervallo $[0, e]$:

$$
f(x) = \begin{cases} a x^2 + b x + 1 & \text{se } 0 \le x \le 1 \\ \ln x + x & \text{se } 1 < x \le e \end{cases}
$$

Determinare i valori dei parametri reali $a$ e $b$ affinché $f(x)$ soddisfi le ipotesi del Teorema di Lagrange in $[0, e]$ e individuare tutti i punti $c \in (0, e)$ la cui esistenza è garantita dal teorema stesso.

# Solution
**1. Condizione di continuità in $[0, e]$**
La funzione $f(x)$ è continua nei sottointervalli $[0, 1)$ e $(1, e]$. Imponiamo la continuità nel punto di raccordo $x = 1$:

$$
\lim_{x \to 1^-} f(x) = f(1) = a + b + 1
$$

$$
\lim_{x \to 1^+} f(x) = \ln(1) + 1 = 1
$$

Uguagliando i limiti sinistro e destro si ottiene:

$$
a + b + 1 = 1 \implies a + b = 0
$$

**2. Condizione di derivabilità in $(0, e)$**
Per $x \in (0, 1)$, $f'(x) = 2ax + b$. Per $x \in (1, e)$, $f'(x) = \frac{1}{x} + 1$. Imponiamo l'uguaglianza dei limiti delle derivate in $x = 1$:

$$
f'_-(1) = \lim_{x \to 1^-} (2ax + b) = 2a + b
$$

$$
f'_+(1) = \lim_{x \to 1^+} \left(\frac{1}{x} + 1\right) = 2
$$

Da cui $2a + b = 2$.

**3. Determinazione di $a$ e $b$**
Risolvendo il sistema lineare:

$$
\begin{cases} a + b = 0 \\ 2a + b = 2 \end{cases} \implies a = 2, \quad b = -2
$$

La funzione risulta quindi $f(x) = 2x^2 - 2x + 1$ per $x \in [0, 1]$.

**4. Applicazione del Teorema di Lagrange**
Essendo $f(x)$ continua in $[0, e]$ e derivabile in $(0, e)$, il Teorema di Lagrange garantisce l'esistenza di almeno un punto $c \in (0, e)$ tale che:

$$
f'(c) = \frac{f(e) - f(0)}{e - 0} = \frac{(\ln e + e) - 1}{e - 0} = \frac{1 + e - 1}{e} = 1
$$

Cerchiamo i valori di $c \in (0, e)$ per cui $f'(c) = 1$:
- Per $c \in (0, 1)$: $f'(c) = 4c - 2 = 1 \implies c = \frac{3}{4} \in (0, 1)$.
- Per $c = 1$: $f'(1) = 2 \neq 1$.
- Per $c \in (1, e)$: $f'(c) = \frac{1}{c} + 1 = 1 \implies \frac{1}{c} = 0$, che non ammette soluzioni reali.

L'unico punto garantito dal teorema è $c = \frac{3}{4}$.
