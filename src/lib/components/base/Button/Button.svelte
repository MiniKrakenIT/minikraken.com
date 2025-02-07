<script lang="ts">
import { tpm } from '$components/utils/transformPseudoModifiers'
import type { Props } from './index'

let { color, size, style, shape, children, class: classValue, href, ...rest }: Props = $props()

const classes = $derived([
	'btn',
	tpm('btn', color),
	tpm('btn', size),
	tpm('btn', style),
	tpm('btn', shape),
	classValue
])
</script>

<svelte:element this={href ? 'a' : 'button'} class={classes} {...rest}>
	{@render children?.()}
</svelte:element>

<style>
	@import 'daisyui/components/button.css';
</style>