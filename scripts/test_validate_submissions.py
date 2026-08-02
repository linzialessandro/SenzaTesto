"""Regression tests for the content validation gate."""

from __future__ import annotations

import tempfile
import unittest
from pathlib import Path

from validate_submissions import validate_directory

VALID_EXERCISE = """---
year: 2
macro_area: Algebra
topic: Equazioni lineari
difficulty: 2
tags:
  - equazioni
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-02T12:00:00+00:00"
---
# Problem Text
Risolvi $x + 2 = 5$.

# Solution
Sottraendo 2 otteniamo $x = 3$.
"""

HUMAN_EXERCISE = """---
year: 1
macro_area: Algebra
topic: Monomi
difficulty: 1
tags:
  - monomi
ai_generated: false
content_origin: human
---
# Problem Text
Calcola $2a + 3a$.

# Solution
Sommiamo i termini simili: $5a$.
"""


class ValidateSubmissionsTests(unittest.TestCase):
    def write_submission(self, directory: Path, name: str, content: str) -> None:
        (directory / name).write_text(content, encoding="utf-8")

    def test_accepts_valid_submission(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            directory = Path(temp_dir)
            self.write_submission(directory, "valid.md", VALID_EXERCISE)
            self.assertEqual(validate_directory(directory), [])

    def test_accepts_human_authored_without_provenance_block(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            directory = Path(temp_dir)
            self.write_submission(directory, "human.md", HUMAN_EXERCISE)
            self.assertEqual(validate_directory(directory), [])

    def test_reports_invalid_difficulty_and_missing_solution(self) -> None:
        invalid = VALID_EXERCISE.replace("difficulty: 2", "difficulty: 7").replace(
            "# Solution\nSottraendo 2 otteniamo $x = 3$.\n", ""
        )
        with tempfile.TemporaryDirectory() as temp_dir:
            directory = Path(temp_dir)
            self.write_submission(directory, "invalid.md", invalid)
            messages = [issue.message for issue in validate_directory(directory)]
            self.assertIn("difficulty must be an integer between 1 and 5", messages)
            self.assertIn("missing or empty '# Solution' section", messages)

    def test_reports_duplicate_exercises(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            directory = Path(temp_dir)
            self.write_submission(directory, "first.md", VALID_EXERCISE)
            self.write_submission(directory, "second.md", VALID_EXERCISE)
            messages = [issue.message for issue in validate_directory(directory)]
            self.assertTrue(any(message.startswith("duplicate exercise payload:") for message in messages))

    def test_reports_inconsistent_ai_origin(self) -> None:
        bad = VALID_EXERCISE.replace("content_origin: artificial", "content_origin: human")
        with tempfile.TemporaryDirectory() as temp_dir:
            directory = Path(temp_dir)
            self.write_submission(directory, "bad.md", bad)
            messages = [issue.message for issue in validate_directory(directory)]
            self.assertTrue(
                any("content_origin cannot be 'human'" in message for message in messages)
            )


if __name__ == "__main__":
    unittest.main()
