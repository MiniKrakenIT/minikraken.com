import { animate, type DOMKeyframesDefinition } from 'motion'
import { type TransitionConfig } from 'svelte/transition'

export interface SwitchParams {
	duration?: number
	delay?: number
	keyframes?: {
		in: DOMKeyframesDefinition
		out: DOMKeyframesDefinition
	}
}

export type AnimationFunction = (
	node: Element,
	params: any,
	options: { direction: 'in' | 'out' | 'both' }
) => TransitionConfig

export const Switch: AnimationFunction = (
	node,
	{ duration = 400, delay = 0, keyframes }: SwitchParams,
	options
) => {
	const style = getComputedStyle(node)
	const fullHeight =
		parseFloat(style['height']) +
		parseFloat(style[`paddingTop`]) +
		parseFloat(style[`paddingBottom`]) +
		parseFloat(style[`marginTop`]) +
		parseFloat(style[`marginBottom`]) +
		parseFloat(style['borderTop']) +
		parseFloat(style['borderBottom'])

	if (!keyframes) {
		keyframes = {
			in: {
				opacity: [0, 1],
				height: [0, fullHeight + 'px']
			},
			out: {
				opacity: [1, 0],
				height: [fullHeight + 'px', 0]
			}
		}
	}

	let forward: undefined | boolean

	const start = () => {
		animate(node, keyframes[forward ? 'in' : 'out'], {
			delay: 0,
			duration: duration / 1000
		})
	}

	return {
		duration,
		delay,
		tick: (t) => {
			if (forward === undefined) {
				forward = t === 0
				start()
			}
		}
	}
}
