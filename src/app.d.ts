// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

import type { Locale, baseLocale } from '$paraglide/runtime'

declare global {
	namespace App {
		interface Error {
			message: string
			errorId: string
		}
		interface Locals {
			i18n: { locale: Locale; baseLocale: baseLocale }
			requestInfo: {
				id: string
			}
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

// eslint-disable-next-line unicorn/require-module-specifiers
export {}
