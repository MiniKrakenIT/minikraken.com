import { browser } from '$app/environment'
import { type AnimationOptions, animate } from 'motion'
import type { Action } from 'svelte/action'

export const NavigationAnimation: Action<HTMLElement, boolean> = (element) => {
	const params: AnimationOptions = {
		duration: 0.5,
		ease: 'circOut'
	}

	return {
		update: (state) => {
			if (browser) {
				if (state)
					animate(
						element,
						{
							height: ['.5rem', 'auto']
						},
						params
					)
				else
					animate(
						element,
						{
							height: ['auto', '.5rem']
						},
						params
					)
			}
		}
	}
}
