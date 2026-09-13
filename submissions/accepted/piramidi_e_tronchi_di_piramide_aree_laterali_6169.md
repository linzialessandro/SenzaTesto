---
year: 4
macro_area: "Stereometria"
topic: "Piramidi e tronchi di piramide: aree laterali"
difficulty: 4
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:24:04+00:00"
tags:
  - "stereometria"
  - "piramide"
  - "tronco di piramide"
  - "area laterale"
  - "similitudine"
---
# Problem Text
Una piramide quadrangolare regolare ha lo spigolo di base di lunghezza $2\sqrt{3}$ e altezza $3$. Un piano parallelo alla base taglia la piramide in modo che l'area laterale del tronco di piramide risultante sia uguale all'area di base della piramide originale. Determina la distanza del piano di taglio dal vertice della piramide.

# Solution
Calcoliamo l'apotema $l$ della piramide originale: $l = \sqrt{H^2 + (a/2)^2} = \sqrt{9 + 3} = 2\sqrt{3}$. Sia $x$ la distanza dal vertice al piano di taglio. La piramide staccata è simile a quella originale con rapporto $k = x/3$. Lo spigolo di base della piramide piccola è $a' = a k = 2\sqrt{3} \cdot \frac{x}{3}$, e il suo apotema è $l' = l k = 2\sqrt{3} \cdot \frac{x}{3}$. L'area laterale del tronco è la somma delle aree dei 4 trapezi isosceli, ciascuno con basi $a$ e $a'$ e altezza $l - l'$. L'area di un trapezio è $\frac{1}{2}(a + a')(l - l') = \frac{1}{2} \left( 2\sqrt{3} + \frac{2\sqrt{3}}{3}x \right) \left( 2\sqrt{3} - \frac{2\sqrt{3}}{3}x \right) = 6\left(1 - \frac{x^2}{9}\right)$. L'area laterale totale del tronco è $4 \cdot 6\left(1 - \frac{x^2}{9}\right) = 24\left(1 - \frac{x^2}{9}\right)$. L'area di base della piramide originale è $a^2 = (2\sqrt{3})^2 = 12$. Uguagliando: $24\left(1 - \frac{x^2}{9}\right) = 12$, da cui $1 - \frac{x^2}{9} = \frac{1}{2}$, quindi $x^2 = \frac{9}{2}$ e $x = \frac{3}{\sqrt{2}} = \frac{3\sqrt{2}}{2}$. La distanza richiesta è $\frac{3\sqrt{2}}{2}$.
