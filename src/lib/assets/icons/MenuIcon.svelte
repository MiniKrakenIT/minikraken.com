<script lang="ts">
import { animate, hover } from 'motion'

type Props = {
	open: boolean
	[key: string]: unknown
}
let { open: isOpen, ...rest }: Props = $props()
const className = (Math.random() + 1).toString(36).substring(7)

hover('.box', (element) => {
	animate(element, { scale: 1.3 }, { type: 'spring' })

	return () => animate(element, { scale: 1 }, { type: 'spring' })
})
</script>

<div class="box"></div>

<svg class="box" width="37px" height="37px" stroke-width="2.4" viewBox="0 0 24 24" fill="none" color="#000000" xmlns="http://www.w3.org/2000/svg" {...rest}>
	<path d="M3 5H11" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path>
	<path d="M3 12H16" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path>
	<path d="M3 19H21" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>

<style>
    .box {
        width: 100px;
        height: 100px;
        background-color: #9911ff;
        border-radius: 10px;
    }
</style>