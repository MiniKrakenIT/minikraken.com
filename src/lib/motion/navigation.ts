import { browser } from '$app/environment'
import { type AnimationOptions, animate, type AnimationPlaybackControls } from 'motion'
import type { Attachment } from 'svelte/attachments'
import { setAnimationPlaying } from '$lib/motion/ocean.svelte'

export const NavigationAnimation = ({
	navMenu,
	isOpen,
	mainContent
}: {
	navMenu: Element | null | undefined
	mainContent: Element | null | undefined
	isOpen: boolean
}): Attachment => {
	return (element) => {
		if (!browser || !navMenu) return

		const navHeight = navMenu.scrollHeight
		const target = isOpen ? navHeight : 0

		const animationOptions: AnimationOptions = {
			duration: 0.7,
			ease: [0.3, 0, 0, 1]
		}

		let animation: AnimationPlaybackControls | undefined
		let navAnimation: AnimationPlaybackControls | undefined

		animation?.pause()
		navAnimation?.pause()

		setAnimationPlaying(true)

		animation = animate(element, { y: target }, animationOptions)
		navAnimation = animate(mainContent, { y: 0 - target }, animationOptions)

		animation.finished.then(() => setAnimationPlaying(false)).catch((error) => console.error(error))

		return () => {
			navAnimation?.stop()
			animation?.stop()
			navAnimation = undefined
			animation = undefined
		}
	}
}
