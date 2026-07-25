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
Calcolare il seguente integrale indefinito applicando il metodo di integrazione per parti:

$$
\int (2x - 3) e^x \, dx
$$

# Solution
Per risolvere l'integrale indefinito:

$$
\int (2x - 3) e^x \, dx
$$

si applica il teorema di integrazione per parti:

$$
\int f(x) g'(x) \, dx = f(x) g(x) - \int f'(x) g(g) \, dx
$$

**Passaggio 1: Scelta dei fattori**
Si sceglie $f(x)$ come fattore finito (in modo da abbassare il grado del polinomio tramite derivazione) e $g'(x)$ come fattore differenziale:
- $f(x) = 2x - 3 \implies f'(x) = 2$
- $g'(x) = e^x \implies g(x) = e^x$

**Passaggio 2: Applicazione della formula**
Sostituendo le componenti individuate nella formula di integrazione per parti:

$$
\int (2x - 3) e^x \, dx = (2x - 3) e^x - \int 2 e^x \, dx
$$

**Passaggio 3: Calcolo dell'integrale residuo**
L'integrale residuo è un integrale immediato:

$$
\int 2 e^x \, dx = 2 e^x
$$

**Passaggio 4: Determinazione della famiglia di primitive**
Sostituendo il valore dell'integrale residuo e aggiungendo la costante d'integrazione $c \in \mathbb{R}$:

$$
\int (2x - 3) e^x \, dx = (2x - 3) e^x - 2 e^x + c
$$

**Passaggio 5: Semplificazione algebrica**
Raccogliendo $e^x$ a fattor comune, si ottiene la soluzione finale:

$$
\int (2x - 3) e^x \, dx = (2x - 5) e^x + c, \quad c \in \mathbb{R}
$$
