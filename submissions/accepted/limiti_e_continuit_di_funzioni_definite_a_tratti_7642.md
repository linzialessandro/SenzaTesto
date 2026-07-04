---
year: 5
macro_area: Limiti e Continuità
topic: Limiti e continuità di funzioni definite a tratti
difficulty: 3
tags:
  - limiti
  - continuità
  - funzioni a tratti
  - punti di discontinuità
  - verifica limiti
---
# Problem Text
Il presente problema propone di approfondire i concetti di limite e continuità attraverso tre quesiti indipendenti: la verifica formale di un limite tramite la definizione, lo studio di continuità per una funzione a tratti parametrica e la classificazione completa dei punti di discontinuità.

**Parte 1: Verifica di un limite con la definizione formale**
Si utilizzi la definizione matematica di limite per verificare la validità dell'uguaglianza:
$$\lim_{x \to +\infty} \frac{2x + 1}{x - 1} = 2$$

**Parte 2: Continuità di una funzione definita a tratti con parametri**
Si consideri la seguente funzione definita a tratti:
$$
g(x) = \begin{cases}
a \cdot \frac{\sin(2x)}{x} + 1 & \text{se } x < 0 \\
3 & \text{se } x = 0 \\
b \cdot e^x + \ln(x+1) & \text{se } x > 0
\end{cases}
$$
Determinare per quali valori dei parametri reali $a$ e $b$ la funzione $g(x)$ è continua nel punto $x = 0$.

**Parte 3: Ricerca e classificazione dei punti di discontinuità**
Si analizzi la funzione $h(x)$ definita come segue:
$$
h(x) = \begin{cases}
\frac{1}{x} & \text{se } x < 1 \text{ e } x \neq 0 \\
\frac{x^2 - 4}{x^2 - 2x} & \text{se } x \ge 1 \text{ e } x \neq 2
\end{cases}
$$
1. Determinare il dominio di definizione $\mathcal{D}$ della funzione $h(x)$.
2. Individuare tutti i punti in cui la funzione non è continua (o non è definita) e classificarne la tipologia di discontinuità (prima specie, seconda specie, terza specie o eliminabile) calcolando i relativi limiti destro e sinistro. Se applicabile, indicare il valore del "salto".

# Solution
Ecco lo svolgimento completo e dettagliato passo dopo passo per ciascuna delle parti del problema.

---

### Parte 1: Verifica di un limite con la definizione formale

Dobbiamo verificare che:
$$\lim_{x \to +\infty} \frac{2x + 1}{x - 1} = 2$$

Per la definizione matematica, il limite all'infinito è verificato se, per ogni $\varepsilon > 0$, esiste un numero reale $M > 0$ tale che, per ogni $x > M$ appartenente al dominio della funzione, sia soddisfatta la disuguaglianza:
$$\left| \frac{2x + 1}{x - 1} - 2 \right| < \varepsilon$$

Iniziamo semplificando l'espressione all'interno del valore assoluto:
$$\left| \frac{2x + 1 - 2(x - 1)}{x - 1} \right| < \varepsilon \implies \left| \frac{2x + 1 - 2x + 2}{x - 1} \right| < \varepsilon \implies \left| \frac{3}{x - 1} \right| < \varepsilon$$

Dato che stiamo studiando il comportamento per $x \to +\infty$, possiamo assumere con certezza $x > 1$. Sotto questa ipotesi, l'argomento del valore assoluto è strettamente positivo poiché il numeratore è $3 > 0$ e il denominatore è $x - 1 > 0$, dunque possiamo rimuovere il valore assoluto:
$$\frac{3}{x - 1} < \varepsilon$$

Risolviamo ora la disuguaglianza rispetto a $x$, tenendo conto che sia il numeratore che il denominatore sono positivi:
$$x - 1 > \frac{3}{\varepsilon} \implies x > 1 + \frac{3}{\varepsilon}$$

Abbiamo trovato che la disuguaglianza è soddisfatta per ogni $x > 1 + \frac{3}{\varepsilon}$.
Possiamo quindi scegliere come valore di $M$:
$$M = 1 + \frac{3}{\varepsilon}$$

