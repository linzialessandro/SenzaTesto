---
year: 5
macro_area: "Analisi matematica"
topic: "Integrali indefiniti: metodi di integrazione"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:19:47+00:00"
tags:
  - "integrali"
  - "sostituzione"
  - "integrazione per parti"
---
# Problem Text
Calcola l'integrale indefinito:

$$
\int x^3 e^{x^2} \, dx
$$

# Solution
Osserviamo che la funzione integranda contiene $x^3$ e $e^{x^2}$. La presenza di $e^{x^2}$ suggerisce una sostituzione che semplifichi l'esponente, mentre $x^3$ può essere spezzato come $x^2 \cdot x$. Poniamo

$$
t = x^2 \quad \Rightarrow \quad dt = 2x \, dx \quad \Rightarrow \quad x \, dx = \frac{dt}{2}
$$

Inoltre $x^3 = x^2 \cdot x = t \cdot x$. Sostituendo otteniamo:

$$
\int x^3 e^{x^2} \, dx = \int t e^t \frac{dt}{2} = \frac{1}{2} \int t e^t \, dt
$$

Ora integriamo per parti il nuovo integrale. Scegliamo $u = t$ e $dv = e^t dt$. Allora $du = dt$ e $v = e^t$. Applicando la formula di integrazione per parti $\int u \, dv = uv - \int v \, du$, si ha:

$$
\int t e^t \, dt = t e^t - \int e^t \, dt = t e^t - e^t + C_1
$$

Pertanto:

$$
\frac{1}{2} \int t e^t \, dt = \frac{1}{2} (t e^t - e^t) + C = \frac{1}{2} e^t (t - 1) + C
$$

Ripristiniamo la variabile $x$ usando $t = x^2$:

$$
\int x^3 e^{x^2} \, dx = \frac{1}{2} e^{x^2} (x^2 - 1) + C
$$

Verifica: derivando il risultato si ottiene $x^3 e^{x^2}$, come richiesto.
