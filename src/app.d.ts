// See https://svelte.dev/docs/kit/types#app.d.ts
/** biome-ignore-all lint/style/noNamespace: required by svelte kit */
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			message: string
			errorId: string
		}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {}
