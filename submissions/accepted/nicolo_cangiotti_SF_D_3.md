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
1) $$5^{2x+1} = 5^{x+3}$$
2) $$\log(4x+1) = \log(2x+5)$$

# Solution
**Equazione 1 (Esponenziale)**
$$5^{2x+1} = 5^{x+3}$$
Le basi delle due potenze sono identiche. Grazie all'iniettività dell'esponenziale è sufficiente eguagliare gli esponenti:
$$2x + 1 = x + 3$$
Raggruppiamo i termini con la incognita a sinistra:
$$2x - x = 3 - 1$$
$$x = 2$$
La soluzione è **$$x = 2$$**.

**Equazione 2 (Logaritmica)**
$$\log(4x+1) = \log(2x+5)$$
La prima operazione necessaria nelle equazioni logaritmiche è stabilire le **Condizioni di Esistenza (C.E.)** affinché gli argomenti dei logaritmi siano positivi:
1. $$4x + 1 > 0 \implies 4x > -1 \implies x > -\frac{1}{4}$$
2. $$2x + 5 > 0 \implies 2x > -5 \implies x > -\frac{5}{2}$$

Confrontando i due vincoli, il più restrittivo (che garantisce la positività di entrambi gli argomenti) è il primo, quindi la C.E. generale è $$x > -\frac{1}{4}$$.

Ora si uguagliano gli argomenti:
$$4x + 1 = 2x + 5$$
$$4x - 2x = 5 - 1$$
$$2x = 4$$
$$x = 2$$

Verifica: Essendo $$2 > -\frac{1}{4}$$, la condizione di esistenza è pienamente soddisfatta.
La soluzione è **$$x = 2$$**.
