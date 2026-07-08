---
year: 5
macro_area: "Analisi Matematica"
topic: "Studio di funzione"
difficulty: 2
tags:
  - "monotonia"
  - "massimi e minimi"
  - "derivata prima"
  - "punti stazionari"
---
# Problem Text
Determinare gli intervalli di monotonia e gli eventuali punti di massimo e minimo relativo della funzione:

$$
f(x) = x^3 - 3x^2 + 2
$$

# Solution
**1. Determinazione del dominio**
La funzione è polinomiale, quindi il suo dominio è l'intero insieme dei numeri reali:

$$
D = \mathbb{R}
$$

**2. Calcolo della derivata prima**
Utilizzando le regole di derivazione delle potenze, otteniamo:

$$
f'(x) = 3x^2 - 6x
$$

**3. Ricerca dei punti stazionari**
Risolviamo l'equazione $f'(x) = 0$ per trovare i punti in cui la tangente è orizzontale:

$$
3x^2 - 6x = 0 \implies 3x(x - 2) = 0
$$

Le soluzioni sono i punti stazionari:

$$
x_1 = 0, \quad x_2 = 2
$$

**4. Studio del segno della derivata e intervalli di monotonia**
Studiamo la disequazione $f'(x) > 0$ per determinare dove la funzione cresce o decresce:

$$
3x(x - 2) > 0
$$

La disequazione è verificata per valori esterni all'intervallo delle radici:

$$
x < 0 \quad \text{oppure} \quad x > 2
$$

Possiamo concludere che:
- La funzione è strettamente crescente negli intervalli $(-\infty, 0)$ e $(2, +\infty)$.
- La funzione è strettamente decrescente nell'intervallo $(0, 2)$.

**5. Individuazione dei punti di massimo e minimo relativo**
Analizzando il comportamento della funzione nei punti stazionari:
- In $x = 0$ la funzione passa da crescente a decrescente, quindi si ha un massimo relativo. Il valore massimo è $f(0) = 0^3 - 3(0)^2 + 2 = 2$.
- In $x = 2$ la funzione passa da decrescente a crescente, quindi si ha un minimo relativo. Il valore minimo è $f(2) = 2^3 - 3(2)^2 + 2 = -2$.

I punti cercati sono dunque:

$$
M(0, 2) \quad \text{e} \quad m(2, -2)
$$
