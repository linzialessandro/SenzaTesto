---
year: 4
macro_area: "Trigonometria e Goniometria"
topic: "Funzioni goniometriche e circonferenza goniometrica"
difficulty: 3
tags:
  - "circonferenza goniometrica"
  - "funzioni goniometriche"
  - "equazioni goniometriche"
  - "tangente"
  - "formule di duplicazione"
ai_generated: true
---
# Problem Text
Determinare per quali valori dell'angolo $x \in \left(0, \frac{\pi}{2}\right)$ l'area del triangolo rettangolo delimitato dagli assi cartesiani e dalla retta tangente alla circonferenza goniometrica nel punto $P(\cos x, \sin x)$ è pari a $2$.

# Solution
La retta tangente alla circonferenza goniometrica di equazione $X^2 + Y^2 = 1$ nel punto $P(\cos x, \sin x)$ ha equazione:

$$
X \cos x + Y \sin x = 1
$$

Troviamo le coordinate dei punti di intersezione di questa retta con gli assi cartesiani.
Intersezione con l'asse delle ascisse ($Y = 0$):

$$
A\left(\frac{1}{\cos x}, 0\right)
$$

Intersezione con l'asse delle ordinate ($X = 0$):

$$
B\left(0, \frac{1}{\sin x}\right)
$$

Poiché $x \in \left(0, \frac{\pi}{2}\right)$, le coordinate dei punti $A$ e $B$ sono positive ($\cos x > 0$ e $\sin x > 0$). L'area $S(x)$ del triangolo rettangolo di vertici $O(0,0)$, $A$ e $B$ è data da:

$$
S(x) = \frac{1}{2} \cdot OA \cdot OB = \frac{1}{2} \cdot \frac{1}{\cos x} \cdot \frac{1}{\sin x} = \frac{1}{2\sin x \cos x}
$$

Applicando la formula di duplicazione del seno ($2 \sin x \cos x = \sin(2x)$), l'espressione dell'area si semplifica in:

$$
S(x) = \frac{1}{\sin(2x)}
$$

Imponiamo ora la condizione richiesta dal problema, ossia che l'area sia uguale a $2$:

$$
\frac{1}{\sin(2x)} = 2 \implies \sin(2x) = \frac{1}{2}
$$

Poiché $x \in \left(0, \frac{\pi}{2}\right)$, l'argomento $2x$ appartiene all'intervallo $(0, \pi)$. Nell'intervallo considerato, l'equazione $\sin(2x) = \frac{1}{2}$ ammette due soluzioni:

$$
2x = \frac{\pi}{6} \implies x = \frac{\pi}{12}
$$

$$
2x = \frac{5\pi}{6} \implies x = \frac{5\pi}{12}
$$

In conclusione, i valori dell'angolo $x$ che soddisfano la condizione richiesta sono:

$$
x = \frac{\pi}{12} \quad \text{e} \quad x = \frac{5\pi}{12}
$$

(corrispondenti rispettivamente a $15^\circ$ e $75^\circ$).
