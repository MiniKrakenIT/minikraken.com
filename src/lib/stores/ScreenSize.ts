import { type Writable, writable } from 'svelte/store'
import { Screen } from '$lib/enum/Screen'

export const screenSize: Writable<Screen | undefined> = writable(undefined)
