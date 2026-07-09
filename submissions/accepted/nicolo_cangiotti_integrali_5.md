---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali"
difficulty: 2
tags:
  - "integrale definito"
  - "funzioni goniometriche"
  - "simmetrie"
---
# Problem Text
Calcolare il seguente integrale definito:
$$ \int_{-\pi}^{\pi} \sin(x)\cdot\cos(x) \,\textrm{d}x $$

# Solution
L'integrale proposto si presta a essere calcolato in due modi differenti: in modo diretto tramite una formula duplicazione, oppure sfruttando elegantemente le proprietà di simmetria delle funzioni (parità/disparità).

**Metodo 1: Considerazioni di simmetria (più rapido)**
Valutiamo la parità della funzione integranda $$f(x) = \sin(x)\cos(x)$$.
Calcoliamo $$f(-x)$$:
$$ f(-x) = \sin(-x)\cos(-x) = (-\sin x)(\cos x) = -\sin(x)\cos(x) = -f(x) $$
Dato che $$f(-x) = -f(x)$$, la funzione è **dispari**.
Le funzioni dispari, se integrate su un intervallo simmetrico rispetto all'origine del tipo $$[-a, a]$$ (in questo caso $$[-\pi, \pi]$$), forniscono sempre come risultato dell'integrale definito il valore **0**, poiché l'area positiva si annulla perfettamente con l'area negativa.
$$ \int_{-\pi}^{\pi} \sin(x)\cdot\cos(x) \,\textrm{d}x = 0 $$

**Metodo 2: Calcolo della primitiva**
Dalle formule di duplicazione del seno sappiamo che $$2\sin(x)\cos(x) = \sin(2x)$$. Quindi:
$$ \sin(x)\cos(x) = \frac{1}{2}\sin(2x) $$
Sostituendo:
$$ \frac{1}{2} \int_{-\pi}^{\pi} \sin(2x) \, dx $$
Una primitiva di $$\sin(2x)$$ è $$-\frac{1}{2}\cos(2x)$$. Perciò otteniamo:
$$ \left[ \frac{1}{2} \left(-\frac{1}{2}\cos(2x)\right) \right]_{-\pi}^{\pi} = -\frac{1}{4} \left[ \cos(2x) \right]_{-\pi}^{\pi} $$
Applicando il teorema fondamentale del calcolo:
$$ -\frac{1}{4} (\cos(2\pi) - \cos(-2\pi)) = -\frac{1}{4} (1 - 1) = 0 $$
Il risultato è confermato.
