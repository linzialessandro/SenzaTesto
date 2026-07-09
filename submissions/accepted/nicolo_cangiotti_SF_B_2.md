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
$$y = f(x) = \frac{3x-3}{x+3}$$
In particolare devi determinare: campo di esistenza, simmetrie, intersezioni con gli assi, positività e limiti. Infine, disegna una bozza della funzione proposta nel piano cartesiano.

# Solution
**1. Campo di Esistenza (C.E.)**
Il denominatore deve essere diverso da zero:
$$x + 3 \neq 0 \implies x \neq -3$$
$$D = (-\infty, -3) \cup (-3, +\infty)$$

**2. Simmetrie**
Controlliamo se è pari ($$f(-x) = f(x)$$) o dispari ($$f(-x) = -f(x)$$):
$$f(-x) = \frac{3(-x)-3}{-x+3} = \frac{-3x-3}{-x+3}$$
Non è uguale a $$f(x)$$ né a $$-f(x)$$. La funzione non presenta simmetrie globali rispetto agli assi (il centro di simmetria è il punto $$(-3, 3)$$).

**3. Intersezioni con gli assi**
- **Asse $$y$$ ($$x=0$$)**: 
  $$y = \frac{3(0)-3}{0+3} = \frac{-3}{3} = -1$$. Intersezione: $$(0, -1)$$.
- **Asse $$x$$ ($$y=0$$)**:
  $$\frac{3x-3}{x+3} = 0 \implies 3x - 3 = 0 \implies x = 1$$. Intersezione: $$(1, 0)$$.

**4. Studio del segno (Positività)**
Poniamo $$f(x) > 0$$:
$$\frac{3x-3}{x+3} > 0$$
- Numeratore $$> 0$$: $$3x - 3 > 0 \implies x > 1$$
- Denominatore $$> 0$$: $$x + 3 > 0 \implies x > -3$$

Dal quadro dei segni:
- $$x < -3$$: Num $$- $$, Den $$- $$ $\implies$ Funzione $$+ $$
- $$-3 < x < 1$$: Num $$- $$, Den $$+ $$ $\implies$ Funzione $$- $$
- $$x > 1$$: Num $$+ $$, Den $$+ $$ $\implies$ Funzione $$+ $$

La funzione è positiva in $$(-\infty, -3) \cup (1, +\infty)$$ e negativa in $$(-3, 1)$$.

**5. Limiti e Asintoti**
- **Asintoti orizzontali:**
  $$\lim_{x \to \pm\infty} \frac{3x-3}{x+3} = \frac{3x}{x} = 3$$
  La retta $$y=3$$ è un **asintoto orizzontale**.
- **Asintoti verticali:**
  Verifichiamo in prossimità del punto non definito $$x=-3$$:
  $$\lim_{x \to -3^-} \frac{3x-3}{x+3} = \frac{-12}{0^-} = +\infty$$
  $$\lim_{x \to -3^+} \frac{3x-3}{x+3} = \frac{-12}{0^+} = -\infty$$
  La retta $$x=-3$$ è un **asintoto verticale**.

**6. Grafico qualitativo**
Il grafico è un'iperbole equilatera traslata con asintoti in $$x=-3$$ e $$y=3$$.

```latex
\begin{center}
\begin{tikzpicture}[scale=0.7]
  % griglia
  \draw[very thin, gray!30] (-7,-3) grid (4,7);
  % assi
  \draw[thick,->] (-7.5,0) -- (4.5,0) node[below] {$x$};
  \draw[thick,->] (0,-3.5) -- (0,7.5) node[above] {$y$};
  
  % asintoti
  \draw[dashed, red, thick] (-3,-3) -- (-3,7); % x=-3
  \draw[dashed, red, thick] (-7,3) -- (4,3); % y=3
  
  % intersezioni 
  \node at (1,0) [circle,fill,inner sep=1.5pt]{};
  \node at (0,-1) [circle,fill,inner sep=1.5pt]{};
  
  % rami dell'iperbole
  % Ramo sinistro (x < -3)
  \draw[domain=-7:-3.2,smooth,very thick,blue] plot (\x,{(3*\x-3)/(\x+3)});
  % Ramo destro (x > -3)
  \draw[domain=-2.7:4,smooth,very thick,blue] plot (\x,{(3*\x-3)/(\x+3)});
  
  % Etichette
  \node[below right] at (0,0) {0};
  \node[below right] at (-3,0) {-3};
  \node[above left] at (0,3) {3};
  \node[below] at (1,0) {1};
  \node[left] at (0,-1) {-1};
\end{tikzpicture}
\end{center}
```
