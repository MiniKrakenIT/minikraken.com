<script lang="ts">
	import '$lib/styles/components/alert.css'
	import { Color } from '$components/enums/color'
	//import { Style } from '$components/enums/style'

	import { slide } from 'svelte/transition'
	import type { BaseProps } from '$components/types/BaseProps'

	type AlertProps = {
		color?: Color
		//style?: Style
	} & BaseProps

	let { color = Color.DEFAULT, /*style = Style.DEFAULT,*/ children } =
		$props() as Partial<AlertProps>
</script>

<div
	role="alert"
	class="alert"
	class:alert-success={color === Color.SUCCESS}
	class:alert-error={color === Color.ERROR}
	class:alert-warning={color === Color.WARNING}
	class:alert-info={color === Color.INFO}
	transition:slide={{ axis: 'y' }}
>
	{#if children}
		{@render children()}
	{/if}
</div>
