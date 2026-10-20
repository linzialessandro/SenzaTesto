---
year: 3
macro_area: "Statistica descrittiva"
topic: "Indici di tendenza centrale e di dispersione"
difficulty: 1
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T13:00:22+00:00"
tags:
  - "statistica"
  - "media"
  - "mediana"
  - "moda"
  - "varianza"
  - "scarto quadratico medio"
---
# Problem Text
Data la serie di dati: $6, 9, 9, 12, 13, 14, 15, 18$, determina media, mediana, moda, varianza e scarto quadratico medio. Fornisci i risultati esatti dove possibile; per lo scarto quadratico medio, dai anche l'approssimazione a due decimali.

# Solution
I dati ordinati sono $6, 9, 9, 12, 13, 14, 15, 18$. La media è $\bar{x} = \frac{6+9+9+12+13+14+15+18}{8} = \frac{96}{8} = 12$. Poiché $n=8$ è pari, la mediana è la media dei due valori centrali: $\frac{12+13}{2} = 12.5$. La moda è $9$, essendo l'unico valore che compare due volte. Per la varianza, calcoliamo gli scarti dalla media: $-6, -3, -3, 0, 1, 2, 3, 6$. I quadrati sono $36, 9, 9, 0, 1, 4, 9, 36$; la somma è $36+9+9+0+1+4+9+36 = 104$. Quindi $\sigma^2 = \frac{104}{8} = 13$ e lo scarto quadratico medio è $\sigma = \sqrt{13} \approx 3.61$.
