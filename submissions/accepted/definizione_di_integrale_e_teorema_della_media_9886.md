---
year: 5
macro_area: "Integrali definiti"
topic: "Definizione di integrale e teorema della media"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:52:24+00:00"
tags:
  - "integrale definito"
  - "somme di Riemann"
  - "teorema della media"
  - "funzione quadratica"
---
# Problem Text
Sia $f(x)=x^2$. Calcola l'integrale definito $\int_0^1 x^2 \, dx$ utilizzando la definizione di integrale di Riemann (come limite di somme di Riemann). Successivamente, determina il punto $c$ dell'intervallo $[0,1]$ che soddisfa il teorema della media integrale.

# Solution
Consideriamo una partizione uniforme di $[0,1]$ in $n$ intervalli di ampiezza $\Delta x = \frac{1}{n}$. I punti di partizione sono $x_i = \frac{i}{n}$ per $i=0,1,\dots,n$. Utilizziamo i punti destri $x_i^* = \frac{i}{n}$ per $i=1,\dots,n$. La somma di Riemann è:

$$
S_n = \sum_{i=1}^n f\left(\frac{i}{n}\right) \cdot \frac{1}{n} = \sum_{i=1}^n \left(\frac{i}{n}\right)^2 \cdot \frac{1}{n} = \frac{1}{n^3} \sum_{i=1}^n i^2.
$$

Usando la formula $\sum_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}$, otteniamo:

$$
S_n = \frac{1}{n^3} \cdot \frac{n(n+1)(2n+1)}{6} = \frac{(n+1)(2n+1)}{6n^2} = \frac{2n^2+3n+1}{6n^2} = \frac{1}{3} + \frac{1}{2n} + \frac{1}{6n^2}.
$$

Passando al limite per $n \to \infty$:

$$
\int_0^1 x^2 \, dx = \lim_{n \to \infty} S_n = \frac{1}{3}.
$$

Il teorema della media integrale afferma che esiste $c \in [0,1]$ tale che:

$$
f(c) = \frac{1}{b-a} \int_a^b f(x) \, dx = \frac{1}{1-0} \cdot \frac{1}{3} = \frac{1}{3}.
$$

Poiché $f(c)=c^2$, abbiamo $c^2 = \frac{1}{3}$, da cui $c = \frac{1}{\sqrt{3}}$. Tale valore appartiene a $[0,1]$. Quindi il punto richiesto è $c = \frac{1}{\sqrt{3}}$.
