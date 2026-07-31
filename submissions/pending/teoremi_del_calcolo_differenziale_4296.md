---
year: 5
macro_area: "Analisi Matematica"
topic: "Teoremi del calcolo differenziale"
difficulty: 5
ai_generated: true
tags:
  - "Teorema di Rolle"
  - "Derivate"
  - "Calcolo Differenziale"
  - "Dimostrazione"
---
# Problem Text
Sia $f: [a, b] \to \mathbb{R}$ una funzione continua nell'intervallo chiuso e limitato $[a, b]$ e derivabile due volte nell'intervallo aperto $(a, b)$. Dimostrare che, se la retta secante passante per gli estremi del grafico $A(a, f(a))$ e $B(b, f(b))$ interseca il grafico della funzione in un punto interno $C(c, f(c))$, con $a < c < b$, allora esiste almeno un punto $\xi \in (a, b)$ in cui la derivata seconda della funzione si annulla, ovvero $f''(\xi) = 0$.

# Solution
Consideriamo l'equazione della retta secante $r(x)$ passante per i punti estremi $A(a, f(a))$ e $B(b, f(b))$:

$$
r(x) = f(a) + \frac{f(b) - f(a)}{b - a}(x - a)
$$

Definiamo la funzione ausiliaria $g: [a, b] \to \mathbb{R}$ data dalla differenza tra la funzione $f(x)$ e la retta secante $r(x)$:

$$
g(x) = f(x) - r(x)
$$

Poiché $f$ è continua in $[a, b]$ e derivabile due volte in $(a, b)$, e $r(x)$ è un polinomio di primo grado (quindi di classe $C^\infty$), la funzione $g$ eredita la continuità in $[a, b]$ e la doppia derivabilità in $(a, b)$.

Per ipotesi, la retta $r(x)$ interseca il grafico di $f(x)$ nei punti di ascissa $x = a$, $x = b$ e nell'ulteriore punto interno $x = c \in (a, b)$. Di conseguenza:

$$
g(a) = 0, \quad g(c) = 0, \quad g(b) = 0
$$

Applichiamo il **Teorema di Rolle** alla funzione $g(x)$ separatamente nei due sottointervalli distinti:
1. Nell'intervallo $[a, c]$: $g$ è continua in $[a, c]$, derivabile in $(a, c)$ e $g(a) = g(c) = 0$. Quindi esiste un punto $x_1 \in (a, c)$ tale che $g'(x_1) = 0$.
2. Nell'intervallo $[c, b]$: $g$ è continua in $[c, b]$, derivabile in $(c, b)$ e $g(c) = g(b) = 0$. Pertanto esiste un punto $x_2 \in (c, b)$ tale che $g'(x_2) = 0$.

Consideriamo ora la funzione derivata prima $g'(x)$ ristretta all'intervallo chiuso $[x_1, x_2] \subset (a, b)$. Poiché $f$ è derivabile due volte in $(a, b)$, la funzione $g'$ è continua in $[x_1, x_2]$ e derivabile nell'aperto $(x_1, x_2)$. Inoltre, $g'(x_1) = g'(x_2) = 0$.

Applichiamo nuovamente il **Teorema di Rolle** alla funzione $g'(x)$ nell'intervallo $[x_1, x_2]$: esiste almeno un punto $\xi \in (x_1, x_2) \subset (a, b)$ tale che:

$$
g''(\xi) = 0
$$

Poiché $r(x)$ è una funzione lineare, la sua derivata seconda è identicamente nulla ($r''(x) = 0$). Di conseguenza, $g''(x) = f''(x) - r''(x) = f''(x)$. Si deduce che:

$$
f''(\xi) = 0
$$

La tesi è così rigorosamente dimostrata.
