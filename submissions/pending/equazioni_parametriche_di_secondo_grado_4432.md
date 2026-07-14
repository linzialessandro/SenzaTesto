---
year: 2
macro_area: "Algebra"
topic: "Equazioni parametriche di secondo grado"
difficulty: 3
ai_generated: true
tags:
  - "Equazioni di secondo grado"
  - "Equazioni parametriche"
  - "Relazioni tra radici e coefficienti"
  - "Regola di Cartesio"
  - "Secondo anno"
---
# Problem Text
Determinare per quali valori del parametro reale $k$ l'equazione di secondo grado:

$$x^2 - 2(k-1)x + k^2 - 3 = 0$$

ammette due soluzioni reali discordi tali che la somma dei loro quadrati sia pari a $14$.

# Solution
Per risolvere il problema, analizziamo le condizioni richieste passo dopo passo.

**1. Condizione per avere soluzioni reali discordi**
Due soluzioni reali $x_1$ e $x_2$ sono discordi (ossia di segno opposto) se e solo se il loro prodotto è strettamente negativo ($x_1 \cdot x_2 < 0$).
Dalle relazioni tra i coefficienti e le soluzioni di un'equazione di secondo grado, sappiamo che il prodotto delle soluzioni è dato da:

$$x_1 \cdot x_2 = \frac{c}{a} = k^2 - 3$$

Imponiamo che tale prodotto sia negativo:

$$k^2 - 3 < 0 \implies -\sqrt{3} < k < \sqrt{3}$$

*Nota pedagogica:* Se il prodotto delle soluzioni è negativo ($ac < 0$), il discriminante dell'equazione è automaticamente positivo ($\Delta = b^2 - 4ac > 0$). Infatti, calcolando il discriminante ridotto:

$$\frac{\Delta}{4} = [-(k-1)]^2 - 1 \cdot (k^2 - 3) = k^2 - 2k + 1 - k^2 + 3 = 4 - 2k$$

Dato che $k < \sqrt{3} < 2$, si ha sempre $4 - 2k > 0$. Pertanto, nell'intervallo trovato le soluzioni sono sempre reali e distinte.

**2. Relazione sulla somma dei quadrati delle soluzioni**
Vogliamo che $x_1^2 + x_2^2 = 14$. Esprimiamo la somma dei quadrati in funzione della somma $s = x_1 + x_2$ e del prodotto $p = x_1 \cdot x_2$ mediante la seguente identità algebrica:

$$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2$$

Ricordando che la somma delle soluzioni è:

$$x_1 + x_2 = -\frac{b}{a} = 2(k-1)$$

Sostituiamo le espressioni nell'identità e imponiamo l'uguaglianza a $14$:

$$[2(k-1)]^2 - 2(k^2 - 3) = 14$$

Sviluppiamo i calcoli algebrici:

$$4(k^2 - 2k + 1) - 2k^2 + 6 = 14$$

$$4k^2 - 8k + 4 - 2k^2 + 6 = 14$$

$$2k^2 - 8k + 10 = 14 \implies 2k^2 - 8k - 4 = 0$$

Dividendo tutti i termini per $2$, otteniamo l'equazione di secondo grado nel parametro $k$:

$$k^2 - 4k - 2 = 0$$

Applichiamo la formula risolutiva ridotta per trovare i valori di $k$:

$$k = 2 \pm \sqrt{(-2)^2 - 1 \cdot (-2)} = 2 \pm \sqrt{4 + 2} = 2 \pm \sqrt{6}$$

**3. Verifica dell'accettabilità**
Dobbiamo verificare quali tra i valori trovati appartengono all'intervallo richiesto dalle condizioni di realtà e segno delle soluzioni, cioè $-\sqrt{3} < k < \sqrt{3}$:
- Per $k_1 = 2 + \sqrt{6} \approx 2 + 2.45 = 4.45$: questo valore è maggiore di $\sqrt{3} \approx 1.73$, quindi non è accettabile.
- Per $k_2 = 2 - \sqrt{6} \approx 2 - 2.45 = -0.45$: poiché $-1.73 < -0.45 < 1.73$, il valore si trova nell'intervallo richiesto.

L'unico valore del parametro accettabile è:

$$k = 2 - \sqrt{6}$$
