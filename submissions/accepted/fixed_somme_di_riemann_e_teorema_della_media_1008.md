---
year: 5
macro_area: "Integrali definiti"
topic: "Somme di Riemann e teorema della media"
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
  - "integrali definiti"
  - "somme di Riemann"
  - "teorema della media integrale"
  - "funzione quadratica"
---
# Problem Text
Sia $f(x) = x^2$. Usando la definizione di integrale definito come limite di somme di Riemann (con punti di campionamento agli estremi destri), calcola $\int_0^1 f(x) \, dx$. Successivamente, applica il teorema della media integrale per determinare un punto $c \in [0,1]$ tale che $f(c)$ sia il valor medio di $f$ sull'intervallo $[0,1]$.

# Solution
Consideriamo una partizione uniforme di $[0,1]$ in $n$ sottointervalli di ampiezza $\Delta x = \frac{1}{n}$. I punti di campionamento agli estremi destri sono $x_i^* = \frac{i}{n}$ per $i = 1, \dots, n$. La somma di Riemann è:

$$
S_n = \sum_{i=1}^n f\left(\frac{i}{n}\right) \cdot \frac{1}{n}
 = \sum_{i=1}^n \left(\frac{i}{n}\right)^2 \cdot \frac{1}{n}
 = \frac{1}{n^3} \sum_{i=1}^n i^2.
$$

Usando la formula $\sum_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}$ abbiamo $S_n = \frac{1}{n^3} \frac{n(n+1)(2n+1)}{6}$. Il limite per $n \to \infty$ è $\frac{2n^3}{6n^3} = \frac{1}{3}$. Quindi $\int_0^1 x^2 \, dx = \frac{1}{3}$. Per il teorema della media integrale, cerchiamo $c \in [0,1]$ tale che $f(c) = \frac{1}{1-0} \int_0^1 x^2 \, dx$, cioè $c^2 = \frac{1}{3}$. Si ricava $c = \frac{1}{\sqrt{3}}$ (l'altra soluzione è fuori dall'intervallo).
