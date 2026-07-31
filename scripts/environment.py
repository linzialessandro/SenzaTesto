"""Shared configuration helpers for repository-maintenance scripts."""

from __future__ import annotations

import os
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parent.parent
CENTRAL_ENV_PATH = Path.home() / "secrets" / "SenzaTesto" / ".env"


def _read_env_file(path: Path) -> dict[str, str]:
    """Read a simple dotenv file without overriding the process environment."""
    if not path.exists():
        return {}

    values: dict[str, str] = {}
    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        values[key.strip()] = value.strip().strip('"').strip("'")
    return values


def get_database_url() -> str:
    """Return DATABASE_URL from the shell, project dotenv, or central secret file.

    The process environment wins so CI and one-off operational commands never
    depend on a developer-specific path.
    """
    if database_url := os.environ.get("DATABASE_URL", "").strip():
        return database_url

    file_values = _read_env_file(CENTRAL_ENV_PATH)
    file_values.update(_read_env_file(PROJECT_ROOT / ".env"))
    database_url = file_values.get("DATABASE_URL", "").strip()
    if not database_url:
        raise RuntimeError(
            "DATABASE_URL is not set. Export it, create .env from .env.example, "
            "or configure ~/secrets/SenzaTesto/.env."
        )
    return database_url
