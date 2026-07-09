---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali"
difficulty: 3
tags:
  - "integrale indefinito"
  - "funzioni razionali fratte"
  - "fratti semplici"
---
# Problem Text
Calcolare il seguente integrale indefinito:
$$ \int \frac{1}{x^2+2x-3} \,\textrm{d}x $$

# Solution
L'integranda è una funzione razionale fratta in cui il grado del numeratore (0) è strettamente minore di quello del denominatore (2). Si procede con il metodo di scomposizione in **fratti semplici**.

**1. Scomposizione del denominatore:**
Cerchiamo le radici del trinomio di secondo grado $$x^2+2x-3 = 0$$.
Troviamo due numeri la cui somma sia 2 e il cui prodotto sia -3. Tali numeri sono 3 e -1.
Il denominatore si scompone quindi come:
$$ x^2+2x-3 = (x+3)(x-1) $$

**2. Scomposizione in fratti semplici:**
Cerchiamo due costanti reali $$A$$ e $$B$$ tali che:
$$ \frac{1}{(x+3)(x-1)} = \frac{A}{x+3} + \frac{B}{x-1} $$
Facendo il denominatore comune a destra:
$$ \frac{1}{(x+3)(x-1)} = \frac{A(x-1) + B(x+3)}{(x+3)(x-1)} $$
Uguagliando i numeratori:
$$ 1 = Ax - A + Bx + 3B $$
$$ 1 = x(A+B) + (-A+3B) $$

Impostiamo il sistema lineare uguagliando i coefficienti dei termini di grado pari tra i due membri dell'equazione:
$$
\begin{cases} A + B = 0 \\ -A + 3B = 1 \end{cases}
$$
Dalla prima equazione si ricava $$A = -B$$. Sostituendo nella seconda:
$$ -(-B) + 3B = 1 \implies 4B = 1 \implies B = \frac{1}{4} $$
E di conseguenza:
$$ A = -\frac{1}{4} $$

**3. Calcolo dell'integrale:**
Sostituiamo i fratti semplici nell'integrale originale:
$$ \int \frac{1}{x^2+2x-3} \, dx = \int \left( \frac{-1/4}{x+3} + \frac{1/4}{x-1} \right) \, dx $$
Per la linearità dell'integrale, separiamo e calcoliamo i logaritmi:
$$ = -\frac{1}{4} \int \frac{1}{x+3} \, dx + \frac{1}{4} \int \frac{1}{x-1} \, dx $$
$$ = -\frac{1}{4} \ln|x+3| + \frac{1}{4} \ln|x-1| + c $$

Utilizzando le proprietà dei logaritmi ($$\ln a - \ln b = \ln\frac{a}{b}$$), il risultato compatto è:
$$ \frac{1}{4} \ln\left| \frac{x-1}{x+3} \right| + c $$
