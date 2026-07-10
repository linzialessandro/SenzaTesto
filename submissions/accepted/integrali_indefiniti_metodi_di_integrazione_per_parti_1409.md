---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali indefiniti: metodi di integrazione per parti"
difficulty: 2
tags:
  - "analisi"
  - "integrali"
  - "integrazione per parti"
  - "quinto anno"
ai_generated: true
---
# Problem Text
Calcola il seguente integrale indefinito:

$$
\int x e^{3x} \, dx
$$

# Solution
Risolviamo l'integrale applicando il metodo di integrazione per parti.

1. Ricordiamo la formula dell'integrazione per parti:

$$
\int f(x)g'(x) \, dx = f(x)g(x) - \int f'(x)g(x) \, dx
$$

2. Scegliamo le funzioni ponendo:
- Fattore finito: $f(x) = x$, la cui derivata è $f'(x) = 1$
- Fattore differenziale: $g'(x) = e^{3x}$, la cui primitiva è $g(x) = \frac{1}{3}e^{3x}$

3. Applichiamo la formula al nostro integrale:

$$
\int x e^{3x} \, dx = x \cdot \left(\frac{1}{3}e^{3x}\right) - \int 1 \cdot \left(\frac{1}{3}e^{3x}\right) \, dx
$$

4. Semplifichiamo l'espressione:

$$
\int x e^{3x} \, dx = \frac{1}{3}xe^{3x} - \frac{1}{3}\int e^{3x} \, dx
$$

5. Calcoliamo l'ultimo integrale immediato rimanente:

$$
\int e^{3x} \, dx = \frac{1}{3}e^{3x}
$$

6. Sostituiamo nell'espressione principale ed eseguiamo il raccoglimento a fattor comune, aggiungendo la costante d'integrazione $c \in \mathbb{R}$:

$$
\int x e^{3x} \, dx = \frac{1}{3}xe^{3x} - \frac{1}{9}e^{3x} + c = \frac{1}{9}e^{3x}(3x - 1) + c
$$
