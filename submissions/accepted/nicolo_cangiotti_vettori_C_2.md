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
$$ \mathbf{u} = \langle -3, 3 \rangle, \qquad \mathbf{v} = \langle 2, 4 \rangle, \qquad \mathbf{w} = \langle -2, -2 \rangle $$
Calcola analiticamente:
$$ \frac{1}{3} \cdot \mathbf{u} + 2 \cdot \mathbf{v} - \mathbf{w} $$

# Solution
**1. Teoria**
Un **vettore** è definito da una lunghezza (modulo), da una retta d'azione (direzione) e dall'orientamento su tale retta (verso). Dal punto di vista algebrico nel piano cartesiano (se lo fissiamo nell'origine), equivale alle due componenti cartesiane che descrivono il punto d'arrivo.

La somma grafica di due vettori può essere realizzata:
- Col **metodo punta-coda**: Spostando rigidamente un vettore in modo che la sua origine (coda) coincida con l'estremità (punta) del primo; il vettore risultante unisce la coda del primo alla punta del secondo.
- Con la **regola del parallelogramma**: Ponendo i vettori con la stessa origine e disegnando le rette parallele ad essi passanti per le loro punte, si ottiene un parallelogramma in cui la diagonale tracciata a partire dall'origine comune è la somma.

**2. Calcolo vettoriale**
Effettuiamo i prodotti per gli scalari:
- $$\frac{1}{3}\mathbf{u} = \frac{1}{3} \cdot \langle -3, 3 \rangle = \langle -1, 1 \rangle$$
- $$2\mathbf{v} = 2 \cdot \langle 2, 4 \rangle = \langle 4, 8 \rangle$$
- $$-\mathbf{w} = -1 \cdot \langle -2, -2 \rangle = \langle 2, 2 \rangle$$

Sommiamo le componenti rispettive:
$$ \langle -1, 1 \rangle + \langle 4, 8 \rangle + \langle 2, 2 \rangle = \langle -1 + 4 + 2, \; 1 + 8 + 2 \rangle = \langle 5, 11 \rangle $$

Il vettore somma finale è **$$\langle 5, 11 \rangle$$**.
