import adapter from '@jonasbuerger/svelte-adapter-bun'
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
		/*paths: {
			assets: 'https://cdn.minikraken.com'
		},*/
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
			//out: "build",
			precompress: {
				brotli: true,
				gzip: true
				//files: ["htm", "html", "js", "json", "css", "svg", "xml"],
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
	}
}

export default config
