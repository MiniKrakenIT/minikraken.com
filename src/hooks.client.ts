import type { HandleClientError } from '@sveltejs/kit'
/*import posthog from 'posthog-js'

posthog.init('<posthog-key>', {
	api_host: 'https://eu.i.posthog.com',
	person_profiles: 'always', // or 'always' to create profiles for anonymous users as well,
	disable_session_recording: true
})

posthog.capture('page-loaded', { property: 'value' })*/

//export const init: ClientInit = () => {}

export const handleError: HandleClientError = async ({ message }) => {
	const errorId = crypto.randomUUID()

	return {
		message: message ?? 'Whoops!',
		errorId: errorId
	}
}
