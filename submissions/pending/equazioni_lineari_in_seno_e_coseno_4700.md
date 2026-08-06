---
year: 4
macro_area: "Goniometria"
topic: "Equazioni lineari in seno e coseno"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:10:14+00:00"
tags:
  - "goniometria"
  - "equazioni"
  - "seno"
  - "coseno"
---
# Problem Text
Risolvi l'equazione $\sqrt{3}\sin x + \cos x = 1$ per $x \in \mathbb{R}$.

# Solution
Si tratta di un'equazione lineare in $\sin x$ e $\cos x$. Poniamo $a=\sqrt{3}$, $b=1$, $c=1$. Calcoliamo $R=\sqrt{a^2+b^2}=\sqrt{3+1}=2$. Dividiamo entrambi i membri per $R$: 

$$
\frac{\sqrt{3}}{2}\sin x + \frac{1}{2}\cos x = \frac{1}{2}
$$

 Osserviamo che $\frac{\sqrt{3}}{2}=\cos\frac{\pi}{6}$ e $\frac{1}{2}=\sin\frac{\pi}{6}$, quindi utilizzando la formula di addizione del seno: 

$$
\sin\left(x+\frac{\pi}{6}\right) = \frac{1}{2}
$$

 Le soluzioni dell'equazione $\sin \theta = \frac{1}{2}$ sono $\theta = \frac{\pi}{6}+2k\pi$ oppure $\theta = \frac{5\pi}{6}+2k\pi$, con $k\in\mathbb{Z}$. Sostituendo $\theta = x+\frac{\pi}{6}$ otteniamo: 

$$
x+\frac{\pi}{6} = \frac{\pi}{6}+2k\pi \quad \Rightarrow \quad x = 2k\pi
$$

 oppure 

$$
x+\frac{\pi}{6} = \frac{5\pi}{6}+2k\pi \quad \Rightarrow \quad x = \frac{2\pi}{3}+2k\pi
$$

 Quindi le soluzioni sono $x=2k\pi$ e $x=\frac{2\pi}{3}+2k\pi$, con $k\in\mathbb{Z}$.
