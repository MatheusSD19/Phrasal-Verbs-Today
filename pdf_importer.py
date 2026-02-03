import re
from pathlib import Path
from typing import Iterable

import pdfplumber


FAMILY_PATTERN = re.compile(r"^fam[ií]lia[:\s-]+(.+)$", re.IGNORECASE)
CATEGORY_PATTERN = re.compile(r"^categoria[:\s-]+(.+)$", re.IGNORECASE)
SUBCATEGORY_PATTERN = re.compile(r"^subcategoria[:\s-]+(.+)$", re.IGNORECASE)
MARGIN_PATTERN = re.compile(r"^fam[ií]lia[:\s-]+(.+?)\s+.*margem[:\s-]+(\d+[\.,]?\d*)%?$", re.IGNORECASE)
PRODUCT_PATTERN = re.compile(r"^(\d{3,})\s*[-–]\s*(.+)$")


def _extract_text_lines(pdf_path: str | Path) -> Iterable[str]:
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text() or ""
            for line in text.splitlines():
                line = line.strip()
                if line:
                    yield line


def _get_or_create(conn, table: str, column: str, value: str, extra: dict | None = None) -> int:
    extra = extra or {}
    columns = [column] + list(extra.keys())
    placeholders = ",".join(["?"] * len(columns))
    values = [value] + list(extra.values())
    conn.execute(
        f"INSERT OR IGNORE INTO {table} ({', '.join(columns)}) VALUES ({placeholders})",
        values,
    )
    conn.commit()
    row = conn.execute(
        f"SELECT id FROM {table} WHERE {column} = ?",
        (value,),
    ).fetchone()
    return row["id"]


def import_pdf_data(pdf_path: str | Path, conn) -> str:
    current_family_id = None
    current_category_id = None
    current_subcategory_id = None
    product_count = 0
    margin_count = 0

    for line in _extract_text_lines(pdf_path):
        margin_match = MARGIN_PATTERN.match(line)
        if margin_match:
            family_name, margin_value = margin_match.groups()
            family_id = _get_or_create(conn, "families", "name", family_name.strip())
            conn.execute(
                """
                INSERT INTO margins (family_id, category_id, margin_percent)
                VALUES (?, NULL, ?)
                ON CONFLICT(family_id, category_id) DO UPDATE SET margin_percent = excluded.margin_percent
                """,
                (family_id, float(margin_value.replace(",", "."))),
            )
            conn.commit()
            margin_count += 1
            continue

        family_match = FAMILY_PATTERN.match(line)
        if family_match:
            family_name = family_match.group(1).strip()
            current_family_id = _get_or_create(conn, "families", "name", family_name)
            current_category_id = None
            current_subcategory_id = None
            continue

        category_match = CATEGORY_PATTERN.match(line)
        if category_match and current_family_id:
            category_name = category_match.group(1).strip()
            current_category_id = _get_or_create(
                conn, "categories", "name", category_name, {"family_id": current_family_id}
            )
            current_subcategory_id = None
            continue

        subcategory_match = SUBCATEGORY_PATTERN.match(line)
        if subcategory_match and current_category_id:
            subcategory_name = subcategory_match.group(1).strip()
            current_subcategory_id = _get_or_create(
                conn, "subcategories", "name", subcategory_name, {"category_id": current_category_id}
            )
            continue

        product_match = PRODUCT_PATTERN.match(line)
        if product_match:
            code, name = product_match.groups()
            conn.execute(
                """
                INSERT OR IGNORE INTO products
                (code, name, family_id, category_id, subcategory_id)
                VALUES (?, ?, ?, ?, ?)
                """,
                (code.strip(), name.strip(), current_family_id, current_category_id, current_subcategory_id),
            )
            conn.commit()
            product_count += 1

    return f"{product_count} produtos, {margin_count} margens"
