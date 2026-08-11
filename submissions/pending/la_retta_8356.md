---
year: 3
macro_area: "Geometria Analitica"
topic: "La retta"
difficulty: 1
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-11T15:20:32+00:00"
tags:
  - "rette"
  - "parallelismo"
  - "equazione implicita"
  - "coefficiente angolare"
---
# Problem Text
Data la retta $r$ di equazione $(k+2)x - 3y + 1 = 0$, determina per quale valore del parametro reale $k$ la retta è parallela alla retta $s$ di equazione $4x - 6y + 7 = 0$.

# Solution
Scriviamo l'equazione di $r$ in forma esplicita: 
$(k+2)x - 3y + 1 = 0 \Rightarrow -3y = -(k+2)x - 1 \Rightarrow y = \frac{k+2}{3}x + \frac{1}{3}$. 
Quindi il coefficiente angolare di $r$ è $m_r = \frac{k+2}{3}$. 
Per $s$: $4x - 6y + 7 = 0 \Rightarrow -6y = -4x - 7 \Rightarrow y = \frac{2}{3}x + \frac{7}{6}$, quindi $m_s = \frac{2}{3}$. 
Per il parallelismo, $m_r = m_s$, cioè $\frac{k+2}{3} = \frac{2}{3}$. Moltiplicando per 3: $k+2 = 2$, da cui $k = 0$. 
Verifica: per $k=0$, $r: 2x - 3y + 1 = 0$ e $s: 4x - 6y + 7 = 0$; i coefficienti di $x$ e $y$ sono proporzionali ma il termine noto no, quindi le rette sono parallele distinte. 
Risposta: $k = 0$.
