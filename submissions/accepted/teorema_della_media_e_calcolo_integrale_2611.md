---
year: 5
macro_area: "Analisi Matematica"
topic: "Teorema della media e calcolo integrale"
difficulty: 2
tags:
  - "Teorema della media"
  - "Calcolo integrale"
  - "Integrali definiti"
  - "Analisi Matematica"
---
# Problem Text
Determinare il valor medio della funzione $f(x) = 3x^2 - 4x$ nell'intervallo $[0, 2]$ e calcolare il punto $c \in (0, 2)$ previsto dal teorema della media integrale.

# Solution
Il teorema della media integrale per una funzione continua $f(x)$ nell'intervallo $[a, b]$ afferma che esiste un punto $c \in (a, b)$ tale che:

$$
f(c) = \frac{1}{b-a} \int_a^b f(x) \, dx
$$

Seguiamo i passaggi per calcolare il valore medio e trovare il punto $c$:

1. **Verifica delle ipotesi**: La funzione $f(x) = 3x^2 - 4x$ è continua sull'intervallo $[0, 2]$ poiché è una funzione polinomiale. Le condizioni di applicabilità del teorema sono soddisfatte.

2. **Calcolo dell'integrale definito**: Troviamo innanzitutto una primitiva $F(x)$ della funzione:

$$
F(x) = \int (3x^2 - 4x) \, dx = x^3 - 2x^2
$$

Utilizzando il teorema fondamentale del calcolo integrale (formula di Torricelli-Barrow), calcoliamo l'integrale definito nell'intervallo $[0, 2]$:

$$
\int_0^2 (3x^2 - 4x) \, dx = \left[ x^3 - 2x^2 \right]_0^2 = (2^3 - 2 \cdot 2^2) - (0^3 - 2 \cdot 0^2) = 0
$$

3. **Calcolo del valor medio**: Dividiamo l'integrale per l'ampiezza dell'intervallo $b - a = 2 - 0 = 2$:

$$
\mu = \frac{1}{2} \int_0^2 (3x^2 - 4x) \, dx = \frac{1}{2} \cdot 0 = 0
$$

4. **Determinazione del punto $c$**: Risolviamo l'equazione $f(c) = \mu$, ovvero $f(c) = 0$, per trovare il valore di $c$:

$$
3c^2 - 4c = 0 \implies c(3c - 4) = 0
$$

Le soluzioni dell'equazione sono:

$$
c = 0 \quad \text{oppure} \quad c = \frac{4}{3}
$$

5. **Conclusione**: Poiché il teorema della media garantisce l'esistenza di un punto appartenente all'intervallo aperto $(a, b)$, l'unico valore accettabile è all'interno di $(0, 2)$. Pertanto, scartiamo $c = 0$ e otteniamo il punto cercato:

$$
c = \frac{4}{3}
$$
