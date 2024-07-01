<script lang="ts">
	import { Style } from '$components/enums/style'
	import { Color } from '$components/enums/color'
	import { Size } from '$components/enums/size'
	import type { Snippet } from 'svelte'
	import type { BaseProps } from '$components/types/BaseProps'

	type BadgeProps = {
		style: Style
		color: Color
		size: Size
		class: string
		children: Snippet
	} & BaseProps

	let {
		style = Style.DEFAULT,
		color = Color.DEFAULT,
		size = Size.MEDIUM,
		children,
		class: classList
	} = $props() as Partial<BadgeProps>
</script>

<div
	class="badge {classList ?? ''}"
	class:badge-xs={size === Size.XSMALL}
	class:badge-sm={size === Size.SMALL}
	class:badge-md={size === Size.MEDIUM}
	class:badge-lg={size === Size.LARGE}
	class:badge-xl={size === Size.XLARGE}
	class:badge-primary={color === Color.PRIMARY}
	class:badge-secondary={color === Color.SECONDARY}
	class:badge-accent={color === Color.ACCENT}
	class:badge-neutral={color === Color.NEUTRAL}
	class:badge-success={color === Color.SUCCESS}
	class:badge-warning={color === Color.WARNING}
	class:badge-error={color === Color.ERROR}
	class:badge-info={color === Color.INFO}
	class:badge-outline={style === Style.BORDERED}
>
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	@import '../styles/components/badge.css';
</style>
