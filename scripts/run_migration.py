"""Apply one explicitly selected, versioned migration to a database.

The repository contains historical migrations that may already be applied in
production. Requiring an explicit filename and --apply avoids accidentally
rerunning an incompatible legacy migration.
"""

from __future__ import annotations

import argparse
import hashlib
from pathlib import Path

import psycopg2

from environment import PROJECT_ROOT, get_database_url


MIGRATIONS_DIRECTORY = PROJECT_ROOT / "migrations"


def resolve_migration(value: str) -> Path:
    candidate = Path(value)
    if not candidate.is_absolute():
        candidate = MIGRATIONS_DIRECTORY / candidate.name
    if candidate.parent != MIGRATIONS_DIRECTORY or candidate.suffix != ".sql":
        raise ValueError("migration must be a .sql file directly inside migrations/")
    if not candidate.is_file():
        raise ValueError(f"migration not found: {candidate}")
    return candidate


def main() -> int:
    parser = argparse.ArgumentParser(description="Apply one SenzaTesto SQL migration")
    parser.add_argument("migration", help="Migration filename, for example 008_add_difficulty_filter.sql")
    parser.add_argument("--apply", action="store_true", help="Execute the migration. Omit for a dry run.")
    args = parser.parse_args()

    try:
        migration = resolve_migration(args.migration)
        sql = migration.read_text(encoding="utf-8")
    except (OSError, ValueError) as error:
        parser.error(str(error))

    checksum = hashlib.sha256(sql.encode("utf-8")).hexdigest()[:12]
    print(f"Migration: {migration.name} (sha256:{checksum})")
    if not args.apply:
        print("Dry run only. Re-run with --apply after confirming this migration is unapplied.")
        return 0

    try:
        with psycopg2.connect(get_database_url()) as connection:
            with connection.cursor() as cursor:
                cursor.execute(sql)
        print("Migration applied successfully.")
    except (psycopg2.Error, RuntimeError) as error:
        print(f"Migration failed and was rolled back: {error}")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
