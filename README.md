This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# アプリ名
自己紹介カードアプリ

## 概要
Next.js・TypeScript・Tailwind CSSを使用した自己紹介カード表示アプリです。  
名前・職業・自己紹介文をカード形式で表示します。

## URL
https://intro-card-app.vercel.app

## 使用技術
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 機能
- 名前、職業、自己紹介文を表示
- コンポーネント分割（Header, ProfileCard, Footer）
- Tailwind CSSによるデザイン

## 学習ポイント
- Next.jsの基本的なページ構成（App Router）
- TypeScriptの型付け（string）
- Tailwind CSSでのスタイリング
- GitHubとVercelを使ったデプロイ手順

## セットアップ方法
```bash
# リポジトリをクローン
git clone https://github.com/ユーザー名/intro-card-app.git

# ディレクトリに移動
cd intro-card-app

# パッケージインストール
npm install

# ローカル開発サーバー起動
npm run dev
