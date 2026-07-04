---
year: 4
macro_area: Esponenziali e Logaritmi
topic: Equazioni e disequazioni logaritmiche con cambiamento di base
difficulty: 3
tags:
  - esponenziali
  - logaritmi
  - cambiamento di base
  - disequazioni logaritmiche
  - condizioni di esistenza
---
# Problem Text
Il presente problema propone di verificare la comprensione dei concetti di logaritmo, delle loro proprietà algebriche fondamentali, delle formule di cambiamento di base, e della capacità di determinare rigorosamente il dominio delle soluzioni (C.E.) per equazioni e disequazioni logaritmiche.

**Quesito 1: Equazione logaritmica con cambiamento di base**
Risolvere la seguente equazione logaritmica:
$$\log_9(x^2 - 3) - \log_3(x-1) = 0$$

1. Determinare le condizioni di esistenza (C.E.) dell'equazione nel campo dei numeri reali.
2. Trasformare l'espressione mediante la formula di cambiamento di base e determinare l'insieme delle soluzioni dell'equazione, verificandone l'accettabilità.

**Quesito 2: Disequazione logaritmica con cambiamento di base**
Risolvere la seguente disequazione logaritmica:
$$\log_2(3x - 5) - \log_{\frac{1}{2}}(x-1) \ge 3$$

1. Ricavare le condizioni di esistenza (C.E.) necessarie per definire la disequazione.
2. Risolvere la disequazione, discutendo l'orientamento del verso della disequazione derivante dalla base logaritmica utilizzata, e dedurre l'insieme delle soluzioni accettabili.

# Solution
Si fornisce lo svolgimento completo e dettagliato passo dopo passo di entrambi i quesiti.

---

### Svolgimento del Quesito 1: Equazione logaritmica

$$\log_9(x^2 - 3) - \log_3(x-1) = 0$$

**1. Determinazione delle Condizioni di Esistenza (C.E.)**
Per la definizione stessa di logaritmo, gli argomenti di ogni termine logaritmico devono essere strettamente positivi:
$$
\begin{cases}
x^2 - 3 > 0 \\
x - 1 > 0
\end{cases}
$$

