---
year: 5
macro_area: "Calcolo Integrale"
topic: "Integrali Definiti e Teorema della Media"
difficulty: 2
ai_generated: true
tags:
  - "integrali definiti"
  - "teorema della media"
  - "Torricelli-Barrow"
  - "valore medio"
---
# Problem Text
Si consideri la funzione $f(x) = x^2 + 1$, continua nell'intervallo $[0, 3]$. Determinare il punto $c \in (0, 3)$ la cui esistenza è garantita dal teorema della media integrale.

# Solution
1. **Applicazione del Teorema della Media Integrale**:
Essendo $f(x) = x^2 + 1$ continua nell'intervallo chiuso e limitato $[0, 3]$, per il teorema della media integrale esiste almeno un punto $c \in (0, 3)$ tale che:

$$
f(c) = \frac{1}{3 - 0} \int_{0}^{3} f(x) \, dx
$$

2. **Ricerca della Primitiva**:
Per il Teorema Fondamentale del Calcolo Integrale, individuiamo una primitiva $F(x)$ della funzione integranda $f(x)$:

$$
F(x) = \int (x^2 + 1) \, dx = \frac{x^3}{3} + x
$$

3. **Calcolo dell'Integrale Definito (Formula di Torricelli-Barrow)**:
Applichiamo la formula di Torricelli-Barrow per valutare l'integrale definito:

$$
\int_{0}^{3} (x^2 + 1) \, dx = \left[ \frac{x^3}{3} + x \right]_{0}^{3} = \left( \frac{3^3}{3} + 3 \right) - (0) = 9 + 3 = 12
$$

4. **Determinazione del Valore Medio**:
Sostituiamo il valore dell'integrale nella relazione del valore medio:

$$
f(c) = \frac{1}{3} \cdot 12 = 4
$$

5. **Risoluzione dell'Equazione per $c$**:
Poniamo $f(c) = 4$ sfruttando la definizione della funzione $f(x)$:

$$
c^2 + 1 = 4 \implies c^2 = 3 \implies c = \pm \sqrt{3}
$$

6. **Selezione della Soluzione Ammissibile**:
Poiché il teorema garantisce l'esistenza di $c$ nell'intervallo aperto $(0, 3)$, scartiamo il valore negativo $c = -\sqrt{3}$. Pertanto, l'unico punto cercato è:

$$
c = \sqrt{3}
$$
