import type { Action } from 'svelte/action'
import { animate } from 'motion'

export const intro: Action<Element, number | undefined> = (node, index = 0) => {
	animate(
		node,
		{
			opacity: [0, 1],
			y: ['1rem', 0],
			filter: ['blur(10px)', 'blur(0px)']
		},
		{ ease: 'easeOut', duration: 0.7, delay: 0.1 * index }
	)
}
