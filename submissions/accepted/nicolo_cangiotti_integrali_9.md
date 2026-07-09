---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate"
difficulty: 2
tags:
  - "Teorema di Lagrange"
  - "verifica ipotesi"
  - "calcolo derivata"
---
# Problem Text
Dopo aver verificato che valgono le ipotesi del *Teorema di Lagrange* per la funzione
$$ f(x) = x^2 + 4x - 1 \quad \text{con } x \in [0, 1] $$
determinare il punto (o i punti) che soddisfa la tesi del teorema.

# Solution
**1. Verifica delle ipotesi del Teorema di Lagrange**
Il teorema di Lagrange richiede due ipotesi affinché sia applicabile su un intervallo $$[a, b]$$:
1. La funzione dev'essere **continua nell'intervallo chiuso** $$[a, b]$$. Essendo $$f(x)$$ un polinomio, che è continuo in tutto $$\mathbb{R}$$, lo è sicuramente anche in $$[0, 1]$$.
2. La funzione dev'essere **derivabile nell'intervallo aperto** $$(a, b)$$. I polinomi sono derivabili su tutto $$\mathbb{R}$$, quindi lo è anche nel nostro intervallo $$(0, 1)$$.

Essendo verificate le ipotesi, il teorema assicura l'esistenza di almeno un punto $$c \in (0, 1)$$ in cui la tangente al grafico ha la stessa pendenza della corda congiungente i punti estremi:
$$ f'(c) = \frac{f(b) - f(a)}{b - a} $$

**2. Calcolo dei valori agli estremi dell'intervallo**
Sostituiamo $$x = 0$$ e $$x = 1$$ nell'espressione della funzione:
- $$f(0) = 0^2 + 4(0) - 1 = -1$$
- $$f(1) = 1^2 + 4(1) - 1 = 4$$

Il coefficiente angolare della retta secante passante per gli estremi è:
$$ m = \frac{f(1) - f(0)}{1 - 0} = \frac{4 - (-1)}{1} = \frac{5}{1} = 5 $$

**3. Calcolo della derivata e individuazione del punto $$c$$**
Calcoliamo la derivata prima della funzione:
$$ f'(x) = 2x + 4 $$
Secondo la tesi di Lagrange, uguagliamo la derivata valutata in $$c$$ al coefficiente appena trovato:
$$ f'(c) = 5 \implies 2c + 4 = 5 $$
Risolviamo questa equazione rispetto a $$c$$:
$$ 2c = 1 \implies c = \frac{1}{2} $$
Verifichiamo infine che il punto cada all'interno dell'intervallo richiesto: $$c = 1/2$$ appartiene effettivamente a $$(0, 1)$$, confermando la piena validità del risultato.
