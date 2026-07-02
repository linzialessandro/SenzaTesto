---
year: 3
macro_area: Equazioni e disequazioni particolari
topic: Equazioni irrazionali
difficulty: 3
tags:
  - irrazionali
  - radicali
  - condizioni
---
# Problem Text

Risolvere la seguente equazione irrazionale:
$$
\sqrt{2x + 3} = x + 2
$$

# Solution

L'equazione è della forma $\sqrt{A(x)} = B(x)$. 
Per risolverla elevando ambo i membri al quadrato, dobbiamo imporre le condizioni di equivalenza:
1.  Il radicando deve essere maggiore o uguale a zero: $A(x) \ge 0$
2.  Il secondo membro deve essere maggiore o uguale a zero: $B(x) \ge 0$ (poiché uguaglia una radice quadrata)
3.  L'equazione elevata al quadrato: $A(x) = [B(x)]^2$

Impostiamo il sistema risolvente:
$$
\begin{cases}
2x + 3 \ge 0 \\
x + 2 \ge 0 \\
2x + 3 = (x + 2)^2
\end{cases}
$$

**1. Analisi delle condizioni:**
Dalla prima: $x \ge -\frac{3}{2}$
Dalla seconda: $x \ge -2$
Intersecando le due condizioni (la più restrittiva), si ha il dominio di accettabilità delle soluzioni: 
$$ x \ge -\frac{3}{2} $$

**2. Risoluzione dell'equazione algebrica:**
Eleviamo al quadrato:
$$
2x + 3 = x^2 + 4x + 4
$$
Portiamo tutti i termini a destra:
$$
x^2 + 2x + 1 = 0
$$
Si tratta di un quadrato di binomio:
$$
(x + 1)^2 = 0 \implies x + 1 = 0 \implies x = -1
$$

**3. Verifica della soluzione:**
Dobbiamo controllare se $x = -1$ soddisfa le condizioni $x \ge -\frac{3}{2}$.
Poiché $-1 \ge -1,5$, la soluzione è **accettabile**.

Possiamo anche verificare sostituendo direttamente nell'equazione originale:
$$
\sqrt{2(-1) + 3} = (-1) + 2 \implies \sqrt{1} = 1 \implies 1 = 1
$$

**Soluzione:** L'unica soluzione è $x = -1$.
