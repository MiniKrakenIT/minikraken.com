import js from '@eslint/js'
import ts from 'typescript-eslint'
import globals from 'globals'
import svelte from 'eslint-plugin-svelte'
import prettier from 'eslint-config-prettier'

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{ ignores: [
			'src/tooling/',
			'.deployment/',
			'.idea/',
			'.ssl/',
			'.svelte-kit/',
			'build/',
			'eslint.config.js',
			'tests/load/',
			'dist/'
		]
	}
]
