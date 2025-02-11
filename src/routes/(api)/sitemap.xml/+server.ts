import { type RequestHandler } from '@sveltejs/kit'
import * as sitemap from 'super-sitemap'

export const prerender = true

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
