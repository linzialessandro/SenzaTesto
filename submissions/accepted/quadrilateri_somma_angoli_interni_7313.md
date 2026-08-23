---
year: 1
macro_area: "Poligoni"
topic: "Quadrilateri e somma degli angoli interni"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: recycle_rejected
  generated_at: "2026-08-23T13:05:00+00:00"
tags:
  - "trapezio"
  - "angoli"
  - "angoli interni"
  - "poligoni"
  - "geometria piana"
---
# Problem Text
In un trapezio $ABCD$ di basi $AB$ e $CD$, gli angoli adiacenti alla base maggiore $AB$ sono tali che $\alpha = \angle DAB = \frac{5}{7}\beta$, dove $\beta = \angle ABC$. Sapendo che gli angoli adiacenti alla base minore $CD$ soddisfano $\gamma = \angle BCD = \frac{3}{4}\delta$ con $\delta = \angle CDA$, e che in un trapezio gli angoli adiacenti a ciascun lato obliquo sono supplementari ($\alpha + \delta = 180^\circ$ e $\beta + \gamma = 180^\circ$), determina le ampiezze in gradi dei quattro angoli interni del trapezio.

# Solution
In un trapezio le basi $AB$ e $CD$ sono parallele ($AB \parallel CD$). Tagliando le rette parallele con le trasversali costituite dai lati obliqui $AD$ e $BC$, gli angoli coniugati interni sono supplementari, ovvero:
$$
\alpha + \delta = 180^\circ, \qquad \beta + \gamma = 180^\circ.
$$
Il testo ci fornisce inoltre le seguenti relazioni:
$$
\alpha = \frac{5}{7}\beta, \qquad \gamma = \frac{3}{4}\delta.
$$
Esprimiamo $\alpha$ e $\gamma$ in funzione di $\delta$ e $\beta$:
$$
\alpha = 180^\circ - \delta, \qquad \gamma = 180^\circ - \beta.
$$
Sostituendo nelle due relazioni:
1. $180^\circ - \delta = \frac{5}{7}\beta \iff 5\beta + 7\delta = 1260^\circ$.
2. $180^\circ - \beta = \frac{3}{4}\delta \iff 4\beta + 3\delta = 720^\circ$.

Risolviamo il sistema lineare:
$$
\begin{cases}
5\beta + 7\delta = 1260^\circ \\
4\beta + 3\delta = 720^\circ
\end{cases}
$$
Moltiplicando la prima equazione per $3$ e la seconda per $7$:
$$
\begin{cases}
15\beta + 21\delta = 3780^\circ \\
28\beta + 21\delta = 5040^\circ
\end{cases}
$$
Sottraendo la prima equazione dalla seconda:
$$
13\beta = 1260^\circ \implies \beta = \frac{1260^\circ}{13}.
$$
Sostituendo $\beta$ per ricavare $\delta$:
$$
3\delta = 720^\circ - 4\left(\frac{1260^\circ}{13}\right) = \frac{4320^\circ}{13} \implies \delta = \frac{1440^\circ}{13}.
$$
Ora ricaviamo $\alpha$ e $\gamma$:
$$
\alpha = 180^\circ - \delta = 180^\circ - \frac{1440^\circ}{13} = \frac{900^\circ}{13},
$$
$$
\gamma = 180^\circ - \beta = 180^\circ - \frac{1260^\circ}{13} = \frac{1080^\circ}{13}.
$$
Le ampiezze dei quattro angoli sono:
$$
\alpha = \frac{900^\circ}{13}, \quad \beta = \frac{1260^\circ}{13}, \quad \gamma = \frac{1080^\circ}{13}, \quad \delta = \frac{1440^\circ}{13}.
$$
