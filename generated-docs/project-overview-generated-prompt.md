Last updated: 2025-11-10


# プロジェクト概要生成プロンプト（来訪者向け）

## 生成するもの：
- projectを3行で要約する
- プロジェクトで使用されている技術スタックをカテゴリ別に整理して説明する
- プロジェクト全体のファイル階層ツリー（ディレクトリ構造を図解）
- プロジェクト全体のファイルそれぞれの説明
- プロジェクト全体の関数それぞれの説明
- プロジェクト全体の関数の呼び出し階層ツリー

## 生成しないもの：
- Issues情報（開発者向け情報のため）
- 次の一手候補（開発者向け情報のため）
- ハルシネーションしそうなもの（例、存在しない機能や計画を勝手に妄想する等）

## 出力フォーマット：
以下のMarkdown形式で出力してください：

```markdown
# Project Overview

## プロジェクト概要
[以下の形式で3行でプロジェクトを要約]
- [1行目の説明]
- [2行目の説明]
- [3行目の説明]

## 技術スタック
[使用している技術をカテゴリ別に整理して説明]
- フロントエンド: [フロントエンド技術とその説明]
- 音楽・オーディオ: [音楽・オーディオ関連技術とその説明]
- 開発ツール: [開発支援ツールとその説明]
- テスト: [テスト関連技術とその説明]
- ビルドツール: [ビルド・パース関連技術とその説明]
- 言語機能: [言語仕様・機能とその説明]
- 自動化・CI/CD: [自動化・継続的統合関連技術とその説明]
- 開発標準: [コード品質・統一ルール関連技術とその説明]

## ファイル階層ツリー
```
[プロジェクトのディレクトリ構造をツリー形式で表現]
```

## ファイル詳細説明
[各ファイルの役割と機能を詳細に説明]

## 関数詳細説明
[各関数の役割、引数、戻り値、機能を詳細に説明]

## 関数呼び出し階層ツリー
```
[関数間の呼び出し関係をツリー形式で表現]
```
```


以下のプロジェクト情報を参考にして要約を生成してください：

