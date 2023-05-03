# 1. Pythonイメージをベースとして使用
FROM python:3.11.3

# 2. 環境変数を設定
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# 3. コンテナ内の作業ディレクトリを設定
WORKDIR /app

# 4. requirements.txtをコンテナにコピー
COPY requirements.txt .

# 5. パッケージをインストール
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt

# 6. プロジェクトディレクトリをコンテナにコピー
COPY . .