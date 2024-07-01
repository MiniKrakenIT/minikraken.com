import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from 'svelte-adapter-bun'
import UnoCSS from './src/tooling/svelte-scoped/preprocess.js'

/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), UnoCSS()],
	compilerOptions: {
		runes: true
	},
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			precompress: {
				brotli: true,
				gzip: true,
				files: [
					'html',
					'js',
					'json',
					'css',
					'svg',
					'xml',
					'wasm',
					'ico',
					'txt',
					'ttf',
					'webmanifest'
				]
			},
			dynamic_origin: true,
			out: 'build'
		}),
		alias: {
			$components: './src/lib/components',
			$lib: './src/lib',
			$static: './static'
		},
		csp: {
			reportOnly: {
				'report-to': ['csp-endpoint'],
				'default-src': ['self'],
				'base-uri': ['self'],
				'font-src': ['self', 'https:', 'data:'],
				'form-action': ['self'],
				'frame-ancestors': ['self'],
				'img-src': ['self', 'data:'],
				'object-src': ['none'],
				'script-src': ['self', 'strict-dynamic', 'https://challenges.cloudflare.com/'],
				'script-src-attr': ['none'],
				'style-src': ['self', 'https:', 'unsafe-inline'],
				'connect-src': ['self'],
				'frame-src': ['self', 'https://challenges.cloudflare.com/'],
				'upgrade-insecure-requests': true,
				'block-all-mixed-content': true,
				'manifest-src': ['self'],
				'worker-src': ['self'],
				'media-src': ['self']
			},
			mode: 'auto'
			/*directives: {
				'default-src': ["'self'"],
				'base-uri': ["'self'"],
				'font-src': ["'self'", 'https:', 'data:'],
				'form-action': ["'self'"],
				'frame-ancestors': ["'self'"],
				'img-src': ["'self'", 'data:'],
				'object-src': ["'none'"],
				'script-src': [
					"'self'",
					"'strict-dynamic'",
					'https://challenges.cloudflare.com/',
				],
				'script-src-attr': ["'none'"],
				'style-src': ["'self'", 'https:', 'unsafe-inline'],
				'connect-src': ["'self'"],
				'frame-src': ["'self'", 'https://challenges.cloudflare.com/'],
				'upgrade-insecure-requests': true,
				'block-all-mixed-content': true,
				'manifest-src': ["'self'"],
				'worker-src': ["'self'"],
				'media-src': ["'self'"]
			}*/
		}
	}
}
