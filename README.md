# lesson-yamasita

レッスンの課題を回ごとにまとめるリポジトリです。

## フォルダ構成

```
lesson-yamasita/
├── lesson01/
│   ├── index.html
│   ├── chapter2-slides.html   … 第2章「Webアプリのしくみ」スライド
│   ├── css/
│   │   └── style.css
│   └── images/
├── ai-qa/
│   └── index.html            … SparkAI と Claude の質問に即答するアプリ
└── lesson02/
    ├── index.html
    ├── css/
    │   └── style.css
    └── images/
```

## 新しい回を追加するとき

`lesson01/` をコピーして `lesson03/` のように番号を増やしてください。

## スライドの操作

`lesson01/chapter2-slides.html` をブラウザで開きます。

- ← → キー / スペース：前後のスライドへ
- O：スライド一覧
- N：講師メモの表示 / 非表示
- スマホではスワイプで移動

## AIそくとう窓口（ai-qa）

SparkAI と Claude についての質問に、Claude がその場で答えるアプリです。
claude.ai の Artifact として公開して使います（Claude への接続は claude.ai 上でのみ動きます）。

- 上のボタンで「Claude / SparkAI / くらべる」を切り替え
- 「SparkAI メモ」に使っている SparkAI の説明を書くと、それを前提に答えます
- Enter で送信、Shift+Enter で改行、「止める」で回答を中断
