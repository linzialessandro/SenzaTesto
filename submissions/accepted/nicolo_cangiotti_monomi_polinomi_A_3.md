---
year: 1
macro_area: "Algebra"
topic: "Polinomi"
difficulty: 2
tags:
  - "espressioni"
  - "somma algebrica"
---
# Problem Text
Svolgi, mostrando tutti i passaggi, la seguente espressione con i polinomi:
$$
(a+b^2+a^2b)+(-a-b-2a^2b)-ab^2
$$

# Solution
Per prima cosa eliminiamo le parentesi. Dato che la seconda parentesi è preceduta dal segno più, non vi sarà alcun cambio di segno.
$$
a + b^2 + a^2b - a - b - 2a^2b - ab^2
$$

Ora accorpiamo e sommiamo i termini simili, stando attenti alle parti letterali:
- I monomi in $$a$$: $$a - a = 0$$ (si elidono)
- I monomi in $$a^2b$$: $$a^2b - 2a^2b = -a^2b$$
- Il termine in $$b^2$$ è unico, così come $$-ab^2$$ e $$-b$$.

Scriviamo il polinomio finale in forma normale ordinandolo come preferiamo:
$$
-a^2b - ab^2 + b^2 - b
$$
