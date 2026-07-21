---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali definiti e Teorema della media integrale"
difficulty: 2
ai_generated: true
tags:
  - "integrali definiti"
  - "teorema della media"
  - "Torricelli-Barrow"
  - "valore medio"
---
# Problem Text
Determinare il valore del punto $c \in (0, 3)$ la cui esistenza è garantita dal teorema della media integrale per la funzione continua $f(x) = 4 - x^2$ nell'intervallo $[0, 3]$.

# Solution
1. **Verifica delle ipotesi e formulazione del teorema:**
La funzione $f(x) = 4 - x^2$ è continua nell'intervallo chiuso e limitato $[0, 3]$. Per il teorema della media integrale, esiste almeno un punto $c \in (0, 3)$ tale che:

$$
f(c) = \frac{1}{b - a} \int_a^b f(x) \, dx
$$

con $a = 0$ e $b = 3$.

2. **Calcolo della primitiva:**
Una primitiva di $f(x)$ è espressa da:

$$
F(x) = \int (4 - x^2) \, dx = 4x - \frac{x^3}{3}
$$

3. **Calcolo dell'integrale definito (Teorema di Torricelli-Barrow):**
Applicando il teorema fondamentale del calcolo integrale:

$$
\int_0^3 (4 - x^2) \, dx = \left[ 4x - \frac{x^3}{3} \right]_0^3 = \left( 4 \cdot 3 - \frac{3^3}{3} \right) - 0 = 12 - 9 = 3
$$

4. **Calcolo del valore medio $y_m$:**

$$
y_m = \frac{1}{3 - 0} \int_0^3 (4 - x^2) \, dx = \frac{1}{3} \cdot 3 = 1
$$

5. **Ricerca del punto $c$:**
Imponiamo la condizione $f(c) = y_m$:

$$
4 - c^2 = 1 \implies c^2 = 3 \implies c = \pm\sqrt{3}
$$

6. **Selezione della soluzione ammissibile:**
Poiché il teorema della media assicura l'esistenza di $c$ all'interno dell'intervallo aperto $(0, 3)$, scartiamo la soluzione negativa $c = -\sqrt{3}$ e otteniamo:

$$
c = \sqrt{3} \approx 1{,}732 \in (0, 3)
$$
