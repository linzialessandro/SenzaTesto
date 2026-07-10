---
year: 5
macro_area: "Analisi Matematica"
topic: "Calcolo dei limiti e limiti notevoli"
difficulty: 2
tags:
  - "limiti"
  - "limiti notevoli"
  - "forma indeterminata"
  - "funzione logaritmica"
  - "funzione goniometrica"
ai_generated: true
---
# Problem Text
Calcolare il seguente limite di funzione utilizzando i limiti notevoli:

$$
\lim_{x \to 0} \frac{\ln(1 + 5x)}{\sin(2x)}
$$

# Solution
**Passo 1: Verifica della forma indeterminata**
Sostituendo direttamente $x = 0$ nell'espressione, si ottiene:

$$
\frac{\ln(1 + 0)}{\sin(0)} = \frac{0}{0}
$$

Si tratta di una forma indeterminata del tipo $\left[\frac{0}{0}\right]$.

---

**Passo 2: Richiamo dei limiti notevoli**
Per risolvere l'indeterminazione, facciamo riferimento ai seguenti limiti notevoli fondamentali:

$$
\lim_{t \to 0} \frac{\ln(1 + t)}{t} = 1
$$

$$
\lim_{t \to 0} \frac{\sin(t)}{t} = 1 \implies \lim_{t \to 0} \frac{t}{\sin(t)} = 1
$$

---

**Passo 3: Riscrittura algebrica della funzione**
Moltiplichiamo e dividiamo opportunamente i termini per ricondurci ai limiti notevoli identificati:

$$
\frac{\ln(1 + 5x)}{\sin(2x)} = \frac{\ln(1 + 5x)}{5x} \cdot \frac{2x}{\sin(2x)} \cdot \frac{5x}{2x}
$$

---

**Passo 4: Semplificazione dei fattori algebrici**
Semplificando la x nell'ultimo fattore $\frac{5x}{2x}$, otteniamo una costante indipendente da $x$:

$$
\frac{\ln(1 + 5x)}{\sin(2x)} = \frac{\ln(1 + 5x)}{5x} \cdot \frac{2x}{\sin(2x)} \cdot \frac{5}{2}
$$

---

**Passo 5: Calcolo del limite dei singoli fattori**
Poiché per $x \to 0$ abbiamo che sia $5x \to 0$ sia $2x \to 0$, applichiamo i limiti notevoli:

$$
\lim_{x \to 0} \frac{\ln(1 + 5x)}{5x} = 1
$$

$$
\lim_{x \to 0} \frac{2x}{\sin(2x)} = 1
$$

---

**Passo 6: Calcolo del risultato finale**
Sostituendo i singoli limiti nell'espressione scomposta, otteniamo:

$$
\lim_{x \to 0} \frac{\ln(1 + 5x)}{\sin(2x)} = 1 \cdot 1 \cdot \frac{5}{2} = \frac{5}{2}
$$
