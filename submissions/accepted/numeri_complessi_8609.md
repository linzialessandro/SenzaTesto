---
year: 4
macro_area: "Numeri Complessi"
topic: "Numeri Complessi"
difficulty: 5
ai_generated: true
tags:
  - "numeri complessi"
  - "radici n-esime"
  - "formula di Eulero"
  - "teorema fondamentale dell'algebra"
  - "equazioni nel campo complesso"
---
# Problem Text
Sia $n \ge 2$ un numero intero. Determina in forma algebrica tutte le soluzioni complesse $z \in \mathbb{C}$ dell'equazione

$$
(z + i)^n = (z - i)^n
$$

e dimostra che esse sono tutte numeri reali.

# Solution
Osserviamo anzitutto che $z = i$ non è soluzione dell'equazione, poiché sostituendo si otterrebbe $(2i)^n = 0$, che è impossibile. È quindi lecito dividere entrambi i membri per $(z - i)^n$, ottenendo l'equazione equivalente:

$$
\left( \frac{z + i}{z - i} \right)^n = 1
$$

Pariamo $w = \frac{z + i}{z - i}$. L'equazione diventa $w^n = 1$. Le $n$ radici $n$-esime dell'unità sono date in forma esponenziale da:

$$
w_k = e^{i \frac{2k\pi}{n}}, \quad k = 0, 1, 2, \dots, n-1
$$

Per $k = 0$ si ha $w_0 = 1$, da cui $\frac{z+i}{z-i} = 1 \implies z+i = z-i \implies i = -i$, uguaglianza impossibile. Escludiamo dunque $k = 0$.

Per $k = 1, 2, \dots, n-1$, imponiamo $\frac{z+i}{z-i} = e^{i \frac{2k\pi}{n}}$ e risolviamo rispetto a $z$:

$$
z + i = e^{i \frac{2k\pi}{n}} (z - i) \iff z \left(1 - e^{i \frac{2k\pi}{n}}\right) = -i \left(1 + e^{i \frac{2k\pi}{n}}\right)
$$

$$
z_k = i \cdot \frac{1 + e^{i \frac{2k\pi}{n}}}{e^{i \frac{2k\pi}{n}} - 1}
$$

Raccogliendo il fattore ad argomento dimezzato $e^{i \frac{k\pi}{n}}$ a numeratore e a denominatore:

$$
1 + e^{i \frac{2k\pi}{n}} = e^{i \frac{k\pi}{n}} \left( e^{-i \frac{k\pi}{n}} + e^{i \frac{k\pi}{n}} \right) = 2 e^{i \frac{k\pi}{n}} \cos\left(\frac{k\pi}{n}\right)
$$

$$
e^{i \frac{2k\pi}{n}} - 1 = e^{i \frac{k\pi}{n}} \left( e^{i \frac{k\pi}{n}} - e^{-i \frac{k\pi}{n}} \right) = 2i e^{i \frac{k\pi}{n}} \sin\left(\frac{k\pi}{n}\right)
$$

Sostituendo queste espressioni nella formula di $z_k$:

$$
z_k = i \cdot \frac{2 e^{i \frac{k\pi}{n}} \cos\left(\frac{k\pi}{n}\right)}{2i e^{i \frac{k\pi}{n}} \sin\left(\frac{k\pi}{n}\right)} = \cot\left(\frac{k\pi}{n}\right)
$$

Poiché $\cot\left(\frac{k\pi}{n}\right) \in \mathbb{R}$ per ogni $k = 1, 2, \dots, n-1$, tutte le soluzioni sono numeri reali. 

Infine, sviluppando $(z+i)^n - (z-i)^n = 0$ tramite lo sviluppo binomiale di Newton, si nota che il termine $z^n$ si elide e il termine di grado massimo è $2n i z^{n-1}$. Per il Teorema Fondamentale dell'Algebra, il polinomio ammette esattamente $n-1$ radici complesse, che corrispondono precisamente alle $n-1$ soluzioni reali distinte $z_k = \cot\left(\frac{k\pi}{n}\right)$ trovate.
