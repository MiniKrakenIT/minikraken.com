<script module lang="ts">
	import { Behavior } from '$components/properties'
	import { Color } from '$components/properties'
	import type { ResponsiveProperty } from '$components/types'
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
	export type Props = Omit<HTMLAnchorAttributes, 'color' | 'variant'> & {
		color?: ResponsiveProperty<LinkColors>
		behavior?: ResponsiveProperty<LinkBehaviors>
		children: Snippet
	}
</script>

<script lang="ts">
	import { tpm } from '$components/utils/transformPseudoModifiers'
	import { resolve } from '$app/paths'

	const { href, color, behavior, children, class: classValue, ...rest }: Props = $props()

	const classes = $derived(['link', tpm('link', color), tpm('link', behavior), classValue])
</script>

<a href={resolve(href)} class={classes} {...rest}>
	{@render children()}
</a>

<style global>
	@import 'daisyui/components/link.css';
</style>
