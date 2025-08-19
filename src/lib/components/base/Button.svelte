<script lang="ts">
import { tpm } from '$components/utils/transformPseudoModifiers'

let { color, size, variant, shape, children, class: classValue, href, ...rest }: Props = $props()

const classes = $derived([
	'btn',
	tpm('btn', color),
	tpm('btn', size),
	tpm('btn', variant),
	tpm('btn', shape),
	classValue
])
</script>
<script module lang="ts">
import type { Color, Shape, Size, Variant } from '$components/props'
import type { ResponsiveProp } from '$components/types'
import type { Snippet } from 'svelte'
import type {
	HTMLAnchorAttributes,
	HTMLButtonAttributes
} from 'svelte/elements'

/**
 * @example
 * color={ Color.primary }
 * color={ base: Color.primary }
 * color={ base: Color.primary, md: Color.secondary }
 */
export type ButtonColors =
	| Color.primary
	| Color.secondary
	| Color.accent
	| Color.info
	| Color.success
	| Color.warning
	| Color.error
	| Color.neutral

/**
 * @example
 * const size: Size = 'md'
 * const size: Size = { base: 'md' }
 * const size: Size = { base: 'md', lg: 'xl' }
 */
export type ButtonSizes = Size.xs | Size.sm | Size.md | Size.lg | Size.xl

/**
 * @example
 * style='outline'
 * style={ base: 'outline' }
 * style={ base: 'outline', md: 'soft' }
 */
export type ButtonVariants =
	| Variant.outline
	| Variant.soft
	| Variant.ghost
	| Variant.link
	| Variant.active
	| Variant.disabled

/**
 * @example
 * modifier='wide'
 * modifier={ base: 'wide' }
 * modifier={ base: 'wide', md: 'square' }
 */
export type ButtonShapes =
	| Shape.wide
	| Shape.block
	| Shape.square
	| Shape.circle

// Props that infer the tag type from the presence of `href`
export type Props = (
	| Omit<HTMLAnchorAttributes, 'color' | 'size' | 'style' | 'shape'>
	| Omit<HTMLButtonAttributes, 'color' | 'size' | 'style' | 'shape'>
) & {
	color?: ResponsiveProp<ButtonColors> | ButtonColors
	size?: ResponsiveProp<ButtonSizes>
	variant?: ResponsiveProp<ButtonVariants>
	shape?: ResponsiveProp<ButtonShapes>
	href?: string | null
	children: Snippet
}
</script>

<svelte:element this={href ? 'a' : 'button'} class={classes} {...rest}>
	{@render children()}
</svelte:element>

<style global>
		@import 'daisyui/components/button.css';
</style>