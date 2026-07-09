---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate"
difficulty: 3
tags:
  - "continuità"
  - "derivabilità"
  - "funzioni definite a tratti"
  - "parametri"
---
# Problem Text
Determinare $$m,n \in \mathbb{R}$$ tale che 
$$
f(x)=\begin{cases}
 \ln(x)+n\cdot x -1 &\text{se } x> 1\\
m \cdot x^3-x-1 &\text{se } x\le 1
\end{cases}
$$
sia una funzione continua e derivabile sui reali.

# Solution
Una funzione definita a tratti è globalmente derivabile (e quindi anche continua) se e solo se è derivabile e continua nel punto di congiunzione dei tratti, in questo caso $$x = 1$$.
Imposteremo e risolveremo un sistema a due incognite.

**1. Condizione di continuità**
Uguagliamo i limiti dal ramo inferiore e dal ramo superiore nel punto $$x=1$$.
Il limite sinistro (e il valore nel punto) usa la seconda equazione:
$$ f(1) = \lim_{x \to 1^-} (m \cdot x^3 - x - 1) = m(1)^3 - 1 - 1 = m - 2 $$
Il limite destro usa la prima equazione:
$$ \lim_{x \to 1^+} (\ln(x) + n\cdot x - 1) = \ln(1) + n(1) - 1 = 0 + n - 1 = n - 1 $$
Uguagliamo le due espressioni per ottenere l'equazione di continuità:
$$ m - 2 = n - 1 \implies m = n + 1 $$

**2. Condizione di derivabilità**
Calcoliamo le funzioni derivate prima dei due rami (senza includere il punto limite):
- Per $$x > 1$$: $$f'(x) = D[\ln(x) + nx - 1] = \frac{1}{x} + n$$
- Per $$x < 1$$: $$f'(x) = D[mx^3 - x - 1] = 3mx^2 - 1$$

Valutiamo ora le due derivate in prossimità del raccordo per $$x \to 1$$:
- Limite della derivata destra: $$f'_+(1) = \frac{1}{1} + n = 1 + n$$
- Limite della derivata sinistra: $$f'_-(1) = 3m(1)^2 - 1 = 3m - 1$$
Uguagliandole otteniamo l'equazione della derivabilità:
$$ 1 + n = 3m - 1 \implies 3m - n = 2 $$

**3. Risoluzione del sistema**
Uniamo le due equazioni trovate a sistema:
$$
\begin{cases} m = n + 1 \\ 3m - n = 2 \end{cases}
$$
Sostituiamo il valore di $$m$$ della prima equazione all'interno della seconda:
$$ 3(n + 1) - n = 2 $$
$$ 3n + 3 - n = 2 $$
$$ 2n = 2 - 3 \implies 2n = -1 \implies n = -\frac{1}{2} $$
Sostituiamo $$n$$ a ritroso per ottenere $$m$$:
$$ m = -\frac{1}{2} + 1 = \frac{1}{2} $$

La funzione è continua e derivabile per **$$m = 1/2$$** e **$$n = -1/2$$**.
