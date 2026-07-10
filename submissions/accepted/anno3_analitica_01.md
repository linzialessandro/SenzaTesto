---
year: 3
macro_area: Coniche
topic: La parabola
difficulty: 4
tags:
  - geometria analitica
  - parabola
  - tangenti
ai_generated: true
---
# Problem Text

Data la parabola $\gamma$ di equazione $y = -x^2 + 4x - 3$, determina le equazioni delle rette tangenti a $\gamma$ condotte dall'origine $O(0,0)$.

# Solution

**1. Fascio di rette per l'origine:**
L'equazione di un generico fascio di rette passante per $O(0,0)$ è:
$$
y = mx
$$

**2. Sistema tra retta e parabola:**
Per trovare i punti di intersezione o di tangenza, poniamo a sistema le equazioni della retta e della parabola:
$$
\begin{cases}
y = mx \
y = -x^2 + 4x - 3
\end{cases}
$$
Eguagliando le due espressioni di $y$:
$$
-x^2 + 4x - 3 = mx \implies x^2 + (m - 4)x + 3 = 0
$$

**3. Condizione di tangenza ($\Delta = 0$):**
Affinché la retta sia tangente alla parabola, l'equazione risolvente di secondo grado deve avere due soluzioni reali e coincidenti. Imponiamo dunque il discriminante pari a zero:
$$
\Delta = b^2 - 4ac = (m - 4)^2 - 4(1)(3) = 0
$$
Sviluppiamo l'equazione:
$$
m^2 - 8m + 16 - 12 = 0 \implies m^2 - 8m + 4 = 0
$$

**4. Risoluzione dell'equazione per $m$:**
Risolviamo l'equazione di secondo grado in $m$ utilizzando la formula ridotta:
$$
m_{1,2} = \frac{-\frac{b}{2} \pm \sqrt{\left(\frac{b}{2} \right)^2 - ac}}{a} = 4 \pm \sqrt{16 - 4} = 4 \pm \sqrt{12} = 4 \pm 2\sqrt{3}
$$
Troviamo due coefficienti angolari:
$m_1 = 4 - 2\sqrt{3}$
$m_2 = 4 + 2\sqrt{3}$

**5. Equazioni delle rette tangenti:**
Sostituendo i valori di $m$ nell'equazione del fascio iniziale, otteniamo le due tangenti:
$$
t_1: y = (4 - 2\sqrt{3})x
$$
$$
t_2: y = (4 + 2\sqrt{3})x
$$
