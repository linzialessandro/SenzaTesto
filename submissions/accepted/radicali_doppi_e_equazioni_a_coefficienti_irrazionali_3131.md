---
year: 2
macro_area: "Numeri reali e Radicali"
topic: "Radicali doppi e equazioni a coefficienti irrazionali"
difficulty: 5
ai_generated: true
tags:
  - "radicali"
  - "radicali doppi"
  - "razionalizzazione"
  - "equazioni parametriche"
  - "equazioni irrazionali"
---
# Problem Text
Risolvere ed esplicitare in forma razionalizzata la soluzione della seguente equazione parametrica a coefficienti irrazionali nell'incognita $x \in \mathbb{R}$, al variare del parametro reale $k$:

$$
\frac{x - 1}{\sqrt{4 - 2\sqrt{3}}} + x \sqrt{7 + 4\sqrt{3}} = k \sqrt{3}
$$

# Solution
Semplifichiamo i radicali doppi presenti nell'equazione:

- Per $\sqrt{4 - 2\sqrt{3}} = \sqrt{4 - \sqrt{12}}$, calcoliamo $c = \sqrt{4^2 - 12} = 2$:

$$
\sqrt{4 - 2\sqrt{3}} = \sqrt{\frac{4+2}{2}} - \sqrt{\frac{4-2}{2}} = \sqrt{3} - 1
$$

- Per $\sqrt{7 + 4\sqrt{3}} = \sqrt{7 + \sqrt{48}}$, calcoliamo $c = \sqrt{7^2 - 48} = 1$:

$$
\sqrt{7 + 4\sqrt{3}} = \sqrt{\frac{7+1}{2}} + \sqrt{\frac{7-1}{2}} = \sqrt{4} + \sqrt{3} = 2 + \sqrt{3}
$$

Sostituiamo le espressioni semplificate nell'equazione di partenza:

$$
\frac{x - 1}{\sqrt{3} - 1} + x(2 + \sqrt{3}) = k\sqrt{3}
$$

Razionalizziamo il primo termine moltiplicando numeratore e denominatore per $(\sqrt{3} + 1)$:

$$
\frac{(x - 1)(\sqrt{3} + 1)}{2} + x(2 + \sqrt{3}) = k\sqrt{3}
$$

Moltiplichiamo entrambi i membri per $2$:

$$
(x - 1)(\sqrt{3} + 1) + 2x(2 + \sqrt{3}) = 2k\sqrt{3}
$$

Sviluppiamo i prodotti e raggruppiamo i termini in $x$:

$$
x\sqrt{3} + x - \sqrt{3} - 1 + 4x + 2\sqrt{3}x = 2k\sqrt{3}
$$

$$
x(5 + 3\sqrt{3}) = (2k + 1)\sqrt{3} + 1
$$

Poiché $5 + 3\sqrt{3} \neq 0$, l'equazione è determinata per ogni $k \in \mathbb{R}$. Isoliamo $x$:

$$
x = \frac{(2k + 1)\sqrt{3} + 1}{3\sqrt{3} + 5}
$$

Razionalizziamo il denominatore moltiplicando per $(3\sqrt{3} - 5)$:

$$
x = \frac{[(2k + 1)\sqrt{3} + 1](3\sqrt{3} - 5)}{(3\sqrt{3} + 5)(3\sqrt{3} - 5)}
$$

Il denominatore vale $(3\sqrt{3})^2 - 5^2 = 27 - 25 = 2$. Sviluppiamo il numeratore:

$$
[(2k + 1)\sqrt{3} + 1](3\sqrt{3} - 5) = 3 \cdot 3(2k + 1) - 5(2k + 1)\sqrt{3} + 3\sqrt{3} - 5
$$

$$
= 18k + 4 - (10k + 2)\sqrt{3}
$$

Dividendo numeratore e denominatore per $2$, si ottiene la soluzione finale:

$$
x = 9k + 2 - (5k + 1)\sqrt{3} \quad \forall k \in \mathbb{R}
$$
