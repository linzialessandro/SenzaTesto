---
year: 3
macro_area: "Fisica e Geometria"
topic: "Sistemi di Forze"
difficulty: 3
tags:
  - "vettori"
  - "risultante"
  - "momento"
  - "retta di applicazione"
---
# Problem Text
Dato il sistema piano di tre forze, i cui punti di applicazione e le cui punte sono leggibili dal piano cartesiano, calcola:
(a) il vettore risultante $$\mathbf{R}$$;
(b) il momento risultante delle forze rispetto all'origine $$\mathbf{M}_O$$;
(c) l'equazione della retta di applicazione del risultante.

I dati geometrici dedotti dalla griglia sono:
- Forza $$\mathbf{F}_1$$ applicata in $$P_1(5,2)$$ con la punta nel punto $$(1,3)$$.
- Forza $$\mathbf{F}_2$$ applicata in $$P_2(1,-1)$$ con la punta nel punto $$(4,-1)$$.
- Forza $$\mathbf{F}_3$$ applicata in $$P_3(-3,-1)$$ con la punta nel punto $$(-1,-3)$$.

# Solution
**(a) Calcolo del risultante $$\mathbf{R}$$**
Determiniamo le componenti cartesiane di ciascuna forza dalla differenza delle coordinate tra punta e punto di applicazione:
- $$\mathbf{F}_1 = \langle 1 - 5, 3 - 2 \rangle = \langle -4, 1 \rangle$$
- $$\mathbf{F}_2 = \langle 4 - 1, -1 - (-1) \rangle = \langle 3, 0 \rangle$$
- $$\mathbf{F}_3 = \langle -1 - (-3), -3 - (-1) \rangle = \langle 2, -2 \rangle$$

Sommiamo i vettori componente per componente:
$$ \mathbf{R} = \mathbf{F}_1 + \mathbf{F}_2 + \mathbf{F}_3 = \langle -4 + 3 + 2, 1 + 0 - 2 \rangle = \langle 1, -1 \rangle $$

**(b) Calcolo del momento risultante $$\mathbf{M}_O$$**
Il momento di ciascuna forza calcolato rispetto all'origine si ottiene dalla relazione $$\mathbf{M} = x_P F_y - y_P F_x$$ (considerando un vettore sull'asse $$z$$).
- $$M_1 = (5)(1) - (2)(-4) = 5 + 8 = 13$$
- $$M_2 = (1)(0) - (-1)(3) = 0 + 3 = 3$$
- $$M_3 = (-3)(-2) - (-1)(2) = 6 + 2 = 8$$

Sommando i contributi si ottiene il momento risultante rispetto all'origine:
$$ \mathbf{M}_O = 13 + 3 + 8 = 24 $$

**(c) Equazione della retta di applicazione**
La retta di applicazione del risultante deve soddisfare l'equazione che lega i bracci e le forze al momento totale:
$$ x \cdot R_y - y \cdot R_x = \mathbf{M}_O $$
Sostituendo i valori ricavati ($$R_x = 1$$, $$R_y = -1$$, $$\mathbf{M}_O = 24$$):
$$ x(-1) - y(1) = 24 \implies -x - y = 24 \implies x + y + 24 = 0 $$
L'equazione in forma esplicita per la retta di applicazione è dunque **$$y = -x - 24$$**.
