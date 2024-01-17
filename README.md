# obsidian-plugin-mmlabc
- Obsidianで、MML（Music Macro Language）を鳴らします。
- コード進行（Chord notation）も鳴らします。

# Features
- コードブロックにMMLやコード進行を書くと、
    - 五線譜が表示されます。
    - クリックで音楽を演奏できます。
- 作曲のアイデアスケッチなどの用途を想定しています。
- 複数のペインそれぞれにフレーズやコード進行を表示して、
    - それぞれを手で再生…といった使い方もできます。

# Requirement
- Obsidian

# Usage
- Obsidianで以下のようにコードブロックを書きます：

## MML (Music Macro Language)

````
```mml
cde
```
````

## コード進行（Chord notation）

````
```chord
C F
```

または

```chord
V7 I
```
````

## MMLやコード進行のフォーマットは？
- [mml2abc Demo](https://cat2151.github.io/mml2abc/dist/) と
[chord2mml Demo](https://cat2151.github.io/chord2mml/dist/)
を参照ください。
    - テンプレートをドロップダウンリストから選べます。
    - 随時サンプル追加予定です。
    - 実験段階のため、頻繁に破壊的変更があります。詳しくは[mml2abc](https://github.com/cat2151/mml2abc/)と[chord2mml](https://github.com/cat2151/chord2mml/)を参照ください。（当プラグインは、それらを取り込んでいるだけです）

# Installation
- Obsidian に [BRAT（Beta Reviewers Auto-update Tester）](https://github.com/TfTHacker/obsidian42-brat)コミュニティプラグインをinstallします。
- コマンドパレット等からBRATを起動します。
- 当GitHubのURLを入力します。
- コードブロックにMMLやコード進行を書くと五線譜が表示されることを確認します。（入力内容は前述を参照ください）

# Note

## projectが目指すことは？
- Obsidianで、MML（Music Macro Language）を鳴らします。
- Obsidianで、コード進行を鳴らします。
- もし鳴らなくなった場合、できるだけ鳴らすことを優先します。

## projectが目指さないことは？
- 高品位。高品位Sound Fontの高サンプリングレート再生。
- 高機能。あらゆる高度な編集を可能とする、大規模な統合された楽曲作成環境の構築。リアルタイムレコーディング。演奏しながら編集。FM音源エンジンやTone.jsなど他の波形合成エンジンを利用した多彩な音色やエフェクトの編集と再生環境の構築。あなたのObsidianをDAW同等のミュージックワークステーションに。
- 連携。高度なimport/exportやMIDI送受信により、DAWへのMIDIデータ連携や同期演奏を可能に。
- 高性能。スマートフォンを含むあらゆる環境で、巨大な楽曲を途切れずに演奏。
- 安定性。破壊的変更のないMMLフォーマット。
- 互換性。あらゆるMML方言を自動判別して自動変換。

## fork元のREADMEはこちら
[Obsidian ABC.JS plugin README](README_original.md)

## fork元との関係
- 大部分の機能を、fork元である [Obsidian ABC.JS plugin](https://github.com/abcjs-music/obsidian-plugin-abcjs) に依存しています。
- 当プラグインが行っているのは、トランスパイラ [mml2abc](https://github.com/cat2151/mml2abc) を利用し、ObsidianコードブロックのMMLを、abcjsが理解できる ABC Music notation に変換することです。
- 同様に、[chord2mml](https://github.com/cat2151/chord2mml)を利用し、Chord notationをMMLに変換しています。
- Obsidian ABC.JS pluginは、そしてそれが利用しているabcjsは、プレーンテキスト文字を入力するだけで五線譜の描画とSound FontによるPCMソフトシンセ演奏を可能にする、素晴らしいプロジェクトです。プロジェクトの皆様の活動に敬意を表します。
