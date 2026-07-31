---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali indefiniti"
difficulty: 3
ai_generated: true
tags:
  - "integrali indefiniti"
  - "integrazione per sostituzione"
  - "integrazione per parti"
  - "primitive"
---
# Problem Text
Determinare l'insieme delle primitive della funzione $f(x) = \dfrac{\arcsin(\sqrt{x})}{\sqrt{x}}$ nel suo dominio di definizione, calcolando il seguente integrale indefinito:

$$
\int \frac{\arcsin(\sqrt{x})}{\sqrt{x}} \, dx
$$

# Solution
La funzione integranda $f(x) = \dfrac{\arcsin(\sqrt{x})}{\sqrt{x}}$ è definita e continua nell'intervallo $I = (0, 1)$. Per il teorema di esistenza delle primitive, ammette primitive su $I$.

**Passo 1: Integrazione per sostituzione**
Poniamo $t = \sqrt{x}$, con $t \in (0, 1)$. Differenziando si ha:

$$
dt = \frac{1}{2\sqrt{x}} \, dx \implies \frac{dx}{\sqrt{x}} = 2 \, dt
$$

Sostituendo nell'integrale di partenza:

$$
\int \frac{\arcsin(\sqrt{x})}{\sqrt{x}} \, dx = 2 \int \arcsin(t) \, dt
$$

**Passo 2: Integrazione per parti**
Applichiamo la formula di integrazione per parti $\int u \, v' \, dt = u v - \int u' v \, dt$ all'integrale $\int \arcsin(t) \, dt$, ponendo:
- $u(t) = \arcsin(t) \implies u'(t) = \dfrac{1}{\sqrt{1-t^2}}$
- $v'(t) = 1 \implies v(t) = t$

Si ottiene:

$$
\int \arcsin(t) \, dt = t \arcsin(t) - \int \frac{t}{\sqrt{1-t^2}} \, dt
$$

**Passo 3: Risoluzione dell'integrale residuo**
Riconosciamo nell'integrale residuo la forma immediata del tipo $\int [g(t)]^\alpha g'(t) \, dt$:

$$
\int \frac{t}{\sqrt{1-t^2}} \, dt = -\frac{1}{2} \int (1-t^2)^{-\frac{1}{2}} \, (-2t) \, dt = -\frac{1}{2} \cdot \frac{(1-t^2)^{\frac{1}{2}}}{\frac{1}{2}} = -\sqrt{1-t^2}
$$

Sostituendo indietro:

$$
\int \arcsin(t) \, dt = t \arcsin(t) + \sqrt{1-t^2}
$$

**Passo 4: Ripristino della variabile originale $x$**
Moltiplicando per il fattore $2$ e sostituendo $t = \sqrt{x}$, si ottiene la famiglia di primitive cercata:

$$
\int \frac{\arcsin(\sqrt{x})}{\sqrt{x}} \, dx = 2\sqrt{x} \arcsin(\sqrt{x}) + 2\sqrt{1-x} + C, \quad C \in \mathbb{R}
$$
