---
year: 5
macro_area: "Applicazioni dell'integrale"
topic: "Volumi di rotazione e integrali impropri"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T13:00:12+00:00"
tags:
  - "integrali impropri"
  - "volumi di rotazione"
  - "aree"
  - "parametro"
---
# Problem Text
Determina il valore del parametro reale $k>0$ tale che l'area della regione $\mathcal{R}$ compresa tra il grafico di $f(x) = \frac{k}{x^2+1}$, l'asse $x$ e la retta $x=0$ (per $x \ge 0$) sia uguale a $\ln 2$. Successivamente, calcola il volume del solido ottenuto ruotando $\mathcal{R}$ attorno all'asse $x$.

# Solution
L'area di $\mathcal{R}$ è data dall'integrale improprio
$$A = \int_0^{+\infty} \frac{k}{x^2+1} \, dx = k \lim_{b\to+\infty} \int_0^b \frac{1}{x^2+1} \, dx = k \lim_{b\to+\infty} [\arctan x]_0^b = k \cdot \frac{\pi}{2}.$$
Imponendo $A = \ln 2$ si ha $k \cdot \frac{\pi}{2} = \ln 2$, da cui $k = \frac{2\ln 2}{\pi}$.

Il volume del solido di rotazione attorno all'asse $x$ è:
$$V = \pi \int_0^{+\infty} [f(x)]^2 \, dx = \pi \int_0^{+\infty} \frac{k^2}{(x^2+1)^2} \, dx = \pi k^2 \int_0^{+\infty} \frac{1}{(x^2+1)^2} \, dx.$$
Calcoliamo l'integrale $I = \int_0^{+\infty} \frac{1}{(x^2+1)^2} \, dx$ con la sostituzione $x = \tan t$, $dx = \sec^2 t \, dt$; per $x=0$ si ha $t=0$, per $x\to+\infty$ si ha $t\to \pi/2$. Allora
$$I = \int_0^{\pi/2} \frac{\sec^2 t}{\sec^4 t} \, dt = \int_0^{\pi/2} \cos^2 t \, dt = \frac{\pi}{4}.$$
Quindi
$$V = \pi k^2 \cdot \frac{\pi}{4} = \frac{\pi^2 k^2}{4} = \frac{\pi^2}{4} \left( \frac{2\ln 2}{\pi} \right)^2 = \frac{\pi^2}{4} \cdot \frac{4 (\ln 2)^2}{\pi^2} = (\ln 2)^2.$$
Pertanto il volume richiesto è $(\ln 2)^2$.
