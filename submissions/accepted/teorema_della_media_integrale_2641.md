---
year: 5
macro_area: "Analisi Matematica"
topic: "Teorema della media integrale"
difficulty: 3
tags:
  - "integrale definito"
  - "teorema della media"
  - "logaritmo"
ai_generated: true
---
# Problem Text
Si consideri la funzione $f(x) = \ln(x)$ definita nell'intervallo $[1, e]$. Determinare il valore esatto del punto $c \in [1, e]$ garantito dal teorema della media integrale, verificando che appartenga effettivamente all'intervallo considerato.

# Solution
Il teorema della media integrale per una funzione continua $f(x)$ su un intervallo $[a, b]$ assicura l'esistenza di almeno un punto $c \in [a, b]$ tale che:

$$
f(c) = \frac{1}{b-a} \int_{a}^{b} f(x) \, dx
$$

Nel nostro caso, con $f(x) = \ln(x)$, $a = 1$ e $b = e$, calcoliamo l'integrale definito mediante integrazione per parti:

$$
\int_{1}^{e} \ln(x) \, dx = \left[ x \ln(x) - x \right]_{1}^{e}
$$

Sostituendo gli estremi di integrazione si ottiene:

$$
(e \ln(e) - e) - (1 \ln(1) - 1) = (e - e) - (0 - 1) = 1
$$

La lunghezza dell'intervallo è $b - a = e - 1$. Pertanto, il valore medio integrale $\mu$ è:

$$
\mu = \frac{1}{e-1}
$$

Imponiamo la condizione $f(c) = \mu$:

$$
\ln(c) = \frac{1}{e-1}
$$

Risolvendo rispetto a $c$ mediante la funzione esponenziale, troviamo il valore esatto:

$$
c = e^{\frac{1}{e-1}}
$$

Verifichiamo che $c \in [1, e]$. Poiché $2 < e < 3$, si ha $1 < e - 1 < 2$, da cui:

$$
\frac{1}{2} < \frac{1}{e-1} < 1
$$

Essendo la base $e > 1$, la funzione esponenziale è strettamente crescente, quindi:

$$
e^{\frac{1}{2}} < e^{\frac{1}{e-1}} < e^{1} \implies \sqrt{e} < c < e
$$

Poiché $\sqrt{e} \approx 1.65 > 1$, risulta $1 < c < e$. Il punto $c$ appartiene quindi all'intervallo richiesto (ed è unico per via della stretta monotonia della funzione logaritmo).
