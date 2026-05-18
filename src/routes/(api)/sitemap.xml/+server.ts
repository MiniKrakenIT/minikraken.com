import type { RequestHandler } from '@sveltejs/kit'
import * as sitemap from 'super-sitemap'

export const prerender = true
//todo: remove this when we have a cms. And make sure it loads all routes that are available from the cms

export const GET: RequestHandler = async () => {
	return await sitemap.response({
		origin: 'https://minikraken.com',
		excludeRoutePatterns: [],
		paramValues: {},
		headers: {},
		additionalPaths: [],
		defaultChangefreq: 'daily',
		defaultPriority: 0.7,
		sort: 'alpha'
	})
}
