---
year: 5
macro_area: "Analisi Matematica"
topic: "Metodi di integrazione (per scomposizione, per parti)"
difficulty: 3
tags:
  - "integrali indefiniti"
  - "integrazione per parti"
  - "integrazione per scomposizione"
  - "quinto anno"
  - "liceo scientifico"
---
# Problem Text
$$
\int x \arctan(x) \, dx
$$

# Solution
Per risolvere l'integrale indefinito:

$$
\int x \arctan(x) \, dx
$$

si utilizza il metodo di integrazione per parti. La formula dell'integrazione per parti è:

$$
\int f(x) g'(x) \, dx = f(x) g(x) - \int f'(x) g(x) \, dx
$$

In questo caso, poniamo come fattore finito e fattore differenziale:

$$
f(x) = \arctan(x) \implies f'(x) = \frac{1}{1+x^2}
$$

$$
g'(x) = x \implies g(x) = \frac{x^2}{2}
$$

Sostituendo nella formula, otteniamo:

$$
\int x \arctan(x) \, dx = \frac{x^2}{2} \arctan(x) - \int \frac{x^2}{2(1+x^2)} \, dx
$$

Portiamo la costante $\frac{1}{2}$ fuori dall'integrale:

$$
\int x \arctan(x) \, dx = \frac{x^2}{2} \arctan(x) - \frac{1}{2} \int \frac{x^2}{1+x^2} \, dx
$$

Ora risolviamo l'integrale rimanente per scomposizione:

$$
\int \frac{x^2}{1+x^2} \, dx
$$

Aggiungiamo e sottraiamo $1$ al numeratore per semplificare la frazione algebrica:

$$
\int \frac{x^2 + 1 - 1}{1+x^2} \, dx = \int \left( \frac{x^2+1}{1+x^2} - \frac{1}{1+x^2} \right) \, dx
$$

$$
= \int \left( 1 - \frac{1}{1+x^2} \right) \, dx
$$

Per la proprietà di linearità dell'integrale indefinito, separiamo i due termini immediati:

$$
\int 1 \, dx - \int \frac{1}{1+x^2} \, dx = x - \arctan(x)
$$

Sostituiamo questo risultato nell'espressione precedente:

$$
\int x \arctan(x) \, dx = \frac{x^2}{2} \arctan(x) - \frac{1}{2} \Big( x - \arctan(x) \Big) + c
$$

Sviluppiamo i calcoli algebrici:

$$
= \frac{x^2}{2} \arctan(x) - \frac{x}{2} + \frac{1}{2} \arctan(x) + c
$$

Infine, raccogliamo parzialmente il termine $\arctan(x)$:

$$
= \frac{1}{2} (x^2 + 1) \arctan(x) - \frac{x}{2} + c
$$

dove $c \in \mathbb{R}$ rappresenta la costante arbitraria di integrazione.
