import devAdapter from '@sveltejs/adapter-node'
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
			$components: './src/lib/components',
			$stores: './src/lib/data/stores',
			$styles: './src/lib/styles',
			$assets: './src/lib/assets',
			$data: './src/lib/data'
		},
		adapter:
			import.meta.env?.NODE_ENV === 'production'
				? (await import('@jonasbuerger/svelte-adapter-bun')).default({
						precompress: {
							brotli: true,
							gzip: true
						}
						/*tls: { //todo: make that kubernetes injects it into a certain folder so we can use native http2
							key: "server.key",
							cert: "server.crt",
						},*/
						//protocol_header: 'X-Forwarded-Proto', //PROTOCOL_HEADER
						//host_header: "X-Forwarded-Host", //HOST_HEADER
						//address_header: 'X-Forwarded-For', //ADDRESS_HEADER
						//xff_depth: 2
					})
				: devAdapter()
	}
}

export default config
