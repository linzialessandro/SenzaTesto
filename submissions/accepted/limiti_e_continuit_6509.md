---
year: 5
macro_area: "Analisi Matematica"
topic: "Limiti e Continuit\u00e0"
difficulty: 4
ai_generated: true
tags:
  - "limiti"
  - "definizione di limite"
  - "verifica di limite"
  - "continuit\u00e0"
---
# Problem Text
Si verifichi, mediante la definizione metrica ($\varepsilon-\delta$) di limite, che:

$$
\lim_{x \to 1} \frac{\sqrt{x+3} - 2}{x - 1} = \frac{1}{4}
$$

determinando un opportuno intorno di $x = 1$ in funzione di $\varepsilon > 0$.

# Solution
Per verificare il limite tramite la definizione, occorre mostrare che per ogni $\varepsilon > 0$ esiste un $\delta > 0$ tale che, per ogni $x$ nel dominio con $0 < |x - 1| < \delta$, valga la disuguaglianza:

$$
\left| \frac{\sqrt{x+3} - 2}{x - 1} - \frac{1}{4} \right| < \varepsilon
$$

Per $x \neq 1$, razionalizziamo il numeratore del primo termine:

$$
\frac{\sqrt{x+3} - 2}{x - 1} = \frac{(\sqrt{x+3} - 2)(\sqrt{x+3} + 2)}{(x - 1)(\sqrt{x+3} + 2)} = \frac{x + 3 - 4}{(x - 1)(\sqrt{x+3} + 2)} = \frac{1}{\sqrt{x+3} + 2}
$$

Sostituendo nell'espressione in modulo:

$$
\left| \frac{1}{\sqrt{x+3} + 2} - \frac{1}{4} \right| = \left| \frac{4 - (\sqrt{x+3} + 2)}{4(\sqrt{x+3} + 2)} \right| = \frac{|2 - \sqrt{x+3}|}{4(\sqrt{x+3} + 2)}
$$

Razionalizziamo ulteriormente il numeratore $|2 - \sqrt{x+3}|$:

$$
|2 - \sqrt{x+3}| = \frac{|4 - (x+3)|}{2 + \sqrt{x+3}} = \frac{|1 - x|}{\sqrt{x+3} + 2} = \frac{|x - 1|}{\sqrt{x+3} + 2}
$$

Si ottiene così l'identità:

$$
\left| \frac{\sqrt{x+3} - 2}{x - 1} - \frac{1}{4} \right| = \frac{|x - 1|}{4(\sqrt{x+3} + 2)^2}
$$

Restringiamo la ricerca ad un intorno limitato di $x = 1$, ad esempio $|x - 1| < 1$, ovvero $x \in (0, 2)$. Per $x > 0$, si ha $\sqrt{x+3} > \sqrt{3}$, da cui $\sqrt{x+3} + 2 > 3$. Pertanto:

$$
4(\sqrt{x+3} + 2)^2 > 4 \cdot 3^2 = 36 \implies \frac{1}{4(\sqrt{x+3} + 2)^2} < \frac{1}{36}
$$

Possiamo dunque maggiorare:

$$
\frac{|x - 1|}{4(\sqrt{x+3} + 2)^2} < \frac{|x - 1|}{36}
$$

Imponendo $\frac{|x - 1|}{36} < \varepsilon$, si ricava $|x - 1| < 36\varepsilon$. 

Scegliendo $\delta = \min(1, 36\varepsilon) > 0$, l'intorno forato $I = (1 - \delta, 1 + \delta) \setminus \{1\}$ soddisfa la definizione. Il limite è così verificato.
