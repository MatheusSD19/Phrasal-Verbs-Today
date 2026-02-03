import io
import os
from datetime import datetime

from flask import Flask, flash, redirect, render_template, request, send_file, url_for

from database import (
    backup_database,
    get_db_connection,
    init_db,
    log_history,
    upsert_margin,
    upsert_product_margin_override,
)
from pdf_importer import import_pdf_data
from services import export_to_excel, search_products_with_margins


app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "dev-secret")
app.config["UPLOAD_FOLDER"] = os.path.join(os.getcwd(), "uploads")

os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)
init_db()


@app.route("/", methods=["GET"])
def index():
    query = request.args.get("query", "").strip()
    family = request.args.get("family", "").strip()
    category = request.args.get("category", "").strip()
    results = []
    if query or family or category:
        results = search_products_with_margins(query=query, family=family, category=category)
    return render_template(
        "index.html",
        results=results,
        query=query,
        family=family,
        category=category,
    )


@app.route("/upload", methods=["POST"])
def upload_pdf():
    if "pdf_file" not in request.files:
        flash("Nenhum arquivo enviado.", "error")
        return redirect(url_for("index"))
    pdf_file = request.files["pdf_file"]
    if pdf_file.filename == "":
        flash("Selecione um arquivo PDF.", "error")
        return redirect(url_for("index"))
    if not pdf_file.filename.lower().endswith(".pdf"):
        flash("Formato inválido. Envie um PDF.", "error")
        return redirect(url_for("index"))

    os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)
    filename = f"{datetime.utcnow().strftime('%Y%m%d%H%M%S')}_{pdf_file.filename}"
    filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)
    pdf_file.save(filepath)

    with get_db_connection() as conn:
        import_summary = import_pdf_data(filepath, conn)
        log_history(conn, "import", None, f"Importação: {import_summary}")
        backup_database()

    flash("PDF importado com sucesso.", "success")
    return redirect(url_for("index"))


@app.route("/margins", methods=["GET", "POST"])
def manage_margins():
    with get_db_connection() as conn:
        if request.method == "POST":
            family_id = request.form.get("family_id")
            category_id = request.form.get("category_id")
            margin_percent = request.form.get("margin_percent")
            upsert_margin(conn, family_id, category_id, margin_percent)
            log_history(
                conn,
                "margin",
                None,
                f"Margem atualizada: família={family_id}, categoria={category_id}, margem={margin_percent}",
            )
            backup_database()
            flash("Margem atualizada.", "success")
            return redirect(url_for("manage_margins"))

        families = conn.execute("SELECT id, name FROM families ORDER BY name").fetchall()
        categories = conn.execute(
            """
            SELECT categories.id, categories.name, families.name AS family_name
            FROM categories
            JOIN families ON families.id = categories.family_id
            ORDER BY families.name, categories.name
            """
        ).fetchall()
        margins = conn.execute(
            """
            SELECT margins.id,
                   margins.margin_percent,
                   families.name AS family_name,
                   categories.name AS category_name
            FROM margins
            LEFT JOIN families ON families.id = margins.family_id
            LEFT JOIN categories ON categories.id = margins.category_id
            ORDER BY families.name, categories.name
            """
        ).fetchall()

    return render_template(
        "margins.html", families=families, categories=categories, margins=margins
    )


@app.route("/products/<int:product_id>/margin", methods=["POST"])
def update_product_margin(product_id: int):
    margin_override = request.form.get("margin_override")
    with get_db_connection() as conn:
        upsert_product_margin_override(conn, product_id, margin_override)
        log_history(
            conn,
            "product",
            product_id,
            f"Margem editada manualmente: {margin_override}",
        )
        backup_database()
    flash("Margem do produto atualizada.", "success")
    return redirect(url_for("index", **request.args))


@app.route("/export", methods=["GET"])
def export_excel():
    data = export_to_excel()
    output = io.BytesIO()
    data.to_excel(output, index=False)
    output.seek(0)
    return send_file(
        output,
        as_attachment=True,
        download_name="classificacao_mercadologica.xlsx",
        mimetype="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    )


@app.route("/settings", methods=["GET"])
def settings():
    with get_db_connection() as conn:
        imports = conn.execute(
            "SELECT details, created_at FROM history WHERE entity_type = 'import' ORDER BY created_at DESC"
        ).fetchall()
        history = conn.execute(
            "SELECT entity_type, action, details, created_at FROM history ORDER BY created_at DESC LIMIT 50"
        ).fetchall()
    return render_template("settings.html", imports=imports, history=history)


if __name__ == "__main__":
    app.run(debug=True)