Poiché, fissato arbitrariamente un $\varepsilon > 0$, siamo sempre in grado di determinare un numero reale positivo $M = 1 + \frac{3}{\varepsilon}$ tale che per ogni $x > M$ si ha $\left| \frac{2x + 1}{x - 1} - 2 \right| < \varepsilon$, il limite è formalmente **verificato**.

---

### Parte 2: Continuità di una funzione definita a tratti con parametri

La funzione $g(x)$ è definita come:
$$
g(x) = \begin{cases}
a \cdot \frac{\sin(2x)}{x} + 1 & \text{se } x < 0 \\
3 & \text{se } x = 0 \\
b \cdot e^x + \ln(x+1) & \text{se } x > 0
\end{cases}
$$

Per definizione, la funzione $g(x)$ è continua nel punto $x = 0$ se e solo se esistono finiti il limite sinistro e il limite destro per $x \to 0$, ed essi coincidono con il valore assunto dalla funzione nel punto stesso. In formule:
$$\lim_{x \to 0^-} g(x) = \lim_{x \to 0^+} g(x) = g(0)$$

Dal testo sappiamo che:
$$g(0) = 3$$

**1. Calcolo del limite sinistro ($x \to 0^-$):**
Per $x < 0$, la funzione è definita dalla prima espressione:
$$\lim_{x \to 0^-} g(x) = \lim_{x \to 0^-} \left( a \cdot \frac{\sin(2x)}{x} + 1 \right)$$

Per valutare questo limite, riconduciamoci al limite notevole $\lim_{u \to 0} \frac{\sin(u)}{u} = 1$ moltiplicando e dividendo per $2$ la frazione:
$$\lim_{x \to 0^-} \left( 2a \cdot \frac{\sin(2x)}{2x} + 1 \right) = 2a \cdot 1 + 1 = 2a + 1$$

**2. Calcolo del limite destro ($x \to 0^+$):**
Per $x > 0$, la funzione è definita dalla terza espressione:
$$\lim_{x \to 0^+} g(x) = \lim_{x \to 0^+} \left( b \cdot e^x + \ln(x+1) \right)$$

Trattandosi di una somma di funzioni continue in un intorno destro di $0$, possiamo calcolare il limite per sostituzione diretta:
$$\lim_{x \to 0^+} g(x) = b \cdot e^0 + \ln(0+1) = b \cdot 1 + \ln(1) = b + 0 = b$$

**3. Condizione di continuità:**
Imponiamo l'uguaglianza tra il limite sinistro, il limite destro e il valore $g(0)$:
$$2a + 1 = b = 3$$

Questo ci conduce a un sistema di due equazioni lineari:
$$
\begin{cases}
2a + 1 = 3 \\
b = 3
\end{cases} \implies \begin{cases}
2a = 2 \\
b = 3
\end{cases} \implies \begin{cases}
a = 1 \\
b = 3
\end{cases}
$$

In conclusione, la funzione $g(x)$ è continua nel punto $x = 0$ se e solo se **$a = 1$** e **$b = 3$**.

---

### Parte 3: Ricerca e classificazione dei punti di discontinuità

La funzione $h(x)$ è definita nel modo seguente:
$$
h(x) = \begin{cases}
\frac{1}{x} & \text{se } x < 1 \text{ e } x \neq 0 \\
\frac{x^2 - 4}{x^2 - 2x} & \text{se } x \ge 1 \text{ e } x \neq 2
\end{cases}
$$

**1. Determinazione del dominio $\mathcal{D}$**
Analizziamo le condizioni di esistenza per ciascuno dei due tratti della funzione:
* Per il primo tratto, definito su $x < 1$, l'espressione $\frac{1}{x}$ richiede che il denominatore sia diverso da zero, ovvero $x \neq 0$. Essendo $0 < 1$, il punto $x = 0$ va escluso dal dominio.
* Per il secondo tratto, definito su $x \ge 1$, l'espressione $\frac{x^2 - 4}{x^2 - 2x}$ non è definita se il denominatore si annulla:
  $$x^2 - 2x = 0 \implies x(x - 2) = 0 \implies x = 0 \quad \lor \quad x = 2$$
  Poiché questo tratto è valido solo per $x \ge 1$, l'unico punto critico da considerare è $x = 2$ (mentre $x = 0$ ricade già nell'altro intervallo). Dunque il punto $x = 2$ va escluso dal dominio.

