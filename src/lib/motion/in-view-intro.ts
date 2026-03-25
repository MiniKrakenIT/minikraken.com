import { animate, inView } from 'motion'
import type { Action } from 'svelte/action'

export const inViewIntro: Action<HTMLElement, number | undefined> = (
	element,
	index = 1
) => {
	element.style.opacity = '0'

	inView(element, (element) => {
		animate(
			element,
			{
				filter: ['blur(10px)', 'blur(0px)'],
				opacity: [0, 1],
				y: ['1rem', 0]
			},
			{ delay: 0.3 * index, duration: 0.7, ease: 'easeOut' }
		)
	})
}
