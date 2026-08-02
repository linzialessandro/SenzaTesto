# Sample human review of published exercises — 2026-08-02

**Purpose:** Substantive mathematical examination (Art. 50(4) process quality + project QA).  
**Method:** Stratified random sample, 4 exercises per curriculum year (1–5), seed `42`.  
**Reviewer role:** Agent acting for maintainer QA (math check of problem + solution).  
**Editorial owner:** Alessandro Linzi (merge/import authority unchanged).

## Corpus snapshot

| Metric | Value |
|--------|------:|
| Files in `submissions/accepted/` | 1010 |
| With `ai_generated: true` | 548 |
| Without `ai_generated` flag (treated as human / not labelled IA in UI) | 462 |
| Sample size | 20 (≈2% overall; balanced by year) |

## Sample list and outcomes

| File | Year | Math verdict | Notes |
|------|------|--------------|-------|
| `calcolo_letterale_5496.md` | 1 | **OK** | Factorisation \(x^3-3x^2-4x+12=(x-3)(x-2)(x+2)\) verified |
| `nicolo_cangiotti_equazioni_simple_3.md` | 1 | **OK** | \(x=-1/4\) |
| `nicolo_cangiotti_monomi_simple_C_2.md` | 1 | **OK** | Result \(3x\) |
| `nicolo_cangiotti_numeri_simple_1.md` | 1 | **OK** | Nested sets \(\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}\) |
| `equazioni_letterali_di_primo_grado_5915.md` | 2 | **OK** | Parametric cases \(a\neq3\Rightarrow x=2\); \(a=3\) identity |
| `nicolo_cangiotti_R_C_3.md` | 2 | **OK** | Lines meet at \((1,0)\); not perpendicular |
| `nicolo_cangiotti_disequazioni_IeII_C_6.md` | 2 | **OK** | \(x\in[-1,4]\) |
| `poliedri_3107.md` | 2 | **OK** | Pyramid: apothem 13, \(A_t=360\,\mathrm{cm}^2\) |
| `3_anno_iperbole_01.md` | 3 | **OK** | Vertices \((\pm4,0)\); asymptotes \(y=\pm\frac{3}{4}x\) |
| `anno3_irrazionali_01.md` | 3 | **OK** | \(\sqrt{2x+3}=x+2\Rightarrow x=-1\) accepted |
| `equazioni_e_disequazioni_irrazionali_8452.md` | 3 | **OK** | Domain + \(\sqrt{A}\le B\); \(S=(1,+\infty)\) |
| `indici_di_tendenza_centrale_e_di_dispersione_3424.md` | 3 | **OK** | Population \(\sigma=2\) (divisor \(N=5\)) |
| `4_anno_esponenziali_01.md` | 4 | **OK** | \(2^{3x-1}=16\Rightarrow x=5/3\) |
| `anno4_probabilita_bayes_01.md` | 4 | **OK** | Bayes \(P(M_2\|D)=3/8\) |
| `disequazioni_di_grado_superiore_e_fratte_7949.md` | 4 | **OK** | \([-2,0)\cup[2,3)\) |
| `disequazioni_logaritmiche_1340.md` | 4 | **OK** | \(S=(\sqrt{3},3]\) |
| `5_anno_limiti_notevoli_01.md` | 5 | **OK** | \(\lim\sin(3x)/(2x)=3/2\) |
| `solidi_di_rotazione_inscritti_e_circoscritti_8121.md` | 5 | **OK** | Cone in sphere; \(h/R\in\{1,\varphi\}\) algebra checked |
| `teorema_della_media_integrale_2641.md` | 5 | **OK** | \(c=e^{1/(e-1)}\in(1,e)\) |
| `teoremi_sulle_funzioni_continue_9206.md` | 5 | **OK** | IVT on \([0,1]\): \(f(0)=-1\), \(f(1)=3\) |

## Summary

- **20 / 20** sample exercises: problem and solution mathematically consistent; no rejections required from this sample.
- Sample includes both `ai_generated: true` files and human-style contributions without the flag (Nicolo Cangiotti series).
- This does **not** certify all 1010 files; it is a deliberate **substantive sample** for process documentation. Future bulk AI PRs should re-run a similar sample before merge (see `art50-pipeline-checklist.md`).

## Follow-up policy

1. New AI batches: sample ≥4 items or ≥10% of the PR (whichever larger), multi-year if possible.  
2. On systematic errors: reject or fix-forward the batch.  
3. UI labels every `ai_generated: true` exercise with the **IA** badge (browse + practice).
