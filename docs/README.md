# 📱 サブスク管理アプリ (Subscription Manager)

AWSアカウント配布（5月上旬）を待機しつつ、4月中にローカル環境で基盤を固める開発プロジェクトです。

## 📅 開発ロードマップ

### 🌸 4月：ローカル開発・設計期 (現在)
- **インフラ:** ローカル開発環境の整備・AWS構成図の確定
- **バックエンド:** PostgreSQLを用いたDB基盤構築・メール解析エンジン開発
- **フロントエンド:** プロトタイプ作成（ダミーデータ利用）

### 🌿 5月：AWS連携・基本実装期
- **インフラ:** AWS環境（RDS, Cognito）の構築
- **バックエンド:** 手動登録APIの実装・AWS移行
- **フロント:** クラウド環境での疎通確認（Web/スマホ）

### ☔ 6月：自動化・汎用化実装期
- **自動化:** 1日1回の定期バッチによるメール自動スキャン
- **汎用化:** 三井住友カード以外の決済メールへの対応拡大

---

## 🛠 技術スタック

| 分野 | 技術 | 備考 |
| :--- | :--- | :--- |
| **Frontend (Web)** | React (Vite) / Tailwind CSS | グラフ: Recharts |
| **Frontend (Mobile)**| Expo (React Native) / NativeWind | グラフ: Victory Native |
| **Backend** | Python (FastAPI) / SQLAlchemy | 解析: Regex / Pydantic |
| **Database** | Amazon RDS for PostgreSQL | ローカル: PostgreSQL |
| **Infrastructure** | AWS (Amplify, Cognito, Lambda) | 認証・自動化処理 |

---

## 📊 データベース設計 (subscriptions)

| カラム名 | 型 | 内容 |
| :--- | :--- | :--- |
| `id` | SERIAL (PK) | 自動採番 |
| `user_id` | VARCHAR | Cognito ユーザーID |
| `service_name` | VARCHAR | サービス名 (Netflix等) |
| `price` | INTEGER | 金額 (円) |
| `billing_cycle` | VARCHAR | 'monthly' / 'yearly' |
| `next_billing_date`| DATE | 次回支払予定日 |
| `is_automated` | BOOLEAN | 自動解析フラグ |

---

## 🚀 4月中の分野別タスク (Todo)

### 💻 Backend
- [ ] `parser.py` (三井住友カード解析ロジック) の完成
- [ ] SQLAlchemy を用いた `models.py` / `schemas.py` の作成
- [ ] ローカル PostgreSQL との接続テスト

### 🌐 Frontend (Web)
- [ ] Recharts を用いた支出推移グラフのモック作成
- [ ] Tailwind CSS を用いた基本コンポーネントの構築
- [ ] 画面遷移 (Router) の実装

### 📱 Frontend (Mobile)
- [ ] Victory Native を用いたグラフ画面の作成
- [ ] NativeWind を用いたスタイリングの共通化
- [ ] Expo Go での実機動作確認

### ☁️ Infrastructure
- [ ] 5月1日に即時構築するための AWS コマンド集の作成
- [ ] 開発環境セットアップ手順書の作成

---

## 📝 開発運用ルール
- **デザイン統一:** フロント担当2名はメインカラー（16進数）と余白感を揃えること。
- **ブランチ管理:** `feature/` ブランチを作成し、リーダーのレビューを経て `main` へマージ。
- **環境変数:** APIキーやDB接続情報は絶対プッシュ禁止。`.env.example` を使用。