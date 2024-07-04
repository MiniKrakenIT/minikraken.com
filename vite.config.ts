import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import { enhancedImages } from '@sveltejs/enhanced-img'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'

export default defineConfig({
	plugins: [
		enhancedImages({

		}),
		sveltekit()
	],
	ssr: {
		noExternal: ['web-vitals', 'web-vitals-reporter'] //'pino', '@axiomhq/pino',
	},
	optimizeDeps: {
		include: ['web-vitals', 'web-vitals-reporter']
	},
	css: {
		lightningcss: {
			targets: browserslistToTargets(browserslist('>= 0.5%')),
		}
	},
	test: {
		include: ['tests/**/*.{test,spec}.{js,ts}']
	}
})
