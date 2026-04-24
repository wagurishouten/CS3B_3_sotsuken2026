---

## 2. スマホアプリ用 README (Expo/React Native)

```markdown
# 📱 スマホアプリ開発ガイド (Expo)

iOS/Android 共通のサブスクリプション管理アプリを開発します。

## 🛠 技術スタック
- **Framework:** Expo (React Native)
- **Styling:** NativeWind (Tailwind CSS for Native)
- **Icons:** Expo Icons (Ionicons, MaterialIcons 等)
- **Navigation:** React Navigation

## 📂 ディレクトリ構成
```text
src/
├── assets/          # アイコン、スプラッシュ画像
├── components/      # 共通パーツ（Card, Header 等）
├── screens/         # 各画面（Home, Detail, ScanMail 等）
├── navigation/      # 画面遷移の設定
├── hooks/           # API通信などのロジック
└── constants/       # ダミーデータ、スタイル定数
