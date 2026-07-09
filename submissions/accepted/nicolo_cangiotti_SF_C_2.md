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
$$y = f(x) = \frac{x+4}{x+2}$$
In particolare devi determinare: campo di esistenza, simmetrie, intersezioni con gli assi, positività e limiti. Infine, disegna una bozza della funzione proposta nel piano cartesiano.

# Solution
**1. Campo di Esistenza (C.E.)**
Il denominatore deve essere non nullo:
$$x + 2 \neq 0 \implies x \neq -2$$
$$D = (-\infty, -2) \cup (-2, +\infty)$$

**2. Simmetrie**
Controlliamo le parità:
$$f(-x) = \frac{-x+4}{-x+2} = \frac{x-4}{x-2}$$
Non essendoci uguaglianza né con $$f(x)$$ né con $$-f(x)$$, la funzione non è né pari né dispari.

**3. Intersezioni con gli assi**
- **Asse $$y$$ ($$x=0$$)**: 
  $$y = \frac{0+4}{0+2} = \frac{4}{2} = 2$$. Intersezione in $$(0, 2)$$.
- **Asse $$x$$ ($$y=0$$)**:
  $$\frac{x+4}{x+2} = 0 \implies x + 4 = 0 \implies x = -4$$. Intersezione in $$(-4, 0)$$.

**4. Studio del segno (Positività)**
Risolviamo $$f(x) > 0$$:
$$\frac{x+4}{x+2} > 0$$
- Numeratore $$> 0 \implies x > -4$$
- Denominatore $$> 0 \implies x > -2$$

Quadro dei segni:
- $$x < -4$$: Num $$- $$, Den $$- $$ $\implies$ Funzione $$+ $$
- $$-4 < x < -2$$: Num $$+ $$, Den $$- $$ $\implies$ Funzione $$- $$
- $$x > -2$$: Num $$+ $$, Den $$+ $$ $\implies$ Funzione $$+ $$

La curva è al di sopra dell'asse $$x$$ in $$(-\infty, -4) \cup (-2, +\infty)$$ e al di sotto in $$(-4, -2)$$.

**5. Limiti e Asintoti**
- **Asintoti orizzontali:**
  $$\lim_{x \to \pm\infty} \frac{x+4}{x+2} = \lim_{x \to \pm\infty} \frac{x}{x} = 1$$
  La retta $$y=1$$ è un **asintoto orizzontale**.
- **Asintoti verticali:**
  Studiamo l'intorno del punto di discontinuità $$x=-2$$:
  $$\lim_{x \to -2^-} \frac{x+4}{x+2} = \frac{2}{0^-} = -\infty$$
  $$\lim_{x \to -2^+} \frac{x+4}{x+2} = \frac{2}{0^+} = +\infty$$
  La retta $$x=-2$$ è un **asintoto verticale**.

**6. Grafico qualitativo**
Il grafico descrive un'iperbole equilatera traslata con asintoti $$x=-2$$ e $$y=1$$.

```latex
\begin{center}
\begin{tikzpicture}[scale=0.8]
  % griglia
  \draw[very thin, gray!30] (-7,-3) grid (3,5);
  % assi
  \draw[thick,->] (-7.5,0) -- (4,0) node[below] {$x$};
  \draw[thick,->] (0,-3.5) -- (0,5.5) node[above] {$y$};
  
  % asintoti
  \draw[dashed, red, thick] (-2,-3) -- (-2,5); % x=-2
  \draw[dashed, red, thick] (-7,1) -- (3,1); % y=1
  
  % intersezioni 
  \node at (-4,0) [circle,fill,inner sep=1.5pt]{};
  \node at (0,2) [circle,fill,inner sep=1.5pt]{};
  
  % rami dell'iperbole
  % Ramo sinistro (x < -2)
  \draw[domain=-7:-2.3,smooth,very thick,blue] plot (\x,{(\x+4)/(\x+2)});
  % Ramo destro (x > -2)
  \draw[domain=-1.7:3,smooth,very thick,blue] plot (\x,{(\x+4)/(\x+2)});
  
  % Etichette
  \node[below left] at (0,0) {0};
  \node[below right] at (-2,0) {-2};
  \node[above left] at (0,1) {1};
  \node[below] at (-4,0) {-4};
  \node[right] at (0,2) {2};
\end{tikzpicture}
\end{center}
```
