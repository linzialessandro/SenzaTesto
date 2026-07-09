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
- Forza $$\mathbf{F}_1$$ applicata in $$P_1(5,2)$$ con la punta nel punto $$(2,3)$$.
- Forza $$\mathbf{F}_2$$ applicata in $$P_2(-4,1)$$ con la punta nel punto $$(-1,1)$$.
- Forza $$\mathbf{F}_3$$ applicata in $$P_3(3,-1)$$ con la punta nel punto $$(1,-3)$$.

# Solution
**(a) Calcolo del risultante $$\mathbf{R}$$**
Per prima cosa, determiniamo le componenti cartesiane di ciascuna forza, calcolando la differenza tra le coordinate della punta e quelle del punto di applicazione:
- $$\mathbf{F}_1 = \langle 2 - 5, 3 - 2 \rangle = \langle -3, 1 \rangle$$
- $$\mathbf{F}_2 = \langle -1 - (-4), 1 - 1 \rangle = \langle 3, 0 \rangle$$
- $$\mathbf{F}_3 = \langle 1 - 3, -3 - (-1) \rangle = \langle -2, -2 \rangle$$

Il risultante $$\mathbf{R}$$ è la somma vettoriale delle tre forze:
$$ \mathbf{R} = \mathbf{F}_1 + \mathbf{F}_2 + \mathbf{F}_3 = \langle -3 + 3 - 2, 1 + 0 - 2 \rangle = \langle -2, -1 \rangle $$

**(b) Calcolo del momento risultante $$\mathbf{M}_O$$**
Il momento di una forza rispetto all'origine (considerato come vettore lungo l'asse $$z$$) è dato dal prodotto vettoriale 2D (determinante) $$\mathbf{P} \times \mathbf{F} = x_P F_y - y_P F_x$$.
Calcoliamo i singoli momenti:
- $$M_1 = 5 \cdot 1 - 2 \cdot (-3) = 5 + 6 = 11$$
- $$M_2 = (-4) \cdot 0 - 1 \cdot 3 = 0 - 3 = -3$$
- $$M_3 = 3 \cdot (-2) - (-1) \cdot (-2) = -6 - 2 = -8$$

Il momento risultante rispetto all'origine è la somma dei singoli momenti:
$$ \mathbf{M}_O = M_1 + M_2 + M_3 = 11 - 3 - 8 = 0 $$
Essendo $$\mathbf{M}_O = 0$$, il risultante non genera momento rotazionale rispetto all'origine.

**(c) Equazione della retta di applicazione**
L'equazione generale della retta di applicazione del risultante si ricava ponendo il momento rispetto al generico punto $$(x,y)$$ uguale a zero, oppure partendo dalla relazione $$M_O = x R_y - y R_x$$. 
Essendo il risultante passante per un punto la cui retta produce momento $$M_O$$, l'equazione è:
$$ x \cdot R_y - y \cdot R_x = \mathbf{M}_O $$
Sostituiamo i valori calcolati ($$R_x = -2$$, $$R_y = -1$$, $$\mathbf{M}_O = 0$$):
$$ x(-1) - y(-2) = 0 \implies -x + 2y = 0 \implies x - 2y = 0 $$
La retta di applicazione del risultante è quindi **$$y = \frac{x}{2}$$**, e passa esattamente per l'origine (poiché il momento in $$O$$ è nullo).
