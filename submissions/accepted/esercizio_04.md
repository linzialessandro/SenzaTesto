---
year: 3
macro_area: Coniche
topic: ellisse
difficulty: 4
tags:
  - equazione canonica
  - fuochi
  - passaggio per un punto
ai_generated: true
---
# Problem Text
Scrivi l'equazione canonica dell'ellisse con centro nell'origine degli assi, sapendo che uno dei suoi fuochi ha coordinate $F(3, 0)$ e che passa per il punto $P\left(4, \frac{12}{5}\right)$.

# Solution
L'ellisse ha il centro nell'origine e un fuoco sull'asse delle $x$, perciò i suoi fuochi sono $F_1(-c, 0)$ e $F_2(c, 0)$ e la sua equazione è della forma:
$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1
$$
con la relazione fondamentale $a^2 = b^2 + c^2$.

Sappiamo che $c = 3$, di conseguenza:
$$
a^2 - b^2 = 9 \implies a^2 = b^2 + 9
$$

L'ellisse passa per il punto $P\left(4, \frac{12}{5}\right)$. Sostituendo le coordinate del punto nell'equazione otteniamo:
$$
\frac{16}{a^2} + \frac{144/25}{b^2} = 1
$$

Sostituiamo ora $a^2 = b^2 + 9$ nell'equazione in modo da avere un'unica incognita:
$$
\frac{16}{b^2 + 9} + \frac{144}{25b^2} = 1
$$

Moltiplichiamo tutto per il denominatore comune $25b^2(b^2 + 9)$:
$$
16 \cdot 25b^2 + 144(b^2 + 9) = 25b^2(b^2 + 9)
$$
$$
400b^2 + 144b^2 + 1296 = 25b^4 + 225b^2
$$
Portiamo tutti i termini a destra per formare un'equazione biquadratica:
$$
25b^4 - 319b^2 - 1296 = 0
$$

Poniamo $t = b^2$ (con la condizione $t > 0$):
$$
25t^2 - 319t - 1296 = 0
$$
Calcoliamo il discriminante:
$$
\Delta = (-319)^2 - 4(25)(-1296) = 101761 + 129600 = 231361
$$
La cui radice quadrata è esatta: $\sqrt{231361} = 481$.
Troviamo le soluzioni per $t$:
$$
t = \frac{319 \pm 481}{50}
$$
Consideriamo solo il valore positivo, in quanto $t = b^2$ deve essere maggiore di zero:
$$
t = \frac{319 + 481}{50} = \frac{800}{50} = 16
$$

Pertanto abbiamo ottenuto $b^2 = 16$.
Dalla relazione iniziale calcoliamo ora il valore di $a^2$:
$$
a^2 = b^2 + 9 = 16 + 9 = 25
$$

L'equazione canonica dell'ellisse è quindi:
$$
\frac{x^2}{25} + \frac{y^2}{16} = 1
$$
