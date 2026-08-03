---
year: 4
macro_area: "Goniometria"
topic: "Formule di addizione e duplicazione"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:51:11+00:00"
tags:
  - "goniometria"
  - "formule di addizione"
  - "formule di duplicazione"
  - "identit\u00e0"
---
# Problem Text
Verifica l'identità 
$$\frac{\sin(2x)}{1+\cos(2x)} = \tan x$$
per ogni $x$ per cui entrambi i membri sono definiti.

# Solution
Consideriamo il primo membro e applichiamo le formule di duplicazione: 
$\sin(2x) = 2\sin x \cos x$ e $1+\cos(2x) = 1 + (\cos^2 x - \sin^2 x) = 1 + \cos^2 x - \sin^2 x$. Poiché $\cos^2 x + \sin^2 x = 1$, abbiamo $1 - \sin^2 x = \cos^2 x$, quindi $1+\cos(2x) = \cos^2 x - \sin^2 x + 1 = 2\cos^2 x$. Sostituendo, otteniamo:

$$
\frac{\sin(2x)}{1+\cos(2x)} = \frac{2\sin x \cos x}{2\cos^2 x} = \frac{\sin x}{\cos x} = \tan x.
$$

Pertanto l'identità è verificata per ogni $x$ tale che $\cos(2x) \neq -1$ (cioè $1+\cos(2x) \neq 0$) e $\cos x \neq 0$ per $\tan x$ (ma se $\cos x = 0$, anche $\sin x \cos x = 0$ e la frazione originale è $0/1$? Attenzione: se $\cos x = 0$, allora $1+\cos(2x) = 1 + (2\cos^2 x -1) = 2\cos^2 x = 0$, quindi il denominatore è zero, quindi tali $x$ sono esclusi. Quindi l'identità vale per tutti gli $x$ con $\cos x \neq 0$, cioè $x \neq \frac{\pi}{2} + k\pi$.
