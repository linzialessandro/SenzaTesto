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
- Forza $$\mathbf{F}_1$$ applicata in $$P_1(4,2)$$ con la punta nel punto $$(2,2)$$.
- Forza $$\mathbf{F}_2$$ applicata in $$P_2(-4,1)$$ con la punta nel punto $$(-2,2)$$.
- Forza $$\mathbf{F}_3$$ applicata in $$P_3(-4,-1)$$ con la punta nel punto $$(-1,-3)$$.

# Solution
**(a) Calcolo del risultante $$\mathbf{R}$$**
Determiniamo le coordinate del vettore per ogni forza calcolando gli spostamenti sugli assi cartesiani ($$\Delta x, \Delta y$$) dalla coda alla punta:
- $$\mathbf{F}_1 = \langle 2 - 4, 2 - 2 \rangle = \langle -2, 0 \rangle$$
- $$\mathbf{F}_2 = \langle -2 - (-4), 2 - 1 \rangle = \langle 2, 1 \rangle$$
- $$\mathbf{F}_3 = \langle -1 - (-4), -3 - (-1) \rangle = \langle 3, -2 \rangle$$

Il risultante si calcola sommando le rispettive componenti vettoriali:
$$ \mathbf{R} = \mathbf{F}_1 + \mathbf{F}_2 + \mathbf{F}_3 = \langle -2 + 2 + 3, 0 + 1 - 2 \rangle = \langle 3, -1 \rangle $$

**(b) Calcolo del momento risultante $$\mathbf{M}_O$$**
Il momento rispetto al polo nell'origine degli assi si calcola dalla formula del prodotto vettoriale bidimensionale: $$M = x_P F_y - y_P F_x$$.
- $$M_1 = (4)(0) - (2)(-2) = 0 + 4 = 4$$
- $$M_2 = (-4)(1) - (1)(2) = -4 - 2 = -6$$
- $$M_3 = (-4)(-2) - (-1)(3) = 8 + 3 = 11$$

Il momento totale $$\mathbf{M}_O$$ è la somma dei singoli momenti:
$$ \mathbf{M}_O = 4 - 6 + 11 = 9 $$

**(c) Equazione della retta di applicazione**
La retta d'azione del vettore risultante è quella su cui, applicando $$\mathbf{R}$$ in un suo generico punto $$(x,y)$$, si ottiene esattamente il momento totale appena calcolato.
$$ x \cdot R_y - y \cdot R_x = \mathbf{M}_O $$
Sostituiamo i valori di $$\mathbf{R}$$ e $$\mathbf{M}_O$$:
$$ x(-1) - y(3) = 9 \implies -x - 3y = 9 $$
Risolvendo rispetto alla variabile $$y$$ (forma esplicita) si ottiene:
$$ 3y = -x - 9 \implies y = -\frac{1}{3}x - 3 $$
La retta di applicazione è dunque **$$y = -\frac{1}{3}x - 3$$**.
