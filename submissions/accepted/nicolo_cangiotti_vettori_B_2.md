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
$$ \mathbf{u} = \langle 1, 2 \rangle, \qquad \mathbf{v} = \langle -2, 2 \rangle, \qquad \mathbf{w} = \langle 3, -3 \rangle $$
Calcola analiticamente:
$$ 3 \cdot \mathbf{u} + \frac{1}{2} \cdot \mathbf{v} - \mathbf{w} $$

# Solution
**1. Teoria**
Un **vettore** è un segmento orientato definito da tre attributi: un modulo (lunghezza), una direzione (la retta di giacenza) e un verso. In un piano cartesiano con applicazione nell'origine, è identificato dalle coordinate della sua estremità (punta).

Per sommare graficamente due vettori si usano due metodi:
- **Metodo punta-coda:** Si posiziona la coda del secondo vettore sulla punta del primo. Il vettore risultante congiunge la coda del primo con la punta del secondo.
- **Regola del parallelogramma:** Facendo coincidere le code dei due vettori, si tracciano le parallele a ciascuno partendo dalle punte. Il vettore somma è la diagonale del parallelogramma così formato (con origine nella coda comune).

**2. Calcolo vettoriale**
Effettuiamo prima le moltiplicazioni per uno scalare su ciascun vettore:
- $$3\mathbf{u} = 3 \cdot \langle 1, 2 \rangle = \langle 3, 6 \rangle$$
- $$\frac{1}{2}\mathbf{v} = \frac{1}{2} \cdot \langle -2, 2 \rangle = \langle -1, 1 \rangle$$
- $$-\mathbf{w} = -1 \cdot \langle 3, -3 \rangle = \langle -3, 3 \rangle$$

Sommiamo algebricamente le componenti:
$$ \langle 3, 6 \rangle + \langle -1, 1 \rangle + \langle -3, 3 \rangle = \langle 3 - 1 - 3, \; 6 + 1 + 3 \rangle = \langle -1, 10 \rangle $$

Il vettore risultante è **$$\langle -1, 10 \rangle$$**.
