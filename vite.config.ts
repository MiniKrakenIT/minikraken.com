//import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import { enhancedImages } from '@sveltejs/enhanced-img'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'

export default defineConfig({
	define: {
		// Defaults to `true`
		__UNLAZY_HASH_DECODING__: false,
		// Defaults to `true`
		__UNLAZY_LOGGING__: false
	},
	plugins: [
		/*sentrySvelteKit({
        sourceMapsUploadOptions: {
						org: "minikraken",
						project: "minikraken",
						authToken: process.env.SENTRY_AUTH_TOKEN,
        }
    }),*/ enhancedImages(), //Inspect()
		sveltekit()
		/*mkcert({
        mkcertPath: '.ssl'
    })*/
	],
	ssr: {
		noExternal: ['web-vitals']
	},
	optimizeDeps: {
		include: ['web-vitals']
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
