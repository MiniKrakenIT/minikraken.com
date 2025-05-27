<script lang="ts">
import { tpm } from '$components/utils/transformPseudoModifiers'
import { fade } from 'svelte/transition'

let { size, show = true, class: classValue, ...rest }: Props = $props()

const classes = $derived([
	'loading loading-spinner',
	tpm('loading', size),
	classValue
])
</script>
<script module lang="ts">
	import { Size } from '$components/props'
	import type { ResponsiveProp } from '$components/types'

	/**
	 * @example
	 * const size: Size = 'md'
	 * const size: Size = { base: 'md' }
	 * const size: Size = { base: 'md', lg: 'xl' }
	 */
	export type LoadingSizes = Size.xs | Size.sm | Size.md | Size.lg | Size.xl

	export type Props = {
		show?: boolean,
		class?: string,
		size?: ResponsiveProp<LoadingSizes>,
	}
</script>

{#if show}
	<span class={classes} transition:fade {...rest}></span>
{/if}

<style global>
	@import 'daisyui/components/loading.css';
</style>