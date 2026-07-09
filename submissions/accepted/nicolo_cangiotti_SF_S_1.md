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
$$y = f(x) = \frac{x+1}{x}$$
In particolare devi determinare: campo di esistenza, simmetrie, intersezioni con gli assi, positività e limiti. Infine, disegna una bozza della funzione proposta nel piano cartesiano.

# Solution
**1. Campo di Esistenza (C.E.)**
Il denominatore deve essere diverso da zero:
$$x \neq 0$$
$$D = (-\infty, 0) \cup (0, +\infty)$$

**2. Simmetrie**
Controlliamo se è pari o dispari:
$$f(-x) = \frac{-x+1}{-x} = \frac{x-1}{x}$$
La funzione non risulta uguale a $$f(x)$$ né a $$-f(x)$$. Non ci sono simmetrie globali (il centro di simmetria è l'intersezione degli asintoti).

**3. Intersezioni con gli assi**
- **Asse $$y$$ ($$x=0$$)**: La funzione non è definita in $$x=0$$. Nessuna intersezione.
- **Asse $$x$$ ($$y=0$$)**:
  $$\frac{x+1}{x} = 0 \implies x + 1 = 0 \implies x = -1$$. Intersezione in $$(-1, 0)$$.

**4. Studio del segno (Positività)**
Poniamo $$f(x) > 0$$:
$$\frac{x+1}{x} > 0$$
- Numeratore $$> 0 \implies x > -1$$
- Denominatore $$> 0 \implies x > 0$$

Studiando i segni:
- $$x < -1$$: Num $$- $$, Den $$- $$ $\implies$ Funzione $$+ $$
- $$-1 < x < 0$$: Num $$+ $$, Den $$- $$ $\implies$ Funzione $$- $$
- $$x > 0$$: Num $$+ $$, Den $$+ $$ $\implies$ Funzione $$+ $$

La funzione è positiva negli intervalli $$(-\infty, -1) \cup (0, +\infty)$$ ed è negativa in $$(-1, 0)$$.

**5. Limiti e Asintoti**
- **Asintoti orizzontali:**
  $$\lim_{x \to \pm\infty} \frac{x+1}{x} = \lim_{x \to \pm\infty} \frac{x}{x} = 1$$
  La retta $$y=1$$ è un **asintoto orizzontale**.
- **Asintoti verticali:**
  Calcoliamo i limiti verso il valore escluso dal dominio:
  $$\lim_{x \to 0^-} \frac{x+1}{x} = \frac{1}{0^-} = -\infty$$
  $$\lim_{x \to 0^+} \frac{x+1}{x} = \frac{1}{0^+} = +\infty$$
  La retta $$x=0$$ (l'asse delle $$y$$) è un **asintoto verticale**.

**6. Grafico qualitativo**
Il grafico è un'iperbole equilatera traslata con asintoti coincidenti in parte con gli assi (asintoto verticale $$x=0$$, asintoto orizzontale $$y=1$$).

```latex
\begin{center}
\begin{tikzpicture}[scale=0.8]
  % griglia
  \draw[very thin, gray!30] (-5,-4) grid (5,5);
  % assi
  \draw[thick,->] (-5.5,0) -- (5.5,0) node[below] {$x$};
  \draw[thick,->] (0,-4.5) -- (0,5.5) node[above] {$y$};
  
  % asintoti
  \draw[dashed, red, thick] (0,-4) -- (0,5); % x=0 (sovrapposto asse y)
  \draw[dashed, red, thick] (-5,1) -- (5,1); % y=1
  
  % intersezioni 
  \node at (-1,0) [circle,fill,inner sep=1.5pt]{};
  
  % rami dell'iperbole
  % Ramo sinistro (x < 0)
  \draw[domain=-5:-0.2,smooth,very thick,blue] plot (\x,{(\x+1)/(\x)});
  % Ramo destro (x > 0)
  \draw[domain=0.25:5,smooth,very thick,blue] plot (\x,{(\x+1)/(\x)});
  
  % Etichette
  \node[above left] at (0,1) {1};
  \node[below] at (-1,0) {-1};
\end{tikzpicture}
\end{center}
```
