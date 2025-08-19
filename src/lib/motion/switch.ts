import { animate, stagger } from 'motion'
import type { Action } from 'svelte/action'
import { browser } from '$app/environment'

interface IntroParams {
	duration?: number
	delay?: number
}

export const Switch: Action<HTMLElement, IntroParams | undefined> = (element, params) => {
	if (browser) {
		animate(
			element,
			{
				opacity: [0, 1],
				filter: ['blur(10px)', 'blur(0px)']
			},
			{ ease: 'easeOut', duration: params?.duration ?? 0.5, delay: params?.delay ?? stagger(0.1) }
		)
	}

	return {
		destroy: () => {
			if (browser) {
				animate(
					element,
					{
						color: 'green',
						opacity: [1, 0],
						filter: ['blur(0px)', 'blur(10px)']
					},
					{
						ease: 'easeOut',
						duration: params?.duration ?? 0.5,
						delay: params?.delay ?? stagger(0.1)
					}
				)
			}
		}
	}
}
