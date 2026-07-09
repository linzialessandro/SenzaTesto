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
\frac{x^2+3x-4}{x^2+2x+1}=0
$$

# Solution
Iniziamo scomponendo in fattori numeratore e denominatore:
- Il numeratore $$x^2+3x-4$$ è un trinomio le cui radici si possono trovare cercando due numeri aventi per somma $$+3$$ e per prodotto $$-4$$. Questi numeri sono $$+4$$ e $$-1$$, da cui si ha $$(x+4)(x-1)$$.
- Il denominatore $$x^2+2x+1$$ è chiaramente lo sviluppo del quadrato del binomio $$(x+1)^2$$.

Riscriviamo l'equazione scomposta:
$$
\frac{(x+4)(x-1)}{(x+1)^2} = 0
$$

**1. Campo di Esistenza (C.E.):**
Il denominatore deve essere diverso da zero:
$$
(x+1)^2 \neq 0 \implies x + 1 \neq 0 \implies x \neq -1
$$
Quindi C.E. = $$\mathbb{R} \setminus \{-1\}$$.

**2. Risoluzione dell'equazione:**
Avendo accertato che il denominatore è non nullo, uguagliamo a zero il numeratore:
$$
(x+4)(x-1) = 0
$$
Per la legge di annullamento del prodotto otteniamo due soluzioni dall'equazione associata:
- $$x + 4 = 0 \implies x = -4$$
- $$x - 1 = 0 \implies x = 1$$

**3. Verifica dell'accettabilità:**
Verifichiamo ora se le radici trovate rientrano nel Campo di Esistenza (devono essere diverse da $$-1$$):
- $$x = -4$$ è diversa da $$-1$$, quindi è **accettabile**.
- $$x = 1$$ è diversa da $$-1$$, quindi è **accettabile**.

L'equazione ammette due soluzioni distinte: $$x = -4$$ e $$x = 1$$.
