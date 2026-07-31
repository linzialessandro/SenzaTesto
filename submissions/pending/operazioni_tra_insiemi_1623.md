---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Operazioni tra insiemi"
difficulty: 1
ai_generated: true
tags:
  - "Insiemi"
  - "Intersezione"
  - "Differenza tra insiemi"
  - "Operazioni con insiemi"
---
# Problem Text
Considera i tre insiemi $A$, $B$ e $C$ definiti per elencazione:

$$
A = \{1, 2, 3, 4, 5\}
$$

$$
B = \{3, 4, 5, 6, 7\}
$$

$$
C = \{4, 5, 8\}
$$

Determina l'insieme $E$ ottenuto dalla seguente operazione tra insiemi:

$$
E = (A \cap B) \setminus C
$$

# Solution
Per determinare l'insieme $E = (A \cap B) \setminus C$, eseguiamo le operazioni in ordine.

Passo 1: Calcoliamo l'intersezione $A \cap B$.
L'intersezione di due insiemi è l'insieme formato dagli elementi che appartengono sia ad $A$ sia a $B$. Confrontando gli elementi di $A = \{1, 2, 3, 4, 5\}$ e $B = \{3, 4, 5, 6, 7\}$, gli elementi in comune sono $3$, $4$ e $5$:

$$
A \cap B = \{3, 4, 5\}
$$

Passo 2: Calcoliamo la differenza tra insiemi $(A \cap B) \setminus C$.
La differenza tra due insiemi elimina dal primo insieme tutti gli elementi che appartengono anche al secondo insieme. 
Gli elementi dell'insieme $C$ sono $\{4, 5, 8\}$. Tra questi, gli elementi $4$ e $5$ appartengono anche ad $A \cap B$.

Passo 3: Scriviamo il risultato finale.
Togliendo $4$ e $5$ dall'insieme $\{3, 4, 5\}$, rimane soltanto l'elemento $3$:

$$
E = \{3\}
$$

L'insieme cercato è quindi $E = \{3\}$.
