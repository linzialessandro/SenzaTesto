---
year: 5
macro_area: "Geometria dello spazio"
topic: "Poliedri e solidi di rotazione"
difficulty: 4
ai_generated: true
tags:
  - "stereometria"
  - "piramide quadrangolare"
  - "cilindro inscritto"
  - "volume cilindro"
  - "similitudine nei solidi"
---
# Problem Text
Si consideri una piramide quadrangolare regolare $ABCDV$ avente come base il quadrato $ABCD$ di lato $2a$ e altezza $VH = a\sqrt{2}$. Un cilindro circolare retto ha la base inferiore poggiata sulla base della piramide e la base superiore inscritta nella sezione quadrata della piramide ottenuta con un piano ad essa parallelo. Sapendo che l'altezza del cilindro è uguale al raggio della sua base, si determini il volume del cilindro in funzione di $a$.

# Solution
Sia $H$ il centro della base $ABCD$ della piramide e $V$ il suo vertice, per cui l'altezza della piramide è $VH = a\sqrt{2}$.
Indichiamo con $r$ il raggio della base del cilindro e con $h$ la sua altezza. Per ipotesi, si ha:

$$
h = r
$$

La base superiore del cilindro è inscritta in una sezione quadrata parallela alla base $ABCD$, situata a distanza $h = r$ da essa. Sia $s$ il lato di questa sezione quadrata. Poiché il cerchio di raggio $r$ è inscritto in questo quadrato di lato $s$, si ha:

$$
s = 2r
$$

Per similitudine tra la sezione e la base della piramide, il rapporto tra il lato della sezione $s$ e il lato della base $2a$ è pari al rapporto tra le rispettive distanze dal vertice $V$:

$$
\frac{s}{2a} = \frac{VH - r}{VH}
$$

Sostituendo $s = 2r$ e l'altezza della piramide $VH = a\sqrt{2}$, si ottiene:

$$
\frac{2r}{2a} = \frac{a\sqrt{2} - r}{a\sqrt{2}}
$$

$$
\frac{r}{a} = 1 - \frac{r}{a\sqrt{2}}
$$

Risolviamo ora l'equazione rispetto a $r$:

$$
r \left( 1 + \frac{1}{\sqrt{2}} \right) = a
$$

$$
r \left( \frac{\sqrt{2} + 1}{\sqrt{2}} \right) = a
$$

$$
r = a \frac{\sqrt{2}}{\sqrt{2} + 1} = a\sqrt{2}(\sqrt{2} - 1) = a(2 - \sqrt{2})
$$

Il volume $V_c$ del cilindro è dato da:

$$
V_c = \pi r^2 h = \pi r^3
$$

Sostituendo il valore del raggio $r$ precedentemente calcolato:

$$
V_c = \pi \left[ a(2 - \sqrt{2}) \right]^3 = \pi a^3 (2 - \sqrt{2})^3
$$

Sviluppiamo infine la potenza del binomio:

$$
(2 - \sqrt{2})^3 = 8 - 3(4)(\sqrt{2}) + 3(2)(2) - 2\sqrt{2} = 8 - 12\sqrt{2} + 12 - 2\sqrt{2} = 20 - 14\sqrt{2}
$$

Pertanto, il volume del cilindro è:

$$
V_c = \pi a^3 (20 - 14\sqrt{2}) = 2\pi a^3 (10 - 7\sqrt{2})
$$
