---
year: 3
macro_area: "Statistica descrittiva"
topic: "Indici di tendenza centrale e dispersione"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:58:19+00:00"
tags:
  - "statistica"
  - "media"
  - "varianza"
  - "scarto quadratico medio"
---
# Problem Text
Un insieme di dati (popolazione) ha media $10$ e varianza $4$. Aggiungendo un nuovo dato pari a $20$, la media del nuovo insieme diventa $11$. Determina quanti dati aveva l'insieme originale e calcola la nuova varianza e lo scarto quadratico medio.

# Solution
Sia $n$ il numero di dati originali. La somma è $10n$. Dopo l'aggiunta, la media è $\frac{10n+20}{n+1}=11$. Risolvendo: $10n+20=11(n+1)$ da cui $n=9$.
La varianza originale è $\sigma^2=4=\frac{1}{n}\sum (x_i-10)^2$, quindi $\sum (x_i-10)^2=36$.
Per la nuova media $11$, la somma degli scarti al quadrato per i dati originali è $\sum (x_i-11)^2 = \sum [(x_i-10)-1]^2 = \sum (x_i-10)^2 - 2\sum (x_i-10)+n$. Poiché $\sum (x_i-10)=0$, otteniamo $45$. Aggiungendo il nuovo dato, $(20-11)^2=81$, la somma diventa $126$. La nuova varianza è $\frac{126}{10}=12.6$, e lo scarto quadratico medio è $\sqrt{12.6} \approx 3.55$.
Quindi $n=9$, nuova varianza $12.6$, scarto quadratico medio $\approx 3.55$.
