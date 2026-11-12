# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 概要

レッスンの課題を回ごとにまとめる、静的な HTML/CSS のリポジトリ。ビルド・リント・テストの仕組みはなく、package.json などの依存もない。ファイルをブラウザで直接開いて確認する。ユーザーとのやり取り、README、コミットメッセージは日本語。

## 構成

- `lessonNN/` — 1回分のレッスン。中身は `index.html`（その回のページへのリンク集）、`css/style.css`、`images/`。新しい回は `lesson01/` をコピーして番号を増やす。
- `lesson01/chapter2-slides.html` — 第2章「Webアプリのしくみ」の講義スライド。CSS と JS を1ファイルに収めている。
  - 各スライドは `<section class="slide" data-sec="…" data-title="…">`。`data-sec` が上部のセクションナビ、`data-title` がスライド一覧に使われる。講師メモは `.note` 要素に書く（N キーで表示を切り替え）。
  - 16:9 の画面を `cqi` 単位で拡大縮小し、スマホでは1列に流し込む。Webアプリの4要素（フロント／API／バック／DB）に、それぞれ専用の色トークン（`--front` `--api` `--back` `--db`）を割り当てている。ライト用の値は `:root` に、ダーク用の値は `prefers-color-scheme` と `[data-theme="dark"]` の両方に書く。
  - 操作は ← → / スペース、O（一覧）、N（講師メモ）、スワイプ。
- `ai-qa/index.html` — 「AIそくとう窓口」。講義中に講師が操作し、受講生の質問（講義・SparkAI・Claude）に5秒以内で答えるアプリ。claude.ai の Artifact（https://claude.ai/artifact/Nf3PKF46sYCSauPYg4ARih）として公開している。

## ai-qa を編集するときの注意

- 単体の HTML ではなく、Artifact のページ本体として書いている。`<!DOCTYPE>`、`<html>`、`<head>`、`<body>` は付けず、先頭に `<title>` と `<style>` を置く（骨組みは公開時に自動で付く）。ローカルで開いても Claude には接続できない。
- 変更したら、同じファイルパスを Artifact ツールで公開し直して上記 URL を更新する。runtime capabilities は `sample`（Claude への質問）と `dictation`（音声入力）を宣言している。capabilities を渡し直すときは、この2つをそろえて宣言する（渡したものだけが残る）。
- Claude への質問は `claude.use("sample")` を使い、`modelTier: "quick"` で回答をストリーミング表示する。指示文は `rules()` で組み立てて、会話の先頭の user ターンとして毎回送る。
- SparkAI は株式会社ReFast のAIスクール（https://sparkai.jp/）のこと。コース・料金などの事実は `SPARK_FACTS` 配列にまとめてあり、情報が変わったらここを直す。画面の「SparkAI 追加メモ」（localStorage に保存）の内容は `SPARK_FACTS` より優先される。
- 講義の内容は `LECTURE` 定数に、`lesson01/chapter2-slides.html` から抜き出したスライド本文と講師メモとして埋め込んである。スライドを直したら、ここも抜き出し直す。`LECTURE` は「講義」テーマのときだけ指示文に入れる（指示文を短くして答え始めを速くするため）。`SPARK_FACTS` は短いので、講義テーマで SparkAI を聞かれても正しく答えられるよう全テーマで入れる。
- 速さのために、答えは150字程度にしてある。送る会話は前の1往復と今の質問だけ（`turns.slice(-3)`）。`READY` に入っている質問は Claude に聞かず、用意した答えをすぐ表示する（質問ボタンの ● 印）。
- 音声入力は `claude.use("dictation")` を使う。`d.start()` は、クリックの処理の中で await を挟まずに呼ぶ必要がある。マイクをもう一度押すと聞き取りを止め、そのまま `ask()` で送信する。

## 変更したとき

フォルダやページを追加・変更したら、README.md のフォルダ構成図と説明も更新する。
