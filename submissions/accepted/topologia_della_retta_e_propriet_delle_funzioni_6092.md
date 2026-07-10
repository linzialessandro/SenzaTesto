---
year: 5
macro_area: "Analisi Matematica"
topic: "Topologia della retta e propriet\u00e0 delle funzioni"
difficulty: 2
tags:
  - "Dominio"
  - "Parit\u00e0"
  - "Funzioni dispari"
  - "Funzione razionale fratta"
ai_generated: true
---
# Problem Text
Determinare il dominio di definizione e studiare la parità della seguente funzione reale di variabile reale:

$$
f(x) = \frac{x^3}{x^2 - 1}
$$

# Solution
La risoluzione si articola nei seguenti passi:

1. **Determinazione del dominio**:
La funzione $f(x)$ è una funzione razionale fratta. Ciascun punto del dominio deve garantire che il denominatore sia diverso da zero:

$$
x^2 - 1 \neq 0
$$

Risolvendo l'equazione si ottengono i valori da escludere, ossia $x = \pm 1$. Di conseguenza, il dominio $D$ è:

$$
D = \mathbb{R} \setminus \{-1, 1\}
$$

2. **Studio della parità**:
Verifichiamo la relazione tra $f(-x)$ e $f(x)$ per ogni $x \in D$. Il dominio $D$ è simmetrico rispetto all'origine, condizione necessaria affinché una funzione possa essere pari o dispari.
Calcoliamo $f(-x)$ sostituendo $-x$ al posto di $x$:

$$
f(-x) = \frac{(-x)^3}{(-x)^2 - 1}
$$

Sviluppando le potenze a numeratore e a denominatore si ottiene:

$$
f(-x) = \frac{-x^3}{x^2 - 1}
$$

Raccogliendo il segno meno davanti alla frazione si riottiene l'espressione iniziale con segno opposto:

$$
f(-x) = -\frac{x^3}{x^2 - 1} = -f(x)
$$

Poiché vale la relazione $f(-x) = -f(x)$, la funzione è **dispari**. Il suo grafico è dunque simmetrico rispetto all'origine degli assi cartesiani $O(0,0)$.
