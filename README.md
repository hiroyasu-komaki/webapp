## はじめに

このコードサンプルでは、シンプルで基本的なWebアプリケーションを構築するための技術要件を記載しています。
複雑でスケーラブルなWebアプリケーションを構築するためには、より洗練された技術やその使い方を学ぶ必要があります

## 実行方法

- 認証サーバー: http://localhost:3002
    $ cd auth-server
    $ node server.js

- フロントエンドサーバー: http://localhost:5000
    $ cd frontend-server
    $ source venv/bin/activate
    $ python app.py

- APIサーバー: http://localhost:3001
    $ cd auth-server
    $ node server.js


## 実装したこと

    1. 静的データ（HTML, CSS, JavaScript）
    2. API（フロントエンドから呼び出されて、結果を返すもの）
    3. データベースを用いない認証（認証可否とセッションの維持）

### 実装していないこと

    1. データベース
        - リレーショナルデータベース: MySQL、PostgreSQLなど
        - NoSQLデータベース: MongoDB、Cassandraなど

    2. データベースを用いたユーザー認証と認可
        - 認証: ユーザーのログイン機能
        - 認可: ユーザーの権限管理

    3. セッション管理
        - セッション管理: ユーザーがログイン状態を維持するための仕組み

    4. APIドキュメント
        - APIドキュメンテーション: SwaggerやOpenAPIを使ったAPIの自動ドキュメンテーション

    5. フロントエンドフレームワーク
        - モダンなフロントエンドフレームワーク: React、Vue.js、Angularなどを使用して、SPA（Single Page Application）を構築

    6. バックエンドフレームワーク
        - フルスタックフレームワーク: Express.js（Node.js用）、Django（Python用）、Spring（Java用）など

    7. テスト
        - テストフレームワーク: フロントエンドおよびバックエンドのユニットテスト、統合テスト、エンドツーエンドテスト
        - フロントエンドテスト: Jest、Mocha、Cypressなど
        - バックエンドテスト: Jest、Mocha、PyTestなど

    8. デプロイとホスティング
        - クラウドプロバイダ: AWS、Google Cloud Platform、Azureなど
        - コンテナ化: Dockerを使用したアプリケーションのコンテナ化
        - CI/CDパイプライン: 継続的インテグレーション/継続的デプロイメントの設定（GitHub Actions、Jenkinsなど）

    9. セキュリティ
        - セキュリティ対策: CSRF、XSS、SQLインジェクションの防止策
        - HTTPS: トラフィックの暗号化

    10. ロギングとモニタリング
        - ログ管理: アプリケーションのログを集中管理（ELKスタック、Splunkなど）
        - モニタリング: サーバーやアプリケーションの状態を監視（Prometheus、Grafanaなど）

    11. パフォーマンス最適化
        - キャッシュ: RedisやMemcachedを使用したキャッシュ
        - CDN: 静的ファイルの配信にコンテンツデリバリネットワークを使用


## 技術構成
    - フロントエンド: HTML、CSS、JavaScriptで構築。
    - バックエンド（Webサーバー）: Flaskを使用。
    - バックエンド（APIサーバー）: Node.jsを使用。

## フォルダ構成
```
project-root/
├── frontend-server/
│   ├── static/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── venv/
│   ├── app.py
│   ├── requirements.txt
├── api-server/
│   ├── node_modules/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── auth-server/
│   ├── node_modules/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
└── README.md
```


## Postmanでのリクエスト設定
    - メソッド: POST
    - URL: http://localhost:3000/api/add_days
    - ヘッダーの設定:
        - Key: Content-Type
        - Value: application/json
    - ボディの設定:
        - Body タブを選択
        - raw を選択し、ドロップダウンメニューから JSON を選択
    - JSON形式でデータを入力
```
{
    "days": 5
}

```