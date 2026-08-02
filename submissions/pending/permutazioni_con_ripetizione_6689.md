---
year: 4
macro_area: "Calcolo Combinatorio"
topic: "Permutazioni con ripetizione"
difficulty: 2
ai_generated: true
tags:
  - "permutazioni"
  - "con ripetizione"
  - "fattoriale"
---
# Problem Text
Quante parole (anche prive di significato) si possono formare con le lettere della parola MATEMATICA, utilizzando tutte le 10 lettere?

# Solution
La parola MATEMATICA ha 10 lettere, con lettere ripetute: M compare 2 volte, A 3 volte, T 2 volte, E 1 volta, I 1 volta, C 1 volta. Il numero di permutazioni con ripetizione è dato da:

$$
\frac{10!}{2! \cdot 3! \cdot 2! \cdot 1! \cdot 1! \cdot 1!} = \frac{10!}{2! \cdot 3! \cdot 2!}
$$

Calcoliamo:

$$
10! = 3\,628\,800, \quad 2! = 2, \quad 3! = 6, \quad \text{quindi } 2! \cdot 3! \cdot 2! = 2 \cdot 6 \cdot 2 = 24
$$

Quindi:

$$
\frac{3\,628\,800}{24} = 151\,200
$$

Il numero di parole possibili è **151\,200**.
