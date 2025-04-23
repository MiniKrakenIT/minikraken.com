import { animate, type DOMKeyframesDefinition } from 'motion'
import type { TransitionConfig } from 'svelte/transition'

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
	params: SwitchParams
) => TransitionConfig

export const Switch: AnimationFunction = (
	node,
	{ duration = 400, delay = 0 }
) => {
	const style = getComputedStyle(node)
	const fullHeight = Number.parseFloat(style.height)

	const keyframes = {
		in: {
			opacity: [0, 1],
			height: [0, fullHeight + 'px']
		},
		out: {
			opacity: [1, 0],
			height: [fullHeight + 'px', 0]
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
