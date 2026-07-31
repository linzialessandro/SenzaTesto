---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali indefiniti"
difficulty: 4
ai_generated: true
tags:
  - "Integrali indefiniti"
  - "Integrazione per parti"
  - "Metodi di integrazione"
  - "Scomposizione"
---
# Problem Text
Calcola il seguente integrale indefinito:

$$
\int \frac{x \arctan x}{(1+x^2)^2} \, dx
$$

# Solution
Applichiamo il metodo di integrazione per parti ponendo:

$$
u = \arctan x \implies du = \frac{1}{1+x^2} \, dx
$$

$$
dv = \frac{x}{(1+x^2)^2} \, dx \implies v = \int \frac{x}{(1+x^2)^2} \, dx = -\frac{1}{2(1+x^2)}
$$

Applicando la formula di integrazione per parti $\int u \, dv = u v - \int v \, du$, otteniamo:

$$
\int \frac{x \arctan x}{(1+x^2)^2} \, dx = -\frac{\arctan x}{2(1+x^2)} + \frac{1}{2} \int \frac{1}{(1+x^2)^2} \, dx
$$

Per risolvere l'integrale residuo $I = \int \frac{1}{(1+x^2)^2} \, dx$, utilizziamo la tecnica della scomposizione al numeratore $1 = 1 + x^2 - x^2$:

$$
I = \int \frac{1 + x^2 - x^2}{(1+x^2)^2} \, dx = \int \frac{1}{1+x^2} \, dx - \int \frac{x^2}{(1+x^2)^2} \, dx
$$

Il primo integrale è immediato: $\int \frac{1}{1+x^2} \, dx = \arctan x$. Per il secondo, procediamo per parti integrando $\frac{x}{(1+x^2)^2}$ e derivando $x$:

$$
\int x \cdot \frac{x}{(1+x^2)^2} \, dx = -\frac{x}{2(1+x^2)} - \int \left(-\frac{1}{2(1+x^2)}\right) \, dx = -\frac{x}{2(1+x^2)} + \frac{1}{2} \arctan x
$$

Pertanto:

$$
I = \arctan x - \left( -\frac{x}{2(1+x^2)} + \frac{1}{2} \arctan x \right) = \frac{1}{2} \arctan x + \frac{x}{2(1+x^2)}
$$

Sostituendo $I$ nella relazione iniziale, otteniamo la famiglia delle primitive:

$$
\int \frac{x \arctan x}{(1+x^2)^2} \, dx = -\frac{\arctan x}{2(1+x^2)} + \frac{1}{2}\left( \frac{1}{2} \arctan x + \frac{x}{2(1+x^2)} \right) + C
$$

$$
= \frac{1}{4} \arctan x + \frac{x - 2\arctan x}{4(1+x^2)} + C, \quad C \in \mathbb{R}
$$
