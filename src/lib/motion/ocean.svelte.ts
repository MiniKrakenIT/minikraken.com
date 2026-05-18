import type { Attachment } from 'svelte/attachments'

let isAnimationPlaying = $state(false)

export const setAnimationPlaying = (value: boolean) => (isAnimationPlaying = value)

export const bubbles: Attachment = (element) => {
	$effect(() => {
		if (element instanceof HTMLElement) {
			element.style.animationPlayState = isAnimationPlaying ? 'paused' : 'running'
		}
	})
}

export const rays: Attachment = (element) => {
	$effect(() => {
		if (element instanceof HTMLElement) {
			element.style.animationPlayState = isAnimationPlaying ? 'paused' : 'running'
		}
	})
}
