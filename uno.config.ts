import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
	// ...UnoCSS options
	presets: [
		presetUno({
			variablePrefix: 'tw-',
			dark: {
				light: '[data-theme="light"]',
				dark: '[data-theme="dark"]'
			}
		})
	]
})
