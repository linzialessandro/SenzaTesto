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
- Forza $$\mathbf{F}_1$$ applicata in $$P_1(1,-2)$$ con la punta nel punto $$(4,-4)$$.
- Forza $$\mathbf{F}_2$$ applicata in $$P_2(-4,1)$$ con la punta nel punto $$(-1,2)$$.
- Forza $$\mathbf{F}_3$$ applicata in $$P_3(-1,-3)$$ con la punta nel punto $$(-4,-1)$$.

# Solution
**(a) Calcolo del risultante $$\mathbf{R}$$**
Ricaviamo le componenti cartesiane delle tre forze sottraendo le coordinate del punto di applicazione a quelle della rispettiva punta:
- $$\mathbf{F}_1 = \langle 4 - 1, -4 - (-2) \rangle = \langle 3, -2 \rangle$$
- $$\mathbf{F}_2 = \langle -1 - (-4), 2 - 1 \rangle = \langle 3, 1 \rangle$$
- $$\mathbf{F}_3 = \langle -4 - (-1), -1 - (-3) \rangle = \langle -3, 2 \rangle$$

Il risultante $$\mathbf{R}$$ del sistema è la somma vettoriale di tutte le forze:
$$ \mathbf{R} = \mathbf{F}_1 + \mathbf{F}_2 + \mathbf{F}_3 = \langle 3 + 3 - 3, -2 + 1 + 2 \rangle = \langle 3, 1 \rangle $$

**(b) Calcolo del momento risultante $$\mathbf{M}_O$$**
Il momento rispetto all'origine calcolato con il prodotto vettoriale (solo la componente sull'asse $$z$$ uscente dal foglio) si ottiene con la formula $$M = x_P F_y - y_P F_x$$.
- $$M_1 = (1)(-2) - (-2)(3) = -2 + 6 = 4$$
- $$M_2 = (-4)(1) - (1)(3) = -4 - 3 = -7$$
- $$M_3 = (-1)(2) - (-3)(-3) = -2 - 9 = -11$$

Il momento totale è la somma algebrica dei momenti delle singole forze:
$$ \mathbf{M}_O = 4 - 7 - 11 = -14 $$

**(c) Equazione della retta di applicazione**
La retta lungo la quale agisce il vettore risultante $$\mathbf{R}$$ in modo da produrre un momento $$\mathbf{M}_O$$ rispetto all'origine è definita dalla retta dei momenti:
$$ x \cdot R_y - y \cdot R_x = \mathbf{M}_O $$
Inserendo i valori calcolati ($$R_x = 3$$, $$R_y = 1$$, $$\mathbf{M}_O = -14$$):
$$ x(1) - y(3) = -14 \implies x - 3y + 14 = 0 $$
L'equazione in forma esplicita è:
$$ -3y = -x - 14 \implies y = \frac{1}{3}x + \frac{14}{3} $$
