---
year: 5
macro_area: Analisi Matematica
topic: Integrali definiti e teorema della media
difficulty: 4
tags:
  - integrali definiti
  - teorema della media
  - primitiva
  - torricelli-barrow
  - significato geometrico
ai_generated: true
---
# Problem Text
Si consideri la funzione reale di variabile reale definita nell'intervallo $[0, 3]$ da:
$$f(x) = \frac{1}{\sqrt{x + 1}}$$

1. Calcolare l'integrale definito della funzione nell'intervallo $[0, 3]$ applicando il Teorema Fondamentale del Calcolo Integrale (formula di Torricelli-Barrow).
2. Enunciare il Teorema della Media per gli integrali definiti e determinare il valore medio $\mu$ della funzione nell'intervallo dato.
3. Trovare il punto (o i punti) $c \in [0, 3]$ la cui esistenza è garantita dal Teorema della Media.
4. Illustrare il significato geometrico del risultato ottenuto, confrontando l'area sottesa alla curva con l'area di un opportuno rettangolo.

# Solution
1. **Calcolo dell'integrale definito:**

Per il Teorema Fondamentale del Calcolo Integrale, se $f(x)$ è continua in $[a, b]$ e $F(x)$ è una sua primitiva, allora:
$$\int_{a}^{b} f(x) \, dx = [F(x)]_a^b = F(b) - F(a)$$

Risolviamo preliminarmente l'integrale indefinito per determinare una primitiva della funzione $f(x) = (x + 1)^{-1/2}$:
$$F(x) = \int \frac{1}{\sqrt{x + 1}} \, dx = \int (x + 1)^{-1/2} \, dx$$
Utilizzando la regola di integrazione delle funzioni composte di tipo potenza $\int [g(x)]^\alpha \cdot g'(x) \, dx = \frac{[g(x)]^{\alpha + 1}}{\alpha + 1} + c$:
$$F(x) = \frac{(x + 1)^{-1/2 + 1}}{-1/2 + 1} = \frac{(x + 1)^{1/2}}{1/2} = 2\sqrt{x + 1}$$

Sostituiamo ora gli estremi di integrazione $a = 0$ e $b = 3$ per calcolare l'integrale definito:
$$\int_{0}^{3} \frac{1}{\sqrt{x + 1}} \, dx = \left[ 2\sqrt{x + 1} \right]_{0}^{3}$$
$$= 2\sqrt{3 + 1} - 2\sqrt{0 + 1}$$
$$= 2\sqrt{4} - 2\sqrt{1} = 2(2) - 2(1) = 4 - 2 = 2$$

---

2. **Enunciato del Teorema della Media e calcolo del valore medio $\mu$:**

* **Enunciato:**
Se una funzione $f(x)$ è continua in un intervallo chiuso e limitato $[a, b]$, allora esiste almeno un punto $c \in [a, b]$ tale che il valore della funzione in $c$ è uguale al valore medio $\mu$ della funzione nell'intervallo:
$$f(c) = \mu = \frac{1}{b - a} \int_{a}^{b} f(x) \, dx$$

* **Calcolo del valore medio $\mu$:**
Applicando la definizione con $[a, b] = [0, 3]$ e l'integrale calcolato al punto 1, otteniamo:
$$\mu = \frac{1}{3 - 0} \int_{0}^{3} \frac{1}{\sqrt{x + 1}} \, dx = \frac{1}{3} \cdot 2 = \frac{2}{3}$$
Il valore medio della funzione nell'intervallo $[0, 3]$ è $\mu = \frac{2}{3}$.

---

3. **Determinazione del punto $c$:**

Poiché la funzione $f(x)$ è continua nell'intervallo $[0, 3]$, il Teorema della Media garantisce l'esistenza di un punto $c \in [0, 3]$ tale che $f(c) = \mu$.
Impostiamo l'equazione:
$$f(c) = \frac{2}{3} \implies \frac{1}{\sqrt{c + 1}} = \frac{2}{3}$$

Invertiamo entrambi i membri dell'equazione:
$$\sqrt{c + 1} = \frac{3}{2}$$

Elevando al quadrato ambo i membri (operazione lecita poiché entrambi i membri sono positivi):
$$c + 1 = \frac{9}{4}$$
$$c = \frac{9}{4} - 1 = \frac{5}{4} = 1{,}25$$

Il punto trovato è $c = \frac{5}{4}$. Poiché esso appartiene all'intervallo chiuso $[0, 3]$, è il punto cercato.

---

4. **Significato geometrico:**

La funzione $f(x) = \frac{1}{\sqrt{x + 1}}$ assume valori strettamente positivi nell'intervallo $[0, 3]$. 

* **Area del trapezoide:**
L'integrale definito calcolato al punto 1 rappresenta l'area della regione di piano (trapezoide) compresa tra il grafico della funzione $f(x)$, l'asse delle ascisse $x$ e le rette verticali $x = 0$ e $x = 3$:
$$\text{Area}(R) = 2$$

* **Significato del Teorema della Media:**
Il Teorema della Media esprime un'equivalenza geometrica: l'area del trapezoide sopra descritto è esattamente uguale all'area di un rettangolo avente la stessa base di lunghezza $b - a = 3 - 0 = 3$ e come altezza il valore medio della funzione $\mu = \frac{2}{3}$:
$$\text{Area del rettangolo} = \text{base} \cdot \text{altezza} = (3 - 0) \cdot \mu = 3 \cdot \frac{2}{3} = 2$$

Il punto $c = \frac{5}{4}$ rappresenta l'ascissa in cui l'altezza reale della curva interseca l'altezza costante del rettangolo equivalente. In altri termini, l'altezza del rettangolo coincide con il valore assunto dalla funzione nel punto $c$: $f(c) = \frac{2}{3}$. Geometricamente, le aree in eccesso e in difetto della curva rispetto alla linea orizzontale $y = \frac{2}{3}$ si compensano esattamente.
