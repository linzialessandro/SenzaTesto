---
year: 3
macro_area: Coniche
topic: La circonferenza
difficulty: 3
tags:
  - circonferenza
  - rette tangenti
  - distanza centro retta
ai_generated: true
---
# Problem Text

Determinare l'equazione della circonferenza passante per l'origine degli assi e avente centro nel punto $C(2, -1)$. Successivamente, calcolare la misura della corda individuata sulla circonferenza dalla retta di equazione $y = x - 1$.

# Solution

**1. Determinazione dell'equazione della circonferenza:**
Sappiamo che la circonferenza ha centro $C(2, -1)$ e passa per l'origine $O(0,0)$. 
Il raggio $r$ è pari alla distanza tra il centro e l'origine:
$$
r = \overline{CO} = \sqrt{(0 - 2)^2 + (0 - (-1))^2} = \sqrt{4 + 1} = \sqrt{5}
$$
L'equazione cartesiana della circonferenza è $(x - x_C)^2 + (y - y_C)^2 = r^2$:
$$
(x - 2)^2 + (y + 1)^2 = 5
$$
Sviluppando i quadrati per ottenere l'equazione canonica:
$$
x^2 - 4x + 4 + y^2 + 2y + 1 = 5 \implies x^2 + y^2 - 4x + 2y = 0
$$

**2. Intersezione tra circonferenza e retta:**
Mettiamo a sistema l'equazione della circonferenza con l'equazione della retta $y = x - 1$:
$$
\begin{cases}
x^2 + y^2 - 4x + 2y = 0 \\
y = x - 1
\end{cases}
$$
Sostituiamo $y$ nella prima equazione:
$$
x^2 + (x - 1)^2 - 4x + 2(x - 1) = 0
$$
$$
x^2 + x^2 - 2x + 1 - 4x + 2x - 2 = 0
$$
$$
2x^2 - 4x - 1 = 0
$$

**3. Calcolo delle coordinate dei punti di intersezione:**
Risolviamo l'equazione di secondo grado:
$$
x_{1,2} = \frac{4 \pm \sqrt{16 - 4(2)(-1)}}{4} = \frac{4 \pm \sqrt{16 + 8}}{4} = \frac{4 \pm \sqrt{24}}{4} = \frac{4 \pm 2\sqrt{6}}{4} = \frac{2 \pm \sqrt{6}}{2}
$$
Le due ascisse sono $x_A = \frac{2 - \sqrt{6}}{2}$ e $x_B = \frac{2 + \sqrt{6}}{2}$.
Sostituendo nella retta $y = x - 1$, otteniamo le ordinate:
$y_A = \frac{2 - \sqrt{6}}{2} - 1 = -\frac{\sqrt{6}}{2}$
$y_B = \frac{2 + \sqrt{6}}{2} - 1 = \frac{\sqrt{6}}{2}$
I punti di intersezione sono $A\left(\frac{2-\sqrt{6}}{2}, -\frac{\sqrt{6}}{2}\right)$ e $B\left(\frac{2+\sqrt{6}}{2}, \frac{\sqrt{6}}{2}\right)$.

**4. Misura della corda:**
Applichiamo la formula della distanza tra i punti $A$ e $B$:
$$
\overline{AB} = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}
$$
$$
\overline{AB} = \sqrt{\left(\frac{\sqrt{6}}{2} - \left(-\frac{\sqrt{6}}{2}\right)\right)^2 + \left(\frac{\sqrt{6}}{2} - \left(-\frac{\sqrt{6}}{2}\right)\right)^2} = \sqrt{(\sqrt{6})^2 + (\sqrt{6})^2} = \sqrt{6 + 6} = \sqrt{12} = 2\sqrt{3}
$$

*(Alternativa: La distanza del centro $C(2, -1)$ dalla retta $x - y - 1 = 0$ è $d = \frac{|2 - (-1) - 1|}{\sqrt{1^2 + (-1)^2}} = \frac{2}{\sqrt{2}} = \sqrt{2}$. La mezza corda $l/2$ per il teorema di Pitagora è $\sqrt{r^2 - d^2} = \sqrt{5 - 2} = \sqrt{3}$. Quindi la corda intera misura $2\sqrt{3}$.)*

**Soluzione:** La corda intercettata misura $2\sqrt{3}$.
