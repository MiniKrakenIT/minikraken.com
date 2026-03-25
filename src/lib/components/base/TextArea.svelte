<script module lang="ts">
	import type { Color, Size, Variant } from '$components/properties'
	import type { ResponsiveProperty } from '$components/types'
	import type { HTMLTextareaAttributes } from 'svelte/elements'

	/**
	 * @example
	 * color={ Color.primary }
	 * color={ base: Color.primary }
	 * color={ base: Color.primary, md: Color.secondary }
	 */
	export type TextAreaColors =
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
	export type TextAreaSizes = Size.xs | Size.sm | Size.md | Size.lg | Size.xl

	/**
	 * @example
	 * style={ Variant.outline }
	 * style={ base: Variant.outline }
	 * style={ base: Variant.outline, md: Variant.ghost }
	 */
	export type TextAreaVariants = Variant.ghost

	export type Props = {
		color?: ResponsiveProperty<TextAreaColors> | TextAreaColors
		size?: ResponsiveProperty<TextAreaSizes>
		variant?: ResponsiveProperty<TextAreaVariants>
		validator?: boolean
		resizable?: boolean
		errors?: string[]
	} & Omit<HTMLTextareaAttributes, 'color' | 'size' | 'variant'>
</script>

<script lang="ts">
	import { tpm } from '$components/utils/transformPseudoModifiers'

	let {
		color,
		size,
		variant,
		validator = true,
		errors = [],
		value = $bindable(),
		class: classValue,
		...rest
	}: Props = $props()

	const classes = $derived([
		'textarea',
		validator && 'validator',
		tpm('textarea', color),
		tpm('textarea', size),
		tpm('textarea', variant),
		classValue
	])
</script>

<textarea {value} aria-invalid={errors.length > 0 ? 'true' : undefined} class={classes} {...rest}
></textarea>
<p class="validator-hint">
	{#each errors as error}
		<li>
			{error}
		</li>
	{/each}
</p>

<style global>
	@import 'daisyui/components/textarea.css';
	@import 'daisyui/components/validator.css';
</style>
