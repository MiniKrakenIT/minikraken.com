import type { ClientInit, HandleClientError } from '@sveltejs/kit'

export const init: ClientInit = () => {}
export const handleError: HandleClientError = async ({ message }) => {
	const errorId = crypto.randomUUID()

	return {
		message: message ?? 'Whoops!',
		errorId: errorId
	}
}
