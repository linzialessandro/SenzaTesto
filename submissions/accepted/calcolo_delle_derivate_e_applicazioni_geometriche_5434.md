---
year: 5
macro_area: Analisi Matematica
topic: Calcolo delle derivate e applicazioni geometriche
difficulty: 3
tags:
  - studio di funzioni
  - derivata prima
  - derivata seconda
  - retta tangente
  - punti stazionari
  - punti di flesso
---
# Problem Text
Si consideri la funzione reale di variabile reale definita da:
$$f(x) = \frac{\ln(x)}{x}$$

1. Determinare il dominio di definizione della funzione.
2. Calcolare la derivata prima $f'(x)$ specificando le regole di derivazione utilizzate.
3. Trovare l'equazione della retta tangente al grafico della funzione nel punto di ascissa $x_0 = e$. Qual è il significato geometrico del valore della derivata in tale punto?
4. Calcolare la derivata seconda $f''(x)$ e determinare i punti in cui essa si annulla.

# Solution
1. **Determinazione del dominio:**
La funzione è $f(x) = \frac{\ln(x)}{x}$. Per determinare il dominio dobbiamo garantire la realtà del logaritmo e la non nullità del denominatore:
- L'argomento del logaritmo deve essere strettamente positivo: $x > 0$.
- Il denominatore deve essere diverso da zero: $x \neq 0$.

L'intersezione di queste due condizioni fornisce il dominio della funzione:
$$D = \{ x \in \mathbb{R} \mid x > 0 \} = (0, +\infty)$$

---

2. **Calcolo della derivata prima:**
Per calcolare la derivata di $f(x) = \frac{\ln(x)}{x}$, utilizziamo la regola di derivazione del rapporto di due funzioni:
$$\left[ \frac{g(x)}{h(x)} \right]' = \frac{g'(x)h(x) - g(x)h'(x)}{[h(x)]^2}$$
Nel nostro caso poniamo $g(x) = \ln(x)$ e $h(x) = x$. Ricordando che $g'(x) = \frac{1}{x}$ e $h'(x) = 1$, si ottiene:
$$f'(x) = \frac{\frac{1}{x} \cdot x - \ln(x) \cdot 1}{x^2}$$
$$f'(x) = \frac{1 - \ln(x)}{x^2}$$
La derivata prima è definita per ogni $x > 0$.

---

3. **Equazione della retta tangente nel punto $x_0 = e$:**
L'equazione della retta tangente al grafico di $f(x)$ nel punto di ascissa $x_0$ ha equazione generale:
$$y - f(x_0) = f'(x_0)(x - x_0)$$

Calcoliamo il valore della funzione nel punto $x_0 = e$:
$$f(e) = \frac{\ln(e)}{e} = \frac{1}{e}$$

Calcoliamo il valore della derivata prima nel punto $x_0 = e$:
$$f'(e) = \frac{1 - \ln(e)}{e^2} = \frac{1 - 1}{e^2} = 0$$

Sostituendo i valori nell'equazione generale della retta tangente:
$$y - \frac{1}{e} = 0 \cdot (x - e) \implies y = \frac{1}{e}$$

*Significato geometrico:*
Poiché la derivata prima $f'(e) = 0$, la retta tangente nel punto $\left(e, \frac{1}{e}\right)$ è parallela all'asse delle ascisse (orizzontale). Geometricamente, la derivata prima in un punto rappresenta il coefficiente angolare della retta tangente al grafico della funzione in quel punto. Il fatto che si annulli indica la presenza di un punto stazionario (in questo caso, un punto di massimo relativo per la funzione).

---

4. **Calcolo della derivata seconda e punti di annullamento:**
Per calcolare la derivata seconda $f''(x)$, deriviamo nuovamente la derivata prima $f'(x) = \frac{1 - \ln(x)}{x^2}$ applicando ancora la regola del rapporto:
$$f''(x) = \frac{\left[ 1 - \ln(x) \right]' \cdot x^2 - \left[ 1 - \ln(x) \right] \cdot (x^2)'}{(x^2)^2}$$
Sapendo che $\left[ 1 - \ln(x) \right]' = -\frac{1}{x}$ e $(x^2)' = 2x$:
$$f''(x) = \frac{\left(-\frac{1}{x}\right) \cdot x^2 - (1 - \ln(x)) \cdot 2x}{x^4}$$
$$f''(x) = \frac{-x - 2x + 2x\ln(x)}{x^4}$$
$$f''(x) = \frac{-3x + 2x\ln(x)}{x^4}$$
Raccogliendo $x$ al numeratore:
$$f''(x) = \frac{x(2\ln(x) - 3)}{x^4} = \frac{2\ln(x) - 3}{x^3}$$

Troviamo ora i punti di annullamento della derivata seconda ponendo $f''(x) = 0$:
$$\frac{2\ln(x) - 3}{x^3} = 0 \implies 2\ln(x) - 3 = 0 \quad (\text{poiché } x > 0)$$
$$2\ln(x) = 3 \implies \ln(x) = \frac{3}{2}$$
Applicando la definizione di logaritmo (in base naturale $e$):
$$x = e^{3/2} = e\sqrt{e}$$

Pertanto, la derivata seconda si annulla nel punto di ascissa $x = e\sqrt{e}$ (che corrisponde geometricamente al punto di flesso della funzione, in cui la concavità del grafico cambia direzione).
