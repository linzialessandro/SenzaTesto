---
year: 4
macro_area: "Trigonometria e Goniometria"
topic: "Funzioni goniometriche e loro grafici"
difficulty: 5
ai_generated: true
tags:
  - "goniometria"
  - "funzioni goniometriche"
  - "secante"
  - "cosecante"
  - "equazioni parametriche"
  - "grafici"
---
# Problem Text
Determinare i valori del parametro reale $k$ per i quali l'equazione goniometrica

$$
2\left(\sec^2 x + \csc^2 x\right) + \sqrt{3}\left(\tan x + \cot x\right) = k
$$

ammette soluzioni reali e discutere il numero di soluzioni distinte nell'intervallo $[0, 2\pi)$ al variare del parametro $k$.

# Solution
**Dominio:** L'equazione è definita per $x \neq \frac{m\pi}{2}$ con $m \in \mathbb{Z}$.

**Semplificazione:** Ricordando le identità fondamentali $\sec x = \frac{1}{\cos x}$ e $\csc x = \frac{1}{\sin x}$, si ha:

$$
\sec^2 x + \csc^2 x = \frac{1}{\cos^2 x} + \frac{1}{\sin^2 x} = \frac{\sin^2 x + \cos^2 x}{\sin^2 x \cos^2 x} = \left(\frac{1}{\sin x \cos x}\right)^2 = (\tan x + \cot x)^2
$$

Poniamo la variabile ausiliaria $t = \tan x + \cot x = \frac{2}{\sin(2x)}$. Poiché l'immagine di $\sin(2x)$ è $[-1, 0) \cup (0, 1]$, l'insieme dei valori ammissibili per $t$ è $D_t = (-\infty, -2] \cup [2, +\infty)$.

L'equazione si riduce alla quadratica:

$$
g(t) = 2t^2 + \sqrt{3}t = k, \quad t \in D_t
$$

**Studio della funzione $g(t)$ su $D_t$:**
La parabola $y = g(t)$ ha il vertice in $t_v = -\frac{\sqrt{3}}{4} \in (-2, 2)$, esterno a $D_t$. Pertanto:
- Per $t \le -2$, la funzione $g(t)$ è strettamente decrescente da $+\infty$ a $g(-2) = 8 - 2\sqrt{3}$.
- Per $t \ge 2$, la funzione $g(t)$ è strettamente crescente da $g(2) = 8 + 2\sqrt{3}$ a $+\infty$.

**Molteplicità delle soluzioni $x \in [0, 2\pi)$:**
Dall'equazione $\sin(2x) = \frac{2}{t}$ nell'intervallo $2x \in [0, 4\pi)$:
- Se $|t| > 2$, allora $\left|\frac{2}{t}\right| < 1$, che fornisce $4$ soluzioni distinte per $x$ in $[0, 2\pi)$.
- Se $t = \pm 2$, allora $\sin(2x) = \pm 1$, che fornisce $2$ soluzioni distinte per $x$ in $[0, 2\pi)$.

**Discussione al variare di $k$:**
- **$k < 8 - 2\sqrt{3}$:** Nessuna soluzione reale ($0$ soluzioni).
- **$k = 8 - 2\sqrt{3}$:** Un'unica radice $t = -2 \implies \mathbf{2\ soluzioni}$.
- **$8 - 2\sqrt{3} < k < 8 + 2\sqrt{3}$:** Un'unica radice $t_1 < -2 \implies \mathbf{4\ soluzioni}$.
- **$k = 8 + 2\sqrt{3}$:** Due radici, $t_1 < -2$ e $t_2 = 2 \implies 4 + 2 = \mathbf{6\ soluzioni}$.
- **$k > 8 + 2\sqrt{3}$:** Due radici, $t_1 < -2$ e $t_2 > 2 \implies 4 + 4 = \mathbf{8\ soluzioni}$.
