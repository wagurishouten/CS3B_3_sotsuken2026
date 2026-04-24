# 🌐 Web フロントエンド開発ガイド (React)

ブラウザ版のサブスクリプション管理画面を開発します。

## 🛠 技術スタック
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React (推奨)
- **HTTP Client:** Axios (バックエンドAPI連携用)

## 📂 ディレクトリ構成
```text
src/
├── assets/          # 画像、ロゴなど
├── components/      # 共通パーツ（Button, Input, Card等）
├── pages/           # 各画面（Dashboard, Login, AddSubscription等）
├── hooks/           # カスタムフック（API取得ロジック等）
├── utils/           # 共通関数（日付フォーマット等）
└── constants/       # ダミーデータ、共通カラー定義
