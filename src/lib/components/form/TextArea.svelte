<script lang="ts">
	import '$lib/styles/components/textarea.css'

	import { Size } from '$components/enums/size'
	import { Color } from '$components/enums/color'
	import { Style } from '$components/enums/style'
	import type { BaseProps } from '$components/types/BaseProps'

	type TextAreaProps = {
		value: string
		style: Style
		color: Color
		size: Size
		disabled: boolean
	} & BaseProps

	let {
		value = $bindable(''),
		style = Style.DEFAULT,
		color = Color.DEFAULT,
		size = Size.MEDIUM,
		disabled = false,
		class: classList,
		...restProps
	} = $props() as Partial<TextAreaProps>
</script>

<textarea
	class="textarea {classList ?? ''}"
	class:textarea-disabled={disabled}
	class:textarea-bordered={style === Style.BORDERED}
	class:textarea-xs={size === Size.XSMALL}
	class:textarea-sm={size === Size.SMALL}
	class:textarea-md={size === Size.MEDIUM}
	class:textarea-lg={size === Size.LARGE}
	class:textarea-xl={size === Size.XLARGE}
	class:textarea-primary={color === Color.PRIMARY}
	class:textarea-secondary={color === Color.SECONDARY}
	class:textarea-accent={color === Color.ACCENT}
	class:textarea-info={color === Color.INFO}
	class:textarea-success={color === Color.SUCCESS}
	class:textarea-warning={color === Color.WARNING}
	class:textarea-error={color === Color.ERROR}
	{...restProps}
	bind:value
></textarea>
