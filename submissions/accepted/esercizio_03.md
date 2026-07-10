---
year: 3
macro_area: Coniche
topic: circonferenza
difficulty: 4
tags:
  - rette tangenti
  - distanza
ai_generated: true
---
# Problem Text
Determina le equazioni delle rette tangenti alla circonferenza di equazione $x^2 + y^2 - 4x - 6y + 8 = 0$ passanti per l'origine degli assi cartesiani.

# Solution
Riscriviamo l'equazione della circonferenza determinando il suo centro $C$ e il suo raggio $r$.
Le coordinate del centro sono:
$$
x_c = -\frac{-4}{2} = 2, \quad y_c = -\frac{-6}{2} = 3 \implies C(2, 3)
$$
Il raggio è:
$$
r = \sqrt{x_c^2 + y_c^2 - c} = \sqrt{2^2 + 3^2 - 8} = \sqrt{4 + 9 - 8} = \sqrt{5}
$$

Il fascio di rette passanti per l'origine $(0,0)$ ha equazione:
$$
y = mx \implies mx - y = 0
$$
Escludiamo per un attimo la retta verticale $x=0$, che verificheremo separatamente (la sua distanza da $C(2,3)$ è $2$, che è diverso da $\sqrt{5}$, quindi non è tangente).

Imponiamo la condizione di tangenza: la distanza del centro $C$ dalle rette del fascio deve essere uguale al raggio $r$.
$$
\frac{|m(2) - (3)|}{\sqrt{m^2 + (-1)^2}} = \sqrt{5}
$$
$$
\frac{|2m - 3|}{\sqrt{m^2 + 1}} = \sqrt{5}
$$
Elevando al quadrato entrambi i membri (poiché sono positivi):
$$
\frac{(2m - 3)^2}{m^2 + 1} = 5
$$
$$
4m^2 - 12m + 9 = 5(m^2 + 1)
$$
$$
4m^2 - 12m + 9 = 5m^2 + 5
$$
Spostando tutti i termini a destra:
$$
m^2 + 12m - 4 = 0
$$

Risolviamo l'equazione di secondo grado in $m$ utilizzando la formula ridotta:
$$
m = -6 \pm \sqrt{36 - (-4)} = -6 \pm \sqrt{40} = -6 \pm 2\sqrt{10}
$$

Le equazioni delle due rette tangenti cercate sono quindi:
$$
y = (-6 + 2\sqrt{10})x
$$
$$
y = (-6 - 2\sqrt{10})x
$$
