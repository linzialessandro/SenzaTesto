---
year: 4
macro_area: "Probabilità"
topic: "Probabilità condizionata, formula di Bayes e distribuzione binomiale"
difficulty: 4
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-11T15:15:04+00:00"
tags:
  - "probabilità condizionata"
  - "Bayes"
  - "distribuzione binomiale"
  - "indipendenza"
---
# Problem Text
Un'urna $A$ contiene 6 palline rosse e 4 nere; un'urna $B$ contiene 3 rosse e 7 nere. Si sceglie un'urna lanciando una moneta equilibrata e da essa si effettuano 10 estrazioni con reimmissione. Sapendo che le prime due estrazioni hanno dato due palline rosse, calcola la probabilità che nelle restanti 8 estrazioni si ottengano almeno 6 palline rosse.

# Solution
Siano $A$ e $B$ gli eventi di aver scelto rispettivamente l'urna $A$ o $B$, e $R$ l'evento «prime due estrazioni rosse». Si ha $P(A)=P(B)=\frac12$. Le estrazioni con reimmissione sono indipendenti, quindi
$P(R\mid A)=\left(\frac{6}{10}\right)^2=\left(\frac35\right)^2=\frac{9}{25}$ e
$P(R\mid B)=\left(\frac{3}{10}\right)^2=\frac{9}{100}$.

Per il teorema di Bayes:

$$
P(A\mid R)=\frac{P(A)P(R\mid A)}{P(A)P(R\mid A)+P(B)P(R\mid B)}
=\frac{\frac12\cdot\frac{9}{25}}{\frac12\cdot\frac{9}{25}+\frac12\cdot\frac{9}{100}}=\frac45,
$$

e quindi $P(B\mid R)=\frac15$.

Sia $Y$ il numero di palline rosse nelle 8 estrazioni successive. Condizionatamente all'urna,
$Y\mid A\sim\mathrm{Bin}\!\left(8,\frac35\right)$ e $Y\mid B\sim\mathrm{Bin}\!\left(8,\frac{3}{10}\right)$. Si ottiene

$$
P(Y\ge 6\mid A)=\sum_{k=6}^{8}\binom{8}{k}\left(\frac35\right)^k\left(\frac25\right)^{8-k}=\frac{123201}{390625},
$$

$$
P(Y\ge 6\mid B)=\sum_{k=6}^{8}\binom{8}{k}\left(\frac{3}{10}\right)^k\left(\frac{7}{10}\right)^{8-k}=\frac{1129221}{100000000}.
$$

Mediando con i pesi posteriori:

$$
P(Y\ge 6\mid R)
=P(A\mid R)\,P(Y\ge 6\mid A)+P(B\mid R)\,P(Y\ge 6\mid B)
=\frac45\cdot\frac{123201}{390625}+\frac15\cdot\frac{1129221}{100000000}
=\frac{492804}{1953125}+\frac{1129221}{500000000}\approx 0{,}2546.
$$
