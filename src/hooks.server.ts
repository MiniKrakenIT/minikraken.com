import type { Handle, HandleFetch, HandleServerError } from '@sveltejs/kit'
import { setSecurityHeaders } from '$lib/server/setSecurityHeaders'
import { logger } from '$lib/server/logger'

export const handleError: HandleServerError = ({ event, status, message, error }) => {
	const startTime = performance.now()
	const errorId = crypto.randomUUID()

	let ip = 'unknown'

	try {
		ip = event.getClientAddress()
	} catch (e) {
		//do nothing
	}

	if (status !== 404)
		logger.error({
			event: 'request',
			type: 'error',
			request: {
				status,
				method: event.request.method,
				route: event.url.pathname,
				params: event.params,
				dataRequest: event.isDataRequest,
				subRequest: event.isSubRequest
			},
			metrics: {
				duration: performance.now() - startTime,
				clientIp: ip
			},
			error: {
				errorId,
				message,
				stack: JSON.stringify(error)
			}
		})
	else
		logger.error({
			event: 'request',
			type: 'error',
			request: {
				status,
				route: event.url.pathname,
				params: event.params
			},
			metrics: {
				duration: performance.now() - startTime,
				clientIp: ip
			},
			error: {
				errorId,
				message
			}
		})

	return {
		status,
		message
	}
}

export const handleFetch: HandleFetch = async ({ request, fetch, event }) => {
	const startTime = performance.now()

	let ip = 'unknown'

	try {
		ip = event.getClientAddress()
	} catch (e) {
		//do nothing
	}

	const response = await fetch(request)

	logger.info({
		event: 'request',
		type: 'fetch',
		request: {
			status: response.status,
			method: event.request.method,
			route: event.url.pathname,
			params: event.params,
			dataRequest: event.isDataRequest,
			subRequest: event.isSubRequest
		},
		metrics: {
			duration: performance.now() - startTime,
			clientIp: ip
		}
	})

	return response
}

export const handle: Handle = async ({ event, resolve }) => {
	const startTime = performance.now()

	let ip = 'unknown'

	try {
		ip = event.getClientAddress()
	} catch (e) {
		//do nothing
	}

	const response = await resolve(event)

	setSecurityHeaders(response)

	if (response.status < 400 || (response.status > 599 && ip !== 'kubernetes')) {
		logger.info({
			event: 'request',
			type: 'handle',
			request: {
				status: response.status,
				method: event.request.method,
				route: event.url.pathname,
				params: event.params,
				dataRequest: event.isDataRequest,
				subRequest: event.isSubRequest
			},
			metrics: {
				duration: performance.now() - startTime,
				clientIp: ip
			}
		})
	}

	return response
}
