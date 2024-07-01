<script lang="ts">
	import { Color } from '$components/enums/color'
	import { Size } from '$components/enums/size'
	import { Style } from '$components/enums/style'

	import Loading from '$components/Loading.svelte'

	import type { BaseProps } from '$components/types/BaseProps'

	type ButtonProps = {
		href: string
		style: Style
		color: Color
		size: Size
		disabled: boolean
		loading: boolean
	} & BaseProps

	let {
		href = undefined,
		style = Style.DEFAULT,
		color = Color.DEFAULT,
		size = Size.MEDIUM,
		disabled = false,
		loading = false,
		class: classList,
		children,
		...restProps
	} = $props() as Partial<ButtonProps>
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	role={href ? 'link' : 'button'}
	{href}
	class="btn {classList ?? ''}"
	class:btn-outline={style === Style.BORDERED}
	class:btn-ghost={style === Style.GHOST}
	class:btn-xs={size === Size.XSMALL}
	class:btn-sm={size === Size.SMALL}
	class:btn-lg={size === Size.LARGE}
	class:btn-xl={size === Size.XLARGE}
	class:btn-primary={color === Color.PRIMARY}
	class:btn-secondary={color === Color.SECONDARY}
	class:btn-accent={color === Color.ACCENT}
	class:btn-info={color === Color.INFO}
	class:btn-success={color === Color.SUCCESS}
	class:btn-warning={color === Color.WARNING}
	class:btn-error={color === Color.ERROR}
	disabled={disabled ? true : undefined}
	{...restProps}
>
	{#if loading}
		<Loading />
	{/if}
	{#if children}
		{@render children()}
	{/if}
	{#if loading}
		...
	{/if}
</svelte:element>

<style>
	@import '$lib/styles/components/button.css';
</style>
