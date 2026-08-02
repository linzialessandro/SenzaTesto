---
type: Compliance
title: EU AI Act Article 50 — SenzaTesto transparency compliance
description: Internal memo — conservative (label + mark) posture for a hobby open-source educational database.
timestamp: 2026-08-02T22:00:00Z
status: active
---

# EU AI Act Article 50 — Compliance Memo (SenzaTesto)

**Project:** hobby, free open-source math exercise database for Italian schools.  
**Funding:** donations only (may partly cover API costs).  
**Stance (user decision 2026-08-02):** **maximum practical certainty** — visible IA labels on AI text **and** machine-readable provenance; sample human review documented. Prefer over-disclosure over residual interpretive risk.  
**Not legal advice.**

---

## 1. Roles (clarified)

| Actor | Role for Art. 50 | Notes |
|-------|------------------|--------|
| **DeepSeek (or other LLM host)** | Provider of the generative AI **model / API system** | SenzaTesto does **not** provide DeepSeek. Contributors call the third-party API with **their own key (BYOK)**. |
| **SenzaTesto** | **Deployer** of third-party generative AI when using/publishing outputs under the project; publisher of educational text | Open-sources **integration scripts**, not the model. |
| **Open-source scripts** (`generate_and_pr.py`) | Tooling that formats API outputs into Markdown + PR | Not a hosted chatbot; no SenzaTesto-operated inference for end users. |
| **End users (students/teachers)** | Consumers of static exercises | **No** direct AI interaction on the website (policy: no chatbots unless future donations enable a separate, disclosed feature). |
| **Editorial owner** | Alessandro Linzi | Authority to approve / reject content before live DB. |

**Art. 50(1):** Out of scope while there is no direct two-way AI UI. If a chatbot is ever added, disclose AI at first interaction.

---

## 2. Generation and publication flows

```
[A] AI generation (BYOK DeepSeek etc.)
    generate_and_pr.py → pending/*.md (ai_generated + provenance)
    → PR → human review (sample for bulk) → merge
    → validate_submissions.py → populate_from_md.py → public site
    → UI shows purple "IA" badge on each ai_generated exercise

[B] Human-authored Markdown (e.g. community / named series without AI flag)
    → same gates; no IA badge if ai_generated is false/absent

[C] Standard editing (LaTeX/YAML fixes)
    → not substantial generation; no new marking duty for that step alone
```

---

## 3. Article-by-article (conservative posture)

### 3.1 Art. 50(1) — Interaction disclosure

| Verdict | **Pass** |
|---------|----------|
| Rationale | No live AI on site. Offline BYOK is obvious to the script user. |
| Future | Chatbot / in-browser generation → mandatory first-interaction notice. |

### 3.2 Art. 50(2) — Machine-readable marking

| Verdict | **Addressed for new AI outputs; full hardening by 2 Dec 2026** |
|---------|------------------------------------------------------------------|
| Rationale | Pipeline online before 2 Aug 2026 → transitional period to **2 Dec 2026** for synthetic-output marks on pre-existing systems. |
| Measure | YAML provenance (`lib/provenance.py`): `ai_generated`, `content_origin`, `provenance.{schema,method,provider,model,pipeline,generated_at}`. |
| Scope note | Marks apply to **outputs of the generation tooling**. Model-level watermarks remain DeepSeek’s domain. Pre-2 Aug 2026 content need not be retroactively re-marked (Commission FAQ); optional enrichment later. |

### 3.3 Art. 50(4) — Public text labelling

| Verdict | **Pass via explicit visible labelling (primary path)** |
|---------|--------------------------------------------------------|
| Rationale | Hobby operator prefers **no reliance** on interpretive carve-outs. Even if “public interest” is debatable for school exercises, **visible IA badges** remove the main residual risk of “should have labelled.” |
| Measure | Purple **IA** badge on every exercise with `ai_generated: true` (browse grid + practice session). Project-level notice in Info/About. |
| Secondary | Sample human review still documented for quality and good practice (`sample-review-2026-08-02.md`), not as a substitute for labels. |

### 3.4 Art. 50(3)

| Verdict | **N/A** |

---

## 4. Human sample review (done)

See **`docs/compliance/sample-review-2026-08-02.md`**.

- Stratified sample: **20** exercises (4 per year 1–5).  
- Result: **20/20** mathematically OK; no batch rejection from this sample.  
- Policy for future AI PRs: sample ≥ max(4, 10% of batch) before merge.

---

## 5. Visible notices (wording)

| Surface | Wording / behaviour |
|---------|---------------------|
| Exercise card / practice | Badge **IA** + tooltip that text is AI-generated/produced (Art. 50 transparency) |
| Info modal | Box “Trasparenza sui contenuti”: many exercises AI-generated/assisted, labelled IA; human validation; no on-site chatbot |
| README / CONTRIBUTING | AI possible; labelled; human gate before public DB |
| SEO description | Mentions AI-assisted content is labelled |

---

## 6. Checklist

See `art50-pipeline-checklist.md` (updated for label-mandatory path).

---

## 7. Residual risks after this posture

With **visible labels + machine-readable provenance + no chatbot + not claiming to be DeepSeek’s provider**, residual legal risk is **low** for a free hobby educational site. Remaining items are mostly edge cases, not open compliance holes:

| # | Item | Level | Notes |
|---|------|-------|-------|
| 1 | Public-interest scope of 50(4) | **Mitigated** | Labels applied regardless of interpretation |
| 2 | Bulk review quality | **Managed** | Sample review done; policy for future PRs |
| 3 | Provider of DeepSeek? | **Closed for our facts** | We are not; BYOK + open-source client only |
| 4 | YAML vs future CoP tech | **Low–medium until Dec 2026** | Keep watching CoP; extend marks if needed |
| 5 | Future chatbot | **Controlled** | Policy: only if funded; then 50(1) notice |
| 6 | Downstream copy-paste strips badge | **Inherent to free text** | Source files + UI labels on *our* site |
| 7 | Missing `ai_generated` on old AI files | **Data hygiene** | ~548 true / ~462 unflagged (mostly human series). If any old AI file lacks the flag, badge won’t show — optional audit later |

**Absolute certainty in a court sense does not exist without counsel;** this stack is the **maximum practical certainty** available to a hobby maintainer without changing product identity beyond clear IA labelling.

---

## 8. Code of Practice

Practical alignment (honest origin, marks, labels). Formal signature optional.

---

## 9. Pass summary

| Obligation | Status |
|------------|--------|
| 50(1) | Pass (no interactive AI) |
| 50(2) | New outputs marked; timeline to 2 Dec 2026 |
| 50(4) | **Visible IA labels** (primary); sample review documented |
| Audit | This memo + sample review + checklist |
