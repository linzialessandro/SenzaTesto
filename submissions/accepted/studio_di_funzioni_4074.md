---
year: 5
macro_area: "Analisi Matematica"
topic: "Studio di funzioni"
difficulty: 2
ai_generated: true
tags:
  - "studio di funzione"
  - "monotonia"
  - "flessi"
  - "massimi e minimi"
  - "limiti"
---
# Problem Text
Si studi l'andamento della funzione reale di variabile reale 

$$
f(x) = \frac{\ln(x)}{x}
$$

determinandone il dominio di definizione, le intersezioni con gli assi, i limiti agli estremi con gli eventuali asintoti, gli intervalli di monotonia con gli estremi relativi e assoluti, la concavità e i punti di flesso, al fine di tracciarne il grafico qualitativo.

# Solution
1. **Dominio, simmetrie e segno**: Il dominio naturale della funzione, per l'esistenza del logaritmo, è $D = (0, +\infty)$. Non vi sono simmetrie (la funzione non è né pari né dispari poiché il dominio non è simmetrico rispetto all'origine). 
Si studia il segno ponendo:

$$
f(x) \ge 0 \iff \ln(x) \ge 0 \iff x \ge 1
$$

La funzione interseca l’asse delle ascisse nel punto $A(1, 0)$. Non vi sono intersezioni con l'asse delle ordinate in quanto $0 \notin D$.

2. **Limiti ed asintoti**:
Nel punto di accumulazione $x = 0^+$, si ha:

$$
\lim_{x \to 0^+} \frac{\ln(x)}{x} = \left[\frac{-\infty}{0^+}\right] = -\infty
$$

La retta di equazione $x = 0$ è un asintoto verticale destro.
Per $x \to +\infty$, applicando il teorema di de l'Hôpital per risolvere la forma indeterminata $\left[\frac{\infty}{\infty}\right]$, si ottiene:

$$
\lim_{x \to +\infty} \frac{\ln(x)}{x} = \lim_{x \to +\infty} \frac{\frac{1}{x}}{1} = 0
$$

La retta di equazione $y = 0$ è un asintoto orizzontale destro.

3. **Monotonia ed estremi relativi**: La funzione è derivabile in $D$. Calcoliamo la derivata prima:

$$
f'(x) = \frac{\frac{1}{x} \cdot x - \ln(x) \cdot 1}{x^2} = \frac{1 - \ln(x)}{x^2}
$$

Applichiamo il criterio di monotonia ponendo $f'(x) \ge 0$:

$$
1 - \ln(x) \ge 0 \iff \ln(x) \le 1 \iff 0 < x \le e
$$

- $f(x)$ è strettamente crescente in $(0, e]$;
- $f(x)$ è strettamente decrescente in $[e, +\infty)$.
In $x = e$ la derivata prima si annulla e cambia segno da positiva a negativa; per il primo criterio dei punti stazionari, il punto $M\left(e, \frac{1}{e}\right)$ è un massimo relativo e assoluto.

4. **Concavità e flessi**: Calcoliamo la derivata seconda:

$$
f''(x) = \frac{-\frac{1}{x} \cdot x^2 - (1 - \ln(x)) \cdot 2x}{x^4} = \frac{-x - 2x + 2x\ln(x)}{x^4} = \frac{2\ln(x) - 3}{x^3}
$$

Applichiamo il criterio di concavità studiando il segno di $f''(x) \ge 0$ in $D$:

$$
2\ln(x) - 3 \ge 0 \iff \ln(x) \ge \frac{3}{2} \iff x \ge e^{3/2}
$$

- La funzione è concava verso il basso in $(0, e^{3/2}]$;
- La funzione è concava verso l'alto (convessa) in $[e^{3/2}, +\infty)$.
Nel punto stazionario di concavità $x = e^{3/2}$ la derivata seconda si annulla cambiando segno; si ha dunque un punto di flesso obliqo discendente in $F\left(e^{3/2}, \frac{3}{2e^{3/2}}\right)$.

5. **Tracciamento della curva**: Unendo le informazioni, si deduce il grafico della funzione: per valori prossimi allo zero cresce rapidamente da $-\infty$, interseca l'asse delle ascisse in $A(1,0)$, raggiunge il massimo nel punto $M\left(e, e^{-1}\right)$ con tangente orizzontale, prosegue decrescendo e cambiando concavità nel punto di flesso $F$ per poi adagiarsi asintoticamente all'asse delle ascisse per $x \to +\infty$.
