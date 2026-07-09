---
year: 2
macro_area: "Algebra"
topic: "Equazioni"
difficulty: 3
tags:
  - "equazioni fratte"
  - "equazioni di secondo grado"
  - "soluzioni non accettabili"
---
# Problem Text
Risolvi, mostrando tutti i passaggi, la seguente equazione fratta:
$$
\frac{x^2+2x-3}{x^2-2x+1}=0
$$

# Solution
Per prima cosa, fattorizziamo sia il numeratore che il denominatore per rendere più semplici le condizioni di esistenza e la risoluzione.
- Il numeratore $$x^2+2x-3$$ è un trinomio speciale con somma $$+2$$ e prodotto $$-3$$. I numeri che cerchiamo sono $$+3$$ e $$-1$$. Quindi si scompone in $$(x+3)(x-1)$$.
- Il denominatore $$x^2-2x+1$$ è lo sviluppo di un quadrato di binomio: $$(x-1)^2$$.

Riscriviamo l'equazione con le espressioni fattorizzate:
$$
\frac{(x+3)(x-1)}{(x-1)^2} = 0
$$

**1. Campo di Esistenza (C.E.):**
Affinché l'equazione abbia significato, il denominatore deve essere diverso da zero:
$$
(x-1)^2 \neq 0 \implies x - 1 \neq 0 \implies x \neq 1
$$
Il C.E. è $$\mathbb{R} \setminus \{1\}$$.

**2. Risoluzione dell'equazione:**
Avendo posto la condizione sul denominatore, uguagliamo a zero il numeratore per risolvere l'equazione:
$$
(x+3)(x-1) = 0
$$
Per la legge di annullamento del prodotto, abbiamo due possibili radici candidate:
- $$x + 3 = 0 \implies x = -3$$
- $$x - 1 = 0 \implies x = 1$$

**3. Verifica dell'accettabilità:**
Confrontiamo le radici trovate con il Campo di Esistenza stabilito:
- $$x = -3$$ rispetta il C.E. ($-3 \neq 1$), quindi è **accettabile**.
- $$x = 1$$ non rispetta il C.E., perciò è una soluzione **non accettabile**.

Pertanto, l'unica vera soluzione dell'equazione è:
$$
x = -3
$$
