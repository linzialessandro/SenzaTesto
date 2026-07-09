---
year: 2
macro_area: "Algebra"
topic: "Equazioni"
difficulty: 3
tags:
  - "equazioni fratte"
  - "equazioni di secondo grado"
---
# Problem Text
Risolvi, mostrando tutti i passaggi, la seguente equazione fratta:
$$
\frac{x^2-x-6}{x^2-4x+4}=0
$$

# Solution
Scomponiamo in fattori i polinomi al numeratore e al denominatore:
- Al numeratore $$x^2-x-6$$ abbiamo un trinomio speciale di secondo grado. Troviamo due numeri la cui somma sia $$-1$$ e il cui prodotto sia $$-6$$: sono $$-3$$ e $$+2$$. La scomposizione è $$(x-3)(x+2)$$.
- Al denominatore $$x^2-4x+4$$ riconosciamo lo sviluppo del quadrato del binomio $$(x-2)^2$$.

L'equazione fratta può essere riscritta come:
$$
\frac{(x-3)(x+2)}{(x-2)^2} = 0
$$

**1. Campo di Esistenza (C.E.):**
Poniamo il denominatore diverso da zero per garantire il significato dell'espressione:
$$
(x-2)^2 \neq 0 \implies x - 2 \neq 0 \implies x \neq 2
$$
Il C.E. è l'insieme $$\mathbb{R} \setminus \{2\}$$.

**2. Risoluzione dell'equazione:**
Con la condizione sul denominatore garantita, l'equazione si annulla se si annulla il numeratore:
$$
(x-3)(x+2) = 0
$$
Per la legge di annullamento del prodotto, otteniamo le due soluzioni:
- $$x - 3 = 0 \implies x = 3$$
- $$x + 2 = 0 \implies x = -2$$

**3. Verifica dell'accettabilità:**
Infine, controlliamo se le soluzioni soddisfano le condizioni di esistenza (cioè devono essere diverse da $$2$$):
- $$x = 3$$ è diversa da $$2$$ (soluzione **accettabile**).
- $$x = -2$$ è diversa da $$2$$ (soluzione **accettabile**).

L'equazione fratta ha due soluzioni valide: $$x = 3$$ e $$x = -2$$.
