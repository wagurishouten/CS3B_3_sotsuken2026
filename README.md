<<<<<<< HEAD
# サブスクリプション管理アプリ  4/22更新版
=======
# CS3B_3_sotuken2026

# サブスクリプション管理アプリ (Subscription Manager)
>>>>>>> 0b9c823 (ok)

Webとスマホから共通のサブスク支出を一括管理・可視化するアプリケーションです。
AWS Amplifyを基盤とし、三井住友カードの明細メール等から自動で情報を抽出します。

<<<<<<< HEAD
## 🚀 開発ロードマップ
=======
## 🚀 開発ロードマップ & スケジュール
>>>>>>> 0b9c823 (ok)

現在の目標： **【第1目標】手動登録・表示機能の完成**

### 🏁 フェーズ1：土台構築（環境構築 ＆ プロトタイプ）
- [ ] **インフラ**: Amplifyプロジェクト初期化・GitHub連携
<<<<<<< HEAD
- [ ] **インフラ**: Amazon RDS 構築と接続設定共有
- [ ] **バックエンド**: データベース設計(models.py)と型定義(schemas.py)の共有
- [ ] **フロント(Web)**: Reactプロジェクト初期化とTailwind CSS導入
- [ ] **フロント(Mobile)**: Expoプロジェクト初期化とNativeWind導入
=======
- [ ] **インフラ**: Amazon RDS (PostgreSQL) 構築とLambda接続設定
- [ ] **バックエンド**: APIレスポンス形式(JSON)の定義と共有
- [ ] **バックエンド**: データベーステーブルの作成 (SQL実行)
- [ ] **フロントエンド**: React (Web) / Expo (Mobile) プロジェクト初期化
- [ ] **フロントエンド**: Tailwind CSS 導入と共通デザイン設定
>>>>>>> 0b9c823 (ok)
- [ ] **共通**: 開発・テスト用ダミーデータ（5件）の定義

### 🏁 フェーズ2：データ流通（基本CRUD実装）
- [ ] **バックエンド**: サブスク情報登録(POST)・一覧取得(GET) APIの実装
<<<<<<< HEAD
- [ ] **フロント(Web)**: 手動登録フォームと一覧画面の構築（API連携）
- [ ] **フロント(Mobile)**: スマホ用入力UIとカード型リストの構築（API連携）
=======
- [ ] **フロントエンド**: 手動登録フォームの実装（API連携）
- [ ] **フロントエンド**: メインホーム画面（一覧表示）の構築

---
>>>>>>> 0b9c823 (ok)

### 🏁 フェーズ3：メイン機能拡張（自動取得 ＆ 可視化）
- [ ] **バックエンド**: Gmail API連携（三井住友カード明細解析ロジック）
- [ ] **バックエンド**: 解析データのDB自動保存処理の実装
- [ ] **フロントエンド**: グラフライブラリによる支出推移の表示
- [ ] **フロントエンド**: カレンダー画面（支払予定日のマッピング）の実装

### 🏁 フェーズ4：最終仕上げ（認証 ＆ UI改善）
- [ ] **インフラ**: Amazon Cognito によるユーザー認証基盤の統合
- [ ] **フロントエンド**: ログイン・サインアップ画面の実装
- [ ] **全体**: UI/UXのブラッシュアップ・最終動作確認
<<<<<<< HEAD
---

## 🛠 技術スタック
- **Frontend:** React (Vite), React Native (Expo), Tailwind CSS / NativeWind
- **Backend:** Python (FastAPI), SQLAlchemy, Pydantic
- **Infrastructure:** AWS Amplify, Amazon DynamoDB, Amazon Cognito
- **Tools:** GitHub Issues / Projects

## 📝 開発・運用ルール

### 1. Issue & Project 管理
- すべての作業は **GitHub Issues** に起票してから開始してください。
- 各Issueは GitHub Projects のボードで状態（Todo / In Progress / In Review / Done）を管理します。
- 作業手順が不明な場合は、Issue内の「作業手順あり（ヒント版）」を確認してください。

### 2. ブランチ戦略 & プルリクエスト
- 常に最新の作業ブランチを切ってください。
- プルリクエスト(PR)作成時は、自動入力されるテンプレートを必ず埋めてください。
- **関連Issueの紐付け**: PRの説明欄に `fixes #Issue番号` を記述してください。マージ時に自動でIssueが閉じられます。
- **マージ権限**: 全てのPRはリーダー（管理者）のレビューを経てからマージされます。

### 3. API & データ型
- バックエンドが `schemas.py` (Pydantic) で定義したJSON構造が、フロント・バック共通の正解となります。
- データの項目名（service_name, price等）を変更する場合は、必ず各班と合意を取ってください。
=======

## 🛠 技術スタック
- **Frontend:** React, React Native (Expo), Tailwind CSS
- **Backend:** Python (FastAPI / Lambda)
- **Infrastructure:** AWS Amplify, Amazon RDS, Amazon Cognito
- **Tools:** GitHub Issues / Projects

## 📝 開発ルール
- **Issue管理**: 作業前に必ずIssueを立て、担当者をアサインする。
- **ブランチ戦略**: 各自 `feature/機能名` ブランチで作業し、プルリクエストを送る。
- **データ型**: バックエンドが定義したJSON構造に従ってフロントエンドを実装する。
>>>>>>> 0b9c823 (ok)
