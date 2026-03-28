import { browser } from '$app/environment'
import { type AnimationOptions, animate, type AnimationPlaybackControls } from 'motion'
import type { Attachment } from 'svelte/attachments'
import { setAnimationPlaying } from '$lib/motion/ocean.svelte'

export const NavigationAnimation = (isOpen: boolean): Attachment => {
	return (element) => {
		if (!browser) return

		const animationOptions: AnimationOptions = {
			duration: 1,
			ease: [0.3, 0, 0, 1]
		}

		let animation: AnimationPlaybackControls | undefined
		let currentHeight = `${element.scrollHeight}px`

		const runAnimation = () => {
			animation?.stop()

			setAnimationPlaying(true)

			animation = animate(
				element,
				{
					height: isOpen ? ['.5rem', currentHeight] : [currentHeight, '.5rem']
				},
				animationOptions
			)

			animation.finished
				.then(() => {
					setAnimationPlaying(false)
				})
				.catch((error) => console.error(error))
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
