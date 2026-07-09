---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali"
difficulty: 1
tags:
  - "calcolo delle aree"
  - "integrale definito"
  - "parabola"
---
# Problem Text
Calcolare l'area compresa tra la funzione $$f(x)=x^2$$, l'asse delle $$x$$ e le rette verticali $$x=-1$$ e $$x=0$$.

# Solution
La funzione in esame, $$f(x) = x^2$$, rappresenta una parabola con vertice nell'origine rivolta verso l'alto ed è positiva (o nulla) su tutto l'asse reale.
L'area compresa tra la funzione, l'asse delle ascisse (equazione $$y=0$$) e le rette verticali indicate si calcola semplicemente impostando un integrale definito, in cui gli estremi di integrazione sono $$a=-1$$ e $$b=0$$:
$$ A = \int_{-1}^{0} x^2 \, dx $$

```latex
\begin{center}
\begin{tikzpicture}[scale=2]
    % Assi
    \draw[->, thick] (-1.5,0) -- (0.5,0) node[right] {$x$};
    \draw[->, thick] (0,-0.2) -- (0,1.5) node[above] {$y$};
    
    % Area
    \fill[blue!20] (-1,0) -- plot[domain=-1:0, samples=100] (\x, {\x*\x}) -- (0,0) -- cycle;
    
    % Funzione
    \draw[thick, blue, domain=-1.2:0.5, samples=100] plot (\x, {\x*\x}) node[right] {$f(x)=x^2$};
    
    % Rette verticali e asse
    \draw[dashed, red, thick] (-1,0) -- (-1,1) node[midway, left] {$x=-1$};
    
    % Ticks
    \draw (-1, 0.05) -- (-1, -0.05) node[below] {$-1$};
    \node[below left] at (0,0) {$0$};
\end{tikzpicture}
\end{center}
```

Troviamo la primitiva di $$x^2$$, che secondo la regola delle potenze è $$\frac{x^3}{3}$$.
Applichiamo quindi il Teorema fondamentale del calcolo integrale per valutarla nei due estremi:
$$ A = \left[ \frac{x^3}{3} \right]_{-1}^{0} $$

Sostituendo l'estremo superiore ($$0$$):
$$ \frac{0^3}{3} = 0 $$
Sostituendo l'estremo inferiore ($$-1$$):
$$ \frac{(-1)^3}{3} = -\frac{1}{3} $$

L'area risulta perciò:
$$ A = 0 - \left(-\frac{1}{3}\right) = \frac{1}{3} $$
L'area è (correttamente) un valore strettamente positivo.
