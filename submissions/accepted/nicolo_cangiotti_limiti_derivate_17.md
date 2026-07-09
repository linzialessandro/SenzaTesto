---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate"
difficulty: 3
tags:
  - "retta tangente"
  - "regole di derivazione"
  - "funzione composta"
---
# Problem Text
Determinare la retta tangente alla funzione:
$$ f(x) = \frac{e^{x^2+1}-1}{x-1} $$
nel punto di ascissa $$x=0$$.

# Solution
L'equazione della retta tangente a una funzione $$f(x)$$ in un suo punto di ascissa $$x_0$$ è data dalla formula:
$$ y - f(x_0) = f'(x_0)(x - x_0) $$
Abbiamo bisogno di due ingredienti fondamentali: l'ordinata del punto $$f(x_0)$$ e il coefficiente angolare della tangente $$f'(x_0)$$.

**1. Calcolo del punto di tangenza**
Sostituiamo $$x_0 = 0$$ nell'equazione della funzione:
$$ f(0) = \frac{e^{0^2+1}-1}{0-1} = \frac{e - 1}{-1} = 1 - e $$
Il punto di tangenza è quindi $$P(0, 1-e)$$.

**2. Calcolo della derivata prima**
Applichiamo la regola del quoziente unita a quella della funzione composta per l'esponenziale:
- Derivata del numeratore: $$D[e^{x^2+1} - 1] = e^{x^2+1} \cdot 2x$$ (dove $$2x$$ è la derivata dell'esponente)
- Derivata del denominatore: $$D[x - 1] = 1$$

La derivata complessiva è:
$$ f'(x) = \frac{(e^{x^2+1} \cdot 2x)(x - 1) - (e^{x^2+1} - 1) \cdot 1}{(x - 1)^2} $$

**3. Calcolo del coefficiente angolare**
Valutiamo la derivata appena trovata nel punto $$x_0 = 0$$:
$$ f'(0) = \frac{(e^{0+1} \cdot 0)(0 - 1) - (e^{0+1} - 1)}{(0 - 1)^2} $$
Poiché il primo termine al numeratore si moltiplica per zero, si annulla completamente:
$$ f'(0) = \frac{0 - (e - 1)}{(-1)^2} = \frac{1 - e}{1} = 1 - e $$
Il coefficiente angolare della retta tangente è $$m = 1 - e$$.

**4. Equazione della retta tangente**
Sostituiamo i valori di $$f(0)$$ e $$f'(0)$$ nell'equazione della tangente:
$$ y - (1 - e) = (1 - e)(x - 0) $$
Sviluppando:
$$ y = (1 - e)x + (1 - e) $$
L'equazione in forma esplicita è:
$$ y = (1 - e)x + 1 - e $$
