---
year: 1
macro_area: Algebra
topic: Proprietà, scomposizione e divisione di polinomi
difficulty: 2
tags:
  - regola di ruffini
  - teorema di ruffini
  - scomposizione di polinomi
  - divisione tra polinomi
  - algebra letterale
---
# Problem Text
1. Si consideri il seguente polinomio di terzo grado:
$$P(x) = x^3 - 4x^2 - 7x + 10$$
Scomporre $P(x)$ in fattori lineari (di primo grado) applicando il Teorema di Ruffini e la regola di Ruffini.

2. Eseguire la divisione euclidea tra i polinomi $A(x) = 3x^4 - 5x^3 + 4x^2 - 7x + 2$ e $B(x) = x^2 - 2x + 3$, determinando il polinomio quoziente $Q(x)$ e il polinomio resto $R(x)$. Verificare il risultato ottenuto tramite la relazione d'identità $A(x) = B(x) \cdot Q(x) + R(x)$.

# Solution
1. **Scomposizione di $P(x) = x^3 - 4x^2 - 7x + 10$:**

* **Ricerca di uno zero del polinomio (Teorema di Ruffini):**
I possibili zeri interi del polinomio si trovano tra i divisori del termine noto $10$:
$$\text{Divisori di 10} = \{ \pm 1, \pm 2, \pm 5, \pm 10 \}$$

Calcoliamo il valore del polinomio per $x = 1$:
$$P(1) = 1^3 - 4(1)^2 - 7(1) + 10 = 1 - 4 - 7 + 10 = 0$$
Poiché $P(1) = 0$, per il Teorema di Ruffini il polinomio $P(x)$ è divisibile per il binomio $(x - 1)$.

* **Applicazione della Regola di Ruffini:**
Eseguiamo la divisione $P(x) : (x - 1)$ usando la griglia di Ruffini con i coefficienti di $P(x) \implies [1, -4, -7, 10]$:
$$
\begin{array}{r|ccc|r}
& 1 & -4 & -7 & 10 \\
1 & & 1 & -3 & -10 \\
\hline
& 1 & -3 & -10 & 0
\end{array}
$$

I coefficienti del quoziente ottenuto sono $1, -3, -10$, corrispondenti al polinomio di secondo grado:
$$Q_1(x) = x^2 - 3x - 10$$
Dunque, possiamo scrivere:
$$P(x) = (x - 1)(x^2 - 3x - 10)$$

* **Scomposizione del trinomio di secondo grado:**
Scomponiamo $x^2 - 3x - 10$ trovando due numeri la cui somma è $S = -3$ e il cui prodotto è $P = -10$.
I due numeri cercati sono $-5$ e $+2$.
Possiamo quindi riscrivere il trinomio come:
$$x^2 - 3x - 10 = (x - 5)(x + 2)$$

* **Risultato della scomposizione:**
Unendo i risultati ottenuti, la scomposizione in fattori di primo grado di $P(x)$ è:
$$P(x) = (x - 1)(x - 5)(x + 2)$$

---

2. **Divisione euclidea tra $A(x) = 3x^4 - 5x^3 + 4x^2 - 7x + 2$ e $B(x) = x^2 - 2x + 3$:**

Eseguiamo la divisione incolonnata tra polinomi:

$$
\begin{array}{r|l}
\begin{array}{rrrrr}
3x^4 & -5x^3 & +4x^2 & -7x & +2 \\
-3x^4 & +6x^3 & -9x^2 & & \\
\hline
0 & x^3 & -5x^2 & -7x & +2 \\
& -x^3 & +2x^2 & -3x & \\
\hline
& 0 & -3x^2 & -10x & +2 \\
& & 3x^2 & -6x & +9 \\
\hline
& & 0 & -16x & +11
\end{array} & \begin{array}{l}
x^2 - 2x + 3 \\
\hline
3x^2 + x - 3 \\
\\
\\
\\
\\
\\
\end{array}
\end{array}
$$

I risultati della divisione sono:
- **Polinomio Quoziente:** $Q(x) = 3x^2 + x - 3$
- **Polinomio Resto:** $R(x) = -16x + 11$

* **Verifica della divisione ($B(x) \cdot Q(x) + R(x) = A(x)$):**
Sviluppiamo il prodotto del divisore per il quoziente aggiungendo il resto:
$$B(x) \cdot Q(x) + R(x) = (x^2 - 2x + 3)(3x^2 + x - 3) + (-16x + 11)$$

Moltiplichiamo i due polinomi termine a termine:
$$(x^2 - 2x + 3)(3x^2 + x - 3) = x^2(3x^2 + x - 3) - 2x(3x^2 + x - 3) + 3(3x^2 + x - 3)$$
$$= (3x^4 + x^3 - 3x^2) + (-6x^3 - 2x^2 + 6x) + (9x^2 + 3x - 9)$$

Raggruppando i termini simili:
$$= 3x^4 + (1 - 6)x^3 + (-3 - 2 + 9)x^2 + (6 + 3)x - 9$$
$$= 3x^4 - 5x^3 + 4x^2 + 9x - 9$$

Ora sommiamo il resto $R(x) = -16x + 11$:
$$B(x) \cdot Q(x) + R(x) = (3x^4 - 5x^3 + 4x^2 + 9x - 9) + (-16x + 11)$$
$$= 3x^4 - 5x^3 + 4x^2 + (9 - 16)x + (-9 + 11)$$
$$= 3x^4 - 5x^3 + 4x^2 - 7x + 2 = A(x)$$

La verifica ha confermato l'esattezza dei calcoli.
