---
year: 4
macro_area: "Geometria dello spazio (Stereometria)"
topic: "Piramidi e diedri"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: recycle_rejected
  generated_at: "2026-08-11T15:43:52+00:00"
  source: submissions/rejected salvage
tags:
  - "piramide"
  - "diedro"
  - "volume"
  - "superficie totale"
---
# Problem Text
In una piramide regolare quadrangolare (base quadrata), lo spigolo di base misura $2a$. L'angolo diedro formato da una faccia laterale con il piano di base è di $60^\circ$. Calcola il volume e l'area della superficie totale della piramide.

# Solution
Sia $ABCD$ la base e $V$ il vertice; l'altezza $VO$ cade nel centro $O$ della base. Sia $M$ il punto medio di un lato di base: $OM=a$ (apotema di base). L'angolo diedro tra faccia laterale e base è $\angle VMO=60^\circ$. Nel triangolo rettangolo $VOM$: $\tan 60^\circ=\dfrac{h}{a}$, quindi $h=a\sqrt{3}$.

Volume: $V=\dfrac{1}{3}(2a)^2\cdot a\sqrt{3}=\dfrac{4\sqrt{3}}{3}a^3$.

Apotema laterale: $VM=\sqrt{h^2+OM^2}=\sqrt{3a^2+a^2}=2a$. Area di una faccia laterale: $\dfrac{1}{2}\cdot 2a\cdot 2a=2a^2$; area laterale $8a^2$. Area di base: $(2a)^2=4a^2$. Superficie totale: $8a^2+4a^2=12a^2$.

Risposta: volume $\dfrac{4\sqrt{3}}{3}a^3$, superficie totale $12a^2$.
