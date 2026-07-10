---
year: 5
macro_area: Studio di funzione e Ottimizzazione
topic: Asintoti e Dominio
difficulty: 3
tags:
  - funzioni
  - dominio
  - asintoti
ai_generated: true
---
# Problem Text

Determinare il dominio e le equazioni degli eventuali asintoti (verticali, orizzontali e obliqui) della seguente funzione:
$$
f(x) = \frac{x^2 - 4x + 3}{x - 2}
$$

# Solution

**1. Determinazione del Dominio:**
Trattandosi di una funzione razionale fratta, dobbiamo escludere i valori che annullano il denominatore.
$$
x - 2 \neq 0 \implies x \neq 2
$$
Il Dominio è $D = \mathbb{R} \setminus \{2\} = (-\infty, 2) \cup (2, +\infty)$.

**2. Ricerca degli asintoti verticali:**
Calcoliamo il limite della funzione per $x$ che tende ai punti di discontinuità, cioè $x = 2$:
$$
\lim_{x \to 2} \frac{x^2 - 4x + 3}{x - 2}
$$
Sostituendo $x = 2$, otteniamo a numeratore $4 - 8 + 3 = -1$ e a denominatore $0$.
Poiché abbiamo un limite del tipo $\frac{k}{0}$ con $k \neq 0$, il risultato è $\infty$.
Più precisamente:
$\lim_{x \to 2^+} \frac{-1}{0^+} = -\infty$ e $\lim_{x \to 2^-} \frac{-1}{0^-} = +\infty$.
Di conseguenza, la retta di equazione **$x = 2$ è un asintoto verticale**.

**3. Ricerca degli asintoti orizzontali:**
Calcoliamo il limite per $x \to \pm\infty$:
$$
\lim_{x \to \pm\infty} \frac{x^2 - 4x + 3}{x - 2}
$$
Il grado del numeratore (2) è maggiore del grado del denominatore (1), quindi il limite tende a $\pm\infty$.
Non ci sono asintoti orizzontali.

**4. Ricerca degli asintoti obliqui:**
Poiché il grado del numeratore supera esattamente di uno il grado del denominatore, esiste un asintoto obliquo della forma $y = mx + q$.

Calcoliamo il coefficiente angolare $m$:
$$
m = \lim_{x \to \pm\infty} \frac{f(x)}{x} = \lim_{x \to \pm\infty} \frac{x^2 - 4x + 3}{x(x - 2)} = \lim_{x \to \pm\infty} \frac{x^2 - 4x + 3}{x^2 - 2x} = 1
$$
Quindi $m = 1$.

Calcoliamo il termine noto $q$:
$$
q = \lim_{x \to \pm\infty} [f(x) - mx] = \lim_{x \to \pm\infty} \left[ \frac{x^2 - 4x + 3}{x - 2} - x \right]
$$
Mettendo a minimo comun denominatore:
$$
q = \lim_{x \to \pm\infty} \frac{x^2 - 4x + 3 - x(x - 2)}{x - 2} = \lim_{x \to \pm\infty} \frac{x^2 - 4x + 3 - x^2 + 2x}{x - 2} = \lim_{x \to \pm\infty} \frac{-2x + 3}{x - 2}
$$
Poiché numeratore e denominatore hanno lo stesso grado, il limite è il rapporto dei coefficienti dei termini di grado massimo:
$$
q = \frac{-2}{1} = -2
$$
Pertanto, l'equazione dell'asintoto obliquo è **$y = x - 2$**.

**(Alternativa per trovare l'asintoto obliquo):** Eseguendo la divisione tra polinomi $(x^2 - 4x + 3) \div (x - 2)$, si ottiene quoziente $(x - 2)$ e resto $-1$. Dunque $f(x) = (x - 2) - \frac{1}{x-2}$. Da cui si evince chiaramente l'asintoto $y = x - 2$.

**Soluzione:** 
- Dominio: $\mathbb{R} \setminus \{2\}$
- Asintoto verticale: $x = 2$
- Asintoto obliquo: $y = x - 2$
