import os
import shutil
import sqlite3
from datetime import datetime


DB_PATH = os.path.join(os.getcwd(), "data.db")
BACKUP_DIR = os.path.join(os.getcwd(), "backups")


def get_db_connection() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> None:
    with get_db_connection() as conn:
        conn.executescript(
            """
            CREATE TABLE IF NOT EXISTS families (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT UNIQUE NOT NULL
            );

            CREATE TABLE IF NOT EXISTS categories (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                family_id INTEGER NOT NULL,
                name TEXT NOT NULL,
                UNIQUE(family_id, name),
                FOREIGN KEY(family_id) REFERENCES families(id)
            );

            CREATE TABLE IF NOT EXISTS subcategories (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                category_id INTEGER NOT NULL,
                name TEXT NOT NULL,
                UNIQUE(category_id, name),
                FOREIGN KEY(category_id) REFERENCES categories(id)
            );

            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                code TEXT,
                name TEXT NOT NULL,
                family_id INTEGER,
                category_id INTEGER,
                subcategory_id INTEGER,
                margin_override REAL,
                UNIQUE(code, name),
                FOREIGN KEY(family_id) REFERENCES families(id),
                FOREIGN KEY(category_id) REFERENCES categories(id),
                FOREIGN KEY(subcategory_id) REFERENCES subcategories(id)
            );

            CREATE TABLE IF NOT EXISTS margins (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                family_id INTEGER,
                category_id INTEGER,
                margin_percent REAL NOT NULL,
                UNIQUE(family_id, category_id),
                FOREIGN KEY(family_id) REFERENCES families(id),
                FOREIGN KEY(category_id) REFERENCES categories(id)
            );

            CREATE TABLE IF NOT EXISTS history (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                entity_type TEXT NOT NULL,
                entity_id INTEGER,
                action TEXT NOT NULL,
                details TEXT,
                created_at TEXT NOT NULL
            );
            """
        )


def backup_database() -> None:
    if not os.path.exists(DB_PATH):
        return
    os.makedirs(BACKUP_DIR, exist_ok=True)
    timestamp = datetime.utcnow().strftime("%Y%m%d%H%M%S")
    backup_path = os.path.join(BACKUP_DIR, f"data_{timestamp}.db")
    shutil.copyfile(DB_PATH, backup_path)


def log_history(conn: sqlite3.Connection, entity_type: str, entity_id: int | None, details: str) -> None:
    conn.execute(
        """
        INSERT INTO history (entity_type, entity_id, action, details, created_at)
        VALUES (?, ?, ?, ?, ?)
        """,
        (entity_type, entity_id, "update", details, datetime.utcnow().isoformat()),
    )
    conn.commit()


def upsert_margin(
    conn: sqlite3.Connection, family_id: str | None, category_id: str | None, margin_percent: str
) -> None:
    family_id_val = int(family_id) if family_id else None
    category_id_val = int(category_id) if category_id else None
    conn.execute(
        """
        INSERT INTO margins (family_id, category_id, margin_percent)
        VALUES (?, ?, ?)
        ON CONFLICT(family_id, category_id) DO UPDATE SET margin_percent = excluded.margin_percent
        """,
        (family_id_val, category_id_val, float(margin_percent)),
    )
    conn.commit()


def upsert_product_margin_override(
    conn: sqlite3.Connection, product_id: int, margin_override: str | None
) -> None:
    margin_value = float(margin_override) if margin_override else None
    conn.execute(
        "UPDATE products SET margin_override = ? WHERE id = ?",
        (margin_value, product_id),
    )
    conn.commit()
