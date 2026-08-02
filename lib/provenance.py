"""Machine-readable provenance for AI-generated exercise Markdown.

Supports EU AI Act Article 50(2) transparency (machine-readable marking of
synthetic text) without affecting the rendered exercise pages. Provenance lives
only in YAML frontmatter consumed by validation, import, and audit tooling.

Schema (v1) — optional keys are validated when present:

    ai_generated: true
    content_origin: artificial   # artificial | human | mixed
    provenance:
      schema: senzatesto-provenance/v1
      method: llm                # llm | human | mixed
      provider: deepseek         # model host / API vendor
      model: deepseek-v4-flash
      pipeline: generate_and_pr
      generated_at: 2026-08-02T12:00:00+00:00

Notes:
- Human-authored exercises omit these fields (or set content_origin: human).
- The boolean `ai_generated` remains the DB/API flag for compatibility.
- This is not a cryptographic watermark; see docs/compliance/eu-ai-act-art50.md
  for the roadmap to 2 December 2026 and residual risks.
"""

from __future__ import annotations

from datetime import datetime, timezone
from typing import Any

PROVENANCE_SCHEMA = "senzatesto-provenance/v1"
CONTENT_ORIGINS = frozenset({"artificial", "human", "mixed"})
METHODS = frozenset({"llm", "human", "mixed"})


def utc_now_iso() -> str:
    """Return an ISO-8601 UTC timestamp with second precision."""
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def build_ai_provenance(
    *,
    provider: str,
    model: str,
    pipeline: str = "generate_and_pr",
    generated_at: str | None = None,
    extra: dict[str, Any] | None = None,
) -> dict[str, Any]:
    """Build frontmatter keys for fully AI-generated exercise content."""
    block: dict[str, Any] = {
        "schema": PROVENANCE_SCHEMA,
        "method": "llm",
        "provider": provider.strip(),
        "model": model.strip(),
        "pipeline": pipeline.strip(),
        "generated_at": generated_at or utc_now_iso(),
    }
    if extra:
        for key, value in extra.items():
            if key not in block and value is not None:
                block[key] = value
    return {
        "ai_generated": True,
        "content_origin": "artificial",
        "provenance": block,
    }


def format_provenance_yaml(provenance_fields: dict[str, Any]) -> str:
    """Serialize provenance fields as indented YAML lines (no outer ---).

    Keeps ordering stable and avoids PyYAML dependency in the generator path.
    """
    lines: list[str] = []
    if "ai_generated" in provenance_fields:
        lines.append(f"ai_generated: {str(provenance_fields['ai_generated']).lower()}")
    if "content_origin" in provenance_fields:
        lines.append(f"content_origin: {provenance_fields['content_origin']}")
    prov = provenance_fields.get("provenance")
    if isinstance(prov, dict) and prov:
        lines.append("provenance:")
        for key in (
            "schema",
            "method",
            "provider",
            "model",
            "pipeline",
            "generated_at",
        ):
            if key in prov and prov[key] is not None:
                # Quote timestamps so YAML keeps them as strings (interop).
                if key == "generated_at":
                    lines.append(f'  {key}: "{prov[key]}"')
                else:
                    lines.append(f"  {key}: {prov[key]}")
        for key, value in prov.items():
            if key in {
                "schema",
                "method",
                "provider",
                "model",
                "pipeline",
                "generated_at",
            }:
                continue
            lines.append(f"  {key}: {value}")
    return "\n".join(lines)


def _non_empty_text(value: Any) -> bool:
    """True if value is a non-empty string or a datetime (YAML timestamp)."""
    if isinstance(value, datetime):
        return True
    return isinstance(value, str) and bool(value.strip())


def validate_provenance_metadata(metadata: dict[str, Any]) -> list[str]:
    """Return human-readable issues for optional provenance fields."""
    issues: list[str] = []

    ai_generated = metadata.get("ai_generated")
    if ai_generated is not None and not isinstance(ai_generated, bool):
        issues.append("ai_generated must be true or false when supplied")

    content_origin = metadata.get("content_origin")
    if content_origin is not None:
        if not isinstance(content_origin, str) or content_origin not in CONTENT_ORIGINS:
            issues.append(
                "content_origin must be one of: artificial, human, mixed"
            )

    # Consistency: AI flag vs origin (even without a provenance block)
    if ai_generated is True and content_origin == "human":
        issues.append("content_origin cannot be 'human' when ai_generated is true")
    if ai_generated is False and content_origin == "artificial":
        issues.append("content_origin cannot be 'artificial' when ai_generated is false")

    provenance = metadata.get("provenance")
    if provenance is None:
        return issues

    if not isinstance(provenance, dict):
        issues.append("provenance must be a mapping when supplied")
        return issues

    method = provenance.get("method")
    if method is not None and method not in METHODS:
        issues.append("provenance.method must be one of: llm, human, mixed")

    for key in ("provider", "model", "pipeline", "generated_at"):
        value = provenance.get(key)
        if value is not None and not _non_empty_text(value):
            issues.append(f"provenance.{key} must be a non-empty string")

    schema = provenance.get("schema")
    if schema is not None and schema != PROVENANCE_SCHEMA:
        # Allow future versions with a soft check: must be a non-empty string.
        if not isinstance(schema, str) or not schema.strip():
            issues.append("provenance.schema must be a non-empty string")

    return issues
