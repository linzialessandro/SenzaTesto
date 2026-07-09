---
year: 2
macro_area: "Geometria Analitica"
topic: "Rette"
difficulty: 2
tags:
  - "posizioni reciproche"
  - "sistema lineare"
  - "intersezione rette"
---
# Problem Text
Siano date le seguenti due rette:
$$r_1: 5x + 5y - 5 = 0$$
$$r_2: y = 3x - 3$$

a) Rappresentale nel piano cartesiano.
b) In che posizione si trovano reciprocamente le due rette? Verifica quanto hai determinato risolvendo il sistema:
$$
\begin{cases} 5x + 5y - 5 = 0 \\ y = 3x - 3 \end{cases}
$$

# Solution
**a) Rappresentazione sul piano cartesiano**
Per disegnare agevolmente la retta $$r_1$$, trasformiamola in forma esplicita:
$$5x + 5y - 5 = 0 \implies 5y = -5x + 5 \implies y = -x + 1$$
Cerchiamo due punti in cui farla passare:
- Con $$x=0$$, troviamo l'intercetta $$y=1$$. Punto $$(0; 1)$$.
- Ponendo $$y=0$$, ricaviamo $$x=1$$. Punto $$(1; 0)$$.

La retta $$r_2$$ ci è già data in forma esplicita: $$y = 3x - 3$$.
- L'intercetta è $$(0; -3)$$.
- Ponendo $$y=0$$, otteniamo $$0 = 3x - 3 \implies 3x = 3 \implies x = 1$$. Punto $$(1; 0)$$.
Individuati questi punti sul piano, tracciamo con il righello le due rette. Notiamo già graficamente che si incrociano proprio nel punto $$(1; 0)$$.

**b) Posizione reciproca e sistema**
Confrontando le equazioni esplicite delle due rette, vediamo i coefficienti angolari:
- $$m_1 = -1$$
- $$m_2 = 3$$
Siccome $$m_1 \neq m_2$$ e non sono nemmeno antireciproci, ne deduciamo che le rette sono **incidenti** ma non perpendicolari.

Per verificare matematicamente il loro punto di intersezione, risolviamo il sistema per sostituzione:
$$
\begin{cases} 5x + 5(3x - 3) - 5 = 0 \\ y = 3x - 3 \end{cases}
$$

Sviluppiamo la prima equazione:
$$5x + 15x - 15 - 5 = 0$$
$$20x - 20 = 0$$
$$20x = 20 \implies x = 1$$

Sostituiamo $$x = 1$$ nella seconda equazione:
$$y = 3(1) - 3 \implies y = 3 - 3 \implies y = 0$$

La soluzione del sistema è la coppia $$(1; 0)$$. Come previsto, le due rette sono incidenti e si intersecano esattamente nel punto $$(1; 0)$$.
