import type { Snippet } from 'svelte'

export type BaseProps = {
	class: string
	children: Snippet
	[key: string]: unknown
}
