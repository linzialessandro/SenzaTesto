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
$$y = f(x) = \frac{2x+2}{x-2}$$
In particolare devi determinare: campo di esistenza, simmetrie, intersezioni con gli assi, positività e limiti. Infine, disegna una bozza della funzione proposta nel piano cartesiano.

# Solution
**1. Campo di Esistenza (C.E.)**
Il denominatore deve essere diverso da zero:
$$x - 2 \neq 0 \implies x \neq 2$$
$$D = (-\infty, 2) \cup (2, +\infty)$$

**2. Simmetrie**
Controlliamo se è pari ($$f(-x) = f(x)$$) o dispari ($$f(-x) = -f(x)$$):
$$f(-x) = \frac{-2x+2}{-x-2} = \frac{2x-2}{x+2}$$
Essendo diversa sia da $$f(x)$$ che da $$-f(x)$$, la funzione non possiede simmetrie rispetto all'asse $$y$$ né rispetto all'origine (il suo centro di simmetria sarà l'intersezione degli asintoti).

**3. Intersezioni con gli assi**
- **Asse $$y$$ ($$x=0$$)**: 
  $$y = \frac{2(0)+2}{0-2} = \frac{2}{-2} = -1$$. Punto di intersezione: $$(0, -1)$$.
- **Asse $$x$$ ($$y=0$$)**:
  $$\frac{2x+2}{x-2} = 0 \implies 2x+2 = 0 \implies 2x = -2 \implies x = -1$$. Punto di intersezione: $$(-1, 0)$$.

**4. Studio del segno (Positività)**
Poniamo $$f(x) > 0$$:
$$\frac{2x+2}{x-2} > 0$$
- Numeratore $$> 0$$: $$2x+2 > 0 \implies x > -1$$
- Denominatore $$> 0$$: $$x-2 > 0 \implies x > 2$$

Studiando il quadro dei segni:
- $$x < -1$$: Num $$- $$, Den $$- $$ $\implies$ Frazione $$+ $$
- $$-1 < x < 2$$: Num $$+ $$, Den $$- $$ $\implies$ Frazione $$- $$
- $$x > 2$$: Num $$+ $$, Den $$+ $$ $\implies$ Frazione $$+ $$

La funzione è positiva in $$(-\infty, -1) \cup (2, +\infty)$$ e negativa in $$(-1, 2)$$.

**5. Limiti e Asintoti**
- **Asintoti orizzontali:**
  $$\lim_{x \to \pm\infty} \frac{2x+2}{x-2} = \frac{2x}{x} = 2$$
  La retta $$y=2$$ è un **asintoto orizzontale**.
- **Asintoti verticali:**
  Verifichiamo il comportamento attorno a $$x=2$$:
  $$\lim_{x \to 2^-} \frac{2x+2}{x-2} = \frac{6}{0^-} = -\infty$$
  $$\lim_{x \to 2^+} \frac{2x+2}{x-2} = \frac{6}{0^+} = +\infty$$
  La retta $$x=2$$ è un **asintoto verticale**.

**6. Grafico qualitativo**
Il grafico è un'iperbole equilatera traslata (funzione omografica).

```latex
\begin{center}
\begin{tikzpicture}[scale=0.8]
  % griglia
  \draw[very thin, gray!30] (-5,-5) grid (6,5);
  % assi
  \draw[thick,->] (-5,0) -- (6.5,0) node[below] {$x$};
  \draw[thick,->] (0,-5) -- (0,5.5) node[above] {$y$};
  
  % asintoti
  \draw[dashed, red, thick] (2,-5) -- (2,5); % x=2
  \draw[dashed, red, thick] (-5,2) -- (6,2); % y=2
  
  % intersezioni 
  \node at (-1,0) [circle,fill,inner sep=1.5pt]{};
  \node at (0,-1) [circle,fill,inner sep=1.5pt]{};
  
  % rami dell'iperbole
  % Ramo sinistro (x < 2)
  \draw[domain=-5:1.7,smooth,very thick,blue] plot (\x,{(2*\x+2)/(\x-2)});
  % Ramo destro (x > 2)
  \draw[domain=2.3:6,smooth,very thick,blue] plot (\x,{(2*\x+2)/(\x-2)});
  
  % Etichette assi 
  \node[below left] at (0,0) {0};
  \node[below right] at (2,0) {2};
  \node[above left] at (0,2) {2};
  \node[below] at (-1,0) {-1};
  \node[right] at (0,-1) {-1};
\end{tikzpicture}
\end{center}
```
