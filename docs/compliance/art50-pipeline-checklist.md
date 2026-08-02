# Article 50 pipeline checklist (label-first posture)

Run on **every** new generation batch, exercise PR, or database import.

## A. Generation (`generate_and_pr.py` or equivalent)

- [ ] Outputs under `submissions/pending/` (or PR targeting that path).
- [ ] Machine-readable marks for AI outputs:
  - [ ] `ai_generated: true`
  - [ ] `content_origin: artificial` (or `mixed` if heavily rewritten by a human)
  - [ ] `provenance` block (`schema`, `method`, `provider`, `model`, `pipeline`, `generated_at`)
- [ ] Human-only exercises: `ai_generated: false` / omit AI provenance (no IA badge).
- [ ] Do not hide AI origin in metadata.

## B. Validation (technical gate)

- [ ] `python scripts/validate_submissions.py submissions/pending` passes.
- [ ] CI still validates `accepted` + `pending` on deploy.

## C. Human review (quality + good practice)

- [ ] For AI batches: sample **≥ max(4, 10% of files)** across topics/years when possible.
- [ ] Check substance: problem correctness, solution validity, curriculum fit (not only YAML).
- [ ] Reject or fix systematic error classes.
- [ ] Merge implies editorial approval (Alessandro Linzi / designated maintainer).

## D. Publication / import

- [ ] Only approved content merged and imported via `populate_from_md.py`.
- [ ] `ai_generated` preserved into the database (drives the **IA** badge).
- [ ] After deploy: spot-check that an AI exercise shows the **IA** badge in browse and practice.

## E. Product policy

- [ ] **No on-site chatbot / live AI** without implementing Art. 50(1) first-interaction notice.
- [ ] SenzaTesto remains BYOK tooling + content host, **not** a provider of DeepSeek.
- [ ] New model provider → update `provenance.provider` / `model`.
