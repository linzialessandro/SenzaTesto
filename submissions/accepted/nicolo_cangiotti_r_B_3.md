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
$$r_1: 9x + 3y - 6 = 0$$
$$r_2: y = 2x - 3$$

a) Rappresentale nel piano cartesiano.
b) In che posizione si trovano reciprocamente le due rette? Verifica quanto hai determinato risolvendo il sistema:
$$
\begin{cases} 9x + 3y - 6 = 0 \\ y = 2x - 3 \end{cases}
$$

# Solution
**a) Rappresentazione sul piano cartesiano**
Per disegnare in modo comodo la retta $$r_1$$, convertiamola prima in forma esplicita esplicitando la $$y$$:
$$9x + 3y - 6 = 0 \implies 3y = -9x + 6 \implies y = -3x + 2$$
Troviamo due punti per tracciarla:
- L'intercetta è $$2$$, quindi passa per $$(0; 2)$$.
- Ponendo $$x = 1$$, troviamo $$y = -3(1) + 2 = -1$$. Passa per $$(1; -1)$$.

La retta $$r_2$$ è fornita già in forma esplicita: $$y = 2x - 3$$.
Troviamo due punti:
- L'intercetta è $$-3$$, quindi passa per $$(0; -3)$$.
- Ponendo $$x = 2$$, troviamo $$y = 2(2) - 3 = 1$$. Passa per $$(2; 1)$$.
Individuati i punti sul piano cartesiano, si tracciano le due rette passanti.

**b) Posizione reciproca e verifica tramite sistema**
Confrontiamo i coefficienti angolari delle due rette in forma esplicita:
- $$m_1 = -3$$
- $$m_2 = 2$$
Essendo diversi ($$m_1 \neq m_2$$) e non antireciproci, le due rette non sono né parallele né perpendicolari. Risultano perciò essere semplicemente **incidenti** (si intersecano in un solo punto).

Per convalidarlo e trovare il punto esatto di incrocio, risolviamo il sistema utilizzando il metodo di sostituzione. Sostituiamo $$y = 2x - 3$$ (della seconda) nella prima equazione:
$$
\begin{cases} 9x + 3(2x - 3) - 6 = 0 \\ y = 2x - 3 \end{cases}
$$

Svolgiamo i calcoli nella prima equazione:
$$9x + 6x - 9 - 6 = 0$$
$$15x - 15 = 0$$
$$15x = 15 \implies x = 1$$

Andiamo a sostituire questo valore nella seconda equazione:
$$y = 2(1) - 3 \implies y = -1$$

La soluzione del sistema è la coppia $$(1; -1)$$. Questo punto unico di intersezione conferma la nostra analisi: le rette sono incidenti e si incontrano nel punto $$(1; -1)$$.
