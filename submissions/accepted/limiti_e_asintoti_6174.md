---
year: 5
macro_area: "Analisi Matematica"
topic: "Limiti e asintoti"
difficulty: 3
tags:
  - "limiti"
  - "asintoti"
  - "forme indeterminate"
  - "sviluppi in serie"
ai_generated: true
---
# Problem Text
Determinare i valori dei parametri reali $a$ e $b$ affinché la funzione:

$$
f(x) = \frac{ax^2 + bx}{x - 1} e^{1/x}
$$

ammetta come asintoto obliquo per $x \to +\infty$ la retta di equazione $y = 2x + 3$.

# Solution
L'equazione di un asintoto obliquo per $x \to +\infty$ è data da $y = mx + q$, dove:

$$
m = \lim_{x \to +\infty} \frac{f(x)}{x}
$$

e

$$
q = \lim_{x \to +\infty} [f(x) - mx]
$$

Calcoliamo innanzitutto il coefficiente angolare $m$:

$$
m = \lim_{x \to +\infty} \frac{ax^2 + bx}{x(x-1)} e^{1/x} = \lim_{x \to +\infty} \frac{a + \frac{b}{x}}{1 - \frac{1}{x}} e^{1/x} = a \cdot 1 = a
$$

Poiché l'asintoto richiesto ha coefficiente angolare $2$, dobbiamo imporre:

$$
a = 2
$$

Calcoliamo ora l'ordinata all'origine $q$ con $a = 2$:

$$
q = \lim_{x \to +\infty} [f(x) - 2x] = \lim_{x \to +\infty} \left( \frac{2x^2 + bx}{x-1} e^{1/x} - 2x \right)
$$

Effettuiamo la sostituzione $t = \frac{1}{x}$. Quando $x \to +\infty$, si ha $t \to 0^+$. Espandiamo l'argomento del limite in termini di $t$:

$$
\frac{2x^2 + bx}{x-1} e^{1/x} - 2x = \frac{\frac{2}{t^2} + \frac{b}{t}}{\frac{1}{t}-1} e^t - \frac{2}{t} = \frac{2+bt}{t(1-t)} e^t - \frac{2}{t} = \frac{(2+bt)e^t - 2(1-t)}{t(1-t)}
$$

Utilizzando lo sviluppo di Maclaurin dell'esponenziale $e^t = 1 + t + o(t)$ per $t \to 0$, il numeratore diventa:

$$
(2+bt)(1+t+o(t)) - 2 + 2t = 2 + 2t + bt + o(t) - 2 + 2t = (b+4)t + o(t)
$$

Sostituendo nel limite per $q$:

$$
q = \lim_{t \to 0^+} \frac{(b+4)t + o(t)}{t(1-t)} = \lim_{t \to 0^+} \frac{b+4 + o(1)}{1-t} = b+4
$$

Poiché l'asintoto ha ordinata all'origine pari a $3$, imponiamo:

$$
b + 4 = 3 \implies b = -1
$$

In conclusione, i parametri cercati sono $a = 2$ e $b = -1$.
