<script lang="ts">
import {
	Alignment,
	type ListAnchor,
	type ListButton,
	type ListItems,
	Modifier,
	Placement,
	isListAnchor
} from '$components/Dropdown/Dropdown'
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

{#snippet listItemButton(item: ListButton)}
	<button onclick={item.clickHandler}>
		{item.text}
	</button>
{/snippet}

{#snippet listItemAnchor(item: ListAnchor)}
	<a href={item.href}>
		{item.text}
	</a>
{/snippet}

<div data-popovertarget={id} style="anchor-name:--anchor-1">
	{@render children()}
</div>

<ul class="dropdown menu w-52 rounded-box bg-base-100 shadow-sm" data-popover="{id}" style="position-anchor:--anchor-1">
	{#each list as item}
		<li>
			{#if isListAnchor(item)}
				{@render listItemAnchor(item)}
			{:else}
				{@render listItemButton(item)}
			{/if}
		</li>
	{/each}
</ul>

<style global>
	@import 'daisyui/components/dropdown.css';
</style>