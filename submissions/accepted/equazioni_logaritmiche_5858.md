---
year: 4
macro_area: "Algebra"
topic: "Equazioni logaritmiche"
difficulty: 2
tags:
  - "equazioni logaritmiche"
  - "logaritmi"
  - "scuola superiore"
---
# Problem Text
Risolvi la seguente equazione logaritmica:

$$
\log_2(x^2 - x) = 1 + \log_2(x)
$$

# Solution
Ecco lo svolgimento completo dell'equazione passo dopo passo.

**Passo 1: Condizioni di esistenza (C.E.)**
Gli argomenti dei logaritmi devono essere strettamente positivi per poter essere definiti nel campo dei numeri reali:

$$
\begin{cases}
x^2 - x > 0 \\
x > 0
\end{cases}
$$

Risolvendo la prima disequazione si ha $x < 0 \lor x > 1$. Intersecandola con la seconda disequazione, si ottengono le condizioni di esistenza dell'equazione:

$$
x > 1
$$

**Passo 2: Scrittura della costante in forma logaritmica**
Scriviamo il numero reale $1$ sotto forma di logaritmo in base $2$ per facilitare i calcoli successivi:

$$
1 = \log_2(2)
$$

**Passo 3: Applicazione delle proprietà dei logaritmi**
Sostituiamo il valore trovato al membro destro e applichiamo la proprietà del prodotto della somma dei logaritmi con la stessa base, $\log_a(b) + \log_a(c) = \log_a(b \cdot c)$:

$$
1 + \log_2(x) = \log_2(2) + \log_2(x) = \log_2(2x)
$$

L'equazione originaria diventa quindi:

$$
\log_2(x^2 - x) = \log_2(2x)
$$

**Passo 4: Confronto degli argomenti**
Poiché le basi dei logaritmi ad ambo i membri sono identiche, possiamo uguagliare i rispettivi argomenti:

$$
x^2 - x = 2x
$$

**Passo 5: Risoluzione dell'equazione algebrica**
Portiamo tutti i termini a sinistra e risolviamo l'equazione di secondo grado spuria che ne deriva:

$$
x^2 - 3x = 0 \implies x(x - 3) = 0
$$

Le soluzioni algebriche sono:

$$
x_1 = 0 \quad \text{e} \quad x_2 = 3
$$

**Passo 6: Confronto con le C.E. e conclusione**
Confrontiamo ora le soluzioni trovate con il vincolo iniziale $x > 1$:
- $x_1 = 0$ non soddisfa la condizione $x > 1$ (soluzione non accettabile).
- $x_2 = 3$ soddisfa ampiamente la condizione $x > 1$ (soluzione accettabile).

Pertanto, l'unica soluzione dell'equazione logaritmica è:

$$
x = 3
$$
