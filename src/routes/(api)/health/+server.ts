import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = ({ url }) => {
	return new Response(null, { status: 204 })
}
