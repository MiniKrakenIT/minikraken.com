import { type Locale, baseLocale } from '$paraglide/runtime'
import type { ResolvedPathname } from '$app/types'

export class LocaleHelper {
	constructor(public readonly locale: Locale) {}

	localize = <const T extends ResolvedPathname>(href: T, options?: { locale: Locale }): T => {
		const locale = options?.locale ?? this.locale

		return locale === baseLocale ? href : (`/${locale}${href}` as T)
	}
}
