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
$$r_1: 8x + 4y + 4 = 0$$
$$r_2: y = 2x + 3$$

a) Rappresentale nel piano cartesiano.
b) In che posizione si trovano reciprocamente le due rette? Verifica quanto hai determinato risolvendo il sistema (formato dalle equazioni delle due rette):
$$
\begin{cases} 8x + 4y + 4 = 0 \\ y = 2x + 3 \end{cases}
$$
*(Nota: nel testo originale il sistema riportava $$8x+4y+2=0$$ per un probabile errore di battitura; qui il termine noto è stato allineato con la retta $$r_1$$).*

# Solution
**a) Rappresentazione sul piano cartesiano**
Per disegnare la retta $$r_1$$, conviene portarla prima in forma esplicita:
$$8x + 4y + 4 = 0 \implies 4y = -8x - 4 \implies y = -2x - 1$$
- Passa per l'intercetta $$(0; -1)$$.
- Se $$x = -1$$, $$y = -2(-1) - 1 = 1$$. Passa per $$(-1; 1)$$.

La retta $$r_2$$ è già in forma esplicita: $$y = 2x + 3$$.
- Passa per l'intercetta $$(0; 3)$$.
- Se $$x = -1$$, $$y = 2(-1) + 3 = 1$$. Passa per $$(-1; 1)$$.
Congiungendo questi punti sul piano, si tracciano agevolmente entrambe le rette.

**b) Posizione reciproca e verifica tramite sistema**
Confrontando i coefficienti angolari delle due rette in forma esplicita:
- $$m_1 = -2$$
- $$m_2 = 2$$
I coefficienti angolari sono diversi ($$m_1 \neq m_2$$), dunque le rette non sono parallele. Non essendo nemmeno antireciproci ($$m_1 \cdot m_2 \neq -1$$), non sono perpendicolari. Di conseguenza, le due rette sono **incidenti**.

Lo verifichiamo matematicamente risolvendo il sistema. Usiamo il metodo di sostituzione, sostituendo l'espressione di $$y$$ della seconda equazione nella prima:
$$
\begin{cases} 8x + 4(2x + 3) + 4 = 0 \\ y = 2x + 3 \end{cases}
$$

Risolviamo la prima equazione:
$$8x + 8x + 12 + 4 = 0$$
$$16x + 16 = 0$$
$$16x = -16 \implies x = -1$$

Sostituiamo il valore di $$x$$ nella seconda equazione:
$$y = 2(-1) + 3 \implies y = -2 + 3 \implies y = 1$$

La soluzione del sistema è un punto unico di coordinate $$(-1; 1)$$. Questo conferma che le due rette sono incidenti e si intersecano esattamente nel punto trovato.
