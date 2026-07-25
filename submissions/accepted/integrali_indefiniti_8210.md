---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali indefiniti"
difficulty: 2
ai_generated: true
tags:
  - "integrali indefiniti"
  - "scomposizione"
  - "integrali immediati"
  - "analisi matematica"
---
# Problem Text
Calcolare il seguente integrale indefinito:

$$
\int \frac{3x - 1}{x^2 + 1} \, dx
$$

# Solution
Per la proprietà di linearità dell'integrale indefinito (metodo di scomposizione), possiamo scindere l'integrale nella differenza di due integrali:

$$
\int \frac{3x - 1}{x^2 + 1} \, dx = \int \frac{3x}{x^2 + 1} \, dx - \int \frac{1}{x^2 + 1} \, dx
$$

**1. Primo integrale:** 
Per il primo termine, moltiplichiamo e dividiamo per $2$ per ottenere al numeratore la derivata del denominatore, riconducendoci alla regola $\int \frac{f'(x)}{f(x)} \, dx = \ln|f(x)| + c_1$:

$$
\int \frac{3x}{x^2 + 1} \, dx = \frac{3}{2} \int \frac{2x}{x^2 + 1} \, dx = \frac{3}{2} \ln(x^2 + 1)
$$

Nota: poiché $x^2 + 1 > 0$ per ogni $x \in \mathbb{R}$, il modulo non è strettamente necessario.

**2. Secondo integrale:** 
Il secondo termine è un integrale immediato fondamentale:

$$
\int \frac{1}{x^2 + 1} \, dx = \arctan(x)
$$

**3. Conclusione:** 
Ricombinando i risultati e aggiungendo la costante d'integrazione $c \in \mathbb{R}$, otteniamo la famiglia di primitive cercata:

$$
\int \frac{3x - 1}{x^2 + 1} \, dx = \frac{3}{2} \ln(x^2 + 1) - \arctan(x) + c
$$
