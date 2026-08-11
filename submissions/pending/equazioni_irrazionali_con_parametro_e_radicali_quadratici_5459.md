---
year: 2
macro_area: "Numeri reali e Radicali"
topic: "Equazioni irrazionali con parametro e radicali quadratici"
difficulty: 5
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-11T15:17:25+00:00"
tags:
  - "radicali"
  - "equazioni irrazionali"
  - "parametro"
  - "discussione"
  - "valore assoluto"
---
# Problem Text
Discuti al variare del parametro reale $a$ l'equazione

$$
\sqrt{x+2\sqrt{x-1}}+\sqrt{x-2\sqrt{x-1}}=a
$$

e determina per quali valori di $a$ esistono soluzioni reali, precisando quali sono.

# Solution
Deve essere $x\ge 1$. Pongo $y=\sqrt{x-1}$, quindi $y\ge0$ e $x=y^2+1$. Allora

$$
x+2\sqrt{x-1}=y^2+1+2y=(y+1)^2,\qquad x-2\sqrt{x-1}=y^2+1-2y=(y-1)^2.
$$

L'equazione diventa

$$
(y+1)+|y-1|=a.
$$

Se $0\le y\le1$, il primo membro vale $y+1+1-y=2$; quindi per $a=2$ ogni $y\in[0,1]$ è accettabile, cioè $x=y^2+1\in[1,2]$. Se $y>1$, il primo membro vale $y+1+y-1=2y$; si ha $a=2y$, da cui $y=\frac a2$. La condizione $y>1$ richiede $a>2$, e si ottiene $x=1+\left(\frac a2\right)^2=1+\frac{a^2}{4}$.

Il primo membro è sempre $\ge2$, quindi non ci sono soluzioni per $a<2$. In conclusione: per $a<2$ nessuna soluzione; per $a=2$ tutte le $x\in[1,2]$; per $a>2$ unica soluzione $x=1+\frac{a^2}{4}$.
