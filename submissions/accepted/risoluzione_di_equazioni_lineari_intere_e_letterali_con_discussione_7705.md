---
year: 2
macro_area: "Equazioni di primo grado"
topic: "Risoluzione di equazioni lineari intere e letterali (con discussione)"
difficulty: 5
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:48:38+00:00"
tags:
  - "equazioni letterali"
  - "parametriche"
  - "razionali"
  - "disequazioni razionali"
  - "condizioni di esistenza"
---
# Problem Text
Per quali valori del parametro reale $k$ l'equazione 

$$
\frac{2x - k}{k - 1} = \frac{x + 3}{k + 2} - 1
$$

ammette una soluzione $x \ge 2$?

# Solution
L'equazione è definita per $k \neq 1$ e $k \neq -2$. Moltiplicando entrambi i membri per $(k-1)(k+2)$ (che è non nullo per le condizioni precedenti) si ottiene:
$$(2x - k)(k+2) = (x+3)(k-1) - (k-1)(k+2)$$
Sviluppando i prodotti:
$$2x(k+2) - k(k+2) = (k-1)x + (k-1)(1-k)$$
cioè
$$2x(k+2) - k^2 - 2k = (k-1)x - (k-1)^2$$
Portando i termini con $x$ a sinistra e gli altri a destra:
$$2x(k+2) - (k-1)x = k^2 + 2k - (k-1)^2$$
Semplificando il coefficiente di $x$:
$$x[2(k+2) - (k-1)] = k^2 + 2k - (k^2 - 2k + 1)$$
$$x(k+5) = 4k - 1$$
Distinguiamo i casi:
- Se $k \neq -5$, allora $x = \frac{4k - 1}{k+5}$ è l'unica soluzione.
- Se $k = -5$, l'equazione diventa $0 \cdot x = -21$, che è impossibile; quindi non c'è soluzione.
Dunque l'equazione ha soluzione per ogni $k \neq -5$ (con l'esclusione iniziale di $k = 1$ e $k = -2$, che però non influiscono sulla richiesta di $x \ge 2$ perché non appartengono all'intervallo che troveremo).
Ora imponiamo $x \ge 2$:
$$\frac{4k - 1}{k+5} \ge 2$$
Sottraiamo 2:
$$\frac{4k - 1}{k+5} - 2 \ge 0 \quad \Rightarrow \quad \frac{4k - 1 - 2(k+5)}{k+5} \ge 0 \quad \Rightarrow \quad \frac{2k - 11}{k+5} \ge 0$$
Studiamo il segno della frazione: il numeratore si annulla per $k = \frac{11}{2}$, il denominatore per $k = -5$. Analizziamo gli intervalli:
- Per $k < -5$: numeratore negativo, denominatore negativo → frazione positiva.
- Per $-5 < k < \frac{11}{2}$: numeratore negativo, denominatore positivo → frazione negativa.
- Per $k > \frac{11}{2}$: numeratore positivo, denominatore positivo → frazione positiva.
- Per $k = \frac{11}{2}$: frazione nulla, quindi soddisfa $\ge 0$.
Quindi la disuguaglianza è soddisfatta per $k < -5$ oppure $k \ge \frac{11}{2}$.
Poiché $k = -5$ è escluso (non dà soluzione) e $k = 1$ e $k = -2$ non rientrano in questi intervalli, la condizione finale è:
$$k \in (-\infty, -5) \cup \left[\frac{11}{2}, +\infty\right)$$
Verifichiamo che per $k = \frac{11}{2}$ si abbia $x = 2$, che è accettabile.
Quindi la risposta è: $k < -5$ oppure $k \ge \frac{11}{2}$.
