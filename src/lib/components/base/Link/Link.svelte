<script lang="ts">
import type { Props } from '$components/base/Link'
import { tpm } from '$components/utils/transformPseudoModifiers'

let { href, color, behavior, children, class: classValue, ...rest }: Props = $props()

const classes = $derived(['link', tpm('link', color), tpm('link', behavior), classValue])
</script>

<a {href} class={classes} {...rest}>
	{@render children()}
</a>

<style global>
	@import 'daisyui/components/link.css';
</style>