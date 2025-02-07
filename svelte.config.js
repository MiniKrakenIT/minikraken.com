import adapter from '@sveltejs/adapter-cloudflare-workers'
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
		alias: {
			$lib: './src/lib',
			$components: './src/lib/components',
			$stores: './src/lib/stores',
			$styles: './src/lib/styles',
			$assets: './src/lib/assets'
		},
		adapter: adapter({
			config: 'wrangler.toml',
			platformProxy: {
				configPath: 'wrangler.toml'
			}
		})
	}
}

export default config
