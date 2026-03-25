import { deLocalizeUrl } from '$lib/i18n/paraglide/runtime'

export const reroute = (request) => deLocalizeUrl(request.url).pathname
