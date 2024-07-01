import { logger } from '$lib/server/logger'

export class RateLimiter {
	private ipMap: Map<string, { timestamp: number; timeout: Timer }> = new Map()
	private readonly limit: number

	constructor(rps: number) {
		this.limit = rps
	}

	isLimited(ip: string) {
		const now = Date.now()
		const item = this.ipMap.get(ip)

		if (item) {
			clearTimeout(item.timeout)

			const last = item.timestamp ?? 0
			const diff = now - last

			this.ipMap.set(ip, {
				timestamp: now,
				timeout: setTimeout(() => {
					this.ipMap.delete(ip)
				}, 10000)
			})

			return diff < 1000 / this.limit
		} else {
			this.ipMap.set(ip, {
				timestamp: now,
				timeout: setTimeout(() => {
					this.ipMap.delete(ip)
				}, 10000)
			})

			return false
		}
	}
}
