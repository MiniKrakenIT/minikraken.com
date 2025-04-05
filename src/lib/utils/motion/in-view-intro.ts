import type { Action } from 'svelte/action'
import { animate, inView } from 'motion'

export const inViewIntro: Action<HTMLElement, number | undefined> = (element, index = 1) => {
	element.style.opacity = '0'

	inView(element, (element) => {
		animate(
			element,
			{
				opacity: [0, 1],
				y: ['1rem', 0],
				filter: ['blur(10px)', 'blur(0px)']
			},
			{ ease: 'easeOut', duration: 0.7, delay: 0.3 * index }
		)
	})
}
