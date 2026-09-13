---
year: 2
macro_area: "Numeri reali e Radicali"
topic: "Equazioni a coefficienti irrazionali e razionalizzazione"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:24:09+00:00"
tags:
  - "radicali"
  - "razionalizzazione"
  - "equazioni irrazionali"
  - "condizioni di esistenza"
---
# Problem Text
Risolvi l'equazione $\frac{\sqrt{3}+x}{\sqrt{3}-x} = \frac{1}{\sqrt{3}-1}$, specificando le condizioni di esistenza.

# Solution
Condizioni di esistenza: il denominatore del primo membro deve essere diverso da zero, quindi $\sqrt{3}-x \neq 0 \Rightarrow x \neq \sqrt{3}$. Il denominatore del secondo membro $\sqrt{3}-1 \neq 0$ è sempre verificato.

Razionalizzo il secondo membro:

$$
\frac{1}{\sqrt{3}-1} = \frac{\sqrt{3}+1}{(\sqrt{3}-1)(\sqrt{3}+1)} = \frac{\sqrt{3}+1}{3-1} = \frac{\sqrt{3}+1}{2}.
$$

L'equazione diventa:

$$
\frac{\sqrt{3}+x}{\sqrt{3}-x} = \frac{\sqrt{3}+1}{2}.
$$

Moltiplico in croce (i denominatori sono non nulli per le CE):

$$
2(\sqrt{3}+x) = (\sqrt{3}-x)(\sqrt{3}+1).
$$

Svolgo il prodotto a destra:

$$
(\sqrt{3}-x)(\sqrt{3}+1) = 3 + \sqrt{3} - x\sqrt{3} - x.
$$

Quindi:

$$
2\sqrt{3} + 2x = 3 + \sqrt{3} - x\sqrt{3} - x.
$$

Porto i termini con $x$ a sinistra e gli altri a destra:

$$
2x + x\sqrt{3} + x = 3 + \sqrt{3} - 2\sqrt{3}.
$$

Semplifico:

$$
x(3 + \sqrt{3}) = 3 - \sqrt{3}.
$$

Divido per $3+\sqrt{3}$ (diverso da zero):

$$
x = \frac{3-\sqrt{3}}{3+\sqrt{3}}.
$$

Razionalizzo il risultato:

$$
x = \frac{(3-\sqrt{3})^2}{(3+\sqrt{3})(3-\sqrt{3})} = \frac{9 - 6\sqrt{3} + 3}{9-3} = \frac{12 - 6\sqrt{3}}{6} = 2 - \sqrt{3}.
$$

Verifica: la soluzione $x = 2-\sqrt{3}$ soddisfa la condizione $x \neq \sqrt{3}$ (infatti $2-\sqrt{3} \neq \sqrt{3}$), quindi è accettabile.

Conclusione: $x = 2 - \sqrt{3}$.
