---
year: 5
macro_area: "Equazioni differenziali"
topic: "Equazioni differenziali lineari del primo ordine e prolungabilità della soluzione"
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
  - "equazioni differenziali"
  - "problema di Cauchy"
  - "fattore integrante"
  - "parametro"
  - "de l'Hôpital"
---
# Problem Text
Sia $k \in \mathbb{R}$. Considera il problema di Cauchy $y' = y\tan x + \dfrac{k}{\cos x}$, $y(0)=1$. Determina per quali valori di $k$ la soluzione ammette un prolungamento continuo nel punto $x=\dfrac{\pi}{2}$ e, in tali casi, calcola il valore del prolungamento.

# Solution
Riscriviamo l'equazione come $y' - y\tan x = \dfrac{k}{\cos x}$. Per $x \in \left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)$ un fattore integrante è $e^{-\int \tan x\,dx} = e^{\ln|\cos x|} = \cos x$ (poiché $\cos x > 0$ nell'intervallo). Moltiplicando si ottiene $(y\cos x)' = k$, da cui $y\cos x = kx + C$. La condizione $y(0)=1$ dà $C=1$, quindi

$$
y(x)=\dfrac{kx+1}{\cos x},\qquad x\in\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right).
$$

Il prolungamento continuo in $x=\dfrac{\pi}{2}$ esiste se e solo se esiste finito $\lim_{x\to (\pi/2)^-} y(x)$. Poiché $\cos x \to 0^+$, il limite è finito se e solo se il numeratore si annulla in $\dfrac{\pi}{2}$, cioè $k\dfrac{\pi}{2}+1=0$, quindi $k=-\dfrac{2}{\pi}$. In tal caso, per de L'Hôpital,

$$
\lim_{x\to (\pi/2)^-}\dfrac{kx+1}{\cos x}=\lim_{x\to (\pi/2)^-}\dfrac{k}{-\sin x}=\dfrac{-2/\pi}{-1}=\dfrac{2}{\pi}.
$$

Dunque la soluzione è prolungabile con continuità in $x=\dfrac{\pi}{2}$ solo per $k=-\dfrac{2}{\pi}$, e il valore del prolungamento è $\dfrac{2}{\pi}$.
