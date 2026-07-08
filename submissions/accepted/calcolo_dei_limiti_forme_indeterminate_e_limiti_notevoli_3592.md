---
year: 5
macro_area: "Analisi Matematica"
topic: "Calcolo dei Limiti: Forme Indeterminate e Limiti Notevoli"
difficulty: 2
tags:
  - "limiti"
  - "limiti notevoli"
  - "forme indeterminate"
  - "quinto anno"
---
# Problem Text
Determinare il valore del seguente limite utilizzando i limiti notevoli trigonometrici:

$$
\lim_{x \to 0} \frac{1 - \cos(3x)}{x \sin(2x)}
$$

# Solution
**Passo 1: Identificazione della forma indeterminata**
Sostituendo $x = 0$ nel limite, si ottiene:

$$
\frac{1 - \cos(0)}{0 \cdot \sin(0)} = \frac{1 - 1}{0} = \left[\frac{0}{0}\right]
$$

Siamo in presenza di una forma indeterminata del tipo $\left[\frac{0}{0}\right]$.

**Passo 2: Richiamo dei limiti notevoli**
Per risolvere il limite, utilizzeremo i seguenti limiti notevoli trigonometrici fondamentali:

$$
\lim_{y \to 0} \frac{1 - \cos(y)}{y^2} = \frac{1}{2}
$$

e

$$
\lim_{y \to 0} \frac{\sin(y)}{y} = 1
$$

**Passo 3: Riscrittura e scomposizione dell'espressione**
Moltiplichiamo e dividiamo l'espressione originaria in modo da far comparire i limiti notevoli desiderati:

$$
\frac{1 - \cos(3x)}{x \sin(2x)} = \frac{1 - \cos(3x)}{(3x)^2} \cdot \frac{2x}{\sin(2x)} \cdot \frac{9x^2}{2x^2}
$$

**Passo 4: Semplificazione algebrica**
Semplificando la frazione che contiene le potenze di $x$, ovvero $\frac{9x^2}{2x^2} = \frac{9}{2}$, otteniamo:

$$
\frac{1 - \cos(3x)}{x \sin(2x)} = \frac{1 - \cos(3x)}{(3x)^2} \cdot \frac{1}{\frac{\sin(2x)}{2x}} \cdot \frac{9}{2}
$$

**Passo 5: Calcolo del limite**
Sfruttando la continuità e il fatto che se $x \to 0$ anche $3x \to 0$ e $2x \to 0$, calcoliamo il limite per ciascun fattore:

$$
\lim_{x \to 0} \frac{1 - \cos(3x)}{(3x)^2} = \frac{1}{2}
$$

e

$$
\lim_{x \to 0} \frac{\sin(2x)}{2x} = 1
$$

Applicando questi limiti alla nostra espressione scomposta ricaviamo:

$$
\lim_{x \to 0} \frac{1 - \cos(3x)}{x \sin(2x)} = \frac{1}{2} \cdot \frac{1}{1} \cdot \frac{9}{2} = \frac{9}{4}
$$

Il valore cercato del limite è dunque $\frac{9}{4}$.
