---
year: 2
macro_area: "Algebra"
topic: "Numeri reali e Radicali"
difficulty: 3
ai_generated: true
tags:
  - "radicali"
  - "equazioni a coefficienti irrazionali"
  - "razionalizzazione"
  - "trasporto fuori radice"
---
# Problem Text
Risolvi in $\mathbb{R}$ la seguente equazione di primo grado a coefficienti irrazionali:

$$
\sqrt{12}\, x - \sqrt{75} = \frac{x - 9}{\sqrt{3} + 1}
$$

# Solution
1. **Trasporto dei fattori fuori dal segno di radice:**
Semplifichiamo i radicali $\sqrt{12}$ e $\sqrt{75}$:

$$
\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}
$$

$$
\sqrt{75} = \sqrt{25 \cdot 3} = 5\sqrt{3}
$$

Sostituendo nell'equazione otteniamo:

$$
2\sqrt{3}\, x - 5\sqrt{3} = \frac{x - 9}{\sqrt{3} + 1}
$$

2. **Eliminazione del denominatore:**
Moltiplichiamo entrambi i membri dell'equazione per $(\sqrt{3} + 1)$:

$$
(2\sqrt{3}\, x - 5\sqrt{3})(\sqrt{3} + 1) = x - 9
$$

Eseguiamo la moltiplicazione al primo membro:

$$
2\sqrt{3} \cdot \sqrt{3}\, x + 2\sqrt{3}\, x - 5\sqrt{3} \cdot \sqrt{3} - 5\sqrt{3} = x - 9
$$

Poiché $\sqrt{3} \cdot \sqrt{3} = 3$:

$$
6x + 2\sqrt{3}\, x - 15 - 5\sqrt{3} = x - 9
$$

3. **Isolamento dei termini con l'incognita:**
Raggruppiamo i termini con la $x$ al primo membro e i termini noti al secondo membro:

$$
6x - x + 2\sqrt{3}\, x = 15 - 9 + 5\sqrt{3}
$$

$$
5x + 2\sqrt{3}\, x = 6 + 5\sqrt{3}
$$

Raccogliamo $x$ a fattor comune:

$$
(5 + 2\sqrt{3})x = 6 + 5\sqrt{3}
$$

4. **Calcolo della soluzione e razionalizzazione del denominatore:**
Ricaviamo $x$:

$$
x = \frac{6 + 5\sqrt{3}}{5 + 2\sqrt{3}}
$$

Razionalizziamo il denominatore moltiplicando numeratore e denominatore per il coniugato $(5 - 2\sqrt{3})$:

$$
x = \frac{(6 + 5\sqrt{3})(5 - 2\sqrt{3})}{(5 + 2\sqrt{3})(5 - 2\sqrt{3})}
$$

Calcoliamo il denominatore (prodotto notevole $(a+b)(a-b) = a^2 - b^2$):

$$
(5)^2 - (2\sqrt{3})^2 = 25 - 4 \cdot 3 = 25 - 12 = 13
$$

Calcoliamo il numeratore:

$$
(6 + 5\sqrt{3})(5 - 2\sqrt{3}) = 30 - 12\sqrt{3} + 25\sqrt{3} - 10 \cdot 3 = 30 - 30 + 13\sqrt{3} = 13\sqrt{3}
$$

Sostituendo nell'espressione per $x$:

$$
x = \frac{13\sqrt{3}}{13} = \sqrt{3}
$$

La soluzione dell'equazione è $x = \sqrt{3}$.
