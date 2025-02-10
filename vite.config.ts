import { enhancedImages } from '@sveltejs/enhanced-img'
import { sveltekit } from '@sveltejs/kit/vite'
import UnoCSS from '@unocss/svelte-scoped/vite'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
	plugins: [
		UnoCSS({
			classPrefix: 'tw-'
			// injectReset: '@unocss/reset/normalize.css', // see type definition for all included reset options or how to pass in your own
			// ...other Svelte Scoped options
		}),
		ViteImageOptimizer(),
		enhancedImages(),
		sveltekit()
	]
})
