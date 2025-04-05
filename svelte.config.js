import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	compilerOptions: {
		warningFilter: (warning) => {
			return warning.code !== 'css_unused_selector'
		}
	},
	kit: {
		csp: {
			mode: 'auto'
		},
		alias: {
			$lib: './src/lib',
			$styles: './src/lib/styles',
			$assets: './src/lib/assets'
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: true,
			strict: true
		})
	}
}

export default config
