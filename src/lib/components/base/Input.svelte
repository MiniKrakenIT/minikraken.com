<script lang="ts">
import { tpm } from '$components/utils/transformPseudoModifiers'

let {
	color,
	size,
	variant,
	validator = true,
	errors = [],
	value = $bindable(),
	prefix,
	suffix,
	class: classValue,
	...rest
}: Props = $props()

const classes = $derived([
	'input',
	validator && 'validator',
	tpm('input', color),
	tpm('input', size),
	tpm('input', variant),
	classValue
])
</script>
<script module lang="ts">
	import type { Color, Size, Variant } from '$components/props'
	import type { ResponsiveProp } from '$components/types'
	import type { Snippet } from 'svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'

	/**
	 * @example
	 * color={ Color.primary }
	 * color={ base: Color.primary }
	 * color={ base: Color.primary, md: Color.secondary }
	 */
	export type InputColors =
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
	 * size={ Size.md }
	 * size={ { base: Size.md } }
	 * size={ { base: Size.md, lg: Size.xl } }
	 */
	export type InputSizes = Size.xs | Size.sm | Size.md | Size.lg | Size.xl

	/**
	 * @example
	 * style={ Variant.outline }
	 * style={ base: Variant.outline }
	 * style={ base: Variant.outline, md: Variant.ghost }
	 */
	export type InputVariants = Variant.ghost

	export type Props = {
		color?: ResponsiveProp<InputColors> | InputColors
		size?: ResponsiveProp<InputSizes>
		variant?: ResponsiveProp<InputVariants>
		validator?: boolean
		errors?: string[]
		prefix?: Snippet
		suffix?: Snippet
	} & Omit<HTMLInputAttributes, 'color' | 'size' | 'variant'>
</script>

<label class={classes}>
	{@render prefix?.()}
	<input type="text" {value} aria-invalid={errors.length > 0 ? 'true' : undefined} {...rest}/>
	{@render suffix?.()}
</label>
<p class="validator-hint">
		{#each errors as error}
			<li>
			{error}
			</li>
		{/each}
</p>

<style global>
		@import 'daisyui/components/input.css';
		@import 'daisyui/components/validator.css';
</style>