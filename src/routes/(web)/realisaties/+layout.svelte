<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		children?: Snippet
	}

	const { children }: Props = $props()
</script>

<div class="prose lg:prose-xl">
	{@render children?.()}
</div>
