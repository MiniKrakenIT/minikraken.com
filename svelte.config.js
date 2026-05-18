import devAdapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'
import remarkFrontmatter from 'remark-frontmatter'
import remarkLintFrontmatterSchema from 'remark-lint-frontmatter-schema'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.md'],
			remarkPlugins: [
				remarkFrontmatter,
				[
					remarkLintFrontmatterSchema,
					{
						schema: {
							type: 'object',
							properties: {
								title: {
									type: 'object',
									properties: {
										en: { type: 'string' },
										nl: { type: 'string' }
									},
									required: ['en', 'nl']
								},
								shortTitle: {
									type: 'object',
									properties: {
										en: { type: 'string' },
										nl: { type: 'string' }
									},
									required: ['en', 'nl']
								},
								excerpt: {
									type: 'object',
									properties: {
										en: { type: 'string' },
										nl: { type: 'string' }
									},
									required: ['en', 'nl']
								},
								date: { type: 'string' },
								updated: { type: 'string' },
								author: { type: 'string' },
								coverImage: { type: 'string' },
								categories: {
									type: 'array',
									items: { type: 'string' }
								},
								tags: {
									type: 'array',
									items: { type: 'string' }
								},
								draft: { type: 'boolean' }
							},
							// List the exact fields you want to enforce on every single blog post
							required: [
								'title',
								'shortTitle',
								'excerpt',
								'date',
								'updated',
								'author',
								'coverImage',
								'categories',
								'tags',
								'draft'
							]
						}
					}
				]
			]
		})
	],
	compilerOptions: {
		experimental: {
			async: true
		}
	},
	kit: {
		experimental: {
			remoteFunctions: true,
			tracing: { server: true },
			instrumentation: { server: true },
			handleRenderingErrors: false,
			forkPreloads: true
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
			$data: './src/lib/data',
			$paraglide: './src/lib/i18n/paraglide',
			$tooling: './tooling'
		},
		adapter: devAdapter({
			precompress: true
		})
		/**import.meta.env?.NODE_ENV === 'production'
				? (await import('@jonasbuerger/svelte-adapter-bun')).default({
						precompress: {
							brotli: true,
							gzip: true
						}
						tls: { //todo: make that kubernetes injects it into a certain folder so we can use native http2
							key: "server.key",
							cert: "server.crt",
						},
						//protocol_header: 'X-Forwarded-Proto', //PROTOCOL_HEADER
						//host_header: "X-Forwarded-Host", //HOST_HEADER
						//address_header: 'X-Forwarded-For', //ADDRESS_HEADER
						//xff_depth: 2
					})
				: devAdapter()**/
	},
	extensions: ['.svelte', '.svx', '.md']
}

export default config
