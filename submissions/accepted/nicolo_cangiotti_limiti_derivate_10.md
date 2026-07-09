---
year: 5
macro_area: "Analisi Matematica"
topic: "Limiti"
difficulty: 2
tags:
  - "continuità"
  - "funzioni definite a tratti"
  - "limiti notevoli"
---
# Problem Text
Sia
$$
f(x)=\begin{cases}
\frac{1}{\sqrt{x}}+\frac{1}{2} &\text{se } x>4\\
1 &\text{se } x=4\\
\frac{\sin(\sqrt{x}-2)}{\sqrt{x}-2} &\text{se } x<4
\end{cases}
$$
Stabilire se la funzione è continua in ogni punto del suo dominio.

# Solution
Una funzione è continua in un punto $$x_0$$ se il limite destro, il limite sinistro e il valore assunto dalla funzione nel punto coincidono.
Analizziamo innanzitutto il dominio della funzione per valutare dove occorre accertare la continuità:
- Il tratto $$x>4$$ non presenta problemi (l'unico punto critico sarebbe $$x=0$$, che è escluso). La funzione è continua su $$(4, +\infty)$$.
- Il tratto $$x<4$$ contiene una radice quadrata ($$x \ge 0$$) e un denominatore ($$\sqrt{x}-2 \ne 0 \implies x \ne 4$$). Dunque questa porzione ha dominio $$[0, 4)$$. La funzione è continua in tale intervallo per somma e rapporto di funzioni continue.
- Nel punto di raccordo $$x=4$$ la funzione è definita.

Dunque il dominio complessivo è $$[0, +\infty)$$. L'unico punto critico in cui la continuità non è a priori garantita è il punto di diramazione **$$x = 4$$**.
Andiamo a verificarvi le tre condizioni della continuità.

**1. Valore nel punto:**
Dalla definizione della funzione:
$$ f(4) = 1 $$

**2. Limite destro (per $$x \to 4^+$$):**
Utilizziamo la prima espressione valida per $$x > 4$$:
$$ \lim_{x \to 4^+} \left( \frac{1}{\sqrt{x}} + \frac{1}{2} \right) = \frac{1}{\sqrt{4}} + \frac{1}{2} = \frac{1}{2} + \frac{1}{2} = 1 $$

**3. Limite sinistro (per $$x \to 4^-$$):**
Utilizziamo la terza espressione valida per $$x < 4$$:
$$ \lim_{x \to 4^-} \frac{\sin(\sqrt{x}-2)}{\sqrt{x}-2} $$
Siamo di fronte a una forma indeterminata $$\left[\frac{0}{0}\right]$$. Per ricondurla a una forma nota, operiamo un cambio di variabile:
$$ t = \sqrt{x} - 2 $$
Se $$x \to 4$$, allora $$\sqrt{x} \to 2$$ e quindi $$t \to 0$$. Il limite si trasforma in:
$$ \lim_{t \to 0} \frac{\sin(t)}{t} $$
Questo è il limite notevole fondamentale che fa esatttmente **$$1$$**.

**Conclusioni:**
I limiti destro e sinistro e il valore puntuale della funzione sono identici:
$$ \lim_{x \to 4^+} f(x) = \lim_{x \to 4^-} f(x) = f(4) = 1 $$
Pertanto la funzione **è continua in tutto il suo dominio $$[0, +\infty)$$**.