Risolviamo individualmente le due disequazioni:
* $x^2 - 3 > 0 \implies x < -\sqrt{3} \quad \lor \quad x > \sqrt{3}$ (valori esterni alle radici dell'equazione associata)
* $x - 1 > 0 \implies x > 1$

Andando ad intersecare i due intervalli di operatività:
* Poiché $\sqrt{3} \approx 1.732$, la condizione $x > \sqrt{3}$ esclude interamente l'intervallo $x < -\sqrt{3}$ e restringe la condizione $x > 1$ al solo semiasse:
$$\text{C.E.: } x > \sqrt{3}$$

**2. Risoluzione dell'equazione**
Per risolvere l'equazione, uniformiamo le basi dei logaritmi portandole a base 3. Utilizziamo la formula del cambiamento di base $\log_a(b) = \frac{\log_c(b)}{\log_c(a)}$:
$$\log_9(x^2 - 3) = \frac{\log_3(x^2 - 3)}{\log_3(9)}$$

Sapendo che $9 = 3^2$, si ha $\log_3(9) = 2$, quindi:
$$\log_9(x^2 - 3) = \frac{1}{2}\log_3(x^2 - 3)$$

Sostituiamo questa relazione nell'equazione di partenza:
$$\frac{1}{2}\log_3(x^2 - 3) - \log_3(x-1) = 0 \implies \frac{1}{2}\log_3(x^2 - 3) = \log_3(x-1)$$

Moltiplichiamo entrambi i membri per $2$:
$$\log_3(x^2 - 3) = 2\log_3(x-1)$$

Utilizziamo la proprietà delle potenze dei logaritmi $n\log_a(b) = \log_a(b^n)$ sul membro di destra:
$$\log_3(x^2 - 3) = \log_3((x-1)^2)$$

Poiché la base dei logaritmi è la stessa (pari a 3), uguagliamo i rispettivi argomenti:
$$x^2 - 3 = (x-1)^2$$

Sviluppiamo il quadrato di binomio al secondo membro:
$$x^2 - 3 = x^2 - 2x + 1$$

Semplifichiamo il termine di secondo grado $x^2$ da ambo le parti e isoliamo l'incognita $x$:
$$-3 = -2x + 1 \implies 2x = 4 \implies x = 2$$

**Verifica di accettabilità:**
Confrontiamo la soluzione trovata $x = 2$ con le Condizioni di Esistenza (C.E. $x > \sqrt{3}$):
Poiché $2 > \sqrt{3} \approx 1.732$, la soluzione è pienamente accettabile.

L'insieme delle soluzioni dell'equazione è:
$$\mathcal{S} = \{2\}$$

---

### Svolgimento del Quesito 2: Disequazione logaritmica

$$\log_2(3x - 5) - \log_{\frac{1}{2}}(x-1) \ge 3$$

**1. Determinazione delle Condizioni di Esistenza (C.E.)**
Imponiamo la positività degli argomenti dei due logaritmi presenti:
$$
\begin{cases}
3x - 5 > 0 \\
x - 1 > 0
\end{cases} \implies \begin{cases}
x > \frac{5}{3} \\
x > 1
\end{cases}
$$

Poiché $\frac{5}{3} \approx 1.67 > 1$, la soluzione del sistema, e quindi l'insieme delle C.E., è data da:
$$\text{C.E.: } x > \frac{5}{3}$$

**2. Risoluzione della disequazione**
Effettuiamo il cambiamento di base del secondo termine da base $\frac{1}{2}$ a base $2$. Sfruttando la formula di cambiamento di base (o la proprietà degli esponenti alla base $\log_{a^n}(b) = \frac{1}{n}\log_a(b)$ con $a = 2$, $n=-1$):
$$\log_{\frac{1}{2}}(x-1) = \frac{\log_2(x-1)}{\log_2(1/2)} = \frac{\log_2(x-1)}{-1} = -\log_2(x-1)$$

Sostituiamo nella disequazione:
$$\log_2(3x - 5) - \left(-\log_2(x-1)\right) \ge 3 \implies \log_2(3x-5) + \log_2(x-1) \ge 3$$

Applichiamo la proprietà della somma di logaritmi aventi la stessa base $\log_a(B) + \log_a(C) = \log_a(B \cdot C)$:
$$\log_2\left[(3x-5)(x-1)\right] \ge 3$$

Poiché la base è $2 > 1$, la funzione logaritmica è strettamente crescente. Possiamo quindi passare alla disuguaglianza tra gli argomenti mantenendo immutato il verso della disequazione:
$$(3x-5)(x-1) \ge 2^3 \implies (3x-5)(x-1) \ge 8$$

Sviluppiamo il prodotto algebrico a primo membro:
$$3x^2 - 3x - 5x + 5 \ge 8 \implies 3x^2 - 8x - 3 \ge 0$$

Risolviamo l'equazione associata di secondo grado $3x^2 - 8x - 3 = 0$ per determinare i punti di transizione:
$$\Delta = b^2 - 4ac = (-8)^2 - 4 \cdot 3 \cdot (-3) = 64 + 36 = 100 \implies \sqrt{\Delta} = 10$$
$$x_{1,2} = \frac{8 \pm 10}{6} \implies x_1 = -\frac{2}{6} = -\frac{1}{3} \quad \text{e} \quad x_2 = \frac{18}{6} = 3$$

La disequazione quadratica ha coefficiente di $x^2$ positivo ($3>0$) ed ha perciò soluzioni esterne rispetto all'intervallo delle radici:
$$x \le -\frac{1}{3} \quad \lor \quad x \ge 3$$

**Intersezione con le Condizioni di Esistenza (C.E.)**
Per ricavare le soluzioni della disequazione logaritmica originaria dobbiamo intersecare l'insieme trovato con le C.E.:
$$
\begin{cases}
x \le -\frac{1}{3} \quad \lor \quad x \ge 3 \\
x > \frac{5}{3}
\end{cases}
$$

Rappresentando graficamente l'intersezione:
* La parte $x \le -\frac{1}{3}$ viene completamente scartata poiché i suoi valori sono negativi, mentre le C.E. richiedono valori strettamente positivi superiori a $\frac{5}{3} \approx 1.67$.
* L'intervallo $x \ge 3$ si trova interamente a destra di $\frac{5}{3}$ ed è pertanto interamente accettato.

L'insieme finale delle soluzioni accettabili della disequazione è:
$$\mathcal{S} = [3, +\infty) \quad \text{ovvero} \quad x \ge 3$$
