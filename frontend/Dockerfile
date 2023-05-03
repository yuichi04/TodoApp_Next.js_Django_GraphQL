# ベースイメージを指定
FROM node:18.16.0-alpine

# 作業ディレクトリの作成
WORKDIR /app

# package.jsonをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm ci

# ソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# 開発サーバーの起動
CMD ["npm",  "start"]