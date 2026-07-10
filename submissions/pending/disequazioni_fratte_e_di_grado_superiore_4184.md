---
year: 2
macro_area: "Algebra"
topic: "Disequazioni fratte e di grado superiore"
difficulty: 3
tags:
  - "disequazioni fratte"
  - "disequazioni di grado superiore"
  - "metodo dei segni"
  - "scomposizione in fattori"
---
# Problem Text
Risolvi la seguente disequazione fratta nel campo dei numeri reali:

$$
\frac{x^3 - 3x^2 - x + 3}{x^2 - 4} \ge 0
$$

# Solution
1. **Scomposizione del numeratore**:
Eseguiamo un raccoglimento parziale sul polinomio a numeratore:

$$
x^3 - 3x^2 - x + 3 = x^2(x - 3) - (x - 3) = (x^2 - 1)(x - 3) = (x - 1)(x + 1)(x - 3)
$$

Studiamo il segno dei singoli fattori ponendoli maggiori o uguali a zero:
- $x - 1 \ge 0 \implies x \ge 1$
- $x + 1 \ge 0 \implies x \ge -1$
- $x - 3 \ge 0 \implies x \ge 3$

2. **Scomposizione del denominatore**:
Scomponiamo il denominatore come differenza di quadrati:

$$
x^2 - 4 = (x - 2)(x + 2)
$$

Imponiamo le condizioni di esistenza (C.E.): $x \neq -2$ e $x \neq 2$. Studiamo il segno dei singoli fattori ponendoli maggiori di zero:
- $x - 2 > 0 \implies x > 2$
- $x + 2 > 0 \implies x > -2$

3. **Studio dei segni**:
Riportiamo il segno dei cinque fattori sulla retta reale con i capisaldi in ordine crescente: $-2, -1, 1, 2, 3$. Moltiplicando i segni nei diversi intervalli otteniamo:
- Per $x < -2$: cinque fattori negativi $\implies -$
- Per $-2 < x \le -1$: quattro fattori negativi $\implies +$
- Per $-1 \le x \le 1$: tre fattori negativi (o zero) $\implies -$
- Per $1 \le x < 2$: due fattori negativi (o zero) $\implies +$
- Per $2 < x \le 3$: un fattore negativo (o zero) $\implies -$
- Per $x \ge 3$: fattori tutti positivi (o zero) $\implies +$

4. **Insieme delle soluzioni**:
Selezioniamo gli intervalli in cui la frazione è positiva o nulla, escludendo i valori che annullano il denominatore:

$$
-2 < x \le -1 \quad \lor \quad 1 \le x < 2 \quad \lor \quad x \ge 3
$$

Sotto forma di intervalli, l'insieme delle soluzioni è:

$$
S = (-2, -1] \cup [1, 2) \cup [3, +\infty)
$$
