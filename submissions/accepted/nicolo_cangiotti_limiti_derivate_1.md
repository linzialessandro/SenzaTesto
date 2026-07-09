---
year: 5
macro_area: "Analisi Matematica"
topic: "Studio di Funzione"
difficulty: 2
tags:
  - "dominio"
  - "campo di esistenza"
  - "funzione irrazionale"
  - "funzione logaritmica"
---
# Problem Text
Determinare il campo di esistenza della seguente funzione:
$$ f(x) = \sqrt{\ln(x^2-1)} $$

# Solution
Per calcolare il dominio naturale (o campo di esistenza) di questa funzione, dobbiamo imporre contemporaneamente le condizioni di esistenza su tutte le operazioni critiche presenti:
1. **L'argomento del logaritmo deve essere strettamente positivo:**
   $$ x^2 - 1 > 0 $$
   Questa disequazione di secondo grado ammette radici $$x = \pm 1$$. Essendo il segno maggiore di zero, prendiamo gli intervalli esterni:
   $$ x < -1 \lor x > 1 $$
2. **L'argomento della radice quadrata deve essere maggiore o uguale a zero:**
   $$ \ln(x^2 - 1) \ge 0 $$
   Risolviamo la disequazione logaritmica ricordando che $$0 = \ln(1)$$ e che, essendo la base del logaritmo naturale $$e > 1$$, il verso della disequazione si conserva passando agli argomenti:
   $$ x^2 - 1 \ge 1 $$
   $$ x^2 - 2 \ge 0 $$
   Questa disequazione di secondo grado ammette radici $$x = \pm \sqrt{2}$$, ed essendo maggiore di zero, le soluzioni sono ancora gli intervalli esterni:
   $$ x \le -\sqrt{2} \lor x \ge \sqrt{2} $$

Il dominio complessivo è l'intersezione tra le due condizioni trovate (che formano un sistema).
Dato che i valori di $$\pm \sqrt{2} \approx \pm 1.41$$ sono più esterni rispetto a $$\pm 1$$, l'intersezione coincide con le limitazioni imposte dalla seconda condizione.
Il campo di esistenza è pertanto:
$$ \mathcal{D} = (-\infty, -\sqrt{2}] \cup [\sqrt{2}, +\infty) $$
