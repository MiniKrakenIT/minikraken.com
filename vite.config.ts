import { enhancedImages } from '@sveltejs/enhanced-img'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import devtoolsJson from 'vite-plugin-devtools-json'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
	ssr: {
		noExternal: [
			'devalue',
			'cookie',
			'set-cookie-parser',
			'clsx',
			'nanoid',
			'posthog-js',
			'resend',
			'motion',
			'valibot'
		]
	},
	optimizeDeps: { include: ['@exodus/schemasafe'] },
	plugins: [tailwindcss(), ViteImageOptimizer(), enhancedImages(), sveltekit(), devtoolsJson()]
})
