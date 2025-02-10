import { Behavior } from '$components/props'
import { Color } from '$components/props'
import type { ResponsiveProp } from '$components/types'
import type { Snippet } from 'svelte'
import type { HTMLAnchorAttributes } from 'svelte/elements'

export type LinkColors =
	| Color.primary
	| Color.secondary
	| Color.accent
	| Color.info
	| Color.success
	| Color.warning
	| Color.error
	| Color.neutral

export type LinkBehaviors = Behavior.hover

// Props that infer the tag type from the presence of `href`
export type Props = Omit<HTMLAnchorAttributes, color | variant> & {
	color?: ResponsiveProp<LinkColors>
	behavior?: ResponsiveProp<LinkBehaviors>
	children: Snippet
}
