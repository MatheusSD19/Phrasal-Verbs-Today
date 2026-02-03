import pandas as pd

from database import get_db_connection


def search_products_with_margins(query: str = "", family: str = "", category: str = ""):
    query_like = f"%{query}%"
    family_like = f"%{family}%"
    category_like = f"%{category}%"
    with get_db_connection() as conn:
        results = conn.execute(
            """
            SELECT products.id,
                   products.code,
                   products.name,
                   families.name AS family_name,
                   categories.name AS category_name,
                   subcategories.name AS subcategory_name,
                   products.margin_override,
                   COALESCE(category_margins.margin_percent, family_margins.margin_percent) AS suggested_margin
            FROM products
            LEFT JOIN families ON families.id = products.family_id
            LEFT JOIN categories ON categories.id = products.category_id
            LEFT JOIN subcategories ON subcategories.id = products.subcategory_id
            LEFT JOIN margins AS family_margins ON family_margins.family_id = products.family_id
                AND family_margins.category_id IS NULL
            LEFT JOIN margins AS category_margins ON category_margins.category_id = products.category_id
            WHERE (? = '' OR products.name LIKE ? OR products.code LIKE ?)
              AND (? = '' OR families.name LIKE ?)
              AND (? = '' OR categories.name LIKE ?)
            ORDER BY products.name
            LIMIT 200
            """,
            (
                query,
                query_like,
                query_like,
                family,
                family_like,
                category,
                category_like,
            ),
        ).fetchall()
    return results


def export_to_excel() -> pd.DataFrame:
    with get_db_connection() as conn:
        data = conn.execute(
            """
            SELECT products.code AS codigo,
                   products.name AS produto,
                   families.name AS familia,
                   categories.name AS categoria,
                   subcategories.name AS subcategoria,
                   COALESCE(category_margins.margin_percent, family_margins.margin_percent) AS margem_sugerida,
                   products.margin_override AS margem_editada
            FROM products
            LEFT JOIN families ON families.id = products.family_id
            LEFT JOIN categories ON categories.id = products.category_id
            LEFT JOIN subcategories ON subcategories.id = products.subcategory_id
            LEFT JOIN margins AS family_margins ON family_margins.family_id = products.family_id
                AND family_margins.category_id IS NULL
            LEFT JOIN margins AS category_margins ON category_margins.category_id = products.category_id
            ORDER BY families.name, categories.name, products.name
            """
        ).fetchall()
    return pd.DataFrame([dict(row) for row in data])
