---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate"
difficulty: 2
tags:
  - "continuità"
  - "funzioni definite a tratti"
  - "parametri"
---
# Problem Text
Determinare $$k \in \mathbb{R}$$ tale che 
$$
f(x)=\begin{cases}
k \cdot x^2-1  &\text{se } x\le-1\\
\ln(x+2)  &\text{se } x>-1
\end{cases}
$$
sia una funzione continua sui reali.

# Solution
Per far sì che la funzione sia continua ovunque, dobbiamo assicurarci che non presenti salti nel punto di raccordo $$x = -1$$. Negli altri tratti la funzione è continua (un ramo è un polinomio, l'altro un logaritmo con argomento $$x+2>0$$ garantito dalla condizione $$x>-1$$).
Imponiamo l'uguaglianza tra il limite sinistro (che coincide col valore della funzione, essendo definita per $$\le -1$$) e il limite destro.

**1. Valore nel punto e limite sinistro:**
Poiché la disuguaglianza include il segno di uguale nel ramo superiore, possiamo calcolare $$f(-1)$$:
$$ f(-1) = \lim_{x \to -1^-} (k \cdot x^2 - 1) = k(-1)^2 - 1 = k - 1 $$

**2. Limite destro:**
Sfruttiamo l'espressione del ramo inferiore:
$$ \lim_{x \to -1^+} \ln(x + 2) = \ln(-1 + 2) = \ln(1) = 0 $$

**3. Condizione di continuità:**
Eguagliamo i due risultati per determinare il valore del parametro $$k$$:
$$ k - 1 = 0 \implies k = 1 $$

Scegliendo **$$k = 1$$**, la funzione si salda in modo continuo nel punto $$x = -1$$.
