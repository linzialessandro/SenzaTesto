---
year: 3
macro_area: "Fisica e Geometria"
topic: "Sistemi di Forze"
difficulty: 2
tags:
  - "vettori"
  - "risultante"
  - "momento"
  - "retta di applicazione"
---
# Problem Text
Dato un sistema piano di due forze le cui punte e i cui punti di applicazione sono estratti dal piano cartesiano, calcola:
(a) il vettore risultante $$\mathbf{R}$$;
(b) il momento risultante delle forze rispetto all'origine $$\mathbf{M}_O$$;
(c) l'equazione della retta di applicazione del risultante.

I dati geometrici dedotti sono i seguenti:
- Forza $$\mathbf{F}_1$$ applicata in $$P_1(-4,1)$$ con la punta nel punto $$(-1,1)$$.
- Forza $$\mathbf{F}_2$$ applicata in $$P_2(-3,-1)$$ con la punta nel punto $$(-1,-3)$$.

# Solution
**(a) Calcolo del risultante $$\mathbf{R}$$**
Ricaviamo prima di tutto le componenti dei due vettori forza, sottraendo le coordinate della coda a quelle della punta:
- $$\mathbf{F}_1 = \langle -1 - (-4), 1 - 1 \rangle = \langle 3, 0 \rangle$$
- $$\mathbf{F}_2 = \langle -1 - (-3), -3 - (-1) \rangle = \langle 2, -2 \rangle$$

Il risultante totale è:
$$ \mathbf{R} = \mathbf{F}_1 + \mathbf{F}_2 = \langle 3 + 2, 0 - 2 \rangle = \langle 5, -2 \rangle $$

**(b) Calcolo del momento risultante $$\mathbf{M}_O$$**
Il momento si calcola per ognuna delle forze come $$M = x_P F_y - y_P F_x$$.
- $$M_1 = (-4)(0) - (1)(3) = 0 - 3 = -3$$
- $$M_2 = (-3)(-2) - (-1)(2) = 6 - (-2) = 8$$

La somma dei momenti dà il momento risultante del sistema rispetto all'origine:
$$ \mathbf{M}_O = -3 + 8 = 5 $$

**(c) Equazione della retta di applicazione**
La retta di applicazione garantisce l'equivalenza statica (stesso momento con l'applicazione di $$\mathbf{R}$$). La sua equazione è:
$$ x \cdot R_y - y \cdot R_x = \mathbf{M}_O $$
Sostituendo:
$$ x(-2) - y(5) = 5 \implies -2x - 5y = 5 $$
In forma esplicita:
$$ 5y = -2x - 5 \implies y = -\frac{2}{5}x - 1 $$
