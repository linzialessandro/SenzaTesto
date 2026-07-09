---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali"
difficulty: 2
tags:
  - "calcolo delle aree"
  - "integrale definito"
  - "funzione logaritmica"
  - "integrazione per parti"
---
# Problem Text
Calcolare l'area compresa tra la funzione $$f(x)=\ln(x)$$, l'asse delle $$x$$ e le rette verticali $$x=1$$ e $$x=e$$.

# Solution
L'area richiesta è racchiusa dalla curva del logaritmo naturale, dall'asse $$x$$ e da due limitazioni verticali. Verifichiamo il segno della funzione nell'intervallo di integrazione $$[1, e]$$: siccome $$\ln(x) \ge 0$$ per $$x \ge 1$$, l'area giace interamente al di sopra dell'asse $$x$$. L'area corrisponde perciò al semplice integrale definito:
$$ A = \int_{1}^{e} \ln(x) \, dx $$

```latex
\begin{center}
\begin{tikzpicture}[scale=1.5]
    % Assi
    \draw[->, thick] (-0.2,0) -- (3.2,0) node[right] {$x$};
    \draw[->, thick] (0,-1) -- (0,1.5) node[above] {$y$};
    
    % Costanti
    \def\e{2.71828}
    
    % Area
    \fill[blue!20] (1,0) -- plot[domain=1:\e, samples=100] (\x, {ln(\x)}) -- (\e,0) -- cycle;
    
    % Funzione
    \draw[thick, blue, domain=0.4:3, samples=100] plot (\x, {ln(\x)}) node[right] {$f(x)=\ln(x)$};
    
    % Rette verticali
    \draw[dashed, red, thick] (\e,0) -- (\e,1) node[midway, right] {$x=e$};
    \draw[dashed, red, thick] (1,0) -- (1,0.5) node[midway, left] {$x=1$};
    
    % Ticks
    \draw (1, 0.05) -- (1, -0.05) node[below] {$1$};
    \draw (\e, 0.05) -- (\e, -0.05) node[below] {$e$};
\end{tikzpicture}
\end{center}
```

Calcoliamo per prima cosa l'integrale indefinito $$\int \ln(x) dx$$ utilizzando il metodo per parti, considerando $$\ln(x)$$ come prodotto $$\ln(x) \cdot 1$$:
- $$f(x) = \ln(x) \implies f'(x) = \frac{1}{x}$$
- $$g'(x) = 1 \implies g(x) = x$$

Applichiamo la formula dell'integrazione per parti:
$$ \int \ln(x) \cdot 1 \, dx = \ln(x) \cdot x - \int \frac{1}{x} \cdot x \, dx = x\ln(x) - \int 1 \, dx = x\ln(x) - x + c $$

Passando al calcolo dell'area, valutiamo la primitiva tra $$1$$ e $$e$$:
$$ A = \left[ x\ln(x) - x \right]_{1}^{e} $$
Valutiamo nell'estremo superiore ($$e$$):
$$ e\ln(e) - e = e(1) - e = e - e = 0 $$
Valutiamo nell'estremo inferiore ($$1$$):
$$ 1\ln(1) - 1 = 1(0) - 1 = -1 $$

L'area finale si calcola sottraendo i due valori trovati:
$$ A = 0 - (-1) = 1 $$
L'area racchiusa misura esattamente 1 unità quadra.
