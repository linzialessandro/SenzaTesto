---
year: 5
macro_area: "Analisi Matematica"
topic: "Topologia e funzioni"
difficulty: 2
tags:
  - "analisi matematica"
  - "studio di funzioni"
  - "dominio"
  - "simmetrie delle funzioni"
  - "segno della funzione"
  - "quinto anno"
---
# Problem Text
Data la funzione reale di variabile reale $f: \mathbb{R} \to \mathbb{R}$ definita da:

$$
f(x) = \frac{x^2 - 4}{e^{x^2}}
$$

determinare:
1. Il dominio della funzione.
2. La parità o disparità della funzione, indicando la simmetria geometrica del grafico.
3. Le coordinate dei punti di intersezione del grafico con gli assi cartesiani.
4. Gli intervalli di positività e negatività della funzione (studio del segno).

# Solution
Procediamo con l'analisi sistematica delle proprietà fondamentali della funzione.

---

### 1. Determinazione del dominio

La funzione è espressa da una frazione in cui:
- Il numeratore $x^2 - 4$ è un polinomio, definito per ogni $x \in \mathbb{R}$.
- Il denominatore $e^{x^2}$ è una funzione esponenziale, definita per ogni $x \in \mathbb{R}$.

Affinché la frazione sia definita, il denominatore deve essere diverso da zero. Sappiamo dalla teoria delle funzioni esponenziali che l'esponenziale è strettamente positivo per qualsiasi valore reale dell'esponente:

$$
e^{x^2} > 0, \quad \forall x \in \mathbb{R}
$$

Di conseguenza, il denominatore non si annulla mai. Il dominio della funzione coincide quindi con tutto l'asse reale:

$$
D = \mathbb{R}
$$

In termini di intervalli, possiamo scrivere:

$$
D = (-\infty, +\infty)
$$

---

### 2. Studio della parità o disparità (simmetria)

Per studiare le simmetrie del grafico della funzione, verifichiamo la relazione tra $f(-x)$ e $f(x)$:

$$
f(-x) = \frac{(-x)^2 - 4}{e^{(-x)^2}}
$$

Poiché l'elevamento al quadrato di un numero negativo produce un valore positivo, si ha $(-x)^2 = x^2$. Sostituendo:

$$
f(-x) = \frac{x^2 - 4}{e^{x^2}} = f(x)
$$

Dato che $f(-x) = f(x)$ per ogni $x \in D$, la funzione è **pari**.

**Significato geometrico**:
Il grafico della funzione è simmetrico rispetto all'asse delle ordinate (asse $y$). Questo ci permette di limitare lo studio della funzione all'intervallo $[0, +\infty)$ e poi ribaltare specularmente i risultati ottenuti per ascisse negative.

---

### 3. Intersezione con gli assi cartesiani

Troviamo i punti in cui il grafico interseca gli assi cartesiani.

- **Intersezione con l'asse delle ordinate (asse $y$)**:
Si ottiene ponendo $x = 0$ nell'equazione della funzione:

$$
f(0) = \frac{0^2 - 4}{e^{0^2}} = \frac{-4}{e^0} = \frac{-4}{1} = -4
$$

Il grafico interseca l'asse $y$ nel punto:

$$
A(0, -4)
$$

- **Intersezioni con l'asse delle ascisse (asse $x$)**:
Si ottengono ponendo $f(x) = 0$:

$$
\frac{x^2 - 4}{e^{x^2}} = 0
$$

Una frazione si annulla quando il suo numeratore è nullo (sotto le condizioni di esistenza, qui sempre verificate):

$$
x^2 - 4 = 0 \implies x^2 = 4 \implies x = \pm 2
$$

Il grafico interseca l'asse $x$ in due punti simmetrici:

$$
B(-2, 0) \quad \text{e} \quad C(2, 0)
$$

---

### 4. Studio del segno della funzione

Studiamo gli intervalli in cui la funzione è positiva imponendo la disuguaglianza:

$$
f(x) > 0 \implies \frac{x^2 - 4}{e^{x^2}} > 0
$$

Studiamo separatamente il segno del numeratore e del denominatore:

- **Numeratore ($N > 0$)**:

$$
x^2 - 4 > 0 \implies x < -2 \quad \text{oppure} \quad x > 2
$$

- **Denominatore ($D > 0$)**:

$$
e^{x^2} > 0, \quad \forall x \in \mathbb{R}
$$

Poiché il denominatore è sempre positivo, il segno della frazione è determinato interamente dal segno del numeratore.

Otteniamo quindi la seguente ripartizione del segno della funzione:
- **Funzione positiva** ($f(x) > 0$): il grafico è posizionato sopra l'asse $x$ negli intervalli di ascisse estranei ai punti di intersezione:

$$
x \in (-\infty, -2) \cup (2, +\infty)
$$

- **Funzione negativa** ($f(x) < 0$): il grafico si trova sotto l'asse $x$ nell'intervallo compreso tra i punti di intersezione:

$$
x \in (-2, 2)
$$

- **Funzione nulla** ($f(x) = 0$): in corrispondenza delle intersezioni con l'asse $x$:

$$
x = -2 \quad \text{e} \quad x = 2
$$
