<script lang="ts">
import { tpm } from '$components/utils/transformPseudoModifiers'
import type { Props } from './index'

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

<svelte:element this={href ? 'a' : 'button'} class={classes} {...rest}>
	{@render children()}
</svelte:element>

<style global>
		@import 'daisyui/components/button.css';
</style>