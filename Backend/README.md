# 🐍 バックエンド開発ガイド (FastAPI)

このディレクトリは、サブスク管理アプリのバックエンド（API・解析ロジック）を管理します。

## 📂 ディレクトリ構成
バックエンド班は以下の構成に従ってファイルを作成してください。

```text
backend/
├── app/
│   ├── main.py          # アプリのエントリーポイント（FastAPIの初期化）
│   ├── api/             # エンドポイント（Route）の定義
│   ├── core/            # 設定情報（AWS設定、環境変数読み込み）
│   ├── logic/           # メールの解析ロジック（parser.pyなど）
│   ├── models/          # DynamoDBのデータ操作クラス（boto3等）
│   └── schemas/         # Pydanticモデル（リクエスト・レスポンスの型）
├── tests/               # 単体テスト用コード
├── requirements.txt     # 必要なライブラリ一覧
└── .env.example         # 環境変数のサンプル（本物は共有禁止）
