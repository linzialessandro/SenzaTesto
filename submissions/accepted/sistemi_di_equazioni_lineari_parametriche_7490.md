---
year: 2
macro_area: "Sistemi lineari"
topic: "Sistemi di equazioni lineari parametriche"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-14T11:02:57+00:00"
tags:
  - "sistemi lineari"
  - "parametro"
  - "Cramer"
  - "discussione"
  - "disequazioni razionali"
---
# Problem Text
Considera il sistema lineare nelle incognite $x$ e $y$, dipendente dal parametro reale $k$:

$$
\begin{cases}
x + k\,y = 2 \\
k\,x + y = 1
\end{cases}
$$

Discuti al variare di $k$ il sistema (determinando per quali $k$ ha un'unica soluzione, infinite soluzioni o nessuna) e, quando la soluzione è unica, determina per quali valori di $k$ entrambe le coordinate $x$ e $y$ sono positive.

# Solution
Calcoliamo il determinante della matrice dei coefficienti:

$$
D = \begin{vmatrix} 1 & k \\ k & 1 \end{vmatrix} = 1 - k^2 = (1-k)(1+k).
$$

Se $D \neq 0$, cioè $k \neq \pm 1$, il sistema ha un'unica soluzione, ottenuta con la regola di Cramer:

$$
x = \frac{D_x}{D} = \frac{\begin{vmatrix} 2 & k \\ 1 & 1 \end{vmatrix}}{1-k^2} = \frac{2-k}{1-k^2},
$$

$$
y = \frac{D_y}{D} = \frac{\begin{vmatrix} 1 & 2 \\ k & 1 \end{vmatrix}}{1-k^2} = \frac{1-2k}{1-k^2}.
$$

Per $k=1$: il sistema diventa $\begin{cases} x+y=2 \\ x+y=1 \end{cases}$, impossibile. Per $k=-1$: diventa $\begin{cases} x-y=2 \\ -x+y=1 \end{cases}$, cioè $x-y=-1$, incompatibile con $x-y=2$, quindi anche impossibile. Dunque per $k=\pm 1$ non ci sono soluzioni.

Ora imponiamo $x>0$ e $y>0$ per $k\neq\pm1$. Dobbiamo risolvere:

$$
\frac{2-k}{1-k^2}>0,\qquad \frac{1-2k}{1-k^2}>0.
$$

Studiamo il segno del denominatore $1-k^2$ e dei numeratori.

Il denominatore è positivo per $-1<k<1$, negativo per $k<-1$ o $k>1$.

**Caso 1: $-1<k<1$** (denominatore positivo). Allora le frazioni sono positive se i numeratori sono positivi.
- $2-k>0 \iff k<2$, sempre vero in questo intervallo.
- $1-2k>0 \iff k<\frac{1}{2}$.
Quindi in questo caso otteniamo $-1<k<\frac{1}{2}$.

**Caso 2: $k<-1$ o $k>1$** (denominatore negativo). Le frazioni sono positive se i numeratori sono negativi.
- $2-k<0 \iff k>2$.
- $1-2k<0 \iff k>\frac{1}{2}$.
Entrambe richiedono $k>2$, quindi $k>2$ soddisfa. Per $k<-1$, $k>2$ è falso, quindi nessun contributo.

Conclusione: la soluzione unica ha coordinate positive per $k \in (-1,\frac{1}{2}) \cup (2,+\infty)$, mentre per $k=\pm1$ non esiste soluzione.
