<script lang="ts">
	import { Color } from '$components/enums/color'
	import type { Snippet } from 'svelte'
	import type { BaseProps } from '$components/types/BaseProps'

	type LinkProps = {
		color: Color
		hover: boolean
		href: string | undefined
		external: boolean
	} & BaseProps

	let {
		color = Color.DEFAULT,
		hover = false,
		href = undefined,
		external = false,
		class: classList,
		children,
		...restProps
	} = $props() as Partial<LinkProps>
</script>

<a
	class="link min-w-12 leading-12 md:leading-normal {classList ?? ''}"
	class:link-primary={color === Color.PRIMARY}
	class:link-secondary={color === Color.SECONDARY}
	class:link-accent={color === Color.ACCENT}
	class:link-neutral={color === Color.NEUTRAL}
	class:link-success={color === Color.SUCCESS}
	class:link-error={color === Color.ERROR}
	class:link-warning={color === Color.WARNING}
	class:link-info={color === Color.INFO}
	class:link-hover={hover}
	{href}
	target={external ? '_blank' : undefined}
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</a>

<style>
	@import '$lib/styles/components/link.css';
</style>
