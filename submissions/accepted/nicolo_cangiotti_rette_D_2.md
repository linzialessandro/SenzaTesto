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
$$P \equiv (4;4)$$ e $$Q \equiv (2;-2)$$.

a) Determina, mostrando tutti i passaggi, l'equazione della retta passante per $$P$$ e $$Q$$.
b) Rappresenta sul piano cartesiano la retta che hai trovato. Quale elemento dell'equazione identifica l'intersezione con l'asse $$y$$? Come trovo invece l'intersezione con l'asse $$x$$?

# Solution
**a) Equazione della retta per due punti**
Si comincia determinando il coefficiente angolare $$m$$ della retta passante per i punti dati:
$$m = \frac{y_Q - y_P}{x_Q - x_P} = \frac{-2 - 4}{2 - 4} = \frac{-6}{-2} = 3$$

Ottenuto il valore di $$m = 3$$, sfruttiamo l'equazione del fascio passante per il punto $$P$$ (oppure per $$Q$$) per ricavare la retta:
$$y - y_P = m(x - x_P)$$
$$y - 4 = 3 \cdot (x - 4)$$
$$y - 4 = 3x - 12$$
Portando il $$-4$$ dal primo al secondo membro otteniamo l'equazione in forma esplicita:
$$y = 3x - 12 + 4$$
$$y = 3x - 8$$

**b) Intersezioni con gli assi e rappresentazione**
Considerando l'equazione esplicita $$y = mx + q$$, l'elemento che identifica in automatico l'intersezione con l'asse $$y$$ (asse verticale delle ordinate) è il termine noto **$$q$$**, cioè l'ordinata all'origine. Avendo $$q = -8$$, sappiamo che la retta tocca l'asse $$y$$ nel punto $$(0; -8)$$.

Per trovare invece l'intersezione con l'asse $$x$$ (asse orizzontale delle ascisse), dobbiamo inserire $$y = 0$$ nell'equazione e risolverla in $$x$$:
$$0 = 3x - 8 \implies 3x = 8 \implies x = \frac{8}{3}$$
La retta incrocia perciò l'asse $$x$$ nel punto di coordinate $$(\frac{8}{3}; 0)$$.

Per tracciare graficamente la retta sul piano cartesiano è sufficiente individuare sul grafico i due punti iniziali $$P$$ e $$Q$$ (oppure le due intersezioni con gli assi cartesiani) e prolungare il segmento che li unisce da entrambe le parti.
