---
year: 5
macro_area: "Analisi Matematica"
topic: "Metodi di integrazione"
difficulty: 3
tags:
  - "integrali indefiniti"
  - "integrazione per parti"
  - "scomposizione"
  - "integrali immediati"
---
# Problem Text
$$
\int \frac{x^2 \arctan(x)}{1 + x^2} \, dx
$$

# Solution
**1. Scomposizione algebrica dell'integrando**

Osserviamo che la frazione algebrica all'interno dell'integrando può essere riscritta aggiungendo e sottraendo $1$ al numeratore:

$$
\frac{x^2}{1 + x^2} = \frac{x^2 + 1 - 1}{1 + x^2} = \frac{x^2 + 1}{1 + x^2} - \frac{1}{1 + x^2} = 1 - \frac{1}{1 + x^2}
$$

Sostituendo questa scomposizione nell'integrale originale, si ottiene:

$$
\int \frac{x^2 \arctan(x)}{1 + x^2} \, dx = \int \left(1 - \frac{1}{1 + x^2}\right) \arctan(x) \, dx
$$

Sviluppando il prodotto e applicando la proprietà di linearità dell'integrale, possiamo separare l'espressione in due integrali distinti:

$$
\int \arctan(x) \, dx - \int \frac{\arctan(x)}{1 + x^2} \, dx
$$

Risolviamo separatamente i due integrali così ottenuti.

---

**2. Risoluzione del primo integrale per parti**

Consideriamo l'integrale:

$$
I_1 = \int \arctan(x) \, dx
$$

Risolviamo inserendo il fattore unitario sottinteso $1$ e applicando la formula di integrazione per parti:

$$
\int f'(x) g(x) \, dx = f(x) g(x) - \int f(x) g'(x) \, dx
$$

Assegniamo i fattori come segue:
- Fattore differenziale: $f'(x) = 1 \implies f(x) = x$
- Fattore finito: $g(x) = \arctan(x) \implies g'(x) = \frac{1}{1 + x^2}$

Applicando la formula si ottiene:

$$
I_1 = x \arctan(x) - \int \frac{x}{1 + x^2} \, dx
$$

Per semplificare l'ultimo termine, moltiplichiamo e dividiamo per $2$ in modo da ottenere al numeratore la derivata del denominatore, riconducendoci alla regola di integrazione immediata del logaritmo:

$$
\int \frac{x}{1 + x^2} \, dx = \frac{1}{2} \int \frac{2x}{1 + x^2} \, dx = \frac{1}{2} \ln(1 + x^2)
$$

(Si noti che l'argomento del logaritmo $1 + x^2$ è sempre strettamente positivo, rendendo superfluo l'uso del valore assoluto).

Quindi, la soluzione per il primo integrale è:

$$
I_1 = x \arctan(x) - \frac{1}{2} \ln(1 + x^2)
$$

---

**3. Risoluzione del secondo integrale per riconoscimento immediato**

Consideriamo l'integrale:

$$
I_2 = \int \frac{\arctan(x)}{1 + x^2} \, dx
$$

Osserviamo che la funzione integranda può essere vista nella forma $f(x) \cdot f'(x)$, dove $f(x) = \arctan(x)$ e la sua derivata è $f'(x) = \frac{1}{1 + x^2}$:

$$
\int \arctan(x) \cdot \frac{1}{1 + x^2} \, dx
$$

Applicando la regola di integrazione immediata per funzioni composte del tipo $\int [f(x)]^n f'(x) \, dx = \frac{[f(x)]^{n+1}}{n+1}$ con $n=1$, si ottiene direttamente:

$$
I_2 = \frac{1}{2} (\arctan(x))^2
$$

---

**4. Composizione del risultato finale**

Sottraendo il risultato di $I_2$ da quello di $I_1$ e introducendo la costante arbitraria reale di integrazione $C \in \mathbb{R}$, otteniamo la famiglia di tutte le primitive:

$$
\int \frac{x^2 \arctan(x)}{1 + x^2} \, dx = x \arctan(x) - \frac{1}{2} \ln(1 + x^2) - \frac{1}{2} (\arctan(x))^2 + C
$$
