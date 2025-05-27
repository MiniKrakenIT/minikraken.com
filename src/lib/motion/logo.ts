import { browser } from '$app/environment'
import { type AnimationOptions, animate } from 'motion'
import type { Action } from 'svelte/action'

export const LogoAnimation: Action<HTMLElement, boolean> = (element) => {
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
							height: ['0', 'auto']
						},
						params
					)
				else
					animate(
						element,
						{
							height: ['auto', '0']
						},
						params
					)
			}
		}
	}
}
