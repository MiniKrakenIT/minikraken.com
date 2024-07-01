<script lang="ts">
	import type { MenuItems } from '$lib/components/types/MenuItems'
	import { onDestroy, onMount } from 'svelte'
	import { browser } from '$app/environment'
	import { slide } from 'svelte/transition'

	let { menuItems = [], class: classList } = $props() as { menuItems: MenuItems; class: string }

	const dropdowns = {}

	const closeDropdowns = (e) => {
		for (const dropdown of Object.keys(dropdowns)) {
			if (dropdowns[dropdown].open) {
				if (!dropdowns[dropdown].contains(e.target)) {
					dropdowns[dropdown].open = false
				}
			}
		}
	}

	onMount(() => {
		if (browser) document.addEventListener('click', closeDropdowns)
	})

	onDestroy(() => {
		if (browser) document.removeEventListener('click', closeDropdowns)
	})
</script>

<ul transition:slide={{ duration: 75 }} class="menu navmenu {classList ?? ''}" aria-label="menu">
	{#each menuItems as item}
		{#if item.subItems}
			<li class="min-w-full lg:min-w-auto">
				<details bind:this={dropdowns[item.name]}>
					<summary>{item.name}</summary>
					<ul class="p-2">
						{#each item.subItems as subItem}
							<li>
								<a href={subItem.href} on:click class="!text-nowrap">
									{subItem.name}
								</a>
							</li>
						{/each}
					</ul>
				</details>
			</li>
		{:else}
			<li class="min-w-full lg:min-w-auto">
				<a href={item.href} on:click>{item.name}</a>
			</li>
		{/if}
	{/each}
</ul>

<style>
	@import '$lib/styles/components/menu.css';

	.navmenu {
		@apply px-1 rounded-xl absolute left-0 top-19 z-10 w-full bg-transparent;
	}

	@media (max-width: 1023px) {
		.menu :where(li:not(.menu-title) > *:not(ul, details, .menu-title)),
		.menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
			border-radius: var(--rounded-btn, 0.5rem);
			padding-left: 1.5rem;
			padding-right: 1.5rem;
			padding-top: 0.75rem;
			padding-bottom: 0.75rem;
			font-size: 1.125rem;
			line-height: 1.75rem;
		}
		.menu .menu-title {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
			padding-top: 0.75rem;
			padding-bottom: 0.75rem;
		}
		.navmenu {
			@apply bg-base-100/80 shadow-md;
			backdrop-filter: blur(8px);
			-webkit-backdrop-filter: blur(8px);
		}
	}

	@media (min-width: 1024px) {
		.navmenu {
			@apply relative shadow-none top-0 flex-inline flex-row bg-transparent;
		}
		.navmenu > li:not(.menu-title) > details > ul {
			margin-inline-start: 0;
			margin-top: 1rem;
			padding-top: 0.5rem;
			padding-bottom: 0.5rem;
			padding-inline-end: 0.5rem;
		}
		.navmenu > li > details > ul:before {
			content: none;
		}
		:where(.navmenu > li:not(.menu-title) > details > ul) {
			@apply rounded-2xl bg-base-100/80 shadow-md top-11;
			backdrop-filter: blur(8px);
			-webkit-backdrop-filter: blur(8px);
		}
		.navmenu > li:not(.menu-title) > details > ul {
			position: absolute;
		}
	}
</style>
