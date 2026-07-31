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
---
# Problem Text
Risolvi $x + 2 = 5$.

# Solution
Sottraendo 2 otteniamo $x = 3$.
"""


class ValidateSubmissionsTests(unittest.TestCase):
    def write_submission(self, directory: Path, name: str, content: str) -> None:
        (directory / name).write_text(content, encoding="utf-8")

    def test_accepts_valid_submission(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            directory = Path(temp_dir)
            self.write_submission(directory, "valid.md", VALID_EXERCISE)
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


if __name__ == "__main__":
    unittest.main()
