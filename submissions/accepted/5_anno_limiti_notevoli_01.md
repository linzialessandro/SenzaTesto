---
year: 5
macro_area: Analisi Matematica
topic: calcolo dei limiti
difficulty: 2
tags:
  - limiti notevoli
  - forma indeterminata
ai_generated: true
---
# Problem Text
Calcola il seguente limite sfruttando i limiti notevoli:
$$
\lim_{x \to 0} \frac{\sin(3x)}{2x}
$$

# Solution
**1. Analisi del limite:**
Sostituendo $x = 0$, otteniamo la forma indeterminata $\left[\frac{0}{0}\right]$.
Possiamo risolvere questo limite utilizzando il limite notevole trigonometrico:
$$
\lim_{t \to 0} \frac{\sin(t)}{t} = 1
$$

**2. Manipolazione algebrica:**
L'argomento del seno è $3x$. Per applicare il limite notevole, dobbiamo far comparire $3x$ anche al denominatore.
Moltiplichiamo e dividiamo la funzione per 3:
$$
\lim_{x \to 0} \frac{\sin(3x)}{2x} = \lim_{x \to 0} \left( \frac{\sin(3x)}{2x} \cdot \frac{3}{3} \right)
$$
Riorganizziamo i termini:
$$
\lim_{x \to 0} \left( \frac{\sin(3x)}{3x} \cdot \frac{3}{2} \right)
$$

**3. Calcolo del limite:**
Portiamo la costante $\frac{3}{2}$ fuori dal limite:
$$
\frac{3}{2} \cdot \lim_{x \to 0} \frac{\sin(3x)}{3x}
$$
Poiché quando $x \to 0$, anche $3x \to 0$, possiamo applicare il limite notevole ponendo $t = 3x$:
$$
\frac{3}{2} \cdot 1 = \frac{3}{2}
$$

Il risultato del limite è $\frac{3}{2}$.
