---
year: 5
macro_area: "Topologia e Funzioni"
topic: "Dominio, intersezioni con gli assi, parit\u00e0"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:50:04+00:00"
tags:
  - "dominio"
  - "parit\u00e0"
  - "intersezioni"
  - "funzioni razionali"
---
# Problem Text
Data la funzione $f(x) = \frac{x^3 - x}{x^2 + 1}$, determina il dominio, le intersezioni con gli assi cartesiani e stabilisci se la funzione è pari, dispari o né pari né dispari.

# Solution
**Dominio:** Il denominatore è $x^2+1$, che è sempre positivo per ogni $x \in \mathbb{R}$ (poiché $x^2 \ge 0$). Quindi il dominio è $\mathbb{R}$.

**Intersezioni con gli assi:**
- *Asse $x$*: poniamo $f(x)=0$, cioè $\frac{x^3-x}{x^2+1}=0$. Poiché il denominatore non è mai nullo, basta annullare il numeratore: $x^3 - x = 0 \Rightarrow x(x^2-1)=0 \Rightarrow x(x-1)(x+1)=0$. Quindi $x=-1$, $x=0$, $x=1$. I punti sono $(-1,0)$, $(0,0)$, $(1,0)$.
- *Asse $y$*: poniamo $x=0$, otteniamo $f(0)=\frac{0}{1}=0$, quindi il punto $(0,0)$ (già trovato).

**Parità:** Calcoliamo $f(-x)$:

$$
f(-x)=\frac{(-x)^3-(-x)}{(-x)^2+1} = \frac{-x^3+x}{x^2+1} = -\frac{x^3-x}{x^2+1} = -f(x).
$$

Poiché $f(-x)=-f(x)$ per ogni $x \in \mathbb{R}$, la funzione è **dispari**. Non è periodica perché è una funzione razionale non costante.
