---
year: 2
macro_area: "Algebra"
topic: "Equazioni"
difficulty: 2
tags:
  - "equazioni esponenziali"
  - "equazioni logaritmiche"
  - "condizioni di esistenza"
---
# Problem Text
Risolvi le seguenti due equazioni:
1) $$3^{2x+2} = 3^{x-1}$$
2) $$\log(2x+1) = \log(3x-4)$$

# Solution
**Equazione 1 (Esponenziale)**
$$3^{2x+2} = 3^{x-1}$$
Poiché le basi sono identiche (entrambe uguali a 3), possiamo eguagliare direttamente gli esponenti per l'iniettività della funzione esponenziale:
$$2x + 2 = x - 1$$
Spostiamo i termini con la $$x$$ a sinistra e i numeri a destra:
$$2x - x = -1 - 2$$
$$x = -3$$
La soluzione è **$$x = -3$$**.

**Equazione 2 (Logaritmica)**
$$\log(2x+1) = \log(3x-4)$$
Prima di risolvere, dobbiamo imporre le **Condizioni di Esistenza (C.E.)** degli argomenti dei logaritmi (devono essere strettamente positivi):
1. $$2x + 1 > 0 \implies 2x > -1 \implies x > -\frac{1}{2}$$
2. $$3x - 4 > 0 \implies 3x > 4 \implies x > \frac{4}{3}$$

Intersecando le condizioni, il dominio di validità dell'equazione è l'intervallo più restrittivo: $$x > \frac{4}{3}$$.

Ora risolviamo eguagliando gli argomenti (grazie all'iniettività della funzione logaritmo):
$$2x + 1 = 3x - 4$$
Portiamo le $$x$$ a sinistra:
$$2x - 3x = -4 - 1$$
$$-x = -5$$
$$x = 5$$

Verifichiamo la soluzione con le C.E.: essendo $$5 > \frac{4}{3}$$, la soluzione è accettabile.
La soluzione è **$$x = 5$$**.
