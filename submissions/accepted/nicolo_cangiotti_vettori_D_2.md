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
$$ \mathbf{u} = \langle 1, 3 \rangle, \qquad \mathbf{v} = \langle -4, 4 \rangle, \qquad \mathbf{w} = \langle 3, -3 \rangle $$
Calcola analiticamente:
$$ 2 \cdot \mathbf{u} + \frac{1}{2} \cdot \mathbf{v} - \mathbf{w} $$

# Solution
**1. Teoria**
Un vettore in matematica è un'entità definita dalle sue tre proprietà intrinseche: un modulo (che indica la quantità o l'intensità della grandezza considerata), una direzione e un verso. Essendo un vettore libero nel piano, lo si rappresenta solitamente con origine in $$(0,0)$$ in modo che coincida con le coordinate del suo punto di arrivo.

La somma visiva o grafica si ottiene in genere con la **regola del parallelogramma** (far partire i vettori dalla stessa origine e trovare il quarto vertice del parallelogramma che generano) oppure con il **metodo punta-coda** (spostare un vettore ponendone la coda sulla punta dell'altro e tracciare un unico vettore dall'origine comune alla punta finale).

**2. Calcolo vettoriale**
Mettiamo a sistema ogni singola operazione moltiplicativa (scalare per vettore):
- $$2\mathbf{u} = 2 \cdot \langle 1, 3 \rangle = \langle 2, 6 \rangle$$
- $$\frac{1}{2}\mathbf{v} = \frac{1}{2} \cdot \langle -4, 4 \rangle = \langle -2, 2 \rangle$$
- $$-\mathbf{w} = -1 \cdot \langle 3, -3 \rangle = \langle -3, 3 \rangle$$

Sommiamo tutte e tre le componenti passo passo:
$$ \langle 2, 6 \rangle + \langle -2, 2 \rangle + \langle -3, 3 \rangle = \langle 2 - 2 - 3, \; 6 + 2 + 3 \rangle = \langle -3, 11 \rangle $$

Il risultato di questa combinazione lineare è il vettore **$$\langle -3, 11 \rangle$$**.
