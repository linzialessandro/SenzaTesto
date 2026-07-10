---
year: 4
macro_area: "Geometria Analitica"
topic: "Ellisse"
difficulty: 3
tags:
  - "Coniche"
  - "Ellisse"
  - "Tangenza"
  - "Geometria Analitica"
ai_generated: true
---
# Problem Text
Determinare l'equazione dell'ellisse riferita ai propri assi del tipo $ \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 $ che passa per il punto $ P(2, 3) $ ed è tangente alla retta di equazione $ y = -x + 5 $.

# Solution
Imponiamo il passaggio dell'ellisse per il punto $ P(2, 3) $, ottenendo la prima condizione:

$$
\frac{4}{a^2} + \frac{9}{b^2} = 1
$$

La condizione di tangenza tra l'ellisse e una generica retta $ y = mx + q $ è espressa dalla relazione:

$$
q^2 = a^2 m^2 + b^2
$$

Per la retta data $ y = -x + 5 $, i parametri sono $ m = -1 $ e $ q = 5 $. Sostituendo questi valori nella formula di tangenza, si ottiene:

$$
25 = a^2 + b^2 \implies b^2 = 25 - a^2
$$

A questo punto, sostituiamo l'espressione di $ b^2 $ nella prima condizione:

$$
\frac{4}{a^2} + \frac{9}{25 - a^2} = 1
$$

Moltiplichiamo entrambi i membri per il minimo comune multiplo $ a^2(25 - a^2) $, imponendo le condizioni di esistenza $ 0 < a^2 < 25 $:

$$
4(25 - a^2) + 9a^2 = a^2(25 - a^2)
$$

Sviluppiamo i calcoli:

$$
100 - 4a^2 + 9a^2 = 25a^2 - a^4
$$

$$
a^4 - 20a^2 + 100 = 0
$$

Riconosciamo il quadrato di un binomio:

$$
(a^2 - 10)^2 = 0 \implies a^2 = 10
$$

Poiché $ a^2 = 10 $ rispetta la condizione di esistenza, lo sostituiamo per ricavare $ b^2 $:

$$
b^2 = 25 - 10 = 15
$$

L'equazione dell'ellisse cercata è pertanto:

$$
\frac{x^2}{10} + \frac{y^2}{15} = 1
$$
