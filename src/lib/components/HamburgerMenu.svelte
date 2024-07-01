<script lang="ts">
	import '$lib/styles/components/menu.css'
	import '$lib/styles/components/dropdown.css'
	import type { MenuItems } from '$lib/components/types/MenuItems'
	import Button from '$components/form/Button.svelte'
	import { Style } from '$components/enums/style'
	import IconHamburgerMenu from '$components/icons/IconHamburgerMenu.svelte'

	type HamburgerMenuProps = {
		list: Array<MenuItems>
		class: string
	}

	let { list = $bindable([]), class: classList } = $props() as Partial<HamburgerMenuProps>
</script>

<nav class="dropdown lg:hidden {classList ?? ''}" role="navigation">
	<Button tabindex="0" style={Style.GHOST} aria-label="Open Menu">
		<IconHamburgerMenu />
	</Button>
	<ul
		tabindex="0"
		role="menu"
		class="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
	>
		{#each list as item}
			<li role="menuitem">
				<a href={item.href}>
					{item.name}
				</a>
				{#if item.subItems}
					<ul class="menu p-2" role="list">
						{#each item.subItems as subItem}
							<li role="listitem">
								<a href={item.href + subItem.href}>
									{subItem.name}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
