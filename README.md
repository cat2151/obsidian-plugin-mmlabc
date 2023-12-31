# これはなに？
Obsidianで、Music Macro Languageを鳴らします

Chord notationも鳴らします

# どうやるの？
Obsidianにinstallします

Obsidianで以下のようにコードブロックを書きます

## MML (Music Macro Language)

````
```mml
cde
```
````

## Chord notation

````
```chord
C
```
````

# なにを目指しているの？
- Obsidianで、Music Macro Languageを鳴らします
- Chord notation（chord2mmlによる）は実装の初期段階にあり、F,G,A,Bやマイナーコード等が鳴らないので、それらも鳴るようにしていきます
- もし鳴らなくなった場合、できるだけ鳴るよう行動していくことを優先します、がabcjsに依存しているためabcjs次第なところがあります

# 目指さないものは？
- 高品位。高品位Sound Fontの高サンプリングレート再生。
- 高機能。あらゆる高度な編集を可能とする、大規模な統合された楽曲作成環境の構築。リアルタイムレコーディング。演奏しながら編集。FM音源エンジンやTone.jsなど他の波形合成エンジンを利用した多彩な音色やエフェクトの編集と再生環境の構築。あなたのObsidianをDAW同等のミュージックワークステーションに。
- 高性能。スマートフォンを含むあらゆる環境で、巨大な楽曲を途切れずに演奏。
- 安定性。破壊的変更のないMMLフォーマット。
- 互換性。あらゆるMML方言を自動判別して自動変換。

# install方法は？
追々書いていきます

# fork元のREADMEはこちら
[Obsidian ABC.JS plugin README](README_original.md)

# fork元との関係
- 大部分の機能を、fork元である [Obsidian ABC.JS plugin](https://github.com/abcjs-music/obsidian-plugin-abcjs) に依存しています。
- 当プラグインがやっているのは、トランスパイラ [mml2abc](https://github.com/cat2151/mml2abc) を利用し、ObsidianコードブロックのMMLを、abcjsが理解できる ABC Music notation に変換することです。
- 同様に、[chord2mml](https://github.com/cat2151/chord2mml)を利用し、Chord notationをMMLに変換しています。
- Obsidian ABC.JS pluginは、そしてそれが利用しているabcjsは、プレーンテキスト文字を入力するだけで五線譜の描画とSound FontによるPCMソフトシンセ演奏を可能にする、素晴らしいプロジェクトです。プロジェクトの皆様の活動に敬意を評します。