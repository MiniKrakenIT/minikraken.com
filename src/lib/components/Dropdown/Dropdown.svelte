<script lang="ts">
import { Alignment, type ListItems, Modifier, Placement } from '$components/Dropdown/Dropdown'
import { nanoid } from 'nanoid/non-secure'
import type { Snippet } from 'svelte'

type Props = {
	id?: string
	modifier?: Modifier
	placement?: Placement
	alignment?: Alignment
	class?: string
	children: Snippet
}

let {
	id = nanoid(5),
	modifier,
	placement,
	alignment,
	class: styleClasses,
	children,
	dropdown,
	...rest
}: Props = $props()

let list: ListItems = [
	{
		text: 'Item 1',
		href: '#'
	},
	{
		text: 'Item 2',
		href: '#'
	},
	{
		text: 'Item 3',
		clickHandler: () => {
			console.log('Item 3 clicked')
		}
	},
	{
		text: 'Item 4',
		href: '#'
	},
	{
		text: 'Item 5',
		href: '#'
	}
]
</script>

{#snippet listItemButton(item)}
	<button onclick={item.clickHandler}>
		{item.name}
	</button>
{/snippet}

{#snippet listItem(item)}
	<a href={item.href}>
		{item.name}
	</a>
{/snippet}

<div popovertarget={id} style="anchor-name:--anchor-1">
	{@render children()}
</div>

<ul class="dropdown menu w-52 rounded-box bg-base-100 shadow-sm" popover="" {id} style="position-anchor:--anchor-1">
	{#each list as item}
		<li>
			{#if item.href}
				{@render listItem(item)}
			{:else}
				{@render listItemButton(item)}
			{/if}
		</li>
	{/each}
</ul>

<style global>
	@import 'daisyui/components/dropdown.css';
</style>