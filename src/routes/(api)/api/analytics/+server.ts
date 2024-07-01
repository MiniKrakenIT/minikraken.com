import type { RequestHandler } from './$types'
import { logger } from '$lib/server/logger'
import { RateLimiter } from '$lib/server/RateLimiter'

type WebVitalData = {
	// The page URL from `location.href`.
	url?: string

	// The referrer value from `document.referrer`.
	// It's useful to detect unique visits, without cookies or fingerprinting
	// https://docs.simpleanalytics.com/uniques
	referrer?: string

	// The value of `navigator.userAgent` for browser detection
	userAgent?: string

	// An approximate amount of device memory in gigabytes:
	// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory
	memory?: number

	// The number of CPU cores:
	// https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency
	cpus?: number

	// The network information:
	// https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation
	connection?: {
		effectiveType: string
		rtt: number
		downlink: number
	}
}

const isValidWebVitalData = (data: unknown): data is WebVitalData => {
	if (typeof data !== 'object' || data === null) return false

	const { url, referrer, userAgent, memory, cpus, connection } = data as Record<string, unknown>

	if (url && typeof url !== 'string') return false
	if (referrer && typeof referrer !== 'string') return false
	if (userAgent && typeof userAgent !== 'string') return false
	if (memory && typeof memory !== 'number') return false
	if (cpus && typeof cpus !== 'number') return false

	if (connection) {
		if (typeof connection !== 'object') return false

		const { effectiveType, rtt, downlink } = connection as Record<string, unknown>

		if (typeof effectiveType !== 'string') return false
		if (typeof rtt !== 'number') return false
		if (typeof downlink !== 'number') return false
	}

	return true
}

const rateLimiter = new RateLimiter(1)

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	try {
		const ip = getClientAddress()
		if (rateLimiter.isLimited(ip)) {
			logger.warn({
				event: 'rate-limit',
				type: 'rejected',
				ip: ip,
				route: '/api/analytics'
			})

			return new Response(null, { status: 429 })
		}
	} catch (e) {
		return new Response(null, { status: 500 })
	}

	try {
		const data: unknown = await request.json()

		if (!isValidWebVitalData(data)) {
			logger.warn({
				event: 'web-vitals',
				type: 'invalid-data',
				data: data
			})
			return new Response(null, { status: 400 })
		}

		logger.info({
			event: 'web-vitals',
			metrics: data
		})

		return new Response(null, { status: 204 })
	} catch (e) {
		logger.error({
			event: 'web-vitals',
			type: 'error',
			error: e
		})

		return new Response(null, { status: 500 })
	}
}
