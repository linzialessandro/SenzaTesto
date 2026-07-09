---
year: 2
macro_area: "Geometria"
topic: "Vettori"
difficulty: 1
tags:
  - "teoria"
  - "combinazione lineare"
---
# Problem Text
1) Che cos'è un vettore?
2) Siano dati i tre seguenti vettori:
$$ \mathbf{u} = \langle -1, 1 \rangle, \qquad \mathbf{v} = \langle 2, -2 \rangle, \qquad \mathbf{w} = \langle -3, -3 \rangle $$
Calcola analiticamente:
$$ 3 \cdot \mathbf{u} - 2 \cdot \mathbf{v} + \mathbf{w} $$

# Solution
**1. Teoria**
Un **vettore** è un ente matematico-geometrico caratterizzato da tre proprietà fondamentali:
- **Modulo** (o intensità/lunghezza).
- **Direzione** (la retta su cui giace).
- **Verso** (il senso di percorrenza sulla retta, indicato dalla punta della freccia).

Nel piano cartesiano si rappresenta come un segmento orientato e (se traslato nell'origine) è descritto interamente da una coppia di coordinate (le sue componenti).

**2. Calcolo vettoriale**
Eseguiamo le operazioni moltiplicando prima le componenti per i rispettivi coefficienti (scalari):
- $$3\mathbf{u} = 3 \cdot \langle -1, 1 \rangle = \langle -3, 3 \rangle$$
- $$-2\mathbf{v} = -2 \cdot \langle 2, -2 \rangle = \langle -4, 4 \rangle$$
- $$+\mathbf{w} = \langle -3, -3 \rangle$$

Sommiamo tutte le componenti:
$$ \langle -3, 3 \rangle + \langle -4, 4 \rangle + \langle -3, -3 \rangle = \langle -3 - 4 - 3, \; 3 + 4 - 3 \rangle = \langle -10, 4 \rangle $$

Il risultato è il vettore **$$\langle -10, 4 \rangle$$**.
