<script lang="ts">
	import { Style } from '$components/enums/style'
	import { Color } from '$components/enums/color'
	import { Size } from '$components/enums/size'
	import Badge from '$components/Badge.svelte'
	import type { BaseProps } from '$components/types/BaseProps'

	type IndicatorProps = {
		style: Style
		color: Color
		size: Size
	} & BaseProps

	let {
		style = Style.DEFAULT,
		color = Color.DEFAULT,
		size = Size.MEDIUM,
		class: classList,
		children,
		...restProps
	} = $props()
</script>

<div class="relative {classList ?? ''}" {...restProps}>
	<span class="absolute -right-1 -top-2 translate-x-1/2 -translate-y-1/2">
		<Badge class="!duration-500" {color} {size} {style}></Badge>
	</span>
	{@render children()}
</div>
