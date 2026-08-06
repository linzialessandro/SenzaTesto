---
year: 4
macro_area: "Numeri Complessi"
topic: "Forma trigonometrica e teorema di De Moivre"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:58:55+00:00"
tags:
  - "numeri complessi"
  - "forma trigonometrica"
  - "De Moivre"
---
# Problem Text
Dato il numero complesso $z = -1 + i\sqrt{3}$, scrivilo in forma trigonometrica e calcola $z^4$.

# Solution
Calcoliamo modulo e argomento di $z$. Si ha $|z| = \sqrt{(-1)^2 + (\sqrt{3})^2} = \sqrt{4} = 2$. L'argomento $\theta$ soddisfa $\cos\theta = -1/2$ e $\sin\theta = \sqrt{3}/2$, quindi $\theta = 2\pi/3$. Pertanto la forma trigonometrica è:

$$
z = 2\left(\cos \frac{2\pi}{3} + i\sin \frac{2\pi}{3}\right)
$$

Applicando il teorema di De Moivre:

$$
z^4 = 2^4 \left(\cos \frac{8\pi}{3} + i\sin \frac{8\pi}{3}\right) = 16\left(\cos \frac{2\pi}{3} + i\sin \frac{2\pi}{3}\right) = 16\left(-\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = -8 + 8i\sqrt{3}
$$

Quindi $z^4 = -8 + 8i\sqrt{3}$.
