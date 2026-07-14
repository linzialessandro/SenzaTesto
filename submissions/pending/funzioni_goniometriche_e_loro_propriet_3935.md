---
year: 4
macro_area: "Trigonometria"
topic: "Funzioni goniometriche e loro propriet\u00e0"
difficulty: 3
ai_generated: true
tags:
  - "secante"
  - "cosecante"
  - "dominio"
  - "disequazioni goniometriche"
  - "funzioni goniometriche"
---
# Problem Text
Determinare il dominio della funzione reale di variabile reale
$$ f(x) = \sqrt{\sec(x) + \csc(x)} $$
nell'intervallo $[0, 2\pi]$.

# Solution
La funzione è definita quando l'espressione sotto radice è non negativa e le funzioni goniometriche secante e cosecante sono definite. Pertanto, dobbiamo imporre le seguenti condizioni:

1. Condizioni di esistenza di $\sec(x)$ e $\csc(x)$:
$$ \cos(x) \neq 0 \quad \text{e} \quad \sin(x) \neq 0 \implies x \neq 0, \frac{\pi}{2}, \pi, \frac{3\pi}{2}, 2\pi $$

2. Condizione di non negatività del radicando:
$$ \sec(x) + \csc(x) \geq 0 \implies \frac{1}{\cos(x)} + \frac{1}{\sin(x)} \geq 0 \implies \frac{\sin(x) + \cos(x)}{\sin(x)\cos(x)} \geq 0 $$

Analizziamo separatamente il segno del numeratore $N(x) = \sin(x) + \cos(x)$ e del denominatore $D(x) = \sin(x)\cos(x)$ nell'intervallo $[0, 2\pi]$ (escludendo gli estremi in cui $D(x) = 0$):

- **Segno di $N(x)$**:
$$ \sin(x) + \cos(x) \geq 0 \iff \sqrt{2}\sin\left(x + \frac{\pi}{4}\right) \geq 0 $$
Risolvendo nell'intervallo $[0, 2\pi]$, si ottiene:
$$ x \in \left[0, \frac{3\pi}{4}\right] \cup \left[\frac{7\pi}{4}, 2\pi\right] $$
Con $N(x) = 0$ per $x = \frac{3\pi}{4}$ e $x = \frac{7\pi}{4}$.

- **Segno di $D(x)$**:
$$ \sin(x)\cos(x) > 0 \iff \sin(2x) > 0 $$
Risolvendo nell'intervallo $[0, 2\pi]$, si ottiene:
$$ x \in \left(0, \frac{\pi}{2}\right) \cup \left(\pi, \frac{3\pi}{2}\right) $$

Confrontiamo i segni dei due termini per determinare il segno della frazione $\frac{N(x)}{D(x)}$:

- Per $x \in \left(0, \frac{\pi}{2}\right)$: $N(x) > 0$ e $D(x) > 0 \implies \frac{N(x)}{D(x)} > 0$ **(Accettabile)**
- Per $x \in \left(\frac{\pi}{2}, \frac{3\pi}{4}\right)$: $N(x) > 0$ e $D(x) < 0 \implies \frac{N(x)}{D(x)} < 0$
- Per $x = \frac{3\pi}{4}$: $N(x) = 0$ e $D(x) < 0 \implies \frac{N(x)}{D(x)} = 0$ **(Accettabile)**
- Per $x \in \left(\frac{3\pi}{4}, \pi\right)$: $N(x) < 0$ e $D(x) < 0 \implies \frac{N(x)}{D(x)} > 0$ **(Accettabile)**
- Per $x \in \left(\pi, \frac{3\pi}{2}\right)$: $N(x) < 0$ e $D(x) > 0 \implies \frac{N(x)}{D(x)} < 0$
- Per $x \in \left(\frac{3\pi}{2}, \frac{7\pi}{4}\right)$: $N(x) < 0$ e $D(x) < 0 \implies \frac{N(x)}{D(x)} > 0$ **(Accettabile)**
- Per $x = \frac{7\pi}{4}$: $N(x) = 0$ e $D(x) < 0 \implies \frac{N(x)}{D(x)} = 0$ **(Accettabile)**
- Per $x \in \left(\frac{7\pi}{4}, 2\pi\right)$: $N(x) > 0$ e $D(x) < 0 \implies \frac{N(x)}{D(x)} < 0$

Unendo gli intervalli in cui la frazione risulta positiva o nulla, si ottiene il dominio finale della funzione:
$$ D = \left(0, \frac{\pi}{2}\right) \cup \left[\frac{3\pi}{4}, \pi\right) \cup \left(\frac{3\pi}{2}, \frac{7\pi}{4}\right] $$
