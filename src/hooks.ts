import { deLocalizeUrl } from '$lib/i18n/paraglide/runtime'
import type { Reroute } from '@sveltejs/kit'
import { measure } from '$lib/utils/benchmark/measure'

export const reroute: Reroute = (request) => {
	return measure('measure delocalizer', () => deLocalizeUrl(request.url))().pathname
}
