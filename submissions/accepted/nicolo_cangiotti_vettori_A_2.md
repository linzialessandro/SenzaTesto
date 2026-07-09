---
year: 2
macro_area: "Geometria"
topic: "Vettori"
difficulty: 2
tags:
  - "teoria"
  - "somma di vettori"
  - "combinazione lineare"
---
# Problem Text
1) Che cos'è un vettore? Come si rappresenta graficamente la somma tra due vettori?
2) Siano dati i tre seguenti vettori:
$$ \mathbf{u} = \langle -1, 3 \rangle, \qquad \mathbf{v} = \langle 4, 4 \rangle, \qquad \mathbf{w} = \langle -3, -3 \rangle $$
Calcola analiticamente:
$$ 2 \cdot \mathbf{u} + \frac{1}{2} \cdot \mathbf{v} - \mathbf{w} $$

# Solution
**1. Teoria**
Un **vettore** è un ente matematico definito da tre caratteristiche fondamentali: un modulo (o lunghezza), una direzione (la retta su cui giace) e un verso (l'orientazione sulla retta). Nel piano cartesiano, un vettore a partire dall'origine può essere identificato univocamente dalle coordinate della sua punta.

Graficamente, la somma tra due vettori $$\mathbf{a}$$ e $$\mathbf{b}$$ si rappresenta principalmente con due metodi equivalenti:
- **Metodo punta-coda:** Si fa coincidere la coda del vettore $$\mathbf{b}$$ con la punta del vettore $$\mathbf{a}$$. Il vettore somma parte dalla coda di $$\mathbf{a}$$ e arriva alla punta di $$\mathbf{b}$$.
- **Regola del parallelogramma:** Si fanno coincidere le code di $$\mathbf{a}$$ e $$\mathbf{b}$$. Si tracciano le parallele a ciascun vettore partendo dalle rispettive punte. Il vettore somma è la diagonale del parallelogramma così formato, avente origine nella coda comune.

**2. Calcolo vettoriale**
Calcoliamo la combinazione lineare richiesta moltiplicando prima ogni vettore per il suo scalare e infine sommando le componenti corrispondenti (ascisse con ascisse, ordinate con ordinate):

- Calcolo di $$2\mathbf{u}$$:
  $$ 2 \cdot \langle -1, 3 \rangle = \langle -2, 6 \rangle $$
- Calcolo di $$\frac{1}{2}\mathbf{v}$$:
  $$ \frac{1}{2} \cdot \langle 4, 4 \rangle = \langle 2, 2 \rangle $$
- Calcolo di $$-\mathbf{w}$$:
  $$ -\langle -3, -3 \rangle = \langle 3, 3 \rangle $$

Sommiamo i risultati ottenuti:
$$ \langle -2, 6 \rangle + \langle 2, 2 \rangle + \langle 3, 3 \rangle = \langle -2+2+3, \; 6+2+3 \rangle = \langle 3, 11 \rangle $$

Il vettore risultante è **$$\langle 3, 11 \rangle$$**.
