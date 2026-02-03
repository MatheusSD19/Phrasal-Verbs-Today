## Sistema de Gestão Mercadológica e Margens de Lucro

### Sobre o Projeto

Aplicação local para importar uma estrutura mercadológica de produtos de supermercado a partir de PDF,
organizar dados em banco SQLite e permitir consulta rápida da classificação completa e das margens de lucro.

### Funcionalidades

- **Importação de PDF:** Extração automática de famílias, categorias, subcategorias, produtos e margens.
- **Banco local:** Armazenamento em SQLite com histórico de alterações e backup automático do banco.
- **Consulta inteligente:** Busca por nome, código, família ou categoria com margem sugerida e margem editada.
- **Gestão de margens:** Tela dedicada para manutenção das margens por família e/ou categoria.
- **Exportação:** Geração de planilha Excel com a classificação e margens.

### Tecnologias Utilizadas

- **Python / Flask:** Interface web simples e responsiva.
- **SQLite:** Banco local leve.
- **pdfplumber:** Extração de texto do PDF.
- **pandas / openpyxl:** Exportação de dados para Excel.

### Como executar localmente

1. Instale as dependências:
   ```bash
   python -m venv .venv
   source .venv/bin/activate
   pip install -r requirements.txt
   ```
2. Execute o servidor:
   ```bash
   python app.py
   ```
3. Acesse `http://localhost:5000`.

### Observações

- O banco `data.db` é criado automaticamente na primeira execução.
- Backups automáticos são salvos na pasta `backups/` a cada importação ou alteração manual.
- O parser de PDF usa padrões simples (Família, Categoria, Subcategoria, Código - Produto). Ajuste caso o
  layout do seu PDF seja diferente.
