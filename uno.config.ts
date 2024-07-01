import { defineConfig, presetUno, transformerDirectives } from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte'
import { presetFluid } from 'unocss-preset-fluid'

export default defineConfig({
	safelist: ['prose'],
	presets: [
		presetUno({
			variablePrefix: 'tw-',
			dark: {
				light: '[data-theme="light"]',
				dark: '[data-theme="dark"]'
			}
		}),
		presetFluid({
			maxWidth: 1440,
			minWidth: 375,
			ranges: {
				'xs': [12, 16],
				'sm': [14, 18],
				'md': [18, 24],
				'lg': [22, 30],
				'xl': [26, 36],
				'2xl': [32, 44],
				'3xl': [40, 56],
				'4xl': [48, 64],
				'5xl': [56, 72],
				'6xl': [64, 80],
				'7xl': [72, 88],
				'8xl': [80, 96],
				'9xl': [88, 104],
				'10xl': [96, 112]
			}
		})
	],
	transformers: [transformerDirectives()],
	extractors: [extractorSvelte()],
	rules: [
		[
			/^min-h-dvh-(.*)$/,
			([, d]) => ({
				'min-height': `${d}dvh`
			})
		],
		[
			'shadow-sm',
			{
				'box-shadow':
					'0px 0.2px 0.2px var(--tw-shadow-color), 0px 0.7px 0.8px -0.8px var(--tw-shadow-color), 0px 1.8px 2px -1.7px var(--tw-shadow-color), 0px 4.3px 4.8px -2.5px var(--tw-shadow-color)'
			}
		],
		[
			'shadow-md',
			{
				'box-shadow':
					'0px 0.3px 0.5px hsl(var(--tw-shadow-color) / 0), 0px 1.8px 2.7px hsl(var(--tw-shadow-color) / 0.04), 0px 3.1px 4.7px hsl(var(--tw-shadow-color) / 0.08), 0px 4.5px 6.8px hsl(var(--tw-shadow-color) / 0.12), 0px 6.2px 9.3px hsl(var(--tw-shadow-color) / 0.16), 0px 8.5px 12.8px hsl(var(--tw-shadow-color) / 0.2), -0.1px 11.7px 17.6px hsl(var(--tw-shadow-color) / 0.24), -0.1px 16.1px 24.2px hsl(var(--tw-shadow-color) / 0.28)'
			}
		],
		[
			'shadow-lg',
			{
				'box-shadow':
					'0px 0.6px 0.8px var(--tw-shadow-color), 0px 2.5px 3.2px -0.5px var(--tw-shadow-color), 0px 5.6px 7.1px -1px var(--tw-shadow-color), 0.1px 12.6px 16px -1.5px var(--tw-shadow-color)'
			}
		],
		[
			'shadow-xl',
			{
				'box-shadow':
					'0px 0.2px 0.2px var(--tw-shadow-color), 0px 1.1px 1.2px -0.4px var(--tw-shadow-color), 0px 2px 2.3px -0.7px var(--tw-shadow-color), 0px 3.2px 3.6px -1.1px var(--tw-shadow-color), 0px 5.2px 5.9px -1.4px var(--tw-shadow-color), 0px 8.1px 9.1px -1.8px var(--tw-shadow-color), 0px 12.3px 13.8px -2.1px var(--tw-shadow-color), 0px 18.2px 20.5px -2.5px var(--tw-shadow-color)'
			}
		],
		[
			'shadow-2xl',
			{
				'box-shadow':
					'0px 0.4px 0.5px var(--tw-shadow-color), 0px 2.1px 2.4px -0.4px var(--tw-shadow-color), 0px 3.9px 4.4px -0.7px var(--tw-shadow-color), 0px 6.4px 7.2px -1.1px var(--tw-shadow-color), 0px 10.3px 11.6px -1.4px var(--tw-shadow-color), 0px 16.1px 18.1px -1.8px var(--tw-shadow-color), 0px 24.5px 27.6px -2.1px var(--tw-shadow-color), 0px 36px 40.5px -2.5px var(--tw-shadow-color)'
			}
		]
	],
	theme: {
		colors: {
			'transparent': 'transparent',
			'current': 'currentColor',

			'primary': 'var(--fallback-p,oklch(var(--p)/<alpha-value>))',
			'primary-content': 'var(--fallback-pc,oklch(var(--pc)/<alpha-value>))',

			'secondary': 'var(--fallback-s,oklch(var(--s)/<alpha-value>))',
			'secondary-content': 'var(--fallback-sc,oklch(var(--sc)/<alpha-value>))',

			'accent': 'var(--fallback-a,oklch(var(--a)/<alpha-value>))',
			'accent-content': 'var(--fallback-ac,oklch(var(--ac)/<alpha-value>))',

			'neutral': 'var(--fallback-n,oklch(var(--n)/<alpha-value>))',
			'neutral-content': 'var(--fallback-nc,oklch(var(--nc)/<alpha-value>))',

			'base-100': 'var(--fallback-b1,oklch(var(--b1)/<alpha-value>))',
			'base-200': 'var(--fallback-b2,oklch(var(--b2)/<alpha-value>))',
			'base-300': 'var(--fallback-b3,oklch(var(--b3)/<alpha-value>))',
			'base-content': 'var(--fallback-bc,oklch(var(--bc)/<alpha-value>))',

			'info': 'var(--fallback-in,oklch(var(--in)/<alpha-value>))',
			'info-content': 'var(--fallback-inc,oklch(var(--inc)/<alpha-value>))',

			'success': 'var(--fallback-su,oklch(var(--su)/<alpha-value>))',
			'success-content': 'var(--fallback-suc,oklch(var(--suc)/<alpha-value>))',

			'warning': 'var(--fallback-wa,oklch(var(--wa)/<alpha-value>))',
			'warning-content': 'var(--fallback-wac,oklch(var(--wac)/<alpha-value>))',

			'error': 'var(--fallback-er,oklch(var(--er)/<alpha-value>))',
			'error-content': 'var(--fallback-erc,oklch(var(--erc)/<alpha-value>))',

			'neutral-50': '#fafafa',
			'neutral-100': '#f5f5f5',
			'neutral-200': '#e5e5e5',
			'neutral-300': '#d4d4d4',
			'neutral-400': '#a3a3a3',
			'neutral-500': '#737373',
			'neutral-600': '#525252',
			'neutral-700': '#404040',
			'neutral-800': '#262626',
			'neutral-900': '#171717',
			'neutral-950': '#0a0a0a'
		},
		borderRadius: {
			badge: 'var(--rounded-badge, 1.9rem)',
			btn: 'var(--rounded-btn, 0.5rem)',
			box: 'var(--rounded-box, 1rem)'
		}
	}
})
