---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali indefiniti"
difficulty: 2
ai_generated: true
tags:
  - "integrali indefiniti"
  - "integrazione per parti"
  - "primitiva"
---
# Problem Text
Calcolare il seguente integrale indefinito:

$$
\int (2x + 1) \cos x \, dx
$$

# Solution
Per determinare la famiglia di primitive della funzione integranda, si applica il metodo di integrazione per parti:

$$
\int f(x) g'(x) \, dx = f(x) g(x) - \int f'(x) g(x) \, dx
$$

1. **Identificazione delle funzioni**:
Scegliamo come fattore finito $f(x) = 2x + 1$ e come fattore differenziale $g'(x) = \cos x$.

2. **Calcolo della derivata e della primitiva**:

$$
f'(x) = \frac{d}{dx}(2x + 1) = 2
$$

$$
g(x) = \int \cos x \, dx = \sin x
$$

3. **Applicazione della formula per parti**:

$$
\int (2x + 1) \cos x \, dx = (2x + 1) \sin x - \int 2 \sin x \, dx
$$

4. **Risoluzione dell'integrale residuo**:
Sfruttando la linearità dell'integrale ed essendo l'integrale del seno un integrale immediato:

$$
\int 2 \sin x \, dx = -2 \cos x
$$

5. **Risultato finale**:
Unendo i termini e aggiungendo la costante arbitraria di integrazione $c \in \mathbb{R}$, si ottiene:

$$
\int (2x + 1) \cos x \, dx = (2x + 1) \sin x + 2 \cos x + c
$$
