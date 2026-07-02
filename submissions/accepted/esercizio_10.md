---
year: 5
macro_area: Analisi Matematica (Derivate)
topic: studio di funzione
difficulty: 4
tags:
  - continuità
  - derivabilità
  - valore assoluto
---
# Problem Text
Considera la funzione reale di variabile reale così definita:
$$
f(x) = x|x|
$$
Studia in modo dettagliato la continuità e la derivabilità della funzione $f(x)$ nel punto $x = 0$. Successivamente, calcola il valore esatto della sua derivata prima nel punto di ascissa $x = 1$.

# Solution
La presenza del valore assoluto ci suggerisce fortemente di riscrivere la funzione esplicitandola per casi. Ricordiamo la definizione algebrica di valore assoluto: $|x| = x$ se $x \ge 0$, mentre $|x| = -x$ se $x < 0$. Di conseguenza otteniamo l'espressione:
$$
f(x) = \begin{cases}
x(x) = x^2 & \text{se } x \ge 0 \\
x(-x) = -x^2 & \text{se } x < 0
\end{cases}
$$

**1. Studio analitico della continuità in $x = 0$**
Per verificare se la funzione è continua in $x=0$, occorre controllare che i due limiti (destro e sinistro) coincidano e siano uguali al valore assunto dalla funzione in quel medesimo punto.
- Valore esatto nel punto: $f(0) = 0^2 = 0$.
- Limite destro: $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} x^2 = 0$.
- Limite sinistro: $\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} (-x^2) = 0$.
Poiché $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^-} f(x) = f(0)$, è dimostrato che la funzione risulta **perfettamente continua in $x = 0$**.

**2. Studio analitico della derivabilità in $x = 0$**
Per verificare la derivabilità in un punto di flesso della definizione, valutiamo l'esistenza e la coincidenza delle derivate destra e sinistra (i limiti del rapporto incrementale).
Calcoliamo preliminarmente la derivata prima generica $f'(x)$ per tutti gli $x \neq 0$:
$$
f'(x) = \begin{cases}
2x & \text{se } x > 0 \\
-2x & \text{se } x < 0
\end{cases}
$$
- Limite della derivata per l'intorno destro: $\lim_{x \to 0^+} f'(x) = \lim_{x \to 0^+} 2x = 0$.
- Limite della derivata per l'intorno sinistro: $\lim_{x \to 0^-} f'(x) = \lim_{x \to 0^-} -2x = 0$.
Poiché i due limiti delle derivate direzionali esistono, sono finiti e coincidono, possiamo affermare che la funzione ammette la derivata nel punto $x=0$ e il suo valore è $f'(0) = 0$. Dunque, la funzione è regolarmente **derivabile in $x = 0$**. Sul piano cartesiano, l'origine costituisce un punto di flesso a tangente orizzontale.

**3. Calcolo puntuale della derivata in $x = 1$**
Per calcolare il valore di $f'(1)$, notiamo che ci troviamo nel ramo per cui $x > 0$. In questo specifico intervallo l'espressione analitica della derivata è semplicemente $f'(x) = 2x$.
Procediamo per sostituzione diretta con $x = 1$:
$$
f'(1) = 2(1) = 2
$$
