---
year: 3
macro_area: "Algebra"
topic: "Equazioni biquadratiche"
difficulty: 2
tags:
  - "equazioni"
  - "biquadratiche"
  - "algebra"
  - "scuola-superiore"
  - "metodo-di-sostituzione"
ai_generated: true
---
# Problem Text
Risolvi la seguente equazione biquadratica nell'insieme dei numeri reali $\mathbb{R}$:

$$
x^4 - 13x^2 + 36 = 0
$$

# Solution
Ecco la risoluzione dell'equazione biquadratica passo dopo passo:

1. **Sostituzione di variabile**: Sostituiamo la variabile originale introducendo la variabile ausiliaria $t = x^2$ (con il vincolo $t \geq 0$). L'equazione di partenza di quarto grado si trasforma in un'equazione di secondo grado associata in $t$:

$$
t^2 - 13t + 36 = 0
$$

2. **Risoluzione dell'equazione associata**: Applichiamo la formula risolutiva per le equazioni di secondo grado $t = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:

$$
t = \frac{13 \pm \sqrt{(-13)^2 - 4 \cdot 1 \cdot 36}}{2 \cdot 1}
$$

Sviluppiamo i calcoli sotto il segno di radice:

$$
t = \frac{13 \pm \sqrt{169 - 144}}{2} = \frac{13 \pm \sqrt{25}}{2} = \frac{13 \pm 5}{2}
$$

Otteniamo così due soluzioni reali e distinte per $t$:

$$
t_1 = \frac{13 - 5}{2} = 4, \quad t_2 = \frac{13 + 5}{2} = 9
$$

Entrambi i valori ricavati sono positivi, quindi sono pienamente accettabili.

3. **Ritorno alla variabile originale**: Ripristiniamo la variabile $x$ risolvendo le due equazioni corrispondenti a ciascun valore di $t$ ($x^2 = t$):

- Per $t_1 = 4$:

$$
x^2 = 4 \implies x = \pm \sqrt{4} \implies x = \pm 2
$$

- Per $t_2 = 9$:

$$
x^2 = 9 \implies x = \pm \sqrt{9} \implies x = \pm 3
$$

4. **Insieme delle soluzioni**: L'equazione biquadratica originaria ammette quattro soluzioni reali distinte. Scriviamo l'insieme delle soluzioni $S$:

$$
S = \{-3, -2, 2, 3\}
$$
