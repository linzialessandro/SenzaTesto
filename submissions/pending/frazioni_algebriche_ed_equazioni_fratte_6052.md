---
year: 2
macro_area: "Algebra"
topic: "Frazioni algebriche ed equazioni fratte"
difficulty: 2
ai_generated: true
tags:
  - "frazioni algebriche"
  - "equazioni fratte"
  - "condizioni di esistenza"
---
# Problem Text
Risolvi la seguente equazione fratta, prestando attenzione alle condizioni di esistenza (C.E.):

$$
\frac{x}{x-3} - 3 = \frac{9}{x^2 - 3x}
$$

# Solution
**Fase 1: Scomposizione dei denominatori e definizione delle Condizioni di Esistenza (C.E.)**

Scomponiamo il denominatore del secondo membro racchiudendo la $x$ a fattor comune:

$$
x^2 - 3x = x(x-3)
$$

Le condizioni di esistenza impongono che nessun denominatore si annulli:

$$
\text{C.E.: } x \neq 0 \quad \text{e} \quad x \neq 3
$$

**Fase 2: Ricerca del minimo comune multiplo (m.c.m.) ed eliminazione dei denominatori**

Il minimo comune multiplo tra i denominatori è $x(x-3)$. Moltiplichiamo entrambi i membri dell'equazione per il m.c.m., escludendo i valori vietati dalle C.E.:

$$
x \cdot x - 3 \cdot x(x-3) = 9
$$

**Fase 3: Svolgimento dei calcoli algebrici**

Risolviamo le moltiplicazioni e portiamo tutti i termini al primo membro:

$$
x^2 - 3x^2 + 9x = 9
$$

$$
-2x^2 + 9x - 9 = 0
$$

**Fase 4: Risoluzione dell'equazione di secondo grado**

Moltiplichiamo l'intera equazione per $-1$ per rendere positivo il coefficiente di grado massimo:

$$
2x^2 - 9x + 9 = 0
$$

Definiamo i coefficienti $a = 2$, $b = -9$, $c = 9$ e applichiamo la formula risolutiva:

$$
x = \frac{9 \pm \sqrt{(-9)^2 - 4 \cdot 2 \cdot 9}}{2 \cdot 2}
$$

$$
x = \frac{9 \pm \sqrt{81 - 72}}{4} = \frac{9 \pm 3}{4}
$$

**Fase 5: Calcolo delle soluzioni provvisorie e verifica delle C.E.**

Troviamo i due possibili valori per $x$:

$$
x_1 = \frac{9 + 3}{4} = \frac{12}{4} = 3
$$

$$
x_2 = \frac{9 - 3}{4} = \frac{6}{4} = \frac{3}{2}
$$

Confrontiamo ora i valori con le C.E. stabilite inizialmente ($x \neq 0$ e $x \neq 3$):
* $x_1 = 3$ **non è accettabile** perché viola la condizione $x \neq 3$.
* $x_2 = \frac{3}{2}$ **è accettabile** perché rispetta le C.E.

L'unica soluzione dell'equazione è:

$$
x = \frac{3}{2}
$$
