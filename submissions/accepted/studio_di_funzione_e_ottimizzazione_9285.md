---
year: 5
macro_area: "Analisi Matematica"
topic: "Studio di funzione e ottimizzazione"
difficulty: 3
tags:
  - "ottimizzazione"
  - "rettangolo"
  - "parabola"
  - "derivate"
  - "massimi e minimi"
ai_generated: true
---
# Problem Text
Determinare le dimensioni del rettangolo di area massima, avente la base sull'asse delle ascisse e due vertici appartenenti alla parabola di equazione $y = 9 - x^2$ nel semipiano $y \ge 0$.

# Solution
I vertici della base del rettangolo sull'asse $x$ sono $Q_1(x, 0)$ e $Q_2(-x, 0)$, con $0 < x < 3$ per simmetria rispetto all'asse $y$. I vertici superiori hanno coordinate $P_1(x, 9 - x^2)$ e $P_2(-x, 9 - x^2)$.

La base del rettangolo misura $b = 2x$, mentre l'altezza misura $h = 9 - x^2$.

La funzione area $A(x)$ da massimizzare nell'intervallo $]0, 3[$ è:

$$
A(x) = 2x(9 - x^2) = 18x - 2x^3
$$

Calcoliamo la derivata prima della funzione area:

$$
A'(x) = 18 - 6x^2
$$

Studio del segno della derivata:

$$
A'(x) \ge 0 \iff 18 - 6x^2 \ge 0 \iff x^2 \le 3
$$

Poiché $x > 0$, si ha $A'(x) > 0$ per $0 < x < \sqrt{3}$ e $A'(x) < 0$ per $\sqrt{3} < x < 3$.

Quindi, la funzione $A(x)$ cresce nell'intervallo $]0, \sqrt{3}]$ e decresce nell'intervallo $[\sqrt{3}, 3[$. Si ha un punto di massimo assoluto in $x = \sqrt{3}$.

Le dimensioni del rettangolo di area massima sono:

- Base:

$$
b = 2\sqrt{3}
$$

- Altezza:

$$
h = 9 - (\sqrt{3})^2 = 6
$$
