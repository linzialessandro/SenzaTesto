---
year: 5
macro_area: Limiti e Continuità
topic: Calcolo dei Limiti
difficulty: 3
tags:
  - limiti notevoli
  - forme indeterminate
  - analisi matematica
---
# Problem Text

Calcolare il seguente limite:
$$
\lim_{x \to 0} \frac{1 - \cos(2x)}{x \sin(3x)}
$$

# Solution

**1. Valutazione iniziale e Forma Indeterminata:**
Sostituendo direttamente $x = 0$ otteniamo:
$$
\frac{1 - \cos(0)}{0 \cdot \sin(0)} = \frac{1 - 1}{0} = \frac{0}{0}
$$
Siamo di fronte a una forma indeterminata del tipo $\left[ \frac{0}{0} \right]$.

**2. Utilizzo dei limiti notevoli:**
Possiamo risolvere questo limite ricorrendo a due limiti notevoli ben conosciuti:
- $\lim_{y \to 0} \frac{1 - \cos(y)}{y^2} = \frac{1}{2}$
- $\lim_{y \to 0} \frac{\sin(y)}{y} = 1$

Cerchiamo di ricostruire queste forme all'interno della nostra espressione.

**3. Manipolazione algebrica:**
Il numeratore è $1 - \cos(2x)$. Affinché assomigli al primo limite notevole, dobbiamo dividerlo per l'argomento al quadrato, ovvero $(2x)^2 = 4x^2$.
Quindi, moltiplichiamo e dividiamo il numeratore per $4x^2$:
$$
1 - \cos(2x) = \left( \frac{1 - \cos(2x)}{(2x)^2} \right) \cdot 4x^2
$$

Il denominatore contiene $\sin(3x)$. Per ricondurlo al secondo limite notevole, dobbiamo dividerlo per l'argomento $3x$. Moltiplichiamo e dividiamo per $3x$:
$$
\sin(3x) = \left( \frac{\sin(3x)}{3x} \right) \cdot 3x
$$

Sostituendo nell'espressione del limite:
$$
\lim_{x \to 0} \frac{\left( \frac{1 - \cos(2x)}{4x^2} \right) \cdot 4x^2}{x \cdot \left( \frac{\sin(3x)}{3x} \right) \cdot 3x}
$$

**4. Semplificazione e calcolo:**
Semplifichiamo i termini algebrici restanti fuori dalle parentesi:
$$
\frac{4x^2}{x \cdot 3x} = \frac{4x^2}{3x^2} = \frac{4}{3} \quad (\text{per } x \neq 0)
$$
Quindi il limite diventa:
$$
\lim_{x \to 0} \left( \frac{4}{3} \cdot \frac{\frac{1 - \cos(2x)}{(2x)^2}}{\frac{\sin(3x)}{3x}} \right)
$$
Per il teorema del limite del prodotto e del quoziente, applichiamo i limiti ai singoli fattori. Sapendo che per $x \to 0$, anche $2x \to 0$ e $3x \to 0$:
$$
= \frac{4}{3} \cdot \frac{1/2}{1} = \frac{4}{3} \cdot \frac{1}{2} = \frac{2}{3}
$$

**Soluzione:** Il valore del limite è $\frac{2}{3}$.
