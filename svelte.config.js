import adapter from '@sveltejs/adapter-node'
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
		paths: {
			assets: 'https://cdn.minikraken.com'
		},
		csp: {
			mode: 'auto'
		},
		alias: {
			$lib: './src/lib',
			$components: './src/lib/components',
			$stores: './src/lib/data/stores',
			$styles: './src/lib/styles',
			$assets: './src/lib/assets',
			$data: './src/lib/data'
		},
		adapter: adapter({
			precompress: true
		})
	}
}

export default config
