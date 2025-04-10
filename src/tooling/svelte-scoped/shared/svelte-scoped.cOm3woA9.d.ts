import { UserConfig, UnoGenerator } from '@unocss/core'
import { LoadConfigResult } from '@unocss/config'

interface UnocssSveltePreprocessOptions extends TransformClassesOptions, TransformApplyOptions {
	/**
	 * UnoCSS config or path to config file. If not provided, will load unocss.config.ts/js. It's recommended to use the separate config file if you are having trouble with the UnoCSS extension in VSCode.
	 */
	configOrPath?: UserConfig | string
}

interface TransformClassesOptions {
	/**
	 * Prefix for compiled class names. Distinct between `@unocss/svelte-scoped/vite` and `@unocss/svelte-scoped/preprocessor` to avoid bugs when using a component library built with `@unocss/svelte-scoped/preprocessor` in a project using `@unocss/svelte-scoped/vite`.
	 * @default 'uno-' // `@unocss/svelte-scoped/vite`
	 * @default 'usp-' // `@unocss/svelte-scoped/preprocessor`
	 */
	classPrefix?: string
	/**
	 * Add hash and combine recognized tokens (optimal for production); set false in dev mode for easy dev tools toggling to allow for design adjustments in the browser
	 * @default true
	 */
	combine?: boolean
	/**
	 * Used to generate hash for compiled class names
	 */
	hashFn?: (str: string) => string
}

interface TransformApplyOptions {
	/**
	 * Transform CSS custom properties (recommended for CSS syntax compatibility) or @apply directives.
	 *
	 * Pass `false` to disable.
	 *
	 * @default ['--at-apply', '@apply']
	 */
	applyVariables?: string | string[] | false
}

interface SvelteScopedContext {
	uno: UnoGenerator
	ready: Promise<LoadConfigResult<UserConfig>>
}

export type {
	SvelteScopedContext as S,
	TransformClassesOptions as T,
	UnocssSveltePreprocessOptions as U,
	TransformApplyOptions as a
}
