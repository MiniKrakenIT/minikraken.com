import extractorSvelte from '@unocss/extractor-svelte'
import {
	defineConfig,
	presetTypography,
	presetUno,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss'

export default defineConfig({
	shortcuts: [],
	theme: {
		colors: {
			'base-100':
				'color-mix(in oklch, var(--color-base-100) calc(<alpha-value> * 100%), transparent)',
			'base-200':
				'color-mix(in oklch, var(--color-base-200) calc(<alpha-value> * 100%), transparent)',
			'base-300':
				'color-mix(in oklch, var(--color-base-300) calc(<alpha-value> * 100%), transparent)',
			'passive-100':
				'color-mix(in oklch, var(--color-passive-100) calc(<alpha-value> * 100%), transparent)',
			'passive-200':
				'color-mix(in oklch, var(--color-passive-200) calc(<alpha-value> * 100%), transparent)',
			'passive-300':
				'color-mix(in oklch, var(--color-passive-300) calc(<alpha-value> * 100%), transparent)',
			'base-content':
				'color-mix(in oklch, var(--color-base-content) calc(<alpha-value> * 100%), transparent)',
			primary: 'color-mix(in oklch, var(--color-primary) calc(<alpha-value> * 100%), transparent)',
			'primary-content':
				'color-mix(in oklch, var(--color-primary-content) calc(<alpha-value> * 100%), transparent)',
			secondary:
				'color-mix(in oklch, var(--color-secondary) calc(<alpha-value> * 100%), transparent)',
			'secondary-content':
				'color-mix(in oklch, var(--color-secondary-content) calc(<alpha-value> * 100%), transparent)',
			accent: 'color-mix(in oklch, var(--color-accent) calc(<alpha-value> * 100%), transparent)',
			'accent-content':
				'color-mix(in oklch, var(--color-accent-content) calc(<alpha-value> * 100%), transparent)',
			neutral: 'color-mix(in oklch, var(--color-neutral) calc(<alpha-value> * 100%), transparent)',
			'neutral-content':
				'color-mix(in oklch, var(--color-neutral-content) calc(<alpha-value> * 100%), transparent)',
			info: 'color-mix(in oklch, var(--color-info) calc(<alpha-value> * 100%), transparent)',
			'info-content':
				'color-mix(in oklch, var(--color-info-content) calc(<alpha-value> * 100%), transparent)',
			success: 'color-mix(in oklch, var(--color-success) calc(<alpha-value> * 100%), transparent)',
			'success-content':
				'color-mix(in oklch, var(--color-success-content) calc(<alpha-value> * 100%), transparent)',
			warning: 'color-mix(in oklch, var(--color-warning) calc(<alpha-value> * 100%), transparent)',
			'warning-content':
				'color-mix(in oklch, var(--color-warning-content) calc(<alpha-value> * 100%), transparent)',
			error: 'color-mix(in oklch, var(--color-error) calc(<alpha-value> * 100%), transparent)',
			'error-content':
				'color-mix(in oklch, var(--color-error-content) calc(<alpha-value> * 100%), transparent)'
		}
	},
	presets: [
		presetUno({
			variablePrefix: 'tw-'
		}),
		presetTypography()
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	extractors: [extractorSvelte()],
	variants: [
		(matcher) => {
			if (matcher.startsWith('dark:')) {
				return {
					matcher: matcher.slice(5),
					selector: (s) => `
            [data-theme="dark"] ${s},
            @media (prefers-color-scheme: dark) {
              [data-theme="system"] ${s}
            }
          `
				}
			}
		}
	]
})
