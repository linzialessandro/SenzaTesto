---
year: 2
macro_area: "Numeri e algoritmi"
topic: "Propriet\u00e0 e operazioni con i radicali"
difficulty: 2
tags:
  - "radicali"
  - "semplificazione di radicali"
  - "trasporto fuori radice"
  - "somma di radicali simili"
---
# Problem Text
Semplifica la seguente espressione contenente radicali numerici:

$$
\sqrt{50} - 3\sqrt{8} + 2\sqrt{18}
$$

# Solution
L'obiettivo è semplificare l'espressione trasportando i fattori fuori dal segno di radice e sommando i radicali simili.

1. **Scomposizione in fattori primi dei radicandi**
Individuiamo i quadrati perfetti all'interno di ciascuna radice:
- $50 = 25 \cdot 2 = 5^2 \cdot 2$
- $8 = 4 \cdot 2 = 2^2 \cdot 2$
- $18 = 9 \cdot 2 = 3^2 \cdot 2$

2. **Sostituzione nell'espressione originaria**
Sostituiamo le scomposizioni ottenute all'interno delle radici:

$$
\sqrt{5^2 \cdot 2} - 3\sqrt{2^2 \cdot 2} + 2\sqrt{3^2 \cdot 2}
$$

3. **Trasporto fuori dal segno di radice**
Portiamo fuori i fattori con esponente pari all'indice della radice (pari a $2$):
- $\sqrt{5^2 \cdot 2} = 5\sqrt{2}$
- $3\sqrt{2^2 \cdot 2} = 3 \cdot 2\sqrt{2} = 6\sqrt{2}$
- $2\sqrt{3^2 \cdot 2} = 2 \cdot 3\sqrt{2} = 6\sqrt{2}$

4. **Scrittura dell'espressione semplificata**
Sostituiamo i singoli termini nell'espressione:

$$
5\sqrt{2} - 6\sqrt{2} + 6\sqrt{2}
$$

5. **Calcolo finale**
Sommiamo i coefficienti dei radicali simili (tutti aventi $\sqrt{2}$ come parte radicale):

$$
(5 - 6 + 6)\sqrt{2} = 5\sqrt{2}
$$

Il risultato della semplificazione è:

$$
5\sqrt{2}
$$
