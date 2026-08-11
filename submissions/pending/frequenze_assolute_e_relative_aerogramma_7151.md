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
In una classe, le preferenze per la materia preferita tra Italiano, Matematica, Scienze e Storia sono state raccolte in una tabella. Le frequenze assolute note sono: Italiano 9, Matematica 12, mentre quelle di Scienze e Storia sono state registrate in modo incompleto. Sapendo che la frequenza relativa di Scienze è $0.2$ e che il numero di studenti che preferisce Storia è uguale a quello di Scienze aumentato di 3, determina il numero totale $T$ di studenti della classe, le frequenze assolute di Scienze e Storia, e le frequenze relative percentuali di tutte le materie. Infine, rappresenta la distribuzione con un aerogramma indicando gli angoli al centro.

# Solution
Sia $x$ la frequenza assoluta di Scienze. La frequenza relativa di Scienze è $0.2$, quindi $x = 0.2 T = \frac{1}{5} T$. Sia $y$ la frequenza di Storia, con $y = x + 3$. La somma di tutte le frequenze è $T$: $9 + 12 + x + y = T$. Sostituendo $y = x + 3$ si ottiene $21 + x + (x+3) = T$, cioè $24 + 2x = T$. Poiché $x = \frac{1}{5} T$, sostituiamo: $24 + 2\left(\frac{1}{5} T\right) = T$, quindi $24 + \frac{2}{5}T = T$. Moltiplicando per 5: $120 + 2T = 5T$, da cui $3T = 120$ e $T = 40$. Allora $x = \frac{1}{5} \cdot 40 = 8$ e $y = 8 + 3 = 11$. Le frequenze assolute sono: Italiano 9, Matematica 12, Scienze 8, Storia 11. Le frequenze relative percentuali: Italiano $\frac{9}{40} = 0.225 = 22.5\%$, Matematica $\frac{12}{40} = 0.3 = 30\%$, Scienze $\frac{8}{40} = 0.2 = 20\%$, Storia $\frac{11}{40} = 0.275 = 27.5\%$. Gli angoli al centro per l'aerogramma: Italiano $\frac{9}{40} \cdot 360^\circ = 81^\circ$, Matematica $\frac{12}{40} \cdot 360^\circ = 108^\circ$, Scienze $\frac{8}{40} \cdot 360^\circ = 72^\circ$, Storia $\frac{11}{40} \cdot 360^\circ = 99^\circ$. Verifica: $81+108+72+99 = 360^\circ$. L'aerogramma avrà settori proporzionali a questi angoli.
