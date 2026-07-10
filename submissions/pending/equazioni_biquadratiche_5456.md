---
year: 3
macro_area: "Algebra"
topic: "Equazioni biquadratiche"
difficulty: 2
tags:
  - "equazioni biquadratiche"
  - "equazioni trinomie"
  - "grado superiore al secondo"
  - "algebra"
---
# Problem Text
Risolvi la seguente equazione biquadratica:

$$
x^4 - 13x^2 + 36 = 0
$$

# Solution
Per risolvere l'equazione biquadratica, procediamo per passi:

1. **Introduzione della variabile ausiliaria**:
Poniamo $t = x^2$ (con $t \ge 0$). Sostituendo nell'equazione di partenza, otteniamo un'equazione di secondo grado nell'incognita $t$:

$$
t^2 - 13t + 36 = 0
$$

2. **Risoluzione dell'equazione di secondo grado nell'incognita $t$**:
Applichiamo la formula risolutiva delle equazioni di secondo grado:

$$
t = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

Sostituendo $a = 1$, $b = -13$ e $c = 36$:

$$
t = \frac{13 \pm \sqrt{(-13)^2 - 4 \cdot 1 \cdot 36}}{2 \cdot 1}
$$

$$
t = \frac{13 \pm \sqrt{169 - 144}}{2}
$$

$$
t = \frac{13 \pm \sqrt{25}}{2} = \frac{13 \pm 5}{2}
$$

Da cui si ricavano i due valori di $t$:

$$
t_1 = \frac{13 - 5}{2} = 4
$$

$$
t_2 = \frac{13 + 5}{2} = 9
$$

3. **Ritorno alla variabile originale $x$**:
Sostituiamo nuovamente $x^2$ al posto di $t$:
- Per $t_1 = 4$:

$$
x^2 = 4 \implies x = \pm 2
$$

- Per $t_2 = 9$:

$$
x^2 = 9 \implies x = \pm 3
$$

4. **Insieme delle soluzioni**:
Le soluzioni dell'equazione biquadratica originaria sono:

$$
x = -3, \quad x = -2, \quad x = 2, \quad x = 3
$$
