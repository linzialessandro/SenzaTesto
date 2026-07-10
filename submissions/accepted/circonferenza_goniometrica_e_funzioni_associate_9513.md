---
year: 4
macro_area: Trigonometria e Goniometria
topic: Circonferenza goniometrica e funzioni associate
difficulty: 3
tags:
  - circonferenza goniometrica
  - funzioni goniometriche
  - trasformazioni geometriche
  - grafici goniometrici
  - area triangolo
ai_generated: true
---
# Problem Text
Il presente problema si articola in tre parti indipendenti, volte ad esplorare le definizioni delle funzioni goniometriche sulla circonferenza goniometrica, la loro applicazione analitica e la loro interpretazione geometrica.

**Parte 1: Angoli, conversioni e definizioni goniometriche**
Si consideri l'angolo $\theta = 120^\circ$.
1. Convertire la misura dell'angolo $\theta$ da gradi sessagesimali a radianti.
2. Determinare i valori esatti di tutte le sei funzioni goniometriche fondamentali associate a questo angolo: seno, coseno, tangente, cotangente, secante e cosecante.
3. Descrivere brevemente la costruzione geometrica sulla circonferenza goniometrica per ciascuna delle sei funzioni goniometriche relative all'angolo dato.

**Parte 2: Studio e grafico di una funzione goniometrica**
Si consideri la funzione analitica:
$$f(x) = \sin\left(2x - \frac{\pi}{3}\right)$$
1. Determinare il dominio, il periodo $T$ e l'insieme delle immagini (codominio) della funzione $f(x)$.
2. Descrivere la sequenza di trasformazioni geometriche (traslazioni, contrazioni o dilatazioni) da applicare al grafico della funzione elementare $y = \sin(x)$ per ottenere il grafico di $f(x)$.
3. Studiare il comportamento di $f(x)$ nell'intervallo $[0, \pi]$ determinando:
   - le intersezioni con gli assi cartesiani;
   - i punti di massimo e minimo relativi, con le rispettive coordinate.
4. Tracciare un grafico qualitativo della funzione nell'intervallo $[0, \pi]$ evidenziando i punti notevoli trovati.

