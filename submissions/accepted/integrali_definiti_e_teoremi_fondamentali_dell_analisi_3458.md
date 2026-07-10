---
year: 5
macro_area: Analisi Matematica
topic: Integrali definiti e teoremi fondamentali dell'analisi
difficulty: 4
tags:
  - integrali definiti
  - integrazione per parti
  - teorema della media
  - teorema dei valori intermedi
  - torricelli-barrow
ai_generated: true
---
# Problem Text
Si consideri la funzione reale di variabile reale definita nell'intervallo $[0, \pi]$ da:
$$f(x) = x \sin(x)$$

1. Calcolare l'integrale definito della funzione nell'intervallo $[0, \pi]$ utilizzando il metodo di integrazione per parti e il Teorema Fondamentale del Calcolo Integrale (formula di Torricelli-Barrow):
$$\int_{0}^{\pi} x \sin(x) \, dx$$
2. Determinare il valore medio $\mu$ della funzione $f(x)$ nell'intervallo $[0, \pi]$ per mezzo del Teorema della Media per gli integrali.
3. Dimostrare, applicando i teoremi sulle funzioni continue, che esiste almeno un punto $c \in \left(0, \frac{\pi}{2}\right)$ in cui la funzione assume il valore medio $\mu$.

# Solution
1. **Calcolo dell'integrale definito tramite integrazione per parti:**

Per determinare l'integrale definito, calcoliamo prima una primitiva della funzione $f(x) = x \sin(x)$ risolvendo l'integrale indefinito associato:
$$\int x \sin(x) \, dx$$

Applichiamo la formula di integrazione per parti:
$$\int u \, dv = u v - \int v \, du$$

Scegliamo i fattori nel modo seguente:
- Fattore finito: $u = x \implies du = 1 \cdot dx$
- Fattore differenziale: $dv = \sin(x) \, dx \implies v = \int \sin(x) \, dx = -\cos(x)$

Sostituendo nella formula si ha:
$$\int x \sin(x) \, dx = x \cdot (-\cos(x)) - \int (-\cos(x)) \cdot 1 \, dx$$
$$\int x \sin(x) \, dx = -x \cos(x) + \int \cos(x) \, dx$$
$$\int x \sin(x) \, dx = -x \cos(x) + \sin(x) + C$$

Una primitiva di $f(x)$ è dunque $F(x) = -x \cos(x) + \sin(x)$.
Applichiamo la formula di Torricelli-Barrow per l'intervallo $[0, \pi]$:
$$\int_{0}^{\pi} x \sin(x) \, dx = \left[ -x \cos(x) + \sin(x) \right]_{0}^{\pi}$$
$$= \left( -\pi \cos(\pi) + \sin(\pi) \right) - \left( -0 \cdot \cos(0) + \sin(0) \right)$$

Notando che $\cos(\pi) = -1$, $\sin(\pi) = 0$, $\cos(0) = 1$ e $\sin(0) = 0$, otteniamo:
$$\int_{0}^{\pi} x \sin(x) \, dx = \left( -\pi (-1) + 0 \right) - (0 + 0) = \pi$$

---

2. **Calcolo del valore medio $\mu$:**

Il Teorema della Media per gli integrali stabilisce che, se una funzione $f(x)$ è continua in un intervallo chiuso $[a, b]$, il suo valore medio $\mu$ è definito da:
$$\mu = \frac{1}{b - a} \int_{a}^{b} f(x) \, dx$$

Nel nostro caso l'intervallo è $[a, b] = [0, \pi]$ e l'integrale calcolato al punto precedente ha valore $\pi$. Sostituendo i dati si ottiene:
$$\mu = \frac{1}{\pi - 0} \int_{0}^{\pi} x \sin(x) \, dx = \frac{1}{\pi} \cdot \pi = 1$$

Il valore medio della funzione $f(x) = x \sin(x)$ nell'intervallo $[0, \pi]$ è esattamente uguale a $1$.

---

3. **Dimostrazione dell'esistenza del punto $c$ nell'intervallo $\left(0, \frac{\pi}{2}\right)$:**

Dobbiamo mostrare che esiste almeno un punto $c \in \left(0, \frac{\pi}{2}\right)$ tale che $f(c) = \mu = 1$, ossia $c \sin(c) = 1$.

Consideriamo la funzione $f(x) = x \sin(x)$ nell'intervallo ristretto $I = \left[0, \frac{\pi}{2}\right]$.
- La funzione $f(x)$ è continua nell'intervallo chiuso e limitato $\left[0, \frac{\pi}{2}\right]$ in quanto prodotto di funzioni elementari continue (la retta $y = x$ e l'onda sinusoidale $y = \sin(x)$).
- Calcoliamo i valori assunti dalla funzione agli estremi dell'ampiezza dell'intervallo $I$:
  $$f(0) = 0 \cdot \sin(0) = 0$$
  $$f\left(\frac{\pi}{2}\right) = \frac{\pi}{2} \cdot \sin\left(\frac{\pi}{2}\right) = \frac{\pi}{2} \cdot 1 = \frac{\pi}{2} \approx 1{,}57$$

Poiché $f(x)$ è continua nell'intervallo chiuso $\left[0, \frac{\pi}{2}\right]$, per il **Teorema dei Valori Intermedi** essa assume tutti i valori compresi tra il suo minimo e il suo massimo nell'intervallo, e in particolare tutti i valori compresi tra i valori agli estremi $f(0) = 0$ e $f\left(\frac{\pi}{2}\right) = \frac{\pi}{2}$.

Dato che il valore medio della distribuzione $\mu = 1$ soddisfa la condizione:
$$0 < 1 < \frac{\pi}{2}$$
allora, per il Teorema dei Valori Intermedi, deve esistere necessariamente almeno un punto $c \in \left(0, \frac{\pi}{2}\right)$ tale per cui:
$$f(c) = 1 \implies c \sin(c) = 1$$

L'esistenza del punto richiesto è pertanto rigorosamente dimostrata.
