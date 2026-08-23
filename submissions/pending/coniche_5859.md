---
year: 3
macro_area: "Coniche"
topic: "Coniche"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:59:19+00:00"
tags:
  - "coniche"
  - "circonferenza"
  - "tangenza"
  - "perpendicolare"
  - "distanza punto-retta"
---
# Problem Text
Determina le equazioni delle circonferenze passanti per i punti $A(0,0)$ e $B(4,0)$ e tangenti alla retta $r: y = x + 1$.

# Solution
Il centro deve appartenere all'asse del segmento $AB$. Poiché $A(0,0)$ e $B(4,0)$ hanno ascissa diversa e ordinata nulla, il punto medio è $M(2,0)$ e l'asse del segmento è la retta verticale $x=2$. Quindi il centro $C$ ha coordinate $C(2,k)$.

Il raggio è la distanza da $C$ a $A$: $r = \sqrt{(2-0)^2 + (k-0)^2} = \sqrt{4+k^2}$.

La distanza da $C$ alla retta $r: y=x+1$, cioè $x-y+1=0$, è $d = \dfrac{|2-k+1|}{\sqrt{2}} = \dfrac{|3-k|}{\sqrt{2}}$.

Per la tangenza, $d = r$, quindi $\dfrac{|3-k|}{\sqrt{2}} = \sqrt{4+k^2}$. Elevando al quadrato:

$$
\frac{(3-k)^2}{2} = 4+k^2 \quad\Rightarrow\quad 9-6k+k^2 = 8+2k^2 \quad\Rightarrow\quad k^2+6k-1=0
$$

Risolvendo:

$$
k = \frac{-6 \pm \sqrt{36+4}}{2} = -3 \pm \sqrt{10}
$$

Otteniamo due cerchi. L'equazione del cerchio è $(x-2)^2+(y-k)^2 = 4+k^2$, che espandendo dà $x^2+y^2-4x-2ky=0$. Sostituendo i due valori di $k$:
- Per $k=-3+\sqrt{10}$: $x^2+y^2-4x+(6-2\sqrt{10})y=0$
- Per $k=-3-\sqrt{10}$: $x^2+y^2-4x+(6+2\sqrt{10})y=0$

Quindi le due circonferenze richieste sono:

$$
x^2+y^2-4x+(6-2\sqrt{10})y=0 \quad\text{e}\quad x^2+y^2-4x+(6+2\sqrt{10})y=0
$$
