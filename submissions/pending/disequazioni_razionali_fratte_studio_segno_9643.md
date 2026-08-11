---
year: 4
macro_area: "Disequazioni di grado superiore e Fratte"
topic: "Disequazioni razionali fratte (studio del segno)"
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
  - "disequazioni fratte"
  - "segno del quoziente"
  - "condizioni di esistenza"
---
# Problem Text
Risolvi nell'insieme dei numeri reali la disequazione fratta $\dfrac{2x-6}{x^2-1}\le \dfrac{x}{x+1}-\dfrac{3}{x-1}$.

# Solution
Condizioni di esistenza: $x\neq\pm 1$. Portiamo tutto a primo membro:

$$
\dfrac{2x-6}{x^2-1}-\dfrac{x}{x+1}+\dfrac{3}{x-1}\le 0.
$$

Con denominatore comune $(x-1)(x+1)$:

$$
\dfrac{(2x-6)-x(x-1)+3(x+1)}{(x-1)(x+1)}\le 0 \Rightarrow \dfrac{-x^2+6x-3}{x^2-1}\le 0 \Rightarrow \dfrac{x^2-6x+3}{x^2-1}\ge 0.
$$

Zeri del numeratore: $x=3\pm\sqrt{6}$; poli in $x=\pm 1$.
Il numeratore (concavità verso l'alto) è non negativo fuori dalle radici; il denominatore è positivo fuori da $[-1,1]$.
Studio del segno a tratti:
- su $(-\infty,-1)$: quoziente positivo;
- su $(-1,3-\sqrt{6})$: negativo;
- su $(3-\sqrt{6},1)$: positivo;
- su $(1,3+\sqrt{6})$: negativo;
- su $(3+\sqrt{6},+\infty)$: positivo.

Si includono gli zeri del numeratore e si escludono i poli. Soluzione:
$x\in(-\infty,-1)\cup[3-\sqrt{6},1)\cup[3+\sqrt{6},+\infty)$.