**Parte 3: Un'applicazione geometrica sulla circonferenza unitaria**
Nel piano cartesiano, sia $\Gamma$ la circonferenza goniometrica (avente centro nell'origine $O(0,0)$ e raggio $r=1$). Si definisca il punto fisso $B(0, 1)$ sul semiasse positivo delle ordinate e un punto mobile $P$ sulla circonferenza goniometrica, individuato dall'angolo $\alpha \in \left[0, \frac{\pi}{2}\right]$ formato dal raggio $OP$ con il semiasse positivo delle ascisse.
1. Esprimere l'area $S(\alpha)$ del triangolo $OPB$ in funzione di $\alpha$.
2. Determinare il valore massimo dell'area $S(\alpha)$ e l'angolo $\alpha$ (espresso sia in radianti che in gradi sessagesimali) per cui tale massimo si realizza, interpretando geometricamente la configurazione corrispondente.

# Solution
Ecco lo svolgimento dettagliato passo dopo passo per ciascuna delle tre parti del problema.

---

### Parte 1: Angoli, conversioni e definizioni goniometriche

**1. Conversione da gradi a radianti**
La relazione di proporzionalità che lega la misura in gradi $\theta$ e la misura in radianti $\alpha$ è data da:
$$\frac{\theta}{180^\circ} = \frac{\alpha}{\pi}$$

Sostituendo $\theta = 120^\circ$, otteniamo la misura in radianti:
$$\alpha = 120^\circ \cdot \frac{\pi}{180^\circ} = \frac{2}{3}\pi \text{ rad}$$

**2. Valori esatti delle sei funzioni goniometriche**
Sapendo che l'angolo si trova nel secondo quadrante (poiché $90^\circ < 120^\circ < 180^\circ$, ovvero $\frac{\pi}{2} < \frac{2}{3}\pi < \pi$), possiamo fare riferimento agli angoli associati del primo quadrante, sfruttando la relazione di riduzione al primo quadrante $\frac{2}{3}\pi = \pi - \frac{\pi}{3}$:

* **Seno**:
$$\sin\left(\frac{2}{3}\pi\right) = \sin\left(\pi - \frac{\pi}{3}\right) = \sin\left(\frac{\pi}{3}\right) = \frac{\sqrt{3}}{2}$$

* **Coseno**:
$$\cos\left(\frac{2}{3}\pi\right) = \cos\left(\pi - \frac{\pi}{3}\right) = -\cos\left(\frac{\pi}{3}\right) = -\frac{1}{2}$$

* **Tangente**:
$$\tan\left(\frac{2}{3}\pi\right) = \frac{\sin\left(\frac{2}{3}\pi\right)}{\cos\left(\frac{2}{3}\pi\right)} = \frac{\frac{\sqrt{3}}{2}}{-\frac{1}{2}} = -\sqrt{3}$$

* **Cotangente**:
$$\cot\left(\frac{2}{3}\pi\right) = \frac{1}{\tan\left(\frac{2}{3}\pi\right)} = -\frac{1}{\sqrt{3}} = -\frac{\sqrt{3}}{3}$$

* **Secante**:
$$\sec\left(\frac{2}{3}\pi\right) = \frac{1}{\cos\left(\frac{2}{3}\pi\right)} = \frac{1}{-\frac{1}{2}} = -2$$

* **Cosecante**:
$$\csc\left(\frac{2}{3}\pi\right) = \frac{1}{\sin\left(\frac{2}{3}\pi\right)} = \frac{1}{\frac{\sqrt{3}}{2}} = \frac{2}{\sqrt{3}} = \frac{2\sqrt{3}}{3}$$

**3. Costruzione geometrica sulla circonferenza goniometrica**
Data la circonferenza goniometrica $x^2 + y^2 = 1$ e la semiretta uscente dall'origine che forma un angolo di $120^\circ$ con il semiasse positivo delle ascisse:
* Il punto d'intersezione $P$ tra tale semiretta e la circonferenza ha coordinate $P(\cos\theta, \sin\theta) = \left(-\frac{1}{2}, \frac{\sqrt{3}}{2}\right)$. Dunque, il **coseno** rappresenta l'ascissa di $P$ e il **seno** rappresenta l'ordinata di $P$.
* Tracciando la retta tangente alla circonferenza nel punto d'origine degli archi $A(1,0)$, l'intersezione di questa con la retta $OP$ definisce il punto $T(1, \tan\theta) = (1, -\sqrt{3})$. La **tangente** è l'ordinata di questo punto di intersezione.
* Tracciando la retta tangente alla circonferenza nel punto $B(0,1)$, l'intersezione di questa con la retta $OP$ definisce il punto $C(\cot\theta, 1) = \left(-\frac{\sqrt{3}}{3}, 1\right)$. La **cotangente** è l'ascissa di questo punto.
* Tracciando la retta tangente alla circonferenza direttamente nel punto $P$, questa interseca l'asse delle ascisse nel punto $S(\sec\theta, 0) = (-2,0)$ e l'asse delle ordinate nel punto $R(0, \csc\theta) = \left(0, \frac{2\sqrt{3}}{3}\right)$. Pertanto, la **secante** rappresenta l'ascissa dell'intersezione con l'asse $x$, mentre la **cosecante** rappresenta l'ordinata dell'intersezione con l'asse $y$.

---

### Parte 2: Studio e grafico di una funzione goniometrica

**1. Dominio, periodo e codominio**
* **Dominio**: La funzione seno è definita per qualsiasi argomento reale, pertanto il dominio è l'intero insieme dei numeri reali: $\mathcal{D} = \mathbb{R}$.
* **Periodo**: La funzione seno elementare $y = \sin(u)$ ha periodo $2\pi$. Nel nostro caso, ponendo l'argomento $u = 2x - \frac{\pi}{3}$, il coefficiente $2$ moltiplicativo della variabile indipendente $x$ dimezza il periodo della funzione. Infatti, indicando con $T$ il periodo della funzione composta, abbiamo:
$$T = \frac{2\pi}{2} = \pi$$
* **Codominio**: Poiché l'immagine della funzione seno è sempre limitata all'intervallo $[-1, 1]$, anche la funzione composta $f(x)$ mantiene lo stesso intervallo delle immagini:
$$\text{Im}(f) = [-1, 1] \quad \text{ovvero} \quad -1 \le f(x) \le 1$$

**2. Trasformazioni geometriche**
Per ricostruire il grafico della funzione $f(x) = \sin\left(2x - \frac{\pi}{3}\right)$ partendo dalla funzione elementare $y = \sin(x)$, possiamo riscrivere l'espressione evidenziando lo sfasamento rispetto alla variabile $x$:
$$f(x) = \sin\left(2\left(x - \frac{\pi}{6}\right)\right)$$

La sequenza ordinata di trasformazioni è la seguente:
1. **Contrazione orizzontale**: Si applica un'omotezia orizzontale di fattore $\frac{1}{2}$ alla funzione $y = \sin(x)$, ottenendo $y = \sin(2x)$. Il periodo si riduce da $2\pi$ a $\pi$.
2. **Traslazione orizzontale**: Si trasla il grafico ottenuto verso destra di una quantità pari ad un'ampiezza di $\frac{\pi}{6}$. Sostituendo $x$ con $x - \frac{\pi}{6}$, si ottiene la funzione finale $f(x) = \sin\left(2x - \frac{\pi}{3}\right)$.

**3. Comportamento della funzione nell'intervallo $[0, \pi]$**

* **Intersezione con l'asse $y$ ($x = 0$):**
$$f(0) = \sin\left(2(0) - \frac{\pi}{3}\right) = \sin\left(-\frac{\pi}{3}\right) = -\sin\left(\frac{\pi}{3}\right) = -\frac{\sqrt{3}}{2}$$
Il punto di intersezione è $A\left(0, -\frac{\sqrt{3}}{2}\right) \approx (0, -0.87)$.

* **Intersezioni con l'asse $x$ ($f(x) = 0$):**
$$\sin\left(2x - \frac{\pi}{3}\right) = 0 \implies 2x - \frac{\pi}{3} = k\pi, \quad k \in \mathbb{Z}$$
Risolvendo rispetto a $x$:
$$2x = \frac{\pi}{3} + k\pi \implies x = \frac{\pi}{6} + k\frac{\pi}{2}$$

Selezioniamo i valori di $x$ appartenenti all'intervallo $[0, \pi]$:
* Per $k = 0$: $x_1 = \frac{\pi}{6} \approx 0.52$
* Per $k = 1$: $x_2 = \frac{\pi}{6} + \frac{\pi}{2} = \frac{2\pi}{3} \approx 2.09$
* Per $k = 2$: $x_3 = \frac{\pi}{6} + \pi = \frac{7\pi}{6}$ (fuori dall'intervallo considerato)
Le intersezioni nell'intervallo $[0, \pi]$ sono quindi identificate nei punti:
$$X_1\left(\frac{\pi}{6}, 0\right) \quad \text{e} \quad X_2\left(\frac{2\pi}{3}, 0\right)$$

* **Ricerca dei punti di massimo relativo:**
La funzione seno raggiunge il suo valore massimo $1$ quando il suo argomento è pari a $\frac{\pi}{2} + 2k\pi$:
$$2x - \frac{\pi}{3} = \frac{\pi}{2} + 2k\pi \implies 2x = \frac{\pi}{2} + \frac{\pi}{3} + 2k\pi \implies 2x = \frac{5\pi}{6} + 2k\pi$$
Dividendo per 2:
$$x = \frac{5\pi}{12} + k\pi$$
Nell'intervallo $[0, \pi]$, l'unico valore accettabile si ottiene per $k = 0$:
$$x_M = \frac{5\pi}{12} \approx 1.31 \text{ rad} \quad (75^\circ)$$
Il punto di massimo relativo (e assoluto) è quindi:
$$M\left(\frac{5\pi}{12}, 1\right)$$

* **Ricerca dei punti di minimo relativo:**
La funzione seno raggiunge il suo valore minimo $-1$ quando il suo argomento è pari a $\frac{3\pi}{2} + 2k\pi$ (ovvero $-\frac{\pi}{2} + 2k\pi$):
$$2x - \frac{\pi}{3} = -\frac{\pi}{2} + 2k\pi \implies 2x = -\frac{\pi}{2} + \frac{\pi}{3} + 2k\pi \implies 2x = -\frac{\pi}{6} + 2k\pi$$
Dividendo per 2:
$$x = -\frac{\pi}{12} + k\pi$$
Nell'intervallo $[0, \pi]$, l'unico valore accettabile si ottiene per $k = 1$:
$$x_N = -\frac{\pi}{12} + \pi = \frac{11\pi}{12} \approx 2.88 \text{ rad} \quad (165^\circ)$$
Il punto di minimo relativo (e assoluto) è quindi:
$$N\left(\frac{11\pi}{12}, -1\right)$$

* **Valore all'estremo destro del dominio considerato ($x = \pi$):**
$$f(\pi) = \sin\left(2\pi - \frac{\pi}{3}\right) = \sin\left(-\frac{\pi}{3}\right) = -\frac{\sqrt{3}}{2}$$
Il punto finale del grafico nell'intervallo è $B\left(\pi, -\frac{\sqrt{3}}{2}\right)$.

**4. Grafico qualitativo**
Il grafico descrive un'onda sinusoidale completa che nell'intervallo $[0, \pi]$:
- Inizia per $x=0$ dal valore ordinata $-\frac{\sqrt{3}}{2} \approx -0.87$.
- Sale intersecando l'asse delle ascisse in $x = \frac{\pi}{6}$ (circa $0.52$).
- Raggiunge il punto di massimo assoluto in $M\left(\frac{5\pi}{12}, 1\right)$ (circa $1.31$).
- Scende intersecando nuovamente l'asse delle ascisse in $x = \frac{2\pi}{3}$ (circa $2.09$).
- Continua a scendere fino a raggiungere il punto di minimo assoluto in $N\left(\frac{11\pi}{12}, -1\right)$ (circa $2.88$).
- Risale leggermente per terminare all'estremo $x = \pi$ toccando il valore $-\frac{\sqrt{3}}{2}$ (circa $-0.87$).

---

### Parte 3: Un'applicazione geometrica sulla circonferenza unitaria

**1. Espressione dell'area del triangolo $OPB$**
I vertici del triangolo sono l'origine degli assi cartesiani $O(0,0)$, il punto fisso $B(0,1)$ situato sull'asse $y$ e il punto mobile $P(\cos\alpha, \sin\alpha)$ situato nel primo quadrante con raggio vettore inclinato di $\alpha$.

Scegliamo come base del triangolo il segmento $OB$ situato sull'asse $y$:
$$\text{base} = \overline{OB} = 1$$

L'altezza $h$ relativa a questa base è determinata dalla distanza ortogonale dal punto $P$ all'asse delle ordinate (ovvero la retta che contiene il segmento $OB$). Tale altezza corrisponde in modulo alla coordinata $x$ del punto $P$:
$$\text{altezza} = h = |x_P| = |\cos\alpha|$$

Poiché l'angolo $\alpha$ appartiene al primo quadrante $\left[0, \frac{\pi}{2}\right]$, il suo coseno è sempre non negativo ($\cos\alpha \ge 0$). Pertanto, possiamo omettere il valore assoluto:
$$h = \cos\alpha$$

Applicando la formula classica dell'area del triangolo:
$$S(\alpha) = \frac{\text{base} \cdot \text{altezza}}{2} = \frac{1 \cdot \cos\alpha}{2} = \frac{1}{2}\cos\alpha$$

*(Nota alternativa geometrico-goniometrica: L'area si può ricavare con la formula trigonometrica applicata ai lati del triangolo $OP$ e $OB$ e all'angolo compreso $\beta = \angle POB$. Poiché $OB$ coincide con la direzione dell'asse $y$ e $OP$ forma un angolo $\alpha$ con il semiasse positivo $x$, l'angolo compreso è $\beta = \frac{\pi}{2} - \alpha$. Essendo inoltre $\overline{OP}=1$ e $\overline{OB}=1$, si ha: $S = \frac{1}{2} \cdot \overline{OP} \cdot \overline{OB} \cdot \sin\left(\frac{\pi}{2} - \alpha\right) = \frac{1}{2} \cdot 1 \cdot 1 \cdot \cos\alpha = \frac{1}{2}\cos\alpha$.)*

**2. Determinazione del valore massimo dell'area**
Dobbiamo massimizzare la funzione area $S(\alpha) = \frac{1}{2}\cos\alpha$ limitatamente all'intervallo $\alpha \in \left[0, \frac{\pi}{2}\right]$.
* La funzione coseno, studiata nell'intervallo $\left[0, \frac{\pi}{2}\right]$, è strettamente decrescente ed assume il suo valore massimo assoluto pari a $1$ quando il suo argomento è nullo:
$$\cos\alpha = 1 \implies \alpha = 0$$

* Pertanto, l'area massima $S_{\max}$ si realizza quando l'angolo $\alpha$ è pari a:
$$\alpha_{\text{rad}} = 0 \text{ rad} \quad \text{ovvero} \quad \alpha_{\text{deg}} = 0^\circ$$

* Il valore corrispondente per l'area massima è:
$$S_{\max} = S(0) = \frac{1}{2} \cdot 1 = \frac{1}{2}$$

**Interpretazione geometrica**:
Quando l'angolo $\alpha = 0$, il punto mobile $P$ viene a trovarsi sull'asse delle ascisse nel punto $A(1,0)$. In questa configurazione limite, il triangolo $OPB$ diventa il triangolo rettangolo isoscele di vertici $O(0,0)$, $A(1,0)$ e $B(0,1)$. I suoi cateti giacciono interamente sugli assi coordinati e misurano entrambi $1$, dando un'area pari a $\frac{1 \cdot 1}{2} = \frac{1}{2}$. Al crescere dell'angolo $\alpha$, il punto $P$ si avvicina progressivamente a $B(0,1)$; quando $\alpha = \frac{\pi}{2}$, $P$ coincide con $B$, il triangolo si contrae degenerando in un unico segmento sull'asse $y$, e l'area si annulla ($S = 0$).
