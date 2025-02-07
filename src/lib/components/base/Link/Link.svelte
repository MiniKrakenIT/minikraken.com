<script lang="ts">
import { Color, type Style } from '$components/Link/Link'
import type { Snippet } from 'svelte'
import type { HTMLAnchorAttributes } from 'svelte/elements'

type Props = {
	color?: Color
	style?: Style
	href: string
	children: Snippet
} & HTMLAnchorAttributes

let { href, color, style, children, class: classValue, ...rest }: Props = $props()

const classes = $derived(['link', color && `link-${color}`, style && `link-${style}`, classValue])
</script>

<a {href} class={classes} {...rest}>
	{@render children()}
</a>

<style global>
	@import 'daisyui/components/link.css';
</style>