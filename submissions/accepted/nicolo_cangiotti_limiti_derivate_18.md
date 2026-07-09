---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate"
difficulty: 2
tags:
  - "retta tangente"
  - "regole di derivazione"
  - "derivata del prodotto"
---
# Problem Text
Determinare la retta tangente alla funzione:
$$ f(x) = \cos(x)\cdot(x-\pi) $$
nel punto di ascissa $$x=\pi$$.

# Solution
Per determinare l'equazione della retta tangente $$y - f(x_0) = f'(x_0)(x - x_0)$$, occorre calcolare il punto di tangenza e il valore della derivata in $$x_0 = \pi$$.

**1. Calcolo del punto di tangenza**
Valutiamo la funzione in $$x = \pi$$:
$$ f(\pi) = \cos(\pi) \cdot (\pi - \pi) $$
Sapendo che $$\cos(\pi) = -1$$ e che $$\pi - \pi = 0$$, si ottiene:
$$ f(\pi) = -1 \cdot 0 = 0 $$
Il punto di tangenza giace quindi sull'asse delle ascisse: $$P(\pi, 0)$$.

**2. Calcolo della derivata prima**
Applichiamo la regola del prodotto ($$D[f \cdot g] = f'g + fg'$$):
- Il primo fattore è $$\cos(x)$$, la cui derivata è $$-\sin(x)$$
- Il secondo fattore è $$(x - \pi)$$, la cui derivata è $$1$$

Sostituiamo nella regola:
$$ f'(x) = (-\sin(x))(x - \pi) + \cos(x)(1) = -\sin(x)(x - \pi) + \cos(x) $$

**3. Calcolo del coefficiente angolare**
Valutiamo la derivata in $$x_0 = \pi$$:
$$ f'(\pi) = -\sin(\pi)(\pi - \pi) + \cos(\pi) $$
Poiché $$\sin(\pi) = 0$$ e $$(\pi - \pi) = 0$$, il primo addendo si annulla completamente:
$$ f'(\pi) = 0 \cdot 0 + (-1) = -1 $$
Il coefficiente angolare della retta tangente è $$m = -1$$.

**4. Equazione della retta tangente**
Sostituiamo i dati nell'equazione generale del fascio di rette passante per $$P$$:
$$ y - 0 = -1 \cdot (x - \pi) $$
$$ y = -x + \pi $$
