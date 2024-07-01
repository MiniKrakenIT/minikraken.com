export const setSecurityHeaders = (response: Response) => {
	response.headers.append('Cross-Origin-Opener-Policy', 'same-origin')
	response.headers.append('Cross-Origin-Resource-Policy', 'same-origin')
	response.headers.append('Origin-Agent-Cluster', '?1')
	response.headers.append('Referrer-Policy', 'no-referrer')
	response.headers.append(
		'Strict-Transport-Security',
		'max-age=15552000; includeSubDomains; preload'
	)
	response.headers.append('X-DNS-Prefetch-Control', 'off')
	response.headers.append('X-Download-Options', 'noopen')
	response.headers.append('X-Frame-Options', 'SAMEORIGIN')
	response.headers.append('X-Permitted-Cross-Domain-Policies', 'none')
	response.headers.append('X-XSS-Protection', '0')
	response.headers.append('X-Content-Type-Options', 'nosniff')
}
