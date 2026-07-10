---
year: 4
macro_area: "Goniometria e Trigonometria"
topic: "Funzioni goniometriche e loro relazioni goniometriche"
difficulty: 3
tags:
  - "secante"
  - "tangente"
  - "relazioni fondamentali"
  - "equazioni parametriche"
  - "circonferenza goniometrica"
ai_generated: true
---
# Problem Text
Determinare per quali valori del parametro reale $k$ l'equazione:

$$
\sec^2 x - 3\tan x + k = 0
$$

ha almeno una soluzione nell'intervallo $x \in \left[0, \frac{\pi}{4}\right]$.

# Solution
Utilizziamo la relazione fondamentale tra secante e tangente:

$$
\sec^2 x = 1 + \tan^2 x
$$

Sostituendo nell'equazione di partenza si ottiene:

$$
1 + \tan^2 x - 3\tan x + k = 0 \iff \tan^2 x - 3\tan x + k + 1 = 0
$$

Applichiamo la sostituzione $t = \tan x$. Poiché la funzione $y = \tan x$ è strettamente crescente nell'intervallo $\left[0, \frac{\pi}{4}\right]$, con $\tan(0) = 0$ e $\tan\left(\frac{\pi}{4}\right) = 1$, la nuova variabile $t$ deve variare nell'intervallo $[0, 1]$.

L'equazione si trasforma in un'equazione di secondo grado in $t$:

$$
t^2 - 3t + k + 1 = 0 \iff k = -t^2 + 3t - 1
$$

Studiamo la funzione $f(t) = -t^2 + 3t - 1$ per $t \in [0, 1]$. 
La parabola ha la concavità rivolta verso il basso e l'ascissa del vertice è:

$$
t_V = -\frac{3}{2(-1)} = \frac{3}{2}
$$

Poiché $t_V > 1$, la funzione $f(t)$ è strettamente crescente nell'intervallo $[0, 1]$.

Di conseguenza, gli estremi dell'immagine di $f(t)$ in $[0, 1]$ si ottengono nei punti di frontiera dell'intervallo:
- Valore minimo: $f(0) = -1$
- Valore massimo: $f(1) = -(1)^2 + 3(1) - 1 = 1$

L'equazione ammette almeno una soluzione nell'intervallo dato se e solo se il parametro $k$ appartiene all'immagine di $f(t)$ per $t \in [0, 1]$, ovvero:

$$
-1 \le k \le 1
$$
