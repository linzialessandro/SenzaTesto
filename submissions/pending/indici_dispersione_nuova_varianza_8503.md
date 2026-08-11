---
year: 3
macro_area: "Statistica descrittiva"
topic: "Indici di tendenza centrale e dispersione"
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
  - "media"
  - "varianza"
  - "scarto quadratico medio"
  - "combinazione di dati"
---
# Problem Text
In una distribuzione di 10 dati, la media è $7$ e lo scarto quadratico medio è $2$. Se si aggiungono due nuovi dati, $4$ e $10$, qual è la nuova varianza?

# Solution
Sia $n_1=10$, $\mu_1=7$, $\sigma_1=2$, quindi $\sigma_1^2=4$. Somma dei dati: $S_1=n_1\mu_1=70$. Dalla relazione $\sigma_1^2=\dfrac{Q_1}{n_1}-\mu_1^2$ si ha $Q_1=n_1(\sigma_1^2+\mu_1^2)=10(4+49)=530$.

Dopo l'aggiunta di $4$ e $10$: $n_2=12$, $S_2=70+14=84$, $Q_2=530+16+100=646$. Nuova media $\mu_2=\dfrac{84}{12}=7$. Nuova varianza:

$$
\sigma_2^2=\dfrac{Q_2}{n_2}-\mu_2^2=\dfrac{646}{12}-49=\dfrac{323}{6}-\dfrac{294}{6}=\dfrac{29}{6}.
$$

Quindi la nuova varianza è $\dfrac{29}{6}$.
