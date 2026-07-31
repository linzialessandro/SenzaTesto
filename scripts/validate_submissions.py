#!/usr/bin/env python3
"""Validate SenzaTesto exercise submissions without modifying them.

The validator is deterministic so it can run locally and in CI before content
reaches the database. It validates the Markdown contract, metadata types,
required sections, and duplicate exercise payloads.
"""

from __future__ import annotations

import argparse
import hashlib
import re
import sys
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path

import yaml


PROJECT_ROOT = Path(__file__).resolve().parent.parent
FRONTMATTER_PATTERN = re.compile(r"\A---\r?\n(.*?)\r?\n---\r?\n(.*)\Z", re.DOTALL)
REQUIRED_SECTIONS = ("Problem Text", "Solution")
MAX_TEXT_LENGTH = 20_000


@dataclass(frozen=True)
class ValidationIssue:
    path: Path
    message: str


def _section_content(body: str, heading: str) -> str | None:
    pattern = re.compile(
        rf"^# {re.escape(heading)}\s*$\r?\n(.*?)(?=^# \S|\Z)",
        re.MULTILINE | re.DOTALL,
    )
    match = pattern.search(body)
    return match.group(1).strip() if match else None


def _normalise_text(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def _has_balanced_display_math(value: str) -> bool:
    return len(re.findall(r"(?<!\\)\$\$", value)) % 2 == 0


def validate_file(path: Path) -> tuple[list[ValidationIssue], str | None]:
    """Validate one submission and return issues plus a content fingerprint."""
    issues: list[ValidationIssue] = []
    try:
        content = path.read_text(encoding="utf-8")
    except OSError as error:
        return [ValidationIssue(path, f"cannot read file: {error}")], None

    match = FRONTMATTER_PATTERN.match(content)
    if not match:
        return [ValidationIssue(path, "frontmatter must be enclosed by --- markers")], None

    try:
        metadata = yaml.safe_load(match.group(1))
    except yaml.YAMLError as error:
        return [ValidationIssue(path, f"invalid YAML frontmatter: {error}")], None

    if not isinstance(metadata, dict):
        return [ValidationIssue(path, "frontmatter must be a mapping")], None

    def require_text(key: str, maximum: int) -> str | None:
        value = metadata.get(key)
        if not isinstance(value, str) or not value.strip():
            issues.append(ValidationIssue(path, f"{key} must be a non-empty string"))
            return None
        if len(value.strip()) > maximum:
            issues.append(ValidationIssue(path, f"{key} exceeds {maximum} characters"))
        return value.strip()

    year = metadata.get("year")
    if isinstance(year, bool) or not isinstance(year, int) or year not in range(1, 6):
        issues.append(ValidationIssue(path, "year must be an integer between 1 and 5"))

    difficulty = metadata.get("difficulty")
    if isinstance(difficulty, bool) or not isinstance(difficulty, int) or difficulty not in range(1, 6):
        issues.append(ValidationIssue(path, "difficulty must be an integer between 1 and 5"))

    macro_area = require_text("macro_area", 120)
    topic = require_text("topic", 300)

    tags = metadata.get("tags", [])
    if not isinstance(tags, list) or not all(isinstance(tag, str) and tag.strip() for tag in tags):
        issues.append(ValidationIssue(path, "tags must be a list of non-empty strings"))
    elif len(tags) > 12:
        issues.append(ValidationIssue(path, "tags must contain at most 12 values"))

    ai_generated = metadata.get("ai_generated")
    if ai_generated is not None and not isinstance(ai_generated, bool):
        issues.append(ValidationIssue(path, "ai_generated must be true or false when supplied"))

    body = match.group(2)
    sections: dict[str, str] = {}
    for heading in REQUIRED_SECTIONS:
        section = _section_content(body, heading)
        if not section:
            issues.append(ValidationIssue(path, f"missing or empty '# {heading}' section"))
            continue
        if len(section) > MAX_TEXT_LENGTH:
            issues.append(ValidationIssue(path, f"'# {heading}' exceeds {MAX_TEXT_LENGTH} characters"))
        if not _has_balanced_display_math(section):
            issues.append(ValidationIssue(path, f"'# {heading}' has an unmatched $$ delimiter"))
        sections[heading] = section

    if issues or not macro_area or not topic or len(sections) != len(REQUIRED_SECTIONS):
        return issues, None

    fingerprint_payload = "\n".join(
        (
            str(year),
            macro_area.casefold(),
            topic.casefold(),
            str(difficulty),
            _normalise_text(sections["Problem Text"]),
            _normalise_text(sections["Solution"]),
        )
    )
    return [], hashlib.sha256(fingerprint_payload.encode("utf-8")).hexdigest()


def validate_directory(directory: Path) -> list[ValidationIssue]:
    """Validate Markdown files in a directory, including duplicate payloads."""
    if not directory.is_dir():
        return [ValidationIssue(directory, "directory does not exist")]

    issues: list[ValidationIssue] = []
    fingerprints: dict[str, list[Path]] = defaultdict(list)
    files = sorted(directory.glob("*.md"))

    for path in files:
        file_issues, fingerprint = validate_file(path)
        issues.extend(file_issues)
        if fingerprint:
            fingerprints[fingerprint].append(path)

    for duplicate_paths in fingerprints.values():
        if len(duplicate_paths) > 1:
            names = ", ".join(path.name for path in duplicate_paths)
            for path in duplicate_paths:
                issues.append(ValidationIssue(path, f"duplicate exercise payload: {names}"))
    return issues


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate exercise Markdown submissions")
    parser.add_argument(
        "directory",
        nargs="?",
        type=Path,
        default=PROJECT_ROOT / "submissions" / "pending",
        help="Directory containing .md submissions (default: submissions/pending)",
    )
    args = parser.parse_args()
    directory = args.directory.resolve()
    issues = validate_directory(directory)

    if issues:
        for issue in issues:
            print(f"ERROR {issue.path}: {issue.message}")
        print(f"Validation failed: {len(issues)} issue(s).")
        return 1

    count = len(list(directory.glob("*.md")))
    print(f"Validated {count} submission(s) in {directory}.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
