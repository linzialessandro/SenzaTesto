---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate"
difficulty: 3
tags:
  - "continuità"
  - "derivabilità"
  - "funzioni definite a tratti"
  - "parametri"
---
# Problem Text
Determinare $$a,b \in \mathbb{R}$$ tale che 
$$
f(x)=\begin{cases}
a \cdot x^2+1  &\text{se } x\ge 1\\
b\cdot e^{-x+1}  &\text{se } x<1
\end{cases}
$$
sia una funzione continua e derivabile sui reali.

# Solution
Affinché la funzione sia globalmente continua e derivabile, deve esserlo nel suo punto critico di incollaggio, ovvero $$x = 1$$. Imposteremo un sistema lineare in due variabili (i parametri $$a$$ e $$b$$) per forzare il rispetto delle due condizioni.

**1. Condizione di continuità**
I limiti destro e sinistro a $$x=1$$ devono coincidere con il valore della funzione nel punto.
Il valore nel punto, che coincide col limite destro, è calcolato usando la prima equazione (essendo definita per $$\ge 1$$):
$$ f(1) = \lim_{x \to 1^+} (a \cdot x^2 + 1) = a(1)^2 + 1 = a + 1 $$
Il limite sinistro si calcola invece sul ramo inferiore:
$$ \lim_{x \to 1^-} b \cdot e^{-x+1} = b \cdot e^{-1+1} = b \cdot e^0 = b $$
Uguagliando si ottiene la prima equazione del sistema:
$$ a + 1 = b $$

**2. Condizione di derivabilità**
La derivabilità in un punto richiede che, oltre alla continuità, anche le derivate destra e sinistra coincidano. Calcoliamo la derivata prima generica per i due rami separati:
- Per $$x > 1$$: $$f'(x) = D[a \cdot x^2 + 1] = 2ax$$
- Per $$x < 1$$: $$f'(x) = D[b \cdot e^{-x+1}] = -b \cdot e^{-x+1}$$ (applicata la regola della catena all'esponente $$-x+1$$)

Valutiamo le due derivate nel punto $$x = 1$$:
- Limite della derivata destra: $$f'_+(1) = 2a(1) = 2a$$
- Limite della derivata sinistra: $$f'_-(1) = -b \cdot e^{-1+1} = -b \cdot e^0 = -b$$
Uguagliando si ottiene la seconda equazione del sistema:
$$ 2a = -b $$

**3. Risoluzione del sistema**
Le due condizioni generano il sistema:
$$
\begin{cases} b = a + 1 \\ b = -2a \end{cases}
$$
Procediamo per sostituzione:
$$ a + 1 = -2a \implies 3a = -1 \implies a = -\frac{1}{3} $$
Sostituendo il valore di $$a$$ trovato in una delle due equazioni per ottenere $$b$$:
$$ b = -2\left(-\frac{1}{3}\right) = \frac{2}{3} $$

La funzione è continua e derivabile per **$$a = -1/3$$** e **$$b = 2/3$$**.
