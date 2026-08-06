---
year: 1
macro_area: "Statistica Descrittiva"
topic: "Frequenze relative e rappresentazioni grafiche"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:12:17+00:00"
tags:
  - "statistica"
  - "frequenze"
  - "grafici"
---
# Problem Text
In una classe di 25 studenti è stato chiesto quanti libri hanno letto nell'ultimo mese. Le risposte sono state riassunte nella seguente tabella di frequenze assolute:

| N. libri | 0 | 1 | 2 | 3 | 4 | 5 |
|----------|---|---|---|---|---|---|
| Frequenza assoluta | 2 | 5 | 8 | 6 | 3 | 1 |

Calcola le frequenze relative (espresse come percentuali) e spiega quale tipo di rappresentazione grafica è più adatta per questo insieme di dati, motivando la risposta.

# Solution
La somma delle frequenze è $2+5+8+6+3+1=25$ (i dati sono corretti). La frequenza relativa di ogni modalità è $f_i = \frac{n_i}{N} = \frac{n_i}{25}$. Passando alle percentuali:

- 0 libri: $\frac{2}{25} = 0.08$ = 8%
- 1 libro: $\frac{5}{25} = 0.20$ = 20%
- 2 libri: $\frac{8}{25} = 0.32$ = 32%
- 3 libri: $\frac{6}{25} = 0.24$ = 24%
- 4 libri: $\frac{3}{25} = 0.12$ = 12%
- 5 libri: $\frac{1}{25} = 0.04$ = 4%

La somma delle percentuali è $8+20+32+24+12+4=100$%, quindi i calcoli sono corretti.

Il carattere "numero di libri letti" è quantitativo discreto (valori interi). Per rappresentare dati di questo tipo, il **diagramma a barre** (o diagramma a colonne) è il più adatto, perché ogni barra ha altezza proporzionale alla frequenza e le barre sono separate, evidenziando che i valori sono discreti. Un istogramma invece si usa per dati raggruppati in classi di tipo continuo; un aerogramma (a torta) sarebbe meno efficace perché non permette di confrontare facilmente le singole frequenze quando non si vuole enfatizzare la parte sul tutto. Quindi la risposta è: **diagramma a barre**.
