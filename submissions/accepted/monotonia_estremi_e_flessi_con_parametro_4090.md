---
year: 5
macro_area: "Studio di funzione e Ottimizzazione"
topic: "Monotonia, estremi e flessi con parametro"
difficulty: 4
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:28:27+00:00"
tags:
  - "studio di funzione"
  - "derivate"
  - "flessi"
  - "massimi e minimi"
  - "parametro"
---
# Problem Text
Data la funzione $f(x) = x^4 - 2k x^2 + k^2$, con $k \in \mathbb{R}$, determina per quali valori di $k$ essa ammette due punti di flesso e, in corrispondenza, discuti il numero e la natura dei punti stazionari.

# Solution
Calcoliamo le derivate prima e seconda.
$$f'(x) = 4x^3 - 4kx = 4x(x^2 - k)$$
$$f''(x) = 12x^2 - 4k = 4(3x^2 - k)$$
Punti di flesso: $f''(x)=0 \iff 3x^2 = k \iff x^2 = k/3$. Per avere due soluzioni reali distinte serve $k>0$. In tal caso $x = \pm \sqrt{k/3}$ e $f''$ cambia segno (parabola in $x$ con concavità verso l'alto). Quindi due flessi se e solo se $k>0$.
Punti stazionari: $f'(x)=0 \iff 4x(x^2 - k)=0 \iff x=0$ oppure $x^2 = k$.
- Se $k<0$: $x^2=k$ non ha soluzioni reali, quindi unico punto stazionario $x=0$. $f''(0) = -4k >0$ (poiché $k<0$), quindi $x=0$ è minimo relativo (e assoluto).
- Se $k=0$: $f'(x)=4x^3$, unico punto stazionario $x=0$. $f''(0)=0$, ma $f'(x)$ cambia segno da negativa a positiva in $x=0$, quindi $x=0$ è minimo relativo (e assoluto).
- Se $k>0$: tre punti stazionari: $x=0$, $x=\pm \sqrt{k}$. $f''(0) = -4k <0$ => massimo relativo; $f''(\pm\sqrt{k}) = 12k - 4k = 8k >0$ => minimi relativi.
In conclusione: per $k>0$ la funzione ha due flessi e tre punti stazionari (1 massimo, 2 minimi); per $k\le 0$ non ha flessi e ha un solo punto stazionario (minimo).
