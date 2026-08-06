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
  pipeline: generate_and_pr
  generated_at: "2026-08-06T18:07:25+00:00"
tags:
  - "media"
  - "varianza"
  - "scarto quadratico medio"
  - "combinazione di dati"
---
# Problem Text
In una distribuzione di 10 dati, la media è 7 e lo scarto quadratico medio è 2. Se si aggiungono due nuovi dati, 4 e 10, qual è la nuova varianza?

# Solution
Indichiamo con $n_1 = 10$ il numero iniziale di dati, $\mu_1 = 7$ la media e $\sigma_1 = 2$ lo scarto quadratico medio. Allora la varianza iniziale è $\sigma_1^2 = 4$. La somma dei dati iniziali è $S_1 = n_1 \mu_1 = 10 \cdot 7 = 70$. La somma dei quadrati iniziali si ricava dalla varianza: $\sigma_1^2 = \frac{Q_1}{n_1} - \mu_1^2$, quindi $Q_1 = n_1 (\sigma_1^2 + \mu_1^2) = 10(4 + 49) = 530$. 

Dopo l'aggiunta di 4 e 10, il nuovo numero di dati è $n_2 = 12$, la nuova somma è $S_2 = 70 + 4 + 10 = 84$, e la nuova somma dei quadrati è $Q_2 = 530 + 4^2 + 10^2 = 530 + 16 + 100 = 646$. La nuova media è $\mu_2 = \frac{84}{12} = 7$. La nuova varianza è $\sigma_2^2 = \frac{646}{12} - 7^2 = \frac{323}{6} - 49 = \frac{323 - 294}{6} = \frac{29}{6} \approx 4.83$.
