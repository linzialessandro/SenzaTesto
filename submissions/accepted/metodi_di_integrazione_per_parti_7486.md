---
year: 5
macro_area: "Analisi Matematica"
topic: "Metodi di integrazione per parti"
difficulty: 2
tags:
  - "Integrali indefiniti"
  - "Integrazione per parti"
  - "Logaritmo"
---
# Problem Text
Calcolare il seguente integrale indefinito:

$$
\int x \ln(x) \, dx
$$

# Solution
Per risolvere l'integrale si utilizza il metodo di integrazione per parti. La formula di integrazione per parti è:

$$
\int f'(x) g(x) \, dx = f(x) g(x) - \int f(x) g'(x) \, dx
$$

**Passo 1: Scelta dei fattori**
Scegliamo il fattore logaritmico come fattore finito $g(x)$ e il fattore monomio come fattore differenziale $f'(x)$:
- $g(x) = \ln(x)$
- $f'(x) = x$

**Passo 2: Calcolo della derivata e della primitiva**
Calcoliamo la derivata di $g(x)$ e una primitiva di $f'(x)$:
- $g'(x) = \frac{1}{x}$
- $f(x) = \frac{x^2}{2}$

**Passo 3: Applicazione della formula**
Sostituiamo i termini nella formula di integrazione per parti:

$$
\int x \ln(x) \, dx = \ln(x) \cdot \frac{x^2}{2} - \int \frac{x^2}{2} \cdot \frac{1}{x} \, dx
$$

**Passo 4: Semplificazione dell'integrale residuo**
Semplifichiamo l'espressione all'interno del secondo integrale:

$$
\int \frac{x^2}{2} \cdot \frac{1}{x} \, dx = \frac{1}{2} \int x \, dx
$$

**Passo 5: Calcolo dell'integrale immediato**
Risolviamo l'integrale immediato rimanente:

$$
\frac{1}{2} \int x \, dx = \frac{1}{2} \cdot \frac{x^2}{2} = \frac{x^2}{4}
$$

**Passo 6: Scrittura della soluzione finale**
Sostituendo questo risultato nell'espressione del Passo 3 e aggiungendo la costante di integrazione $C \in \mathbb{R}$, otteniamo:

$$
\int x \ln(x) \, dx = \frac{x^2}{2} \ln(x) - \frac{x^2}{4} + C
$$
