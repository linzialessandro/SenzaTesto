---
year: 4
macro_area: "Esponenziali e Logaritmi"
topic: "Disequazioni logaritmiche"
difficulty: 2
ai_generated: true
tags:
  - "esponenziali e logaritmi"
  - "disequazioni logaritmiche"
  - "proprieta dei logaritmi"
---
# Problem Text
Risolvere la seguente disequazione logaritmica:

$$
\log_2(x^2 - 3) - \log_2(x) \le 1
$$

# Solution
1. **Condizioni di Esistenza (C.E.)**
Imponiamo che gli argomenti di ciascun logaritmo siano strettamente positivi:

$$
\begin{cases}
x^2 - 3 > 0 \\
x > 0
\end{cases}
$$

Dalla prima disequazione si ha $x < -\sqrt{3} \lor x > \sqrt{3}$. Intersecando con $x > 0$, si ottiene:

$$
C.E.: x > \sqrt{3}
$$

2. **Applicazione delle proprietà dei logaritmi**
Utilizzando la proprietà della differenza di logaritmi con la stessa base, $\log_b(a) - \log_b(c) = \log_b\left(\frac{a}{c}\right)$, la disequazione diventa:

$$
\log_2\left(\frac{x^2 - 3}{x}\right) \le 1
$$

3. **Passaggio alla disequazione algebrica**
Poiché la base è $b = 2 > 1$, la funzione logaritmica è strettamente crescente e mantiene il verso della disuguaglianza:

$$
\frac{x^2 - 3}{x} \le 2^1
$$

4. **Risoluzione della disequazione fratta**
Trasportiamo il termine costante al primo membro:

$$
\frac{x^2 - 3}{x} - 2 \le 0 \implies \frac{x^2 - 2x - 3}{x} \le 0
$$

Scomponendo il numeratore in fattori si ha $x^2 - 2x - 3 = (x - 3)(x + 1)$, per cui:

$$
\frac{(x - 3)(x + 1)}{x} \le 0
$$

5. **Studio del segno limitatamente alle C.E.**
Nel dominio di esistenza $x > \sqrt{3} \approx 1{,}732$:
- Il denominatore $x$ è sempre positivo ($x > 0$).
- Il fattore $(x + 1)$ è sempre positivo ($x + 1 > 0$).
Pertanto, il segno della frazione dipende esclusivamente dal fattore $(x - 3)$:

$$
x - 3 \le 0 \implies x \le 3
$$

6. **Intersezione con le C.E. e soluzione finale**
Mettiamo a sistema la condizione trovata con le C.E.:

$$
\begin{cases}
x \le 3 \\
x > \sqrt{3}
\end{cases}
\implies \sqrt{3} < x \le 3
$$

L'insieme delle soluzioni è $S = \left(\sqrt{3}, 3\right]$.
