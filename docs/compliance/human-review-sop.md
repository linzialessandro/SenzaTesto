# Human review & editorial responsibility (SOP)

Supports **quality control** and good practice before public release.  
**Labelling policy (2026-08-02):** AI text is **also** labelled with a visible **IA** badge on the site (Art. 50(4) “safe path”). Review is **not** used as a substitute for labels.

## 1. Editorial responsibility

| Item | Value |
|------|--------|
| Responsible person | Alessandro Linzi |
| Contact | alessandro.linzi.phd@icloud.com |
| Authority | Approve, request changes, or reject any exercise before it appears in the live database |
| Record | Git history (PR merge commits), `submissions/accepted/`, optional PR review comments |

Delegates (if any) must have sufficient mathematics knowledge and act under the same standards; ultimate responsibility remains with the named editor unless formally reassigned in AUTHORS/README.

## 2. What “substantive” review means

Reviewers **must** check substance, not only form:

1. **Mathematical correctness** of the problem statement and final answer.
2. **Solution validity** — steps consistent with the problem; no invented theorems or wrong algebra for the curriculum year.
3. **Curriculum fit** — year, macro-area, topic appropriate for Italian upper secondary.
4. **Difficulty** roughly aligned with the declared 1–5 scale.
5. **Pedagogical clarity** — readable Italian; solution usable by students/teachers.
6. **Integrity** — reject harmful, off-topic, or clearly hallucinated content.

**Not sufficient alone:** CI green, YAML valid, balanced `$$`, duplicate fingerprint OK, or “looks fine” without reading the maths.

## 3. Workflow

1. Author or AI pipeline places `.md` in `submissions/pending/` (usually via PR).
2. Automated gate: `validate_submissions.py`.
3. Human review (PR or offline for email submissions).
4. Merge only if substance is acceptable (or after requested fixes).
5. Maintainer runs `populate_from_md.py` (or equivalent) for production DB.
6. Files land in `submissions/accepted/` as the archival record of published sources.

## 4. Bulk AI PRs

For batches (e.g. 10–50 exercises):

- Spot-check a meaningful sample across years/topics (not only the first file).
- If multiple errors of the same class appear, reject or require regeneration/fix of the batch.
- Prefer smaller PRs when review capacity is limited.

## 5. Recording review

- **Default record:** GitHub PR approval/merge by the editor (or explicit “reviewed for maths content” comment).
- Email submissions: note in commit message when importing (e.g. `Import email submission; maths reviewed`).
- No need for a visible “reviewed by” stamp on the public exercise page.

## 6. Relation to automated tools

| Tool | Role |
|------|------|
| `validate_submissions.py` | Contract / safety gate |
| `validate_and_fix_pending.py` | Formatting hygiene (standard editing) |
| `populate_from_md.py` | Import only **after** human approval path |
| Human editor | Substantive review + legal editorial responsibility |
