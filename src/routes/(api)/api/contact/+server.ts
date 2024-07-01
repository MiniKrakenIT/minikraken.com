import type { RequestHandler } from './$types'
import { env } from '$env/dynamic/private'
import { logger } from '$lib/server/logger'
import type { ContactData } from '$lib/types/ContactData'
import { RateLimiter } from '$lib/server/RateLimiter'

const sendToChat = async (data: ContactData) => {
	const url = env.GOOGLE_CHAT_WEBHOOK
	return await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		body: JSON.stringify({
			text: `name: ${data.name}\nemail: ${data.email}\nmessage: ${data.message}`
		})
	})
		.then((res) => res.ok)
		.catch((error: unknown) => {
			logger.error({
				event: 'api',
				type: 'action',
				action: 'contact',
				error: error
			})
			return false
		})
}

const rateLimiter = new RateLimiter(10)

const validateRequestData = (data: unknown): ContactData => {
	if (typeof data !== 'object' || data === null) {
		throw new Error('Invalid data')
	}

	const name = (data as Record<string, unknown>).name
	const email = (data as Record<string, unknown>).email
	const message = (data as Record<string, unknown>).message
	const startTime = (data as Record<string, unknown>).startTime

	if (
		typeof name !== 'string' ||
		typeof email !== 'string' ||
		typeof message !== 'string' ||
		typeof startTime !== 'number' ||
		name.length > 64 ||
		email.length > 100 ||
		message.length > 500 ||
		new Date().valueOf() >= startTime + 3000
	) {
		throw new Error('Invalid data')
	}

	return {
		name: name,
		email: email,
		message: message,
		startTime: startTime
	}
}

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	try {
		const ip = getClientAddress()
		if (rateLimiter.isLimited(ip)) {
			logger.warn({
				event: 'rate-limit',
				type: 'rejected',
				ip: ip,
				route: '/api/contact'
			})

			return new Response(null, { status: 429 })
		}
	} catch (e) {
		logger.error({
			event: 'GET-CLIENT-IP',
			type: 'error',
			error: e
		})
	}

	try {
		const requestData: unknown = await request.json()
		const data: ContactData = validateRequestData(requestData)

		return await sendToChat(data)
			.then((success) => {
				if (success) {
					logger.info({
						action: 'Contact',
						success: true
					})
					return new Response(
						JSON.stringify({
							success: true
						}),
						{ status: 200, headers: { 'content-type': 'application/json' } }
					)
				} else {
					return new Response(null, { status: 500 })
				}
			})
			.catch((error: unknown) => {
				logger.error({
					event: 'api',
					type: 'error',
					action: 'contact',
					error: error
				})
				return new Response(null, { status: 500 })
			})
	} catch (error) {
		logger.error({
			event: 'api',
			type: 'error',
			action: 'contact',
			error: error
		})
		return new Response(null, { status: 400 })
	}
}
