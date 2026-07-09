---
year: 2
macro_area: "Analisi"
topic: "Studio di Funzione"
difficulty: 2
tags:
  - "funzione omografica"
  - "limiti"
  - "asintoti"
  - "grafico"
---
# Problem Text
Studia la seguente funzione:
$$y = f(x) = \frac{2x-6}{x+3}$$
In particolare devi determinare: campo di esistenza, simmetrie, intersezioni con gli assi, positività e limiti. Infine, disegna una bozza della funzione proposta nel piano cartesiano.

# Solution
**1. Campo di Esistenza (C.E.)**
Poniamo il denominatore diverso da zero:
$$x + 3 \neq 0 \implies x \neq -3$$
$$D = (-\infty, -3) \cup (-3, +\infty)$$

**2. Simmetrie**
Controlliamo parità e disparità:
$$f(-x) = \frac{2(-x)-6}{-x+3} = \frac{-2x-6}{-x+3}$$
Risulta diversa sia da $$f(x)$$ che da $$-f(x)$$. La funzione non presenta simmetrie pari o dispari (il centro di simmetria è intersezione degli asintoti).

**3. Intersezioni con gli assi**
- **Asse $$y$$ ($$x=0$$)**: 
  $$y = \frac{0-6}{0+3} = \frac{-6}{3} = -2$$. L'intersezione è $$(0, -2)$$.
- **Asse $$x$$ ($$y=0$$)**:
  $$\frac{2x-6}{x+3} = 0 \implies 2x - 6 = 0 \implies 2x = 6 \implies x = 3$$. L'intersezione è $$(3, 0)$$.

**4. Studio del segno (Positività)**
Studiamo la disequazione:
$$\frac{2x-6}{x+3} > 0$$
- Numeratore $$> 0 \implies 2x > 6 \implies x > 3$$
- Denominatore $$> 0 \implies x > -3$$

Quadro dei segni:
- $$x < -3$$: Num $$- $$, Den $$- $$ $\implies$ Frazione $$+ $$
- $$-3 < x < 3$$: Num $$- $$, Den $$+ $$ $\implies$ Frazione $$- $$
- $$x > 3$$: Num $$+ $$, Den $$+ $$ $\implies$ Frazione $$+ $$

La funzione è positiva negli intervalli $$(-\infty, -3) \cup (3, +\infty)$$ ed è negativa in $$(-3, 3)$$.

**5. Limiti e Asintoti**
- **Asintoti orizzontali:**
  $$\lim_{x \to \pm\infty} \frac{2x-6}{x+3} = \lim_{x \to \pm\infty} \frac{2x}{x} = 2$$
  La retta $$y=2$$ è un **asintoto orizzontale**.
- **Asintoti verticali:**
  Calcoliamo i limiti al finito verso il punto in cui la funzione non è definita:
  $$\lim_{x \to -3^-} \frac{2x-6}{x+3} = \frac{-12}{0^-} = +\infty$$
  $$\lim_{x \to -3^+} \frac{2x-6}{x+3} = \frac{-12}{0^+} = -\infty$$
  La retta $$x=-3$$ è un **asintoto verticale**.

**6. Grafico qualitativo**
Tracciamo l'iperbole equilatera traslata utilizzando gli asintoti trovati e le intersezioni.

```latex
\begin{center}
\begin{tikzpicture}[scale=0.7]
  % griglia
  \draw[very thin, gray!30] (-7,-5) grid (6,5);
  % assi
  \draw[thick,->] (-7.5,0) -- (6.5,0) node[below] {$x$};
  \draw[thick,->] (0,-5.5) -- (0,5.5) node[above] {$y$};
  
  % asintoti
  \draw[dashed, red, thick] (-3,-5) -- (-3,5); % x=-3
  \draw[dashed, red, thick] (-7,2) -- (6,2); % y=2
  
  % intersezioni 
  \node at (3,0) [circle,fill,inner sep=1.5pt]{};
  \node at (0,-2) [circle,fill,inner sep=1.5pt]{};
  
  % rami dell'iperbole
  % Ramo sinistro (x < -3)
  \draw[domain=-7:-3.4,smooth,very thick,blue] plot (\x,{(2*\x-6)/(\x+3)});
  % Ramo destro (x > -3)
  \draw[domain=-2.3:6,smooth,very thick,blue] plot (\x,{(2*\x-6)/(\x+3)});
  
  % Etichette
  \node[below left] at (0,0) {0};
  \node[below right] at (-3,0) {-3};
  \node[above left] at (0,2) {2};
  \node[above] at (3,0) {3};
  \node[right] at (0,-2) {-2};
\end{tikzpicture}
\end{center}
```
