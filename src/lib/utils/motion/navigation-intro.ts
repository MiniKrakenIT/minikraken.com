import type { Action } from 'svelte/action'
import { animate, inView, stagger } from 'motion'

interface IntroParams {
	selector: string
	delay?: number
}

export const intro: Action<HTMLElement, IntroParams> = (element, { selector, delay = 1.2 }) => {
	animate(
		selector,
		{
			opacity: [0, 1],
			filter: ['blur(10px)', 'blur(0px)']
		},
		{ ease: 'easeOut', duration: 0.4, delay: stagger(0.1, { startDelay: delay }) }
	)
}
