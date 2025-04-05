import type { Action } from 'svelte/action'
import { animate, inView, stagger } from 'motion'

export interface IntroParams {
	duration?: number
	delay?: number
}

export const slideIn: Action<HTMLElement, IntroParams | undefined> = (
	element,
	params = { duration: 0.5 }
) => {
	animate(
		element,
		{
			opacity: [0, 1],
			filter: ['blur(10px)', 'blur(0px)']
		},
		{ ease: 'easeOut', duration: params.duration, delay: params.delay ?? stagger(0.1) }
	)
}
