---
year: 5
macro_area: "Teoremi del calcolo differenziale"
topic: "Teorema di De L'Hôpital con parametro"
difficulty: 4
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:54:21+00:00"
tags:
  - "limiti"
  - "De L'Hôpital"
  - "parametro"
  - "forma indeterminata"
---
# Problem Text
Determinare per quali valori del parametro reale $\alpha$ il limite $\lim_{x \to 0} \frac{\ln(1+\alpha x) - \sin x}{x - \tan x}$ esiste finito, e calcolarne il valore in tali casi.

# Solution
Poiché il denominatore tende a 0 per $x\to 0$, per avere un limite finito è necessario che il numeratore tenda a 0, ma ciò accade per ogni $\alpha$ in quanto entrambi i termini tendono a 0. Applichiamo quindi il teorema di De L'Hôpital (le funzioni sono derivabili e la derivata del denominatore non è identicamente nulla in un intorno di 0). Si ha:

$$
\lim_{x\to 0} \frac{\ln(1+\alpha x)-\sin x}{x-\tan x} = \lim_{x\to 0} \frac{\frac{\alpha}{1+\alpha x} - \cos x}{1-\sec^2 x}.
$$

Il limite del rapporto delle derivate, per $x\to 0$, dà $\frac{\alpha-1}{0}$, quindi se $\alpha \neq 1$ il limite è infinito (il segno dipende da $1-\sec^2 x \sim -x^2$). Dunque il limite può essere finito solo se $\alpha = 1$. Per $\alpha=1$ si ha ancora una forma $0/0$; applichiamo nuovamente il teorema:

$$
\lim_{x\to 0} \frac{\frac{1}{1+x} - \cos x}{-\tan^2 x} = \lim_{x\to 0} \frac{-\frac{1}{(1+x)^2} + \sin x}{-2\tan x \sec^2 x}.
$$

Sostituendo $x=0$, si ottiene ancora $0/0$; una terza applicazione dà:

$$
\lim_{x\to 0} \frac{\frac{2}{(1+x)^3} + \cos x}{-2\sec^2 x (1 + 3\tan^2 x)} = \frac{2+1}{-2} = -\frac{3}{2}.
$$

Pertanto il limite esiste finito solo per $\alpha = 1$ e vale $-\frac{3}{2}$.
