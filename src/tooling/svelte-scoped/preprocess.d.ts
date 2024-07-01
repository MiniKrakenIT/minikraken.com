import { PreprocessorGroup } from 'svelte/types/compiler/preprocess'
import {
	U as UnocssSveltePreprocessOptions,
	S as SvelteScopedContext
} from './shared/svelte-scoped.cOm3woA9.js'
export {
	a as TransformApplyOptions,
	T as TransformClassesOptions
} from './shared/svelte-scoped.cOm3woA9.js'
import '@unocss/core'
import '@unocss/config'

declare function UnocssSveltePreprocess(
	options?: UnocssSveltePreprocessOptions,
	unoContextFromVite?: SvelteScopedContext,
	isViteBuild?: () => boolean
): PreprocessorGroup

export { SvelteScopedContext, UnocssSveltePreprocessOptions, UnocssSveltePreprocess as default }
