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
  pipeline: recycle_rejected
  generated_at: "2026-08-11T15:43:52+00:00"
  source: submissions/rejected salvage
tags:
  - "integrali definiti"
  - "somme di Riemann"
  - "teorema della media integrale"
  - "funzione quadratica"
---
# Problem Text
Sia $f(x)=x^2$. Usando la definizione di integrale definito come limite di somme di Riemann (con punti di campionamento agli estremi destri), calcola $\int_0^1 f(x)\,dx$. Successivamente, applica il teorema della media integrale per determinare un punto $c\in[0,1]$ tale che $f(c)$ sia il valor medio di $f$ sull'intervallo $[0,1]$.

# Solution
Partizione uniforme di $[0,1]$ in $n$ parti: $\Delta x=\dfrac{1}{n}$, estremi destri $x_i^*=\dfrac{i}{n}$ per $i=1,\dots,n$. Somma di Riemann:

$$
S_n=\sum_{i=1}^n\left(\dfrac{i}{n}\right)^2\cdot\dfrac{1}{n}=\dfrac{1}{n^3}\sum_{i=1}^n i^2=\dfrac{1}{n^3}\cdot\dfrac{n(n+1)(2n+1)}{6}=\dfrac{(n+1)(2n+1)}{6n^2}.
$$

Passando al limite:

$$
\int_0^1 x^2\,dx=\lim_{n\to\infty}S_n=\lim_{n\to\infty}\dfrac{(1+1/n)(2+1/n)}{6}=\dfrac{2}{6}=\dfrac{1}{3}.
$$

Il valor medio di $f$ su $[0,1]$ è $\dfrac{1}{1-0}\int_0^1 f=\dfrac{1}{3}$. Si cerca $c\in[0,1]$ con $f(c)=c^2=\dfrac{1}{3}$, quindi $c=\dfrac{1}{\sqrt{3}}$ (si prende la radice non negativa poiché $c\in[0,1]$).
