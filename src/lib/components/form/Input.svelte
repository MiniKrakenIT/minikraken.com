<script lang="ts">
	import { Size } from '$components/enums/size'
	import { Color } from '$components/enums/color'
	import { Style } from '$components/enums/style'
	import type { BaseProps } from '$components/types/BaseProps'

	type InputProps = {
		value: string
		disabled: boolean
		style: Style
		color: Color
		size: Size
	} & BaseProps

	let {
		value = $bindable(''),
		disabled = false,
		style = Style.DEFAULT,
		color = Color.DEFAULT,
		size = Size.MEDIUM,
		class: classList,
		...restProps
	} = $props() as Partial<InputProps>
</script>

<input
	class="input {classList ?? ''}"
	class:input-disabled={disabled}
	class:input-bordered={style === Style.BORDERED}
	class:input-xs={size === Size.XSMALL}
	class:input-sm={size === Size.SMALL}
	class:input-lg={size === Size.LARGE}
	class:input-xl={size === Size.XLARGE}
	class:input-primary={color === Color.PRIMARY}
	class:input-secondary={color === Color.SECONDARY}
	class:input-accent={color === Color.ACCENT}
	class:input-info={color === Color.INFO}
	class:input-success={color === Color.SUCCESS}
	class:input-warning={color === Color.WARNING}
	class:input-error={color === Color.ERROR}
	{...restProps}
	bind:value
/>

<style>
	@import '$lib/styles/components/input.css';
</style>
