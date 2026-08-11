---
year: 4
macro_area: "Valore assoluto"
topic: "Equazioni e disequazioni con valore assoluto"
difficulty: 4
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-11T15:22:05+00:00"
tags:
  - "valore assoluto"
  - "equazioni"
  - "parametro"
  - "studio dei casi"
---
# Problem Text
Determina l'insieme dei valori reali del parametro $k$ per cui l'equazione $|x^2 - 3x| = kx$ ha esattamente tre soluzioni reali distinte.

# Solution
Risolviamo l'equazione $|x^2 - 3x| = kx$. Osserviamo che $x=0$ è sempre soluzione, perché entrambi i membri si annullano.

Per $x \neq 0$, studiamo il segno di $x^2-3x = x(x-3)$. Dividiamo l'asse reale in tre intervalli: $x<0$, $0<x<3$, $x>3$ (i punti $x=0$ e $x=3$ verranno considerati separatamente).

Caso 1: $x<0$ oppure $x>3$. In questo caso $x^2-3x \ge 0$, quindi l'equazione diventa $x^2 - 3x = kx$, cioè $x^2 - (3+k)x = 0$, da cui $x=0$ (già contato) o $x = 3+k$. La soluzione $x=3+k$ è accettabile solo se $3+k<0$ oppure $3+k>3$, cioè $k<-3$ o $k>0$.

Caso 2: $0<x<3$. In questo intervallo $x^2-3x < 0$, quindi $|x^2-3x| = -x^2+3x$. L'equazione diventa $-x^2+3x = kx$, cioè $-x^2 + (3-k)x = 0$, da cui $x=0$ (non in questo intervallo) o $x = 3-k$. Questa soluzione è accettabile se $0 < 3-k < 3$, cioè $0 < k < 3$.

Caso 3: $x=3$. Sostituendo si ottiene $0 = 3k$, quindi $k=0$. In tal caso l'equazione ha soluzione $x=3$, ma per $k=0$ le soluzioni sono $x=0$ e $x=3$ (due in totale), quindi escludiamo $k=0$.

Affinché l'equazione abbia esattamente tre soluzioni distinte, dobbiamo avere contemporaneamente le due soluzioni $x=3+k$ e $x=3-k$, oltre a $x=0$, e queste devono essere distinte e non coincidere con $0$. Le condizioni sono quindi:
- $3+k$ accettabile: $k<-3$ o $k>0$;
- $3-k$ accettabile: $0<k<3$.

L'intersezione delle due condizioni è $0<k<3$. Inoltre, per $0<k<3$, si ha $3+k>3$ e $0<3-k<3$, quindi $3+k \neq 3-k$ (perché $k \neq 0$) e nessuna è nulla. Le tre soluzioni sono $0$, $3+k$, $3-k$, tutte distinte.

Per $k< -3$ si ha solo $x=3+k$ (oltre a $0$), quindi due soluzioni; per $k\ge 3$ o $k\le -3$ non si verificano le condizioni. Infine, per $k\in(-3,0)$ non si hanno soluzioni accettabili oltre a $x=0$.

Pertanto l'equazione ha esattamente tre soluzioni reali distinte per $0<k<3$.
