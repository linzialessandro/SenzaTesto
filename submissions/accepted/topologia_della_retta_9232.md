---
year: 5
macro_area: "Topologia e Funzioni"
topic: "Topologia della retta"
difficulty: 5
ai_generated: true
tags:
  - "topologia"
  - "dominio"
  - "codominio"
  - "punti isolati"
  - "parit\u00e0"
  - "periodicit\u00e0"
---
# Problem Text
Data la funzione reale di variabile reale

$$
f(x) = \sqrt{\ln\left( \frac{2\cos(\pi x)}{1 + \cos^2(\pi x)} \right)}
$$

si determini il suo dominio $D \subset \mathbb{R}$ e il codominio $C = f(D)$, classificando la natura topologica di $D$ in $\mathbb{R}$ (apertura, chiusura, presenza di punti isolati) e verificando le proprietà di parità e periodicità della funzione.

# Solution
Per la realtà della radice quadrata e la definizione del logaritmo, l'argomento del logaritmo deve essere maggiore o uguale a $1$:

$$
\frac{2\cos(\pi x)}{1 + \cos^2(\pi x)} \ge 1
$$

Poiché il denominatore $1 + \cos^2(\pi x) > 0$ per ogni $x \in \mathbb{R}$, la disuguaglianza impone che anche il numeratore sia positivo, ossia $\cos(\pi x) > 0$. Moltiplicando ambo i membri per il denominatore positivo, si ottiene:

$$
2\cos(\pi x) \ge 1 + \cos^2(\pi x) \iff \cos^2(\pi x) - 2\cos(\pi x) + 1 \le 0 \iff \left(\cos(\pi x) - 1\right)^2 \le 0
$$

Poiché un quadrato nel campo reale è sempre non negativo, la disuguaglianza è soddisfatta unicamente nell'unico punto in cui la base si annulla:

$$
\cos(\pi x) = 1 \iff \pi x = 2k\pi \iff x = 2k \quad (k \in \mathbb{Z})
$$

Il dominio della funzione è quindi l'insieme discreto dei numeri interi pari:

$$
D = 2\mathbb{Z} = \{ 2k \mid k \in \mathbb{Z} \}
$$

**Natura topologica di $D$:**
- Per ogni $x \in D$, fissato $\varepsilon = 1$, l'intorno sferico $I_1(x) = (x-1, x+1)$ soddisfa $I_1(x) \cap D = \{x\}$. Pertanto, ogni punto di $D$ è un **punto isolato**.
- L'insieme dei punti di accumulazione di $D$ è vuoto ($D' = \emptyset$). Poiché $D' \subseteq D$, l'insieme $D$ contiene tutti i propri punti di accumulazione ed è dunque un **insieme chiuso**.
- La parte interna è vuota ($\text{Int}(D) = \emptyset \neq D$), da cui si conclude che $D$ **non è aperto**.

**Codominio:**
Per ogni $x \in D$, si ha $\cos(\pi x) = 1$, dunque $f(x) = \sqrt{\ln(1)} = 0$. Il codominio è il singoletto compatto $C = \{0\}$.

**Parità e Periodicità:**
- Il dominio è simmetrico rispetto all'origine ($x \in D \iff -x \in D$). Essendo $f(-x) = f(x) = 0$ per ogni $x \in D$, $f$ è una funzione **pari**.
- Poiché $x \in D \iff x + 2 \in D$ e $f(x+2) = f(x) = 0$, la funzione è **periodica** con periodo fondamentale $T = 2$.
