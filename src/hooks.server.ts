import { type Handle, type HandleServerError } from '@sveltejs/kit'
import { paraglideMiddleware } from '$lib/i18n/paraglide/server'
import { nanoid } from 'nanoid'
import { measure } from '$lib/utils/benchmark/measure'
import { baseLocale } from '$paraglide/runtime'

//todo: adapt all pages to the translations
export const handle: Handle = measure('measure handle', ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		event.request = localizedRequest

		console.log(event.request.url)

		event.locals = {
			i18n: {
				locale: locale,
				baseLocale
			},
			requestInfo: {
				id: nanoid()
			}
		}

		return resolve(event, {
			transformPageChunk: ({ html }) => {
				return measure('replace lang in html:', () => html.replace('%lang%', locale))()
			}
		})
	})
)

export const handleError: HandleServerError = async ({ message }) => {
	return {
		message,
		errorId: nanoid()
	}
}

/*export const handleValidationError: HandleValidationError = () => {
	//todo: add logging for errors
	return {
		errorId: nanoid(),
		message:
	}
}*/
