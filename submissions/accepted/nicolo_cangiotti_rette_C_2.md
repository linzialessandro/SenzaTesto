---
year: 2
macro_area: "Geometria Analitica"
topic: "Rette"
difficulty: 2
tags:
  - "equazione della retta"
  - "retta per due punti"
  - "intersezioni assi"
---
# Problem Text
Siano dati i seguenti punti:
$$P \equiv (-6;4)$$ e $$Q \equiv (-3;1)$$.

a) Determina, mostrando tutti i passaggi, l'equazione della retta passante per $$P$$ e $$Q$$.
b) Rappresenta sul piano cartesiano la retta che hai trovato. Quale elemento dell'equazione identifica l'intersezione con l'asse $$y$$? Come trovo invece l'intersezione con l'asse $$x$$?

# Solution
**a) Equazione della retta per due punti**
La prima cosa da fare è calcolare la pendenza (coefficiente angolare $$m$$) della retta:
$$m = \frac{y_Q - y_P}{x_Q - x_P} = \frac{1 - 4}{-3 - (-6)} = \frac{-3}{-3 + 6} = \frac{-3}{3} = -1$$

Ottenuto il valore di $$m = -1$$, applichiamo l'equazione del fascio per il punto $$P$$ (o per il punto $$Q$$, il risultato non cambierebbe):
$$y - y_P = m(x - x_P)$$
$$y - 4 = -1 \cdot (x - (-6))$$
$$y - 4 = -1 \cdot (x + 6)$$
$$y - 4 = -x - 6$$
Portando il $$-4$$ al secondo membro troviamo l'equazione in forma esplicita:
$$y = -x - 6 + 4$$
$$y = -x - 2$$

**b) Intersezioni con gli assi e rappresentazione**
Esaminando l'equazione esplicita $$y = mx + q$$, l'elemento che identifica l'intersezione con l'asse delle ordinate (asse $$y$$) è il termine noto **$$q$$**, detto ordinata all'origine. Avendo $$q = -2$$, la retta taglia l'asse $$y$$ nel punto di coordinate $$(0; -2)$$.

L'intersezione con l'asse delle ascisse (asse $$x$$), invece, si ricava ponendo $$y = 0$$ nell'equazione e risolvendola rispetto alla $$x$$:
$$0 = -x - 2 \implies x = -2$$
Il punto di intersezione con l'asse orizzontale è pertanto $$(-2; 0)$$.

Per tracciare graficamente la retta sul piano cartesiano, basta inserire i punti di intersezione trovati (oppure i punti originari $$P$$ e $$Q$$) e farvi passare una retta passante che li congiunga.