## プロジェクト情報
名前: obsidian-plugin-music-code-blocks-mmlabc
説明: # obsidian-plugin-mmlabc
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
    - 実験段階のため、頻繁に破壊的変更があります。詳しくは[mml2abc commits](https://github.com/cat2151/mml2abc/commits/main/) と [chord2mml commits](https://github.com/cat2151/chord2mml/commits/main/)を参照ください。（当プラグインは、それらを取り込んでいるだけです。1週間ごとに取り込んでいます）

# Installation
- Obsidian に [BRAT（Beta Reviewers Auto-update Tester）](https://github.com/TfTHacker/obsidian42-brat)コミュニティプラグインをinstallします。
- コマンドパレット等からBRATを起動します。
- 当GitHubのURLを入力します。
- コードブロックにMMLやコード進行を書くと五線譜が表示されることを確認します。（入力内容は前述を参照ください）
- update時は、コマンドパレットで `brat check` 等が楽です。反映されない場合、Obsidianを再起動で解決することがあります。

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
- 安定性。破壊的変更のないMMLフォーマットやコード進行表記。
- 互換性。あらゆるMML方言やコード進行表記方言を自動判別して自動変換。

## fork元のREADMEはこちら
[Obsidian ABC.JS plugin README](README_original.md)

## fork元との関係
- 大部分の機能を、fork元である [Obsidian ABC.JS plugin](https://github.com/abcjs-music/obsidian-plugin-abcjs) に依存しています。
- 当プラグインが行っているのは、トランスパイラ [mml2abc](https://github.com/cat2151/mml2abc) を利用し、ObsidianコードブロックのMMLを、abcjsが理解できる ABC Music notation に変換することです。
- 同様に、[chord2mml](https://github.com/cat2151/chord2mml)を利用し、Chord notationをMMLに変換しています。
- Obsidian ABC.JS pluginは、そしてそれが利用しているabcjsは、プレーンテキスト文字を入力するだけで五線譜の描画とSound FontによるPCMソフトシンセ演奏を可能にする、素晴らしいプロジェクトです。プロジェクトの皆様の活動に敬意を表します。


依存関係:
{
  "dependencies": {
    "abcjs": "6.2.2"
  },
  "devDependencies": {
    "@rollup/plugin-commonjs": "15.1.0",
    "@rollup/plugin-node-resolve": "9.0.0",
    "@rollup/plugin-typescript": "9.0.2",
    "@types/node": "18.11.9",
    "obsidian": "https://github.com/obsidianmd/obsidian-api/tarball/master",
    "rollup": "2.79.1",
    "tslib": "2.4.1",
    "typescript": "4.8.4"
  }
}

## ファイル階層ツリー
📄 .gitignore
📄 LICENSE
📖 README.md
📖 README_original.md
📄 _config.yml
📘 cfg.ts
📄 example.png
📄 example_tablatures.jpg
📁 generated-docs/
📁 issue-notes/
  📖 2.md
  📖 3.md
📜 main.js
📘 main.ts
📊 manifest.json
📁 mml/
  📜 chord2mml.js
  📄 mml2abc.mjs
📘 note_highlighter.ts
📊 package-lock.json
📊 package.json
📘 playback_element.ts
📜 rollup.config.js
🎨 styles.css
📊 tsconfig.json
📁 typeDefs/
  📘 abcjs.d.ts
📊 versions.json
📄 yarn.lock

## ファイル詳細分析
**cfg.ts** (28行, 918バイト)
  - 関数: なし
  - インポート: abcjs

**main.js** (25014行, 4448063バイト)
  - 関数: __extends, __, __awaiter, adopt, fulfilled, rejected, step, __generator, verb, getLineEndTimings, hideMeasures, disappearMeasuresAfter, disappearMeasuresBefore, measureCallback, getLineAndMeasure, setCursor, initializeFonts, processNumberOnly, parseStretchLast, transposeChordName, createKeyReverse, relativeMajor$2, relativeMode$1, transposeKey$1, keyAccidentals$1, accidentalChange, letter_to_overlay, durationOfMeasure, wrapLines, addLineBreaks, findLineBreaks, freeFormLineBreaks, clone, oneTry, optimizeLineWidths, fixedMeasureLineBreaks, getRevisedTuneParams, calcLineWraps, setDynamics, numNotesToDecoration, endingVolume, insertTempoChanges, chordVoiceOffThisBar, getTrackTitle, interpretTempo, interpretMeter, removeNaturals, addKey, addMeter, addIfDifferent, pitchesToPerc, setChannel, chordTrackEmpty, timeToRealTime, durationRounded, preProcess, getBeatFraction, findChord, calcBeat, processVolume, processChord, findNoteModifications, doModifiedNotes, writeNote, getRealDuration, adjustPitch, setKeySignature, processGraceNotes, writeGraceNotes, adjustForMicroTone, extractOctave, extractNote, interpretChord, chordNotes, writeBoom, writeChick, resolveChords, normalizeDrumDefinition, alignDrumToMeter, writeDrum, findOctaves, delineTune, findMismatchKeys, replacer, addMeterToVoices, addKeyToVoices, addClefToVoices, addFontToVoices, objEqual, cloneLine, copy, computePickupLength, addVerticalInfo, makeSortedArray, skipTies, addEndPoints, findLastBar, fixTitles, cleanUpSlursInLine, fixClefPlacement, wrapMusicLines, getNextMusicLine, addPositioning, addFont, appendLastMeasure, addHintMeasure, addHintMeasures, StringTablature, TabCommon, VoiceElement, AbsoluteElement, RelativeElement, isObject, cloneObject, cloneAbsolute, cloneAbsoluteAndRelatives, buildTabAbsolute, lyricsDim, TabAbsoluteElements, getInitialStaffSize, buildRelativeTabNote, getXGrace, graceInRest, convertToNumber, buildGraceRelativesForRest, initSpecialY, getLyricHeight, buildTabName, TabRenderer, islastTabInStaff, getStaffNumbers, getParentStaffIndex, linkStaffAndTabs, isMultiVoiceSingleStaff, getNextTabPos, getLastStaff, checkVoiceKeySig, noteToMidi$2, midiToNote$1, TabNote, cloneNote, TabNotes, buildCapo, buildPatterns, buildSecond, sameString, handleChordNotes, noteToNumber, toNumber, invalidNumber, StringPatterns, ViolinPatterns, Plugin$1, GuitarPatterns, Plugin, callback, transposeOneTune, changeAllKeySigs, transposeVoices, createKeyAccidentals, setLetterDistance, transposeVoice, newKey, transposePitch, parseNote, replaceNote, replaceGrace, replaceChord, calcAdjustment, BeamElem, calcAverage, BraceElem, clefOffsets, DynamicDecoration, CrescendoElem, GlissandoElem, TieElem, Decoration, highestPitch, lowestPitch, compoundDecoration, incrementPlacement, getPlacement, textDecoration, symbolDecoration, leftDecoration, EndingElem, TempoElement, TripletElem, germanNote, translateChord, getBeamGroup, writeMeasureWidth, setAveragePitch, addRestToAbsElement, addIfNotExist, Svg, constructHLine, constructVLine, createSvg, setPaddingVariable, FreeText, Separator, Subtitle, addTextIf, TopText, BottomText, setupSelection, getCoord, elementFocused, keyboardDown, keyboardSelection, findElementInHistory, findElementByCoord, getBestMatchCoordinates, getTarget, getMousePosition, attachMissingTouchEventAttributes, mouseDown, mouseMove, mouseUp, setSelection, notifySelect, findNumber, clearSelection, rangeHighlight, getClassSet, setClassSet, addGlobalClass, removeGlobalClass, getBarYAt, minStem, calcSlant, calcDy, calcXPos, calcYPos, createStems, createAdditionalBeams, layoutTriplet, isAbove, heightAtMidpoint, xAtMidpoint, moveDecorations, placeInLane, setLaneForChord, numAnnotationsBelow, setLane, yAtNote, incTop, setUpperAndLowerVoiceElements, setUpperAndLowerAbsoluteElements, setUpperAndLowerCrescendoElements, setUpperAndLowerDynamicElements, setUpperAndLowerEndingElements, setUpperAndLowerTempoElement, setUpperAndLowerRelativeElements, VoiceElements, getExtraWidth, getMinWidth, checkLastBarX, finished, getDurationIndex, isSameStaff, getLeftEdgeOfStaff, addBraceSize, setBraceLocation, setLocation, calcHorizontalSpacing, centerWholeRests, Classes, GetFontAndAttr, GetTextSize, str_repeat, roundNumber, renderText, drawBrace, straightPath, curvyPath, curve, printPath, drawGlissando, lineLength, slope, getY$1, numSquigglies, segment, drawCrescendo, Group, printSymbol, kernSymbols, drawDynamics, drawTriplet, drawLine, drawBracket, drawEnding, drawTie, drawBeam, draw$1, getSlope, getY, printStem, printLine, printStaffLine, drawRelativeElement, scaleExistingElem, drawTempo, drawAbsolute, drawVoice, isNonSpacerRest, printStaff, printDebugBox, drawSeparator, nonMusic, drawStaffGroup, debugPrintGridItem, printBrace, addInvisibleMarker, boxAllElements, setPaperSize, Selectables, draw, engraveStaffLine, addStaffPadding, splitSvgIntoLines, duplicateSvg, resizeOuter, renderOne, doLineWrapping, registerAudioContext, activeAudioContext, supportsAudio, bufferToWave, setUint16, setUint32, centsToFactor, placeNote, CreateSynth, resolveData, setPan, addSwing, CreateSynthControl, buildDom, acResumerMiddleWare, doNext, attachListeners, playEvent, doPlay, SynthController, sleep, setAttributes, Midi, encodeString, keySignature, timeSignature, encodeHex, toHex, to7BitHex, toDurationHex, addNotes, isFunction, gatherAbcParams, NoteHighlighter, PlaybackElement, getNoteLengthAbc, decimalToFraction, updateSharpFlats, peg$subclass, C, peg$SyntaxError, peg$padEnd, hex, literalEscape, classEscape, describeExpectation, describeExpected, describeFound, peg$parse, text, peg$literalExpectation, peg$classExpectation, peg$endExpectation, peg$otherExpectation, peg$computePosDetails, peg$computeLocation, peg$fail, peg$buildStructuredError, peg$parseMMLs, peg$parseMML, peg$parseNOTE, peg$parseREST, peg$parseOCTAVE, peg$parseOCTAVE_UP, peg$parseOCTAVE_DOWN, peg$parseNOTE_LENGTH, peg$parseCHORD, peg$parsePROGRAM_CHANGE, peg$parseTEMPO, peg$parseVOLUME, peg$parseSTACCATO, peg$parseTRANSPOSE, peg$parseREPEAT, peg$parseINLINE_ABC, peg$parseTIME_SHIFT, peg$parseTRACK_SEPARATOR, peg$parsePITCH, peg$parseSHARP, peg$parseFLAT, peg$parseMINUS, peg$parseINTEGER, peg$parse_, initTrackParams, insertVolumeBeforeNoteOrRest, volume2abc, createAbc, postProcess, createCommonjsModule, commonjsRequire, t, e, n, o, s, a, _o, Ho, zo, Wo, Xo, Yo, Zo, $o, rs, ts, es, ns, os, ss, as, us, cs, is, fs, ls, hs, bs, u, c, i, f, l, h, b, v, d, p, A, g, m, MusicPlugin, function, P, catch, switch, if, while, then, Promise, for, forEach, findIndex, filter, commonly, sort, decodeAudioData, setTimeout, addEventListener, map, replace, return, codeProcessor
  - インポート: obsidian, ./abc_tablatures

**main.ts** (43行, 1759バイト)
  - 関数: onload, onunload, codeProcessor, codeProcessorMml, codeProcessorChord
  - インポート: obsidian, ./cfg, ./playback_element

**mml/chord2mml.js** (1行, 41198バイト)
  - 関数: t, e, n, o, s, a, _o, Ho, zo, Wo, Xo, Yo, Zo, $o, rs, ts, es, ns, os, ss, as, us, cs, is, fs, ls, hs, bs, u, c, i, f, l, h, b, v, d, p, A, g, m, function, switch, if, map, replace, return, filter, sort, for
  - インポート: なし

**note_highlighter.ts** (47行, 1654バイト)
  - 関数: togglePlayingHighlight, rmNoteHighlights, rmAllHighlights, constructor, onEvent
  - インポート: abcjs

**playback_element.ts** (109行, 4175バイト)
  - 関数: constructor, onload, onunload, if, catch, renderError, enableAudioPlayback
  - インポート: abcjs, obsidian, ./cfg

**rollup.config.js** (19行, 424バイト)
  - 関数: なし
  - インポート: @rollup/plugin-typescript, @rollup/plugin-node-resolve, @rollup/plugin-commonjs

**styles.css** (50行, 1180バイト)
  - 関数: なし
  - インポート: なし

**typeDefs/abcjs.d.ts** (8行, 167バイト)
  - 関数: なし
  - インポート: なし

## 関数呼び出し階層
- __extends (main.js)
  - __ ()
  - __awaiter ()
  - adopt ()
  - fulfilled ()
  - rejected ()
  - step ()
  - __generator ()
  - verb ()
  - getLineEndTimings ()
  - hideMeasures ()
  - disappearMeasuresAfter ()
  - disappearMeasuresBefore ()
  - measureCallback ()
  - getLineAndMeasure ()
  - setCursor ()
  - initializeFonts ()
  - processNumberOnly ()
  - parseStretchLast ()
  - transposeChordName ()
  - createKeyReverse ()
  - relativeMajor$2 ()
  - relativeMode$1 ()
  - transposeKey$1 ()
  - keyAccidentals$1 ()
  - accidentalChange ()
  - letter_to_overlay ()
  - durationOfMeasure ()
  - wrapLines ()
  - addLineBreaks ()
  - findLineBreaks ()
  - freeFormLineBreaks ()
  - clone ()
  - oneTry ()
  - optimizeLineWidths ()
  - fixedMeasureLineBreaks ()
  - getRevisedTuneParams ()
  - calcLineWraps ()
  - setDynamics ()
  - numNotesToDecoration ()
  - endingVolume ()
  - insertTempoChanges ()
  - chordVoiceOffThisBar ()
  - getTrackTitle ()
  - interpretTempo ()
  - interpretMeter ()
  - removeNaturals ()
  - addKey ()
  - addMeter ()
  - addIfDifferent ()
  - pitchesToPerc ()
  - setChannel ()
  - chordTrackEmpty ()
  - timeToRealTime ()
  - durationRounded ()
  - preProcess ()
  - getBeatFraction ()
  - findChord ()
  - calcBeat ()
  - processVolume ()
  - processChord ()
  - findNoteModifications ()
  - doModifiedNotes ()
  - writeNote ()
  - getRealDuration ()
  - adjustPitch ()
  - setKeySignature ()
  - processGraceNotes ()
  - writeGraceNotes ()
  - adjustForMicroTone ()
  - extractOctave ()
  - extractNote ()
  - interpretChord ()
  - chordNotes ()
  - writeBoom ()
  - writeChick ()
  - resolveChords ()
  - normalizeDrumDefinition ()
  - alignDrumToMeter ()
  - writeDrum ()
  - findOctaves ()
  - delineTune ()
  - findMismatchKeys ()
  - replacer ()
  - addMeterToVoices ()
  - addKeyToVoices ()
  - addClefToVoices ()
  - addFontToVoices ()
  - objEqual ()
  - cloneLine ()
  - copy ()
  - computePickupLength ()
  - addVerticalInfo ()
  - makeSortedArray ()
  - skipTies ()
  - addEndPoints ()
  - findLastBar ()
  - fixTitles ()
  - cleanUpSlursInLine ()
  - fixClefPlacement ()
  - wrapMusicLines ()
  - getNextMusicLine ()
  - addPositioning ()
  - addFont ()
  - appendLastMeasure ()
  - addHintMeasure ()
  - addHintMeasures ()
  - StringTablature ()
  - TabCommon ()
  - VoiceElement ()
  - AbsoluteElement ()
  - RelativeElement ()
  - isObject ()
  - cloneObject ()
  - cloneAbsolute ()
  - cloneAbsoluteAndRelatives ()
  - buildTabAbsolute ()
  - lyricsDim ()
  - TabAbsoluteElements ()
  - getInitialStaffSize ()
  - buildRelativeTabNote ()
  - getXGrace ()
  - graceInRest ()
  - convertToNumber ()
  - buildGraceRelativesForRest ()
  - initSpecialY ()
  - getLyricHeight ()
  - buildTabName ()
  - TabRenderer ()
  - islastTabInStaff ()
  - getStaffNumbers ()
  - getParentStaffIndex ()
  - linkStaffAndTabs ()
  - isMultiVoiceSingleStaff ()
  - getNextTabPos ()
  - getLastStaff ()
  - checkVoiceKeySig ()
  - noteToMidi$2 ()
  - midiToNote$1 ()
  - TabNote ()
  - cloneNote ()
  - TabNotes ()
  - buildCapo ()
  - buildPatterns ()
  - buildSecond ()
  - sameString ()
  - handleChordNotes ()
  - noteToNumber ()
  - toNumber ()
  - invalidNumber ()
  - StringPatterns ()
  - ViolinPatterns ()
  - Plugin$1 ()
  - GuitarPatterns ()
  - Plugin ()
  - callback ()
  - transposeOneTune ()
  - changeAllKeySigs ()
  - transposeVoices ()
  - createKeyAccidentals ()
  - setLetterDistance ()
  - transposeVoice ()
  - newKey ()
  - transposePitch ()
  - parseNote ()
  - replaceNote ()
  - replaceGrace ()
  - replaceChord ()
  - calcAdjustment ()
  - BeamElem ()
  - calcAverage ()
  - BraceElem ()
  - clefOffsets ()
  - DynamicDecoration ()
  - CrescendoElem ()
  - GlissandoElem ()
  - TieElem ()
  - Decoration ()
  - highestPitch ()
  - lowestPitch ()
  - compoundDecoration ()
  - incrementPlacement ()
  - getPlacement ()
  - textDecoration ()
  - symbolDecoration ()
  - leftDecoration ()
  - EndingElem ()
  - TempoElement ()
  - TripletElem ()
  - germanNote ()
  - translateChord ()
  - getBeamGroup ()
  - writeMeasureWidth ()
  - setAveragePitch ()
  - addRestToAbsElement ()
  - addIfNotExist ()
  - Svg ()
  - constructHLine ()
  - constructVLine ()
  - createSvg ()
  - setPaddingVariable ()
  - FreeText ()
  - Separator ()
  - Subtitle ()
  - addTextIf ()
  - TopText ()
  - BottomText ()
  - setupSelection ()
  - getCoord ()
  - elementFocused ()
  - keyboardDown ()
  - keyboardSelection ()
  - findElementInHistory ()
  - findElementByCoord ()
  - getBestMatchCoordinates ()
  - getTarget ()
  - getMousePosition ()
  - attachMissingTouchEventAttributes ()
  - mouseDown ()
  - mouseMove ()
  - mouseUp ()
  - setSelection ()
  - notifySelect ()
  - findNumber ()
  - clearSelection ()
  - rangeHighlight ()
  - getClassSet ()
  - setClassSet ()
  - addGlobalClass ()
  - removeGlobalClass ()
  - getBarYAt ()
  - minStem ()
  - calcSlant ()
  - calcDy ()
  - calcXPos ()
  - calcYPos ()
  - createStems ()
  - createAdditionalBeams ()
  - layoutTriplet ()
  - isAbove ()
  - heightAtMidpoint ()
  - xAtMidpoint ()
  - moveDecorations ()
  - placeInLane ()
  - setLaneForChord ()
  - numAnnotationsBelow ()
  - setLane ()
  - yAtNote ()
  - incTop ()
  - setUpperAndLowerVoiceElements ()
  - setUpperAndLowerAbsoluteElements ()
  - setUpperAndLowerCrescendoElements ()
  - setUpperAndLowerDynamicElements ()
  - setUpperAndLowerEndingElements ()
  - setUpperAndLowerTempoElement ()
  - setUpperAndLowerRelativeElements ()
  - VoiceElements ()
  - getExtraWidth ()
  - getMinWidth ()
  - checkLastBarX ()
  - finished ()
  - getDurationIndex ()
  - isSameStaff ()
  - getLeftEdgeOfStaff ()
  - addBraceSize ()
  - setBraceLocation ()
  - setLocation ()
  - calcHorizontalSpacing ()
  - centerWholeRests ()
  - Classes ()
  - GetFontAndAttr ()
  - GetTextSize ()
  - str_repeat ()
  - roundNumber ()
  - renderText ()
  - drawBrace ()
  - straightPath ()
  - curvyPath ()
  - curve ()
  - printPath ()
  - drawGlissando ()
  - lineLength ()
  - slope ()
  - getY$1 ()
  - numSquigglies ()
  - segment ()
  - drawCrescendo ()
  - Group ()
  - printSymbol ()
  - kernSymbols ()
  - drawDynamics ()
  - drawTriplet ()
  - drawLine ()
  - drawBracket ()
  - drawEnding ()
  - drawTie ()
  - drawBeam ()
  - draw$1 ()
  - getSlope ()
  - getY ()
  - printStem ()
  - printLine ()
  - printStaffLine ()
  - drawRelativeElement ()
  - scaleExistingElem ()
  - drawTempo ()
  - drawAbsolute ()
  - drawVoice ()
  - isNonSpacerRest ()
  - printStaff ()
  - printDebugBox ()
  - drawSeparator ()
  - nonMusic ()
  - drawStaffGroup ()
  - debugPrintGridItem ()
  - printBrace ()
  - addInvisibleMarker ()
  - boxAllElements ()
  - setPaperSize ()
  - Selectables ()
  - draw ()
  - engraveStaffLine ()
  - addStaffPadding ()
  - splitSvgIntoLines ()
  - duplicateSvg ()
  - resizeOuter ()
  - renderOne ()
  - doLineWrapping ()
  - registerAudioContext ()
  - activeAudioContext ()
  - supportsAudio ()
  - bufferToWave ()
  - setUint16 ()
  - setUint32 ()
  - centsToFactor ()
  - placeNote ()
  - CreateSynth ()
  - resolveData ()
  - setPan ()
  - addSwing ()
  - CreateSynthControl ()
  - buildDom ()
  - acResumerMiddleWare ()
  - doNext ()
  - attachListeners ()
  - playEvent ()
  - doPlay ()
  - SynthController ()
  - sleep ()
  - setAttributes ()
  - Midi ()
  - encodeString ()
  - keySignature ()
  - timeSignature ()
  - encodeHex ()
  - toHex ()
  - to7BitHex ()
  - toDurationHex ()
  - addNotes ()
  - isFunction ()
  - gatherAbcParams ()
  - NoteHighlighter ()
  - PlaybackElement ()
  - getNoteLengthAbc ()
  - decimalToFraction ()
  - updateSharpFlats ()
  - peg$subclass ()
  - C ()
  - peg$SyntaxError ()
  - peg$padEnd ()
  - hex ()
  - literalEscape ()
  - classEscape ()
  - describeExpectation ()
  - describeExpected ()
  - describeFound ()
  - peg$parse ()
  - text ()
  - peg$literalExpectation ()
  - peg$classExpectation ()
  - peg$endExpectation ()
  - peg$otherExpectation ()
  - peg$computePosDetails ()
  - peg$computeLocation ()
  - peg$fail ()
  - peg$buildStructuredError ()
  - peg$parseMMLs ()
  - peg$parseMML ()
  - peg$parseNOTE ()
  - peg$parseREST ()
  - peg$parseOCTAVE ()
  - peg$parseOCTAVE_UP ()
  - peg$parseOCTAVE_DOWN ()
  - peg$parseNOTE_LENGTH ()
  - peg$parseCHORD ()
  - peg$parsePROGRAM_CHANGE ()
  - peg$parseTEMPO ()
  - peg$parseVOLUME ()
  - peg$parseSTACCATO ()
  - peg$parseTRANSPOSE ()
  - peg$parseREPEAT ()
  - peg$parseINLINE_ABC ()
  - peg$parseTIME_SHIFT ()
  - peg$parseTRACK_SEPARATOR ()
  - peg$parsePITCH ()
  - peg$parseSHARP ()
  - peg$parseFLAT ()
  - peg$parseMINUS ()
  - peg$parseINTEGER ()
  - peg$parse_ ()
  - initTrackParams ()
  - insertVolumeBeforeNoteOrRest ()
  - volume2abc ()
  - createAbc ()
  - postProcess ()
  - createCommonjsModule ()
  - commonjsRequire ()
  - t ()
    - e ()
      - n ()
      - o ()
      - s ()
      - a ()
      - _o ()
      - Ho ()
      - zo ()
      - Wo ()
      - Xo ()
      - Yo ()
      - Zo ()
      - $o ()
      - rs ()
      - ts ()
      - es ()
      - ns ()
      - os ()
      - ss ()
      - as ()
      - us ()
      - cs ()
      - is ()
      - fs ()
      - ls ()
      - hs ()
      - bs ()
      - u ()
      - c ()
      - i ()
      - f ()
      - l ()
      - h ()
      - b ()
      - v ()
      - d ()
      - p ()
      - A ()
      - g ()
      - m ()
      - function ()
      - switch ()
      - if ()
      - for ()
      - filter ()
      - sort ()
      - map ()
      - replace ()
      - return ()
  - MusicPlugin ()
  - P ()
  - catch ()
  - while ()
  - then ()
  - Promise ()
  - forEach ()
  - findIndex ()
  - decodeAudioData ()
  - setTimeout ()
  - addEventListener ()
  - codeProcessor ()
    - onload (main.ts)
      - onunload ()
      - codeProcessorMml ()
      - codeProcessorChord ()
  - togglePlayingHighlight ()
    - rmNoteHighlights ()
    - rmAllHighlights ()
    - constructor (undefined)


## プロジェクト構造（ファイル一覧）
README.md
README_original.md
cfg.ts
issue-notes/2.md
issue-notes/3.md
main.js
main.ts
manifest.json
mml/chord2mml.js
note_highlighter.ts
package-lock.json
package.json
playback_element.ts
rollup.config.js
styles.css
tsconfig.json
typeDefs/abcjs.d.ts
versions.json

上記の情報を基に、プロンプトで指定された形式でプロジェクト概要を生成してください。
特に以下の点を重視してください：
- 技術スタックは各カテゴリごとに整理して説明
- ファイル階層ツリーは提供された構造をそのまま使用
- ファイルの説明は各ファイルの実際の内容と機能に基づく
- 関数の説明は実際に検出された関数の役割に基づく
- 関数呼び出し階層は実際の呼び出し関係に基づく


---
Generated at: 2025-11-10 10:24:04 JST
