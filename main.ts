import { MarkdownPostProcessorContext, Plugin } from 'obsidian';
import { PLAYBACK_CONTROLS_ID } from './cfg';
import { PlaybackElement } from './playback_element';
import { parse as mml2abc } from './mml/mml2abc';
import { chord2mml } from './mml/chord2mml';

export default class MusicPlugin extends Plugin {
	onload() {
		// this.registerMarkdownCodeBlockProcessor('abc', this.codeProcessor);
		// this.registerMarkdownCodeBlockProcessor('music-abc', this.codeProcessor);
		this.registerMarkdownCodeBlockProcessor('mml', this.codeProcessorMml);
		this.registerMarkdownCodeBlockProcessor('music-mml', this.codeProcessorMml);
		this.registerMarkdownCodeBlockProcessor('chord', this.codeProcessorChord);
		this.registerMarkdownCodeBlockProcessor('music-chord', this.codeProcessorChord);

		// Although unused by us, a valid DOM element is needed to create a SynthController
		const unusedPlaybackControls = document.createElement('aside');
		unusedPlaybackControls.id = PLAYBACK_CONTROLS_ID;
		unusedPlaybackControls.style.display = 'none';
		document.body.appendChild(unusedPlaybackControls);
	}

	onunload() {
		document.getElementById(PLAYBACK_CONTROLS_ID).remove();
	}

	// async codeProcessor(source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) {
	// 	ctx.addChild(new PlaybackElement(el, source));
	// }

	async codeProcessorMml(source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) {
		source = mml2abc(source);
		ctx.addChild(new PlaybackElement(el, source));
	}

	async codeProcessorChord(source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) {
		source = chord2mml.parse(source);
		source = mml2abc(source);
		ctx.addChild(new PlaybackElement(el, source));
	}

}
