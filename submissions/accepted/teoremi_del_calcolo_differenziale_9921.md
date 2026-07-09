---
year: 5
macro_area: "Analisi Matematica"
topic: "Teoremi del calcolo differenziale"
difficulty: 2
tags:
  - "Teorema di Lagrange"
  - "Teorema del valor medio"
  - "Derivate"
  - "Analisi Matematica"
---
# Problem Text
Verificare l'applicabilità del teorema di Lagrange alla funzione $f(x) = x^2 - 4x + 3$ nell'intervallo $[1, 4]$ e determinare il valore di $c$ la cui esistenza è garantita dal teorema.

# Solution
1. **Verifica delle ipotesi**:
   La funzione $f(x) = x^2 - 4x + 3$ è un polinomio, quindi è continua e derivabile in tutto l'insieme dei numeri reali $\mathbb{R}$. Di conseguenza:
   - È continua nell'intervallo chiuso $[1, 4]$.
   - È derivabile nell'intervallo aperto $(1, 4)$.
   Le ipotesi del teorema di Lagrange sono pertanto verificate.

2. **Calcolo della derivata prima**:
   Calcoliamo la derivata di $f(x)$:
   
$$
f'(x) = 2x - 4
$$

3. **Calcolo del rapporto incrementale**:
   Troviamo i valori della funzione agli estremi dell'intervallo:
   - $f(1) = 1^2 - 4(1) + 3 = 0$
   - $f(4) = 4^2 - 4(4) + 3 = 3$

   Il rapporto incrementale nell'intervallo $[1, 4]$ è:
   
$$
\frac{f(4) - f(1)}{4 - 1} = \frac{3 - 0}{3} = 1
$$

4. **Applicazione della tesi del teorema**:
   Il teorema di Lagrange garantisce l'esistenza di almeno un punto $c \in (1, 4)$ tale che:
   
$$
f'(c) = 1
$$

5. **Determinazione di $c$**:
   Sostituiamo $f'(c) = 2c - 4$ nell'uguaglianza precedente:
   
$$
2c - 4 = 1
$$

   Risolviamo l'equazione di primo grado:
   
$$
2c = 5 \implies c = \frac{5}{2}
$$

6. **Verifica della soluzione**:
   Il valore trovato è $c = 2.5$, che appartiene all'intervallo aperto $(1, 4)$. Ciascun passaggio è verificato e il teorema è confermato.
