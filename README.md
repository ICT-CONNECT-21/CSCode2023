# 学習指導要領検索システム

## ● ツール概要

2022年度文部科学省事業の「 CBT システムの拡充・活用推進、教育データの利活用推進事業（学習指導要領コードの利活用に関する調査研究事業） 」の成果として「学習指導要領データセット」「学習指導要領解説データセット」「学習指導要領解説URLデータセット」の３つのデータセットを作成しました。
作成したデータセットが正しく動作するのかを検証するために、学校種別と教科で学習指導要領データセットを検索し、検索結果を学習指導要領コードで学習指導要領解説データセット・学習指導要領解説URLデータセットを結び付けて表示を行い、検索結果選択により、学習指導要領解説PDFの解説が載っているページへリンクする検索システムを作成しました。

## ● 動作保証環境

ブラウザ ：Google Chrome, Microsoft Edge, Firefox, Internet Explorer 11

## ● 構築・操作手順

/manual.pdf をご参照ください。

## ● 利用 OSS

以下の OSS を利用しています。

**jQuery**

```
Jquery v1.8.3(https://jquery.com/download/)
MIT License
Copyright OpenJS Foundation and other contributors, https://openjsf.org/
```

**Express**

```
Express v4.18.2(https://github.com/expressjs/express)
MIT License
Copyright (c) 2009-2014 TJ Holowaychuk <tj@vision-media.ca>
Copyright (c) 2013-2014 Roman Shtylman <shtylman+expressjs@gmail.com>
Copyright (c) 2014-2015 Douglas Christopher Wilson <doug@somethingdoug.com>
```

**SQLite**

```
SQLite v5.1.4(https://github.com/bootstrap-vue/bootstrap-vue)
BSD-3-Clause license
Copyright (c) MapBox All rights reserved.
```
