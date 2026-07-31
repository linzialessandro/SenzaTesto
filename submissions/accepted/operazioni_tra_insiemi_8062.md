---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Operazioni tra insiemi"
difficulty: 1
ai_generated: true
tags:
  - "insiemi"
  - "intersezione"
  - "differenza tra insiemi"
  - "operazioni tra insiemi"
---
# Problem Text
Dati tre insiemi $A$, $B$ e $C$ definiti come:

$$
A = \{1, 2, 3, 4, 5, 6\}
$$

$$
B = \{4, 5, 6, 7, 8\}
$$

$$
C = \{2, 4, 6, 8, 10\}
$$

Determina l'insieme risultante dalla seguente operazione tra insiemi:

$$
(A \cap B) \setminus C
$$

# Solution
Per risolvere l'espressione con gli insiemi $(A \cap B) \setminus C$, procediamo eseguendo prima le operazioni tra parentesi.

1. **Calcolo dell'intersezione $A \cap B$**:
L'intersezione contiene solo gli elementi appartenenti contemporaneamente sia all'insieme $A$ sia all'insieme $B$.
Confrontando $A = \{1, 2, 3, 4, 5, 6\}$ e $B = \{4, 5, 6, 7, 8\}$, gli elementi comuni sono $4, 5, 6$.
Quindi:

$$
A \cap B = \{4, 5, 6\}
$$

2. **Calcolo della differenza $(A \cap B) \setminus C$**:
La differenza indica l'insieme degli elementi che appartengono a $(A \cap B)$ ma **non** appartengono a $C$.
Sappiamo che:

$$
A \cap B = \{4, 5, 6\}
$$

$$
C = \{2, 4, 6, 8, 10\}
$$

3. **Eliminazione degli elementi appartenenti a $C$**:
Tra gli elementi di $A \cap B$ (cioè $4$, $5$, $6$), dobbiamo rimuovere quelli presenti in $C$. Gli elementi presenti anche in $C$ sono $4$ e $6$.
Togliendo $4$ e $6$ dall'insieme $\{4, 5, 6\}$, l'unico elemento rimasto è $5$.

4. **Risultato finale**:
L'insieme cercato è:

$$
(A \cap B) \setminus C = \{5\}
$$
