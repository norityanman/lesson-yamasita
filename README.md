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
│   └── index.html            … 講義・SparkAI・Claude の質問に即答するアプリ
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

講義中に受講生から出た質問に、講師の画面から5秒以内に答えるためのアプリです。
claude.ai の Artifact として公開して使います（Claude への接続は claude.ai 上でのみ動きます）。

- 上のボタンで「講義 / Claude / SparkAI / SparkAI×Claude」を切り替え
- 「講義」は第2章「Webアプリのしくみ」のスライド本文と講師メモをもとに、スライドと同じたとえで答えます
- ● のついた質問ボタンは用意した回答で、押すとすぐ表示されます。それ以外は AI が150字ほどで答え、何秒で答え始めたかを表示します
- 「大きく表示」でプロジェクター向けに文字を大きくします
- 講義の前に一度質問しておくと、最初の許可確認が本番で出ません
- SparkAI は株式会社ReFast のAIスクール（https://sparkai.jp/）の情報をもとに答えます
- 「SparkAI 追加メモ」に公式の最新情報を貼ると、それを優先して答えます
- Enter で送信、Shift+Enter で改行、「止める」で回答を中断
- マイクボタンを押して話し、もう一度押すと質問を送信（Chrome などのブラウザ、Claude デスクトップアプリで使えます）
