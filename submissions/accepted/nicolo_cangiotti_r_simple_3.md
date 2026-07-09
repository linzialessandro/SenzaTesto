---
year: 2
macro_area: "Geometria Analitica"
topic: "Rette"
difficulty: 2
tags:
  - "posizioni reciproche"
  - "rette perpendicolari"
---
# Problem Text
Siano date le seguenti due rette:
$$r_1: 4x + 4y + 8 = 0$$
$$r_2: y = x + 2$$

Rappresentale nel piano cartesiano. In che posizione si trovano reciprocamente?

# Solution
**Rappresentazione sul piano cartesiano**
Iniziamo convertendo la retta $$r_1$$ in forma esplicita per semplificarne la rappresentazione:
$$4x + 4y + 8 = 0 \implies 4y = -4x - 8 \implies y = -x - 2$$
Per disegnarla, calcoliamo due punti. Scegliamo $$x = 0$$ e troviamo l'intercetta $$y = -2$$ (punto $$(0; -2)$$). Scegliamo $$y = 0$$ e troviamo $$x = -2$$ (punto $$(-2; 0)$$).

La retta $$r_2$$ è già data in forma esplicita: $$y = x + 2$$.
Per disegnarla: poniamo $$x = 0$$ e ricaviamo $$y = 2$$ (punto $$(0; 2)$$). Ponendo $$y = 0$$, ricaviamo $$x = -2$$ (punto $$(-2; 0)$$).
Possiamo quindi segnare questi punti sul piano e tracciare le rette. Si nota subito graficamente che le rette formano quattro angoli retti al loro incrocio, che tra l'altro avviene proprio nel punto $$(-2; 0)$$.

**Posizione reciproca**
Confrontando le due equazioni esplicite appena trovate:
$$r_1: y = -x - 2$$ (coefficiente angolare $$m_1 = -1$$)
$$r_2: y = x + 2$$ (coefficiente angolare $$m_2 = 1$$)

Le due rette hanno coefficienti angolari diversi ($$m_1 \neq m_2$$), perciò sono sicuramente **incidenti**. Ma possiamo notare una particolarità aggiuntiva: il prodotto dei due coefficienti angolari è:
$$m_1 \cdot m_2 = (-1) \cdot (1) = -1$$
Questo significa che i due coefficienti sono uno l'antireciproco dell'altro ($$m_1 = -\frac{1}{m_2}$$). Questa è la condizione necessaria e sufficiente affinché due rette siano perpendicolari.
In conclusione, le due rette si trovano in posizione reciproca **perpendicolare**.
