---
year: 4
macro_area: "Geometria dello spazio (Stereometria)"
topic: "Poliedri e solidi di rotazione"
difficulty: 4
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: recycle_rejected
  generated_at: "2026-08-23T13:05:00+00:00"
tags:
  - "stereometria"
  - "prisma"
  - "sezione piana"
  - "volume"
  - "teorema di Pitagora"
---
# Problem Text
Un prisma retto ha per base un triangolo rettangolo isoscele $ABC$, con cateti $AB = AC = a$. Il piano passante per l'ipotenusa di base $BC$ e per il vertice $A'$ dell'altra base (corrispondente al vertice $A$ dell'angolo retto) seziona il prisma formando un triangolo $A'BC$ di area $a^2\sqrt{2}$. Determina il volume del prisma in funzione di $a$.

# Solution
Sia $ABC$ la base inferiore del prisma retto, con $AB = AC = a$ e $\angle BAC = 90^\circ$.
L'ipotenusa di base misura:
$$
BC = \sqrt{a^2 + a^2} = a\sqrt{2}.
$$
L'area del triangolo di base $ABC$ è:
$$
\text{Area}(ABC) = \frac{1}{2} \cdot AB \cdot AC = \frac{1}{2} a^2.
$$
Indichiamo con $h = AA'$ l'altezza del prisma (distanza tra le due basi).
Consideriamo la sezione triangolare $A'BC$:
- Poiché il prisma è retto, gli spigoli laterali sono perpendicolari alla base, dunque $A'B = \sqrt{a^2+h^2}$ e $A'C = \sqrt{a^2+h^2}$. Il triangolo $A'BC$ è quindi isoscele su base $BC$.
- Sia $M$ il punto medio dell'ipotenusa $BC$. Nel triangolo $ABC$, la mediana relativa all'ipotenusa è anche altezza e misura:
$$
AM = \frac{BC}{2} = \frac{a\sqrt{2}}{2}.
$$
- Lo spigolo $AA'$ è perpendicolare al piano di base e quindi a $AM$. Nel triangolo rettangolo $A'AM$, l'altezza $A'M$ del triangolo $A'BC$ è:
$$
A'M = \sqrt{AA'^2 + AM^2} = \sqrt{h^2 + \left(\frac{a\sqrt{2}}{2}\right)^2} = \sqrt{h^2 + \frac{a^2}{2}}.
$$

L'area della sezione triangolare $A'BC$ è:
$$
\text{Area}(A'BC) = \frac{1}{2} \cdot BC \cdot A'M = \frac{1}{2} \cdot a\sqrt{2} \cdot \sqrt{h^2 + \frac{a^2}{2}}.
$$
Uguagliando al valore assegnato $a^2\sqrt{2}$:
$$
\frac{1}{2} \cdot a\sqrt{2} \cdot \sqrt{h^2 + \frac{a^2}{2}} = a^2\sqrt{2} \iff \sqrt{h^2 + \frac{a^2}{2}} = 2a.
$$
Elevando al quadrato:
$$
h^2 + \frac{a^2}{2} = 4a^2 \iff h^2 = \frac{7a^2}{2} \iff h = \frac{a\sqrt{14}}{2}.
$$

Il volume $V$ del prisma è dato dal prodotto dell'area di base per l'altezza:
$$
V = \text{Area}(ABC) \cdot h = \left(\frac{1}{2} a^2\right) \cdot \left(\frac{a\sqrt{14}}{2}\right) = \frac{a^3\sqrt{14}}{4}.
$$
Il volume del prisma è pertanto $\frac{a^3\sqrt{14}}{4}$.
