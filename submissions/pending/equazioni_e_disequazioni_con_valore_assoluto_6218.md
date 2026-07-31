---
year: 4
macro_area: "Algebra"
topic: "Equazioni e disequazioni con valore assoluto"
difficulty: 5
ai_generated: true
tags:
  - "valore assoluto"
  - "equazioni parametriche"
  - "metodo grafico"
  - "traslazione"
---
# Problem Text
Determinare, al variare del parametro reale $k$, il numero di soluzioni reali dell'equazione:

$$
\left| |x + 2| - |x - 4| \right| = x^2 - 2x + k
$$

# Solution
Completando il quadrato al secondo membro, l'equazione si scrive nella forma:

$$
\left| |x + 2| - |x - 4| \right| = (x - 1)^2 - 1 + k
$$

Operiamo la traslazione di variabile $t = x - 1$. Poiché $x + 2 = t + 3$ e $x - 4 = t - 3$, l'equazione equivale a:

$$
\left| |t + 3| - |t - 3| \right| = t^2 - 1 + k
$$

Esplicitiamo la funzione al primo membro $h(t) = \left| |t + 3| - |t - 3| \right|$:
- per $t \le -3$: $h(t) = |(-t-3) - (-t+3)| = |-6| = 6$;
- per $-3 < t < 3$: $h(t) = |(t+3) - (-t+3)| = |2t| = 2|t|$;
- per $t \ge 3$: $h(t) = |(t+3) - (t-3)| = |6| = 6$.

Riscriviamo l'equazione isolando i termini dipendenti da $t$:

$$
t^2 - h(t) = 1 - k
$$

Sia $f(t) = t^2 - h(t)$. La funzione $f$ è pari ($f(-t) = f(t)$). Analizziamola per $t \ge 0$:
- per $0 \le t < 3$: $f(t) = t^2 - 2t = (t - 1)^2 - 1$, parabola con minimo in $t = 1$ di valore $f(1) = -1$, massimo relativo in $t = 0$ con $f(0) = 0$, e $f(3) = 3$;
- per $t \ge 3$: $f(t) = t^2 - 6$, funzione strettamente crescente da $3$ a $+\infty$.

Per simmetria rispetto all'asse $y$, il grafico di $f(t)$ presenta:
- due minimi assoluti in $t = \pm 1$ con valore $-1$;
- un massimo relativo in $t = 0$ con valore $0$;
- valore $3$ per $t = \pm 3$, oltre il quale cresce illimitatamente a $+\infty$.

Il numero di soluzioni reali equivale al numero di intersezioni tra il grafico di $y = f(t)$ e la retta orizzontale $y = 1 - k$:
- per $1 - k < -1 \iff k > 2$: $0$ soluzioni;
- per $1 - k = -1 \iff k = 2$: $2$ soluzioni ($t = \pm 1 \implies x = 2, x = 0$);
- per $-1 < 1 - k < 0 \iff 1 < k < 2$: $4$ soluzioni;
- per $1 - k = 0 \iff k = 1$: $3$ soluzioni ($t = 0, \pm 2 \implies x = 1, x = 3, x = -1$);
- per $1 - k > 0 \iff k < 1$: $2$ soluzioni.

**Conclusione:**
- per $k > 2$: nessuna soluzione reale;
- per $k = 2$: $2$ soluzioni reali distinte;
- per $1 < k < 2$: $4$ soluzioni reali distinte;
- per $k = 1$: $3$ soluzioni reali distinte;
- per $k < 1$: $2$ soluzioni reali distinte.
