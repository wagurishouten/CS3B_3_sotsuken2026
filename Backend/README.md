# 🐍 バックエンド開発ガイド (FastAPI)

このディレクトリは、サブスク管理アプリのバックエンド（API・解析ロジック）を管理します。

## 📂 ディレクトリ構成
バックエンド班は以下の構成に従ってファイルを作成してください。

```text
backend/
├── app/
│   ├── main.py
│   ├── api/             # エンドポイント定義
│   ├── core/            # DB接続設定(database.py)
│   ├── logic/           # 解析ロジック(parser.py)
│   ├── models/          # SQLAlchemyのテーブル定義(models.py)
│   └── schemas/         # Pydanticモデル(schemas.py)
