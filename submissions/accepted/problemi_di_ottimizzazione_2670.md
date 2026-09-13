---
year: 5
macro_area: "Studio di funzione e Ottimizzazione"
topic: "Problemi di ottimizzazione"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:23:13+00:00"
tags:
  - "ottimizzazione"
  - "massimi e minimi"
  - "parabola"
  - "area"
  - "derivata"
---
# Problem Text
Un rettangolo ha la base sull'asse $x$ e i due vertici superiori sulla parabola di equazione $y = 4 - x^2$. Determina le dimensioni del rettangolo di area massima e calcola l'area massima.

# Solution
Sia $x$ l'ascissa del vertice superiore destro, con $0 \le x \le 2$. Per simmetria, la base misura $2x$ e l'altezza è $4 - x^2$. L'area è $A(x) = 2x(4 - x^2) = 8x - 2x^3$. Derivando: $A'(x) = 8 - 6x^2$. Posto $A'(x)=0$ si ha $x^2 = \frac{4}{3}$, da cui $x = \frac{2}{\sqrt{3}} = \frac{2\sqrt{3}}{3}$, accettabile perché $0 < \frac{2\sqrt{3}}{3} < 2$. La funzione $A(x)$ è continua su $[0,2]$; agli estremi $A(0)=0$ e $A(2)=0$, quindi il punto critico è di massimo assoluto. Le dimensioni sono base $= 2x = \frac{4\sqrt{3}}{3}$ e altezza $= 4 - x^2 = 4 - \frac{4}{3} = \frac{8}{3}$. L'area massima è $A\left(\frac{2\sqrt{3}}{3}\right) = \frac{4\sqrt{3}}{3} \cdot \frac{8}{3} = \frac{32\sqrt{3}}{9}$.
