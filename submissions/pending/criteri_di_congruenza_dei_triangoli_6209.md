---
year: 1
macro_area: "Geometria piana (Euclidea)"
topic: "Criteri di congruenza dei triangoli"
difficulty: 5
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:25:01+00:00"
tags:
  - "triangoli"
  - "criteri di congruenza"
  - "controesempio"
  - "SSA"
---
# Problem Text
Mostra con un controesempio che il criterio di congruenza dei triangoli 'due lati e l'angolo opposto a uno di essi' (SSA) non è valido. In altre parole, costruisci due triangoli non congruenti che abbiano due lati e l'angolo opposto a uno di essi rispettivamente congruenti.

# Solution
Consideriamo i seguenti dati: un lato $a = BC = 5$, un lato $b = AC = 7$ e l'angolo $A = 30^\circ$ opposto al lato $a$. Costruiamo l'angolo $A$ di $30^\circ$ e sul suo lato sinistro segniamo il punto $C$ con $AC = 7$. Ora, con centro in $C$ e raggio $5$, tracciamo una circonferenza. Questa intersecherà il lato destro dell'angolo in due punti distinti $B_1$ e $B_2$, poiché la distanza da $C$ al lato è $AC \sin A = 7 \cdot \frac{1}{2} = 3.5 < 5$. I triangoli $AB_1C$ e $AB_2C$ hanno entrambi $AC = 7$, $B_1C = B_2C = 5$ e l'angolo $\widehat{A} = 30^\circ$ opposto al lato $BC$. Tuttavia, $AB_1 \neq AB_2$ (infatti $B_1$ e $B_2$ sono simmetrici rispetto alla perpendicolare da $C$ al lato, quindi $AB_1 = AC \cos A + \sqrt{BC^2 - (AC \sin A)^2}$ e $AB_2 = AC \cos A - \sqrt{BC^2 - (AC \sin A)^2}$, che sono diversi). Quindi i due triangoli non sono congruenti. Questo dimostra che il criterio SSA non è valido.
