import { browser } from '$app/environment'
import { animate, type AnimationOptions, type AnimationPlaybackControls } from 'motion'
import type { Attachment } from 'svelte/attachments'

export const LogoAnimation = (isOpen: boolean): Attachment => {
	return (element) => {
		if (!browser) return

		const animationOptions: AnimationOptions = {
			duration: 0.5,
			ease: 'circOut'
		}

		let animation: AnimationPlaybackControls | undefined
		let currentHeight = `${element.scrollHeight}px`

		const runAnimation = () => {
			animation?.stop()

			animation = animate(
				element,
				{
					height: isOpen ? ['0px', currentHeight] : [currentHeight, '0px']
				},
				animationOptions
			)
		}

		const observer = new ResizeObserver(() => {
			currentHeight = `${element.scrollHeight}px`
		})

		observer.observe(element)

		runAnimation()

		return () => {
			observer.disconnect()
			animation?.stop()
			animation = undefined
		}
	}
}
