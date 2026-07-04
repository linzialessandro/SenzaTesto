---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate"
difficulty: 3
tags:
  - "derivate"
  - "regole di derivazione"
  - "derivata seconda"
  - "retta tangente"
  - "studio di funzioni"
---
# Problem Text
Data la funzione $f: \mathbb{R} \to \mathbb{R}$ definita da:

$$
f(x) = \ln(x^2 - 2x + 2)
$$

si richiede di:
1. Determinare il dominio di $f(x)$ e mostrare che la funzione è definita per qualunque valore reale.
2. Calcolare la derivata prima $f'(x)$, determinando il punto stazionario del grafico di $f(x)$.
3. Calcolare la derivata seconda $f''(x)$ e individuare le ascisse dei punti di flesso della funzione.
4. Determinare l'equazione della retta tangente al grafico di $f(x)$ nel suo punto $P$ di ascissa $x_0 = 2$.

# Solution
### 1. Dominio di $f(x)$

La funzione presenta una composizione con il logaritmo naturale. Affinché la funzione sia definita, l'argomento del logaritmo deve essere strettamente maggiore di zero:

$$
x^2 - 2x + 2 > 0
$$

Risolviamo l'equazione di secondo grado associata $x^2 - 2x + 2 = 0$ calcolando il discriminante:

$$
\Delta = (-2)^2 - 4 \cdot 1 \cdot 2 = 4 - 8 = -4
$$

Poiché il discriminante $\Delta$ è strettamente negativo e il coefficiente del termine di secondo grado è positivo ($1 > 0$), il trinomio $x^2 - 2x + 2$ è positivo per ogni valore di $x \in \mathbb{R}$.

Il dominio della funzione è quindi l'intero asse reale:

$$
D = \mathbb{R}
$$

---

### 2. Calcolo della derivata prima e punto stazionario

La funzione $f(x) = \ln(g(x))$ è una funzione composta, dove $g(x) = x^2 - 2x + 2$. La sua derivata si calcola utilizzando la regola di derivazione delle funzioni composte:

$$
f'(x) = \frac{g'(x)}{g(x)}
$$

Calcoliamo la derivata dell'argomento:

$$
g'(x) = 2x - 2
$$

Quindi, la derivata prima di $f(x)$ è:

$$
f'(x) = \frac{2x - 2}{x^2 - 2x + 2}
$$

I punti stazionari si trovano ponendo la derivata prima uguale a zero:

$$
f'(x) = 0 \implies \frac{2x - 2}{x^2 - 2x + 2} = 0
$$

Poiché il denominatore è sempre positivo su tutto il dominio, l'equazione si riduce ad annullare il numeratore:

$$
2x - 2 = 0 \implies x_s = 1
$$

Calcoliamo l'ordinata del punto stazionario $S$ sostituendo $x_s = 1$ nella funzione originaria:

$$
f(1) = \ln(1^2 - 2(1) + 2) = \ln(1) = 0
$$

Pertanto, il punto stazionario (punto di minimo assoluto della funzione) è:

$$
S(1, 0)
$$

---

### 3. Calcolo della derivata seconda e punti di flesso

Per calcolare la derivata seconda $f''(x)$, deriviamo la funzione quoziente $f'(x) = \frac{2x - 2}{x^2 - 2x + 2}$ applicando la regola del rapporto:

$$
f''(x) = \frac{\frac{\text{d}}{\text{d}x}(2x-2) \cdot (x^2-2x+2) - (2x-2) \cdot \frac{\text{d}}{\text{d}x}(x^2-2x+2)}{(x^2-2x+2)^2}
$$

$$
f''(x) = \frac{2(x^2 - 2x + 2) - (2x - 2)(2x - 2)}{(x^2 - 2x + 2)^2}
$$

Svolgiamo i calcoli a numeratore:

$$
2(x^2 - 2x + 2) - (2x - 2)^2 = 2x^2 - 4x + 4 - (4x^2 - 8x + 4)
$$

$$
= 2x^2 - 4x + 4 - 4x^2 + 8x - 4 = -2x^2 + 4x
$$

Raccogliendo a fattor comune parziale:

$$
-2x^2 + 4x = -2x(x - 2)
$$

Dunque, la derivata seconda è:

$$
f''(x) = \frac{-2x(x - 2)}{(x^2 - 2x + 2)^2}
$$

I punti di flesso si individuano studiando i punti in cui la derivata seconda si annulla e cambia segno. Poniamo $f''(x) = 0$:

$$
\frac{-2x(x - 2)}{(x^2 - 2x + 2)^2} = 0 \implies -2x(x - 2) = 0
$$

Le radici dell'equazione sono:

$$
x_1 = 0 \quad \text{e} \quad x_2 = 2
$$

Studiamo il segno di $f''(x)$ per confermare il cambio di concavità:
- Per $x < 0$, si ha $f''(x) < 0$ (concavità rivolta verso il basso);
- Per $0 < x < 2$, si ha $f''(x) > 0$ (concavità rivolta verso l'alto);
- Per $x > 2$, si ha $f''(x) < 0$ (concavità rivolta verso il basso).

Dato che la concavità cambia in corrispondenza di $x_1 = 0$ e $x_2 = 2$, entrambi i punti sono punti di flesso.

---

### 4. Equazione della retta tangente nel punto di ascissa $x_0 = 2$

L'equazione della retta tangente al grafico di $f(x)$ nel generico punto di ascissa $x_0$ ha equazione:

$$
y - f(x_0) = f'(x_0)(x - x_0)
$$

Nel nostro caso $x_0 = 2$. Calcoliamo prima il valore della funzione in $x_0$:

$$
f(2) = \ln(2^2 - 2(2) + 2) = \ln(4 - 4 + 2) = \ln(2)
$$

Calcoliamo poi la pendenza della retta tangente mediante la derivata prima calcolata in $x_0$:

$$
f'(2) = \frac{2(2) - 2}{2^2 - 2(2) + 2} = \frac{4 - 2}{4 - 4 + 2} = \frac{2}{2} = 1
$$

Sostituiamo i valori trovati nell'equazione della retta tangente:

$$
y - \ln(2) = 1 \cdot (x - 2)
$$

Esplicitando rispetto alla variabile $y$, otteniamo l'equazione della retta tangente cercata:

$$
y = x - 2 + \ln(2)
$$
