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
$$P \equiv (4;2)$$ e $$Q \equiv (1;-1)$$.

a) Determina, mostrando tutti i passaggi, l'equazione della retta passante per $$P$$ e $$Q$$.
b) Rappresenta sul piano cartesiano la retta che hai trovato. Quale elemento dell'equazione identifica l'intersezione con l'asse $$y$$? Come trovo invece l'intersezione con l'asse $$x$$?

# Solution
**a) Equazione della retta per due punti**
Per trovare l'equazione della retta, iniziamo con il calcolare il coefficiente angolare $$m$$:
$$m = \frac{y_Q - y_P}{x_Q - x_P} = \frac{-1 - 2}{1 - 4} = \frac{-3}{-3} = 1$$

Avendo trovato $$m = 1$$, usiamo la formula dell'equazione della retta passante per un punto (usiamo ad esempio il punto $$P$$):
$$y - y_P = m(x - x_P)$$
$$y - 2 = 1 \cdot (x - 4)$$
$$y - 2 = x - 4$$
Isoliamo la $$y$$ per ottenere la forma esplicita:
$$y = x - 4 + 2$$
$$y = x - 2$$

**b) Intersezioni con gli assi e rappresentazione**
L'equazione esplicita della retta è del tipo $$y = mx + q$$. 
L'elemento che identifica l'intersezione con l'asse $$y$$ (asse delle ordinate) è il termine noto **$$q$$** (ordinata all'origine). Dato che nella nostra equazione $$q = -2$$, la retta intersecherà l'asse verticale nel punto $$(0; -2)$$.

Per trovare analiticamente l'intersezione con l'asse $$x$$ (asse delle ascisse), occorre imporre la condizione $$y = 0$$ nell'equazione della retta:
$$0 = x - 2 \implies x = 2$$
L'intersezione con l'asse orizzontale è pertanto il punto $$(2; 0)$$.

Per rappresentare la retta sul piano cartesiano, basta collocare due qualsiasi dei punti noti (come le intersezioni appena trovate, o i punti iniziali $$P$$ e $$Q$$) e tracciare la linea retta che li unisce, prolungandola.
