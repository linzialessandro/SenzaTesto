---
year: 5
macro_area: "Analisi Matematica"
topic: "Teorema della media integrale"
difficulty: 2
ai_generated: true
tags:
  - "integrale definito"
  - "teorema della media"
  - "analisi matematica"
  - "quinto anno"
---
# Problem Text
Si consideri la funzione $f(x) = x^2$ definita nell'intervallo $[0, 3]$. Determinare il punto $c \in [0, 3]$ in cui la funzione assume il suo valore medio integrale, verificando così la tesi del teorema della media integrale nell'intervallo dato.

# Solution
Il teorema della media integrale afferma che se una funzione $f(x)$ è continua in un intervallo chiuso e limitato $[a, b]$, esiste almeno un punto $c \in [a, b]$ tale che:

$$
f(c) = \frac{1}{b - a} \int_{a}^{b} f(x) \, dx
$$

Procediamo con la risoluzione in pochi e semplici passaggi:

**1. Calcolo dell'integrale definito**
Calcoliamo l'integrale definito della funzione $f(x) = x^2$ nell'intervallo $[0, 3]$:

$$
\int_{0}^{3} x^2 \, dx = \left[ \frac{x^3}{3} \right]_{0}^{3} = \frac{3^3}{3} - \frac{0^3}{3} = 9
$$

**2. Calcolo del valore medio integrale**
Applichiamo la formula per trovare il valore medio $\mu$ nell'intervallo $[0, 3]$, con $a = 0$ e $b = 3$:

$$
\mu = \frac{1}{3 - 0} \int_{0}^{3} x^2 \, dx = \frac{1}{3} \cdot 9 = 3
$$

**3. Determinazione del punto $c$**
Risolviamo l'equazione $f(c) = \mu$ per trovare il valore di $c$ nell'intervallo dato:

$$
c^2 = 3
$$

Questo fornisce due soluzioni reali:

$$
c_1 = -\sqrt{3}, \quad c_2 = \sqrt{3}
$$

**4. Verifica dell'appartenenza all'intervallo**
Poiché la teoria richiede che il punto $c$ appartenga all'intervallo di integrazione $[0, 3]$, escludiamo la soluzione negativa. L'unico valore accettabile è:

$$
c = \sqrt{3} \approx 1{,}73
$$

Il punto $c = \sqrt{3}$ appartiene a $[0, 3]$ ed è il punto in cui la funzione assume il suo valore medio.
