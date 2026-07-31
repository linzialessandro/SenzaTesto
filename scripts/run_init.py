"""Reset a database with the current SenzaTesto schema snapshot."""

from __future__ import annotations

import argparse

import psycopg2

from environment import PROJECT_ROOT, get_database_url


def main() -> int:
    parser = argparse.ArgumentParser(description="Reset a database using init.sql")
    parser.add_argument(
        "--confirm-reset",
        action="store_true",
        help="Required because init.sql drops existing application tables.",
    )
    args = parser.parse_args()
    if not args.confirm_reset:
        parser.error("Refusing to reset a database without --confirm-reset.")

    init_file = PROJECT_ROOT / "init.sql"
    try:
        with init_file.open(encoding="utf-8") as file:
            sql = file.read()
        with psycopg2.connect(get_database_url()) as connection:
            with connection.cursor() as cursor:
                cursor.execute(sql)
        print("Database initialized successfully.")
    except (OSError, psycopg2.Error, RuntimeError) as error:
        print(f"Database initialization failed: {error}")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
