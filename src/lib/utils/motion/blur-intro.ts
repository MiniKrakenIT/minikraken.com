import type { Action } from 'svelte/action'
import { animate, inView, stagger } from 'motion'

interface IntroParams {
	duration?: number
	delay?: number
}

export const intro: Action<HTMLElement, IntroParams | undefined> = (element, params) => {
	animate(
		element,
		{
			opacity: [0, 1],
			filter: ['blur(10px)', 'blur(0px)']
		},
		{ ease: 'easeOut', duration: params?.duration ?? 0.5, delay: params?.delay ?? stagger(0.1) }
	)
}
