import { enhancedImages } from '@sveltejs/enhanced-img'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitest/config'
import devtoolsJson from 'vite-plugin-devtools-json'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { playwright } from '@vitest/browser-playwright'

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
	plugins: [
		tailwindcss(),
		ViteImageOptimizer(),
		enhancedImages(),
		sveltekit(),
		devtoolsJson(),
		paraglideVitePlugin({
			project: './src/lib/i18n/paraglide.inlang',
			outdir: './src/lib/i18n/paraglide',
			cookieName: 'MINIKRAKEN_LOCALE',
			localStorageKey: 'MINIKRAKEN_LOCALE',
			strategy: ['url', 'cookie', 'baseLocale']
		})
	],
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: 'chromium', headless: true }]
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
})