Unendo i risultati, il dominio della funzione è l'insieme di tutti i numeri reali ad esclusione di $0$ e $2$:
$$\mathcal{D} = \mathbb{R} \setminus \{0, 2\} = (-\infty, 0) \cup (0, 2) \cup (2, +\infty)$$

I punti candidati ad essere punti di discontinuità sono i punti di esclusione dal dominio, $x = 0$ e $x = 2$, unito al punto di "raccordo" o cambio di definizione della funzione a tratti, ossia $x = 1$.

**2. Classificazione dei singoli punti**

* **Comportamento in $x = 0$ (punto fuori dal dominio):**
Poiché ci troviamo in un intorno di $0$ che è interamente contenuto nell'intervallo $x < 1$, utilizziamo l'espressione $h(x) = \frac{1}{x}$. Calcoliamo i limiti laterali:
$$\lim_{x \to 0^-} h(x) = \lim_{x \to 0^-} \frac{1}{x} = -\infty$$
$$\lim_{x \to 0^+} h(x) = \lim_{x \to 0^+} \frac{1}{x} = +\infty$$

Poiché entrambi i limiti laterali sono infiniti, il punto $x = 0$ è un **punto di discontinuità di seconda specie** (chiamata anche discontinuità infinita).

* **Comportamento in $x = 1$ (punto interno al dominio):**
La funzione è definita nel punto $x = 1$ grazie alla seconda espressione:
$$h(1) = \frac{1^2 - 4}{1^2 - 2(1)} = \frac{1 - 4}{1 - 2} = \frac{-3}{-1} = 3$$

Calcoliamo ora il limite sinistro e il limite destro per verificare la continuità:
* Limite sinistro ($x \to 1^-$): usiamo l'espressione del primo tratto:
$$\lim_{x \to 1^-} h(x) = \lim_{x \to 1^-} \frac{1}{x} = \frac{1}{1} = 1$$
* Limite destro ($x \to 1^+$): usiamo l'espressione del secondo tratto:
$$\lim_{x \to 1^+} h(x) = \lim_{x \to 1^+} \frac{x^2 - 4}{x^2 - 2x} = 3$$

I limiti destro e sinistro esistono entrambi finiti ma assumono due valori diversi ($1 \neq 3$). Pertanto, $x = 1$ è un **punto di discontinuità di prima specie** (chiamata anche discontinuità con salto).
Il valore del salto della funzione è la differenza in valore assoluto tra i due limiti:
$$\text{Salto} = \left| \lim_{x \to 1^+} h(x) - \lim_{x \to 1^-} h(x) \right| = |3 - 1| = 2$$

* **Comportamento in $x = 2$ (punto fuori dal dominio):**
In un intorno di $2$ siamo nel tratto $x \ge 1$ con $x \neq 2$. Calcoliamo il limite:
$$\lim_{x \to 2} h(x) = \lim_{x \to 2} \frac{x^2 - 4}{x^2 - 2x}$$

Sostituendo direttamente otteniamo la forma indeterminata $\left[\frac{0}{0}\right]$. Scomponiamo numeratore e denominatore per eliminare l'indeterminazione:
$$\lim_{x \to 2} \frac{(x - 2)(x + 2)}{x(x - 2)}$$

Semplificando il fattore comune $(x - 2)$ (lecito poiché nel calcolo del limite consideriamo $x \neq 2$):
$$\lim_{x \to 2} \frac{x + 2}{x} = \frac{2 + 2}{2} = \frac{4}{2} = 2$$

Il limite per $x \to 2$ esiste ed ha un valore finito pari a $2$, ma la funzione non è definita in quel punto ($2 \notin \mathcal{D}$). Pertanto, il punto $x = 2$ rappresenta un **punto di discontinuità di terza specie** (chiamata anche discontinuità eliminabile).

*Nota: La discontinuità si definisce "eliminabile" perché basterebbe ridefinire la funzione ponendo $h(2) = 2$ per renderla continua anche in quel punto.*
