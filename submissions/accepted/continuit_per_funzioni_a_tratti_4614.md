---
year: 5
macro_area: "Limiti e Continuit\u00e0"
topic: "Continuit\u00e0 per funzioni a tratti"
difficulty: 2
ai_generated: true
tags:
  - "continuit\u00e0"
  - "funzioni a tratti"
  - "limiti notevoli"
  - "punti di discontinuit\u00e0"
  - "quinto anno"
---
# Problem Text
Determinare il valore del parametro reale $a$ affinché la funzione $f: \mathbb{R} \to \mathbb{R}$ definita da

$$
f(x) = \begin{cases} \frac{\sin(2x)}{x} & \text{se } x < 0 \\ a+1 & \text{se } x = 0 \\ \sqrt{x+4} & \text{se } x > 0 \end{cases}
$$

sia continua nel punto $x_0 = 0$.

# Solution
Per determinare il valore del parametro $a$ che rende la funzione continua nel punto $x_0 = 0$, applichiamo la definizione formale di continuità.

1. **Condizione di continuità**: Una funzione $f(x)$ è continua in un punto $x_0$ del suo dominio se e solo se il limite sinistro e il limite destro esistono, sono finiti e coincidono con il valore della funzione nel punto stesso:

$$
\lim_{x \to 0^-} f(x) = \lim_{x \to 0^+} f(x) = f(0)
$$

2. **Calcolo del limite sinistro ($x \to 0^-$)**: Utilizziamo l'espressione di $f(x)$ per $x < 0$ e riconduciamoci al limite notevole del seno $\lim_{t \to 0} \frac{\sin t}{t} = 1$:

$$
\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} \frac{\sin(2x)}{x} = \lim_{x \to 0^-} 2 \cdot \frac{\sin(2x)}{2x} = 2 \cdot 1 = 2
$$

3. **Calcolo del limite destro ($x \to 0^+$)**: Utilizziamo l'espressione per $x > 0$. Poiché la funzione radice quadrata è continua nel suo dominio locale, procediamo per sostituzione diretta:

$$
\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \sqrt{x+4} = \sqrt{0+4} = 2
$$

4. **Valutazione della funzione nel punto**: Dalla definizione a tratti, per $x = 0$ si ha:

$$
f(0) = a + 1
$$

5. **Risoluzione della condizione**: Uguagliando i limiti destro e sinistro (entrambi pari a $2$) al valore $f(0)$, otteniamo l'equazione lineare nell'incognita $a$:

$$
2 = a + 1 \implies a = 1
$$

La funzione è pertanto continua in $x_0 = 0$ per $a = 1$. Nel caso in cui $a \neq 1$, la funzione presenta in $x_0 = 0$ un punto di discontinuità eliminabile (terza specie).
