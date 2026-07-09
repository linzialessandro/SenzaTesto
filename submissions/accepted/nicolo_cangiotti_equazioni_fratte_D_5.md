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
\frac{x^2-4}{x^2-6x+9}=0
$$

# Solution
Procediamo con la scomposizione in fattori dei termini presenti:
- Al numeratore $$x^2-4$$ è la differenza di due quadrati (rispettivamente di $$x$$ e di $$2$$), perciò si scompone come somma per differenza: $$(x-2)(x+2)$$.
- Al denominatore $$x^2-6x+9$$ è lo sviluppo di un quadrato del binomio: $$(x-3)^2$$.

Riscriviamo l'equazione frazionaria con i termini scomposti:
$$
\frac{(x-2)(x+2)}{(x-3)^2} = 0
$$

**1. Campo di Esistenza (C.E.):**
Escludiamo i valori che annullano il denominatore:
$$
(x-3)^2 \neq 0 \implies x - 3 \neq 0 \implies x \neq 3
$$
Il C.E. è $$\mathbb{R} \setminus \{3\}$$.

**2. Risoluzione dell'equazione:**
Posto il denominatore non nullo, uguagliamo a zero il numeratore:
$$
(x-2)(x+2) = 0
$$
Grazie alla legge di annullamento del prodotto, otteniamo le due potenziali soluzioni:
- $$x - 2 = 0 \implies x = 2$$
- $$x + 2 = 0 \implies x = -2$$

**3. Verifica dell'accettabilità:**
Confrontiamo ora $$x = 2$$ e $$x = -2$$ con il Campo di Esistenza.
- Entrambi i valori sono diversi da $$3$$, quindi soddisfano la condizione di esistenza e sono perciò **accettabili**.

L'equazione ammette due soluzioni: $$x = 2$$ e $$x = -2$$.
