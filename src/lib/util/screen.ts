import { screenSize } from '$lib/stores/ScreenSize'
import { Screen } from '$lib/enum/Screen'

const sizes = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	xxl: 1536
}

const setScreenSize = () => {
	const width = window.innerWidth
	if (width <= sizes.sm) screenSize.set(Screen.sm)
	else if (width <= sizes.md) screenSize.set(Screen.md)
	else if (width <= sizes.lg) screenSize.set(Screen.lg)
	else if (width <= sizes.xl) screenSize.set(Screen.xl)
	else if (width <= sizes.xxl) screenSize.set(Screen.xxl)
	else screenSize.set(Screen.xxxl)
}

export const screenSizeListener = () => {
	setScreenSize()

	window.addEventListener('resize', () => {
		setScreenSize()
	})
}

export const removeScreenSizeListener = () => {
	window.removeEventListener('resize', () => {
		setScreenSize()
	})
}
