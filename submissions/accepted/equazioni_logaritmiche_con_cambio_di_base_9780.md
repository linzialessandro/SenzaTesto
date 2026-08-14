---
year: 4
macro_area: "Esponenziali e logaritmi"
topic: "Equazioni logaritmiche con cambio di base"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-14T11:05:13+00:00"
tags:
  - "logaritmi"
  - "cambio di base"
  - "dominio"
  - "equazioni"
  - "quadratica"
---
# Problem Text
Risolvi l'equazione: $\log_5(2x) = \log_{25}(3x+2)$.

# Solution
Imponiamo le condizioni di esistenza: $2x>0$ e $3x+2>0$, quindi $x>0$. Trasformiamo il logaritmo in base 25 in base 5: $\log_{25}(3x+2) = \frac{1}{2}\log_5(3x+2)$. L'equazione diventa $\log_5(2x) = \frac{1}{2}\log_5(3x+2)$. Moltiplicando per 2: $2\log_5(2x) = \log_5(3x+2)$, da cui $\log_5(4x^2) = \log_5(3x+2)$. Uguagliando gli argomenti: $4x^2 = 3x+2$, cioè $4x^2-3x-2=0$. Il discriminante è $\Delta = 9+32=41$, quindi $x = \frac{3 \pm \sqrt{41}}{8}$. Poiché $x>0$, la soluzione accettabile è $x = \frac{3+\sqrt{41}}{8}$.
