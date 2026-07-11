---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali definiti e Teorema della media"
difficulty: 2
ai_generated: true
tags:
  - "teorema della media"
  - "integrali definiti"
  - "Torricelli-Barrow"
  - "analisi"
---
# Problem Text
Determinare il valore del punto $c$ la cui esistenza è garantita dal teorema della media per la funzione $f(x) = 3x^2 - 1$ nell'intervallo $[0, 2]$.

# Solution
1. **Enunciato del teorema della media**:
Poiché la funzione $f(x) = 3x^2 - 1$ è polinomiale e quindi continua sull'intervallo $[0, 2]$, per il teorema della media esiste un punto $c \in [0, 2]$ tale che:

$$
f(c) = \frac{1}{b - a} \int_{a}^{b} f(x) \, dx
$$

In questo caso, $a = 0$ e $b = 2$.

2. **Calcolo dell'integrale definito**:
Utilizzando il teorema fondamentale del calcolo integrale, troviamo una primitiva di $f(x)$:

$$
F(x) = x^3 - x
$$

Calcoliamo l'integrale definito nell'intervallo $[0, 2]$:

$$
\int_{0}^{2} (3x^2 - 1) \, dx = \left[ x^3 - x \right]_{0}^{2}
$$

Applicando la formula di Torricelli-Barrow:

$$
(2^3 - 2) - (0^3 - 0) = 8 - 2 = 6
$$

3. **Determinazione del valore medio**:
Sostituiamo il valore dell'integrale nella formula del teorema della media:

$$
f(c) = \frac{1}{2 - 0} \cdot 6 = 3
$$

4. **Risoluzione dell'equazione per trovare $c$**:
Impostiamo l'equazione $f(c) = 3$:

$$
3c^2 - 1 = 3
$$

$$
3c^2 = 4
$$

$$
c^2 = \frac{4}{3}
$$

Risolvendo l'equazione otteniamo due soluzioni:

$$
c = \pm\sqrt{\frac{4}{3}} = \pm\frac{2\sqrt{3}}{3}
$$

5. **Verifica dell'appartenenza all'intervallo**:
Poiché l'intervallo del teorema è $[0, 2]$, accettiamo solo la soluzione positiva:

$$
c = \frac{2\sqrt{3}}{3} \approx 1.15 \in [0, 2]
$$
