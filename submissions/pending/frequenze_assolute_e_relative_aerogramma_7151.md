---
year: 1
macro_area: "Statistica Descrittiva"
topic: "Frequenze assolute e relative, aerogramma"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-11T15:22:15+00:00"
tags:
  - "statistica"
  - "frequenze"
  - "aerogramma"
  - "equazione"
---
# Problem Text
In una classe le preferenze per la materia preferita (Italiano, Matematica, Scienze, Storia) sono state raccolte in una tabella. Sono note le frequenze assolute di Italiano ($9$) e Matematica ($12$). La frequenza relativa di Scienze è $0{,}2$ e la frequenza assoluta di Storia è uguale a quella di Scienze aumentata di $3$. Determina il numero totale $T$ di studenti, le frequenze assolute di Scienze e Storia, le frequenze relative percentuali di tutte le materie e gli angoli al centro dell'aerogramma associato.

# Solution
Sia $x$ la frequenza assoluta di Scienze. Dalla frequenza relativa si ha $x = 0{,}2\,T = \dfrac{T}{5}$. La frequenza di Storia è $y = x + 3$.

La somma delle frequenze è $T$:
$9 + 12 + x + y = T$, cioè $21 + x + (x+3) = T$, da cui $24 + 2x = T$.

Sostituendo $x = \dfrac{T}{5}$:
$24 + \dfrac{2}{5}T = T$. Moltiplicando per $5$: $120 + 2T = 5T$, quindi $3T = 120$ e $T = 40$.

Ne segue $x = 8$ e $y = 11$. Frequenze assolute: Italiano $9$, Matematica $12$, Scienze $8$, Storia $11$.

Frequenze relative percentuali:
Italiano $\dfrac{9}{40} = 22{,}5\%$, Matematica $\dfrac{12}{40} = 30\%$, Scienze $\dfrac{8}{40} = 20\%$, Storia $\dfrac{11}{40} = 27{,}5\%$.

Angoli al centro dell'aerogramma ($\dfrac{f_i}{T}\cdot 360^\circ$):
Italiano $81^\circ$, Matematica $108^\circ$, Scienze $72^\circ$, Storia $99^\circ$.
Verifica: $81 + 108 + 72 + 99 = 360$.
