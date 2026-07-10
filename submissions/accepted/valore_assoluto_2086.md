---
year: 3
macro_area: "Algebra"
topic: "Valore assoluto"
difficulty: 3
tags:
  - "valore assoluto"
  - "disequazioni con valore assoluto"
  - "sistemi di disequazioni"
  - "disequazioni di secondo grado"
  - "terzo anno"
ai_generated: true
---
# Problem Text
Risolvere la seguente disequazione con valore assoluto:

$$
|x^2 - 4| \le x + 2
$$

# Solution
La disequazione si presenta nella forma $|A(x)| \le B(x)$, con $A(x) = x^2 - 4$ e $B(x) = x + 2$. 

Per le proprietà del valore assoluto, una disequazione di questo tipo equivale al seguente sistema di disequazioni lineari/quadratiche:

$$
-B(x) \le A(x) \le B(x) \implies \begin{cases} A(x) \le B(x) \\ A(x) \ge -B(x) \end{cases}
$$

Sostituiamo le espressioni del nostro problema nel sistema:

$$
\begin{cases}
x^2 - 4 \le x + 2 \\
x^2 - 4 \ge -(x + 2)
\end{cases}
$$

Risolviamo separatamente le due disequazioni del sistema.

---

### 1. Risoluzione della prima disequazione

La prima disequazione è:

$$
x^2 - 4 \le x + 2
$$

Portando tutti i termini al primo membro, otteniamo una disequazione di secondo grado in forma normale:

$$
x^2 - x - 6 \le 0
$$

Troviamo le radici dell'equazione di secondo grado associata $x^2 - x - 6 = 0$:

$$
(x - 3)(x + 2) = 0 \implies x_1 = -2, \quad x_2 = 3
$$

Poiché il coefficiente del termine di secondo grado è positivo ($1 > 0$) e il segno richiesto è minore o uguale a zero ($\le 0$), la disequazione è soddisfatta per valori interni all'intervallo delle radici:

$$
S_1 = [ -2, 3 ] \implies -2 \le x \le 3
$$

---

### 2. Risoluzione della seconda disequazione

La seconda disequazione è:

$$
x^2 - 4 \ge -(x + 2)
$$

Sviluppiamo il secondo membro:

$$
x^2 - 4 \ge -x - 2
$$

Portiamo tutti i termini al primo membro per scriverla in forma normale:

$$
x^2 + x - 2 \ge 0
$$

Troviamo le radici dell'equazione associata $x^2 + x - 2 = 0$:

$$
(x + 2)(x - 1) = 0 \implies x_3 = -2, \quad x_4 = 1
$$

Poiché il coefficiente del termine di secondo grado è positivo ($1 > 0$) e il segno richiesto è maggiore o uguale a zero ($\ge 0$), la disequazione è soddisfatta per valori esterni all'intervallo delle radici:

$$
S_2 = ( -\infty, -2 ] \cup [ 1, +\infty ) \implies x \le -2 \quad \text{oppure} \quad x \ge 1
$$

---

### 3. Intersezione delle soluzioni (Risoluzione del sistema)

La soluzione finale del sistema di disequazioni è l'intersezione tra l'insieme delle soluzioni della prima disequazione $S_1$ e della seconda disequazione $S_2$:

$$
S = S_1 \cap S_2
$$

Rappresentiamo graficamente gli intervalli per trovare l'intersezione:

1. Per $S_1$: l'intervallo è $[-2, 3]$.
2. Per $S_2$: gli intervalli sono $x \le -2$ e $x \ge 1$.

Notiamo i punti di sovrapposizione delle linee nel grafico degli intervalli:

- In $x = -2$, entrambi gli insiemi contengono il punto (infatti $-2 \in S_1$ e $-2 \in S_2$). Quindi, $x = -2$ è una soluzione isolata.
- Tra $-2$ e $1$ (escluso il punto $1$), la seconda disequazione non è verificata.
- Nell'intervallo $[1, 3]$, entrambe le disequazioni sono verificate contemporaneamente.

Pertanto, l'insieme delle soluzioni è composto dal punto isolato $x = -2$ e dall'intervallo $[1, 3]$:

$$
S = \{ -2 \} \cup [ 1, 3 ]
$$

Scritto sotto forma di disuguaglianza, la soluzione finale è:

$$
x = -2 \quad \text{oppure} \quad 1 \le x \le 3
$$
